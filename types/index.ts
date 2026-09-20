// ============================================================
// CareMedBridge — Shared TypeScript Types
// ============================================================

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

/** A titled point used across detail pages (challenges, workflow steps, etc.) */
export interface ServicePoint {
  title: string;
  description: string;
}

/** A question/answer pair used on service & specialty detail pages */
export interface ServiceFAQ {
  question: string;
  answer: string;
}

/** Full editorial content for an individual service page */
export interface ServiceDetail {
  /** 2 short paragraphs shown in the "Service Overview" section */
  overview: string[];
  /** Key challenges the practice faces (4 items) */
  challenges: ServicePoint[];
  /** How CareMedBridge helps (4 items) */
  howWeHelp: ServicePoint[];
  /** Workflow / process steps (4–5 items, rendered in order) */
  workflow: ServicePoint[];
  /** Benefit statements (6 items, short) */
  benefits: string[];
  /** Page-specific FAQs (4 items) */
  faqs: ServiceFAQ[];
  /** Slugs of related services for cross-linking (3 items) */
  relatedSlugs: string[];
}

export interface Service {
  id: string;
  /** URL-safe slug — used for /services/[slug] routes */
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  /**
   * Lucide icon name (e.g. "FileText"). Stored as a plain string so service
   * objects stay serializable across the Server→Client component boundary;
   * resolved to a component in the UI via the registry in `lib/icons.ts`.
   */
  icon: string;
  href: string;
  featured?: boolean;
  detail: ServiceDetail;
}

/** Full editorial content for an individual specialty page */
export interface SpecialtyDetail {
  /** 2 short paragraphs shown in the overview section */
  overview: string[];
  /** Specialty-specific billing considerations (4 items) */
  considerations: ServicePoint[];
  /** Slugs of the services most relevant to this specialty */
  relevantServiceSlugs: string[];
  /** Page-specific FAQs (3 items) */
  faqs: ServiceFAQ[];
}

export interface Specialty {
  id: string;
  title: string;
  /**
   * Lucide icon name (e.g. "FileText"). Stored as a plain string so service
   * objects stay serializable across the Server→Client component boundary;
   * resolved to a component in the UI via the registry in `lib/icons.ts`.
   */
  icon: string;
  description: string;
  href: string;
  detail: SpecialtyDetail;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  practice: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

/** A single block of article body content */
export interface ContentBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: string;
  content: ContentBlock[];
  /** Demo/placeholder article — replace with real editorial content before launch */
  demo: boolean;
}

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type SectionHeadingAlign = "left" | "center";
