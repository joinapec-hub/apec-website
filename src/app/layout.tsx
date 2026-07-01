import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });

const SITE_URL = "https://www.apecanada.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "APEC – Association of Pakistani Engineers in Canada",
    template: "%s – APEC",
  },
  description:
    "APEC (Association of Pakistani Engineers in Canada) is a Calgary-based non-profit professional community welcoming engineers and professionals from all backgrounds. Connect, grow, and contribute to Canada through networking, mentorship, and events.",
  applicationName: "APEC",
  keywords: [
    "APEC",
    "Association of Pakistani Engineers in Canada",
    "Pakistani engineers Canada",
    "Pakistani engineers Calgary",
    "engineering association Calgary",
    "professional networking Calgary",
    "engineers Alberta",
    "professional development",
    "P.Eng Canada",
    "immigrant engineers Canada",
  ],
  authors: [{ name: "APEC" }],
  creator: "APEC",
  publisher: "APEC",
  category: "nonprofit",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "APEC – Association of Pakistani Engineers in Canada",
    description: "Engineers & Professionals Building a Stronger Canada Together.",
    url: SITE_URL,
    siteName: "APEC",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEC – Association of Pakistani Engineers in Canada",
    description: "Engineers & Professionals Building a Stronger Canada Together.",
  },
};

// Structured data for search engines and AI answer engines (AEO/GEO).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "NGO"],
      "@id": `${SITE_URL}/#organization`,
      name: "Association of Pakistani Engineers in Canada",
      alternateName: "APEC",
      url: SITE_URL,
      logo: `${SITE_URL}/apec-logo.png`,
      image: `${SITE_URL}/opengraph-image.jpeg`,
      email: "info@apecanada.ca",
      foundingDate: "2011",
      description:
        "A Calgary-based non-profit professional community of engineers and professionals of Pakistani origin, supporting networking, mentorship, career development, and community events across Canada.",
      areaServed: { "@type": "Country", name: "Canada" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      sameAs: ["https://www.facebook.com/groups/781259795220477/"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "APEC",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-CA",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
