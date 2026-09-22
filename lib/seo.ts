import type { Metadata } from "next";
import type { BlogPost, Service } from "@/types";
import { siteConfig } from "@/lib/site";

/**
 * Shared SEO helpers: canonical-aware page metadata and JSON-LD builders.
 * Every page derives its title/description/canonical from these builders
 * so the USA-market metadata stays consistent across the site.
 */

interface PageMetadataInput {
  title: string;
  description: string;
  /** Root-relative path, e.g. "/services/medical-billing" */
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: ogType,
      locale: "en_US",
      // Explicit reference to the generated OG image (app/opengraph-image.tsx).
      // Set explicitly because a page-level openGraph object otherwise
      // shadows the file-convention image inheritance.
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}: Healthcare Billing Services`,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

/* ── JSON-LD builders ─────────────────────────────────────────────── */

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(entries: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: `${siteConfig.url}${entry.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLines[0],
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} | ${siteConfig.name}`,
    description: service.description,
    url: `${siteConfig.url}${service.href}`,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}
