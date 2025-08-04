import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const TermsOfService: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Terms of Service - Zion</title>
        <meta name="description" content="Zion's terms of service - Learn about the rules and guidelines for using our AI-powered marketplace platform." />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Zion's AI-powered marketplace platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Zion provides an AI-powered marketplace platform that connects businesses with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>IT service providers and consultants</li>
                <li>AI talent and developers</li>
                <li>Equipment and hardware suppliers</li>
                <li>Innovation and technology solutions</li>
                <li>AI-powered matching and recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Account Creation</h3>
              <p className="mb-4">
                To access certain features of the platform, you must create an account. You agree to provide accurate, current, and complete information during registration.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.2 Account Security</h3>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.3 Account Termination</h3>
              <p>
                We reserve the right to terminate or suspend your account at any time for violations of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Post false, misleading, or fraudulent information</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the platform for illegal or unauthorized purposes</li>
                <li>Interfere with the proper functioning of the platform</li>
                <li>Attempt to reverse engineer our AI algorithms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Marketplace Rules</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">5.1 Service Providers</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide accurate service descriptions and pricing</li>
                <li>Maintain professional standards and quality</li>
                <li>Respond to inquiries in a timely manner</li>
                <li>Honor agreed-upon terms and deadlines</li>
                <li>Maintain appropriate licenses and certifications</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">5.2 Service Buyers</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide clear project requirements</li>
                <li>Pay agreed-upon amounts in a timely manner</li>
                <li>Provide honest feedback and reviews</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain professional communication</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Payment and Transactions</h2>
              <p className="mb-4">All transactions on Zion are subject to the following terms:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Payments are processed through secure third-party providers</li>
                <li>Service fees and commissions apply as disclosed</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Disputes are handled through our resolution system</li>
                <li>Tax obligations are the responsibility of users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                Zion retains all rights to the platform, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Platform design and functionality</li>
                <li>AI algorithms and matching systems</li>
                <li>Branding and trademarks</li>
                <li>User-generated content (with user permission)</li>
                <li>Analytics and usage data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Data</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the platform.
              </p>
              <p>
                By using Zion, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimers</h2>
              <p className="mb-4">Zion provides the platform "as is" and makes no warranties regarding:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Accuracy of AI recommendations</li>
                <li>Quality of third-party services</li>
                <li>Platform availability or uptime</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Results of marketplace transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <p className="mb-4">
                Zion shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Loss of profits or data</li>
                <li>Business interruption</li>
                <li>Service provider disputes</li>
                <li>AI recommendation errors</li>
                <li>Platform downtime or technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless Zion from any claims, damages, or expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your use of the platform</li>
                <li>Violation of these terms</li>
                <li>Infringement of third-party rights</li>
                <li>Your marketplace activities</li>
                <li>Any content you post or share</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Dispute Resolution</h2>
              <p className="mb-4">
                Disputes between users are encouraged to be resolved through our internal dispute resolution system. For platform-related disputes, we prefer mediation before legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the platform constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white font-semibold">Zion Legal Team</p>
                <p>Email: legal@ziontechgroup.com</p>
                <p>Address: [Your Business Address]</p>
                <p>Phone: [Your Contact Number]</p>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link href="/" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService 