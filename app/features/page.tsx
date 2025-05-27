import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Cloud, 
  LineChart, 
  Shield,
  Zap,
  Users,
  Lock,
  Globe,
  Clock,
  BarChart
} from 'lucide-react'

const features = [
  {
    category: 'Development',
    items: [
      {
        title: 'Custom Development',
        description: 'Tailored software solutions built with modern technologies and best practices.',
        icon: Code2,
        color: 'from-blue-500/20 to-blue-600/20'
      },
      {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
        icon: Layout,
        color: 'from-purple-500/20 to-purple-600/20'
      },
      {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        icon: Smartphone,
        color: 'from-green-500/20 to-green-600/20'
      }
    ]
  },
  {
    category: 'Infrastructure',
    items: [
      {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and serverless applications.',
        icon: Cloud,
        color: 'from-cyan-500/20 to-cyan-600/20'
      },
      {
        title: 'Performance',
        description: 'Optimized applications with lightning-fast response times.',
        icon: Zap,
        color: 'from-yellow-500/20 to-yellow-600/20'
      },
      {
        title: 'Security',
        description: 'Enterprise-grade security and compliance for your applications.',
        icon: Shield,
        color: 'from-red-500/20 to-red-600/20'
      }
    ]
  },
  {
    category: 'Business',
    items: [
      {
        title: 'Analytics',
        description: 'Data-driven insights and analytics to power your business decisions.',
        icon: LineChart,
        color: 'from-orange-500/20 to-orange-600/20'
      },
      {
        title: 'Collaboration',
        description: 'Tools and features that enhance team collaboration and productivity.',
        icon: Users,
        color: 'from-indigo-500/20 to-indigo-600/20'
      },
      {
        title: 'Integration',
        description: 'Seamless integration with your existing tools and workflows.',
        icon: Globe,
        color: 'from-pink-500/20 to-pink-600/20'
      }
    ]
  }
]

const benefits = [
  {
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
    icon: Lock
  },
  {
    title: 'Global Infrastructure',
    description: 'Deployed across multiple regions for optimal performance and reliability.',
    icon: Globe
  },
  {
    title: 'Real-time Updates',
    description: 'Instant updates and notifications to keep your team in sync.',
    icon: Clock
  },
  {
    title: 'Advanced Analytics',
    description: 'Comprehensive analytics and reporting for data-driven decisions.',
    icon: BarChart
  }
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Powerful Features
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-400 mb-8">
                Discover the comprehensive set of features that make our platform the perfect solution for your business needs.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section className="bg-black">
        <Container>
          {features.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {category.category}
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((feature, featureIndex) => (
                  <FadeIn key={feature.title} delay={0.1 * featureIndex}>
                    <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Why Choose Us
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-400">
                Our platform is designed to provide the best possible experience for your business.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={0.1 * index}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
} 