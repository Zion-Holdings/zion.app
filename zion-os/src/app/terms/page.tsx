import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Zion Tech Group",
  description: "Zion Tech Group's terms of service outlining the rules and guidelines for using our services and platforms.",
  keywords: "terms of service, terms and conditions, service agreement, Zion Tech Group",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of Zion Tech Group's services, platforms, and solutions. 
            Please read them carefully before using our services.
          </p>
          <div className="text-sm text-gray-400 mt-4">
            Last updated: December 15, 2024
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your access to and use of 
              our website, services, platforms, and any related software (collectively, the "Services").
            </p>
            <p className="text-gray-300 mb-4">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree 
              with any part of these terms, you may not access our Services.
            </p>
            <p className="text-gray-300">
              These Terms apply to all visitors, users, and others who access or use our Services.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-200">"Services"</span>
                <span className="text-gray-300 ml-2">means our website, AI platforms, quantum computing solutions, and related services.</span>
              </div>
              <div>
                <span className="font-semibold text-gray-200">"User," "you," and "your"</span>
                <span className="text-gray-300 ml-2">refers to you, as the user of our Services.</span>
              </div>
              <div>
                <span className="font-semibold text-gray-200">"Company," "we," "us," and "our"</span>
                <span className="text-gray-300 ml-2">refers to Zion Tech Group and its affiliates.</span>
              </div>
              <div>
                <span className="font-semibold text-gray-200">"Content"</span>
                <span className="text-gray-300 ml-2">means any data, information, or material you submit, upload, or provide to our Services.</span>
              </div>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By using our Services, you confirm that you have read, understood, and agree to be bound by 
              these Terms. You also agree to comply with all applicable laws and regulations.
            </p>
            <p className="text-gray-300">
              If you are using our Services on behalf of an organization, you represent that you have the 
              authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Description of Services */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Description of Services</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group provides cutting-edge technology solutions including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Artificial Intelligence and Machine Learning platforms</li>
              <li>Quantum Computing solutions and neural networks</li>
              <li>Cybersecurity and threat detection services</li>
              <li>Enterprise IT infrastructure and automation</li>
              <li>Space technology and satellite systems</li>
              <li>Business intelligence and analytics platforms</li>
            </ul>
            <p className="text-gray-300">
              We reserve the right to modify, suspend, or discontinue any part of our Services at any time 
              with or without notice.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. User Accounts and Registration</h2>
            <p className="text-gray-300 mb-4">
              Some of our Services may require you to create an account. When you create an account, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            <p className="text-gray-300">
              You are responsible for maintaining the confidentiality of your account and password. 
              You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Acceptable Use Policy</h2>
            <p className="text-gray-300 mb-4">
              You agree to use our Services only for lawful purposes and in accordance with these Terms. 
              You agree not to use our Services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>In any way that violates applicable laws or regulations</li>
              <li>To transmit or facilitate the transmission of harmful, offensive, or inappropriate content</li>
              <li>To attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>To interfere with or disrupt the Services or servers</li>
              <li>To reverse engineer, decompile, or disassemble our software</li>
              <li>To use our Services for any commercial purpose without our written consent</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property Rights</h2>
            <p className="text-gray-300 mb-4">
              Our Services and their original content, features, and functionality are owned by Zion Tech Group 
              and are protected by international copyright, trademark, patent, trade secret, and other 
              intellectual property laws.
            </p>
            <p className="text-gray-300 mb-4">
              You retain ownership of any content you submit to our Services. By submitting content, you grant 
              us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute 
              your content in connection with our Services.
            </p>
            <p className="text-gray-300">
              You may not copy, modify, distribute, sell, or lease any part of our Services without our 
              written permission.
            </p>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by 
              our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p className="text-gray-300">
              By using our Services, you consent to the collection and use of information as outlined in 
              our Privacy Policy.
            </p>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Service Availability and Modifications</h2>
            <p className="text-gray-300 mb-4">
              We strive to provide reliable and continuous access to our Services. However, we do not guarantee 
              that our Services will be available at all times or that they will be free from errors or interruptions.
            </p>
            <p className="text-gray-300">
              We reserve the right to modify, suspend, or discontinue any part of our Services at any time 
              with or without notice. We shall not be liable to you or any third party for any modification, 
              suspension, or discontinuance of our Services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by applicable law, Zion Tech Group shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Loss of profits, data, or use</li>
              <li>Business interruption</li>
              <li>Computer failure or malfunction</li>
              <li>Any other damages resulting from your use of our Services</li>
            </ul>
            <p className="text-gray-300">
              Our total liability to you for any claims arising from these Terms or your use of our Services 
              shall not exceed the amount you paid us, if any, for the Services in the twelve months preceding 
              the claim.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Disclaimers</h2>
            <p className="text-gray-300 mb-4">
              Our Services are provided "as is" and "as available" without warranties of any kind, either 
              express or implied. We disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that the Services will meet your specific requirements</li>
              <li>Warranties that the Services will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or reliability of any information obtained through our Services</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Indemnification</h2>
            <p className="text-gray-300">
              You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, directors, 
              employees, and agents from and against any claims, damages, obligations, losses, liabilities, 
              costs, or debt arising from your use of our Services or your violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your access to our Services immediately, without prior notice or 
              liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="text-gray-300">
              Upon termination, your right to use our Services will cease immediately. All provisions of these 
              Terms which by their nature should survive termination shall survive termination.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">14. Governing Law and Jurisdiction</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              California, United States, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-300">
              Any disputes arising from these Terms or your use of our Services shall be resolved in the 
              courts of San Francisco County, California, and you consent to the jurisdiction of such courts.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">15. Changes to These Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-300">
              What constitutes a material change will be determined at our sole discretion. By continuing to 
              access or use our Services after any revisions become effective, you agree to be bound by the 
              revised terms.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
            <p className="text-gray-300">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be 
              changed and interpreted to accomplish the objectives of such provision to the greatest extent 
              possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">17. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="card p-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-200">Email:</span>
                  <a href="mailto:legal@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    legal@ziontechgroup.com
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
            <h2 className="text-2xl font-bold mb-4">18. Additional Information</h2>
            <p className="text-gray-300 mb-4">
              For more information about our policies and practices, you may also want to review:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="text-blue-400 hover:text-blue-300">Accessibility Statement</Link></li>
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-gray-300 mb-6">
              We're here to help clarify any questions you may have about our terms of service.
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