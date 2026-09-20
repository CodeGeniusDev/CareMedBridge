import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQItem } from "@/components/ui/FAQItem";
import { Reveal } from "@/components/anim/Reveal";
import { faqs } from "@/lib/data/faqs";

/**
 * Homepage FAQ preview — first six questions, shared with the full FAQ page.
 */
export function FAQPreview() {
  return (
    <section className="section-pad-lg bg-[var(--color-soft)]">
      <Container narrow>
        <SectionHeading
          badge="FAQ"
          heading="Questions, Answered"
          subheading="The essentials about how we work. Find the full list on our FAQ page."
        />

        <Reveal className="mt-12 flex flex-col gap-3" y={18}>
          {faqs.slice(0, 6).map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </Reveal>

        <div className="mt-8 flex justify-center">
          <Reveal y={12}>
            <Link href="/faq" className="btn btn-outline">
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
