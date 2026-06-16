import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function CtaBand() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-14 text-center shadow-[0_30px_70px_rgba(15,28,46,0.28)] sm:px-12 lg:py-20">
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="absolute inset-0 bg-ember" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to join the network?
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Whether you&apos;re a founder, partner, or investor — there&apos;s a place for you
                in the Apex network. Let&apos;s start the conversation.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_34px_rgba(201,107,44,0.45)] transition-all hover:bg-brand-orange-bright"
                >
                  Get in touch
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#network"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
                >
                  Explore the network
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
