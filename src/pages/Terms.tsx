import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  Clock, 
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const Terms: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using our services. 
            By using our services, you agree to be bound by these terms.
          </p>
          <div className="flex items-center justify-center gap-4 text-zion-slate-light">
            <Clock className="w-5 h-5" />
            <span>Last updated: {currentDate}</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-zion-slate-light mb-4">
                Welcome to Zion Tech Group ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, 
                services, and any related applications (collectively, the "Services").
              </p>
              <p className="text-zion-slate-light">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, 
                then you may not access the Services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group provides technology consulting, AI solutions, cloud infrastructure, cybersecurity services, 
                and digital transformation solutions. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>AI and machine learning consulting and implementation</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity assessments and solutions</li>
                <li>Enterprise software development</li>
                <li>IT consulting and digital transformation</li>
                <li>Technical support and maintenance services</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="text-zion-slate-light mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. 
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className="text-zion-slate-light">
                You agree not to disclose your password to any third party and to take sole responsibility for any activities 
                or actions under your account, whether or not you have authorized such activities or actions.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
              <p className="text-zion-slate-light mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the Services</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-zion-slate-light mb-4">
                The Services and their original content, features, and functionality are and will remain the exclusive property 
                of Zion Tech Group and its licensors. The Services are protected by copyright, trademark, and other laws.
              </p>
              <p className="text-zion-slate-light">
                You retain ownership of any content you submit, post, or display on or through the Services. By submitting content, 
                you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Privacy Policy</h2>
              <p className="text-zion-slate-light mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Services, 
                to understand our practices regarding the collection and use of your information.
              </p>
              <Link 
                to="/privacy"
                className="text-zion-cyan hover:text-zion-cyan-light underline"
              >
                View our Privacy Policy
              </Link>
            </div>

            {/* Payment Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Payment Terms</h2>
              <p className="text-zion-slate-light mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Project-based services require a deposit before work begins</li>
                <li>Monthly retainers are billed in advance</li>
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-zion-slate-light mb-4">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Services.
              </p>
              <p className="text-zion-slate-light">
                Our total liability to you for any claims arising from the use of our Services shall not exceed the amount 
                you paid us for the specific service giving rise to the claim.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers</h2>
              <p className="text-zion-slate-light mb-4">
                The Services are provided on an "AS IS" and "AS AVAILABLE" basis. Zion Tech Group makes no warranties, 
                expressed or implied, and hereby disclaims all warranties, including without limitation:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the Services will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy or reliability of any information</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p className="text-zion-slate-light mb-4">
                We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-zion-slate-light">
                If you wish to terminate your account, you may simply discontinue using the Services. All provisions of the Terms 
                which by their nature should survive termination shall survive termination.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p className="text-zion-slate-light">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms or the Services 
                shall be resolved in the courts of Delaware.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p className="text-zion-slate-light mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-zion-slate-light">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use 
                our Services after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-zion-slate-light">
                  <strong>Zion Tech Group</strong><br />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  Email: <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">kleber@ziontechgroup.com</a><br />
                  Phone: <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light">+1 (302) 464-0950</a>
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg p-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Acknowledgment</h3>
                  <p className="text-zion-slate-light">
                    By using our Services, you acknowledge that you have read these Terms of Service, understand them, 
                    and agree to be bound by them. If you do not agree to these terms, please do not use our Services.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            If you have any questions about these terms or need clarification on any section, 
            our legal team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-zion-cyan hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/faq" 
              className="border border-white text-white hover:bg-white hover:text-zion-cyan px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;