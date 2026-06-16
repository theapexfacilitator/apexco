import Image from 'next/image'
import { Linkedin, Twitter } from 'lucide-react'
import { TEAM, FOUNDERS_MESSAGE } from '@/lib/site-data'
import { Reveal } from './reveal'

export function Team() {
  return (
    <section id="team" className="scroll-anchor bg-brand-cloud-soft py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              From the Founders
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Meet the people behind Apex Co.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          <Reveal delay={0.1}>
            <div className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_rgba(15,28,46,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(15,28,46,0.14)]">
              <div className="relative aspect-square overflow-hidden bg-brand-cloud">
                <Image
                  src={TEAM[0]?.image}
                  alt={`${TEAM[0]?.name}, ${TEAM[0]?.role} at Apex Co.`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={TEAM[0]?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${TEAM[0]?.name} on LinkedIn`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy transition-colors hover:bg-brand-orange hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  {TEAM[0]?.twitter && (
                    <a
                      href={TEAM[0]?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${TEAM[0]?.name} on X`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy transition-colors hover:bg-brand-orange hover:text-white"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold tracking-tight text-brand-navy">
                  {TEAM[0]?.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-brand-orange">{TEAM[0]?.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-ash">{TEAM[0]?.bio}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-center">
              <p className="text-center text-lg leading-relaxed text-brand-navy">
                {FOUNDERS_MESSAGE}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_rgba(15,28,46,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(15,28,46,0.14)]">
              <div className="relative aspect-square overflow-hidden bg-brand-cloud">
                <Image
                  src={TEAM[1]?.image}
                  alt={`${TEAM[1]?.name}, ${TEAM[1]?.role} at Apex Co.`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={TEAM[1]?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${TEAM[1]?.name} on LinkedIn`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy transition-colors hover:bg-brand-orange hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  {TEAM[1]?.twitter && (
                    <a
                      href={TEAM[1]?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${TEAM[1]?.name} on X`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy transition-colors hover:bg-brand-orange hover:text-white"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold tracking-tight text-brand-navy">
                  {TEAM[1]?.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-brand-orange">{TEAM[1]?.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-ash">{TEAM[1]?.bio}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
