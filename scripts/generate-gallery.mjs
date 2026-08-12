// Regenerates src/lib/gallery.ts from the contents of the "Event Photos" folder.
//
// Run it after adding, removing, or renaming any photo folder:
//   npm run gallery
//
// Every image inside "Event Photos/<year>/<event folder>/" is picked up, so no
// photo can be silently missed. Files are sorted naturally ("2.jpg" before
// "10.jpg", "45.jpg" before "45-1.jpg", numbered shots before the V-series
// before the _AAA series) so the photographer's numbering and lettering is
// preserved on the page.

import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PHOTOS_DIR = join(ROOT, "Event Photos");
const OUT_FILE = join(ROOT, "src", "lib", "gallery.ts");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

// Display titles for folders whose on-disk name isn't presentation-ready.
// Anything not listed here falls back to the folder name, so a new folder
// still shows up (just under its raw name).
const TITLES = {
  "2026/APEC BBQ Outdoor Event Aug ": "APEC Outdoor BBQ 2026",
  "2024/APEC Eid Gala 2024": "Eid Gala 2024",
  "2019/Picnic and Youth networking 2019": "Picnic and Youth Networking 2019",
  "2016/Resume Writing skills 2016": "Resume Writing Skills 2016",
  "2013/Work shop piping stress and process engineering 2013": "Piping Stress Workshop 2013",
  "2012/Seminar Induction Motors 2012": "Seminar on Induction Motors 2012",
};

// Ordering of events inside a single year (lower runs first, i.e. later in the
// year comes first since the page is newest-first). Unlisted folders get 50.
const WITHIN_YEAR_RANK = {
  "2026/APEC BBQ Outdoor Event Aug ": 10, // August
  "2026/Eid Gala 2026": 20, // March
  "2016/Resume Writing skills 2016": 10,
  "2016/Networking Session 2016": 20,
  "2014/Professional Communication Seminar 2014": 10,
  "2014/Picnic and Networking 2014": 20,
};

/**
 * Character classes, ordered the way the file explorer the photos are
 * organised in collates them: "_" first, then the rest of the punctuation,
 * then digits, then letters. That is what puts "45-_AAA0539.jpg" ahead of
 * "45-1.jpg".
 */
function rank(ch) {
  if (ch === "_") return 0;
  if (ch >= "0" && ch <= "9") return 2;
  if (/[a-z]/i.test(ch)) return 3;
  return 1;
}

/**
 * Compare two names character by character, but consume whole runs of digits
 * and compare those as numbers, so "9" lands before "10".
 */
function collate(a, b) {
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    const isDigit = (s, at) => s[at] >= "0" && s[at] <= "9";

    if (isDigit(a, i) && isDigit(b, j)) {
      let aEnd = i;
      let bEnd = j;
      while (aEnd < a.length && isDigit(a, aEnd)) aEnd++;
      while (bEnd < b.length && isDigit(b, bEnd)) bEnd++;
      const aNum = Number(a.slice(i, aEnd));
      const bNum = Number(b.slice(j, bEnd));
      if (aNum !== bNum) return aNum - bNum;
      i = aEnd;
      j = bEnd;
      continue;
    }

    if (rank(a[i]) !== rank(b[j])) return rank(a[i]) - rank(b[j]);
    const aCh = a[i].toLowerCase();
    const bCh = b[j].toLowerCase();
    if (aCh !== bCh) return aCh < bCh ? -1 : 1;
    i++;
    j++;
  }

  // One name is a prefix of the other: the shorter one comes first, which is
  // why "45.jpg" precedes "45-1.jpg" and "…PM.jpeg" precedes "…PM (1).jpeg".
  return a.length - i - (b.length - j);
}

/** Drop the extension so the name sorts first and the extension only breaks ties. */
function stem(file) {
  return file.slice(0, file.length - extname(file).length);
}

/**
 * Photos whose name starts with a number are the photographer's numbered
 * sequence, so they lead the set in order. Anything else (the V-series, the
 * un-numbered _AAA shots) follows behind it.
 */
function naturalCompare(a, b) {
  const left = stem(a);
  const right = stem(b);
  const leftNumbered = /^\d/.test(left);
  const rightNumbered = /^\d/.test(right);
  if (leftNumbered !== rightNumbered) return leftNumbered ? -1 : 1;
  return collate(left, right) || collate(a, b);
}

/** Percent-encode a repo-relative path, keeping the "/" separators intact. */
function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function directories(path) {
  return readdirSync(path).filter((entry) => statSync(join(path, entry)).isDirectory());
}

const events = [];

for (const year of directories(PHOTOS_DIR)) {
  for (const folder of directories(join(PHOTOS_DIR, year))) {
    const key = `${year}/${folder}`;
    const photos = readdirSync(join(PHOTOS_DIR, year, folder))
      .filter((file) => IMAGE_EXTENSIONS.has(extname(file).toLowerCase()))
      .sort(naturalCompare)
      .map((file) => encodePath(`${key}/${file}`));

    if (photos.length === 0) continue;

    events.push({
      key,
      year: Number(year),
      rank: WITHIN_YEAR_RANK[key] ?? 50,
      name: TITLES[key] ?? folder.trim(),
      photos,
    });
  }
}

// Newest year first, then the within-year ordering, then by name.
events.sort(
  (a, b) => b.year - a.year || a.rank - b.rank || a.name.localeCompare(b.name),
);

const body = events
  .map(
    (event) =>
      `  {\n    name: ${JSON.stringify(event.name)},\n    photos: [\n${event.photos
        .map((photo) => `      ${JSON.stringify(photo)},`)
        .join("\n")}\n    ],\n  },`,
  )
  .join("\n");

const file = `// GENERATED FILE — do not edit by hand.
// Run \`npm run gallery\` to regenerate from the "Event Photos" folder.

export type GalleryEvent = { name: string; photos: string[] };

/** Photos are served straight from the repo, so no build-time copy is needed. */
export const GALLERY_BASE =
  "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/";

export const GALLERY_EVENTS: GalleryEvent[] = [
${body}
];
`;

writeFileSync(OUT_FILE, file);

const total = events.reduce((sum, event) => sum + event.photos.length, 0);
console.log(`Wrote ${events.length} events / ${total} photos to ${OUT_FILE}`);
