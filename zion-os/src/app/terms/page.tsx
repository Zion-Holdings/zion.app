export const metadata = {
  title: "Terms of Service - Zion Tech Group",
  description: "Read Zion Tech Group's terms of service and conditions for using our website and services.",
  keywords: "terms of service, terms and conditions, Zion Tech Group terms, service agreement",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using the Zion Tech Group website and services, you accept and agree 
              to be bound by the terms and provision of this agreement. If you do not agree to abide 
              by the above, please do not use this service.
            </p>
            <p className="text-gray-300">
              These terms apply to all visitors, users, and others who access or use the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group provides AI-powered technology solutions, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>AI and autonomous systems</li>
              <li>Quantum computing solutions</li>
              <li>Cybersecurity and compliance services</li>
              <li>Enterprise IT infrastructure</li>
              <li>Research and development services</li>
              <li>Technology consulting</li>
            </ul>
            <p className="text-gray-300">
              We reserve the right to modify, suspend, or discontinue any part of our services 
              at any time without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-gray-300 mb-4">
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for safeguarding the password 
              and for all activities that occur under your account.
            </p>
            <p className="text-gray-300">
              You agree not to disclose your password to any third party and to take sole 
              responsibility for any activities or actions under your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="text-gray-300 mb-4">
              You agree not to use the service to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Use the service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The service and its original content, features, and functionality are and will remain 
              the exclusive property of Zion Tech Group and its licensors. The service is protected 
              by copyright, trademark, and other laws.
            </p>
            <p className="text-gray-300">
              You may not reproduce, distribute, modify, create derivative works of, publicly 
              display, publicly perform, republish, download, store, or transmit any of the 
              material on our service without our prior written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Privacy Policy</h2>
            <p className="text-gray-300">
              Your privacy is important to us. Please review our 
              <a href="/privacy" className="text-blue-400 hover:text-blue-300 mx-1">Privacy Policy</a>, 
              which also governs your use of the service, to understand our practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Service Availability</h2>
            <p className="text-gray-300 mb-4">
              We strive to provide a reliable and consistent service, but we do not guarantee 
              that the service will be available at all times. The service may be temporarily 
              unavailable due to maintenance, updates, or other factors beyond our control.
            </p>
            <p className="text-gray-300">
              We are not liable for any damages or losses resulting from service interruptions 
              or unavailability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Disclaimers</h2>
            <p className="text-gray-300 mb-4">
              The information on this website is provided "as is" without warranty of any kind. 
              Zion Tech Group disclaims all warranties, express or implied, including but not 
              limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy or completeness of information</li>
            </ul>
            <p className="text-gray-300">
              We do not warrant that the service will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Zion Tech Group, nor its directors, employees, partners, agents, 
              suppliers, or affiliates, be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-gray-300">
              Our total liability to you for any claims arising from the use of our service 
              shall not exceed the amount you paid us, if any, for the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
            <p className="text-gray-300">
              You agree to defend, indemnify, and hold harmless Zion Tech Group and its affiliates 
              from and against any claims, damages, obligations, losses, liabilities, costs, or 
              debt arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p className="text-gray-300">
              These terms shall be governed by and construed in accordance with the laws of the 
              United States, without regard to its conflict of law provisions. Any disputes 
              arising from these terms or the service shall be resolved in the courts of the 
              United States.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify or replace these terms at any time. If a revision 
              is material, we will try to provide at least 30 days notice prior to any new terms 
              taking effect.
            </p>
            <p className="text-gray-300">
              What constitutes a material change will be determined at our sole discretion. 
              By continuing to access or use our service after those revisions become effective, 
              you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">13. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your account and bar access to the service immediately, 
              without prior notice or liability, under our sole discretion, for any reason 
              whatsoever and without limitation, including but not limited to a breach of the terms.
            </p>
            <p className="text-gray-300">
              If you wish to terminate your account, you may simply discontinue using the service. 
              All provisions of the terms which by their nature should survive termination shall 
              survive termination.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">14. Severability</h2>
            <p className="text-gray-300">
              If any provision of these terms is held to be unenforceable or invalid, such 
              provision will be changed and interpreted to accomplish the objectives of such 
              provision to the greatest extent possible under applicable law and the remaining 
              provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> 
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                  kleber@ziontechgroup.com
                </a>
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> 
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 ml-2">
                  +1 (302) 464-0950
                </a>
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> 
                <span className="ml-2">Global Operations - Serving clients worldwide</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}