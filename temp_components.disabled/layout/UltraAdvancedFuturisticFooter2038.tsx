import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
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
  Target,
  Rocket,
  Github,
  MessageCircle,
  Zap,
  TrendingUp,
  Users,
  BookOpen,
  FileText,
  Video,
  Lightbulb,
  Building,
  Handshake
} from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedFuturisticFooter2038: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Featured Services',
      description: 'Our most popular and innovative solutions',
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      links: [
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', featured: true, price: 'From $8,999/month' },
        { name: 'Quantum Financial Forecasting', href: '/quantum-financial-forecasting', featured: true, price: 'From $1,499/month' },
        { name: 'Autonomous Healthcare Diagnostics', href: '/autonomous-healthcare-diagnostics', featured: true, price: 'From $899/month' },
        { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', featured: true, price: 'From $799/month' },
        { name: 'AI Autonomous Marketing Platform', href: '/ai-autonomous-marketing-platform', featured: true, price: 'From $399/month' },
        { name: 'Quantum Cybersecurity Sentinel', href: '/quantum-cybersecurity-sentinel', featured: true, price: 'From $599/month' },
        { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence', featured: true, price: 'From $499/month' },
        { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', featured: true, price: 'From $1,999/month' },
        { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success', featured: true, price: 'From $299/month' },
        { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform', featured: true, price: 'From $899/month' }
      ]
    },
    {
      title: 'AI & Consciousness',
      description: 'Revolutionary AI platforms and solutions',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      links: [
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', featured: true, price: 'From $8,999/month' },
        { name: 'AI Emotional Intelligence Trainer', href: '/ai-emotional-intelligence-trainer', featured: false, price: 'From $2,999/month' },
        { name: 'Autonomous AI Research Assistant', href: '/autonomous-ai-research-assistant', featured: false, price: 'From $1,999/month' },
        { name: 'Quantum AI Hybrid Platform', href: '/quantum-ai-hybrid-platform', featured: false, price: 'From $3,999/month' },
        { name: 'AI Autonomous Content Factory', href: '/autonomous-ai-content-factory', featured: false, price: 'From $1,299/month' },
        { name: 'AI Predictive Maintenance Orchestrator', href: '/ai-predictive-maintenance-orchestrator', featured: false, price: 'From $899/month' },
        { name: 'Quantum AI Security Framework', href: '/quantum-ai-security-framework', featured: false, price: 'From $1,799/month' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', featured: false, price: 'From $1,599/month' },
        { name: 'Quantum AI Ethics & Governance', href: '/quantum-ai-ethics-governance', featured: false, price: 'From $2,199/month' },
        { name: 'AI Autonomous Legal Assistant', href: '/ai-autonomous-legal-assistant', featured: false, price: 'From $299/month' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      description: 'Breakthrough quantum and space technologies',
      icon: <Atom className="w-5 h-5 text-blue-400" />,
      links: [
        { name: 'Quantum Financial Forecasting Platform', href: '/quantum-financial-forecasting', featured: false, price: 'From $1,499/month' },
        { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', featured: false, price: 'From $799/month' },
        { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery', featured: false, price: 'From $1,999/month' },
        { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform', featured: false, price: 'From $899/month' },
        { name: 'Quantum Network Security Platform', href: '/quantum-network-security', featured: false, price: 'From $999/month' },
        { name: 'Quantum Data Center Optimization', href: '/quantum-data-center-optimization', featured: false, price: 'From $1,299/month' },
        { name: 'Quantum Enterprise Architecture', href: '/quantum-enterprise-architecture', featured: false, price: 'From $899/month' },
        { name: 'Quantum Identity Management', href: '/quantum-identity-management', featured: false, price: 'From $599/month' },
        { name: 'Quantum Edge Computing Orchestration', href: '/quantum-edge-computing-orchestration', featured: false, price: 'From $1,099/month' },
        { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform', featured: false, price: 'Contact for pricing' }
      ]
    },
    {
      title: 'Enterprise IT Solutions',
      description: 'Advanced enterprise infrastructure solutions',
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      links: [
        { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator', featured: false, price: 'From $799/month' },
        { name: 'AI-Powered DevOps Automation', href: '/ai-powered-devops-automation', featured: false, price: 'From $599/month' },
        { name: 'Autonomous IT Service Management', href: '/autonomous-it-service-management', featured: false, price: 'From $499/month' },
        { name: 'AI-Powered Disaster Recovery', href: '/ai-powered-disaster-recovery', featured: false, price: 'From $699/month' },
        { name: 'Autonomous Data Governance', href: '/autonomous-data-governance', featured: false, price: 'From $799/month' },
        { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture', featured: false, price: 'From $899/month' },
        { name: 'Autonomous Network Operations Center', href: '/autonomous-network-operations', featured: false, price: 'From $1,199/month' },
        { name: 'AI-Powered IT Service Management', href: '/ai-powered-it-service-management', featured: false, price: 'From $899/month' },
        { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform', featured: false, price: 'From $1,099/month' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', featured: false, price: 'From $1,499/month' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Specialized business applications and tools',
      icon: <Rocket className="w-5 h-5 text-green-400" />,
      links: [
        { name: 'AI Autonomous Marketing Platform', href: '/ai-autonomous-marketing-platform', featured: false, price: 'From $399/month' },
        { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success', featured: false, price: 'From $299/month' },
        { name: 'AI Autonomous Legal Assistant', href: '/ai-autonomous-legal-assistant', featured: false, price: 'From $299/month' },
        { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence', featured: false, price: 'From $499/month' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine', featured: false, price: 'From $399/month' },
        { name: 'AI Sales Intelligence Automation', href: '/ai-sales-intelligence-automation', featured: false, price: 'From $599/month' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', featured: false, price: 'From $399/month' },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', featured: false, price: 'From $1,999/month' },
        { name: 'AI Predictive Maintenance Orchestrator', href: '/ai-predictive-maintenance-orchestrator', featured: false, price: 'From $899/month' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', featured: false, price: 'From $1,599/month' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about', icon: <Building className="w-4 h-4" /> },
    { name: 'Partners', href: '/partners', icon: <Handshake className="w-4 h-4" /> },
    { name: 'Investors', href: '/investors', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Careers', href: '/careers', icon: <Users className="w-4 h-4" /> },
    { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
    { name: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
    { name: 'Research & Development', href: '/research-development', icon: <Lightbulb className="w-4 h-4" /> },
    { name: 'Training', href: '/training', icon: <BookOpen className="w-4 h-4" /> }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-400/20 mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation Leader 2038</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of technology with innovative AI, quantum computing, and autonomous solutions that drive business transformation and human progress.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-200">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                {section.icon}
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <p className="text-sm text-gray-400 mb-4">{section.description}</p>
              
              <div className="space-y-2">
                {section.links.slice(0, 6).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group block"
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                      <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                        {link.name}
                      </span>
                      {link.featured && (
                        <Star className="w-3 h-3 text-yellow-400" />
                      )}
                    </div>
                    {link.price && (
                      <p className="text-xs text-cyan-400 ml-2">{link.price}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-cyan-400/20">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Quick Links</span>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-400/10 transition-all duration-200 group"
                >
                  {link.icon}
                  <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>Connect With Us</span>
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-cyan-400/10 rounded-lg hover:bg-cyan-400/20 transition-all duration-200 group"
                >
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cyan-400/20">
          <div className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2028 Zion Tech Group. All rights reserved.</p>
            <p className="mt-1">Pioneering the future of technology</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/support" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/50 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
      </motion.button>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-8 left-8 z-40"
      >
        <Link href="/contact">
          <button className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300/50 group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Get Started</span>
          </button>
        </Link>
      </motion.div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2038;