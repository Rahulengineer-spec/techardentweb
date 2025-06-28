import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Terms of Service
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-400 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Terms Content */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <FadeIn>
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-400 mb-4">
                  By accessing and using TechArdent&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.1}>
              <section>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-gray-400 mb-4">
                  Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
                <p className="text-gray-400 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not engage in any unauthorized access or use</li>
                  <li>Not interfere with the proper functioning of our services</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
                <p className="text-gray-400 mb-4">
                  The materials on TechArdent&apos;s services are provided on an &apos;as is&apos; basis. TechArdent makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-2xl font-bold mb-4">5. Limitations</h2>
                <p className="text-gray-400 mb-4">
                  In no event shall TechArdent or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TechArdent&apos;s services, even if TechArdent or a TechArdent authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <h2 className="text-2xl font-bold mb-4">6. Revisions and Errata</h2>
                <p className="text-gray-400 mb-4">
                  The materials appearing on TechArdent&apos;s services could include technical, typographical, or photographic errors. TechArdent does not warrant that any of the materials on its services are accurate, complete, or current. TechArdent may make changes to the materials contained on its services at any time without notice.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.6}>
              <section>
                <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
                <p className="text-gray-400 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-400">Email: legal@techardent.com</p>
                  <p className="text-gray-400">Address: 123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </section>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </main>
  )
}