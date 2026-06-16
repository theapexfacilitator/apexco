import { Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react'
import { Logo } from './logo'
import { SITE, NAV_LINKS, SUBSIDIARIES } from '@/lib/site-data'

export function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: SITE.social.twitter, label: 'X' },
    { icon: Instagram, href: SITE.social.instagram, label: 'Instagram' },
  ]

  return (
    <footer className="relative overflow-hidden bg-brand-navy-deep text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="full" className="h-8" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {SITE.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials?.map((s) => {
                const Icon = s?.icon
                return (
                  <a
                    key={s?.label}
                    href={s?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s?.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Company</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS?.map((link) => (
                <li key={link?.href}>
                  <a href={link?.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Our network</h3>
            <ul className="mt-5 space-y-3">
              {SUBSIDIARIES?.map((company) => (
                <li key={company?.name}>
                  <a
                    href={company?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {company?.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Connect</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-white/65 transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="max-w-[14rem] text-sm leading-relaxed text-white/55">{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-sm text-white/45">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
