import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Atom, Rocket, Shield, Target, 
  Phone, Mail, MapPin, Globe, ExternalLink,
  Twitter, Linkedin, Github, Facebook, Instagram,
  ArrowRight, Star, TrendingUp, Users, Award
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-500 to-indigo-600',
      services: [
        { name: 'AI Consciousness Platform', href: '/services/ai-consciousness-platform' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
        { name: 'Autonomous AI Agents', href: '/services/autonomous-ai-agents' },
        { name: 'AI Content Factory', href: '/services/ai-content-factory' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: <Atom className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-600',
      services: [
        { name: 'Quantum Neural Interface', href: '/services/quantum-neural-interface' },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading' },
        { name: 'Quantum Internet Protocol', href: '/services/quantum-internet-protocol' },
        { name: 'Quantum Sensors Network', href: '/services/quantum-sensors-network' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-600',
      services: [
        { name: 'Holographic Metaverse', href: '/services/holographic-metaverse-platform' },
        { name: 'Neuromorphic Computing', href: '/services/neuromorphic-computing' },
        { name: 'Synthetic Biology', href: '/services/synthetic-biology-platform' },
        { name: 'Brain-Computer Interface', href: '/services/brain-computer-interface' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: <Target className="w-5 h-5" />,
      color: 'from-orange-500 to-red-600',
      services: [
        { name: 'Smart Inventory Manager', href: '/services/smart-inventory-manager' },
        { name: 'Customer Success Automation', href: '/services/customer-success-automation' },
        { name: 'AI Sales Coach', href: '/services/ai-sales-coach' },
        { name: 'Smart HR Assistant', href: '/services/smart-hr-assistant' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Developer Tools', href: '/developer-tools' },
    { name: 'Integration Guides', href: '/integrations' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Community Forum', href: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'GDPR', href: '/gdpr' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> }
  ];

  const stats = [
    { label: 'Services', value: '500+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Clients', value: '10K+', icon: <Users className="w-6 h-6" /> },
    { label: 'ROI Average', value: '800%', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Uptime', value: '99.9%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />
      
      {/* Top Section with Stats */}
      <div className="relative border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transforming Technology, Empowering Innovation
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of companies leveraging our cutting-edge solutions to achieve unprecedented growth and innovation.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {stat.icon}
                  </div>
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leading the future of technology with innovative AI, quantum computing, and emerging tech solutions that transform businesses and drive unprecedented growth.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Links Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Links & Newsletter */}
        <motion.div 
          className="mt-12 pt-12 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Stay updated:</span>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="relative border-t border-gray-700/50 bg-gray-950/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Made with</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400">❤️</span>
              </div>
              <span className="text-gray-400">by Zion Tech Group</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating CTA */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
        >
          <Rocket className="w-5 h-5" />
          <span>Get Started</span>
        </Link>
      </motion.div>
    </footer>
  );
};

export default EnhancedFooter;