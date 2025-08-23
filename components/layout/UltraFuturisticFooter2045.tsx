import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play, FileText, ArrowUp, HelpCircle,
  DollarSign, Truck, Eye
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
=======
  Phone, Mail, MapPin, Globe, Star, ArrowUp,
  Brain, Rocket, Shield, Atom, Target, Star as StarIcon,
  Linkedin, Twitter, Github, Youtube, MessageCircle,
  Calendar, HelpCircle, FileText, Users, Award
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
  };

  const footerSections = [
    {
      title: 'Featured Services',
      icon: <StarIcon className="w-5 h-5 text-yellow-400" />,
      description: 'Our most popular and innovative solutions',
      links: [
<<<<<<< HEAD
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-platform', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum AI Neural Networks 2045', href: '/quantum-ai-neural-network-platform', icon: <Atom className="w-4 h-4" /> },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-assistant', icon: <Eye className="w-4 h-4" /> },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-platform', icon: <Heart className="w-4 h-4" /> },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-platform', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence', icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Autonomous DevOps Intelligence', href: '/autonomous-devops-intelligence-platform', icon: <Code className="w-4 h-4" /> },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', icon: <Network className="w-4 h-4" /> },
        { name: 'Zero-Trust Network Architecture', href: '/zero-trust-network-architecture-platform', icon: <Shield className="w-4 h-4" /> },
        { name: 'Intelligent Data Pipeline', href: '/intelligent-data-pipeline-orchestration', icon: <Database className="w-4 h-4" /> },
        { name: 'Autonomous Infrastructure Management', href: '/autonomous-infrastructure-management', icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      links: [
        { name: 'AI Financial Intelligence Platform', href: '/ai-financial-intelligence-platform', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Autonomous Supply Chain Optimization', href: '/autonomous-supply-chain-optimization', icon: <Truck className="w-4 h-4" /> },
        { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication-platform', icon: <Lock className="w-4 h-4" /> },
        { name: 'AI Healthcare Diagnostics Platform', href: '/ai-healthcare-diagnostics-platform', icon: <Heart className="w-4 h-4" /> },
        { name: 'Autonomous Energy Management System', href: '/autonomous-energy-management-system', icon: <Zap className="w-4 h-4" /> },
        { name: 'Quantum AI Research Assistant', href: '/quantum-ai-research-assistant', icon: <Brain className="w-4 h-4" /> }
=======
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029/', featured: true },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform/', featured: true },
        { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform/', featured: true },
        { name: 'Space Resource Mining', href: '/space-resource-mining-platform/', featured: true },
        { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform/', featured: true },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform/', featured: true },
        { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training/', featured: true },
        { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform/' },
        { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform/' },
        { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform/' }
      ]
    },
    {
      title: 'AI & Consciousness',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      description: 'Revolutionary AI platforms and solutions',
      links: [
        { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029/' },
        { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training/' },
        { name: 'AI Autonomous Business Operations', href: '/autonomous-business-operations-platform/' },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant/' },
        { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform/' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine/' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager/' },
        { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework/' },
        { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform/' },
        { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform/' }
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: <Atom className="w-5 h-5 text-blue-400" />,
      description: 'Breakthrough quantum and space technologies',
      links: [
<<<<<<< HEAD
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Target className="w-4 h-4" /> },
        { name: 'News & Blog', href: '/blog', icon: <Star className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> }
=======
        { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform/' },
        { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform/' },
        { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform/' },
        { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform/' },
        { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform/' },
        { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform/' },
        { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform/' },
        { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology/' },
        { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform/' },
        { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform/' }
      ]
    },
    {
      title: 'Enterprise IT Solutions',
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      description: 'Advanced enterprise infrastructure solutions',
      links: [
        { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure/' },
        { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center/' },
        { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform/' },
        { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform/' },
        { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform/' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform/' },
        { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity/' },
        { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management/' },
        { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation/' },
        { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab/' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      description: 'Innovative business solutions for modern enterprises',
      links: [
        { name: 'AI Content Generator', href: '/ai-content-generator/' },
        { name: 'AI Code Review', href: '/ai-code-review/' },
        { name: 'AI HR Analytics Platform', href: '/intelligent-hr-analytics-platform/' },
        { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform/' },
        { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization/' },
        { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform/' },
        { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite/' },
        { name: 'SEO Automation Suite', href: '/seo-automation-suite/' },
        { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent/' },
        { name: 'Managed Postgres HA', href: '/managed-postgres-ha/' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: <Target className="w-5 h-5 text-pink-400" />,
      description: 'Industry-specific and specialized services',
      links: [
        { name: 'Browser Automation Cloud', href: '/browser-automation-cloud/' },
        { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation/' },
        { name: 'API Performance Testing', href: '/api-performance-testing/' },
        { name: 'Sales Copilot', href: '/sales-copilot/' },
        { name: 'Serverless Cron Manager', href: '/serverless-cron-manager/' },
        { name: 'SSO in a Box', href: '/sso-in-a-box/' },
        { name: 'Status Pages & SLO Monitor', href: '/status-pages-slo/' },
        { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder/' },
        { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor/' },
        { name: 'Uptime SLO Monitor', href: '/uptime-slo-monitor/' }
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
      ]
    }
  ];

<<<<<<< HEAD
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden" role="contentinfo">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm">Revolutionary Technology 2045</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <address className="not-italic">
                    {contactInfo.address}
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp} className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                        <span className="hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-cyan-500/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead with Innovation
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI consciousness, quantum computing, and cutting-edge technology solutions delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  aria-label="Email address for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-cyan-500/20"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. Revolutionary Technology 2045.
=======
  const quickLinks = [
    { name: 'All Services', href: '/comprehensive-services-showcase-2025/' },
    { name: 'Pricing', href: '/pricing/' },
    { name: 'Market Pricing', href: '/market-pricing/' },
    { name: 'About Us', href: '/about/' },
    { name: 'Contact', href: '/contact/' },
    { name: 'Support', href: '/support/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Careers', href: '/careers/' },
    { name: 'Partners', href: '/partners/' },
    { name: 'Investors', href: '/investors/' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5"></div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      className="text-sm transition-colors hover:text-cyan-400 text-white/70 font-medium"
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

        {/* Contact and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008 Middletown DE 19709</span>
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
              </div>
              <a
                href="https://ziontechgroup.com"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </a>
            </div>
          </motion.div>

<<<<<<< HEAD
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-600/50 hover:border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
=======
          {/* Quick Links and Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    <social.icon />
=======
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
                ))}
              </div>
            </div>

<<<<<<< HEAD
              {/* Quick Links */}
              <div className="flex items-center space-x-6">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
=======
            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
                ))}
              </div>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:shadow-cyan-500/40 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
=======

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/10 transform rotate-45"></div>
      </div>
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
    </footer>
  );
};

export default UltraFuturisticFooter2045;
