import Link from "next/link";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import iconRegistry from "@/lib/icons";
import type { Specialty } from "@/types";

interface SpecialtyCardProps {
  specialty: Specialty;
  /** Accepted for call-site convenience; entrance motion is handled by the parent Stagger. */
  index?: number;
  className?: string;
}

export function SpecialtyCard({ specialty, className }: SpecialtyCardProps) {
  const Icon = iconRegistry[specialty.icon] ?? FileText;

  return (
    <Link href={specialty.href} className="group block h-full" aria-label={specialty.title}>
      <div className={cn("card-base card-lift flex h-full items-center gap-4 p-5", className)}>
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-snug text-[var(--color-navy)]">
            {specialty.title}
          </p>
          {specialty.description && (
            <p className="mt-0.5 line-clamp-1 text-xs text-[var(--color-muted)]">
              {specialty.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
