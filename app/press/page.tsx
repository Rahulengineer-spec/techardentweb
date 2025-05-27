import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'
import { Download, Mail, Calendar, FileText } from 'lucide-react'

const pressReleases = [
  {
    title: 'TechArdent Raises $50M Series B Funding',
    date: 'March 15, 2024',
    excerpt: 'TechArdent secures $50M in Series B funding to accelerate product development and global expansion.',
    link: '#'
  },
  {
    title: 'TechArdent Launches New AI-Powered Platform',
    date: 'February 28, 2024',
    excerpt: 'Company introduces revolutionary AI platform for enterprise software development.',
    link: '#'
  },
  {
    title: 'TechArdent Named Top 10 Tech Companies',
    date: 'February 15, 2024',
    excerpt: 'TechArdent recognized as one of the top 10 innovative tech companies of 2024.',
    link: '#'
  }
]

const mediaKit = [
  {
    title: 'Company Logo Pack',
    description: 'High-resolution logos in various formats',
    icon: FileText
  },
  {
    title: 'Brand Guidelines',
    description: 'Complete brand style guide and assets',
    icon: FileText
  },
  {
    title: 'Product Screenshots',
    description: 'High-quality product images and screenshots',
    icon: FileText
  },
  {
    title: 'Team Photos',
    description: 'Official team and leadership photos',
    icon: FileText
  }
]

export default function PressPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Press & Media
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-400 mb-8">
                Latest news, press releases, and media resources from TechArdent.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Press Releases */}
      <Section className="bg-black">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Latest Press Releases
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <FadeIn key={release.title} delay={0.1 * index}>
                <article className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{release.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {release.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {release.excerpt}
                      </p>
                      <a
                        href={release.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Read More
                        <FileText className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Media Kit */}
      <Section className="bg-gray-900">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Media Kit
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <FadeIn key={item.title} delay={0.1 * index}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Media Inquiries
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-8">
                For press inquiries, please contact our media relations team.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a
                href="mailto:press@techardent.com"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Press Team
              </a>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </main>
  )
} 