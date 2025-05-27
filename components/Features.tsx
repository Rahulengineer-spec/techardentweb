'use client'

import { motion } from 'framer-motion'
import { Container, Section } from './Layout'
import { FadeIn, StaggerContainer, StaggerChild } from './Animations'
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Cloud, 
  LineChart, 
  Shield 
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Tailored software solutions built with modern technologies and best practices.',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and serverless applications.',
    color: 'from-cyan-500/20 to-cyan-600/20'
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Data-driven insights and analytics to power your business decisions.',
    color: 'from-orange-500/20 to-orange-600/20'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security and compliance for your applications.',
    color: 'from-red-500/20 to-red-600/20'
  }
]

export function Features() {
  return (
    <Section className="bg-gray-900">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We offer end-to-end services to help you build, scale, and maintain your digital products
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerChild key={feature.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
} 