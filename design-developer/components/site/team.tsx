import { CalendarCheck, Megaphone, PenLine, Search, Workflow, Zap, type LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container, Glow, OnlineDot, Reveal, SectionHeader } from "@/components/site/primitives";
import { team, teamIntro } from "@/lib/content";

const icons: Record<string, LucideIcon> = { Search, Megaphone, Zap, PenLine, Workflow, CalendarCheck };

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-20 lg:py-32">
      <Glow className="left-1/2 top-1/3 size-[50rem] -translate-x-1/2 opacity-70" />
      <Container className="relative">
        <SectionHeader {...teamIntro} dashes={{ total: 5, active: 2 }} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => {
            const Icon = icons[member.icon];
            return (
              <Reveal key={member.role} delay={i * 0.06}>
                <Card className="group h-full p-7">
                  <div className="flex items-start justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl border border-violet-brand/15 bg-gradient-to-br from-white to-lavender text-violet-brand shadow-[0_8px_20px_-10px_rgb(124_58_237/0.5)] transition-transform duration-500 group-hover:scale-105">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-silver">
                      <OnlineDot className="size-1.5" /> Online
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-medium tracking-tight text-ink">{member.role}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-silver">{member.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
