import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Cpu, Shield, Database, Cloud, Lock, Users, 
  Briefcase, BookOpen, MessageCircle, Star, 
  TrendingUp, Target, Layers, Zap, Sparkles,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'AI Research Assistant', href: '/ai-research-assistant' }
    ]
  },
  {
    title: 'Quantum Computing',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Quantum Research Platform', href: '/quantum-research-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'AI-Powered Security', href: '/ai-powered-enterprise-security' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Intelligent Data Governance', href: '/intelligent-data-governance' }
    ]
  },
  {
    title: 'Space & Metaverse',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse Digital Reality', href: '/metaverse-digital-reality-platform' },
      { name: 'AI Predictive Health', href: '/ai-predictive-health-analytics' },
      { name: 'AI Autonomous Business', href: '/ai-autonomous-business-manager' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'News', href: '/news' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' }
];

const showcasePages = [
  { name: '2029 Ultra Futuristic Innovations', href: '/2029-ultra-futuristic-innovations' },
  { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029' },
  { name: 'Ultimate 2026 Services Showcase', href: '/ultimate-2026-services-showcase' },
  { name: 'Enhanced Services Showcase 2025', href: '/enhanced-services-showcase-2025' },
  { name: 'Revolutionary 2027 Services', href: '/revolutionary-2027-services-showcase' },
  { name: 'Market Pricing', href: '/market-pricing' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
];

export default function UltraFuturisticFooter2029V2() {
  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-sm text-white/60">2029 Future Technology Solutions</div>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              Leading the future with cutting-edge AI, quantum computing, and space technology solutions. 
              Transforming businesses through innovative micro SAAS services and enterprise solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
                <span>{category.title}</span>
              </h3>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 inline-block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links and Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Quick Links</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Showcase Pages */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Star className="w-5 h-5 text-purple-400" />
              <span>Showcase Pages</span>
            </h3>
            <div className="space-y-2">
              {showcasePages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="text-white/60 hover:text-purple-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 block"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Users className="w-5 h-5 text-pink-400" />
              <span>Connect With Us</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-200" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-400" />
              <span>Stay Updated</span>
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Get the latest updates on our futuristic technology solutions and innovations.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2029 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200 ml-2">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200 ml-2">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 text-white/60 text-sm">
              <span>Powered by</span>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Atom className="w-4 h-4 text-purple-400" />
                <span>Quantum</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-4 h-4 text-pink-400" />
                <span>Space Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-10 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
          animate={{
            y: [0, 8, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </footer>
  );
}