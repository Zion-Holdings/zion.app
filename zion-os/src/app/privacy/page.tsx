export const metadata = {
  title: 'Privacy Policy - Zion Tech Group',
  description: 'Zion Tech Group Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-600">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Business requirements and project details</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">When you visit our website, we automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms</li>
                <li>Device information and operating system</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and provide personalized content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Providing and improving our services</li>
                <li>Communicating with you about our services</li>
                <li>Processing your requests and inquiries</li>
                <li>Analyzing website usage and trends</li>
                <li>Personalizing your experience</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with business transfers or mergers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-600">
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Zion Tech Group</strong></p>
                <p className="text-gray-700 mb-2">Email: privacy@ziontechgroup.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (302) 464-0950</p>
                <p className="text-gray-700">Address: 1000 N Market Street, Suite 1000, Wilmington, DE 19801</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. California Privacy Rights</h2>
              <p className="text-gray-600 mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA). If you are a California resident, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Know what personal information is collected, used, shared, or sold</li>
                <li>Delete personal information held by us</li>
                <li>Opt-out of the sale of personal information</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. GDPR Compliance</h2>
              <p className="text-gray-600 mb-4">
                If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR), including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>The right to be informed about data processing</li>
                <li>The right of access to your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure ("right to be forgotten")</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
                <li>Rights related to automated decision making</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Consent</h2>
              <p className="text-gray-600">
                By using our services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with this policy, please do not use our services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}