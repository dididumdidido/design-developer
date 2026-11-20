"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

/** Fade + slide-up when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...props
}: { delay?: number; y?: number } & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Small uppercase violet label, e.g. "LEVEL 01". */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

/** Slide-navigation indicator: a row of short gray dashes with one active violet dash. */
export function SlideDashes({
  total = 7,
  active = 0,
  className,
}: {
  total?: number;
  active?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1.5", className)} aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-[3px] rounded-full transition-all duration-500",
            i === active ? "w-8 bg-gradient-to-r from-violet-brand to-violet-bright" : "w-4 bg-zinc-300/80"
          )}
        />
      ))}
    </div>
  );
}

/** Standard section header: eyebrow, headline, dashes, subtitle. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dashes = { total: 5, active: 0 },
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dashes?: { total: number; active: number };
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="headline mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">{title}</h2>
      <SlideDashes {...dashes} className={cn("mt-6", center && "justify-center")} />
      {subtitle && <p className="mt-6 text-lg leading-relaxed text-silver">{subtitle}</p>}
    </Reveal>
  );
}

/** Green "online" status light. */
export function OnlineDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex size-2 rounded-full bg-lime animate-pulse-dot", className)} aria-hidden />
  );
}

/** Soft lavender → pink glow blob. Position with className. */
export function Glow({ className }: { className?: string }) {
  return <div className={cn("glow", className)} aria-hidden />;
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}
