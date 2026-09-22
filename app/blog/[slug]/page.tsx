import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  pageMetadata,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { CTASection } from "@/components/ui/CTASection";
import { Stagger } from "@/components/anim/Stagger";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.publishedAt,
    keywords: [
      post.category.toLowerCase(),
      "medical billing services USA",
      "healthcare revenue cycle management",
      "medical billing company",
    ],
  });
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleToc({ slug }: { slug: string }) {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;
  const headings = post.content.filter((block) => block.type === "heading");

  return (
    <div className="card-base p-7">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-teal)] mb-4">
        In this article
      </p>
      <nav aria-label="Article contents">
        <ul className="flex flex-col gap-3">
          {headings.map((heading, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-soft)] text-[var(--color-teal)] text-[11px] font-bold flex items-center justify-center mt-0.5">
                {index + 1}
              </span>
              <span className="text-[var(--color-text)] leading-snug">
                {heading.text}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, 2);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />
      <PageHero
        breadcrumbItems={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
        badge={post.category}
        heading={post.title}
        subheading={post.excerpt}
        visual={<ArticleToc slug={post.slug} />}
      />

      {/* Article meta bar */}
      <div className="border-b border-[var(--color-border)] bg-white">
        <Container className="py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-muted)]">
            <span className="inline-flex items-center gap-2">
              <User className="w-4 h-4 text-[var(--color-teal)]" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-[var(--color-teal)]" />
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--color-teal)]" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </div>

      {/* Article body */}
      <article className="section-pad">
        <Container narrow>
          <ArticleContent blocks={post.content} />
        </Container>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="section-pad bg-[var(--color-soft)] border-t border-[var(--color-border)]">
          <Container>
            <SectionHeading
              badge="Keep Reading"
              heading="Related articles"
              accentWord="articles"
              className="mb-12"
            />
            <Stagger
              className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
              stagger={0.08}
            >
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group card-base card-lift p-6 md:p-7 flex flex-col gap-3 h-full"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-teal)]">
                    {related.category}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[var(--color-navy)] leading-snug">
                    {related.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                    {related.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)] group-hover:gap-2.5 transition-[gap] duration-[var(--duration-fast)]">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      <CTASection
        heading="Want billing insights like this in your inbox?"
        subheading="Subscribe-ready content, practical revenue cycle guidance, and a team practices can hire when they are ready. Let's talk about your billing."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
