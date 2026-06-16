'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import { toast } from 'sonner'
import { Mail, ArrowRight } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault?.()
    const value = email?.trim() ?? ''
    if (!EMAIL_RE.test(value)) {
      toast.error('Please enter a valid email address.')
      return
    }
    setEmail('')
    toast.success('You’re subscribed! Watch your inbox for network updates.')
  }

  return (
    <section className="bg-brand-cloud-soft py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-white p-8 shadow-[0_2px_12px_rgba(15,28,46,0.05)] sm:p-10 lg:flex-row lg:justify-between lg:gap-12 lg:p-12">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
              <Mail className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              Stay in the loop
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-brand-ash">
              Occasional updates on new ventures, opportunities, and milestones across the
              Apex Co. network. No spam — unsubscribe anytime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md lg:w-auto">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email ?? ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e?.target?.value ?? '')}
                placeholder="you@company.com"
                className="w-full rounded-full border border-border bg-brand-cloud-soft px-5 py-3 text-[15px] text-brand-navy outline-none transition-all placeholder:text-brand-ash-light focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20 sm:w-72"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-navy-soft"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
