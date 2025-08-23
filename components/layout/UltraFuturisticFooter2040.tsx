import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight, ExternalLink
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040', featured: true },
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', featured: true },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040', featured: true },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', featured: true },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', featured: true },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', featured: true },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' }
    ]
  },
  {
    title: 'Innovative 2025 Services',
    description: 'Latest cutting-edge micro SAAS and IT solutions',
    icon: <Rocket className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'AI Content Intelligence Platform', href: '/ai-content-intelligence-platform', featured: true },
      { name: 'Quantum-Enhanced Cybersecurity Suite', href: '/quantum-cybersecurity-suite', featured: true },
      { name: 'Autonomous Business Process Orchestrator', href: '/autonomous-business-process-orchestrator', featured: true },
      { name: 'Neural Network Performance Optimizer', href: '/neural-network-performance-optimizer' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform' },
      { name: 'Autonomous Data Quality Management', href: '/autonomous-data-quality-management' },
      { name: 'Edge AI Computing Platform', href: '/edge-ai-computing-platform' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040' },
      { name: 'AI Emotional Intelligence 2040', href: '/ai-emotional-intelligence-2040' },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'AI Content Personalization 2041', href: '/ai-content-personalization-2041' },
      { name: 'AI Ethics & Governance 2041', href: '/ai-ethics-governance-2041' },
      { name: 'AI Autonomous Ecosystem 2041', href: '/ai-autonomous-ecosystem-2041' },
      { name: 'AI Predictive Maintenance 2041', href: '/ai-predictive-maintenance-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040' },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041' },
      { name: 'Quantum Bio-Computing 2041', href: '/quantum-bio-computing-2041' },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040' },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040' },
      { name: 'Autonomous Vehicle AI 2040', href: '/autonomous-vehicle-ai-2040' },
      { name: 'Quantum Materials Discovery 2040', href: '/quantum-materials-discovery-2040' },
      { name: 'Quantum Financial Intelligence 2040', href: '/quantum-financial-intelligence-2040' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced infrastructure and security solutions',
    icon: <Shield className="w-5 h-5 text-red-400" />,
    color: 'from-red-500 to-pink-500',
    links: [
      { name: 'Zero-Trust Network Architecture', href: '/zero-trust-network-architecture-platform', featured: true },
      { name: 'Autonomous Cloud Infrastructure Manager', href: '/autonomous-cloud-infrastructure-manager', featured: true },
      { name: 'Quantum-Resistant Data Encryption Suite', href: '/quantum-resistant-data-encryption-suite' },
      { name: 'Intelligent API Gateway and Management', href: '/intelligent-api-gateway-and-management' },
      { name: 'Autonomous Database Performance Optimizer', href: '/autonomous-database-performance-optimizer' },
      { name: 'Edge Computing Infrastructure Platform', href: '/edge-computing-infrastructure-platform' },
      { name: 'Intelligent Load Balancing and Traffic Management', href: '/intelligent-load-balancing-traffic-management' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Globe className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500 to-indigo-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Partners', href: '/partners' },
      { name: 'Blog', href: '/blog' },
      { name: 'Support', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Contact Us', href: '/contact' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

export default function UltraFuturisticFooter2040() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/90 border-t border-cyan-500/20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/10 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/10 transform rotate-45 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Contact Section */}
        <div className="mb-16 p-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the future of technology with our cutting-edge solutions. Contact us today to get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors text-lg">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
              <p className="text-green-400 text-lg">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <span className="flex items-center gap-2 justify-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Enhanced Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-400">{section.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-2 text-sm transition-all duration-300 group/link ${
                        link.featured 
                          ? 'text-cyan-400 hover:text-cyan-300 font-medium' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.featured && (
                        <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full">
                          Featured
                        </span>
                      )}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">Innovation Leader 2025</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@ziontechgroup" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a> | <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}