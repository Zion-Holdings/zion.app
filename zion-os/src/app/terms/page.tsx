import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Zion Tech Group",
  description: "Read the terms and conditions that govern your use of Zion Tech Group's services and website.",
  keywords: "terms of service, terms and conditions, user agreement, Zion Tech Group",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The terms and conditions that govern your use of our services
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the website and services of Zion Tech Group ("we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Zion Tech Group provides technology solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Artificial Intelligence and Machine Learning services</li>
                <li>Quantum Computing solutions</li>
                <li>Cybersecurity and Enterprise IT services</li>
                <li>Space Technology solutions</li>
                <li>Zion OS platform for digital economies</li>
                <li>Consulting and professional services</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To access certain features of our services, you may be required to create an account. 
                You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </div>

            {/* Acceptable Use */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. 
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Use the services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the services</li>
                <li>Use the services to transmit harmful or malicious code</li>
                <li>Engage in any activity that could damage our reputation</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The services and their original content, features, and functionality are and will remain 
                the exclusive property of Zion Tech Group and its licensors. The services are protected 
                by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of any content you submit, post, or display on or through the services. 
                By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                reproduce, modify, and distribute your content.
              </p>
            </div>

            {/* Privacy and Data */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the services, to understand our practices regarding the collection and use 
                of your personal information.
              </p>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For paid services, you agree to pay all fees in accordance with the pricing and terms 
                presented to you at the time of purchase. Payment terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Fees are non-refundable unless otherwise specified</li>
                <li>We may change our pricing with 30 days notice</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are exclusive of applicable taxes</li>
              </ul>
            </div>

            {/* Service Availability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">8. Service Availability and Modifications</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We strive to maintain high service availability but do not guarantee uninterrupted access. 
                We may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Modify or discontinue services with notice</li>
                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Update features and functionality</li>
                <li>Suspend services for violations of these terms</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or failures</li>
                <li>Security breaches or data loss</li>
                <li>Third-party actions or content</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our total liability shall not exceed the amount paid by you for the services in the 
                twelve months preceding the claim.
              </p>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-2xl font-bold mb-4">10. Disclaimers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The services are provided "as is" and "as available" without warranties of any kind. 
                We disclaim all warranties, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties that the services will meet your specific requirements</li>
                <li>Warranties that the services will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy or reliability of any information</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Zion Tech Group and its affiliates 
                from and against any claims, damages, obligations, losses, liabilities, costs, or debt 
                arising from your use of the services or violation of these terms.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your account and access to services immediately, without 
                prior notice, for conduct that we believe violates these terms or is harmful to other 
                users, us, or third parties.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Upon termination, your right to use the services will cease immediately, and we may 
                delete your account and data in accordance with our data retention policies.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These terms shall be governed by and construed in accordance with the laws of the 
                State of Delaware, United States, without regard to conflict of law principles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Any disputes arising from these terms or your use of the services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration 
                Association.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes by posting the new terms on our website and updating the "Last updated" 
                date. Your continued use of the services after such modifications constitutes acceptance 
                of the updated terms.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">15. Severability</h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid, that provision 
                will be limited or eliminated to the minimum extent necessary so that these terms will 
                otherwise remain in full force and effect and enforceable.
              </p>
            </div>

            {/* Entire Agreement */}
            <div>
              <h2 className="text-2xl font-bold mb-4">16. Entire Agreement</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms, together with our Privacy Policy and any other legal notices published 
                by us, constitute the entire agreement between you and Zion Tech Group regarding the 
                services and supersede all prior agreements and understandings.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">17. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-800/50 rounded-lg p-6 space-y-3">
                <p className="text-gray-300">
                  <strong>Email:</strong> 
                  <a href="mailto:legal@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    legal@ziontechgroup.com
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help clarify any questions you may have about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Us
              </Link>
              <Link href="/privacy" className="btn-secondary text-lg px-8 py-4">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}