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
  Building
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
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence' }
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
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Metaverse AI Platform', href: '/metaverse-ai-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise' },
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
      { name: 'Quantum CRM Intelligence', href: '/quantum-crm-intelligence' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' }
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
  { name: 'Security', href: '/security', description: 'Security information' },
  { name: 'Privacy Policy', href: '/privacy', description: 'Privacy and data protection' }
];

const legalLinks = [
  { name: 'Terms of Service', href: '/terms', description: 'Service terms and conditions' },
  { name: 'Privacy Policy', href: '/privacy', description: 'Data protection and privacy' },
  { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage information' },
  { name: 'GDPR Compliance', href: '/gdpr', description: 'Data protection compliance' },
  { name: 'Security', href: '/security', description: 'Security measures and policies' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'text-blue-400 hover:text-blue-300' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'text-blue-600 hover:text-blue-500' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'text-blue-500 hover:text-blue-400' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'text-pink-500 hover:text-pink-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'text-red-500 hover:text-red-400' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'text-gray-400 hover:text-gray-300' }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">Future Technology Today</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary AI consciousness, quantum computing, and emerging technology solutions. 
              Transform your business with 500+ cutting-edge services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
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
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-cyan-500 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center mb-4">
                {category.icon}
                <h4 className="text-white font-semibold ml-2">{category.title}</h4>
              </div>
              <ul className="space-y-2">
                {category.services.slice(0, 6).map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                {category.services.length > 6 && (
                  <li>
                    <Link 
                      href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      View All {category.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800">
          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-cyan-400" />
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-cyan-400" />
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 ml-1">Privacy</Link> | 
              <Link href="/terms" className="hover:text-cyan-400 ml-1">Terms</Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                <span>SOC2 Certified</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Globe className="w-4 h-4 mr-2 text-purple-400" />
                <span>150+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
