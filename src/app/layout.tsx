import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const siteUrl = "https://www.thenexsphereglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NexSphere Global Advisors LLP | Global Accounting Excellence",
    template: "%s | NexSphere Global Advisors LLP",
  },
  description:
    "NexSphere Global Advisors LLP delivers world-class outsourced accounting, US taxation & payroll tax return filing, Virtual CFO advisory, GST compliance, and special project engagements for businesses in the US and India.",
  keywords: [
    "outsourced accounting services",
    "US taxation compliance",
    "payroll processing",
    "payroll tax return filing",
    "form 941 filing",
    "virtual CFO advisory",
    "special projects accounting",
    "GST consultancy India",
    "Indian income tax",
    "bookkeeping services",
    "CPA firm outsourcing",
    "NEXSPHERE Global Advisors",
    "accounting firm India USA",
    "MCA compliances",
    "FEMA compliance",
    "startup India registration",
    "wealth management India",
    "cross border accounting",
  ],
  authors: [{ name: "NexSphere Global Advisors LLP", url: siteUrl }],
  creator: "NexSphere Global Advisors LLP",
  publisher: "NexSphere Global Advisors LLP",
  formatDetection: { email: false, telephone: false },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NexSphere Global Advisors LLP",
    title: "NexSphere Global Advisors LLP | Global Accounting Excellence",
    description:
      "Expert outsourced accounting, US taxation, payroll processing & return filing, Virtual CFO advisory, and GST compliance for US and Indian businesses.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NexSphere Global Advisors LLP — Global Accounting Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexSphere Global Advisors LLP | Global Accounting Excellence",
    description:
      "Expert outsourced accounting, US taxation, payroll processing, Virtual CFO advisory, and GST compliance for US and Indian businesses.",
    images: ["/logo.png"],
    creator: "@nexsphereglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "nexsphere-google-site-verification",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "NexSphere Global Advisors LLP",
  alternateName: "NexSphere Global",
  description:
    "Global accounting, taxation, payroll processing, virtual CFO advisory, and compliance services for US and Indian businesses.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  telephone: "+91-99297-49855",
  email: "info@thenexsphereglobal.com",
  foundingDate: "2020",
  areaServed: ["US", "IN"],
  serviceType: [
    "Outsourced Accounting Services",
    "Payroll Processing and Return Filing",
    "US Taxation and Compliance",
    "Virtual CFO Advisory",
    "Special Projects",
    "GST Consultancy",
    "Indian Income Tax",
    "MCA Compliances",
    "FEMA Compliance",
  ],
  sameAs: [
    "https://www.linkedin.com/company/nexsphere-global",
    "https://twitter.com/nexsphereglobal",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accounting & Advisory Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Payroll Processing & Return Filing",
          description:
            "Full-cycle payroll processing, Form 941/940 filing, W-2/1099 preparation, and multi-state payroll tax compliance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outsourced Accounting Services",
          description:
            "End-to-end accounting support including general ledger, reconciliations, AP/AR, and payroll administration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "US Taxation & Compliance",
          description:
            "Individual and business tax returns, SALT, IRS audit support, and payroll tax return filing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Virtual CFO Advisory",
          description:
            "Financial forecasting, KPI dashboards, investor reporting, and special project financial leadership.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Special Projects",
          description:
            "Forensic accounting, pre-IPO readiness, cross-border structuring, GAAP/IFRS conversions, and bespoke financial engagements.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-navy">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
