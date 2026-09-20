import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-soft)]">
      <Container className="py-24 md:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-5">
          <p className="eyebrow">Error 404</p>
          <h1>
            This page took a{" "}
            <em className="accent-serif">wrong turn</em>
          </h1>
          <p className="text-base md:text-lg">
            The page you are looking for does not exist or may have moved. Let
            us get you back to solid ground.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
