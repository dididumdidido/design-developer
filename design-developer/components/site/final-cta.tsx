import { ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Glow, Reveal, SlideDashes } from "@/components/site/primitives";
import { finalCta, site } from "@/lib/content";

export function FinalCta() {
  return (
    <section id="book" className="relative overflow-hidden py-20 lg:py-32">
      <Glow className="left-1/2 top-10 size-[56rem] -translate-x-1/2 opacity-90" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          <h2 className="headline mt-5 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">{finalCta.title}</h2>
          <SlideDashes total={5} active={4} className="mt-7 justify-center" />
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-silver">{finalCta.subtitle}</p>
          <Button asChild size="lg" className="mt-10 hover:from-lime-deep hover:to-lime hover:shadow-[0_14px_36px_-8px_rgb(34_197_94/0.55)]">
            <a href="#calendar">
              {site.ctaLabel} <ArrowRight />
            </a>
          </Button>
        </Reveal>

        {/* Calendar embed */}
        <Reveal delay={0.12} className="mx-auto mt-16 max-w-4xl">
          <div id="calendar" className="glass overflow-hidden p-2 sm:p-3">
            {site.calendarEmbedUrl ? (
              <iframe
                src={site.calendarEmbedUrl}
                title="Book a strategy call"
                className="h-[720px] w-full rounded-[18px] bg-white"
                loading="lazy"
              />
            ) : (
              <div className="flex h-[440px] flex-col items-center justify-center gap-4 rounded-[18px] border border-dashed border-violet-brand/30 bg-white/50 p-8 text-center sm:h-[560px]">
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-white to-lavender text-violet-brand shadow-[0_8px_20px_-10px_rgb(124_58_237/0.5)]">
                  <CalendarDays className="size-6" strokeWidth={1.75} />
                </div>
                <p className="eyebrow">Calendar embed</p>
                <p className="max-w-sm text-[15px] leading-relaxed text-silver">
                  Calendly or GoHighLevel booking calendar goes here. Set <code className="rounded bg-lavender px-1.5 py-0.5 text-[13px] text-violet-brand">calendarEmbedUrl</code> in <code className="rounded bg-lavender px-1.5 py-0.5 text-[13px] text-violet-brand">lib/content.ts</code>.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
