import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Sparkles, Bug, Wrench, Plus } from 'lucide-react'

const updates = [
  {
    version: '2.0.0',
    date: '2024-03-15',
    type: 'major',
    changes: [
      {
        type: 'feature',
        title: 'New Dashboard',
        description: 'Completely redesigned dashboard with improved analytics and customization options.',
      },
      {
        type: 'feature',
        title: 'API v2',
        description: 'Introducing our new API with improved performance and additional endpoints.',
      },
      {
        type: 'improvement',
        title: 'Performance Optimization',
        description: 'Significant improvements in page load times and overall application performance.',
      },
    ],
  },
  {
    version: '1.9.0',
    date: '2024-02-28',
    type: 'minor',
    changes: [
      {
        type: 'feature',
        title: 'Dark Mode',
        description: 'Added system-wide dark mode support with automatic theme detection.',
      },
      {
        type: 'improvement',
        title: 'Mobile Responsiveness',
        description: 'Enhanced mobile experience with improved layouts and touch interactions.',
      },
      {
        type: 'fix',
        title: 'Bug Fixes',
        description: 'Fixed various UI issues and improved error handling.',
      },
    ],
  },
  {
    version: '1.8.1',
    date: '2024-02-15',
    type: 'patch',
    changes: [
      {
        type: 'fix',
        title: 'Security Updates',
        description: 'Implemented additional security measures and fixed vulnerabilities.',
      },
      {
        type: 'improvement',
        title: 'Documentation',
        description: 'Updated API documentation with new examples and best practices.',
      },
    ],
  },
]

const getChangeIcon = (type: string) => {
  switch (type) {
    case 'feature':
      return <Sparkles className="w-5 h-5 text-purple-600" />
    case 'improvement':
      return <Wrench className="w-5 h-5 text-blue-600" />
    case 'fix':
      return <Bug className="w-5 h-5 text-green-600" />
    default:
      return <Plus className="w-5 h-5 text-gray-600" />
  }
}

export default function ChangelogPage() {
  return (
    <Container>
      <Section className="py-20">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Changelog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Track the latest updates and improvements to TechArdent
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {updates.map((update) => (
              <div
                key={update.version}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">Version {update.version}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{update.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        update.type === 'major'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                          : update.type === 'minor'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      }`}
                    >
                      {update.type.charAt(0).toUpperCase() + update.type.slice(1)} Update
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {update.changes.map((change, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="mt-1">{getChangeIcon(change.type)}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{change.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{change.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe to Updates */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Subscribe to receive notifications about new features and updates.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </Container>
  )
} 