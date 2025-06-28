import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Code, Key, Server, Shield, Zap } from 'lucide-react'

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/users',
    description: 'Retrieve a list of users',
    auth: true,
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    description: 'Create a new user',
    auth: true,
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
    description: 'Retrieve a specific user',
    auth: true,
  },
  {
    method: 'PUT',
    path: '/api/v1/users/{id}',
    description: 'Update a user',
    auth: true,
  },
  {
    method: 'DELETE',
    path: '/api/v1/users/{id}',
    description: 'Delete a user',
    auth: true,
  },
]

const features = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design following best practices',
    icon: Server,
  },
  {
    title: 'Authentication',
    description: 'Secure API key and OAuth 2.0 authentication methods',
    icon: Key,
  },
  {
    title: 'Rate Limiting',
    description: 'Fair usage policies with rate limiting and quotas',
    icon: Zap,
  },
  {
    title: 'Security',
    description: 'Enterprise-grade security with SSL/TLS encryption',
    icon: Shield,
  },
]

export default function ApiPage() {
  return (
    <Container>
      <Section className="py-20">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Build powerful applications with our comprehensive API
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Authentication */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Authentication</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All API requests require authentication using an API key. Include your API key in the
                Authorization header:
              </p>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Get your API key from the{' '}
                <a href="/dashboard" className="text-purple-600 hover:text-purple-700">
                  dashboard
                </a>
                .
              </p>
            </div>
          </div>

          {/* Endpoints */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Path
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Auth
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {endpoints.map((endpoint) => (
                      <tr key={endpoint.method + '-' + endpoint.path}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded ${
                              endpoint.method === 'GET'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                                : endpoint.method === 'POST'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : endpoint.method === 'PUT'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                            }`}
                          >
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                          {endpoint.path}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {endpoint.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {endpoint.auth ? (
                            <span className="text-green-600 dark:text-green-400">Required</span>
                          ) : (
                            <span className="text-gray-600 dark:text-gray-400">Optional</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Code Example</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Fetch Users</h3>
                <Code className="w-5 h-5 text-gray-400" />
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200">
                  <code>{`const response = await fetch('https://api.techardent.com/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const users = await response.json();`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Get Started */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Sign up for an account and get your API key to start building.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/signup"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Sign Up
              </a>
              <a
                href="/docs/api"
                className="bg-white dark:bg-gray-800 text-purple-600 px-6 py-2 rounded-lg font-semibold border border-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Full Documentation
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </Container>
  )
}