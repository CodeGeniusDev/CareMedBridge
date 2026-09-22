import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";
import { blogPosts } from "@/lib/data/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Healthcare Billing Insights & Resources",
  description:
    "Practical guidance on medical billing services, coding, denial management, credentialing, prior authorization, and revenue cycle management for USA healthcare practices.",
  path: "/blog",
  keywords: [
    "medical billing blog",
    "revenue cycle management tips",
    "medical billing insights",
    "denial management strategies",
    "medical billing company resources",
  ],
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        breadcrumbItems={[{ label: "Blog" }]}
        badge="Resources"
        heading="Healthcare Billing Insights"
        accentWord="Insights"
        subheading="Practical guidance on medical billing, coding, revenue cycle management, and practice operations written for providers, not payers."
      />

      {/* Featured article */}
      <section className="section-pad">
        <Container>
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group card-base card-lift p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--color-navy)] text-white font-semibold uppercase tracking-wider">
                  <Tag className="w-3 h-3" />
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)]">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {formatDate(featured.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)]">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="max-w-3xl">
                {featured.title}
              </h2>
              <p className="text-base md:text-lg max-w-3xl">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)] group-hover:gap-2.5 transition-[gap] duration-[var(--duration-fast)]">
                Read the article
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Remaining articles */}
      <section className="section-pad bg-[var(--color-soft)] border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            badge="Latest Articles"
            heading="More from the resource center"
            accentWord="resource center"
            className="mb-12"
          />
          <Stagger
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            stagger={0.06}
          >
            {rest.map((post) => (
              <article
                key={post.id}
                className="card-base card-lift p-6 md:p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-[var(--color-teal)]" />
                  <span className="text-xs font-semibold text-[var(--color-teal)] uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-base md:text-lg font-bold text-[var(--color-navy)] hover:text-[var(--color-teal)] transition-colors duration-[var(--duration-fast)] leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
                  <div className="text-xs text-[var(--color-muted)]">
                    {formatDate(post.publishedAt)} · {post.readTime}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 -my-1 py-1 text-xs font-semibold text-[var(--color-teal)] hover:gap-2 transition-[gap] duration-[var(--duration-fast)]"
                  >
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection
        heading="Prefer to Hand Billing Off Entirely?"
        subheading="Reading about billing is one thing. Never thinking about it again is better. Let's talk about what CareMedBridge can take off your plate."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
