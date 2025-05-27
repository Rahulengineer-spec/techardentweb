'use client' // Added for client-side interactivity

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Search, Book, MessageCircle, Mail, Phone } from 'lucide-react'
import { useState, useMemo } from 'react' // Added useState and useMemo

const faqs = [
  {
    question: 'How do I get started with TechArdent?',
    answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our step-by-step onboarding guide. Our team is always available to help you through the process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle.',
  },
  {
    question: 'How do I get technical support?',
    answer: 'We offer 24/7 technical support through our help center, email, and phone. Enterprise customers also have access to dedicated support managers.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest, and we regularly undergo security audits and compliance checks.',
  },
]

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: Book,
    href: '/docs',
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users and share experiences',
    icon: MessageCircle,
    href: '/community',
  },
  {
    title: 'Email Support',
    description: 'Get help from our support team',
    icon: Mail,
    href: 'mailto:support@techardent.com',
  },
  {
    title: 'Phone Support',
    description: 'Speak with our support team directly',
    icon: Phone,
    href: 'tel:+1-800-123-4567',
  },
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const lowerSearchTerm = searchTerm.toLowerCase()

  const filteredResources = useMemo(() => {
    if (!searchTerm) return resources
    return resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(lowerSearchTerm) ||
        resource.description.toLowerCase().includes(lowerSearchTerm)
    )
  }, [searchTerm, lowerSearchTerm])

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) return faqs
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowerSearchTerm) ||
        faq.answer.toLowerCase().includes(lowerSearchTerm)
    )
  }, [searchTerm, lowerSearchTerm])

  return (
    <Container>
      <Section className="py-20">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions, browse documentation, or get in touch with our support team.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Resources */}
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {filteredResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-600 transition-colors"
                >
                  <resource.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                </a>
              ))}
            </div>
          ) : (
            searchTerm && (
              <div className="text-center text-gray-500 dark:text-gray-400 mb-16">
                No resources found for &quot;{searchTerm}&quot;.
              </div>
            )
          )}

          {/* FAQs */}
          {filteredFaqs.length > 0 ? (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            searchTerm && (
              <div className="text-center text-gray-500 dark:text-gray-400">
                No FAQs found for &quot;{searchTerm}&quot;.
              </div>
            )
          )}

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <button className="bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Contact Support
            </button>
          </div>
        </FadeIn>
      </Section>
    </Container>
  )
}