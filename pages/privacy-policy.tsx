import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Privacy Policy - Zion</title>
        <meta name="description" content="Zion's privacy policy - Learn how we protect your data and maintain your privacy on our AI-powered marketplace." />
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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Zion ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered marketplace platform.
              </p>
              <p>
                By using Zion's services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company information and professional details</li>
                <li>Payment and billing information</li>
                <li>Profile information and preferences</li>
                <li>Communication records and support tickets</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">2.2 Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
                <li>AI interaction data and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">2.3 Marketplace Data</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Service listings and descriptions</li>
                <li>Transaction history and records</li>
                <li>Reviews and ratings</li>
                <li>Communication between users</li>
                <li>AI matching and recommendation data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and maintain our marketplace services</li>
                <li>Process transactions and payments</li>
                <li>Match users with appropriate services and talents</li>
                <li>Improve our AI algorithms and recommendations</li>
                <li>Send notifications and updates</li>
                <li>Provide customer support</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>With your consent</li>
                <li>To facilitate marketplace transactions</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>In connection with business transfers or mergers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure payment processing</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and review your data</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
                <li>Lodge complaints with supervisory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website usage</li>
                <li>Improve our services</li>
                <li>Provide personalized experiences</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services</h2>
              <p className="mb-4">Our platform may integrate with third-party services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Payment processors</li>
                <li>Analytics providers</li>
                <li>Communication tools</li>
                <li>AI and machine learning services</li>
                <li>Cloud infrastructure providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Data Retention</h2>
              <p className="mb-4">We retain your information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce agreements</li>
                <li>Improve our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. International Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white font-semibold">Zion Privacy Team</p>
                <p>Email: privacy@ziontechgroup.com</p>
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

export default PrivacyPolicy 