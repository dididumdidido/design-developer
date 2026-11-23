import Image from "next/image";

import { Container } from "@/components/site/shared";
import { about, aboutPhoto, awardsPhotos, lifestyle } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Image
          src={aboutPhoto.src}
          alt={aboutPhoto.alt}
          width={aboutPhoto.width}
          height={aboutPhoto.height}
          sizes="(min-width: 1024px) 440px, 90vw"
          className="mx-auto aspect-[4/5] w-full max-w-md rounded-2xl border border-border object-cover object-[center_40%] lg:max-w-none"
        />
        <div className="lg:pt-6">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">About</p>
          <h2 className="display mt-3 text-3xl leading-tight sm:text-[2.6rem]">{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-5 text-lg leading-relaxed text-soft">
              {p}
            </p>
          ))}
          <p className="mt-8 font-display text-lg font-semibold text-ink">{about.signature}</p>

          {awardsPhotos.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {awardsPhotos.map((a) => (
                <figure key={a.src}>
                  <Image
                    src={a.src}
                    alt={a.alt}
                    width={a.width}
                    height={a.height}
                    sizes="(min-width: 1024px) 300px, 90vw"
                    className="aspect-[3/2] w-full rounded-xl border border-border object-cover"
                  />
                  <figcaption className="mt-2 text-[14px] text-soft">{a.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </Container>

      {lifestyle.photos.length > 0 && (
        <Container className="mt-14">
          <figure>
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {lifestyle.photos.map((p) => (
                <Image
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 1152px) 360px, 33vw"
                  className="aspect-[4/5] w-full rounded-xl border border-border object-cover object-[center_30%]"
                />
              ))}
            </div>
            <figcaption className="mt-4 font-display text-xl font-medium text-ink sm:text-2xl">{lifestyle.caption}</figcaption>
          </figure>
        </Container>
      )}
    </section>
  );
}
