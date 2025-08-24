import React from 'react';
import { SEO } from '@/components/SEO';

const Terms = () => {
  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time, with changes effective upon posting.',
        'Continued use of services after changes constitutes acceptance of modified terms.'
      ]
    },
    {
      title: 'Service Description',
      content: [
        'Zion Tech Group provides technology consulting, development, and support services.',
        'Services include but are not limited to: web development, mobile apps, AI solutions, IT support, and consulting.',
        'We strive to deliver high-quality services but cannot guarantee specific outcomes or results.',
        'Project timelines and deliverables are estimates and may vary based on complexity and requirements.'
      ]
    },
    {
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information for project requirements.',
        'Cooperate with our team and provide necessary feedback in a timely manner.',
        'Ensure you have rights to any content, materials, or intellectual property you provide.',
        'Maintain confidentiality of any proprietary information shared during projects.',
        'Use our services in compliance with applicable laws and regulations.'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment terms are specified in individual project agreements or quotes.',
        'Invoices are typically due within 30 days of issue unless otherwise specified.',
        'Late payments may result in suspension of services or additional fees.',
        'All fees are non-refundable unless otherwise stated in writing.',
        'We reserve the right to modify pricing with 30 days notice.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'We retain ownership of our proprietary tools, frameworks, and methodologies.',
        'Client retains ownership of their original content and business logic.',
        'Custom code developed for clients becomes their property upon full payment.',
        'We may use anonymized project examples in our portfolio and marketing.',
        'Third-party software licenses and terms apply as specified.'
      ]
    },
    {
      title: 'Confidentiality',
      content: [
        'We maintain strict confidentiality of client information and project details.',
        'Non-disclosure agreements are available upon request.',
        'Information may be shared with team members on a need-to-know basis.',
        'We may disclose information if required by law or court order.',
        'Confidentiality obligations survive termination of services.'
      ]
    }
  ];

  const limitations = [
    {
      category: 'Service Availability',
      description: 'Services are provided on an "as is" and "as available" basis'
    },
    {
      category: 'Technical Issues',
      description: 'We are not responsible for third-party service disruptions or technical problems'
    },
    {
      category: 'Data Loss',
      description: 'Clients are responsible for backing up their data and systems'
    },
    {
      category: 'Third-Party Services',
      description: 'We are not liable for issues with third-party tools or services we recommend'
    },
    {
      category: 'Force Majeure',
      description: 'We are not liable for delays or failures due to circumstances beyond our control'
    }
  ];

  const termination = [
    {
      condition: 'Client Request',
      process: 'Services may be terminated with 30 days written notice'
    },
    {
      condition: 'Breach of Terms',
      process: 'We may terminate services immediately for material breaches'
    },
    {
      condition: 'Non-Payment',
      process: 'Services may be suspended or terminated for overdue payments'
    },
    {
      condition: 'Mutual Agreement',
      process: 'Services may be terminated by mutual written agreement'
    }
  ];

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1-555-ZION-TECH',
    address: '123 Tech Street, Innovation City, IC 12345',
    legal: 'Legal Department, Zion Tech Group'
  };

  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read our comprehensive terms of service. Understand the terms and conditions that govern your use of Zion Tech Group services and solutions."
        canonical="/terms"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                These Terms of Service govern your use of Zion Tech Group services. 
                Please read them carefully before using our services. By using our services, 
                you agree to be bound by these terms.
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
                  Agreement to Terms
                </h2>
                <p className="text-blue-100 mb-4">
                  Zion Tech Group ("we," "our," or "us") provides technology services subject to 
                  these Terms of Service ("Terms"). These Terms constitute a legally binding 
                  agreement between you and Zion Tech Group.
                </p>
                <p className="text-blue-100">
                  By accessing or using our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms. If you are using our 
                  services on behalf of an organization, you represent that you have authority 
                  to bind that organization to these Terms.
                </p>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8 max-w-6xl mx-auto mb-16">
              {termsSections.map((section, index) => (
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

            {/* Limitations of Liability */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Limitations of Liability
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <div className="space-y-4">
                    {limitations.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                        <span className="text-white font-medium">{item.category}</span>
                        <span className="text-blue-200 text-sm">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Termination of Services
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <div className="space-y-4">
                    {termination.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                        <span className="text-white font-medium">{item.condition}</span>
                        <span className="text-blue-200 text-sm">{item.process}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Dispute Resolution
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Any disputes arising from these Terms or our services will be resolved 
                    through good faith negotiations. If negotiations fail, disputes will be 
                    resolved through binding arbitration in accordance with the rules of the 
                    American Arbitration Association.
                  </p>
                  <p className="text-blue-100">
                    Both parties agree to waive any right to a jury trial or class action 
                    lawsuit. Arbitration will be conducted in English and governed by the 
                    laws of the state where Zion Tech Group is incorporated.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Governing Law and Jurisdiction
                  </h3>
                  <p className="text-blue-100 mb-4">
                    These Terms are governed by and construed in accordance with the laws of 
                    the state where Zion Tech Group is incorporated, without regard to conflict 
                    of law principles.
                  </p>
                  <p className="text-blue-100">
                    Any legal actions or proceedings relating to these Terms will be brought 
                    exclusively in the courts of that state, and you consent to the personal 
                    jurisdiction of such courts.
                  </p>
                </div>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Severability and Waiver
                  </h3>
                  <p className="text-blue-100 mb-4">
                    If any provision of these Terms is found to be unenforceable or invalid, 
                    that provision will be limited or eliminated to the minimum extent necessary 
                    so that these Terms will otherwise remain in full force and effect.
                  </p>
                  <p className="text-blue-100">
                    The failure of either party to exercise any right under these Terms will 
                    not constitute a waiver of that right. Any waiver must be in writing and 
                    signed by the party granting the waiver.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Questions About These Terms?
                </h2>
                <p className="text-blue-100 mb-6">
                  If you have any questions about these Terms of Service, please contact our 
                  legal department:
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
                    <h4 className="text-white font-semibold mb-2">Legal Department:</h4>
                    <p className="text-blue-200">{contactInfo.legal}</p>
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

export default Terms;