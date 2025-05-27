'use client'

import { motion } from 'framer-motion'
import { Container, Section } from './Layout'
import { FadeIn, HoverScale } from './Animations'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    title: 'Enterprise Platform',
    description: 'A comprehensive solution for large organizations, featuring advanced analytics, workflow automation, and enterprise-grade security.',
    features: [
      'Advanced Analytics Dashboard',
      'Workflow Automation',
      'Role-based Access Control',
      'API Integration Hub'
    ],
    image: '/images/products/enterprise.jpg',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    title: 'SaaS Solution',
    description: 'A scalable platform for growing businesses, with subscription management, user analytics, and automated billing.',
    features: [
      'Subscription Management',
      'User Analytics',
      'Automated Billing',
      'Multi-tenant Architecture'
    ],
    image: '/images/products/saas.jpg',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    title: 'Mobile Experience',
    description: 'Native mobile applications for iOS and Android, delivering seamless user experiences across all devices.',
    features: [
      'Cross-platform Development',
      'Offline Capabilities',
      'Push Notifications',
      'Biometric Authentication'
    ],
    image: '/images/products/mobile.jpg',
    color: 'from-green-500/20 to-green-600/20'
  }
]

export function ProductShowcase() {
  return (
    <Section className="bg-black">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Our Products
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our suite of powerful solutions designed to transform your business
          </p>
        </FadeIn>

        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Product Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-50`} />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <HoverScale>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </HoverScale>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
} 