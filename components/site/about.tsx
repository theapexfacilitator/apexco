import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const POINTS = [
  'A single platform powering many companies',
  'Shared talent and operating systems',
  'Long-term ownership, not quick exits',
  'Founders and operators at the center',
]

export function About() {
  return (
    <section id="about" className="scroll-anchor relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-60" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-cloud shadow-[0_24px_60px_rgba(15,28,46,0.18)]">
              <Image
                src="/images/about-network.png"
                alt="The Apex Co. leadership team collaborating in a modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-2 hidden rounded-xl border border-border bg-white p-5 shadow-[0_18px_44px_rgba(15,28,46,0.16)] sm:block">
              <p className="font-display text-3xl font-bold text-brand-navy">9</p>
              <p className="mt-0.5 text-sm font-medium text-brand-ash">markets worldwide</p>
            </div>
            <div className="absolute -left-3 -top-3 -z-10 h-24 w-24 rounded-2xl bg-brand-orange/15" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              About the network
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              One company.
              <br className="hidden sm:block" /> A network of ventures.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-brand-ash">
              Apex Co. is a ventures company — a holding network of subsidiaries and sister
              companies built to win in their own markets. We provide the systems and
              operating muscle so each brand can move faster and grow further than it
              could alone.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {POINTS?.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/12 text-brand-orange">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] font-medium text-brand-navy">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#network"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-navy-soft"
            >
              Meet our companies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
