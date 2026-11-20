import { Card } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { Container, Eyebrow, Glow, OnlineDot, Reveal, SectionHeader } from "@/components/site/primitives";
import { caseStudy, resultsIntro, stats } from "@/lib/content";

export function Results() {
  return (
    <section id="results" className="relative overflow-hidden py-20 lg:py-32">
      <Glow className="-left-40 top-1/3 size-[38rem] opacity-70" />
      <Container className="relative">
        <SectionHeader {...resultsIntro} dashes={{ total: 5, active: 4 }} />

        {/* Stat row */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <Card className="h-full p-8">
                <p className="headline text-5xl font-light sm:text-6xl">
                  <span className="bg-gradient-to-br from-ink to-graphite bg-clip-text text-transparent">{stat.value}</span>
                </p>
                <div className="metal-line my-5 h-px w-full" />
                <p className="text-[15px] font-medium text-silver">{stat.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Case study slot */}
        <Reveal delay={0.1} className="mt-5">
          <Card className="grid items-center gap-10 p-7 hover:translate-y-0 sm:p-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <Eyebrow>{caseStudy.eyebrow}</Eyebrow>
                {/* Section accent: lime live dot */}
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-silver">
                  <OnlineDot className="size-1.5" /> {caseStudy.client}
                </span>
              </div>
              <h3 className="headline mt-5 text-3xl leading-tight sm:text-4xl">{caseStudy.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-silver">{caseStudy.summary}</p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-zinc-200/80 pt-6">
                {caseStudy.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-medium tracking-tight text-violet-brand sm:text-3xl">{m.value}</p>
                    <p className="mt-1 text-[13px] text-silver">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <PlaceholderImage slot={caseStudy.image} aspect="aspect-[4/3]" float={false} rounded="rounded-[20px]" />
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
