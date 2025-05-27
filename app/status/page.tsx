import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { CheckCircle2, AlertCircle, Clock, Server } from 'lucide-react'

const services = [
  {
    name: 'API',
    status: 'operational',
    uptime: '99.99%',
    lastIncident: 'None',
  },
  {
    name: 'Web Application',
    status: 'operational',
    uptime: '99.95%',
    lastIncident: 'None',
  },
  {
    name: 'Database',
    status: 'operational',
    uptime: '99.99%',
    lastIncident: 'None',
  },
  {
    name: 'CDN',
    status: 'operational',
    uptime: '99.99%',
    lastIncident: 'None',
  },
]

const incidents = [
  {
    date: '2024-03-15',
    title: 'Scheduled Maintenance',
    status: 'resolved',
    description: 'Completed scheduled maintenance window for system updates.',
  },
  {
    date: '2024-03-01',
    title: 'API Performance Degradation',
    status: 'resolved',
    description: 'Resolved performance issues affecting API response times.',
  },
  {
    date: '2024-02-15',
    title: 'Database Optimization',
    status: 'resolved',
    description: 'Completed database optimization to improve query performance.',
  },
]

export default function StatusPage() {
  return (
    <Container>
      <Section className="py-20">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">System Status</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Check the current status of TechArdent services and systems
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-16">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <span className="text-xl font-semibold text-green-600">All Systems Operational</span>
            </div>
          </div>

          {/* Services Status */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Service Status</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Uptime: {service.uptime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      <span>Last Incident: {service.lastIncident}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Incident History */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Incident History</h2>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div
                  key={incident.date}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{incident.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{incident.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{incident.description}</p>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    <span>{incident.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Subscribe to receive real-time status updates and incident notifications.
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