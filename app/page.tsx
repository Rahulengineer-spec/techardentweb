import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/HeroSection'
import { Features } from '@/components/Features'
import { MissionStatement } from '@/components/MissionStatement'
import { CompanyTimeline } from '@/components/CompanyTimeline'

// Lazy load components that are below the fold
const LazyProductShowcase = dynamic(() => import('@/components/ProductShowcase').then(mod => ({ default: mod.ProductShowcase })))
const LazyPortfolioCards = dynamic(() => import('@/components/PortfolioCards').then(mod => ({ default: mod.PortfolioCards })))
const LazyAboutSection = dynamic(() => import('@/components/AboutSection').then(mod => ({ default: mod.AboutSection })))
const LazyTestimonials = dynamic(() => import('@/components/Testimonials').then(mod => ({ default: mod.Testimonials })))
const LazyFAQ = dynamic(() => import('@/components/FAQ').then(mod => ({ default: mod.FAQ })))

// Enable static generation with ISR
export const revalidate = 3600 // Revalidate every hour

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionStatement />
      <CompanyTimeline />
      <Features />
      <LazyProductShowcase />
      <LazyPortfolioCards />
      <LazyAboutSection />
      <LazyTestimonials />
      <LazyFAQ />
    </main>
  )
}
