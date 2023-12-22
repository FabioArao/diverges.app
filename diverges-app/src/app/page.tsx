import Content from '@/components/content'
import Feature from '@/components/feature'
import HeroSection from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Feature />
    </main>
  )
}
