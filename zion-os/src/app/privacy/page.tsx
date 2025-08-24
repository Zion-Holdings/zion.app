export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              How we collect, use, and protect your personal information when you use our services and visit our website.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-white/80 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• Contact us through our website forms</li>
                <li>• Request information about our services</li>
                <li>• Sign up for our newsletter</li>
                <li>• Apply for employment opportunities</li>
                <li>• Engage with our customer support</li>
              </ul>
              <p className="text-white/80">
                This information may include your name, email address, phone number, company name, and any other information you choose to provide.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-white/80 mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• Provide and improve our services</li>
                <li>• Respond to your inquiries and requests</li>
                <li>• Send you marketing communications (with your consent)</li>
                <li>• Analyze website usage and improve user experience</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-white/80 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• With service providers who assist us in operating our website and providing services</li>
                <li>• When required by law or to protect our rights and safety</li>
                <li>• In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-white/80 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication measures</li>
                <li>• Employee training on data protection</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-white/80 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• The right to access your personal information</li>
                <li>• The right to correct inaccurate information</li>
                <li>• The right to delete your personal information</li>
                <li>• The right to restrict processing of your information</li>
                <li>• The right to data portability</li>
                <li>• The right to object to processing</li>
              </ul>
              <p className="text-white/80">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-white/80 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze website traffic and usage patterns</li>
                <li>• Provide personalized content and advertisements</li>
                <li>• Improve website functionality and performance</li>
              </ul>
              <p className="text-white/80">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-white/80">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
              <p className="text-white/80">
                Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-white/80 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• Posting the updated policy on our website</li>
                <li>• Sending you an email notification</li>
                <li>• Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-white/80">
                We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-white/70">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p><strong>Address:</strong> Zion Tech Group, Global Operations</p>
              </div>
              <p className="text-white/80 mt-4">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Privacy?</h2>
          <p className="text-xl text-white/70 mb-8">
            We're committed to transparency and protecting your privacy. Contact us if you need clarification on any aspect of our privacy practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
            >
              Contact Us
            </a>
            <a
              href="/terms"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}