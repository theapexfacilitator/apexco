import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { StatsBand } from '@/components/site/stats-band'
import { Portfolio } from '@/components/site/portfolio'
import { WhyApex } from '@/components/site/why-apex'
import { Team } from '@/components/site/team'
import { CtaBand } from '@/components/site/cta-band'
import { Contact } from '@/components/site/contact'
import { Newsletter } from '@/components/site/newsletter'
import { Footer } from '@/components/site/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsBand />
        <Team />
        <WhyApex />
        <CtaBand />
        <Portfolio />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
