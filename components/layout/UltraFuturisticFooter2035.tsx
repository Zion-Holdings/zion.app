import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target,
  DollarSign, Lock, Palette, Heart, Users,
  Mail, Phone, MapPin, Globe, Star,
  Twitter, Linkedin, Github, Youtube, Instagram
} from 'lucide-react';

const footerSections = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500',
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'Autonomous AI Ecosystem', href: '/autonomous-ai-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Networking', href: '/quantum-networking-platform' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-suite' },
      { name: 'Space Technology', href: '/space-technology' }
    ]
  },
  {
    title: 'Enterprise Solutions',
    icon: <Shield className="w-5 h-5" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-automation' },
      { name: 'Quantum Data Analytics', href: '/quantum-data-analytics-platform' },
      { name: 'Enterprise IT Services', href: '/enterprise-it' },
      { name: 'Cloud Solutions', href: '/cloud-platform' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Target className="w-5 h-5" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'AI Content Generator Pro', href: '/ai-content-generator' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Automation', href: '/ai-powered-sales-automation' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Support', href: '/support' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> }
];

const UltraFuturisticFooter2035: React.FC = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Company Info & Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800/50">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  Z
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-cyan-400">Future Technology Solutions</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                Transforming businesses with revolutionary innovations.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-white mb-4">Contact & Legal</h4>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <span className="ml-2 text-cyan-400">Revolutionizing the future, one innovation at a time.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 1500+ clients worldwide</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Available in 150+ countries</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50"></div>
    </footer>
  );
};

export default UltraFuturisticFooter2035;