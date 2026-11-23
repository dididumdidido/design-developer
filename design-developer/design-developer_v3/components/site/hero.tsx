import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BookButton, Container } from "@/components/site/shared";
import { founderPhoto, hero, heroPhoto, offer, trust } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          {/* Mobile: face on the first screen */}
          <div className="mb-6 flex items-center gap-3 lg:hidden">
            <Image
              src={founderPhoto.src}
              alt=""
              width={56}
              height={56}
              priority
              className="size-14 rounded-full border border-border object-cover"
            />
            <span className="text-[15px] font-medium text-ink">Adina Call, founder</span>
          </div>
          <h1 className="display text-[2.7rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem]">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft sm:text-xl">
            {hero.subtitle}
            {offer.goLiveDays ? ` Live in ${offer.goLiveDays} days.` : ""}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BookButton />
            <Button asChild size="lg" variant="outline">
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            width={heroPhoto.width}
            height={heroPhoto.height}
            priority
            sizes="(min-width: 1024px) 520px, 90vw"
            className="aspect-[4/3] w-full rounded-2xl border border-border object-cover object-[60%_center]"
          />
          <p className="absolute -bottom-4 left-5 rounded-full border border-border bg-white px-4 py-2 text-[13px] font-medium text-ink shadow-sm">
            Adina Call, founder
          </p>
        </div>
      </Container>

      {/* Trust strip */}
      <Container className="mt-16 lg:mt-20">
        <ul className="flex flex-col gap-3 border-y border-border py-5 text-[15px] font-medium text-body sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10">
          {trust.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
