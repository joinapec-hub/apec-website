import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APEC Canada – Association of Pakistani Engineers in Canada",
  description:
    "APEC Canada is a non-profit professional community welcoming engineers and professionals from all backgrounds. Connect, grow, and contribute to Canada.",
  keywords: ["APEC", "Pakistani Engineers", "Canada", "Calgary", "engineering", "professional development", "networking"],
  openGraph: {
    title: "APEC Canada",
    description: "Engineers & Professionals Building a Stronger Canada Together",
    url: "https://www.apecanada.ca",
    siteName: "APEC Canada",
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
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
