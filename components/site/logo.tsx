import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'full' | 'mark'
  className?: string
  priority?: boolean
}

export function Logo({ variant = 'full', className, priority = false }: LogoProps) {
  if (variant === 'mark') {
    return (
      <Image
        src="/brand/apex-mark-white.png"
        alt="Apex Co. logo mark"
        width={140}
        height={130}
        priority={priority}
        className={cn('h-9 w-auto select-none', className)}
      />
    )
  }

  return (
    <Image
      src="/brand/apex-logo-white.png"
      alt="Apex Co."
      width={401}
      height={164}
      priority={priority}
      className={cn('h-8 w-auto select-none', className)}
    />
  )
}
