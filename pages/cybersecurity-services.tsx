import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Zap, Target, Users, Heart, DollarSign, Cog, FileText, 
  Calendar, Lightbulb, HelpCircle, Monitor, Star, Award, TrendingUp, Globe, 
  Server, Database, Network, Palette, Cpu, Layers, Globe2, Truck, Brain, Atom,
  Smartphone
} from 'lucide-react';

const CybersecurityServicesPage: React.FC = () => {
  const cybersecurityServices = [
    {
      category: 'Advanced Threat Protection',
      services: [
        {
          name: 'AI-Powered Threat Detection',
          description: 'Next-generation AI threat detection with real-time response capabilities',
          href: '/ai-threat-detection',
          icon: <Brain className="w-6 h-6" />,
          features: ['Machine Learning Detection', 'Behavioral Analysis', 'Real-time Response', 'Threat Intelligence'],
          badge: 'Featured'
        },
        {
          name: 'Quantum Cybersecurity Platform',
          description: 'Quantum-resistant security solutions for the post-quantum era',
          href: '/quantum-cybersecurity-platform-2045',
          icon: <Shield className="w-6 h-6" />,
          features: ['Quantum-Resistant Encryption', 'Post-Quantum Cryptography', 'Advanced Protocols', 'Future-Proof Security'],
          badge: 'Revolutionary'
        },
        {
          name: 'Zero Trust Security Framework',
          description: 'Comprehensive zero trust architecture implementation and management',
          href: '/zero-trust-security',
          icon: <Lock className="w-6 h-6" />,
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          badge: 'Strategic'
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure Security',
      services: [
        {
          name: 'Cloud Security Management',
          description: 'Comprehensive cloud security across all major platforms',
          href: '/cloud-security-management',
          icon: <Globe className="w-6 h-6" />,
          features: ['Multi-Cloud Security', 'Compliance Management', 'Data Protection', 'Access Control'],
          badge: 'Cloud'
        },
        {
          name: 'DevSecOps Integration',
          description: 'Security integration throughout the development lifecycle',
          href: '/devsecops-integration',
          icon: <Cog className="w-6 h-6" />,
          features: ['Security Automation', 'CI/CD Integration', 'Vulnerability Scanning', 'Compliance Checking'],
          badge: 'DevOps'
        },
        {
          name: 'Container Security',
          description: 'Advanced security for containerized applications and microservices',
          href: '/container-security',
          icon: <Server className="w-6 h-6" />,
          features: ['Image Scanning', 'Runtime Protection', 'Network Security', 'Policy Enforcement'],
          badge: 'Containers'
        }
      ]
    },
    {
      category: 'Data Protection & Privacy',
      services: [
        {
          name: 'Data Encryption & Key Management',
          description: 'Enterprise-grade encryption and cryptographic key management',
          href: '/data-encryption-key-management',
          icon: <Lock className="w-6 h-6" />,
          features: ['End-to-End Encryption', 'Key Rotation', 'Hardware Security Modules', 'Compliance Standards'],
          badge: 'Critical'
        },
        {
          name: 'Privacy Compliance Solutions',
          description: 'GDPR, CCPA, and other privacy regulation compliance tools',
          href: '/privacy-compliance-solutions',
          icon: <Shield className="w-6 h-6" />,
          features: ['Data Mapping', 'Consent Management', 'Right to Erasure', 'Compliance Reporting'],
          badge: 'Compliance'
        },
        {
          name: 'Data Loss Prevention',
          description: 'Advanced DLP solutions to prevent sensitive data breaches',
          href: '/data-loss-prevention',
          icon: <Eye className="w-6 h-6" />,
          features: ['Content Analysis', 'Policy Enforcement', 'Incident Response', 'Audit Reporting'],
          badge: 'Protection'
        }
      ]
    },
    {
      category: 'Network & Endpoint Security',
      services: [
        {
          name: 'Network Security Monitoring',
          description: '24/7 network security monitoring and threat detection',
          href: '/network-security-monitoring',
          icon: <Network className="w-6 h-6" />,
          features: ['Traffic Analysis', 'Anomaly Detection', 'Threat Hunting', 'Incident Response'],
          badge: 'Network'
        },
        {
          name: 'Endpoint Detection & Response',
          description: 'Advanced endpoint security with behavioral analysis',
          href: '/endpoint-detection-response',
          icon: <Monitor className="w-6 h-6" />,
          features: ['Behavioral Analysis', 'Threat Hunting', 'Automated Response', 'Forensic Capabilities'],
          badge: 'Endpoint'
        },
        {
          name: 'Mobile Device Security',
          description: 'Comprehensive mobile device security and management',
          href: '/mobile-device-security',
          icon: <Smartphone className="w-6 h-6" />,
          features: ['Device Management', 'App Security', 'Data Protection', 'Remote Wipe'],
          badge: 'Mobile'
        }
      ]
    },
    {
      category: 'Security Consulting & Training',
      services: [
        {
          name: 'Security Assessment & Auditing',
          description: 'Comprehensive security assessments and compliance audits',
          href: '/security-assessment-auditing',
          icon: <FileText className="w-6 h-6" />,
          features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Auditing', 'Risk Analysis'],
          badge: 'Assessment'
        },
        {
          name: 'Security Awareness Training',
          description: 'Employee security awareness and training programs',
          href: '/security-awareness-training',
          icon: <Users className="w-6 h-6" />,
          features: ['Phishing Simulations', 'Security Best Practices', 'Compliance Training', 'Progress Tracking'],
          badge: 'Training'
        },
        {
          name: 'Incident Response Planning',
          description: 'Comprehensive incident response planning and preparation',
          href: '/incident-response-planning',
          icon: <Zap className="w-6 h-6" />,
          features: ['Response Planning', 'Team Training', 'Tabletop Exercises', 'Recovery Procedures'],
          badge: 'Response'
        }
      ]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '360° Protection',
      description: 'Comprehensive security coverage across all attack vectors'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Response',
      description: 'Instant threat detection and automated response capabilities'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered',
      description: 'Advanced AI and machine learning for intelligent threat detection'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Coverage',
      description: 'Worldwide security monitoring and threat intelligence'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: <Eye className="w-6 h-6" /> },
    { number: '<1s', label: 'Response Time', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Monitor className="w-6 h-6" /> },
    { number: '1000+', label: 'Threats Blocked Daily', icon: <Shield className="w-6 h-6" /> }
  ];

  const threatLandscape = [
    {
      title: 'Ransomware Attacks',
      description: 'Advanced ransomware protection with behavioral analysis and automated response',
      icon: <Lock className="w-8 h-8" />,
      solutions: ['Behavioral Detection', 'Automated Response', 'Backup Protection', 'Recovery Tools']
    },
    {
      title: 'Phishing & Social Engineering',
      description: 'AI-powered phishing detection and employee training programs',
      icon: <Users className="w-8 h-8" />,
      solutions: ['AI Detection', 'Training Programs', 'Simulation Exercises', 'Reporting Tools']
    },
    {
      title: 'Supply Chain Attacks',
      description: 'Comprehensive supply chain security and vendor risk management',
      icon: <Network className="w-8 h-8" />,
      solutions: ['Vendor Assessment', 'Code Analysis', 'Dependency Scanning', 'Risk Monitoring']
    },
    {
      title: 'Insider Threats',
      description: 'Advanced insider threat detection and user behavior analytics',
      icon: <Eye className="w-8 h-8" />,
      solutions: ['Behavioral Analytics', 'Access Monitoring', 'Privilege Management', 'Incident Response']
    },
    {
      title: 'Zero-Day Exploits',
      description: 'Proactive zero-day threat detection and mitigation strategies',
      icon: <Target className="w-8 h-8" />,
      solutions: ['Behavioral Analysis', 'Sandboxing', 'Patch Management', 'Threat Intelligence']
    },
    {
      title: 'IoT Security',
      description: 'Comprehensive IoT device security and network protection',
      icon: <Cpu className="w-8 h-8" />,
      solutions: ['Device Authentication', 'Network Segmentation', 'Traffic Monitoring', 'Firmware Updates']
    }
  ];

  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services including threat protection, cloud security, data protection, and security consulting. Protect your digital assets with our advanced security solutions."
      keywords="cybersecurity services, threat protection, cloud security, data protection, security consulting, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/cybersecurity-services"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Cybersecurity Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your digital assets with our comprehensive cybersecurity solutions. 
              From advanced threat protection to compliance management, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
              >
                Secure Your Business
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                Security Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive cybersecurity approach combines cutting-edge technology, 
              expert knowledge, and proactive strategies to protect your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gradient-to-r from-green-900/10 to-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From threat protection to compliance management, we provide the complete 
              spectrum of cybersecurity services your business needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {cybersecurityServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                            {service.icon}
                          </div>
                          {service.badge && (
                            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full border border-green-500/30">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-lg border border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-200"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Modern Threat Landscape
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of evolving cyber threats with our comprehensive understanding 
              of the current threat landscape and proactive defense strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatLandscape.map((threat, index) => (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {threat.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{threat.title}</h3>
                <p className="text-gray-400 mb-4 text-center">{threat.description}</p>
                <ul className="space-y-2">
                  {threat.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-gray-300">
                      <Shield className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl p-12 border border-green-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait until it's too late. Our cybersecurity experts are ready to 
                help you build a robust security foundation and protect your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
                >
                  Get Security Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CybersecurityServicesPage;