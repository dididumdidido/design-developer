import { Container } from "@/components/site/primitives";
import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-100/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-violet-brand to-violet-bright text-[11px] font-bold text-white">
                DD
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink">{site.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver">{footer.tagline}</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm font-medium text-violet-brand hover:underline">
              {site.email}
            </a>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-graphite">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-silver transition-colors hover:text-violet-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="metal-line mt-12 h-px w-full" />
        <div className="mt-6 flex flex-col justify-between gap-3 text-[13px] text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>design-developer.com</p>
        </div>
      </Container>
    </footer>
  );
}
