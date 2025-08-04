import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Security: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const securityMeasures = [
    {
      category: 'Data Protection',
      measures: [
        {
          title: 'End-to-End Encryption',
          description: 'All data transmitted through Zion is encrypted using industry-standard AES-256 encryption.',
          icon: '🔒'
        },
        {
          title: 'Secure Data Centers',
          description: 'Our infrastructure is hosted in SOC 2 Type II certified data centers with redundant systems.',
          icon: '🏢'
        },
        {
          title: 'Regular Security Audits',
          description: 'We conduct comprehensive security audits and penetration testing on a regular basis.',
          icon: '🔍'
        }
      ]
    },
    {
      category: 'Authentication & Access',
      measures: [
        {
          title: 'Multi-Factor Authentication',
          description: 'Advanced MFA options including SMS, authenticator apps, and hardware tokens.',
          icon: '🔐'
        },
        {
          title: 'Role-Based Access Control',
          description: 'Granular permissions system ensuring users only access what they need.',
          icon: '👥'
        },
        {
          title: 'Session Management',
          description: 'Secure session handling with automatic timeouts and suspicious activity detection.',
          icon: '⏰'
        }
      ]
    },
    {
      category: 'Compliance & Standards',
      measures: [
        {
          title: 'GDPR Compliance',
          description: 'Full compliance with EU data protection regulations and user privacy rights.',
          icon: '🇪🇺'
        },
        {
          title: 'SOC 2 Type II',
          description: 'Certified for security, availability, processing integrity, confidentiality, and privacy.',
          icon: '📋'
        },
        {
          title: 'ISO 27001',
          description: 'Information security management system certification for data protection.',
          icon: '🏆'
        }
      ]
    }
  ]

  const complianceFrameworks = [
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'European Union General Data Protection Regulation',
      details: [
        'Data minimization and purpose limitation',
        'User consent management',
        'Right to data portability and erasure',
        'Data breach notification requirements'
      ]
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act',
      details: [
        'Consumer rights and disclosures',
        'Data sale opt-out mechanisms',
        'Non-discrimination provisions',
        'Service provider agreements'
      ]
    },
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Service Organization Control 2',
      details: [
        'Security controls assessment',
        'Availability monitoring',
        'Processing integrity verification',
        'Confidentiality and privacy protection'
      ]
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'Information Security Management',
      details: [
        'Risk assessment and treatment',
        'Security policy implementation',
        'Asset management and control',
        'Incident management procedures'
      ]
    }
  ]

  const securityFeatures = [
    {
      title: 'Real-Time Threat Detection',
      description: 'Advanced AI-powered threat detection system that monitors for suspicious activities and potential security breaches.',
      icon: '🛡️'
    },
    {
      title: 'Automated Security Updates',
      description: 'Regular security patches and updates are automatically deployed to ensure the latest protection.',
      icon: '🔄'
    },
    {
      title: 'Secure API Access',
      description: 'All API endpoints are protected with rate limiting, authentication, and encryption.',
      icon: '🔌'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive backup systems with multiple geographic locations and disaster recovery procedures.',
      icon: '💾'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Security - Zion</title>
        <meta name="description" content="Learn about Zion's comprehensive security measures, data protection, and compliance standards." />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/help-center" className="text-gray-300 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-200">
                Join Zion Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your security is our top priority. Learn about our comprehensive security measures, 
            data protection practices, and compliance standards.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'overview', name: 'Security Overview', icon: '🛡️' },
            { id: 'compliance', name: 'Compliance', icon: '📋' },
            { id: 'features', name: 'Security Features', icon: '🔧' },
            { id: 'privacy', name: 'Privacy', icon: '🔒' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Security Measures</h2>
              {securityMeasures.map((category) => (
                <div key={category.category} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.measures.map((measure) => (
                      <div key={measure.title} className="text-center">
                        <div className="text-3xl mb-3">{measure.icon}</div>
                        <h4 className="text-lg font-semibold text-white mb-2">{measure.title}</h4>
                        <p className="text-gray-300 text-sm">{measure.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Compliance & Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {complianceFrameworks.map((framework) => (
                  <div key={framework.name} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{framework.name}</h3>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{framework.description}</p>
                    <ul className="space-y-2">
                      {framework.details.map((detail, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Security Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Privacy Protection</h2>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Data Privacy Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Data Minimization</h4>
                    <p className="text-gray-300 text-sm">
                      We only collect and process the minimum amount of data necessary to provide our services.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">User Control</h4>
                    <p className="text-gray-300 text-sm">
                      Users have full control over their data with options to view, export, and delete their information.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Transparency</h4>
                    <p className="text-gray-300 text-sm">
                      Clear and comprehensive privacy policies explaining how we use and protect your data.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Security by Design</h4>
                    <p className="text-gray-300 text-sm">
                      Privacy and security considerations are built into every aspect of our platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Your Privacy Rights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <div>
                      <h4 className="text-white font-medium">Right to Access</h4>
                      <p className="text-gray-300 text-sm">Request a copy of your personal data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <div>
                      <h4 className="text-white font-medium">Right to Rectification</h4>
                      <p className="text-gray-300 text-sm">Correct inaccurate or incomplete data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <div>
                      <h4 className="text-white font-medium">Right to Erasure</h4>
                      <p className="text-gray-300 text-sm">Request deletion of your personal data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <div>
                      <h4 className="text-white font-medium">Right to Portability</h4>
                      <p className="text-gray-300 text-sm">Receive your data in a portable format</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Security Commitment */}
        <div className="mt-16">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Security Commitment</h2>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              We are committed to maintaining the highest standards of security and privacy. 
              Our team continuously monitors and improves our security measures to protect your data and ensure compliance with all applicable regulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Continuous Monitoring</h3>
                <p className="text-gray-300 text-sm">
                  24/7 security monitoring and threat detection
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Regular Updates</h3>
                <p className="text-gray-300 text-sm">
                  Automatic security patches and system updates
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-white mb-2">Compliance</h3>
                <p className="text-gray-300 text-sm">
                  Regular audits and compliance certifications
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Security Team */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Security Questions?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Our security team is available to answer any questions about our security measures and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold"
              >
                Contact Security Team
              </Link>
              <Link 
                href="/privacy-policy"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Security 