import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, Mail, Phone, MapPin, 
  Twitter, Linkedin, Github, Globe,
  ArrowRight, Shield, Zap, Rocket,
  Brain, Atom, Target,
  Users, BookOpen, BarChart3, Settings
} from 'lucide-react';

const footerSections = [
  {
    title: 'All Services',
    services: [
      { name: 'Comprehensive Services Showcase', href: '/comprehensive-services-showcase-2025' },
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing' }
    ]
  },
  {
    title: 'AI & Consciousness',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Content Generator Pro', href: '/ai-content-generator' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber' },
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    links: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    links: [
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions' }
    ]
  },
  {
    title: 'Space & Metaverse',
    links: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform' },
      { name: 'Metaverse Development Studio', href: '/metaverse-development-studio-pro' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform' },
      { name: 'Space Colonization Services', href: '/space-colonization-services' },
      { name: 'Orbital Mechanics Platform', href: '/orbital-mechanics' },
      { name: 'Satellite Operations Center', href: '/satellite-operations' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press Kit', href: '/press' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' }
];

const companyInfo = [
  { name: 'Support', href: '/support' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Status', href: '/status' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe }
];

export default function EnhancedFooter() {
  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. 
              We transform businesses through innovative solutions that drive growth and competitive advantage.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors duration-200">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors duration-200">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                {index === 0 && <Brain className="w-5 h-5 text-cyan-400" />}
                {index === 1 && <Atom className="w-5 h-5 text-purple-400" />}
                {index === 2 && <Shield className="w-5 h-5 text-green-400" />}
                {index === 3 && <Rocket className="w-5 h-5 text-pink-400" />}
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-800/50">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Settings className="w-5 h-5 text-purple-400" />
              <span>Resources</span>
            </h4>
            <ul className="space-y-2">
              {companyInfo.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span>Stay Updated</span>
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest insights on AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="ml-2 hover:text-white transition-colors duration-200">Privacy</Link> | 
              <Link href="/terms" className="ml-2 hover:text-white transition-colors duration-200">Terms</Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80"
      />
    </footer>
  );
}