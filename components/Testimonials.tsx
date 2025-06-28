'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn, StaggerChild, StaggerContainer } from './Animations';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    quote: 'The platform has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    company: 'DevFlow',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    quote: 'As a developer, I appreciate the attention to detail and performance. The API integration was seamless, and the documentation is excellent.',
    rating: 5
  },
  {
    id: 3,
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

        <StaggerContainer>
          {testimonials.map((testimonial) => (
            <StaggerChild key={testimonial.id}>
              <FadeIn>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl h-full flex flex-col">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"></path></svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center mb-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
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