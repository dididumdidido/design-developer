import { PlaceholderImage } from "@/components/site/placeholder-image";
import { Container, Eyebrow, Glow, OnlineDot, Reveal, SlideDashes } from "@/components/site/primitives";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-32">
      <Glow className="-right-32 top-1/4 size-[40rem] opacity-80" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="headline mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">{about.title}</h2>
            <SlideDashes total={5} active={4} className="mt-6" />
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.06}>
              <p className="mt-6 text-lg leading-relaxed text-silver">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-[15px] font-semibold text-ink">{about.signature}</p>
            {/* Section accent: lime availability light */}
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-silver">
              <OnlineDot /> {about.status}
            </span>
          </Reveal>
        </div>
        <Reveal delay={0.12} y={40} className="mx-auto w-full max-w-[460px]">
          <PlaceholderImage slot={about.image} aspect="aspect-[4/5]" float={false} />
        </Reveal>
      </Container>
    </section>
  );
}
