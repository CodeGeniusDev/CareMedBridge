import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  loading?: boolean;
  external?: boolean;
}

/**
 * Buttons build on the `.btn-*` utilities in globals.css — solid colors,
 * named-property transitions, scale(0.98) press feedback. Focus styling is
 * handled globally by `:focus-visible`.
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base = cn("btn", variantClasses[variant], sizeClasses[size], className);

  const content = loading ? (
    <>
      <span className="sr-only">Loading…</span>
      <span
        aria-hidden
        className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      />
      {children}
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={base} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
