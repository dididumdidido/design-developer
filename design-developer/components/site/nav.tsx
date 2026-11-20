"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-5 transition-all duration-500 sm:px-6",
          scrolled || open
            ? "border border-violet-brand/15 bg-white/70 shadow-[var(--shadow-glass)] backdrop-blur-xl"
            : "border border-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-violet-brand to-violet-bright text-[11px] font-bold text-white shadow-[var(--shadow-glow)]">
            DD
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href + item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-[14px] font-medium text-silver transition-colors hover:text-violet-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.ctaHref}>{site.ctaLabel}</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full text-graphite hover:bg-lavender/60 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-3 top-[5.25rem] z-40 origin-top transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <nav className="glass flex flex-col gap-1 p-4" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href + item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-graphite hover:bg-lavender/60 hover:text-violet-brand"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-2">
            <a href={site.ctaHref} onClick={() => setOpen(false)}>
              {site.ctaLabel}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
