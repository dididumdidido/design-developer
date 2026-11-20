import { ArrowUpRight, LineChart, MonitorSmartphone, Target, type LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { Container, Glow, Reveal, SectionHeader } from "@/components/site/primitives";
import { agencyIntro, services, site } from "@/lib/content";

const icons: Record<string, LucideIcon> = { MonitorSmartphone, Target, LineChart };

export function Services() {
  return (
    <section id="agency" className="relative overflow-hidden py-20 lg:py-32">
      <Glow className="-right-40 top-10 size-[36rem] opacity-70" />
      <Container className="relative">
        <SectionHeader {...agencyIntro} dashes={{ total: 5, active: 3 }} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <Card className="group flex h-full flex-col overflow-hidden">
                  <div className="px-7 pt-7">
                    <PlaceholderImage slot={service.image} aspect="aspect-[4/3]" rounded="rounded-[20px]" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-2.5 text-violet-brand">
                      <Icon className="size-4" strokeWidth={2} />
                      <span className="eyebrow tracking-[0.22em]">0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-ink">{service.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-silver">{service.description}</p>
                    {/* Section accent: lime on hover */}
                    <a
                      href={site.ctaHref}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-brand transition-colors group-hover:text-lime-deep"
                    >
                      Talk to us <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
