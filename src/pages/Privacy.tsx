import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Globe,
  Mail,
  Phone
} from 'lucide-react';

const Privacy = () => {
  const lastUpdated = 'January 17, 2025';

  const dataCategories = [
    {
      icon: Users,
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information, and job title.',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      icon: Database,
      title: 'Technical Data',
      description: 'IP address, browser type, device information, and usage analytics.',
      examples: ['Website analytics', 'Performance monitoring', 'Security logs']
    },
    {
      icon: Globe,
      title: 'Usage Information',
      description: 'Pages visited, time spent, features used, and interaction patterns.',
      examples: ['User behavior tracking', 'Feature usage analytics', 'Performance metrics']
    }
  ];

  const dataUses = [
    {
      icon: Mail,
      title: 'Communication',
      description: 'Respond to inquiries, provide support, and send important updates.'
    },
    {
      icon: Shield,
      title: 'Service Delivery',
      description: 'Provide and improve our services, customize user experiences.'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Protect against fraud, ensure system security, and maintain service integrity.'
    },
    {
      icon: Users,
      title: 'Analytics',
      description: 'Analyze usage patterns, improve services, and develop new features.'
    }
  ];

  const dataSharing = [
    {
      title: 'Service Providers',
      description: 'We may share data with trusted third-party service providers who assist us in operating our website, conducting business, or servicing users.'
    },
    {
      title: 'Legal Requirements',
      description: 'We may disclose information when required by law, court order, or government request, or to protect our rights and safety.'
    },
    {
      title: 'Business Transfers',
      description: 'In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction.'
    },
    {
      title: 'With Consent',
      description: 'We may share information with third parties when we have explicit consent from users to do so.'
    }
  ];

  const userRights = [
    {
      title: 'Access',
      description: 'Request access to the personal data we hold about you.'
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal data, subject to legal obligations.'
    },
    {
      title: 'Portability',
      description: 'Request a copy of your data in a portable format.'
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal data in certain circumstances.'
    },
    {
      title: 'Restriction',
      description: 'Request restriction of processing in certain situations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect 
              your personal information.
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
                Overview
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                By using our services, you agree to the collection and use of information in 
                accordance with this policy. If you do not agree with our policies and practices, 
                please do not use our services.
              </p>
              <p className="text-zion-slate leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services, 
              ensure security, and enhance user experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <category.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-zion-slate mb-4 text-center">
                  {category.description}
                </p>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-zion-slate flex items-start">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              How We Use Your Information
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We use the information we collect for various purposes to provide, 
              maintain, and improve our services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataUses.map((use, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <use.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-3">
                  {use.title}
                </h3>
                <p className="text-zion-slate text-sm">
                  {use.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Information Sharing and Disclosure
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We are committed to protecting your privacy and do not sell, trade, 
              or otherwise transfer your personal information to third parties without your consent.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {dataSharing.map((item, index) => (
              <div key={index} className="bg-zinc-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-zion-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Data Security
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our security measures include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Encryption of data in transit and at rest
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Regular security assessments and penetration testing
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Access controls and authentication mechanisms
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Employee training on data protection and privacy
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Incident response and breach notification procedures
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                While we strive to protect your personal information, no method of transmission 
                over the internet or electronic storage is 100% secure. We cannot guarantee 
                absolute security but are committed to maintaining the highest standards of data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              You have certain rights regarding your personal information. 
              We respect these rights and are committed to helping you exercise them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <div key={index} className="bg-zinc-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {right.title}
                </h3>
                <p className="text-zion-slate text-sm">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-zion-slate mb-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand where our visitors are coming from.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Types of cookies we use:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Essential cookies:</strong> Required for basic website functionality
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Analytics cookies:</strong> Help us understand how visitors use our website
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Functional cookies:</strong> Remember your preferences and settings
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Marketing cookies:</strong> Used for targeted advertising and marketing
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                You can control and manage cookies through your browser settings. However, 
                disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Third-Party Services and Links
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our website may contain links to third-party websites and services. 
                We are not responsible for the privacy practices or content of these external sites.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We may use third-party services for:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Website analytics and performance monitoring
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Customer relationship management and support
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Payment processing and financial services
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Marketing and advertising services
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                We recommend reviewing the privacy policies of any third-party services 
                you interact with to understand how they handle your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Children's Privacy
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our services are not intended for children under the age of 13. 
                We do not knowingly collect personal information from children under 13.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                If you are a parent or guardian and believe that your child has provided 
                us with personal information, please contact us immediately. We will take 
                steps to remove such information from our records.
              </p>
              <p className="text-zion-slate leading-relaxed">
                For users between the ages of 13 and 18, we recommend reviewing this 
                Privacy Policy with a parent or guardian to ensure understanding of our practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                International Data Transfers
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Your information may be transferred to and processed in countries other than 
                your own. We ensure that such transfers comply with applicable data protection laws.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                When we transfer data internationally, we implement appropriate safeguards such as:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Standard contractual clauses approved by data protection authorities
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Adequacy decisions by relevant authorities
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Binding corporate rules for multinational organizations
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Other appropriate safeguards as required by law
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                By using our services, you consent to the transfer of your information 
                to countries outside your residence, subject to the safeguards described above.
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
              Contact Us
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
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
                      <Mail className="w-5 h-5 text-zion-cyan" />
                      <a 
                        href="mailto:kleber@ziontechgroup.com"
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-zion-cyan" />
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
                    Data Protection Officer
                  </h3>
                  <p className="text-zion-slate mb-4">
                    For privacy-specific inquiries or to exercise your data rights, 
                    you can also contact our Data Protection Officer directly.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    Contact DPO
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
            Questions About Privacy?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            We're committed to transparency and protecting your privacy. 
            If you have any questions or concerns, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Privacy%20Policy%20Question"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;