import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Cpu, Cloud, Target,
  Phone, Mail, MapPin, Globe, Users, Star, Zap,
  ArrowRight, ExternalLink, Heart, Sparkles, Award
} from 'lucide-react';

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Core Services',
      icon: <Brain className="w-5 h-5" />,
      links: [
        { name: 'AI & Consciousness', href: '/ai-services', description: 'Revolutionary AI platforms' },
        { name: 'Quantum & Emerging Tech', href: '/quantum-services', description: 'Breakthrough technologies' },
        { name: 'Enterprise IT', href: '/enterprise-it', description: 'Advanced infrastructure' },
        { name: 'Micro SAAS', href: '/micro-saas', description: 'Innovative business solutions' }
      ]
    },
    {
      title: 'Advanced Solutions',
      icon: <Cpu className="w-5 h-5" />,
      links: [
        { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation suite' },
        { name: 'Advanced IT Infrastructure', href: '/advanced-it-infrastructure-services', description: 'Next-gen infrastructure' },
        { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'Business intelligence' },
        { name: 'Cutting-Edge AI Innovations', href: '/cutting-edge-ai-innovations', description: 'Latest AI breakthroughs' }
      ]
    },
    {
      title: 'Service Categories',
      icon: <Target className="w-5 h-5" />,
      links: [
        { name: 'All Services Showcase', href: '/comprehensive-services-showcase-2025', description: 'Complete portfolio' },
        { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation' },
        { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready' },
        { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium collection' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: <Globe className="w-5 h-5" />,
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Blog & News', href: '/blog', description: 'Latest insights' },
        { name: 'Support Center', href: '/support', description: 'Help & resources' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Pricing', href: '/pricing', description: 'Service pricing plans' },
    { name: 'About Us', href: '/about', description: 'Company information' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' },
    { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Service terms' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '💻' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5" />
        
        {/* Animated grid lines */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-10 right-20 w-16 h-16 border border-cyan-400/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-20 left-32 w-12 h-12 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section with Logo and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Leading the future of technology with revolutionary AI, quantum computing, and cutting-edge innovations that transform businesses and accelerate human progress.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                  <span className="max-w-xs">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <a href={contactInfo.website} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: 'Services Delivered', value: '500+', icon: <Star className="w-6 h-6" />, color: 'text-cyan-400' },
                { label: 'Happy Clients', value: '1000+', icon: <Users className="w-6 h-6" />, color: 'text-purple-400' },
                { label: 'Success Rate', value: '99.9%', icon: <Award className="w-6 h-6" />, color: 'text-green-400' },
                { label: 'ROI Average', value: '300%', icon: <Zap className="w-6 h-6" />, color: 'text-pink-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Service Categories Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-cyan-400">{section.icon}</div>
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block group"
                    >
                      <div className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Links and Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-300 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-xl flex items-center justify-center text-2xl hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center mb-16"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Future</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI breakthroughs, quantum computing advances, and cutting-edge technology innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-pink-400" />
              <span>Made with passion by Zion Tech Group</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2025 Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-cyan-300 transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-cyan-300 transition-colors">Cookies</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating action button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;