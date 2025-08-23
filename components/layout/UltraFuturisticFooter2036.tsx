import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Star,
  Brain,
  Atom,
  Shield,
  Rocket,
  Github,
  MessageCircle,
  Heart,
  Globe
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
} from 'lucide-react';



>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
const footerSections = [
  {
    title: 'Core Services',
    description: 'Our flagship technology solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', featured: true },
      { name: 'Quantum Cybersecurity Sentinel', href: '/quantum-cybersecurity-sentinel', featured: true },
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', featured: true },
      { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence', featured: true },
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', featured: true },
      { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success', featured: true },
      { name: 'AI Autonomous DevOps Platform', href: '/ai-autonomous-devops-platform', featured: true },
      { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator' },
      { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
      { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture' }
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029' },
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations-platform' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform' },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform' }
    ]
  },
  {
    title: 'Enterprise Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Specialized business automation tools',
    icon: <Rocket className="w-5 h-5 text-green-400" />,
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training Programs', href: '/training' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Developer Resources', href: '/developer-resources' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' }
];

export default function UltraFuturisticFooter2036() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-white/10 relative" role="contentinfo" aria-label="Site footer">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section with Company Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Pioneering the Future</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading technology company specializing in AI, quantum computing, space technology, and enterprise solutions. 
                Transform your business with cutting-edge innovation.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <a href="tel:+1-302-464-0950" className="hover:underline">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
              <a href="https://ziontechgroup.com" className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group">
                <Globe className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <span>ziontechgroup.com</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.slice(0, 5).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {section.links.length > 5 && (
                  <Link
                    href={`/services#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1"
                  >
                    <span>View All</span>
                    <ArrowUp className="w-3 h-3 rotate-45" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p className="flex items-center space-x-2">
                <span>© 2025 Zion Tech Group. All rights reserved.</span>
                <span className="hidden sm:inline">Made with</span>
                <Heart className="w-4 h-4 text-red-400 hidden sm:inline" aria-hidden="true" />
                <span className="hidden sm:inline">in Delaware</span>
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Overlay */}
      <div className="absolute bottom-4 right-4">
        <motion.button
          className="group p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Subscribe to newsletter"
        >
          <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
        </motion.button>
      </div>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    </footer>
  );
};

export default UltraFuturisticFooter2036;