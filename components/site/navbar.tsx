'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from './logo'
import { NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window?.scrollY ?? 0) > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-brand-navy/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8">
        <a href="#home" onClick={handleNavClick} className="flex items-center gap-2" aria-label="Apex Co. home">
          <Logo variant="full" priority className="h-7 lg:h-8" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {link?.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(201,107,44,0.35)] transition-all hover:bg-brand-orange-bright hover:shadow-[0_10px_30px_rgba(201,107,44,0.5)] lg:inline-flex"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-brand-navy/95 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4 sm:px-6">
              {NAV_LINKS?.map((link) => (
                <a
                  key={link?.href}
                  href={link?.href}
                  onClick={handleNavClick}
                  className="rounded-md px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link?.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
