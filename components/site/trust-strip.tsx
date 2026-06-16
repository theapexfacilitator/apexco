import { PARTNERS } from '@/lib/site-data'

export function TrustStrip() {
  const items = [...(PARTNERS ?? []), ...(PARTNERS ?? [])]
  return (
    <section className="border-y border-border bg-brand-cloud-soft py-10">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-brand-ash">
          Trusted by operators &amp; partners across industries
        </p>
        <div className="mask-fade-x mt-7 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {items?.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-brand-navy/35 transition-colors hover:text-brand-navy/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
