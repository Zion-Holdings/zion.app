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
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const UltraFuturisticFooter2036: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Featured Services',
      description: 'Our most popular and innovative solutions',
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      links: [
        { name: 'AI Consciousness Evolution', href: '/services', featured: true },
        { name: 'Quantum Cybersecurity Sentinel', href: '/services', featured: true },
        { name: 'AI Autonomous Content Factory', href: '/services', featured: true },
        { name: 'Autonomous Business Intelligence', href: '/services', featured: true },
        { name: 'Quantum Supply Chain Optimizer', href: '/services', featured: true },
        { name: 'AI Autonomous Customer Success', href: '/services', featured: true },
        { name: 'AI Autonomous DevOps Platform', href: '/services', featured: true },
        { name: 'Autonomous Cloud Orchestrator', href: '/services' },
        { name: 'Quantum Edge Computing Platform', href: '/services' },
        { name: 'AI-Powered Enterprise Architecture', href: '/services' }
      ]
    },
    {
      title: 'AI & Consciousness',
      description: 'Revolutionary AI platforms and solutions',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      links: [
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform' },
        { name: 'AI Emotional Intelligence Trainer', href: '/ai-emotional-intelligence-trainer' },
        { name: 'Autonomous Business Operations Engine', href: '/autonomous-business-operations-engine' },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
        { name: 'AI Predictive Maintenance Orchestrator', href: '/ai-predictive-maintenance-orchestrator' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
        { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation' },
        { name: 'AI Sales Intelligence Automation', href: '/ai-sales-intelligence-automation' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      description: 'Breakthrough quantum and space technologies',
      icon: <Atom className="w-5 h-5 text-blue-400" />,
      links: [
        { name: 'Quantum Cybersecurity Sentinel', href: '/quantum-cybersecurity-sentinel' },
        { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
        { name: 'Quantum Financial Risk Manager', href: '/quantum-financial-risk-manager' },
        { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery' },
        { name: 'Quantum IoT Security Gateway', href: '/quantum-iot-security-gateway' },
        { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
        { name: 'Quantum-Secure Identity Platform', href: '/quantum-secure-identity-platform' },
        { name: 'Quantum-Enhanced Storage Platform', href: '/quantum-enhanced-storage-platform' },
        { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
        { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' }
      ]
    },
    {
      title: 'Enterprise IT Solutions',
      description: 'Advanced enterprise infrastructure solutions',
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      links: [
        { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator' },
        { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture' },
        { name: 'Autonomous Data Governance Platform', href: '/autonomous-data-governance' },
        { name: 'AI-Powered IT Service Management', href: '/ai-powered-it-service-management' },
        { name: 'Autonomous Network Operations Center', href: '/autonomous-network-operations' },
        { name: 'AI-Powered Disaster Recovery Platform', href: '/ai-powered-disaster-recovery' },
        { name: 'Autonomous Compliance Manager', href: '/autonomous-compliance-manager' },
        { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
        { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Innovative business solutions for modern enterprises',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      links: [
        { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory' },
        { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success' },
        { name: 'AI Autonomous DevOps Platform', href: '/ai-autonomous-devops-platform' },
        { name: 'AI Autonomous Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
        { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation' },
        { name: 'AI Sales Intelligence Automation', href: '/ai-sales-intelligence-automation' }
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
        { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder' },
        { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor' },
        { name: 'Uptime SLO Monitor', href: '/uptime-slo-monitor' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Support', href: '/support' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
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
                      className="text-sm transition-colors hover:text-cyan-400 text-white/70 group flex items-center space-x-2"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                      {link.featured && (
                        <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
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

        {/* Contact and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <span>Get in Touch</span>
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions can drive your success.
              </p>
            </div>
            <div className="space-y-4">
              <a href="tel:+1 302 464 0950" className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <span>+1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 text-cyan-400" />
                <span className="text-sm">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links and Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center space-x-2">
                <Target className="w-5 h-5 text-purple-400" />
                <span>Quick Links</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-cyan-400 transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span>Follow Us</span>
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
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
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              <Link href="/accessibility-scanner" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
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

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/10 transform rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-pink-400/10 rounded-full"></div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2036;