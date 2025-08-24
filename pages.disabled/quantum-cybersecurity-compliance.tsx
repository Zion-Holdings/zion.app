import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, Atom, Lock, CheckCircle, Zap, 
  BarChart3, Target, Star, ArrowRight, 
  Phone, Mail, Globe, AlertTriangle, 
  FileText, Users, Settings
} from 'lucide-react';

export default function QuantumCybersecurityCompliance() {
  const features = [
    'Automated compliance monitoring',
    'Quantum-resistant encryption',
    'Real-time security assessments',
    'Compliance reporting automation',
    'Risk assessment tools',
    'Policy management system',
    'Audit trail and logging',
    'Integration with security tools',
    'Automated remediation workflows',
    'Compliance dashboard',
    'Team training modules',
    '24/7 security monitoring'
  ];

  const benefits = [
    'Reduce compliance costs by 60%',
    'Automate 80% of compliance tasks',
    'Future-proof against quantum threats',
    'Maintain continuous compliance',
    'Reduce audit preparation time',
    'Improve security posture',
    'Streamlined compliance workflows',
    'Competitive security advantage'
  ];

  const useCases = [
    'Financial institutions',
    'Healthcare organizations',
    'Technology companies',
    'Government contractors',
    'E-commerce businesses',
    'SaaS providers',
    'Compliance officers',
    'Security teams'
  ];

  const complianceFrameworks = [
    'SOC2 Type I & II',
    'ISO 27001',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'NIST Cybersecurity Framework',
    'FedRAMP',
    'SOX'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$599/month',
      features: [
        'Up to 100 users',
        'Basic compliance monitoring',
        'Standard security assessments',
        'Email support',
        'Core compliance frameworks'
      ]
    },
    {
      name: 'Professional',
      price: '$1,499/month',
      features: [
        'Up to 1,000 users',
        'Advanced compliance monitoring',
        'Quantum-resistant encryption',
        'Priority support',
        'All compliance frameworks',
        'Automated remediation'
      ]
    },
    {
      name: 'Enterprise',
      price: '$4,999/month',
      features: [
        'Unlimited users',
        'Full quantum security suite',
        'Custom compliance policies',
        'Dedicated security manager',
        '24/7 support',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="Quantum Cybersecurity Compliance Platform | Zion Tech Group"
        description="Future-proof your security posture with quantum-resistant compliance automation. Automate SOC2, ISO27001, and GDPR compliance while preparing for quantum computing threats."
        keywords="quantum cybersecurity, compliance automation, SOC2, ISO27001, GDPR, quantum-resistant encryption, security compliance"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Quantum Cybersecurity & Compliance
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Quantum Cybersecurity Compliance Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Future-proof your security posture with quantum-resistant compliance automation and advanced threat protection
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Secure Your Future with Quantum-Ready Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines quantum-resistant encryption with automated compliance monitoring to protect your organization against current and future threats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quantum-Resistant",
                description: "Future-proof encryption that withstands quantum computing attacks"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "60% Cost Reduction",
                description: "Automate compliance tasks and reduce operational costs significantly"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Continuous Compliance",
                description: "Maintain compliance 24/7 with automated monitoring and reporting"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Real-Time Security",
                description: "Monitor threats and vulnerabilities in real-time with AI-powered detection"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Support for all major compliance frameworks with automated monitoring and reporting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{framework}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to protect your organization and maintain compliance in the quantum era
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs and compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border ${
                  index === 1 
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50' 
                    : 'bg-gray-800/30 border-gray-700/30'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  index === 1
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                    : 'bg-gray-700 hover:bg-gray-600 border border-gray-600'
                }`}>
                  {index === 1 ? 'Start Free Trial' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed for organizations that demand the highest level of security and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quantum-Ready Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for the future with quantum-resistant encryption and advanced threat protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-800/30 rounded-xl border border-gray-700/30"
            >
              <div className="flex items-center mb-4">
                <Atom className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">Quantum-Resistant Encryption</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our platform uses post-quantum cryptographic algorithms that remain secure even when quantum computers become available.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Lattice-based cryptography</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Hash-based signatures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Code-based encryption</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-800/30 rounded-xl border border-gray-700/30"
            >
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">Automated Compliance</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Streamline your compliance processes with AI-powered automation and real-time monitoring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Continuous monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Automated reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Policy enforcement</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our security experts to learn how quantum-ready cybersecurity can protect your organization
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-purple-400">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-purple-400">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Website</h3>
                  <p className="text-purple-400">ziontechgroup.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Schedule Security Review
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}