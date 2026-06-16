import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXTAUTH_URL || 'https://apexco.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Apex Co. — One Network. Many Ventures.',
    template: '%s | Apex Co.',
  },
  description:
    'Apex Co. is a venture network — a family of companies spanning software, real estate, trade, media, and innovation. One platform. Shared expertise. Compounding growth.',
  keywords: [
    'Apex Co.',
    'ventures',
    'venture network',
    'holding company',
    'subsidiaries',
    'investment',
    'software',
    'real estate',
    'logistics',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Apex Co.',
    title: 'Apex Co. — One Network. Many Ventures.',
    description:
      'A family of companies spanning software, real estate, trade, media, and innovation.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Apex Co.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Co. — One Network. Many Ventures.',
    description:
      'A family of companies spanning software, real estate, trade, media, and innovation.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          {/* IMPORTANT: Do not remove — handles chunk loading race conditions in the dev server */}
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
