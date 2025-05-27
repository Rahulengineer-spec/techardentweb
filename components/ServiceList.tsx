'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Server, 
  Shield,
  Zap,
  Users,
  BarChart,
  MessageSquare
} from "lucide-react"

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
}

const services: Service[] = [
  {
    title: "Custom Software Development",
    description: "Transform your ideas into powerful digital solutions that solve real business challenges. We build software that grows with you.",
    icon: <Code2 className="w-6 h-6" />,
    benefits: [
      "Streamline your operations",
      "Boost team productivity",
      "Scale your business efficiently"
    ]
  },
  {
    title: "User Experience Design",
    description: "Create delightful digital experiences that your customers will love. We design interfaces that are intuitive, engaging, and accessible to everyone.",
    icon: <Palette className="w-6 h-6" />,
    benefits: [
      "Increase user engagement",
      "Reduce support requests",
      "Build brand loyalty"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Reach your customers wherever they are with mobile apps that make their lives easier. From simple utilities to complex solutions, we've got you covered.",
    icon: <Smartphone className="w-6 h-6" />,
    benefits: [
      "Connect with mobile users",
      "Offer on-the-go services",
      "Enhance customer convenience"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Move your business to the cloud with confidence. We help you leverage cloud technology to reduce costs and improve reliability.",
    icon: <Globe className="w-6 h-6" />,
    benefits: [
      "Cut infrastructure costs",
      "Ensure business continuity",
      "Enable remote work"
    ]
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business for the digital age. We guide you through the process of adopting new technologies that drive growth.",
    icon: <Zap className="w-6 h-6" />,
    benefits: [
      "Stay ahead of competition",
      "Improve decision making",
      "Enhance customer experience"
    ]
  },
  {
    title: "Business Intelligence",
    description: "Turn your data into actionable insights. We help you understand your business better and make informed decisions.",
    icon: <BarChart className="w-6 h-6" />,
    benefits: [
      "Make data-driven decisions",
      "Identify growth opportunities",
      "Track performance metrics"
    ]
  }
]

export function ServiceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <CardTitle className="text-xl font-bold">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </CardDescription>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
} 