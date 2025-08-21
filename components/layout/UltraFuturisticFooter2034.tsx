import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Mail, Phone, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Star, Users, 
  CheckCircle, TrendingUp, Award, Clock, Heart,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, MessageCircle, MessageSquare
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
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse' }
    ]
  },
  {
    title: 'Enterprise IT',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
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
    services: [
      { name: 'AI Content Automation', href: '/ai-content-automation-platform' },
      { name: 'CRM Intelligence Platform', href: '/crm-intelligence-platform' },
      { name: 'Decision Engine Platform', href: '/decision-engine-platform' },
      { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
      { name: 'Financial Analytics Platform', href: '/financial-analytics-platform' },
      { name: 'HR Automation Platform', href: '/hr-automation-platform' },
      { name: 'Supply Chain Optimization', href: '/supply-chain-optimization-platform' },
      { name: 'Customer Service Automation', href: '/customer-service-automation-platform' },
      { name: 'Project Management Intelligence', href: '/project-management-intelligence-platform' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Mission', href: '/about#mission' },
  { name: 'Leadership Team', href: '/about#team' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Whitepapers', href: '/whitepapers' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Training', href: '/training' },
  { name: 'Support Center', href: '/support' },
  { name: 'Community', href: '/community' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support' },
  { name: 'Help Center', href: '/help' },
  { name: 'Status Page', href: '/status' },
  { name: 'System Requirements', href: '/requirements' },
  { name: 'API Status', href: '/api-status' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Discord', href: 'https://discord.gg/ziontechgroup', icon: MessageCircle },
  { name: 'Slack', href: 'https://ziontechgroup.slack.com', icon: MessageSquare }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo and Contact */}
        <div className="py-16 border-b border-cyan-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-sm text-gray-400">Revolutionary Technology Solutions</span>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Leading provider of cutting-edge AI consciousness, quantum computing, space mining, and enterprise IT solutions. 
                Transform your business with our revolutionary technology.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
                  <Globe className="w-5 h-5" />
                  <a href={contactInfo.website} className="hover:underline" target="_blank" rel="noopener noreferrer">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-white border-b border-cyan-500/30 pb-2">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.services.slice(0, 5).map((service) => (
                        <li key={service.name}>
                          <Link
                            href={service.href}
                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:underline flex items-center group"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                      {category.services.length > 5 && (
                        <li>
                          <Link
                            href={`/${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium hover:underline"
                          >
                            View all {category.services.length} services →
                          </Link>
                        </li>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Additional Links */}
        <div className="py-12 border-b border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:underline"
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
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-2 bg-gray-900/50 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Additional Info */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
              <p className="mt-1">Revolutionary Technology Solutions for the Future</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </footer>
  );
}
