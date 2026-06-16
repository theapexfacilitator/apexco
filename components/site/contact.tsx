'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Twitter, Instagram } from 'lucide-react'
import { SITE } from '@/lib/site-data'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', company: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitting, setSubmitting] = useState(false)

  const update = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...(prev ?? INITIAL), [key]: e?.target?.value ?? '' }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault?.()
    const name = form?.name?.trim() ?? ''
    const email = form?.email?.trim() ?? ''
    const message = form?.message?.trim() ?? ''

    if (!name || !email || !message) {
      toast.error('Please fill in your name, email, and message.')
      return
    }
    if (!EMAIL_RE.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    // Client-side only — no backend. Simulate a submission for instant feedback.
    window.setTimeout(() => {
      setSubmitting(false)
      setForm(INITIAL)
      toast.success('Thanks! Your message has been received. We’ll be in touch shortly.')
    }, 900)
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/[^+\d]/g, '')}` },
    { icon: MapPin, label: 'Office', value: SITE.address, href: undefined },
  ]

  const socials = [
    { icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: SITE.social.twitter, label: 'X' },
    { icon: Instagram, href: SITE.social.instagram, label: 'Instagram' },
  ]

  return (
    <section id="contact" className="scroll-anchor relative overflow-hidden bg-brand-navy py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 bg-ember opacity-70" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-soft">
            Get in touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Let&apos;s talk about what&apos;s next
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
            Questions about Apex Co. or one of our companies? Looking to partner or invest?
            Send us a note and the right person will get back to you.
          </p>

          <div className="mt-10 space-y-5">
            {contactItems?.map((item) => {
              const Icon = item?.icon
              const content = (
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-brand-orange-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/45">
                      {item?.label}
                    </p>
                    <p className="mt-0.5 text-[15px] font-medium text-white">{item?.value}</p>
                  </div>
                </div>
              )
              return item?.href ? (
                <a key={item?.label} href={item?.href} className="block transition-opacity hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={item?.label}>{content}</div>
              )
            })}
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socials?.map((s) => {
              const Icon = s?.icon
              return (
                <a
                  key={s?.label}
                  href={s?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s?.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                  Full name <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form?.name ?? ''}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-border bg-brand-cloud-soft px-4 py-3 text-[15px] text-brand-navy outline-none transition-all placeholder:text-brand-ash-light focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                  Email <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form?.email ?? ''}
                  onChange={update('email')}
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-border bg-brand-cloud-soft px-4 py-3 text-[15px] text-brand-navy outline-none transition-all placeholder:text-brand-ash-light focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                Company <span className="font-normal text-brand-ash-light">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                value={form?.company ?? ''}
                onChange={update('company')}
                placeholder="Your company"
                className="w-full rounded-lg border border-border bg-brand-cloud-soft px-4 py-3 text-[15px] text-brand-navy outline-none transition-all placeholder:text-brand-ash-light focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                Message <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={form?.message ?? ''}
                onChange={update('message')}
                placeholder="Tell us how we can help…"
                className="w-full resize-none rounded-lg border border-border bg-brand-cloud-soft px-4 py-3 text-[15px] text-brand-navy outline-none transition-all placeholder:text-brand-ash-light focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_rgba(201,107,44,0.35)] transition-all hover:bg-brand-orange-bright disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-brand-ash">
              We typically respond within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
