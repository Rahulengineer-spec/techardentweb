'use client'

import { motion } from 'framer-motion'
import { Container, Section } from './Layout'
import { FadeIn, HoverScale } from './Animations'
import { ArrowRight, Users, Award, Globe } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Team Members',
    description: 'Diverse team of experts'
  },
  {
    icon: Award,
    value: '100+',
    label: 'Projects Completed',
    description: 'Successful deliveries'
  },
  {
    icon: Globe,
    value: '20+',
    label: 'Countries',
    description: 'Global presence'
  }
]

export function AboutSection() {
  return (
    <Section className="bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                About TechArdent
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-6">
                Founded in 2020, TechArdent has grown from a small team of passionate developers to a full-service digital transformation company. We believe in creating technology that empowers businesses and improves lives.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-gray-400 mb-8">
                Our mission is to bridge the gap between complex technology and accessible solutions, making innovation available to businesses of all sizes. We combine technical expertise with creative thinking to deliver exceptional results.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <HoverScale>
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </HoverScale>
            </FadeIn>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <FadeIn key={stat.label} delay={0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation',
              description: 'We push boundaries and explore new technologies to create cutting-edge solutions.'
            },
            {
              title: 'Excellence',
              description: 'We maintain the highest standards in everything we do, from code quality to client service.'
            },
            {
              title: 'Collaboration',
              description: 'We believe in the power of teamwork and building strong partnerships with our clients.'
            }
          ].map((value, index) => (
            <FadeIn key={value.title} delay={0.2 + index * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
} 