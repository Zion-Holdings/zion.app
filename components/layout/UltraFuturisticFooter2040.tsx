import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, 
  Brain, Atom, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight,
  Zap, Layers,
  Server
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040', featured: true, badge: 'Breakthrough' },
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', featured: true, badge: 'New' },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040', featured: true, badge: 'Hot' },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', featured: true },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', featured: true },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', featured: true },
      { name: 'Holographic Quantum Workspace 2045', href: '/holographic-quantum-workspace-2045', featured: true },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Revolutionary AI and consciousness platforms',
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
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Testing Suite', href: '/ai-autonomous-testing-suite' }
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
      { name: 'Quantum Financial Intelligence 2040', href: '/quantum-financial-intelligence-2040' },
      { name: 'Quantum Encryption API', href: '/quantum-encryption-api' },
      { name: 'Quantum Data Compression API', href: '/quantum-data-compression-api' },
      { name: 'Quantum Payment Processor', href: '/quantum-payment-processor' },
      { name: 'Quantum Video Compression API', href: '/quantum-video-compression-api' }
    ]
  },
  {
    title: 'IT & Infrastructure',
    description: 'Advanced IT infrastructure and solutions',
    icon: <Server className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045' },
      { name: 'AI-Powered DevOps Automation 2045', href: '/ai-powered-devops-automation-2045' },
      { name: 'Quantum Database Platform 2045', href: '/quantum-database-platform-2045' },
      { name: 'AI-Powered Network Optimization 2045', href: '/ai-powered-network-optimization-2045' },
      { name: 'Quantum Storage Platform 2045', href: '/quantum-storage-platform-2045' },
      { name: 'AI-Powered Security Operations 2045', href: '/ai-powered-security-operations-2045' },
      { name: 'Quantum Application Platform 2045', href: '/quantum-application-platform-2045' },
      { name: 'AI-Powered IT Service Management 2045', href: '/ai-powered-it-service-management-2045' },
      { name: 'Quantum Integration Platform 2045', href: '/quantum-integration-platform-2045' },
      { name: 'AI-Powered Disaster Recovery 2045', href: '/ai-powered-disaster-recovery-2045' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Innovative micro SaaS platforms',
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500 to-indigo-500',
    links: [
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'Quantum Encryption API', href: '/quantum-encryption-api' },
      { name: 'AI Autonomous Testing Suite', href: '/ai-autonomous-testing-suite' },
      { name: 'Quantum Data Compression API', href: '/quantum-data-compression-api' },
      { name: 'AI Autonomous SEO Optimizer', href: '/ai-autonomous-seo-optimizer' },
      { name: 'Quantum Payment Processor', href: '/quantum-payment-processor' },
      { name: 'AI Autonomous Customer Support', href: '/ai-autonomous-customer-support' },
      { name: 'Quantum Video Compression API', href: '/quantum-video-compression-api' },
      { name: 'AI Autonomous Social Media Manager', href: '/ai-autonomous-social-media-manager' },
      { name: 'Quantum AI Chatbot Platform', href: '/quantum-ai-chatbot-platform' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-orange-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'API Documentation', href: '/api' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Support', href: '/support' },
      { name: 'Training', href: '/training' },
      { name: 'Resources', href: '/resources' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Get Started', href: '/get-started' }
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
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Innovations', href: '/innovations' },
  { name: 'Resources', href: '/resources' },
  { name: 'Get Started', href: '/get-started' },
  { name: 'Contact', href: '/contact' },
  { name: 'Support', href: '/support' },
  { name: 'API Docs', href: '/api' }
];

export default function UltraFuturisticFooter2040() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.1)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 xl:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">2045 Future Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with revolutionary AI, quantum computing, and space technology solutions. 
                Empowering businesses to thrive in the digital age with cutting-edge innovations.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
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
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 group"
                  >
                    {social.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Service Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">{section.description}</p>
                
                <ul className="space-y-2">
                  {section.links.slice(0, 6).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="flex items-center space-x-2">
                          <span>{link.name}</span>
                          {link.badge && (
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              link.badge === 'Breakthrough' ? 'bg-gradient-to-r from-red-500 to-pink-600' :
                              link.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                              link.badge === 'Hot' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                              'bg-gradient-to-r from-cyan-500 to-blue-600'
                            } text-white`}>
                              {link.badge}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                  {section.links.length > 6 && (
                    <li>
                      <Link
                        href={`/services#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>View All {section.title}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Leading the future of technology</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
}