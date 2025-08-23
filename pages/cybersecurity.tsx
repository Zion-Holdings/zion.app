import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Network, 
  Server, 
  Database, 
  Users, 
  Zap, 
  Target, 
  Brain,
  BarChart3,
  Code,
  Globe,
  Settings,
  Star,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'Quantum Cybersecurity',
      description: 'Next-generation quantum-resistant security solutions',
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Quantum-resistant Algorithms'],
      href: '/quantum-cybersecurity-platform-2045'
    },
    {
      title: 'Zero Trust Security',
      description: 'Comprehensive zero trust network architecture',
      icon: <Lock className="w-8 h-8 text-red-500" />,
      features: ['Identity Verification', 'Continuous Monitoring', 'Least Privilege Access'],
      href: '/zero-trust-network-architecture'
    },
    {
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response systems',
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      features: ['Real-time Monitoring', 'AI-powered Detection', 'Threat Hunting'],
      href: '/threat-intelligence-platform'
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security testing and penetration testing',
      icon: <Target className="w-8 h-8 text-green-500" />,
      features: ['Penetration Testing', 'Security Audits', 'Compliance Assessments'],
      href: '/vulnerability-assessment-penetration-testing'
    },
    {
      title: 'SOC Operations',
      description: '24/7 Security Operations Center services',
      icon: <Server className="w-8 h-8 text-yellow-500" />,
      features: ['24/7 Monitoring', 'Incident Response', 'Security Analytics'],
      href: '/autonomous-security-operations-center-2045'
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance and governance solutions',
      icon: <CheckCircle className="w-8 h-8 text-cyan-500" />,
      features: ['SOC2 Compliance', 'GDPR Compliance', 'Automated Reporting'],
      href: '/soc2-compliance-automation'
    }
  ];

  const threats = [
    {
      name: 'Ransomware',
      description: 'Advanced ransomware protection and recovery',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      name: 'Phishing',
      description: 'AI-powered phishing detection and prevention',
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: 'DDoS Attacks',
      description: 'Distributed denial of service protection',
      icon: <Network className="w-6 h-6" />
    },
    {
      name: 'Data Breaches',
      description: 'Comprehensive data protection and encryption',
      icon: <Database className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: '24/7 Protection',
      description: 'Round-the-clock security monitoring and response',
      icon: <Clock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'AI-Powered Detection',
      description: 'Machine learning algorithms for threat detection',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements',
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Cost Effective',
      description: 'Reduce security incidents and operational costs',
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <Layout 
      title="Cybersecurity Services - Zion Tech Group"
      description="Advanced cybersecurity solutions including quantum security, zero trust architecture, and threat intelligence"
      canonicalUrl="https://ziontechgroup.com/cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Advanced
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  {' '}Cybersecurity
                </span>
                {' '}Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Protecting your digital assets with cutting-edge security technologies, 
                quantum-resistant encryption, and AI-powered threat detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Protected
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/quantum-cybersecurity-platform-2045"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Explore Quantum Security
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Security?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cybersecurity solutions provide comprehensive protection with 
                advanced technologies and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From quantum-resistant encryption to zero trust architecture, our 
                cybersecurity services cover every aspect of digital protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-red-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of evolving cyber threats with our comprehensive 
                protection and detection capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <motion.div
                  key={threat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-red-400">
                      {threat.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {threat.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {threat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Digital Assets?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security breach. Get comprehensive protection 
                with our advanced cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  View Security Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityPage;