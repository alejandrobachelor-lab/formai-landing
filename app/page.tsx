import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Problem from '@/components/sections/Problem'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import UseCases from '@/components/sections/UseCases'
import Pricing from '@/components/sections/Pricing'
import Waitlist from '@/components/sections/Waitlist'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Problem />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  )
}
