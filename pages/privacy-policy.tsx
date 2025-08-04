import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Privacy Policy - Zion</title>
        <meta name="description" content="Zion's privacy policy - Learn how we protect your data and maintain your privacy." />
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-300 mb-8">Last updated: January 15, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Zion ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered marketplace platform.
              </p>
              <p>
                By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Professional information and skills</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">2.2 Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Platform usage data and interactions</li>
                <li>Service requests and transactions</li>
                <li>Communication logs and chat history</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">2.3 AI and Analytics Data</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Service matching preferences and history</li>
                <li>Performance metrics and quality assessments</li>
                <li>Behavioral analytics and patterns</li>
                <li>Skill verification and assessment data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and maintain our marketplace services</li>
                <li>Match you with appropriate services and talent</li>
                <li>Process transactions and payments</li>
                <li>Verify skills and maintain quality standards</li>
                <li>Improve our AI algorithms and platform features</li>
                <li>Provide customer support and resolve disputes</li>
                <li>Send important updates and notifications</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>With service providers and partners to deliver our services</li>
                <li>With other users as necessary for marketplace transactions</li>
                <li>To comply with legal obligations and regulations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="mb-4">We implement comprehensive security measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security audits and monitoring</li>
                <li>Compliance with industry security standards</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and review your personal data</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
                <li>Lodge complaints with supervisory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze platform usage and performance</li>
                <li>Provide personalized experiences</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services</h2>
              <p className="mb-4">Our platform may integrate with third-party services for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Payment processing and financial services</li>
                <li>Communication and collaboration tools</li>
                <li>Analytics and performance monitoring</li>
                <li>AI and machine learning services</li>
                <li>Security and fraud prevention</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
              <p className="mb-4">We retain your information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our platform and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
              <p>
                Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: privacy@ziontechgroup.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: [Your Business Address]</li>
              </ul>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-4">
              <Link href="/terms-of-service" className="text-purple-400 hover:text-purple-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                Contact Us
              </Link>
              <Link href="/sitemap" className="text-purple-400 hover:text-purple-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy 