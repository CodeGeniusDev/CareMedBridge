import * as React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/data/navigation";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";
import type { Service } from "@/types";

const serviceLinkSlugs = [
  "medical-billing",
  "medical-coding",
  "revenue-cycle-management",
  "credentialing",
  "prior-authorization",
  "denial-management",
];

const serviceLinks = serviceLinkSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service))
  .map((service) => ({ label: service.title, href: service.href }));

const companyLinks = navLinks.filter((l) =>
  ["/about", "/pricing", "/faq", "/blog", "/contact"].includes(l.href)
);

export function Footer() {
  const year = new Date().getFullYear();
  const { email, phoneDisplay, phoneHref, addressLines, hours } = siteConfig;

  return (
    <footer className="bg-[var(--color-navy)] text-white" aria-label="Site footer">
      {/* Main grid */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-white/10">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
                  <path
                    d="M12 3v3M12 18v3M3 12h3M18 12h3M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                CareMed<span className="text-[var(--color-accent)]">Bridge</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Healthcare billing services built for physicians, practices, and healthcare
              providers across the United States.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              Services
            </h3>
            <ul className="flex flex-col gap-1">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-block py-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-white"
                >
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              Company
            </h3>
            <ul className="flex flex-col gap-1">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`tel:${phoneHref}`}
                  className="group flex items-start gap-3 py-1 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="group flex items-start gap-3 py-1 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  {email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  <span className="whitespace-pre-line">{addressLines.join("\n")}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  {hours}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <Container className="py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/55 sm:flex-row">
            <p>© {year} CareMedBridge. All rights reserved.</p>
            <div className="flex items-center gap-5 text-white/60">
              <Link href="/privacy" className="inline-block py-1 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="inline-block py-1 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
