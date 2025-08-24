import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Shield, 
  Brain, DollarSign, Dna, Rocket, Users, Award, Zap,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Automation',
    services: [
      { name: 'AI Autonomous Business Processor', href: '/ai-autonomous-business-processor' },
      { name: 'AI Predictive Enterprise Analytics', href: '/ai-predictive-enterprise-analytics' },
      { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success' },
      { name: 'AI Autonomous Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator' },
      { name: 'AI Autonomous Sales Intelligence', href: '/ai-autonomous-sales-intelligence' }
    ]
  },
  {
    title: 'Cybersecurity & Quantum',
    services: [
      { name: 'Quantum Encryption Platform', href: '/quantum-encryption-platform' },
      { name: 'AI Autonomous Threat Hunter', href: '/ai-autonomous-threat-hunter' },
      { name: 'Quantum Zero Trust Security', href: '/quantum-zero-trust-security' },
      { name: 'AI Autonomous Vulnerability Scanner', href: '/ai-autonomous-vulnerability-scanner' },
      { name: 'Quantum Secure Communication', href: '/quantum-secure-communication' }
    ]
  },
  {
    title: 'Fintech & Blockchain',
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
      { name: 'AI Autonomous Wealth Management', href: '/ai-autonomous-wealth-management' },
      { name: 'Quantum Blockchain Finance', href: '/quantum-blockchain-finance' },
      { name: 'AI Autonomous Insurance Platform', href: '/ai-autonomous-insurance-platform' },
      { name: 'Quantum Payment Processing', href: '/quantum-payment-processing' }
    ]
  },
  {
    title: 'Healthcare & Biotech',
    services: [
      { name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics' },
      { name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform' },
      { name: 'AI Autonomous Patient Care', href: '/ai-autonomous-patient-care' },
      { name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis' },
      { name: 'AI Autonomous Clinical Trials', href: '/ai-autonomous-clinical-trials' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Press', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Locations', href: '/locations' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Support Center', href: '/support' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Developer Resources', href: '/developer-resources' }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'GitHub', href: '#', icon: Github }
];

export default function UltraFuturisticFooter2026() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of revolutionary AI automation, quantum cybersecurity, fintech blockchain, 
                and healthcare biotech solutions. Transforming businesses with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{contactInfo.website}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {category.title === 'AI & Automation' && <Brain className="w-5 h-5 mr-2 text-cyan-400" />}
                {category.title === 'Cybersecurity & Quantum' && <Shield className="w-5 h-5 mr-2 text-red-400" />}
                {category.title === 'Fintech & Blockchain' && <DollarSign className="w-5 h-5 mr-2 text-green-400" />}
                {category.title === 'Healthcare & Biotech' && <Dna className="w-5 h-5 mr-2 text-blue-400" />}
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 mr-2 text-pink-400" />
              Follow Us
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 hover:bg-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest AI, quantum computing, and emerging technology insights. 
              Be the first to know about breakthrough solutions and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-gray-400 text-sm">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                Trusted by 2500+ Companies
              </div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="text-cyan-400 text-sm font-semibold">
                99.9% Uptime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}