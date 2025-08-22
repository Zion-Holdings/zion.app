import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Sparkles,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Building, Cpu, Database, Cloud, Lock, Users, Heart,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'Micro SAAS Services',
    icon: <Rocket className="w-5 h-5" />,
    links: [
      { name: 'AI-Powered Business Intelligence', href: '/services/ai-powered-business-intelligence-suite' },
      { name: 'Autonomous Customer Service AI', href: '/services/autonomous-customer-service-ai' },
      { name: 'AI-Powered Marketing Automation', href: '/services/ai-powered-marketing-automation' },
      { name: 'Autonomous Logistics Optimization', href: '/services/autonomous-logistics-optimization' },
      { name: 'View All Micro SAAS', href: '/services?category=micro-saas' }
    ]
  },
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/services/ai-consciousness-evolution-platform' },
      { name: 'Quantum Emotional Intelligence', href: '/services/quantum-emotional-intelligence-engine' },
      { name: 'Autonomous Creative AI Studio', href: '/services/autonomous-creative-ai-studio' },
      { name: 'AI Consciousness Monitoring', href: '/services/ai-consciousness-monitoring-system' },
      { name: 'View All AI Services', href: '/ai-services' }
    ]
  },
  {
    title: 'IT & Infrastructure',
    icon: <Cpu className="w-5 h-5" />,
    links: [
      { name: 'Quantum Cloud Infrastructure', href: '/services/quantum-cloud-infrastructure-platform' },
      { name: 'Autonomous Cybersecurity', href: '/services/autonomous-cybersecurity-orchestrator' },
      { name: 'Quantum Data Center Solutions', href: '/services/quantum-data-center-solutions' },
      { name: 'AI-Powered DevOps Automation', href: '/services/ai-powered-devops-automation' },
      { name: 'View All IT Services', href: '/it-services' }
    ]
  },
  {
    title: 'Advanced Solutions',
    icon: <Zap className="w-5 h-5" />,
    links: [
      { name: 'Quantum Predictive Analytics', href: '/services/quantum-predictive-analytics-engine' },
      { name: 'Autonomous Innovation AI', href: '/services/autonomous-innovation-ai' },
      { name: 'Quantum Emotional Healing AI', href: '/services/quantum-emotional-healing-ai' },
      { name: 'AI Consciousness Collaboration', href: '/services/ai-consciousness-collaboration-platform' },
      { name: 'View All Advanced Solutions', href: '/advanced-solutions' }
    ]
  }
];

const quickLinks = [
  { name: 'All Services', href: '/comprehensive-services-showcase-2025' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Market Pricing', href: '/market-pricing' },
  { name: 'Training', href: '/training' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'News & Events', href: '/news' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
];

export default function UltraFuturisticFooter2035() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-purple-500/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">ZionTech Group</h3>
                  <p className="text-cyan-400 text-sm">Future of Technology</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Revolutionizing technology with AI consciousness, quantum computing, and autonomous systems. 
                We're building the future, one innovation at a time.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-cyan-400">
                  {section.icon}
                </div>
                <h4 className="text-white font-semibold text-lg">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Links & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-cyan-400 group"
                >
                  {link.icon}
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest insights on AI consciousness, quantum computing, and revolutionary technology.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 ZionTech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Building the future with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">and</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </footer>
  );
}