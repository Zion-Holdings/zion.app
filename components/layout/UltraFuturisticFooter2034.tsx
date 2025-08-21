import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, 
  Youtube, Github, ArrowRight, Star,
  Shield, Rocket, Brain, Atom, DollarSign,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe as GlobeIcon, Cpu, Database, Lock,
  Heart, Palette, GraduationCap, Hospital, Coins, Leaf, Scale
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    services: [
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory' },
      { name: 'Quantum CRM Intelligence Suite', href: '/quantum-crm-intelligence-suite' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro' },
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro' },
      { name: 'AI Financial Intelligence Pro', href: '/ai-financial-intelligence-pro' },
      { name: 'AI Sustainability Platform Pro', href: '/ai-sustainability-platform-pro' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Legal Contract Analyzer Pro', href: '/ai-legal-contract-analyzer-pro' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides' },
  { name: 'Blog', href: '/blog', description: 'Industry insights' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-docs', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
];

const quickLinks = [
  { name: 'All Services', href: '/comprehensive-services-showcase-2025' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Support', href: '/support' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-docs' }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-sm text-cyan-400">Future Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
              Transform your business with our innovative services and accelerate innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.slice(0, 5).map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                {category.services.length > 5 && (
                  <li>
                    <Link 
                      href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center"
                    >
                      View All
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
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

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
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

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
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

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest updates on new services and technology trends.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>150+ Countries Supported</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
