import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Cpu, Target, Microscope, Shield, Zap, Sparkles,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Star, CheckCircle, TrendingUp,
  ShieldCheck, Users, Briefcase, BookOpen,
  Database, Cloud, Lock, Home, Building, DollarSign, 
  FileText, MessageSquare, MessageCircle, Newspaper, 
  Handshake, LifeBuoy, Activity, Crown, Award, Heart, Infinity
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },
      { name: 'Biotech DNA Computing', href: '/biotech-dna-computing-platform' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Photonic Computing', href: '/photonic-computing-infrastructure' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'AI IT Operations Center', href: '/ai-it-operations-center' }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform' },
      { name: 'Metaverse Development', href: '/metaverse-development-platform' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Building },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News & Updates', href: '/news', icon: Newspaper },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Support', href: '/support', icon: LifeBuoy }
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:bg-blue-600' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:bg-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:bg-blue-700' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:bg-pink-600' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:bg-red-600' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:bg-gray-700' }
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized',
  'Quantum Security Certified',
  'AI Ethics Compliant'
];

const awards = [
  '2023 Best AI Innovation',
  '2023 Quantum Computing Excellence',
  '2023 Cybersecurity Leadership',
  '2023 Future Technology Pioneer',
  '2023 Customer Success Award',
  '2023 Innovation Excellence'
];

export default function UltraFuturisticFooter2033() {
  return (
    <footer className="bg-gradient-to-br from-black via-purple-900/20 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 border-b border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Crown className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-2xl blur opacity-75 animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-sm text-purple-300 font-medium">
                    Future Technology Solutions
                  </span>
                </div>
              </motion.div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with revolutionary AI, quantum computing, and cutting-edge solutions that transform businesses and industries worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.website}</span>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={category.title} className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <category.icon className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section - Quick Links & Company */}
        <div className="py-12 border-b border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm group"
                  >
                    <link.icon className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Building className="w-5 h-5 text-purple-400 mr-2" />
                Company
              </h3>
              <div className="space-y-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm group"
                  >
                    <link.icon className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors duration-200" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Awards */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Star className="w-5 h-5 text-purple-400 mr-2" />
                Connect & Awards
              </h3>
              
              {/* Social Links */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3">Recent Awards</h4>
                <div className="space-y-2">
                  {awards.slice(0, 3).map((award, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-gray-300">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Certifications & Newsletter */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <ShieldCheck className="w-5 h-5 text-purple-400 mr-2" />
                Certifications & Compliance
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-2" />
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get the latest updates on revolutionary technologies, AI breakthroughs, and quantum computing advancements.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2023-2024 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-cyan-400 ml-1">Terms of Service</Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with AI & Quantum Innovation</span>
              </span>
              <span className="flex items-center space-x-1">
                <Infinity className="w-4 h-4 text-purple-400" />
                <span>Future-Ready Technology</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="/contact"
          className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 border-2 border-purple-400/30"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Link>
      </motion.div>
    </footer>
  );
}
