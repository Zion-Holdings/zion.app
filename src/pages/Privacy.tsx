import React from 'react';
import { SEO } from '@/components/SEO';

const Privacy = () => {
  const privacySections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number, company)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions)',
        'Communication records (emails, support tickets, chat logs)'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our services',
        'Communicate with you about projects and updates',
        'Process payments and manage accounts',
        'Send marketing communications (with your consent)',
        'Analyze usage patterns to enhance user experience',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information',
        'Information may be shared with trusted service providers',
        'Data may be disclosed if required by law',
        'Aggregated, anonymized data may be used for analytics'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure servers with regular security audits',
        'Access controls and authentication measures',
        'Regular backups and disaster recovery procedures',
        'Employee training on data protection'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request corrections to inaccurate data',
        'Request deletion of your personal information',
        'Opt-out of marketing communications',
        'Data portability requests',
        'Lodge complaints with supervisory authorities'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'Essential cookies for website functionality',
        'Analytics cookies to understand usage patterns',
        'Marketing cookies for personalized content',
        'You can control cookie preferences in your browser',
        'Third-party services may use their own cookies'
      ]
    }
  ];

  const dataRetention = [
    {
      category: 'Account Information',
      retention: 'Until account deletion or 7 years after last activity'
    },
    {
      category: 'Project Data',
      retention: '7 years after project completion for legal compliance'
    },
    {
      category: 'Communication Records',
      retention: '3 years after last interaction'
    },
    {
      category: 'Analytics Data',
      retention: '2 years in aggregated, anonymized form'
    },
    {
      category: 'Marketing Data',
      retention: 'Until consent withdrawal or 2 years of inactivity'
    }
  ];

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1-555-ZION-TECH',
    address: '123 Tech Street, Innovation City, IC 12345',
    dpo: 'Data Protection Officer, Zion Tech Group'
  };

  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Our comprehensive privacy policy ensures transparency and data protection."
        canonical="/privacy"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This policy explains how we collect, 
                use, and safeguard your data.
              </p>
              <p className="text-blue-200 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Introduction */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Commitment to Privacy
                </h2>
                <p className="text-blue-100 mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website, use our services, or interact with us.
                </p>
                <p className="text-blue-100">
                  By using our services, you agree to the collection and use of information in 
                  accordance with this policy. If you do not agree with our policies and practices, 
                  please do not use our services.
                </p>
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8 max-w-6xl mx-auto mb-16">
              {privacySections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-blue-100 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Data Retention */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Data Retention Periods
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <div className="space-y-4">
                    {dataRetention.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                        <span className="text-white font-medium">{item.category}</span>
                        <span className="text-blue-200 text-sm">{item.retention}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    International Data Transfers
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Your information may be transferred to and processed in countries other than 
                    your own. We ensure that such transfers comply with applicable data protection 
                    laws and implement appropriate safeguards to protect your information.
                  </p>
                  <p className="text-blue-100">
                    For transfers to countries outside the European Economic Area (EEA), we rely 
                    on adequacy decisions, standard contractual clauses, or other appropriate 
                    safeguards as required by applicable law.
                  </p>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Children's Privacy
                  </h3>
                  <p className="text-blue-100">
                    Our services are not intended for children under 13 years of age. We do not 
                    knowingly collect personal information from children under 13. If you are a 
                    parent or guardian and believe your child has provided us with personal 
                    information, please contact us immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Changes to This Privacy Policy
                  </h3>
                  <p className="text-blue-100 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of 
                    any changes by posting the new Privacy Policy on this page and updating the 
                    "Last updated" date.
                  </p>
                  <p className="text-blue-100">
                    We encourage you to review this Privacy Policy periodically for any changes. 
                    Your continued use of our services after any changes constitutes acceptance 
                    of the updated policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Contact Us
                </h2>
                <p className="text-blue-100 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email:</h4>
                    <p className="text-blue-200">{contactInfo.email}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone:</h4>
                    <p className="text-blue-200">{contactInfo.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Address:</h4>
                    <p className="text-blue-200">{contactInfo.address}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Data Protection Officer:</h4>
                    <p className="text-blue-200">{contactInfo.dpo}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Privacy;