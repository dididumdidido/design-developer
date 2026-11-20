"use client";

import * as React from "react";

import { PlaceholderImage } from "@/components/site/placeholder-image";
import { Container, Eyebrow, Glow, Reveal, SectionHeader, SlideDashes } from "@/components/site/primitives";
import { levels, levelsIntro } from "@/lib/content";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export function Levels() {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);

  // Track which level slide is centered, for the sticky side rail.
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="levels" className="relative py-20 lg:py-28">
      <Container>
        <SectionHeader {...levelsIntro} dashes={{ total: 5, active: 1 }} />
      </Container>

      <div className="relative mt-10 lg:mt-16">
        {/* Sticky level rail (desktop) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full xl:block" aria-hidden>
          <div className="sticky top-1/2 ml-[max(1.5rem,calc((100vw-80rem)/2-3rem))] w-12 -translate-y-1/2">
            <div className="flex flex-col items-center gap-3">
              {levels.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "w-[3px] rounded-full transition-all duration-500",
                    i === active ? "h-8 bg-gradient-to-b from-violet-brand to-violet-bright" : "h-3 bg-zinc-300"
                  )}
                />
              ))}
              <span className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-violet-brand">
                {pad(active + 1)}
              </span>
            </div>
          </div>
        </div>

        {levels.map((level, i) => (
          <div
            key={level.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="relative flex items-center py-14 md:min-h-[80vh] lg:min-h-[88vh]"
          >
            <Glow className={cn("size-[34rem] opacity-70", i % 2 ? "-left-48" : "-right-48")} />
            <Container className="relative grid items-center gap-10 md:grid-cols-2 lg:gap-20">
              <div>
                <Reveal>
                  <Eyebrow>Level {pad(i + 1)}</Eyebrow>
                  <SlideDashes total={levels.length} active={i} className="mt-5" />
                </Reveal>
                <Reveal delay={0.08}>
                  <h3 className="headline mt-8 text-5xl leading-none sm:text-6xl lg:text-7xl">
                    {level.title}
                    {/* Section accent: lime cursor */}
                    <span className="ml-1.5 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] animate-pulse bg-lime align-baseline" aria-hidden />
                  </h3>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-silver sm:text-xl">{level.description}</p>
                </Reveal>
                <Reveal delay={0.22}>
                  <div className="metal-line mt-10 h-px w-40" />
                  <p className="mt-4 text-[13px] font-medium text-zinc-400">
                    {pad(i + 1)} / {pad(levels.length)}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.1} y={40} className="mx-auto w-full max-w-[480px]">
                <PlaceholderImage slot={level.image} />
              </Reveal>
            </Container>
          </div>
        ))}
      </div>
    </section>
  );
}
