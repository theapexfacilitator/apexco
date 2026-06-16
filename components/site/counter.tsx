'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value?: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function Counter({ value = 0, prefix = '', suffix = '', duration = 1800, className }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref?.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setDisplay(value ?? 0)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          if (entry?.isIntersecting && !started.current) {
            started.current = true
            const target = value ?? 0
            const start = performance.now()
            const step = (now: number) => {
              const progress = Math.min((now - start) / (duration || 1), 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(target * eased))
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix ?? ''}
      {(display ?? 0).toLocaleString('en-US')}
      {suffix ?? ''}
    </span>
  )
}
