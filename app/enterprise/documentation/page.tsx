import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import Link from 'next/link'

export default function EnterpriseDocumentationPage() {
  return (
    <Container>
      <Section className="py-16 md:py-24">
        <FadeIn>
          <div className="mb-12 text-center">
            <Link href="/enterprise" className="text-purple-600 dark:text-purple-400 hover:underline mb-4 inline-block">
              &larr; Back to Enterprise Overview
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              TechArdent Enterprise Documentation
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive information about our enterprise-grade features, security, and support.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto space-y-8">
            <p>
              Welcome to the TechArdent Enterprise documentation. This guide provides detailed information
              to help you understand, integrate, and manage our enterprise solutions effectively. Our platform
              is built to meet the demands of large-scale organizations, offering robust performance,
              uncompromising security, and dedicated support.
            </p>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <section id="overview">
              <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>
              <p>
                TechArdent&apos;s enterprise offering is designed for large organizations requiring advanced features,
                robust security, and dedicated support. We provide solutions that scale with your business needs,
                ensuring reliability and performance. Key aspects include enhanced administrative controls,
                priority access to new features, and customizable service level agreements.
              </p>
            </section>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <section id="security">
              <h2 className="text-2xl md:text-3xl font-semibold">Security & Compliance</h2>
              <p>
                Security is paramount at TechArdent. Our enterprise solutions include advanced security features
                such as single sign-on (SSO), multi-factor authentication (MFA), role-based access control (RBAC),
                and detailed audit logs. We adhere to industry-standard compliance certifications (e.g., SOC 2, ISO 27001)
                to ensure your data is protected and regulatory requirements are met.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Single Sign-On (SSO) integration (SAML, OAuth 2.0).</li>
                <li>Advanced Multi-Factor Authentication (MFA) options.</li>
                <li>Granular Role-Based Access Control (RBAC).</li>
                <li>Comprehensive audit logs and activity tracking.</li>
                <li>Data encryption at rest and in transit.</li>
                <li>Regular security assessments and penetration testing.</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <section id="scalability">
              <h2 className="text-2xl md:text-3xl font-semibold">Scalability & Performance</h2>
              <p>
                Our infrastructure is built to handle high-volume workloads and scale seamlessly as your
                organization grows. We offer dedicated infrastructure options, load balancing, and auto-scaling
                capabilities to ensure optimal performance and uptime.
              </p>
                <p className="mt-2">
                Performance metrics and monitoring dashboards are available to provide insights into your usage and system health.
                </p>
            </section>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <section id="support">
              <h2 className="text-2xl md:text-3xl font-semibold">Dedicated Support</h2>
              <p>
                Enterprise clients receive dedicated support channels, including a named account manager and
                prioritized technical assistance. Our expert support team is available 24/7 to help with
                any issues or questions you may have, ensuring minimal disruption to your operations.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>24/7 Priority Support.</li>
                <li>Named Technical Account Manager.</li>
                <li>Direct access to senior support engineers.</li>
                <li>Customized onboarding and training sessions.</li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <section id="sla">
              <h2 className="text-2xl md:text-3xl font-semibold">Service Level Agreements (SLAs)</h2>
              <p>
                We offer customizable Service Level Agreements (SLAs) for our enterprise clients, guaranteeing
                specific uptime commitments and response times. These SLAs are tailored to meet your
                business requirements and provide assurance of service reliability.
              </p>
            </section>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <section id="integration">
              <h2 className="text-2xl md:text-3xl font-semibold">Integration APIs</h2>
              <p>
                TechArdent provides robust APIs to enable seamless integration with your existing systems
                and workflows. Our API documentation includes detailed guides, client libraries, and code
                samples to facilitate quick and easy integration.
              </p>
              <p className="mt-2">
                Explore our <Link href="/docs/api" className="text-purple-600 dark:text-purple-400 hover:underline">API Reference</Link> for more details.
              </p>
            </section>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />
            
            <div className="text-center mt-12">
                <p className="text-gray-600 dark:text-gray-400">
                    For further assistance or specific inquiries, please contact your account manager or reach out to our enterprise support team.
                </p>
                 <Link href="/contact?subject=Enterprise+Inquiry" className="mt-4 inline-block bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Contact Enterprise Sales
                </Link>
            </div>

          </div>
        </FadeIn>
      </Section>
    </Container>
  )
}
