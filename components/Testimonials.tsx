'use client'

import { motion } from 'framer-motion'
import { FadeIn, SlideIn, StaggerContainer, StaggerChild } from './Animations'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    quote: 'The platform has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    company: 'DevFlow',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    quote: 'As a developer, I appreciate the attention to detail and performance. The API integration was seamless, and the documentation is excellent.',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'UX Designer',
    company: 'DesignHub',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    quote: "The design system is beautiful and consistent. It's rare to find a product that balances aesthetics with functionality so well.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied teams who have transformed their workflow with our platform
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerChild key={testimonial.name}>
              <motion.div
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                {/* Floating Quote Icon */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </motion.div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <motion.div
                    className="relative w-12 h-12 rounded-full overflow-hidden mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* Stats Section */}
        <FadeIn className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Users', value: '10K+' },
              { label: 'Teams', value: '500+' },
              { label: 'Countries', value: '50+' },
              { label: 'Satisfaction', value: '98%' }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="p-4"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
} 