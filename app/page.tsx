import dynamic from 'next/dynamic'
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
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-blue-900">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
          TechArdent
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 text-center">
          Building the future of technology, one innovation at a time.
        </p>
        <a href="/signup" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-300 transition-colors">
          Get Started Free
        </a>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-blue-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
            Why Choose TechArdent?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Cutting-Edge Innovation</h3>
              <p className="text-gray-300">We deliver the latest in AI, cloud, and digital transformation for your business.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Global Expertise</h3>
              <p className="text-gray-300">Our team brings experience from top tech companies worldwide.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Customer-First Approach</h3>
              <p className="text-gray-300">We build solutions tailored to your needs, with 24/7 support.</p>
            </div>
          </div>
        </div>
      </section>

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
