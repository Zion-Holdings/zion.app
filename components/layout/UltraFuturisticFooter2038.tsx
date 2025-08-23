import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, Zap, Users, Award, Lightbulb, Briefcase, BookOpen, ShieldCheck,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  featured?: boolean;
  isNew?: boolean;
  isHot?: boolean;
}

interface FooterSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Featured Services 2038',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'Quantum AI Consciousness Evolution 2038', href: '/services/quantum-ai-consciousness-evolution-2038', featured: true, isNew: true },
      { name: 'AI-Powered Customer Success Automation', href: '/services/ai-powered-customer-success-automation', featured: true, isHot: true },
      { name: 'Quantum-Secure Blockchain Platform', href: '/services/quantum-secure-blockchain-platform', featured: true, isNew: true },
      { name: 'Autonomous DevOps Intelligence Platform', href: '/services/autonomous-devops-intelligence-platform', featured: true },
      { name: 'Quantum Edge Computing Orchestrator', href: '/services/quantum-edge-computing-orchestrator', featured: true, isNew: true },
      { name: 'AI-Powered Healthcare Diagnostic Platform', href: '/services/ai-powered-healthcare-diagnostic-platform', featured: true, isNew: true },
      { name: 'Quantum Financial Risk Management', href: '/services/quantum-financial-risk-management', featured: true, isHot: true },
      { name: 'Autonomous Supply Chain Optimization', href: '/services/autonomous-supply-chain-optimization', featured: true }
    ]
  },
  {
    title: 'AI & Consciousness Services',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'Quantum AI Consciousness Evolution 2038', href: '/services/quantum-ai-consciousness-evolution-2038', isNew: true },
      { name: 'Autonomous AI Research Assistant 2038', href: '/services/autonomous-ai-research-assistant-2038', isHot: true },
      { name: 'Quantum AI Predictive Maintenance 2038', href: '/services/quantum-ai-predictive-maintenance-2038' },
      { name: 'AI-Powered Content Personalization Engine 2038', href: '/services/ai-powered-content-personalization-engine-2038' },
      { name: 'Quantum AI Autonomous Ecosystem Manager 2038', href: '/services/quantum-ai-autonomous-ecosystem-manager-2038', isNew: true },
      { name: 'AI Ethics & Governance Framework 2038', href: '/services/ai-ethics-governance-framework-2038' },
      { name: 'Quantum AI Customer Success Platform 2038', href: '/services/quantum-ai-customer-success-platform-2038' },
      { name: 'AI-Powered Sales Intelligence Platform 2038', href: '/services/ai-powered-sales-intelligence-platform-2038' },
      { name: 'Quantum AI Autonomous Vehicle Platform 2038', href: '/services/quantum-ai-autonomous-vehicle-platform-2038' },
      { name: 'AI-Powered Brain-Computer Interface 2038', href: '/services/ai-powered-brain-computer-interface-2038' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Network Platform', href: '/services/quantum-neural-network-platform' },
      { name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform' },
      { name: 'Quantum Materials Discovery Platform', href: '/services/quantum-materials-discovery-platform' },
      { name: 'Quantum Bio-Computing Platform', href: '/services/quantum-bio-computing-platform' },
      { name: 'Quantum Internet Security Platform', href: '/services/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/services/quantum-cloud-infrastructure-platform' },
      { name: 'Space Resource Mining Platform', href: '/services/space-resource-mining-platform' },
      { name: 'AI-Powered Space Technology', href: '/services/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface Platform', href: '/services/brain-computer-interface-platform' },
      { name: 'Autonomous Vehicle AI Platform', href: '/services/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Space Resource Optimization', href: '/services/quantum-space-resource-optimization', isNew: true }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/services/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations Center', href: '/services/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration Platform', href: '/services/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/services/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps Platform', href: '/services/ai-powered-devops-platform' },
      { name: 'Zero Trust Security Platform', href: '/services/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity Platform', href: '/services/ai-powered-cybersecurity' },
      { name: 'AI-Powered IT Asset Management', href: '/services/ai-powered-it-asset-management' },
      { name: 'SOC 2 Compliance Automation', href: '/services/soc2-compliance-automation' },
      { name: 'RAG Evaluation Lab', href: '/services/rag-evaluation-lab' },
      { name: 'Quantum Edge Computing Orchestrator', href: '/services/quantum-edge-computing-orchestrator', isNew: true },
      { name: 'Autonomous Cloud FinOps Platform', href: '/services/autonomous-cloud-finops-platform', isHot: true },
      { name: 'Quantum-Secure Zero Trust Platform', href: '/services/quantum-secure-zero-trust-platform', isNew: true },
      { name: 'AI-Powered IT Asset Lifecycle Manager', href: '/services/ai-powered-it-asset-lifecycle-manager' },
      { name: 'Quantum Hybrid Cloud Orchestrator', href: '/services/quantum-hybrid-cloud-orchestrator', isNew: true },
      { name: 'Autonomous Data Governance Platform', href: '/services/autonomous-data-governance-platform' },
      { name: 'Quantum Network Performance Optimizer', href: '/services/quantum-network-performance-optimizer' },
      { name: 'AI-Powered Disaster Recovery Automation', href: '/services/ai-powered-disaster-recovery-automation' },
      { name: 'Quantum-Secure API Gateway', href: '/services/quantum-secure-api-gateway' },
      { name: 'Autonomous IT Compliance Automation', href: '/services/autonomous-it-compliance-automation' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-500 to-cyan-500',
    links: [
      { name: 'AI Content Generator', href: '/services/ai-content-generator' },
      { name: 'AI Code Review', href: '/services/ai-code-review' },
      { name: 'AI HR Analytics Platform', href: '/services/intelligent-hr-analytics-platform' },
      { name: 'AI Financial Planning Platform', href: '/services/ai-financial-planning-platform' },
      { name: 'Supply Chain Optimization', href: '/services/intelligent-supply-chain-optimization' },
      { name: 'Content Automation Platform', href: '/services/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/services/smart-crm-intelligence-suite' },
      { name: 'SEO Automation Suite', href: '/services/seo-automation-suite' },
      { name: 'AI-Powered Customer Success Automation', href: '/services/ai-powered-customer-success-automation', isHot: true, isNew: true },
      { name: 'Quantum-Secure Blockchain Platform', href: '/services/quantum-secure-blockchain-platform', isNew: true },
      { name: 'Autonomous DevOps Intelligence Platform', href: '/services/autonomous-devops-intelligence-platform' },
      { name: 'AI-Powered Legal Document Automation', href: '/services/ai-powered-legal-document-automation' },
      { name: 'Quantum Financial Risk Management', href: '/services/quantum-financial-risk-management', isHot: true },
      { name: 'Autonomous Supply Chain Optimization', href: '/services/autonomous-supply-chain-optimization' },
      { name: 'AI-Powered Healthcare Diagnostic Platform', href: '/services/ai-powered-healthcare-diagnostic-platform', isNew: true },
      { name: 'Quantum Cybersecurity Monitoring', href: '/services/quantum-cybersecurity-monitoring' },
      { name: 'Autonomous Marketing Intelligence Platform', href: '/services/autonomous-marketing-intelligence-platform' },
      { name: 'Quantum Space Resource Optimization', href: '/services/quantum-space-resource-optimization' }
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
  { name: 'Research & Development', href: '/research-development' },
  { name: 'Investor Relations', href: '/investors' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' },
  { name: 'Get Started', href: '/get-started' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Training', href: '/training' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'API Reference', href: '/api' },
  { name: 'Status', href: '/status' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Accessibility', href: '/accessibility' },
  { name: 'Sustainability', href: '/sustainability' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function UltraFuturisticFooter2038() {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 xl:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">2038 Edition</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential. 
                We deliver cutting-edge AI, quantum computing, and space technology solutions for the next generation.
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
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Service Categories */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 mb-4">
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
                        className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        {link.featured && <Star className="w-3 h-3 text-yellow-400" />}
                        {link.isNew && (
                          <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                            New
                          </span>
                        )}
                        {link.isHot && (
                          <span className="px-2 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full">
                            Hot
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-gray-800/50"
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-center py-2 px-3 rounded-lg hover:bg-gray-800/30"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2038 Zion Tech Group. All rights reserved.</span>
                <span>•</span>
                <span>Pioneering Tomorrow's Technology Today</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 z-50 flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}