import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SUBSIDIARIES } from '@/lib/site-data'
import { BrandIcon } from './icon'
import { Reveal } from './reveal'

export function Portfolio() {
  return (
    <section id="network" className="scroll-anchor bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Our network
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
              One company, several brands
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-brand-ash">
              Each company below is part of the Apex Co. network. Explore them and visit their
              sites directly.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SUBSIDIARIES?.map((company, i) => (
            <Reveal key={company?.name} delay={(i % 3) * 0.08}>
              <a
                href={company?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_rgba(15,28,46,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-[0_26px_50px_rgba(15,28,46,0.16)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-cloud">
                  <Image
                    src={company?.image}
                    alt={`${company?.name} — ${company?.sector}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-navy shadow-sm">
                    <BrandIcon name={company?.iconKey} className="h-3.5 w-3.5 text-brand-orange" />
                    {company?.sector}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-white opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-brand-navy">
                    {company?.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-brand-ash">
                    {company?.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {company?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-cloud-soft px-2.5 py-1 text-[11px] font-medium text-brand-ash"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                    Visit site
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-brand-ash">
            Building something that belongs in the network?{' '}
            <a href="#contact" className="font-semibold text-brand-orange hover:underline">
              Let&apos;s talk →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
