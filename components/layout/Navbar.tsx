"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks, ctaLink } from "@/lib/data/navigation";
import { MobileNav } from "./MobileNav";
import type { NavLink } from "@/types";

// ── Desktop dropdown ────────────────────────────────────────────────────────
function DropdownMenu({ items, open }: { items: NavLink[]; open: boolean }) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 mt-2 w-72 origin-top -translate-x-1/2 overflow-hidden",
        "rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white py-2 shadow-[var(--shadow-lift)]",
        "transition-[opacity,transform] duration-200 [transition-timing-function:var(--ease-out)]",
        open
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-1 scale-[0.98] opacity-0"
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors duration-150 hover:bg-[var(--color-soft)] hover:text-[var(--color-navy)]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ── Nav item (handles dropdown toggle) ─────────────────────────────────────
function NavItem({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasChildren = link.children && link.children.length > 0;
  const isActive =
    pathname === link.href ||
    (hasChildren && link.children!.some((c) => pathname.startsWith(c.href)));

  // Close on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  // Close on Escape for keyboard users
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
  }

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
          isActive
            ? "font-semibold text-[var(--color-navy)]"
            : "text-[var(--color-muted)] hover:text-[var(--color-navy)]"
        )}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onKeyDown={handleKeyDown}>
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium",
          "transition-colors duration-150",
          open || isActive
            ? "font-semibold text-[var(--color-navy)]"
            : "text-[var(--color-muted)] hover:text-[var(--color-navy)]"
        )}
      >
        {link.label}
        <ChevronDown
          aria-hidden
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200 [transition-timing-function:var(--ease-out)]",
            open && "rotate-180"
          )}
        />
      </button>

      <div onMouseLeave={() => setOpen(false)}>
        <DropdownMenu items={link.children!} open={open} />
      </div>
    </div>
  );
}

// ── Logo ────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link href="/" className="flex flex-shrink-0 items-center gap-2.5" aria-label="CareMedBridge home">
      {/* Icon mark */}
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-navy)]">
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
      {/* Wordmark */}
      <span className="font-display text-lg font-semibold leading-none tracking-tight text-[var(--color-navy)]">
        CareMed<span className="text-[var(--color-teal)]">Bridge</span>
      </span>
    </Link>
  );
}

// ── Navbar ──────────────────────────────────────────────────────────────────
export function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close the drawer and return focus to the trigger for keyboard users
  function closeMobileNav() {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-[background-color,border-color] duration-300",
          scrolled
            ? "border-b border-[var(--color-border)] bg-white"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-18">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} />
              ))}
            </nav>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                href={ctaLink.href}
                className="btn btn-primary btn-sm hidden lg:inline-flex"
              >
                {ctaLink.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Mobile hamburger */}
              <button
                ref={menuButtonRef}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={cn(
                  "flex h-10 w-10 -mr-0.5 cursor-pointer items-center justify-center rounded-lg lg:hidden",
                  "text-[var(--color-navy)] transition-colors duration-150 hover:bg-[var(--color-soft)]"
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-16 md:h-18" aria-hidden />

      {/* Mobile Drawer */}
      <MobileNav open={mobileOpen} onClose={closeMobileNav} />
    </>
  );
}
