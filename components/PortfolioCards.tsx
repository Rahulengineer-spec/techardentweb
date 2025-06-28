'use client'

import { motion } from 'framer-motion'
import { Container, Section } from './Layout'
import { FadeIn, StaggerContainer, StaggerChild } from './Animations'
import { OptimizedImage } from './OptimizedImage'

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory and payment processing.',
    image: '/images/portfolio/ecommerce.jpg',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#'
  },
  {
    title: 'AI Dashboard',
    description: 'Interactive dashboard for monitoring and analyzing AI model performance.',
    image: '/images/portfolio/ai-dashboard.jpg',
    tags: ['React', 'TensorFlow', 'D3.js'],
    link: '#'
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application with biometric authentication.',
    image: '/images/portfolio/banking-app.jpg',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: '#'
  },
  {
    title: 'Social Media Platform',
    description: 'Real-time social networking platform with live chat and content sharing.',
    image: '/images/portfolio/social-media.jpg',
    tags: ['Vue.js', 'Socket.io', 'PostgreSQL'],
    link: '#'
  }
]

export function PortfolioCards() {
  return (
    <Section className="bg-gradient-to-b from-gray-900 to-black">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and innovations
          </p>
        </FadeIn>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
          role="list"
          aria-label="Portfolio projects"
        >
          {portfolioItems.map((item, index) => (
            <StaggerChild key={item.title} role="listitem">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              >
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <OptimizedImage
                      src={item.image}
                      alt={`${item.title} project preview`}
                      width={48}
                      height={48}
                      className="rounded-lg"
                      priority={index < 2}
                    />
                    <motion.a
                      href={item.link}
                      whileHover={{ scale: 1.1 }}
                      className="text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-1"
                      aria-label={`View ${item.title} project details`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div 
                    className="flex flex-wrap gap-2"
                    role="list"
                    aria-label={`Technologies used in ${item.title}`}
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}