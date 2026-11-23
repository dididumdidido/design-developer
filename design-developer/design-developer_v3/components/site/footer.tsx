import { Container, Wordmark } from "@/components/site/shared";
import { agencyLine, footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-zinc-100">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-3 text-[15px] leading-relaxed text-soft">{footer.tagline}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-soft">{agencyLine}</p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Agency services")}`}
              className="inline-block py-3 text-[15px] font-medium text-primary hover:underline"
            >
              Ask about agency work
            </a>
          </div>
          <nav aria-label="Footer" className="flex flex-col md:items-end">
            {footer.links.map((l) => (
              <a key={l.href} href={l.href} className="py-3 text-[15px] text-soft hover:text-ink md:py-2">
                {l.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="py-3 text-[15px] font-medium text-primary hover:underline md:py-2">
              {site.email}
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-zinc-300 pt-6 text-[13px] text-soft sm:flex-row">
          <p>© {new Date().getFullYear()} Design Developer LLC. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
