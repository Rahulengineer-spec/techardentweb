'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Section } from './Layout'
import { FadeIn, HoverScale } from './Animations'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@techardent.com',
    link: 'mailto:contact@techardent.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    link: 'https://maps.google.com/?q=San+Francisco,+CA'
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Section className="bg-gray-900" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Get in Touch
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-8">
                Ready to start your next project? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
            </FadeIn>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FadeIn delay={0.3}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company"
                    disabled={status === 'loading'}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </FadeIn>

              {errorMessage && (
                <FadeIn>
                  <div className="text-red-400 text-sm">
                    {errorMessage}
                  </div>
                </FadeIn>
              )}

              {status === 'success' && (
                <FadeIn>
                  <div className="text-green-400 text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                </FadeIn>
              )}

              <FadeIn delay={0.7}>
                <HoverScale>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </HoverScale>
              </FadeIn>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <FadeIn>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
            </FadeIn>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <FadeIn key={info.title} delay={0.2 + index * 0.1}>
                  <a
                    href={info.link}
                    className="block group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-blue-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="bg-white/5 rounded-lg border border-white/10 p-6">
                <h4 className="text-lg font-medium text-white mb-4">
                  Office Hours
                </h4>
                <div className="space-y-2 text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  )
} 