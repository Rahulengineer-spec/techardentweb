'use client' // Add this line

import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'
import { Search, Calendar, User } from 'lucide-react'
import { useState, useMemo } from 'react' // Import useState and useMemo

const categories = [
  'Technology',
  'Development',
  'Design',
  'Business',
  'Security',
  'Cloud'
]

const blogPosts = [
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and maintain software applications.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Technology',
    readTime: '5 min read',
    image: '/images/aidevelopment.jpg'
  },
  {
    title: 'Building Scalable Cloud Infrastructure',
    excerpt: 'Best practices and strategies for creating robust and scalable cloud infrastructure for modern applications.',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    category: 'Cloud',
    readTime: '7 min read',
    image: '/images/blog/cloud-infrastructure.jpg'
  },
  {
    title: 'UI/UX Design Trends for 2024',
    excerpt: 'Discover the latest design trends that are shaping user interfaces and experiences in the digital world.',
    author: 'Emily Rodriguez',
    date: 'March 10, 2024',
    category: 'Design',
    readTime: '4 min read',
    image: '/images/blog/design-trends.jpg'
  },
  {
    title: 'Cybersecurity Best Practices',
    excerpt: 'Essential security measures and practices to protect your applications and data in an increasingly complex threat landscape.',
    author: 'David Kim',
    date: 'March 8, 2024',
    category: 'Security',
    readTime: '6 min read',
    image: '/images/blog/cybersecurity.jpg'
  },
  {
    title: 'The Rise of Microservices Architecture',
    excerpt: 'Understanding the benefits and challenges of implementing microservices in modern application development.',
    author: 'Alex Thompson',
    date: 'March 5, 2024',
    category: 'Development',
    readTime: '8 min read',
    image: '/images/blog/microservices.jpg'
  },
  {
    title: 'Digital Transformation Strategies',
    excerpt: 'How businesses can successfully navigate and implement digital transformation initiatives.',
    author: 'Lisa Wang',
    date: 'March 3, 2024',
    category: 'Business',
    readTime: '5 min read',
    image: '/images/blog/digital-transformation.jpg'
  }
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredBlogPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearchTerm =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory
        ? post.category === selectedCategory
        : true
      return matchesSearchTerm && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                TechArdent Blog
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-400 mb-8">
                Insights, updates, and stories from our team of experts.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="bg-black">
        <Container>
          <div className="flex flex-wrap gap-4 mb-12">
            <FadeIn>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                All
              </button>
            </FadeIn>
            {categories.map((category) => (
              <FadeIn key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogPosts.map((post, index) => (
              <FadeIn key={post.title} delay={0.1 * index}>
                <article className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="aspect-video bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-gray-900">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Stay Updated
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-8">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </main>
  )
}