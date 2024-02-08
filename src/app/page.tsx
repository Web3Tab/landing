import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import Features from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CallToAction />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
