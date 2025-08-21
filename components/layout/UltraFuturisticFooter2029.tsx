import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye, Timer,
  Phone, Mail, MapPin, ArrowRight, ExternalLink
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Cutting-Edge Innovations',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform' },
      { name: 'AI Reality Augmentation', href: '/ai-reality-augmentation-platform' }
    ]
  },
  {
    title: '⚛️ Quantum & Advanced Infrastructure',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Quantum Security', href: '/zero-trust-quantum-security' },
      { name: 'Quantum Edge Computing', href: '/quantum-edge-computing-orchestration' },
      { name: 'Quantum Blockchain', href: '/quantum-blockchain-infrastructure' }
    ]
  },
  {
    title: '🤖 Advanced AI & Machine Learning',
    services: [
      { name: 'Autonomous AI Decision Engine', href: '/autonomous-ai-decision-engine' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
  },
  {
    title: '💼 Business & Enterprise Solutions',
    services: [
      { name: 'AI Brand Personality Generator', href: '/ai-brand-personality-generator' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-system' },
      { name: 'AI Sales Automation Platform', href: '/ai-sales-automation-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'Support', href: '/support', icon: ShieldCheck },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Case Studies', href: '/case-studies', icon: Target },
  { name: 'Resources', href: '/resources', icon: Database },
  { name: 'Training', href: '/training', icon: GraduationCap }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: '📸' },
  { name: 'Discord', href: 'https://discord.gg/ziontechgroup', icon: '🎮' },
  { name: 'Medium', href: 'https://medium.com/@ziontechgroup', icon: '✍️' }
];

const UltraFuturisticFooter2029: React.FC = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
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
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-purple-300">2029 Future Technology</p>
                </div>
              </div>
              
              <p className="text-purple-200 mb-6 leading-relaxed">
                Leading the future with cutting-edge AI, quantum computing, and innovative technology solutions. 
                Transforming businesses through intelligent automation and next-generation infrastructure.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-purple-200">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-200">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-200">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-200">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={contactInfo.website} className="text-sm hover:text-white transition-colors">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
                🚀 Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-medium text-purple-300">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link 
                            href={service.href}
                            className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center group"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links & Social */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
                Quick Links
              </h3>
              
              {/* Quick Links */}
              <div className="mb-6">
                <h4 className="font-medium text-purple-300 mb-3">Company</h4>
                <ul className="space-y-2">
                  {quickLinks.slice(0, 6).map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                      >
                        <link.icon className="w-4 h-4" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h4 className="font-medium text-purple-300 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-medium text-white mb-3">Stay Updated</h4>
                <p className="text-sm text-purple-200 mb-3">
                  Get the latest insights on future technology and AI innovations.
                </p>
                <div className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <div className="text-sm text-purple-300">
              © 2029 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-purple-300 hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href="/contact"
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </motion.a>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2029;