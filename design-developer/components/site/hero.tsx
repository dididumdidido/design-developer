import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { Container, Eyebrow, Glow, OnlineDot, Reveal, SlideDashes } from "@/components/site/primitives";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-10 sm:pt-16 lg:pb-32 lg:pt-20">
      <Glow className="-right-40 top-0 size-[44rem] opacity-90" />
      <Glow className="-left-60 top-60 size-[30rem] opacity-50" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <SlideDashes total={5} active={0} className="mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="headline mt-7 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.75rem]">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-silver sm:text-xl">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={site.ctaHref}>
                {site.ctaLabel} <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#team">Meet the Team</a>
            </Button>
          </Reveal>
          <Reveal delay={0.32}>
            {/* Section accent: lime status light */}
            <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-[13px] font-medium text-graphite backdrop-blur">
              <OnlineDot />
              {hero.status}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40} className="relative mx-auto w-full max-w-[560px]">
          <PlaceholderImage slot={hero.image} priority />
        </Reveal>
      </Container>
    </section>
  );
}
