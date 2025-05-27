'use client'

import { useState, FormEvent } from 'react'
import { X, Send, Loader2 } from 'lucide-react'

interface EnterpriseContactFormProps {
  onClose: () => void
  subject?: string
}

export function EnterpriseContactForm({ onClose, subject = 'Enterprise Inquiry' }: EnterpriseContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccessMessage(null)

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const message = formData.get('message') as string

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, company, message, subject }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message.')
      }

      setSuccessMessage(result.message || 'Your message has been sent successfully! We will get back to you shortly.')
      event.currentTarget.reset() // Reset form fields
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-[100]">
      <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close contact form"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-white mb-1">Contact Enterprise Sales</h2>
        <p className="text-sm text-gray-400 mb-6">Fill out the form below and our team will get back to you shortly.</p>

        {successMessage ? (
          <div className="text-center py-8">
            <Send size={48} className="mx-auto text-green-500 mb-4" />
            <p className="text-green-400 text-lg">{successMessage}</p>
            <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 transition-colors"
                placeholder="Your Full Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 transition-colors"
                placeholder="Your Company's Name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                Message (Optional)
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 transition-colors"
                placeholder="How can we help your enterprise? (e.g., specific features, number of users, use case)"
              />
            </div>

            {error && (
              <div className="bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-lg text-sm">
                <p>{error}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row-reverse gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin mr-2 h-5 w-5" /> Sending...</>
                ) : (
                  <><Send className="mr-2 h-5 w-5" /> Send Message</>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-gray-600/50 text-gray-300 rounded-lg font-medium hover:bg-gray-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
