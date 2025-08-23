import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, Brain, Atom, Rocket, Shield, Cpu, Cloud, 
  BarChart3, Code, Target, TrendingUp, Users, Award,
  Phone, Mail, MapPin, Globe, ArrowUp, ArrowRight,
  Linkedin, Twitter, Github, Youtube, MessageCircle,
  Calendar, Clock, CheckCircle
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Featured Services',
      icon: Star,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', badge: 'Featured' },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', badge: 'Featured' },
        { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform', badge: 'Featured' },
        { name: 'Space Resource Mining', href: '/space-resource-mining-platform', badge: 'Featured' },
        { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', badge: 'Featured' },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', badge: 'Featured' },
        { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', badge: 'Featured' },
        { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', badge: 'Featured' },
        { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', badge: 'Featured' },
        { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', badge: 'Featured' }
      ]
    },
    {
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029' },
        { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training' },
        { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
        { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
        { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
        { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'text-blue-400',
      services: [
        { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' },
        { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
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
      title: 'Enterprise IT Solutions',
      icon: Shield,
      color: 'text-purple-400',
      services: [
        { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
        { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
        { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
        { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
        { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
        { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity' },
        { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' },
        { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' },
        { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Rocket,
      color: 'text-emerald-400',
      services: [
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Code Review', href: '/ai-code-review' },
        { name: 'Intelligent HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
        { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' },
        { name: 'Intelligent Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
        { name: 'Intelligent Content Automation Platform', href: '/intelligent-content-automation-platform' },
        { name: 'Smart CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
        { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
        { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
        { name: 'Managed Postgres HA', href: '/managed-postgres-ha' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Target,
      color: 'text-pink-400',
      services: [
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
    { name: 'All Services', href: '/comprehensive-services-showcase-2025' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Market Pricing', href: '/market-pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:bg-blue-500/20' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:bg-blue-400/20' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:bg-gray-500/20' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:bg-red-500/20' }
  ];

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/10 transform rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <section.icon className={`w-5 h-5 ${section.color}`} />
                <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              </div>
              <p className="text-white/60 text-sm">Our most innovative solutions</p>
              <ul className="space-y-2">
                {section.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href={service.href}
                      className="text-sm transition-colors hover:text-cyan-400 text-cyan-300 font-medium group"
                    >
                      <span className="flex items-center">
                        {service.name}
                        {service.badge && (
                          <span className="ml-2 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Get in Touch</h3>
              <p className="text-white/60 text-sm mb-6">
                Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions can drive your success.
              </p>
            </div>
            <div className="space-y-4">
              <a 
                href="tel:+1 302 464 0950" 
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <a 
                href="https://ziontechgroup.com" 
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
              >
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>ziontechgroup.com</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links and Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
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
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
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
          transition={{ duration: 0.6 }}
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
              aria-label="Scroll to top"
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

export default UltraFuturisticFooter2040;