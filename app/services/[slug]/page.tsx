import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText } from "lucide-react";
import type { Service } from "@/types";
import { getServiceBySlug, services } from "@/lib/data/services";
import iconRegistry from "@/lib/icons";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceDetail } from "@/components/service/ServiceDetail";
import { CTASection } from "@/components/ui/CTASection";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} Services`,
    description: service.description,
    path: service.href,
    keywords: [
      `${service.title.toLowerCase()} services`,
      "medical billing services USA",
      "healthcare billing services",
      "medical billing company",
      "revenue cycle management services",
    ],
  });
}

function ServiceHeroVisual({ service }: { service: Service }) {
  const Icon = iconRegistry[service.icon] ?? FileText;

  return (
    <div className="card-base p-7 md:p-8 flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-[var(--radius-btn)] bg-[var(--color-navy)] text-white flex items-center justify-center shadow-[var(--shadow-btn)]">
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-teal)] uppercase tracking-wider">
            CareMedBridge
          </p>
          <p className="text-lg font-bold text-[var(--color-navy)] leading-tight">
            {service.title}
          </p>
        </div>
      </div>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
        {service.shortDescription}
      </p>
      <div className="pt-4 border-t border-[var(--color-border)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-3">
          The process at a glance
        </p>
        <ul className="flex flex-col gap-2">
          {service.detail.workflow.slice(0, 4).map((step, index) => (
            <li key={step.title} className="flex items-center gap-2.5 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-soft)] text-[var(--color-teal)] text-[11px] font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-[var(--color-text)]">{step.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="#overview"
        className="inline-flex items-center gap-1.5 -my-1 py-1 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors duration-[var(--duration-fast)]"
      >
        Read the full overview
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.detail.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: service.href },
        ])}
      />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.detail.faqs)} />
      <PageHero
        breadcrumbItems={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        badge="CareMedBridge Service"
        heading={`${service.title} Services`}
        accentWord={service.title}
        subheading={service.description}
        ctas={[
          { label: "Request a Consultation", href: "/contact" },
          { label: "View Pricing", href: "/pricing", variant: "outline" },
        ]}
        visual={<ServiceHeroVisual service={service} />}
      />
      <ServiceDetail service={service} relatedServices={relatedServices} />
      <CTASection
        heading={`Ready to strengthen your ${service.title.toLowerCase()}?`}
        subheading="Talk with our team about how this service fits your practice — and what it would look like in your revenue cycle."
        primaryCta={{
          label: "Request a Consultation",
          href: `/contact?service=${service.slug}`,
        }}
      />
    </>
  );
}
