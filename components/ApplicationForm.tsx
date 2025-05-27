'use client'

import { useState, FormEvent } from 'react'
import { X, UploadCloud } from 'lucide-react'

interface ApplicationFormProps {
  jobTitle: string
  onClose: () => void
  onSubmit: (formData: FormData) => Promise<void>
}

export function ApplicationForm({ jobTitle, onClose, onSubmit }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resumeFileName, setResumeFileName] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    formData.append('jobTitle', jobTitle)

    try {
      await onSubmit(formData)
      onClose() // Close form on successful submission
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResumeFileName(event.target.files[0].name)
    } else {
      setResumeFileName(null)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close application form"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-white mb-2">Apply for</h2>
        <h3 className="text-xl font-medium text-blue-400 mb-6">{jobTitle}</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">
              Resume/CV
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md bg-gray-700/30 hover:border-blue-500 transition-colors">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-500" />
                <div className="flex text-sm text-gray-400">
                  <label
                    htmlFor="resume"
                    className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-blue-500 px-1"
                  >
                    <span>Upload a file</span>
                    <input id="resume" name="resume" type="file" className="sr-only" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                {resumeFileName ? (
                  <p className="text-xs text-gray-300 mt-1">Selected: {resumeFileName}</p>
                ) : (
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-1">
              Cover Letter (Optional)
            </label>
            <textarea
              name="coverLetter"
              id="coverLetter"
              rows={4}
              className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              placeholder="Tell us why you're a great fit for this role..."
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm">
              <p>Error: {error}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row-reverse gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-gray-600/50 text-gray-300 rounded-lg font-medium hover:bg-gray-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
