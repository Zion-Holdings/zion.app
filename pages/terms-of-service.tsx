import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const TermsOfService: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Terms of Service - Zion</title>
        <meta name="description" content="Zion's terms of service - Learn about the rules and conditions for using our AI-powered marketplace." />
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-gray-300 mb-8">Last updated: January 15, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Zion's AI-powered marketplace platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Zion provides an AI-powered marketplace platform that connects businesses with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Technology services and solutions</li>
                <li>AI talent and professionals</li>
                <li>Equipment and hardware</li>
                <li>Project management tools</li>
                <li>Payment and escrow services</li>
                <li>Communication and collaboration features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Account Creation</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must be at least 18 years old to create an account</li>
                <li>One account per person is allowed</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.2 Account Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Keep your login credentials secure</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>You are responsible for all activities under your account</li>
                <li>Maintain accurate and up-to-date profile information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
              <h3 className="text-xl font-semibold text-white mb-3">4.1 Prohibited Activities</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Posting false or misleading information</li>
                <li>Harassing or discriminating against other users</li>
                <li>Attempting to circumvent security measures</li>
                <li>Using the platform for illegal activities</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">4.2 Professional Standards</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintain professional communication</li>
                <li>Deliver services as promised</li>
                <li>Respect deadlines and commitments</li>
                <li>Provide accurate skill assessments</li>
                <li>Maintain quality standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Service Providers</h2>
              <h3 className="text-xl font-semibold text-white mb-3">5.1 Service Listings</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide accurate service descriptions</li>
                <li>Set fair and competitive pricing</li>
                <li>Maintain availability information</li>
                <li>Update service status regularly</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">5.2 Service Delivery</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Deliver services as described</li>
                <li>Meet agreed-upon deadlines</li>
                <li>Maintain professional communication</li>
                <li>Address issues promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Payment and Transactions</h2>
              <h3 className="text-xl font-semibold text-white mb-3">6.1 Payment Processing</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>All payments are processed securely</li>
                <li>Escrow services protect both parties</li>
                <li>Fees are clearly disclosed upfront</li>
                <li>Refunds follow our refund policy</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">6.2 Dispute Resolution</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Disputes are handled through our platform</li>
                <li>Evidence and communication are reviewed</li>
                <li>Fair resolution is provided</li>
                <li>Appeals process is available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-white mb-3">7.1 Platform Rights</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Zion retains rights to the platform</li>
                <li>Users retain rights to their content</li>
                <li>License to use platform features is granted</li>
                <li>No ownership transfer of platform</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">7.2 User Content</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>You own your uploaded content</li>
                <li>You grant license for platform use</li>
                <li>You are responsible for content rights</li>
                <li>Content must not infringe on others' rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacy and Data</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>
              <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors">
                View Privacy Policy
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                Zion shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p>
                Our total liability shall not exceed the amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Services are provided "as is" without warranties</li>
                <li>We do not guarantee service availability</li>
                <li>We are not responsible for third-party services</li>
                <li>AI recommendations are not guaranteed</li>
                <li>We disclaim all implied warranties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
              <h3 className="text-xl font-semibold text-white mb-3">11.1 Account Termination</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>You may terminate your account at any time</li>
                <li>We may terminate accounts for violations</li>
                <li>Outstanding obligations must be fulfilled</li>
                <li>Data retention follows our privacy policy</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">11.2 Effect of Termination</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to platform features will cease</li>
                <li>Active projects may be affected</li>
                <li>Payment obligations remain</li>
                <li>Data may be retained as required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or platform notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
              <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: legal@ziontechgroup.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: [Your Business Address]</li>
              </ul>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors">
                Privacy Policy
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

export default TermsOfService 