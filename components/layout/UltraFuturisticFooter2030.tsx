import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, Rocket, 
  Cpu, Target, Microscope,   Facebook, Twitter, Linkedin,  
  Instagram, Youtube, Github, ArrowRight, Star, Shield,
  Heart, Sparkles, TrendingUp, Users, Briefcase, BookOpen,
  MessageCircle, BarChart3, Home, Layers, DollarSign
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'Dream Interpreter', href: '/ai-dream-interpreter-platform' },
      { name: 'Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
    ]
  },
  {
    title: 'Quantum & Biotech',
    icon: Atom,
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'DNA Computing Platform', href: '/biotech-dna-computing-platform' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' },
      { name: 'Personalized Nutrition', href: '/biotech-personalized-nutrition' }
    ]
  },
  {
    title: 'Space & Metaverse',
    icon: Rocket,
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Digital Reality Platform', href: '/metaverse-digital-reality-platform' },
      { name: 'Predictive Health Analytics', href: '/ai-predictive-health-analytics' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Cpu,
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'AI Enterprise Security', href: '/ai-powered-enterprise-security' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: Target,
    services: [
      { name: 'Emotion-Based Marketing', href: '/ai-emotion-based-marketing' },
      { name: 'Quantum Learning', href: '/quantum-learning-accelerator' },
      { name: 'Intelligent Data Governance', href: '/intelligent-data-governance' }
    ]
  },
  {
    title: 'Research & Innovation',
    icon: Microscope,
    services: [
      { name: 'Research Automation', href: '/advanced-research-automation' },
      { name: 'Quantum Research Platform', href: '/quantum-research-platform' },
      { name: 'AI Research Assistant', href: '/ai-research-assistant' },
      { name: 'Biotech Research Suite', href: '/biotech-research-suite' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'GitHub', href: '#', icon: Github }
];

const UltraFuturisticFooter2030: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 border-t border-purple-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech
                </h3>
                <p className="text-sm text-slate-400">2030 Innovation Hub</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading the future with cutting-edge AI, quantum computing, space technology, and innovative solutions that transform businesses and advance humanity.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <Link
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
                <span className="text-sm">{contactInfo.email}</span>
              </Link>
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <category.icon className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {service.name}
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-8 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {mainNavigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-slate-300 hover:text-purple-400 transition-colors duration-200 group"
              >
                <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© 2025 Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with innovation</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400">
              <div>
                <h4 className="text-white font-medium mb-2">Innovation Focus</h4>
                <p>Leading-edge AI, quantum computing, space technology, and enterprise solutions</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Global Reach</h4>
                <p>Serving clients worldwide with cutting-edge technology and exceptional support</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Future Ready</h4>
                <p>Preparing businesses for the next decade of technological advancement</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-emerald-500 rounded-full"
        />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2030;