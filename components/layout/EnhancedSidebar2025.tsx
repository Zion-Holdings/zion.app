import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Home, Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Settings, 
  ChevronRight, Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon,
  Eye, Award, Clock, Heart, Lightbulb, Phone, Mail, MapPin,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageCircle, MessageSquare
} from 'lucide-react';

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const mainNavigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    description: 'Main landing page'
  },
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: Globe,
    description: 'Complete portfolio showcase',
    badge: 'Showcase'
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: Brain,
    description: 'Revolutionary AI solutions',
    badge: 'New'
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: Rocket,
    description: 'Business solutions'
  },
  {
    name: 'IT Services',
    href: '/it-services',
    icon: Shield,
    description: 'Enterprise technology'
  },
  {
    name: 'Emerging Tech',
    href: '/emerging-tech-services',
    icon: Atom,
    description: 'Cutting-edge innovations'
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign,
    description: 'Service plans & pricing'
  },
  {
    name: 'About Us',
    href: '/about',
    icon: Users,
    description: 'Company information'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
    description: 'Get in touch'
  }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: Brain,
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
    icon: Atom,
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
    icon: Shield,
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
    icon: Rocket,
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

const quickLinks = [
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api-docs', icon: Cpu },
  { name: 'Blog', href: '/blog', icon: Lightbulb },
  { name: 'Case Studies', href: '/case-studies', icon: Award },
  { name: 'Support', href: '/support', icon: Heart },
  { name: 'Status', href: '/status', icon: BarChart3Icon }
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

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 p-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group" onClick={onClose}>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                    <span className="text-xs text-gray-400">Revolutionary Technology</span>
                  </div>
                </Link>
                
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-cyan-300">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-300">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-8">
              {/* Main Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Main Navigation
                </h3>
                <nav className="space-y-2">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200" />
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                      </div>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Service Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Service Categories
                </h3>
                <div className="space-y-4">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm font-medium text-white">
                        <category.icon className="w-4 h-4 text-cyan-400" />
                        <span>{category.title}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {category.services.slice(0, 4).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={onClose}
                            className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                          >
                            {service.name}
                          </Link>
                        ))}
                        {category.services.length > 4 && (
                          <Link
                            href={`/${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                            onClick={onClose}
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium hover:underline"
                          >
                            View all {category.services.length} services →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-800/30 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200 group"
                    >
                      <link.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-200">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-2 rounded-lg bg-gray-800/30 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200 group"
                    >
                      <social.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 mb-1" />
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-200 text-center">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-cyan-500/20">
                <div className="text-center text-xs text-gray-500 space-y-2">
                  <p>&copy; 2025 Zion Tech Group</p>
                  <p>Revolutionary Technology Solutions</p>
                  <div className="flex justify-center space-x-4 pt-2">
                    <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                      Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                      Terms
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}