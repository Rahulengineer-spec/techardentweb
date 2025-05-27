'use client' // Add this if not present

import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'
import { 
  Briefcase, 
  Users,
  Heart, 
  Globe, 
  Zap, 
  Coffee,
  ArrowRight,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { useState } from 'react'
import { ApplicationForm } from '@/components/ApplicationForm'

const benefits = [
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs',
    icon: Heart
  },
  {
    title: 'Remote First',
    description: 'Work from anywhere with our global remote policy',
    icon: Globe
  },
  {
    title: 'Learning & Growth',
    description: 'Continuous learning opportunities and career development',
    icon: Zap
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible hours and unlimited PTO',
    icon: Coffee
  }
]

const openPositions = [
  {
    title: 'Senior Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Join our frontend team to build beautiful, performant web applications. This role involves working with modern JavaScript frameworks, collaborating with UI/UX designers, and ensuring high-quality code through testing and reviews. We are looking for someone with at least 5 years of experience in frontend development and a strong portfolio of projects.',
    detailedDescription: `Responsibilities:
- Develop and maintain user-facing features using React, Next.js, or similar frameworks.
- Build reusable code and libraries for future use.
- Ensure the technical feasibility of UI/UX designs.
- Optimize applications for maximum speed and scalability.
- Collaborate with other team members and stakeholders.

Qualifications:
- Bachelor's degree in Computer Science or related field.
- 5+ years of experience in frontend development.
- Proficient in HTML, CSS, JavaScript, and a modern frontend framework (React, Angular, Vue).
- Experience with RESTful APIs and version control (Git).
- Strong problem-solving skills and attention to detail.`
  },
  {
    title: 'Product Designer',
    location: 'San Francisco',
    type: 'Full-time',
    department: 'Design',
    description: 'Create intuitive and engaging user experiences for our products. You will be responsible for the entire design process, from user research and wireframing to prototyping and user testing. A strong understanding of user-centered design principles is essential.',
    detailedDescription: `Responsibilities:
- Conduct user research and gather insights to inform design decisions.
- Create wireframes, mockups, and prototypes to effectively communicate design ideas.
- Collaborate with product managers and engineers to define and implement innovative solutions.
- Iterate on designs based on user feedback and data.
- Maintain and evolve our design system.

Qualifications:
- Bachelor's degree in Design, HCI, or related field.
- 3+ years of experience in product design or UX/UI design.
- Strong portfolio showcasing your design process and shipped products.
- Proficiency in design tools such as Figma, Sketch, or Adobe XD.
- Excellent communication and collaboration skills.`
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Build and maintain our cloud infrastructure and deployment pipelines. This role requires expertise in cloud platforms (AWS, Azure, or GCP), containerization technologies (Docker, Kubernetes), and CI/CD tools. You will play a key role in ensuring the reliability and scalability of our systems.',
    detailedDescription: `Responsibilities:
- Design, build, and maintain our CI/CD pipelines.
- Manage and monitor our cloud infrastructure (AWS, Azure, or GCP).
- Implement and manage containerization and orchestration solutions (Docker, Kubernetes).
- Automate infrastructure provisioning and configuration management.
- Ensure system security, reliability, and scalability.

Qualifications:
- Bachelor's degree in Computer Science or related field.
- 4+ years of experience in DevOps or a similar role.
- Strong experience with cloud platforms (AWS preferred).
- Proficiency in scripting languages (e.g., Python, Bash).
- Experience with CI/CD tools (e.g., Jenkins, GitLab CI, GitHub Actions).`
  },
  {
    title: 'Product Manager',
    location: 'New York',
    type: 'Full-time',
    department: 'Product',
    description: 'Drive product strategy and execution across our platform. You will work closely with engineering, design, and marketing teams to define product roadmaps, prioritize features, and deliver high-impact products that meet user needs and business goals.',
    detailedDescription: `Responsibilities:
- Define and own the product vision, strategy, and roadmap.
- Conduct market research and competitive analysis to identify opportunities.
- Gather and prioritize product requirements from stakeholders and users.
- Work closely with engineering and design teams to deliver high-quality products.
- Track product performance and iterate based on data and user feedback.

Qualifications:
- Bachelor's degree in Business, Computer Science, or related field.
- 5+ years of experience in product management.
- Proven track record of successfully launching and managing software products.
- Strong analytical, problem-solving, and communication skills.
- Experience with agile development methodologies.`
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries and embrace new technologies'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of working together'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do'
  },
  {
    title: 'Growth',
    description: 'We support continuous learning and development'
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [expandedJobDescription, setExpandedJobDescription] = useState<string | null>(null) // New state

  const handleApplyNow = (jobTitle: string) => {
    setSelectedJob(jobTitle)
  }

  const handleCloseForm = () => {
    setSelectedJob(null)
  }

  const handleSubmitApplication = async (formData: FormData) => {
    // TODO: Replace with actual API call
    // Example: const response = await fetch('/api/apply', { method: 'POST', body: formData });
    // if (!response.ok) throw new Error('Submission failed');
    console.log('Submitting application:', Object.fromEntries(formData.entries()))
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    alert('Application submitted successfully!')
  }

  const handleToggleJobDescription = (jobTitle: string) => {
    setExpandedJobDescription(prev => (prev === jobTitle ? null : jobTitle))
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Join Our Team
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-400 mb-8">
                Build the future of technology with us. We&apos;re looking for passionate individuals to join our growing team.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-black">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Why Join Us
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={0.1 * index}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section className="bg-gray-900">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Open Positions
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <FadeIn key={position.title} delay={0.1 * index}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-1">{position.title}</h3>
                      <p className="text-gray-400 mb-3 text-sm">{position.description}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" />
                          {position.department}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col gap-3 items-stretch md:items-end flex-shrink-0 mt-2 md:mt-0">
                      <button
                        onClick={() => handleApplyNow(position.title)}
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors w-full sm:w-auto md:w-full whitespace-nowrap"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleToggleJobDescription(position.title)}
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-600/50 text-gray-300 rounded-lg font-medium hover:bg-gray-500/50 transition-colors w-full sm:w-auto md:w-full whitespace-nowrap"
                      >
                        {expandedJobDescription === position.title ? 'Hide' : 'View'} Description
                        {expandedJobDescription === position.title ? (
                          <ChevronUp className="ml-2 w-4 h-4" />
                        ) : (
                          <ChevronDown className="ml-2 w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  {expandedJobDescription === position.title && (
                    <FadeIn delay={0.1}>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4 className="text-md font-semibold text-white mb-2">Job Details:</h4>
                        <div className="prose prose-sm prose-invert text-gray-300 max-w-none">
                          {position.detailedDescription.split('\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Company Values */}
      <Section className="bg-black">
        <Container>
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Our Values
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.1 * index}>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Dont See Your Role?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-8">
                We are always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Submit Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {selectedJob && (
        <ApplicationForm
          jobTitle={selectedJob}
          onClose={handleCloseForm}
          onSubmit={handleSubmitApplication}
        />
      )}
    </main>
  )
}