import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Atom, Shield, Rocket, Target, 
  Phone, Mail, MapPin, Globe, Star, Users,
  TrendingUp, Award, Shield as ShieldIcon, Cpu,
  Database, Lock, Cloud, BarChart3, Settings,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, ExternalLink
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: '🚀 Core Services',
    links: [
      { name: 'AI & Consciousness', href: '/ai-services', description: 'Revolutionary AI solutions' },
      { name: 'Quantum Computing', href: '/quantum-services', description: 'Next-gen quantum tech' },
      { name: 'Enterprise IT', href: '/enterprise-it', description: 'Enterprise infrastructure' },
      { name: 'Space Technology', href: '/space-technology', description: 'Space exploration solutions' },
      { name: 'Micro SAAS', href: '/micro-saas', description: 'Business automation tools' }
    ]
  },
  {
    title: '💡 Innovation Areas',
    links: [
      { name: 'Research & Development', href: '/research-development', description: 'Breakthrough technologies' },
      { name: 'Emerging Tech', href: '/emerging-tech', description: 'Future technology trends' },
      { name: 'AI Consciousness', href: '/ai-consciousness-evolution-2029', description: 'AI evolution research' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Hybrid computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural technology' }
    ]
  },
  {
    title: '🏢 Business Solutions',
    links: [
      { name: 'Customer Success AI', href: '/customer-success-ai-pro', description: 'AI-powered customer success' },
      { name: 'Smart Inventory AI', href: '/smart-inventory-ai', description: 'Inventory optimization' },
      { name: 'HR Compliance Pro', href: '/hr-compliance-pro', description: 'HR compliance automation' },
      { name: 'Expense AI Manager', href: '/expense-ai-manager', description: 'Expense management' },
      { name: 'Contract Flow AI', href: '/contract-flow-ai', description: 'Contract automation' }
    ]
  },
  {
    title: '🔧 Enterprise IT',
    links: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum cloud solutions' },
      { name: 'Edge Computing AI', href: '/edge-computing-ai', description: 'Edge computing orchestration' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-pro', description: 'Advanced cybersecurity' },
      { name: 'Enterprise Blockchain', href: '/enterprise-blockchain-pro', description: 'Blockchain solutions' },
      { name: 'DevOps AI Pro', href: '/devops-ai-pro', description: 'AI-powered DevOps' }
  ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github, color: 'hover:text-gray-400' }
];

const stats = [
  { number: '50+', label: 'Advanced Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime Guarantee', icon: ShieldIcon, color: 'text-green-400' },
  { number: '24/7', label: 'Global Support', icon: Zap, color: 'text-pink-400' }
];

export default function UltraFuturisticFooter2035() {
  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Company Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-sm text-gray-400">Leading Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Pioneering the future with revolutionary AI consciousness, quantum computing, emerging technologies, 
                and innovative micro SAAS solutions that transform businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/5 border border-cyan-500/20 rounded-lg text-gray-400 transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-500/40 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/5 border border-cyan-500/20 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Links Grid */}
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
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group block p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{link.description}</p>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of technology leaders who are already shaping tomorrow with our revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 font-bold text-lg rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Powered by</span>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400">Quantum AI</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400">Global Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}