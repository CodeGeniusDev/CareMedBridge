import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import iconRegistry from "@/lib/icons";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  /** Accepted for call-site convenience; entrance motion is handled by the parent Stagger. */
  index?: number;
  className?: string;
  /** Larger variant: longer description + bigger icon, for featured placements */
  large?: boolean;
}

export function ServiceCard({ service, className, large = false }: ServiceCardProps) {
  const Icon = iconRegistry[service.icon] ?? FileText;

  return (
    <Link href={service.href} className="group block h-full" aria-label={service.title}>
      <div
        className={cn(
          "card-base card-lift flex h-full flex-col gap-4",
          large ? "gap-5 p-7 md:p-8" : "p-6",
          className
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "flex flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)]",
            "bg-[var(--color-soft)] text-[var(--color-teal)]",
            large ? "h-12 w-12" : "h-11 w-11"
          )}
        >
          <Icon className={large ? "h-6 w-6" : "h-5 w-5"} />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2">
          <h3 className={cn("font-semibold leading-snug", large && "text-lg")}>{service.title}</h3>
          <p className="flex-1 text-sm leading-relaxed">
            {large ? service.description : service.shortDescription}
          </p>
        </div>

        {/* CTA */}
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)]">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
