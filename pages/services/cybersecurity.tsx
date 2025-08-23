import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Zap, Target, Users, Brain, Atom, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, Server, Network
} from 'lucide-react';

const CybersecurityServices: React.FC = () => {
  const services = [
    {
      title: 'Quantum Cybersecurity 2045',
      description: 'Unbreakable quantum encryption and advanced threat protection',
      href: '/quantum-cybersecurity-platform-2045',
      icon: Shield,
      features: ['Quantum Encryption', 'Threat Detection', 'Zero Trust Security', 'Quantum Key Distribution']
    },
    {
      title: 'Zero Trust Network Architecture 2045',
      description: 'Revolutionary network security with zero trust principles',
      href: '/zero-trust-network-architecture-platform',
      icon: Lock,
      features: ['Zero Trust Model', 'Network Segmentation', 'Identity Verification', 'Continuous Monitoring']
    },
    {
      title: 'Vulnerability Assessment & Penetration Testing',
      description: 'Comprehensive security testing and vulnerability management',
      href: '/vulnerability-assessment-penetration-testing',
      icon: Eye,
      features: ['Security Audits', 'Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment']
    },
    {
      title: 'SOC2 Compliance Automation 2045',
      description: 'Automated compliance management and evidence collection',
      href: '/soc2-compliance-automation',
      icon: Target,
      features: ['Compliance Automation', 'Evidence Collection', 'Audit Preparation', 'Risk Management']
    },
    {
      title: 'TLS Certificate Monitor 2045',
      description: 'Automated SSL/TLS certificate management and monitoring',
      href: '/tls-certificate-monitor',
      icon: Lock,
      features: ['Certificate Monitoring', 'Auto-renewal', 'Expiration Alerts', 'Security Validation']
    },
    {
      title: 'Vendor Risk Automation 2045',
      description: 'Automated third-party vendor risk assessment and management',
      href: '/vendor-risk-automation',
      icon: Users,
      features: ['Risk Assessment', 'Vendor Monitoring', 'Compliance Tracking', 'Automated Reporting']
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Cybersecurity Services 2045 - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions including quantum encryption, zero trust architecture, and automated compliance. Protect your business with Zion Tech Group." />
        <meta name="keywords" content="cybersecurity, quantum security, zero trust, penetration testing, compliance automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">Cybersecurity Services 2045</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Unbreakable Security
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your business with our revolutionary cybersecurity solutions. From quantum encryption 
                to zero trust architecture, we provide the most advanced security in the industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                >
                  <span>Get Protected</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center space-x-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of cybersecurity solutions designed to protect your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href} className="block">
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 h-full hover:border-red-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-red-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-red-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors">
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our cybersecurity solutions can protect your organization
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-red-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-red-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityServices;