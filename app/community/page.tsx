import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  BookOpen, 
  Star, 
  Award,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react'

const events = [
  {
    title: 'TechArdent Developer Conference 2024',
    date: 'April 15-17, 2024',
    location: 'San Francisco, CA',
    description: 'Join us for three days of workshops, talks, and networking with industry experts.',
    type: 'Conference'
  },
  {
    title: 'Web Development Workshop',
    date: 'March 28, 2024',
    location: 'Online',
    description: 'Learn modern web development techniques and best practices.',
    type: 'Workshop'
  },
  {
    title: 'Community Meetup',
    date: 'March 20, 2024',
    location: 'New York, NY',
    description: 'Connect with fellow developers and share your experiences.',
    type: 'Meetup'
  }
]

const successStories = [
  {
    title: 'From Startup to Scale-up',
    company: 'TechStart Inc.',
    description: 'How TechStart scaled their platform using our solutions.',
    image: '/images/community/success-1.jpg'
  },
  {
    title: 'Digital Transformation Journey',
    company: 'Global Corp',
    description: 'A case study on enterprise digital transformation.',
    image: '/images/community/success-2.jpg'
  },
  {
    title: 'Innovation in Healthcare',
    company: 'HealthTech Solutions',
    description: 'Revolutionizing healthcare with modern technology.',
    image: '/images/community/success-3.jpg'
  }
]

const resources = [
  {
    title: 'Getting Started Guide',
    description: 'Comprehensive guide for new community members',
    icon: BookOpen
  },
  {
    title: 'Best Practices',
    description: 'Community guidelines and best practices',
    icon: Star
  },
  {
    title: 'Contributor Program',
    description: 'Learn how to contribute to our projects',
    icon: Award
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/techardent',
    followers: '10K+'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/techardent',
    followers: '25K+'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/techardent',
    followers: '15K+'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/techardent',
    followers: '5K+'
  }
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Join Our Community
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-400 mb-8">
                Connect with developers, share knowledge, and grow together in our vibrant community.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Community Stats */}
      <Section className="bg-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {socialLinks.map((social) => (
              <FadeIn key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{social.name}</h3>
                      <p className="text-gray-400">{social.followers} followers</p>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Events Section */}
      <Section className="bg-gray-900">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Upcoming Events
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <FadeIn key={event.title} delay={0.1 * index}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section className="bg-black">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Success Stories
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <FadeIn key={story.title} delay={0.1 * index}>
                <div className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="aspect-video bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-sm text-white">{story.company}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{story.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Resources */}
      <Section className="bg-gray-900">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Community Resources
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={resource.title} delay={0.1 * index}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Ready to Join?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-8">
                Become part of our growing community and start your journey with TechArdent.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Discussion
                </a>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </main>
  )
} 