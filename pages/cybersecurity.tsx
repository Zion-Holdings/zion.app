import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Zap, Globe } from 'lucide-react';

export default function CybersecurityPage() {
  const services = [
    {
      icon: Shield,
      title: 'Security Auditing & Assessment',
      description: 'Comprehensive security evaluations to identify vulnerabilities and compliance gaps',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Architecture Review', 'Compliance Auditing'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Network Security',
      description: 'Advanced network protection with firewall management and intrusion detection',
      features: ['Firewall Configuration', 'Intrusion Detection/Prevention', 'Network Monitoring', 'Traffic Analysis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services',
      features: ['SIEM Implementation', 'Threat Detection', 'Incident Response', 'Security Analytics'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Identity & Access Management',
      description: 'Secure user authentication and authorization systems',
      features: ['Single Sign-On (SSO)', 'Multi-Factor Authentication', 'Role-Based Access Control', 'Identity Governance'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Security Automation',
      description: 'AI-powered security automation for threat response and compliance',
      features: ['Automated Threat Response', 'Security Orchestration', 'Compliance Automation', 'Security Workflow Automation'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Cloud Security',
      description: 'Comprehensive security for cloud infrastructure and applications',
      features: ['Cloud Security Posture Management', 'Container Security', 'API Security', 'Data Protection'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2 Type II', description: 'Service Organization Control compliance for data security' },
    { name: 'ISO 27001', description: 'International standard for information security management' },
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'NIST', description: 'National Institute of Standards and Technology framework' }
  ];

  const threatLandscape = [
    {
      threat: 'Ransomware Attacks',
      description: 'Malicious software that encrypts data and demands payment',
      impact: 'High',
      protection: 'Advanced endpoint protection, regular backups, user training'
    },
    {
      threat: 'Phishing & Social Engineering',
      description: 'Deceptive tactics to steal sensitive information',
      impact: 'Medium',
      protection: 'Email filtering, user awareness training, multi-factor authentication'
    },
    {
      threat: 'Insider Threats',
      description: 'Security risks from employees or contractors',
      impact: 'High',
      protection: 'Access monitoring, user behavior analytics, least privilege access'
    },
    {
      threat: 'Supply Chain Attacks',
      description: 'Compromising software or hardware in the supply chain',
      impact: 'High',
      protection: 'Vendor security assessments, code signing, integrity verification'
    }
  ];

  return (
    <>
      <Head>
        <title>Cybersecurity Services | Zion Tech Group - Advanced Security Solutions</title>
        <meta name="description" content="Comprehensive cybersecurity services including security auditing, network protection, compliance management, and 24/7 security monitoring." />
        <meta property="og:title" content="Cybersecurity Services | Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions to protect your business from evolving threats." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
          <div className="relative container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Cybersecurity Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Protect your business with enterprise-grade cybersecurity solutions designed to defend against evolving threats and ensure compliance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Cybersecurity Services</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Comprehensive security solutions designed to protect your digital assets and ensure business continuity
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-white/60 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">Compliance & Standards</h2>
                <p className="text-lg text-white/80 mb-6">
                  We help organizations achieve and maintain compliance with industry standards and regulatory requirements, ensuring your security posture meets the highest standards.
                </p>
                <p className="text-lg text-white/80">
                  Our team of certified security professionals has extensive experience implementing security controls and processes that align with major compliance frameworks.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {complianceFrameworks.map((framework, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-white mb-2">{framework.name}</h3>
                    <p className="text-sm text-white/70">{framework.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Threat Landscape */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Understanding the Threat Landscape</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Stay informed about current cybersecurity threats and our recommended protection strategies
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {threatLandscape.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{threat.threat}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      threat.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {threat.impact} Impact
                    </span>
                  </div>
                  <p className="text-white/70 mb-4">{threat.description}</p>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Protection Measures:</h4>
                    <p className="text-sm text-white/60">{threat.protection}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Process */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Security Process</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A systematic approach to securing your organization
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Assessment', description: 'Comprehensive security evaluation and risk analysis' },
                  { step: '02', title: 'Strategy', description: 'Develop customized security roadmap and implementation plan' },
                  { step: '03', title: 'Implementation', description: 'Deploy security solutions and establish monitoring' },
                  { step: '04', title: 'Optimization', description: 'Continuous improvement and threat response optimization' }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{phase.step}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">{phase.title}</h3>
                    <p className="text-white/70 text-sm">{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Secure Your Business?</h2>
              <p className="text-xl text-white/70 mb-8">
                Don't wait for a security breach. Let our cybersecurity experts help you build a robust defense strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Security Assessment
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
