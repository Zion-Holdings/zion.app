import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, Zap, Users, Database, Lock, ShieldCheck, Cpu, Server, Wifi, Heart, Video, Building, DollarSign
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2038', href: '/ai-consciousness-evolution-2038', featured: true },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', featured: true },
      { name: 'Autonomous AI Ecosystem Manager', href: '/autonomous-ai-ecosystem-manager', featured: true },
      { name: 'AI Holographic Presentation Platform', href: '/ai-holographic-presentation-platform', featured: true },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', featured: true },
      { name: 'Autonomous DevOps Intelligence', href: '/autonomous-devops-intelligence-platform' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
      { name: 'Quantum Network Security', href: '/quantum-network-security-platform' },
      { name: 'AI Data Governance Platform', href: '/ai-powered-data-governance-platform' },
      { name: 'Quantum Database Optimization', href: '/quantum-database-optimization-platform' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Evolution 2038', href: '/ai-consciousness-evolution-2038' },
      { name: 'AI Emotional Intelligence Coach 2038', href: '/ai-emotional-intelligence-coach-2038' },
      { name: 'AI Predictive Maintenance Platform 2038', href: '/ai-predictive-maintenance-platform-2038' },
      { name: 'AI Content Personalization Engine 2038', href: '/ai-content-personalization-engine-2038' },
      { name: 'AI Autonomous Research Assistant 2038', href: '/ai-autonomous-research-assistant-2038' },
      { name: 'AI Ethics & Governance Framework 2038', href: '/ai-ethics-governance-framework-2038' },
      { name: 'AI Customer Success Platform 2038', href: '/ai-customer-success-platform-2038' },
      { name: 'AI Sales Intelligence Platform 2038', href: '/ai-sales-intelligence-platform-2038' },
      { name: 'AI Holographic Presentation Platform', href: '/ai-holographic-presentation-platform' },
      { name: 'Autonomous Business Process Orchestrator', href: '/autonomous-business-process-orchestrator' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Quantum Cybersecurity Threat Hunter', href: '/quantum-cybersecurity-threat-hunter' },
      { name: 'Quantum Financial Risk Analyzer', href: '/quantum-financial-risk-analyzer' },
      { name: 'Quantum Materials Simulation Platform', href: '/quantum-materials-simulation-platform' },
      { name: 'Quantum IoT Security Platform', href: '/quantum-iot-security-platform' },
      { name: 'Quantum Machine Learning Optimizer', href: '/quantum-machine-learning-optimizer' },
      { name: 'Quantum Database Optimization Platform', href: '/quantum-database-optimization-platform' },
      { name: 'Quantum Secure Communication Platform', href: '/quantum-secure-communication-platform' },
      { name: 'AI-Powered Space Mission Planner', href: '/ai-powered-space-mission-planner' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'Autonomous DevOps Intelligence Platform', href: '/autonomous-devops-intelligence-platform' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Quantum Network Security Platform', href: '/quantum-network-security-platform' },
      { name: 'AI-Powered Data Governance Platform', href: '/ai-powered-data-governance-platform' },
      { name: 'Quantum Database Optimization Platform', href: '/quantum-database-optimization-platform' },
      { name: 'Autonomous IT Asset Management Platform', href: '/autonomous-it-asset-management-platform' },
      { name: 'AI-Powered Disaster Recovery Platform', href: '/ai-powered-disaster-recovery-platform' },
      { name: 'Quantum IoT Security Platform', href: '/quantum-iot-security-platform' },
      { name: 'Quantum Secure Communication Platform', href: '/quantum-secure-communication-platform' },
      { name: 'Brain-Computer Interface Development Kit', href: '/brain-computer-interface-development-kit' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-500 to-cyan-500',
    links: [
      { name: 'AI Holographic Presentation Platform', href: '/ai-holographic-presentation-platform' },
      { name: 'Quantum Machine Learning Optimizer', href: '/quantum-machine-learning-optimizer' },
      { name: 'Autonomous Business Process Orchestrator', href: '/autonomous-business-process-orchestrator' },
      { name: 'Brain-Computer Interface Development Kit', href: '/brain-computer-interface-development-kit' },
      { name: 'Quantum Financial Risk Analyzer', href: '/quantum-financial-risk-analyzer' },
      { name: 'AI-Powered Space Mission Planner', href: '/ai-powered-space-mission-planner' },
      { name: 'Quantum Cybersecurity Threat Hunter', href: '/quantum-cybersecurity-threat-hunter' },
      { name: 'Autonomous AI Research Assistant 2038', href: '/autonomous-ai-research-assistant-2038' },
      { name: 'Quantum Materials Simulation Platform', href: '/quantum-materials-simulation-platform' },
      { name: 'AI-Powered Climate Prediction Engine', href: '/ai-powered-climate-prediction-engine' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'Events', href: '/events' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'White Papers', href: '/white-papers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Research & Development', href: '/research-development' }
];

const supportLinks = [
  { name: 'Support Center', href: '/support' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Training', href: '/training' },
  { name: 'Certification', href: '/certification' },
  { name: 'Community Forum', href: '/community' },
  { name: 'Status Page', href: '/status' },
  { name: 'Contact Support', href: '/contact' },
  { name: 'Live Chat', href: '/chat' },
  { name: 'Knowledge Base', href: '/kb' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Data Processing Agreement', href: '/dpa' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Accessibility', href: '/accessibility' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Code of Conduct', href: '/code-of-conduct' },
  { name: 'Responsible Disclosure', href: '/responsible-disclosure' }
];

const UltraFuturisticFooter2038: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of technology with cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-purple-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <div className="grid grid-cols-1 gap-3">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <div className="grid grid-cols-1 gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{section.description}</p>
              <div className="grid grid-cols-1 gap-2">
                {section.links.slice(0, 5).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm group"
                  >
                    <span className="truncate">{link.name}</span>
                    {link.featured && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full ml-2">
                        Featured
                      </span>
                    )}
                  </Link>
                ))}
                {section.links.length > 5 && (
                  <Link
                    href="/services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                  >
                    View All Services →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Cookies
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2038;