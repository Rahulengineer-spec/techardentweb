'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: 'process' | 'pricing' | 'quality' | 'support'
}

const faqData: FAQItem[] = [
  {
    question: "How do you ensure the quality of your work?",
    answer: "We follow a rigorous quality assurance process that includes code reviews, automated testing, and user acceptance testing. Each project goes through multiple checkpoints before delivery, and we maintain detailed documentation throughout the development process. We also conduct regular security audits and performance testing to ensure your solution is robust and secure.",
    category: 'quality'
  },
  {
    question: "What is your development process like?",
    answer: "We follow an agile development methodology that keeps you involved at every step. The process starts with a detailed discovery phase where we understand your requirements, followed by regular sprints with weekly demos and feedback sessions. This approach ensures transparency and allows for adjustments as needed. You'll have access to a dedicated project manager and regular progress updates.",
    category: 'process'
  },
  {
    question: "How do you handle project pricing and budgets?",
    answer: "We believe in transparent pricing with no hidden costs. After understanding your requirements, we provide a detailed quote that breaks down all costs. We offer flexible engagement models - fixed price for well-defined projects and time & materials for evolving requirements. We also provide regular budget updates and won't proceed with any additional work without your approval.",
    category: 'pricing'
  },
  {
    question: "What happens after the project is completed?",
    answer: "Our relationship doesn't end with project delivery. We provide comprehensive documentation, training sessions for your team, and ongoing support and maintenance options. We also offer a warranty period where we fix any issues at no additional cost. Our team remains available for future enhancements and improvements.",
    category: 'support'
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "Security is our top priority. We follow industry best practices and comply with relevant data protection regulations. All our developers are trained in secure coding practices, and we conduct regular security audits. We sign NDAs and can work with your existing security protocols. We're also happy to undergo security assessments from your team.",
    category: 'quality'
  },
  {
    question: "What if I need changes during development?",
    answer: "We understand that requirements can evolve. Our agile process is designed to accommodate changes efficiently. We'll assess the impact of changes on timeline and budget, and you'll have full visibility into any adjustments needed. We maintain a change request process that ensures all modifications are properly documented and approved.",
    category: 'process'
  },
  {
    question: "How do you ensure timely delivery?",
    answer: "We set realistic timelines based on thorough planning and our experience. Each project has clear milestones and deliverables. We use project management tools that give you real-time visibility into progress. If we anticipate any delays, we communicate proactively and work with you to adjust the plan while maintaining quality standards.",
    category: 'process'
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 technical support for critical issues, with response times based on severity. Our support includes regular maintenance, security updates, and performance monitoring. We also provide training and documentation to help your team become self-sufficient. For ongoing projects, we offer dedicated support channels and regular check-ins.",
    category: 'support'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-700 dark:text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}