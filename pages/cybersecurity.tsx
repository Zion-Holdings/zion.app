import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  Users,
  Server,
  Network,
  Database,
  Cloud,
  Code,
  Key,
  Fingerprint,
  Globe,
  Smartphone,
  Laptop,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle as CheckCircleIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  Users as UsersIcon,
  Server as ServerIcon,
  Network as NetworkIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  Heart
} from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const securityServices = [
    {
      title: 'Quantum Cybersecurity Platform 2045',
      description: 'Next-generation quantum-resistant security solutions',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ['Quantum-resistant encryption', 'Advanced threat detection', 'Real-time monitoring', 'Automated response'],
      href: '/quantum-cybersecurity-platform-2045'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation and management',
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Continuous monitoring'],
      href: '/zero-trust-network-architecture'
    },
    {
      title: 'Vulnerability Assessment & Penetration Testing',
      description: 'Comprehensive security testing and assessment services',
      icon: <Eye className="w-8 h-8 text-green-400" />,
      features: ['Security audits', 'Penetration testing', 'Vulnerability scanning', 'Risk assessment'],
      href: '/vulnerability-assessment-penetration-testing'
    },
    {
      title: 'SOC2 Compliance Automation',
      description: 'Automated SOC2 compliance and evidence collection',
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      features: ['Automated evidence collection', 'Compliance monitoring', 'Audit preparation', 'Continuous compliance'],
      href: '/soc2-compliance-automation'
    },
    {
      title: 'Autonomous Security Operations Center',
      description: 'AI-powered security monitoring and response',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ['24/7 monitoring', 'AI threat detection', 'Automated response', 'Incident management'],
      href: '/autonomous-security-operations-center-2045'
    },
    {
      title: 'Mobile Device Management',
      description: 'Comprehensive mobile security and management',
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      features: ['Device encryption', 'App management', 'Remote wipe', 'Policy enforcement'],
      href: '/mobile-device-management'
    }
  ];

  const securityCapabilities = [
    {
      category: 'Network Security',
      capabilities: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'DDoS Protection']
    },
    {
      category: 'Application Security',
      capabilities: ['Code Analysis', 'API Security', 'Web Application Firewall', 'Secure Development']
    },
    {
      category: 'Data Protection',
      capabilities: ['Encryption', 'Data Loss Prevention', 'Backup Security', 'Privacy Compliance']
    },
    {
      category: 'Identity & Access',
      capabilities: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access Management', 'Identity Governance']
    }
  ];

  const securityThreats = [
    {
      threat: 'Advanced Persistent Threats',
      description: 'Sophisticated, long-term cyber attacks targeting specific organizations',
      icon: <Target className="w-6 h-6 text-red-400" />
    },
    {
      threat: 'Ransomware Attacks',
      description: 'Malicious software that encrypts data and demands payment for decryption',
      icon: <Lock className="w-6 h-6 text-orange-400" />
    },
    {
      threat: 'Social Engineering',
      description: 'Manipulation techniques to trick users into revealing sensitive information',
      icon: <Users className="w-6 h-6 text-yellow-400" />
    },
    {
      threat: 'Supply Chain Attacks',
      description: 'Compromising software or hardware before it reaches the target organization',
      icon: <Network className="w-6 h-6 text-blue-400" />
    }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC2 Type II',
      description: 'Service Organization Control 2 compliance for data security',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: <Heart className="w-6 h-6 text-red-400" />
    }
  ];

  return (
    <Layout 
      title="Cybersecurity Services - Zion Tech Group"
      description="Advanced cybersecurity solutions including quantum security, zero trust architecture, and autonomous threat detection. Protect your business with cutting-edge security technology."
      keywords="cybersecurity, security services, zero trust, quantum security, threat detection, SOC2 compliance, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                Cybersecurity Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Advanced security solutions powered by quantum technology and AI. Protect your business from evolving cyber threats with our comprehensive cybersecurity services.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                >
                  Security Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/market-pricing" 
                  className="px-8 py-4 border border-red-500/40 text-red-300 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  See Market Pricing
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Security Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cybersecurity services cover every aspect of digital security, from quantum-resistant encryption to autonomous threat response.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.href}
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Security Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our security systems provide comprehensive protection across all digital assets and infrastructure.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {securityCapabilities.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-red-400 mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="text-gray-300">{capability}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Security Threats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Modern Security Threats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the evolving threat landscape is crucial for effective cybersecurity.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {securityThreats.map((threat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {threat.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{threat.threat}</h3>
                  </div>
                  <p className="text-gray-300">{threat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet industry standards and regulatory requirements with our compliance solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center"
                  variants={fadeInUp}
                >
                  <div className="mb-4">{framework.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{framework.name}</h3>
                  <p className="text-gray-300 text-sm">{framework.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Digital Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Security Assessment
                </a>
                <a 
                  href="/case-studies" 
                  className="px-8 py-4 border border-red-500/40 text-red-300 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
                >
                  View Security Case Studies
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