import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <PortfolioGrid />
<Services />
      <Contact />
      <Footer />
    </main>
  )
}
