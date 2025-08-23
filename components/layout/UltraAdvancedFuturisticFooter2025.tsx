import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, TrendingUp, Users, Briefcase,
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight, ExternalLink,
  Heart, Zap, Infinity, Cpu, Cloud,
  Database, Lock, Key, ShoppingCart,
  BarChart3, MessageCircle, Code, DollarSign,
  HelpCircle, FileText, Server
} from 'lucide-react';

const footerSections = [
  {
    title: 'Micro SAAS Services',
    description: 'Professional micro SAAS solutions for modern businesses',
    icon: <Rocket className="w-5 h-5 text-cyan-400" />,
    color: 'from-emerald-500 to-cyan-500',
    links: [
      { name: 'AI Content Optimizer Pro', href: '/ai-content-optimizer-pro', featured: true },
      { name: 'Smart Inventory Manager', href: '/smart-inventory-manager', featured: true },
      { name: 'Customer Success Automation', href: '/customer-success-automation', featured: true },
      { name: 'Financial Analytics Dashboard', href: '/financial-analytics-dashboard' },
      { name: 'HR Automation Suite', href: '/hr-automation-suite' },
      { name: 'Project Management AI', href: '/project-management-ai' },
      { name: 'Email Marketing Automation', href: '/email-marketing-automation' },
      { name: 'Social Media Scheduler Pro', href: '/social-media-scheduler' },
      { name: 'Lead Generation Automation', href: '/lead-generation-automation' },
      { name: 'Customer Support Automation', href: '/customer-support-automation' }
    ]
  },
  {
    title: 'Enterprise IT Services',
    description: 'Advanced enterprise IT solutions and automation',
    icon: <Server className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-indigo-500',
    links: [
      { name: 'Cybersecurity Compliance Automation', href: '/cybersecurity-compliance-automation', featured: true },
      { name: 'Cloud Migration Automation', href: '/cloud-migration-automation', featured: true },
      { name: 'DevOps Automation Platform', href: '/devops-automation-platform', featured: true },
      { name: 'Data Analytics Automation', href: '/data-analytics-automation' },
      { name: 'Network Automation Suite', href: '/network-automation-suite' },
      { name: 'Backup & Disaster Recovery', href: '/backup-disaster-recovery' },
      { name: 'API Management Automation', href: '/api-management-automation' },
      { name: 'Identity & Access Management', href: '/identity-access-management' },
      { name: 'Performance Monitoring Automation', href: '/performance-monitoring-automation' },
      { name: 'Compliance Automation Platform', href: '/compliance-automation-platform' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced AI and machine learning solutions',
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Content Generation Suite', href: '/ai-content-generation-suite', featured: true },
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', featured: true },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'AI Marketing Automation Suite', href: '/ai-marketing-automation-suite' },
      { name: 'AI Predictive Analytics Engine', href: '/ai-predictive-analytics-engine' },
      { name: 'AI Image Recognition Platform', href: '/ai-image-recognition-platform' },
      { name: 'AI Natural Language Processing', href: '/ai-natural-language-processing' },
      { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
      { name: 'AI Chatbot Development Platform', href: '/ai-chatbot-development-platform' },
      { name: 'AI Workflow Automation Engine', href: '/ai-workflow-automation-engine' }
    ]
  },
  {
    title: 'Revolutionary 2040+',
    description: 'Future-defining technology solutions',
    icon: <Atom className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040', featured: true },
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', featured: true },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040', featured: true },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040' },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040' },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040' },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' }
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
  { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: '#', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: '#', icon: <Github className="w-5 h-5" /> }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
];

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-black/80 border-t border-cyan-500/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/10 rounded-lg"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-blue-400/10 transform rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future-Ready Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.mobile}</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Service Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {section.description}
                </p>

                <div className="space-y-2">
                  {section.links.slice(0, 5).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block text-sm transition-colors duration-200 ${
                        link.featured 
                          ? 'text-cyan-400 hover:text-cyan-300 font-medium' 
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {link.name}
                      {link.featured && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                          Featured
                        </span>
                      )}
                    </Link>
                  ))}
                  
                  {section.links.length > 5 && (
                    <Link
                      href={`/services?category=${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                    >
                      View All {section.title}
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    {link.icon}
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* About & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span>About Zion Tech Group</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services. 
                We help businesses transform and thrive in the digital age.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-sm text-gray-400"
              >
                <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">Innovating the future, one solution at a time.</p>
              </motion.div>

              {/* Legal Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-sm"
              >
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 transform hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </>
  );
};

export default UltraAdvancedFuturisticFooter2025;