import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUp, Phone, Mail, MapPin, Globe, Star, Sparkles,
  Brain, Atom, Rocket, Zap, Cpu, Target, Shield,
  Linkedin, Twitter, Github, Youtube, Facebook, Instagram
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-300' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-400' }
];

const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI Consciousness Evolution 2037', href: '/ai-consciousness-evolution-2037', featured: true },
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-2037', featured: true },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-2037', featured: true },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations-2037', featured: true },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-2037', featured: true },
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-2037', featured: true },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro-2037', featured: true },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation-2037', featured: true }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution 2037', href: '/ai-consciousness-evolution-2037' },
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-2037' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations-2037' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro-2037' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-2037' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-2037' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform' },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-2037' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure-2037' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-2037' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity' },
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro-2037' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation-2037' },
      { name: 'AI HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' }
    ]
  },
  {
    title: 'Specialized Solutions',
    description: 'Industry-specific and specialized services',
    icon: <Target className="w-5 h-5 text-pink-400" />,
    links: [
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation' },
      { name: 'API Performance Testing', href: '/api-performance-testing' },
      { name: 'Sales Copilot', href: '/sales-copilot' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager' },
      { name: 'SSO in a Box', href: '/sso-in-a-box' },
      { name: 'Status Pages & SLO Monitor', href: '/status-pages-slo' },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder' }
    ]
  }
];

const quickLinks = [
  { name: 'All Services', href: '/comprehensive-2037-innovative-services-showcase' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Market Pricing', href: '/market-pricing' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Support', href: '/support' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Training', href: '/training' },
  { name: 'Resources', href: '/resources' }
];

const UltraFuturisticFooter2038: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/10 transform rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                {section.icon}
                <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              </div>
              <p className="text-white/60 text-sm">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors hover:text-cyan-400 ${
                        link.featured ? 'text-cyan-300 font-medium' : 'text-white/70'
                      }`}
                    >
                      {link.name}
                      {link.featured && (
                        <span className="ml-2 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact and Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Get in Touch</h3>
              <p className="text-white/60 text-sm mb-6">
                Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions can drive your success.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <a
                href={contactInfo.website}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 ${social.color} transition-all duration-300 hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
              <div>
                <span className="text-white font-bold text-lg">ZionTech Group</span>
                <p className="text-white/60 text-sm">Future Technology Solutions</p>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="hover:text-cyan-400 transition-colors">
                Security
              </Link>
              <Link href="/accessibility" className="hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-110"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm">
              © 2025 ZionTech Group. All rights reserved. Pioneering the future of technology with AI, quantum computing, and space technology.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2038;