// Builds the photo gallery: derives web-sized images from the originals in
// "Event Photos" and writes the listing to src/lib/gallery.ts.
//
// Run it after adding, removing, or renaming any photo folder:
//   npm run gallery
//
// Why derivatives are committed instead of optimized at request time:
// next.config.ts sets `images.unoptimized`, because the Vercel image
// optimization quota is shared account-wide and every request 404s once it is
// spent. Without an optimizer in front of them, <Image> served the untouched
// originals — 83 files averaging 4 MB in a single grid, which is what made the
// gallery crawl and crash. These derivatives are plain static files on the CDN,
// so the page is fast and the quota is never touched.
//
// Three sizes per photo:
//   thumb (500px square, ~30 KB)  the grid
//   large (1400px longest edge)   the lightbox
//   original (raw.githubusercontent) only fetched when someone hits Download
//
// Every image inside "Event Photos/<year>/<event folder>/" is picked up, so no
// photo can be silently missed. Files sort the way they do in the folder they
// were organised in, preserving the photographer's numbering and lettering.

import { createHash } from "node:crypto";
import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PHOTOS_DIR = join(ROOT, "Event Photos");
const OUT_FILE = join(ROOT, "src", "lib", "gallery.ts");
const DERIVED_DIR = join(ROOT, "public", "gallery");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

const THUMB = { size: 500, quality: 72 };
const LARGE = { size: 1400, quality: 76 };
const CONCURRENCY = 8;

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

function slugify(value) {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "photo"
  );
}

function directories(path) {
  return readdirSync(path).filter((entry) => statSync(join(path, entry)).isDirectory());
}

/** Run tasks with a bounded number in flight so sharp doesn't thrash memory. */
async function pooled(items, limit, worker) {
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      await worker(items[index], index);
    }
  });
  await Promise.all(runners);
}

/** Skip work when the derivative is already newer than the photo it came from. */
function isFresh(source, target) {
  try {
    return statSync(target).mtimeMs >= statSync(source).mtimeMs;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------

const events = [];

for (const year of directories(PHOTOS_DIR)) {
  for (const folder of directories(join(PHOTOS_DIR, year))) {
    const key = `${year}/${folder}`;
    const files = readdirSync(join(PHOTOS_DIR, year, folder))
      .filter((file) => IMAGE_EXTENSIONS.has(extname(file).toLowerCase()))
      .sort(naturalCompare);

    if (files.length === 0) continue;

    events.push({
      key,
      year: Number(year),
      folderSlug: `${year}-${slugify(folder)}`,
      rank: WITHIN_YEAR_RANK[key] ?? 50,
      name: TITLES[key] ?? folder.trim(),
      files,
      photos: [],
    });
  }
}

// Newest year first, then the within-year ordering, then by name.
events.sort(
  (a, b) => b.year - a.year || a.rank - b.rank || a.name.localeCompare(b.name),
);

let built = 0;
let reused = 0;

for (const event of events) {
  const outDir = join(DERIVED_DIR, event.folderSlug);
  mkdirSync(outDir, { recursive: true });

  event.photos = new Array(event.files.length);

  await pooled(event.files, CONCURRENCY, async (file, index) => {
    const source = join(PHOTOS_DIR, event.key, file);
    // The hash keeps names unique when two originals slugify the same way,
    // and stable so re-runs don't churn the repo.
    const id = `${slugify(stem(file))}-${createHash("sha1")
      .update(`${event.key}/${file}`)
      .digest("hex")
      .slice(0, 6)}`;
    const thumbFile = join(outDir, `${id}-t.webp`);
    const largeFile = join(outDir, `${id}-l.webp`);

    const pipeline = sharp(source).rotate(); // honour EXIF orientation
    const meta = await pipeline.metadata();
    // A rotated original reports its pre-rotation dimensions.
    const swap = (meta.orientation ?? 1) >= 5;
    const width = swap ? meta.height : meta.width;
    const height = swap ? meta.width : meta.height;

    if (isFresh(source, thumbFile) && isFresh(source, largeFile)) {
      reused++;
    } else {
      await Promise.all([
        sharp(source)
          .rotate()
          .resize(THUMB.size, THUMB.size, { fit: "cover", position: "attention" })
          .webp({ quality: THUMB.quality })
          .toFile(thumbFile),
        sharp(source)
          .rotate()
          .resize(LARGE.size, LARGE.size, { fit: "inside", withoutEnlargement: true })
          .webp({ quality: LARGE.quality })
          .toFile(largeFile),
      ]);
      built++;
    }

    // A flat placeholder colour costs ~9 bytes per photo, where an inline blur
    // data URI would add tens of kilobytes to the page for all 186 of them.
    const { dominant } = await sharp(source).stats();
    const hex = `#${[dominant.r, dominant.g, dominant.b]
      .map((channel) => channel.toString(16).padStart(2, "0"))
      .join("")}`;

    event.photos[index] = {
      thumb: `/gallery/${event.folderSlug}/${id}-t.webp`,
      large: `/gallery/${event.folderSlug}/${id}-l.webp`,
      original: encodePath(`${event.key}/${file}`),
      download: file,
      color: hex,
      width,
      height,
    };
  });

  process.stdout.write(`  ${event.name}: ${event.photos.length} photos\n`);
}

const body = events
  .map((event) => {
    const photos = event.photos
      .map(
        (photo) =>
          `      { thumb: ${JSON.stringify(photo.thumb)}, large: ${JSON.stringify(
            photo.large,
          )}, original: ${JSON.stringify(photo.original)}, download: ${JSON.stringify(
            photo.download,
          )}, color: ${JSON.stringify(photo.color)}, width: ${photo.width}, height: ${
            photo.height
          } },`,
      )
      .join("\n");
    return `  {\n    name: ${JSON.stringify(event.name)},\n    photos: [\n${photos}\n    ],\n  },`;
  })
  .join("\n");

const file = `// GENERATED FILE — do not edit by hand.
// Run \`npm run gallery\` to regenerate from the "Event Photos" folder.

export type GalleryPhoto = {
  /** 500px square WebP served straight from /public — used by the grid. */
  thumb: string;
  /** 1400px WebP served straight from /public — used by the lightbox. */
  large: string;
  /** Path of the untouched original, relative to ORIGINALS_BASE. */
  original: string;
  /** Original filename, used as the download filename. */
  download: string;
  /** Dominant colour, painted while the image loads so the grid never flashes. */
  color: string;
  width: number;
  height: number;
};

export type GalleryEvent = { name: string; photos: GalleryPhoto[] };

/** Full-resolution originals live in the repo and are only fetched on Download. */
export const ORIGINALS_BASE =
  "https://raw.githubusercontent.com/joinapec-hub/apec-website/main/Event%20Photos/";

export const GALLERY_EVENTS: GalleryEvent[] = [
${body}
];
`;

writeFileSync(OUT_FILE, file);

const total = events.reduce((sum, event) => sum + event.photos.length, 0);
console.log(
  `\nWrote ${events.length} events / ${total} photos to ${OUT_FILE}\n` +
    `Derivatives: ${built} built, ${reused} already current.`,
);
