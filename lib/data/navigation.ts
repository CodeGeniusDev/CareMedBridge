import type { NavLink } from "@/types";
import { services } from "@/lib/data/services";

/**
 * The Services dropdown shows a curated set of high-demand services —
 * every entry deep-links to its own detail page. The full catalog of
 * 12 services lives on /services.
 */
const serviceMenuSlugs = [
  "medical-billing",
  "medical-coding",
  "revenue-cycle-management",
  "insurance-eligibility-verification",
  "denial-management",
  "prior-authorization",
];

const serviceMenuChildren: NavLink[] = serviceMenuSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service))
  .map((service) => ({ label: service.title, href: service.href }));

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: serviceMenuChildren,
  },
  { label: "Specialties", href: "/specialties" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const ctaLink: NavLink = {
  label: "Request a Consultation",
  href: "/contact",
};
