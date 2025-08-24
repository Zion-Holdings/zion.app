import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Scale, CheckCircle, Globe, Shield, FileText, Users, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function Compliance() {
  const complianceFrameworks = [
    {
      id: 'soc2',
      title: 'SOC 2 Type II',
      icon: Shield,
      description: 'Annual audits of security, availability, and confidentiality controls',
      details: [
        'Independent third-party auditing',
        'Security controls assessment',
        'Availability and processing integrity',
        'Confidentiality safeguards',
        'Annual compliance reporting'
      ]
    },
    {
      id: 'iso27001',
      title: 'ISO 27001',
      icon: Scale,
      description: 'International standard for information security management',
      details: [
        'Information security management system (ISMS)',
        'Risk assessment and management',
        'Security policy implementation',
        'Continuous improvement processes',
        'Regular certification audits'
      ]
    },
    {
      id: 'gdpr',
      title: 'GDPR Compliance',
      icon: Globe,
      description: 'European Union data protection regulation compliance',
      details: [
        'Data protection by design and default',
        'Individual rights management',
        'Data processing agreements',
        'Privacy impact assessments',
        'Breach notification procedures'
      ]
    },
    {
      id: 'hipaa',
      title: 'HIPAA Compliance',
      icon: Users,
      description: 'Healthcare information privacy and security standards',
      details: [
        'Protected health information (PHI) safeguards',
        'Business associate agreements',
        'Access controls and audit logs',
        'Workforce training programs',
        'Incident response procedures'
      ]
    }
  ];

  const additionalCompliance = [
    { name: 'PCI DSS', description: 'Payment card industry data security standard' },
    { name: 'CCPA', description: 'California Consumer Privacy Act compliance' },
    { name: 'FERPA', description: 'Family Educational Rights and Privacy Act' },
    { name: 'FISMA', description: 'Federal Information Security Management Act' },
    { name: 'FedRAMP', description: 'Federal Risk and Authorization Management Program' }
  ];

  return (
    <>
      <Head>
        <title>Compliance | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's regulatory compliance, certifications, and commitment to meeting industry standards and data protection requirements." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <Scale className="w-16 h-16 text-cyan-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Regulatory Compliance
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We maintain the highest standards of regulatory compliance to protect your data and ensure business continuity across global markets.
            </motion.p>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Compliance Program</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our commitment to compliance ensures that we meet or exceed industry standards and regulatory requirements.
              </p>
            </motion.div>

            {/* Main Compliance Frameworks */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center mb-6">
                    <framework.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{framework.title}</h3>
                      <p className="text-gray-400 mt-1">{framework.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {framework.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Additional Compliance Standards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Additional Compliance Standards</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {additionalCompliance.map((standard, index) => (
                  <motion.div
                    key={standard.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">{standard.name}</h4>
                    <p className="text-gray-300 text-sm">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Our Compliance Process</h3>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Assessment</h4>
                    <p className="text-gray-300 text-sm">Regular compliance assessments and gap analysis</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Implementation</h4>
                    <p className="text-gray-300 text-sm">Control implementation and policy enforcement</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Scale className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Audit</h4>
                    <p className="text-gray-300 text-sm">Independent third-party audits and validation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Monitoring</h4>
                    <p className="text-gray-300 text-sm">Continuous monitoring and improvement</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Protection Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Your Data Protection Rights</h3>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Under various data protection regulations, you have specific rights regarding your personal data:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Users className="w-5 h-5 text-cyan-400 mr-2" />
                      Individual Rights
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Right to access your personal data</li>
                      <li>• Right to rectification (correction)</li>
                      <li>• Right to erasure (&quot;right to be forgotten&quot;)</li>
                      <li>• Right to restrict processing</li>
                      <li>• Right to data portability</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                      Exercise Your Rights
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Submit requests through our privacy portal</li>
                      <li>• Contact our Data Protection Officer</li>
                      <li>• Receive responses within regulatory timeframes</li>
                      <li>• Appeal decisions through supervisory authorities</li>
                      <li>• Free of charge for legitimate requests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* International Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Global Compliance Coverage</h3>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">European Union</h4>
                    <p className="text-gray-300 text-sm">GDPR, Data Protection Act, Digital Services Act</p>
                  </div>
                  
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">United States</h4>
                    <p className="text-gray-300 text-sm">CCPA, HIPAA, SOX, FISMA, FedRAMP</p>
                  </div>
                  
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">Asia-Pacific</h4>
                    <p className="text-gray-300 text-sm">PIPEDA, Privacy Act, PDPA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Compliance Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Scale className="w-8 h-8 text-purple-400 mr-4" />
                Compliance Questions?
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                For questions about our compliance programs or to exercise your data protection rights:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Compliance Email</p>
                    <p className="text-gray-300">compliance@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Data Protection Officer</p>
                    <p className="text-gray-300">dpo@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Compliance Hotline</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <EnhancedFooter />
      </div>
    </>
  );
}