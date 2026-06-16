import { STATS } from '@/lib/site-data'
import { Counter } from './counter'
import { Reveal } from './reveal'

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 lg:py-20">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 bg-ember opacity-70" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-soft">
            The Apex network at a glance
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS?.map((stat, i) => (
            <Reveal key={stat?.label} delay={i * 0.08}>
              <div className="text-center">
                <Counter
                  value={stat?.value}
                  prefix={stat?.prefix}
                  suffix={stat?.suffix}
                  className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
                />
                <p className="mt-2 text-sm font-medium text-white">{stat?.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
