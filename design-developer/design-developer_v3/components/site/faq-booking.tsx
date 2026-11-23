import Image from "next/image";
import { Mail } from "lucide-react";

import { BookButton, Container } from "@/components/site/shared";
import { bookingPhoto, faq, finalCta, site } from "@/lib/content";

export function FaqBooking() {
  return (
    <section id="book" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <h2 className="display text-4xl leading-tight sm:text-5xl">{finalCta.title}</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-soft">{finalCta.subtitle}</p>
          </div>
          <Image
            src={bookingPhoto.src}
            alt={bookingPhoto.alt}
            width={bookingPhoto.width}
            height={bookingPhoto.height}
            sizes="(min-width: 1024px) 500px, 90vw"
            className="aspect-[3/2] w-full rounded-2xl border border-border object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          {/* FAQ */}
          <div id="faq">
            <h3 className="display text-2xl">{faq.title}</h3>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {faq.items.map((item) => (
                <details key={item.q} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="text-xl font-normal text-soft transition-transform group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-[15px] leading-relaxed text-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div id="calendar">
            {site.calendarEmbedUrl ? (
              <iframe
                src={site.calendarEmbedUrl}
                title="Book a strategy call with Adina Call"
                className="h-[720px] w-full rounded-xl border border-border bg-white"
                loading="lazy"
              />
            ) : (
              <div className="surface flex h-full flex-col items-start justify-center gap-5 bg-muted p-8 sm:p-10">
                <Mail className="size-6 text-primary" aria-hidden />
                <p className="display font-display text-2xl text-ink">Request your strategy call</p>
                <p className="text-[16px] leading-relaxed text-soft">
                  Send a quick note with the busywork you want off your plate first, and Adina will reply with times
                  that work.
                </p>
                <BookButton />
                <a href={`mailto:${site.email}`} className="py-2 text-[15px] font-medium text-primary hover:underline">
                  {site.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
