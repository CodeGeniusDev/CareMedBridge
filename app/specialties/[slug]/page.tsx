import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText } from "lucide-react";
import type { Service, Specialty } from "@/types";
import { getSpecialtyById, specialties } from "@/lib/data/specialties";
import iconRegistry from "@/lib/icons";
import { getServiceBySlug } from "@/lib/data/services";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SpecialtyDetail } from "@/components/specialty/SpecialtyDetail";
import { CTASection } from "@/components/ui/CTASection";

export function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyById(slug);
  if (!specialty) return {};
  return pageMetadata({
    title: `${specialty.title} Billing Services`,
    description: specialty.description,
    path: specialty.href,
    keywords: [
      `${specialty.title.toLowerCase()} billing services`,
      "medical billing services for physicians",
      "medical billing services USA",
      "medical billing company",
      "healthcare revenue cycle management",
    ],
  });
}

function SpecialtyHeroVisual({ specialty }: { specialty: Specialty }) {
  const Icon = iconRegistry[specialty.icon] ?? FileText;

  return (
    <div className="card-base p-7 md:p-8 flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-[var(--radius-btn)] bg-[var(--color-navy)] text-white flex items-center justify-center shadow-[var(--shadow-btn)]">
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-teal)] uppercase tracking-wider">
            Specialty Billing
          </p>
          <p className="text-lg font-bold text-[var(--color-navy)] leading-tight">
            {specialty.title}
          </p>
        </div>
      </div>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
        {specialty.description}
      </p>
      <div className="pt-4 border-t border-[var(--color-border)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-3">
          Key billing focus areas
        </p>
        <ul className="flex flex-col gap-2">
          {specialty.detail.considerations.slice(0, 4).map((consideration) => (
            <li key={consideration.title} className="flex items-center gap-2.5 text-sm">
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-[var(--color-teal)]" />
              <span className="text-[var(--color-text)]">{consideration.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/services/medical-billing"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors duration-[var(--duration-fast)]"
      >
        See how we bill for {specialty.title.toLowerCase()}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = getSpecialtyById(slug);
  if (!specialty) notFound();

  const relevantServices = specialty.detail.relevantServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Specialties", path: "/specialties" },
          { name: specialty.title, path: specialty.href },
        ])}
      />
      <JsonLd data={faqJsonLd(specialty.detail.faqs)} />
      <PageHero
        breadcrumbItems={[
          { label: "Specialties", href: "/specialties" },
          { label: specialty.title },
        ]}
        badge="Specialty Billing"
        heading={`${specialty.title} Billing Services`}
        accentWord={specialty.title}
        subheading={specialty.description}
        ctas={[
          { label: "Request a Consultation", href: "/contact" },
          { label: "Explore Services", href: "/services", variant: "outline" },
        ]}
        visual={<SpecialtyHeroVisual specialty={specialty} />}
      />
      <SpecialtyDetail
        specialty={specialty}
        relevantServices={relevantServices}
      />
      <CTASection
        heading={`Ready to improve your ${specialty.title.toLowerCase()} billing?`}
        subheading={`Partner with a team that understands ${specialty.title.toLowerCase()} coding, modifiers, and payer rules and keeps your revenue cycle moving.`}
      />
    </>
  );
}
