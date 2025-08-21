import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Zap, Sparkles, 
  Brain, Atom, Rocket, Target, Shield, Cpu,
  Database, Cloud, Lock, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Github, ArrowUp, Heart, Infinity, CircuitBoard,
  Satellite, Dna, Microchip, Telescope, Beaker,
  TestTube, Syringe, Pill, Stethoscope, HeartPulse,
  Activity, Lightbulb, Flame, Battery, Power,
  Wifi, Bluetooth, Radio, Antenna, Signal,
  Compass, Navigation, Map, Globe2
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: '🧠 AI & Consciousness',
    description: 'Next-generation AI consciousness and creativity platforms',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2034' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-2034' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator-2034' },
      { name: 'AI Dream Interpreter', href: '/ai-dream-interpreter-2034' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager-2034' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging',
    description: 'Quantum computing, DNA computing, and beyond',
    links: [
      { name: 'Quantum DNA Computing', href: '/quantum-dna-computing-2034' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-2034' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-2034' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio-2034' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2034' }
    ]
  },
  {
    title: '🏙️ Enterprise Solutions',
    description: 'Autonomous operations and zero-trust security',
    links: [
      { name: 'Autonomous Enterprise Operations', href: '/autonomous-enterprise-operations-2034' },
      { name: 'Quantum Cybersecurity Fortress', href: '/quantum-cybersecurity-fortress-2034' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-2034' },
      { name: 'AI-Powered DevOps Automation', href: '/ai-powered-devops-automation-2034' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2034' }
    ]
  },
  {
    title: '🌌 Space & Metaverse',
    description: 'Space exploration and metaverse development',
    links: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-2034' },
      { name: 'Metaverse AI Ecosystem', href: '/metaverse-ai-ecosystem-2034' },
      { name: 'Interplanetary Logistics', href: '/interplanetary-logistics-2034' },
      { name: 'Virtual World Creation', href: '/virtual-world-creation-2034' },
      { name: 'Space Resource Processing', href: '/space-resource-processing-2034' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'News', href: '/news' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Legal', href: '/legal' },
  { name: 'Privacy', href: '/privacy' }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-cyan-400' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-500' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
];

const UltraFuturisticFooter2034: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.03),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section with Logo and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">2034 Future Technology</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed">
                Leading the future of technology with revolutionary AI consciousness, 
                quantum computing, space exploration, and autonomous enterprise solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block py-1"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <div className="grid grid-cols-2 gap-3">
                {companyLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm block py-1"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {section.description}
                </p>
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block py-1 hover:translate-x-1 transform transition-transform"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter and Social */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Newsletter */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Get the latest updates on our revolutionary technology solutions and industry insights.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
              <p className="text-gray-400 text-sm">
                Follow us on social media for the latest updates and insights.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:border-cyan-500/50`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-pink-400" />
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Quantum Wave Effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-transparent to-transparent" />
    </footer>
  );
};

export default UltraFuturisticFooter2034;
