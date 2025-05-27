'use client' // Ensure client component for useState and event handlers

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Shield, Users, Zap, Globe, Lock, Headphones } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react' // Import useState
import { EnterpriseContactForm } from '@/components/EnterpriseContactForm' // Import the new form

const features = [
  {
    title: 'Enterprise Security',
    description: 'Advanced security features including SSO, 2FA, and role-based access control',
    icon: Shield,
  },
  {
    title: 'Dedicated Support',
    description: '24/7 priority support with dedicated account managers and technical experts',
    icon: Headphones,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions and integrations to meet your specific business needs',
    icon: Zap,
  },
  {
    title: 'Global Infrastructure',
    description: 'Multi-region deployment with guaranteed uptime and performance',
    icon: Globe,
  },
  {
    title: 'Team Management',
    description: 'Advanced team collaboration features with granular permissions',
    icon: Users,
  },
  {
    title: 'Compliance',
    description: 'Enterprise-grade compliance with SOC 2, ISO 27001, and GDPR',
    icon: Lock,
  },
]

const benefits = [
  'Unlimited users and resources',
  'Custom SLA agreements',
  'Dedicated account management',
  'Advanced security features',
  'Custom integrations',
  'Priority support',
  'Training and onboarding',
  'Regular security audits',
]

export default function EnterprisePage() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      <Container>
        <Section className="py-16 md:py-24">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                TechArdent for Enterprise
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Powerful, secure, and scalable solutions designed to meet the demands of modern enterprise organizations.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits Section - Inspired by Linear/Pixelbin */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Enterprise Benefits</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documentation CTA - Inspired by Linear/Pixelbin */}
            <div className="text-center py-12 md:py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Explore Our Enterprise Documentation</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Dive deep into the technical details, security protocols, and integration guides for TechArdent&apos;s enterprise solutions.
              </p>
              <Link
                href="/enterprise/documentation"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-md hover:shadow-lg"
              >
                View Documentation
              </Link>
            </div>

            {/* Contact Section */}
            <div className="mt-16 md:mt-24 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Elevate Your Business?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Contact our enterprise team to discuss your specific requirements, get a custom quote, and learn how TechArdent can empower your organization.
              </p>
              <button
                onClick={() => setShowContactForm(true)} // Updated to open modal
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-md hover:shadow-lg"
              >
                Contact Sales
              </button>
            </div>
          </FadeIn>
        </Section>
      </Container>
      {showContactForm && (
        <EnterpriseContactForm 
          onClose={() => setShowContactForm(false)} 
          subject="Enterprise Sales Inquiry"
        />
      )}
    </>
  )
}