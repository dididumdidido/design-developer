import { Container, SectionTitle } from "@/components/site/shared";
import { howItWorks, offer } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <Container>
        <SectionTitle title={howItWorks.title} />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {howItWorks.steps.map((s, i) => (
            <li key={s.title} className="surface p-7">
              <span className="grid size-9 place-items-center rounded-full bg-tint font-display text-base font-semibold text-primary">
                {i + 1}
              </span>
              <h3 className="display mt-5 text-xl">
                {s.title}
                {i === 2 && offer.goLiveDays ? ` in ${offer.goLiveDays} days` : ""}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
