export const metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Zion Tech Group Terms of Service - Read our terms and conditions for using our AI-powered technology solutions.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the services provided by Zion Tech Group ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-gray-600">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides AI-powered technology solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>AI Autonomous Systems</li>
                <li>Quantum Computing Solutions</li>
                <li>Cybersecurity and Compliance Services</li>
                <li>IT Infrastructure and DevOps Solutions</li>
                <li>Business Intelligence and Analytics</li>
                <li>Content Generation and Marketing Automation</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-600 mb-4">
                To access certain features of our services, you may be required to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to terminate accounts that violate these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use our services for illegal or unethical purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and algorithms, are owned by Zion Tech Group or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600">
                You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Level Agreements</h2>
              <p className="text-gray-600 mb-4">
                For enterprise clients, specific service level agreements (SLAs) may apply. These SLAs will be detailed in separate agreements and may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Uptime guarantees</li>
                <li>Response time commitments</li>
                <li>Performance metrics</li>
                <li>Support availability</li>
                <li>Compensation for service failures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms vary by service and will be specified in your service agreement. General terms include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Payment is due upon receipt of invoice unless otherwise specified</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Loss of business opportunities</li>
                <li>Any other economic loss</li>
              </ul>
              <p className="text-gray-600">
                Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Warranty Disclaimers</h2>
              <p className="text-gray-600 mb-4">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or completeness of information</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate this agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Your right to use our services ceases immediately</li>
                <li>We may delete your account and data</li>
                <li>You remain liable for any outstanding payments</li>
                <li>Surviving provisions remain in effect</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Force Majeure</h2>
              <p className="text-gray-600">
                Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to natural disasters, war, terrorism, riots, fire, labor disputes, or government actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law and Jurisdiction</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600">
                Any disputes arising from these terms shall be resolved in the courts of Delaware, and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                Before pursuing legal action, we encourage you to contact us to resolve disputes amicably. If resolution cannot be reached:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Disputes under $10,000 may be resolved through binding arbitration</li>
                <li>Larger disputes may be resolved through mediation</li>
                <li>Legal action may be pursued in Delaware courts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Severability</h2>
              <p className="text-gray-600">
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms of Service will otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
              <p className="text-gray-600">
                We will notify you of significant changes via email or through our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact Information</h2>
              <p className="text-gray-600 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Zion Tech Group</strong></p>
                <p className="text-gray-700 mb-2">Email: legal@ziontechgroup.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (302) 464-0950</p>
                <p className="text-gray-700">Address: 1000 N Market Street, Suite 1000, Wilmington, DE 19801</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Entire Agreement</h2>
              <p className="text-gray-600">
                These Terms of Service, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Zion Tech Group regarding the use of our services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}