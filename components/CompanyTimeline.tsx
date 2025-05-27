'use client'

import { motion } from 'framer-motion'
import { 
  Rocket, 
  Users, 
  Globe, 
  Award, 
  Lightbulb, 
  ArrowRight 
} from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  category: 'achievement' | 'growth' | 'future'
}

const timelineData: TimelineItem[] = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'TechArdent was established with a vision to make technology accessible to everyone.',
    icon: <Rocket className="w-6 h-6" />,
    category: 'achievement'
  },
  {
    year: '2021',
    title: 'First Major Client',
    description: 'Secured partnership with a Fortune 500 company, marking our entry into enterprise solutions.',
    icon: <Users className="w-6 h-6" />,
    category: 'growth'
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Opened offices in three new countries, expanding our reach to international markets.',
    icon: <Globe className="w-6 h-6" />,
    category: 'growth'
  },
  {
    year: '2023',
    title: 'Innovation Award',
    description: 'Recognized as the most innovative tech company in our region.',
    icon: <Award className="w-6 h-6" />,
    category: 'achievement'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Launching our next-generation AI-powered solutions platform.',
    icon: <Lightbulb className="w-6 h-6" />,
    category: 'future'
  }
]

export function CompanyTimeline() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From humble beginnings to global innovation, follow our path of growth and achievement.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-500" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {item.description}
                    </p>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium">
            <span>Our Vision for 2025</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expanding our AI capabilities and launching sustainable tech initiatives to create a better future for all.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 