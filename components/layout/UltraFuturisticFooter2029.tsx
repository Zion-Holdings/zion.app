import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, 
  Rocket, Brain, Atom, Building, Briefcase, Microscope,
  Twitter, Facebook, Linkedin, Instagram, Youtube,
  Github, Zap, Sparkles, Shield, Cpu, Database
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing-2029' },
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform-2029' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine-2029' }
    ]
  },
  {
    title: 'Quantum Technology',
    icon: Atom,
    services: [
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol-2029' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform-2029' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-firewall-2029' },
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform-2029' }
    ]
  },
  {
    title: 'Emerging Technology',
    icon: Rocket,
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-autonomous-platform-2029' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform-2029' },
      { name: 'Metaverse Development', href: '/metaverse-ai-development-platform-2029' },
      { name: 'Autonomous Vehicles', href: '/autonomous-vehicle-ai-platform-2029' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Building,
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture-2029' },
      { name: 'Cloud Native Automation', href: '/cloud-native-automation-platform-2029' },
      { name: 'AI Service Desk', href: '/ai-powered-it-service-desk-2029' },
      { name: 'Data Governance', href: '/data-governance-automation-platform-2029' }
    ]
  }
];

const businessSolutions = [
  { name: 'E-commerce Optimization', href: '/ai-powered-ecommerce-optimization-2029' },
  { name: 'Financial Advisory', href: '/ai-financial-advisory-platform-2029' },
  { name: 'HR Recruitment', href: '/ai-hr-recruitment-automation-2029' },
  { name: 'Supply Chain Optimization', href: '/ai-supply-chain-optimization-2029' },
  { name: 'Customer Success', href: '/ai-customer-success-automation-2029' }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Research & Development', href: '/research' }
];

const supportLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Support Center', href: '/support' },
  { name: 'Contact Sales', href: '/contact' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Community Forum', href: '/community' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'GDPR', href: '/gdpr' }
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
];

export default function UltraFuturisticFooter2029() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <p className="text-sm text-gray-400">2029 Technology Innovation</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Leading the future of technology with revolutionary AI, quantum computing, space technology, 
              and emerging innovations that transform businesses and advance human progress.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800/50 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Stay Updated with 2029 Innovation
            </h3>
            <p className="text-gray-300">
              Get the latest insights on AI consciousness, quantum computing, space technology, and emerging innovations.
            </p>
            
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-400">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center space-x-3">
                <category.icon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Business Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Business Solutions</h3>
            <ul className="space-y-2">
              {businessSolutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2029 Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <span>Leading Technology Innovation</span>
              <span>•</span>
              <span>Delaware, USA</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-400">
                Trusted by 1000+ companies worldwide
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-10"
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </footer>
  );
}