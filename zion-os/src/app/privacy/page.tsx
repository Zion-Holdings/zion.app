import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Zion Tech Group",
  description: "Learn how Zion Tech Group collects, uses, and protects your personal information in accordance with privacy laws and regulations.",
  keywords: "privacy policy, data protection, GDPR, CCPA, Zion Tech Group",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            How we collect, use, and protect your personal information
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By using our services, you agree to the collection and use of information in 
                accordance with this policy. If you do not agree with our policies and practices, 
                please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Professional credentials and experience</li>
                <li>Communication preferences</li>
                <li>Feedback and survey responses</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you visit our website or use our services, we automatically collect certain information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Performance and error logs</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Providing and improving our services</li>
                <li>Communicating with you about our services</li>
                <li>Processing transactions and payments</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party 
                service providers who assist us in operating our website and providing services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, 
                court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale 
                of assets, your information may be transferred as part of the transaction</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our 
                rights, property, or safety, or that of our users or the public</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. However, disabling 
                certain cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for processing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or 
                permitted by law. When determining retention periods, we consider:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
                <li>The nature and purpose of the information</li>
                <li>Legal and regulatory requirements</li>
                <li>Business needs and operational requirements</li>
                <li>Your consent and preferences</li>
              </ul>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your personal information may be transferred to and processed in countries other than 
                your own. We ensure that such transfers comply with applicable data protection laws 
                and implement appropriate safeguards, such as standard contractual clauses, to protect 
                your information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under the age of 16. We do not knowingly 
                collect personal information from children under 16. If you believe we have collected 
                information from a child under 16, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material 
                changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about 
                how we protect your information.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or 
                our data practices, please contact us:
              </p>
              <div className="bg-gray-800/50 rounded-lg p-6 space-y-3">
                <p className="text-gray-300">
                  <strong>Email:</strong> 
                  <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    privacy@ziontechgroup.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> 
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 ml-2">
                    +1 (302) 464-0950
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> Zion Tech Group<br/>
                  <span className="ml-4">123 Innovation Drive</span><br/>
                  <span className="ml-4">Tech Valley, CA 94000</span><br/>
                  <span className="ml-4">United States</span>
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For more information about our data practices, you may also want to review:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link></li>
                <li><Link href="/accessibility" className="text-blue-400 hover:text-blue-300">Accessibility Statement</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're committed to transparency and protecting your privacy. 
              Contact us if you have any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Us
              </Link>
              <Link href="/terms" className="btn-secondary text-lg px-8 py-4">
                View Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}