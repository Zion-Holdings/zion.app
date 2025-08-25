import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  Users, 
  Globe, 
  Lock, 
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Terms = () => {
  const lastUpdated = 'January 17, 2025';

  const keyTerms = [
    {
      icon: Users,
      title: 'User Accounts',
      description: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.'
    },
    {
      icon: Shield,
      title: 'Acceptable Use',
      description: 'You agree to use our services only for lawful purposes and in accordance with these Terms of Service.'
    },
    {
      icon: Lock,
      title: 'Intellectual Property',
      description: 'All content, features, and functionality are owned by Zion Tech Group and protected by copyright, trademark, and other laws.'
    },
    {
      icon: Globe,
      title: 'Service Availability',
      description: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services.'
    }
  ];

  const prohibitedActivities = [
    'Violating any applicable laws or regulations',
    'Infringing on intellectual property rights',
    'Attempting to gain unauthorized access to our systems',
    'Transmitting malware, viruses, or harmful code',
    'Engaging in spam, phishing, or fraudulent activities',
    'Interfering with service operation or other users',
    'Collecting personal information without consent',
    'Using services for illegal or harmful purposes'
  ];

  const userObligations = [
    'Provide accurate and complete information',
    'Maintain the security of your account',
    'Comply with all applicable laws and regulations',
    'Respect intellectual property rights',
    'Report security vulnerabilities responsibly',
    'Use services in accordance with these terms',
    'Maintain appropriate backup of your data',
    'Pay all applicable fees and charges'
  ];

  const serviceLimitations = [
    {
      title: 'Availability',
      description: 'Services are provided "as is" and "as available" without warranties of any kind.'
    },
    {
      title: 'Performance',
      description: 'We do not guarantee specific performance levels or response times for our services.'
    },
    {
      title: 'Compatibility',
      description: 'Services may not be compatible with all devices, browsers, or operating systems.'
    },
    {
      title: 'Third-Party Services',
      description: 'We are not responsible for third-party services or content accessed through our platform.'
    }
  ];

  const terminationConditions = [
    {
      title: 'Breach of Terms',
      description: 'We may terminate or suspend access for violations of these terms.'
    },
    {
      title: 'Non-Payment',
      description: 'Services may be suspended for failure to pay applicable fees.'
    },
    {
      title: 'Inactivity',
      description: 'Accounts may be deactivated after extended periods of inactivity.'
    },
    {
      title: 'Legal Requirements',
      description: 'We may terminate services to comply with legal obligations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
              <span>Last Updated:</span>
              <span className="font-semibold">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Agreement to Terms
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Zion Tech Group website, 
                services, and applications (collectively, the "Services"). By accessing or using 
                our Services, you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                If you do not agree with any of these terms, you are prohibited from using or 
                accessing our Services. These Terms apply to all visitors, users, and others who 
                access or use our Services.
              </p>
              <p className="text-zion-slate leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of 
                any material changes by updating the "Last Updated" date and posting the new Terms on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Key Terms and Conditions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understanding these key terms is essential for using our services. 
              Please review them carefully.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <term.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3 text-center">
                  {term.title}
                </h3>
                <p className="text-zion-slate text-center">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Description of Services
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Zion Tech Group provides technology solutions and services including but not limited to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Custom software development and consulting services
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  AI and machine learning solutions
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Cloud infrastructure and DevOps services
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Cybersecurity and compliance solutions
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Digital transformation consulting
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Marketplace platform for technology services
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our Services 
                at any time without notice. We shall not be liable to you or any third party for 
                any modification, suspension, or discontinuance of the Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                User Accounts and Registration
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                To access certain features of our Services, you may be required to create an account. 
                When creating an account, you must provide accurate, current, and complete information.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                You are responsible for:
              </p>
              <ul className="space-y-2 mb-6">
                {userObligations.map((obligation, index) => (
                  <li key={index} className="flex items-start text-zion-slate">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    {obligation}
                  </li>
                ))}
              </ul>
              <p className="text-zion-slate leading-relaxed">
                You may not share your account credentials with others or allow others to access 
                your account. You are responsible for all activities that occur under your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptable Use */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Acceptable Use Policy
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. 
                You agree not to use our Services:
              </p>
              <ul className="space-y-2 mb-6">
                {prohibitedActivities.map((activity, index) => (
                  <li key={index} className="flex items-start text-zion-slate">
                    <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    {activity}
                  </li>
                ))}
              </ul>
              <p className="text-zion-slate leading-relaxed">
                Violation of this Acceptable Use Policy may result in immediate termination of your 
                account and access to our Services, as well as potential legal action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Intellectual Property Rights
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                The Services and their original content, features, and functionality are and will remain 
                the exclusive property of Zion Tech Group and its licensors. The Services are protected 
                by copyright, trademark, and other laws.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                You retain ownership of any content you submit, post, or display on or through our Services. 
                By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                reproduce, modify, and distribute such content in connection with our Services.
              </p>
              <p className="text-zion-slate leading-relaxed">
                You may not use our trademarks, service marks, or trade names without our prior written consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Limitations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Limitations and Disclaimers
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understanding the limitations of our services helps set appropriate expectations 
              for what we can and cannot provide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceLimitations.map((limitation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {limitation.title}
                </h3>
                <p className="text-zion-slate">
                  {limitation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy and Data */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Privacy and Data Protection
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                By using our Services, you consent to the collection and use of information as 
                outlined in our Privacy Policy. You acknowledge that we may process your personal 
                data in accordance with our Privacy Policy.
              </p>
              <p className="text-zion-slate leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="mt-6">
                <Link 
                  to="/privacy" 
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors"
                >
                  View Privacy Policy
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Termination and Account Cancellation
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understanding when and how services may be terminated helps ensure 
              a smooth experience with our platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {terminationConditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {condition.title}
                </h3>
                <p className="text-zion-slate">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-zion-slate mb-4">
              Upon termination, your right to use the Services will cease immediately. 
              We may delete your account and all associated data at our discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Limitation of Liability
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                To the maximum extent permitted by applicable law, Zion Tech Group shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including 
                without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our total liability to you for any claims arising from or relating to these Terms 
                or your use of our Services shall not exceed the amount you paid us for the Services 
                in the twelve (12) months preceding the claim.
              </p>
              <p className="text-zion-slate leading-relaxed">
                Some jurisdictions do not allow the limitation or exclusion of liability for incidental 
                or consequential damages, so the above limitation may not apply to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Any disputes arising from or relating to these Terms or our Services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration Association. 
                The arbitration shall take place in Delaware, United States.
              </p>
              <p className="text-zion-slate leading-relaxed">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit 
                with respect to any dispute arising from these Terms or our Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Changes to Terms of Service
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                What constitutes a material change will be determined at our sole discretion. 
                We will notify users of any changes by:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Posting the new Terms on our website
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Sending email notifications to registered users
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Updating the "Last Updated" date
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                By continuing to use our Services after any revisions become effective, you agree to 
                be bound by the revised terms. If you do not agree to the new terms, you are no longer 
                authorized to use our Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              If you have any questions about these Terms of Service or need clarification 
              on any provision, please don't hesitate to contact us.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                    Zion Tech Group
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 text-zion-cyan">
                        📧
                      </div>
                      <a 
                        href="mailto:kleber@ziontechgroup.com"
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 text-zion-cyan">
                        📱
                      </div>
                      <a 
                        href="tel:+13024640950"
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        +1 (302) 464-0950
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 text-zion-cyan mt-0.5">
                        📍
                      </div>
                      <div className="text-zion-slate">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709<br />
                        United States
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">
                    Legal Department
                  </h3>
                  <p className="text-zion-slate mb-4">
                    For legal inquiries or formal notices regarding these Terms of Service, 
                    please contact our legal department.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    Contact Legal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            By using our services, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms of Service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Terms%20of%20Service%20Question"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Email Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;