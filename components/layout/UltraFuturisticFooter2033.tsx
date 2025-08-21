import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Phone, Mail, MapPin, ExternalLink, ArrowRight,
  Heart, Infinity, CircuitBoard, Satellite, Dna,
  Microchip, Telescope, Beaker, TestTube,
  Syringe, Pill, Stethoscope, HeartPulse, Activity,
  Lightbulb, Flame, Battery, Power,
  Wifi, Bluetooth, Radio, Antenna, Signal,
  Compass, Navigation, Map, Globe2,
  Github, Twitter, Linkedin, Facebook, Instagram,
  Youtube,
  Building
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
    color: 'from-violet-500 to-purple-600',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Biotech DNA Computing', href: '/biotech-dna-computing-platform' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Neuromorphic Computing', href: '/neuromorphic-computing-platform' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    icon: CircuitBoard,
    color: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'AI-Powered IT Operations Center', href: '/ai-it-operations-center' }
    ]
  },
  {
    title: 'Space & Metaverse',
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics' },
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'News', href: '/news' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' }
];

const companyLinks = [
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Press', href: '/press' },
  { name: 'Blog', href: '/blog' },
  { name: 'Events', href: '/events' },
  { name: 'Research', href: '/research' },
  { name: 'Innovation Lab', href: '/innovation-lab' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'GDPR', href: '/gdpr' },
  { name: 'Accessibility', href: '/accessibility' },
  { name: 'Sitemap', href: '/sitemap.xml' }
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
];

export default function UltraFuturisticFooter2033() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-75 -z-10"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-cyan-400 font-mono text-sm">2033 Future Technology</p>
              </div>
            </div>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions. 
              We're building tomorrow's technology today.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-400 font-semibold">🚀 Leading Innovation</span>
              <span className="text-purple-400 font-semibold">⚛️ Quantum First</span>
              <span className="text-blue-400 font-semibold">🧠 AI Conscious</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <MessageCircle className="w-5 h-5 text-cyan-400 mr-2" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="text-white/80 hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-white/80 text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Target className="w-5 h-5 text-cyan-400 mr-2" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white/80 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category) => (
            <div key={category.title} className="group">
              <div className={`inline-flex items-center space-x-2 mb-4 p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                <category.icon className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-white">{category.title}</h4>
              </div>
              <div className="space-y-2">
                {category.services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Building className="w-5 h-5 text-cyan-400 mr-2" />
              Company
            </h4>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white/70 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Shield className="w-5 h-5 text-cyan-400 mr-2" />
              Legal
            </h4>
            <div className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white/70 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 text-cyan-400 mr-2" />
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 text-white/70 ${link.color} transition-colors duration-200 hover:translate-x-1 transform`}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Future
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI consciousness, quantum computing, space technology, and cutting-edge innovations. 
              Join thousands of technology leaders shaping tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-white/60 text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <span>Made with <Heart className="w-4 h-4 text-red-400 inline" /> for the future</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-cyan-400 font-mono text-sm">🚀 Leading Innovation</span>
              <span className="text-purple-400 font-mono text-sm">⚛️ Quantum First</span>
              <span className="text-blue-400 font-mono text-sm">🧠 AI Conscious</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href="/contact"
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>
      </motion.div>
    </footer>
  );
}