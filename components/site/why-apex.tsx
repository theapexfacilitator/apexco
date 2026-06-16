import { PILLARS } from '@/lib/site-data'
import { BrandIcon } from './icon'
import { Reveal } from './reveal'

export function WhyApex() {
  return (
    <section id="why" className="scroll-anchor bg-brand-navy py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Why Apex
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A better way to build companies
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-white/75">
              We pair the resources of a holding company with the speed and focus of a
              startup — so every venture in the network has an unfair advantage.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS?.map((pillar, i) => (
            <Reveal key={pillar?.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-[0_2px_10px_rgba(15,28,46,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-[0_22px_44px_rgba(15,28,46,0.12)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-orange-soft transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <BrandIcon name={pillar?.iconKey} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-navy">
                  {pillar?.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-ash">
                  {pillar?.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
