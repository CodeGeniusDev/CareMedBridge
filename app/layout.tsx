import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: {
    default: "CareMedBridge | Healthcare Billing Services",
    template: "%s | CareMedBridge",
  },
  description:
    "CareMedBridge provides medical billing services for physicians and practices across the USA: medical coding, revenue cycle management, eligibility verification, denial management, AR recovery, credentialing, and prior authorization.",
  keywords: [
    "medical billing services USA",
    "medical billing company",
    "healthcare billing services",
    "medical billing services for physicians",
    "medical billing outsourcing",
    "revenue cycle management services",
    "medical coding services",
    "medical billing company for small practices",
    "healthcare revenue cycle management",
    "medical billing services for clinics",
    "denial management services",
    "accounts receivable recovery medical billing",
    "insurance verification services",
    "medical credentialing services",
    "prior authorization services",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E7490",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${newsreader.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-canvas)] antialiased">
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
