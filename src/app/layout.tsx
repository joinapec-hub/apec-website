import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "APEC – Association of Pakistani Engineers in Canada",
  description:
    "APEC is a non-profit professional community welcoming engineers and professionals from all backgrounds. Connect, grow, and contribute to Canada.",
  keywords: ["APEC", "Pakistani Engineers", "Canada", "Calgary", "engineering", "professional development", "networking"],
  openGraph: {
    title: "APEC",
    description: "Engineers & Professionals Building a Stronger Canada Together",
    url: "https://www.apecanada.ca",
    siteName: "APEC",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
