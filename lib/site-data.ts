export const SITE = {
  name: 'Apex Co.',
  tagline: 'One network. Many ventures.',
  description:
    'Apex Co. is a venture network — a family of companies spanning software, real estate, trade, media, and innovation.',
  email: 'mostafa@myapexco.ca',
  phone: '+1 587 778 8372',
  address: 'Edmonton, AB',
  social: {
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com',
  },
} as const

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Network', href: '#network' },
  { label: 'Why Apex', href: '#why' },
  { label: 'Leadership', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export interface Subsidiary {
  name: string
  sector: string
  iconKey: string
  description: string
  href: string
  image: string
  tags: string[]
}

export const SUBSIDIARIES: Subsidiary[] = [
  {
    name: 'Apex Apparel',
    sector: 'Custom Apparel',
    iconKey: 'palette',
    description:
      'Premium custom apparel solutions designed and crafted for brands that demand excellence.',
    href: 'https://apex-apparel.ca',
    image: '/images/sub-apparel.png',
    tags: ['Fashion', 'Custom Design', 'Brands'],
  },
  {
    name: 'Beyond Marketing',
    sector: 'Marketing & Strategy',
    iconKey: 'megaphone',
    description:
      'Integrated marketing solutions that drive growth, engagement, and measurable business results.',
    href: 'https://beyondmarketing.apexco.com',
    image: '/images/sub-marketing.png',
    tags: ['Strategy', 'Growth', 'Campaigns'],
  },
  {
    name: 'SerapoX',
    sector: 'Event Experiences & Design',
    iconKey: 'sparkles',
    description:
      'Immersive event experiences and design services that create lasting moments and connections.',
    href: 'https://serapox.com',
    image: '/images/sub-serapox.png',
    tags: ['Events', 'Design', 'Experience'],
  },
  {
    name: 'myChateau',
    sector: 'Construction & Design',
    iconKey: 'home',
    description:
      'Landscaping and interior renovation services that transform spaces with craftsmanship and vision.',
    href: 'https://mychateau.ca',
    image: '/images/sub-mychateau.png',
    tags: ['Construction', 'Landscaping', 'Interior Design'],
  },
  {
    name: 'Roots and Reach',
    sector: 'Arts, Culture & Heritage',
    iconKey: 'leaf',
    description:
      'Non-profit organization dedicated to preserving and promoting arts, culture, and heritage.',
    href: 'https://rootsandreach.apexco.com',
    image: '/images/sub-rootsreach.png',
    tags: ['NPO', 'Arts', 'Heritage'],
  },
  {
    name: 'NeuroX',
    sector: 'Sister Venture Network',
    iconKey: 'network',
    description:
      'A sister venture network connecting companies and opportunities across our ecosystem with strategic overlaps.',
    href: 'https://neurox.ca',
    image: '/images/sub-neurox.png',
    tags: ['Network', 'Ventures', 'Strategy'],
  },
  {
    name: 'The Apex Facilitator',
    sector: 'Strategic Facilitation',
    iconKey: 'compass',
    description:
      'Strategic facilitation and infrastructure building that transforms ideas into tangible realities.',
    href: 'https://www.instagram.com/theapexfacilitator/',
    image: '/images/sub-facilitator.png',
    tags: ['Strategy', 'Facilitation', 'Growth'],
  },
]

export interface StatItem {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export const HERO_STATS: StatItem[] = [
  { value: 6, label: 'Operating companies' },
  { value: 9, suffix: '+', label: 'Industries' },
  { value: 12, label: 'Global markets' },
  { value: 15, suffix: '+', label: 'Years building' },
]

export const STATS: StatItem[] = [
  { value: 7, label: 'Companies in the network' },
  { value: 500, suffix: '+', label: 'People across ventures' },
  { value: 9, label: 'Markets worldwide' },
]

export interface Pillar {
  iconKey: string
  title: string
  description: string
}

export const PILLARS: Pillar[] = [
  {
    iconKey: 'compass',
    title: 'Operator-led',
    description:
      'Every company is run by operators, not spectators. We build with our hands firmly on the wheel.',
  },
  {
    iconKey: 'sparkles',
    title: 'Network advantage',
    description:
      'Shared talent, systems, expertise, and growth playbooks that give every company an edge.',
  },
  {
    iconKey: 'network',
    title: 'Shared platform',
    description:
      'Talent, systems, finance, legal, and growth playbooks shared across the entire network.',
  },
  {
    iconKey: 'handshake',
    title: 'Founder-friendly',
    description:
      'We partner with founders and teams who want a backer that genuinely adds value.',
  },
]

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  linkedin: string
  twitter: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Mostafa Mohamed',
    role: 'Founder',
    image: '/images/team-mostafa.png',
    bio: 'An Edmonton-based entrepreneur with 15 years of experience building businesses across the tech, construction, and entertainment sectors. Mostafa focuses on strategic facilitation and creating the infrastructure that allows new ideas to become tangible realities.',
    linkedin: 'https://www.linkedin.com/in/mostafa-mohamed-b38898a5',
    twitter: '',
  },
  {
    name: 'Fatima I.',
    role: 'Executive Director',
    image: '/images/team-fatima.png',
    bio: 'As Executive Director of Apex Co., Fatima oversees strategic operations and partnership coordination across the entire multi-venture portfolio. She plays a vital role in managing vendor relationships and ensuring operational excellence across the organization\'s diverse brands.',
    linkedin: 'https://www.linkedin.com',
    twitter: '',
  },
]

export const FOUNDERS_MESSAGE =
  'Apex Co. was built on a simple belief: great ideas deserve the right people, systems, and opportunities to thrive. What began as a single entrepreneurial journey has evolved into a growing network of ventures, partnerships, and experiences united by a commitment to excellence, innovation, and community. Our mission is to create meaningful value by connecting vision with execution and helping people reach their apex.'

export const PARTNERS: string[] = [
  'Northwind Group',
  'Vantage Partners',
  'Meridian Capital',
  'Solstice Labs',
  'Harbor & Co.',
  'Atlas Ventures',
  'Beacon Industries',
  'Cedar Holdings',
  'Quanta Systems',
  'Lumen Brands',
]
