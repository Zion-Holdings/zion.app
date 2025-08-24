import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  ArrowRight, 
  Play,
  Code,
  Database,
  Cloud,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Users,
  Key,
  Fingerprint,
  CreditCard,
  Heart,
  Flag
} from 'lucide-react';

export default function Cybersecurity() {
  const [selectedThreat, setSelectedThreat] = useState(0);
  const [selectedService, setSelectedService] = useState(0);

  const securityServices = [
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities',
      icon: Eye,
      features: ['Web Application Testing', 'Network Security Testing', 'Social Engineering', 'Physical Security Testing'],
      benefits: ['Identify vulnerabilities before attackers', 'Compliance with security standards', 'Reduce security risks', 'Improve security posture']
    },
    {
      title: 'Security Audits',
      description: 'Thorough review of security policies and procedures',
      icon: Shield,
      features: ['Policy Review', 'Compliance Assessment', 'Risk Analysis', 'Security Gap Analysis'],
      benefits: ['Ensure compliance with regulations', 'Identify security gaps', 'Improve security policies', 'Reduce legal risks']
    },
    {
      title: 'Incident Response',
      description: '24/7 security incident detection and response',
      icon: AlertTriangle,
      features: ['Threat Detection', 'Incident Investigation', 'Forensic Analysis', 'Recovery Planning'],
      benefits: ['Minimize damage from attacks', 'Quick incident resolution', 'Learn from security events', 'Improve security measures']
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness and training programs',
      icon: Users,
      features: ['Phishing Awareness', 'Password Security', 'Social Engineering', 'Data Protection'],
      benefits: ['Reduce human error risks', 'Create security culture', 'Comply with regulations', 'Protect sensitive data']
    }
  ];

  const threats = [
    {
      title: 'Ransomware Attacks',
      description: 'Malicious software that encrypts files and demands payment',
      impact: 'Data loss, business disruption, financial damage',
      prevention: ['Regular backups', 'Email filtering', 'User training', 'Security updates'],
      icon: Lock
    },
    {
      title: 'Phishing Scams',
      description: 'Deceptive emails designed to steal credentials',
      impact: 'Account compromise, data theft, financial fraud',
      prevention: ['Email security', 'User training', 'Multi-factor authentication', 'URL filtering'],
      icon: Users
    },
    {
      title: 'Data Breaches',
      description: 'Unauthorized access to sensitive information',
      impact: 'Privacy violations, regulatory fines, reputation damage',
      prevention: ['Access controls', 'Encryption', 'Monitoring', 'Regular audits'],
      icon: Database
    },
    {
      title: 'Insider Threats',
      description: 'Security risks from employees or contractors',
      impact: 'Data theft, sabotage, intellectual property loss',
      prevention: ['Background checks', 'Access monitoring', 'Separation of duties', 'Employee training'],
      icon: AlertTriangle
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2', description: 'Service Organization Control 2', icon: Shield },
    { name: 'ISO 27001', description: 'Information Security Management', icon: Lock },
    { name: 'PCI DSS', description: 'Payment Card Industry Standards', icon: CreditCard },
    { name: 'HIPAA', description: 'Healthcare Information Privacy', icon: Heart },
    { name: 'GDPR', description: 'General Data Protection Regulation', icon: Globe },
    { name: 'NIST', description: 'National Institute of Standards', icon: Flag }
  ];

  const securityTechnologies = [
    { name: 'SIEM', category: 'Security Monitoring', icon: BarChart3 },
    { name: 'EDR', category: 'Endpoint Detection', icon: Cpu },
    { name: 'WAF', category: 'Web Application Firewall', icon: Shield },
    { name: 'VPN', category: 'Secure Access', icon: Lock },
    { name: 'DLP', category: 'Data Loss Prevention', icon: Database },
    { name: 'MFA', category: 'Multi-Factor Authentication', icon: Key }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: Eye },
    { number: '24/7', label: 'Security Monitoring', icon: Shield },
    { number: '15min', label: 'Response Time', icon: Zap },
    { number: '100%', label: 'Compliance Success', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {' '}That Protects{' '}
              </span>
              Your Business
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive cybersecurity solutions to protect your digital assets, 
              ensure compliance, and maintain business continuity in an evolving threat landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
                <Play className="w-5 h-5 mr-2" />
                Security Demo
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Security Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business from evolving threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Navigation */}
            <div className="space-y-4">
              {securityServices.map((service, index) => (
                <motion.button
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedService(index)}
                  className={`w-full p-6 text-left rounded-lg transition-all duration-200 ${
                    selectedService === index
                      ? 'bg-gradient-to-r from-red-400/20 to-red-600/20 border-red-400/50'
                      : 'bg-white/10 hover:bg-white/20 border-white/20'
                  } border`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedService === index
                        ? 'bg-gradient-to-br from-red-400 to-red-600'
                        : 'bg-white/20'
                    }`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Service Details */}
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{securityServices[selectedService].title}</h3>
                <p className="text-gray-300 mb-6">{securityServices[selectedService].description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {securityServices[selectedService].features.map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-red-400 mr-2" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {securityServices[selectedService].benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Understanding the Threat Landscape</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed about the latest cybersecurity threats and how to protect against them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Threat Navigation */}
            <div className="space-y-4">
              {threats.map((threat, index) => (
                <motion.button
                  key={threat.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedThreat(index)}
                  className={`w-full p-6 text-left rounded-lg transition-all duration-200 ${
                    selectedThreat === index
                      ? 'bg-gradient-to-r from-red-400/20 to-red-600/20 border-red-400/50'
                      : 'bg-white/10 hover:bg-white/20 border-white/20'
                  } border`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedThreat === index
                        ? 'bg-gradient-to-br from-red-400 to-red-600'
                        : 'bg-white/20'
                    }`}>
                      <threat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{threat.title}</h3>
                      <p className="text-sm text-gray-300">{threat.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Threat Details */}
            <motion.div
              key={selectedThreat}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{threats[selectedThreat].title}</h3>
                <p className="text-gray-300 mb-6">{threats[selectedThreat].description}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                    Business Impact
                  </h4>
                  <p className="text-gray-300">{threats[selectedThreat].impact}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-red-400 mr-2" />
                    Prevention Measures
                  </h4>
                  <ul className="space-y-2">
                    {threats[selectedThreat].prevention.map((measure, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {measure}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Compliance & Technology</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet regulatory requirements and leverage cutting-edge security technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Compliance Frameworks */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-red-400 mr-3" />
                Compliance Frameworks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceFrameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                        <framework.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{framework.name}</h4>
                        <p className="text-gray-400 text-sm">{framework.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Security Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cpu className="w-6 h-6 text-red-400 mr-3" />
                Security Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                        <tech.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{tech.name}</h4>
                        <p className="text-gray-400 text-sm">{tech.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-400/20 to-red-600/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait until it's too late. Let's assess your security posture and implement robust protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Talk to Security Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Delaware, United States</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}