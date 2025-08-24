import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Zion Tech Group",
  description: "Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, personal information, Zion Tech Group",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how Zion Tech Group collects, 
            uses, and protects your personal information.
          </p>
          <div className="text-sm text-gray-400 mt-4">
            Last updated: December 15, 2024
          </div>
        </div>

        {/* Policy Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website, use our services, or interact with us.
            </p>
            <p className="text-gray-300">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. If you do not agree with our policies and practices, 
              please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="text-gray-300 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Contact us through our website forms</li>
              <li>Subscribe to our newsletters or updates</li>
              <li>Register for events or webinars</li>
              <li>Request information about our services</li>
              <li>Apply for employment opportunities</li>
              <li>Use our AI or quantum computing platforms</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="text-gray-300 mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device identifiers</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h3>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Marketing cookies for personalized content</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Providing and maintaining our services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending newsletters and marketing communications</li>
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
              <li>Personalizing your experience</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>In connection with business transfers or mergers</li>
            </ul>
            <p className="text-gray-300">
              Any third parties with whom we share information are required to maintain the 
              confidentiality and security of your personal information.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-gray-300">
              However, no method of transmission over the internet or electronic storage is 100% secure. 
              While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-gray-300">
              When we no longer need your personal information, we will securely delete or anonymize it. 
              You may request deletion of your personal information at any time by contacting us.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability</li>
              <li>Withdraw consent where applicable</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-gray-300 mb-4">
              Your personal information may be transferred to and processed in countries other than 
              your country of residence. These countries may have different data protection laws.
            </p>
            <p className="text-gray-300">
              When we transfer personal information internationally, we ensure appropriate safeguards 
              are in place to protect your information in accordance with this Privacy Policy and 
              applicable data protection laws.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not intended for children under the age of 13. We do not knowingly 
              collect personal information from children under 13. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us 
              immediately.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party websites or services. We are not responsible 
              for the privacy practices or content of these third-party sites. We encourage you to 
              review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-300">
              We will notify you of any material changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date. Your continued use of our services after any changes 
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="card p-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-200">Email:</span>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    privacy@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Phone:</span>
                  <a href="tel:+1-555-123-4567" className="text-blue-400 hover:text-blue-300 ml-2">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Address:</span>
                  <span className="text-gray-300 ml-2">
                    Zion Tech Group<br />
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <p className="text-gray-300 mb-4">
              For more information about our data practices, you may also want to review:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="text-blue-400 hover:text-blue-300">Accessibility Statement</Link></li>
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-6">
              We're committed to transparency and protecting your privacy. 
              Contact us if you have any questions or concerns.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}