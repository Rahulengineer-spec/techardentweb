'use client'

import { motion } from 'framer-motion'
import { CTAButton } from './CTAButton'

export function MissionStatement() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Empowering Innovation Through Accessible Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            At TechArdent, we bridge the gap between cutting-edge technology and everyday accessibility. 
            We believe that innovation should be inclusive, powerful, and transformative. 
            Our mission is to create digital solutions that empower businesses and individuals to achieve their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              text="Explore Our Solutions"
              href="/solutions"
              size="lg"
            />
            <CTAButton
              text="Join Our Team"
              href="/careers"
              variant="outline"
              size="lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 