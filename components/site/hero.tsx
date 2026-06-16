'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { HERO_STATS, SITE } from '@/lib/site-data'

export function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-brand-navy">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20 h-[128%]">
        <Image
          src="/images/hero-bg.png"
          alt="Modern corporate skyline at dusk representing the Apex Co. network"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 -z-10 bg-brand-navy/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/85 via-brand-navy/75 to-brand-navy" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 -z-10 bg-ember" />

      <div className="mx-auto w-full max-w-[1200px] px-5 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-orange" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
            </span>
            {SITE.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            We build, back &amp; scale the{' '}
            <span className="bg-gradient-to-r from-brand-orange-soft via-brand-orange to-brand-orange-bright bg-clip-text text-transparent">
              ventures of tomorrow.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
          >
            Apex Co. is a venture network — a family of companies spanning software, real
            estate, trade, media, and innovation. One platform. Shared expertise.
            Compounding growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#network"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_34px_rgba(201,107,44,0.4)] transition-all hover:bg-brand-orange-bright hover:shadow-[0_16px_40px_rgba(201,107,44,0.55)]"
            >
              Explore the network
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
            >
              Partner with us
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
          >
            {HERO_STATS?.map((stat) => (
              <div key={stat?.label} className="border-l border-white/15 pl-4">
                <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat?.value}
                  {stat?.suffix ?? ''}
                </dt>
                <dd className="mt-1 text-sm text-white/60">{stat?.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
