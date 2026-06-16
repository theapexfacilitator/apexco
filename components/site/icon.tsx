import {
  Code,
  TrendingUp,
  Building2,
  Ship,
  Megaphone,
  FlaskConical,
  Compass,
  Landmark,
  Network,
  Handshake,
  type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  code: Code,
  'trending-up': TrendingUp,
  building: Building2,
  ship: Ship,
  megaphone: Megaphone,
  flask: FlaskConical,
  compass: Compass,
  landmark: Landmark,
  network: Network,
  handshake: Handshake,
}

interface BrandIconProps {
  name?: string
  className?: string
}

export function BrandIcon({ name, className }: BrandIconProps) {
  const Cmp = (name && ICON_MAP[name]) || Network
  return <Cmp className={className} aria-hidden="true" />
}
