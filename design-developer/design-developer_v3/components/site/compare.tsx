import { Container, SectionTitle } from "@/components/site/shared";
import { compare } from "@/lib/content";

export function Compare() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle title={compare.title} />
        <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-5 font-medium text-soft">
                  <span className="sr-only">Compare</span>
                </th>
                {compare.columns.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={i === 0 ? "bg-tint p-5 font-semibold text-primary" : "p-5 font-semibold text-ink"}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <th scope="row" className="p-5 font-medium text-ink">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={i} className={i === 0 ? "bg-tint p-5 font-medium text-ink" : "p-5 text-soft"}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
