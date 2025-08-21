import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  Phone, Mail, MapPin, Linkedin, Twitter, Facebook,
  Instagram, Youtube, Github
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
      { name: 'AI Dream Interpreter', href: '/ai-dream-interpreter-platform' }
    ]
  },
  {
    title: 'Quantum Technology',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' },
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform' }
    ]
  },
  {
    title: 'Space & Metaverse',
    icon: Globe,
    color: 'from-cyan-500 to-teal-600',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse Development', href: '/metaverse-development-platform' },
      { name: 'AI Predictive Health', href: '/ai-predictive-health-analytics' },
      { name: 'AI Autonomous Business', href: '/ai-autonomous-business-manager' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration' },
      { name: 'AI IT Operations', href: '/ai-it-operations-center' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'AI Solutions', href: '/ai-solutions' },
  { name: 'Quantum Tech', href: '/quantum-tech' },
  { name: 'Enterprise IT', href: '/enterprise-it' },
  { name: 'Space Tech', href: '/space-tech' },
  { name: 'Micro SAAS', href: '/micro-saas' },
  { name: 'Research', href: '/research' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' }
];

const resources = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'White Papers', href: '/white-papers' },
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'Events', href: '/events' },
  { name: 'Webinars', href: '/webinars' }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Press', href: '/press' },
  { name: 'Legal', href: '/legal' },
  { name: 'Privacy', href: '/privacy' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-500' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

export default function UltraFuturisticFooter2030() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">2030 Future Technology</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading the future of technology with revolutionary AI, quantum computing, and space technology solutions. 
                  Building tomorrow's innovations today.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-sm hover:text-cyan-400 transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-purple-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          href={service.href}
                          className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"
                        >
                          <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Quick Links and Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      href={resource.href}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-gray-800"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Our Impact</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">800+</div>
                  <div className="text-xs text-gray-400">Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400">1000%</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-pink-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter and Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-gray-800"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-6">
                <span className="text-sm text-gray-400">Follow us:</span>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 w-64"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-md hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Building the future, one innovation at a time</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2030 Zion Tech Group. All rights reserved.</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookies</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}