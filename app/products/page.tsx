import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Code, Server, Shield, Zap } from 'lucide-react'

const products = [
  {
    title: 'Cloud Platform',
    description: 'Scalable cloud infrastructure for modern applications',
    icon: Server,
    features: [
      'Auto-scaling infrastructure',
      'Global CDN',
      'Managed databases',
      'Container orchestration',
    ],
  },
  {
    title: 'API Suite',
    description: 'Comprehensive API solutions for developers',
    icon: Code,
    features: [
      'RESTful APIs',
      'GraphQL support',
      'WebSocket integration',
      'API analytics',
    ],
  },
  {
    title: 'Security Suite',
    description: 'Enterprise-grade security solutions',
    icon: Shield,
    features: [
      'DDoS protection',
      'WAF integration',
      'SSL/TLS management',
      'Security monitoring',
    ],
  },
  {
    title: 'Performance Tools',
    description: 'Optimize your application performance',
    icon: Zap,
    features: [
      'Real-time monitoring',
      'Performance analytics',
      'Load testing',
      'Optimization tools',
    ],
  },
]

export default function ProductsPage() {
  return (
    <Container>
      <Section className="py-20">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions for modern businesses
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product) => (
              <div
                key={product.title}
                className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <product.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Enterprise Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
              <p className="text-white/80 mb-8">
                Custom solutions tailored to your business needs with dedicated support and advanced features.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="/enterprise"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </a>
                <a
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Our products work together seamlessly, providing a complete solution for your business needs.
              Choose the features you need and scale as you grow.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/docs"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                View Documentation
              </a>
              <a
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </Container>
  )
} 