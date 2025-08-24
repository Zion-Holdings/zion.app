import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service, user agreements, and conditions for using our website and services." />
        <meta name="keywords" content="terms of service, user agreement, legal terms, service conditions" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-8">
              <p className="text-gray-600">
                <strong>Last updated:</strong> March 15, 2024
              </p>
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using our website, services, or any content provided by Zion Tech Group, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology solutions and services including, but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>Cloud computing and infrastructure services</li>
                <li>Blockchain technology solutions</li>
                <li>Data analytics and business intelligence</li>
                <li>Web and mobile application development</li>
                <li>Technology consulting and advisory services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-600 mb-4">
                Some of our services may require you to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services to transmit harmful or malicious code</li>
                <li>Attempt to reverse engineer or copy our technology</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality on our website and services, including but not limited to text, graphics, logos, software, and designs, are owned by Zion Tech Group or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 mb-4">
                You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Service Availability and Modifications</h2>
              <p className="text-gray-600 mb-4">
                We strive to provide reliable and continuous service, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Modify or discontinue services at any time</li>
                <li>Perform maintenance that may temporarily affect service availability</li>
                <li>Update or change our services to improve functionality</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Any damages resulting from the use of our services</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents from and against any claims, damages, losses, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit through our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. You may also terminate your use of our services at any time.
              </p>
              <p className="text-gray-600 mb-4">
                Upon termination, your right to use our services will cease immediately, and we may delete or remove any content associated with your account.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 mb-4">
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-600 mb-4">
                Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Severability</h2>
              <p className="text-gray-600 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Entire Agreement</h2>
              <p className="text-gray-600 mb-4">
                These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Zion Tech Group regarding your use of our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Zion Tech Group</strong><br />
                  Email: legal@ziontechgroup.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Terms?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're here to help clarify any questions you may have about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Us
            </Link>
            <Link href="/privacy" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;