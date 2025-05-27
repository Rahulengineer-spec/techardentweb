import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Privacy Policy
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

      {/* Privacy Content */}
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <FadeIn>
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-gray-400 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.1}>
              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-400 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="text-gray-400 mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Service providers and business partners</li>
                  <li>Legal authorities when required by law</li>
                  <li>Other parties with your consent</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-gray-400 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-gray-400 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-400 mb-4">
                  We use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.6}>
              <section>
                <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                <p className="text-gray-400 mb-4">
                  Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.7}>
              <section>
                <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-400 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.8}>
              <section>
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p className="text-gray-400 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-400">Email: privacy@techardent.com</p>
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