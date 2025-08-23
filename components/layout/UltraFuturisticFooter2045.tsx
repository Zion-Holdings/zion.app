import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Lock, Phone, Mail, MapPin, ArrowRight, 
  Star, Users, Award, Brain, Atom, Rocket, Shield, 
  Cloud, Database, Code, Server, Settings, Target,
  Facebook, Twitter, Instagram, Linkedin, Youtube, Github,
  Heart, Sparkles, BarChart3, FileText, Handshake, TrendingUp,
  Monitor
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: <Atom className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/space-tech', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Metaverse & VR', href: '/metaverse-development', icon: <Globe className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cloud & Infrastructure', href: '/cloud-platform', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Data & Analytics', href: '/data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'DevOps & Automation', href: '/devops-automation', icon: <Settings className="w-4 h-4" /> },
        { name: 'Micro SAAS Solutions', href: '/comprehensive-2025-services-showcase', icon: <Code className="w-4 h-4" /> },
        { name: 'View All Services', href: '/services', icon: <ArrowRight className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Neural Ecosystem', href: '/quantum-neural-ecosystem-2045', icon: <Atom className="w-4 h-4" /> },
        { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2045', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Metaverse Development Studio', href: '/metaverse-development-studio-pro-2045', icon: <Globe className="w-4 h-4" /> },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform-2045', icon: <Shield className="w-4 h-4" /> },
        { name: 'Revolutionary 2045 Services', href: '/revolutionary-2045-futuristic-services-showcase', icon: <Sparkles className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Healthcare & Biotech', href: '/healthcare-ai-solutions', icon: <Heart className="w-4 h-4" /> },
        { name: 'Financial Services', href: '/financial-solutions', icon: <Award className="w-4 h-4" /> },
        { name: 'Manufacturing', href: '/manufacturing-ai-solutions', icon: <Settings className="w-4 h-4" /> },
        { name: 'Retail & E-commerce', href: '/retail-technology-solutions', icon: <Target className="w-4 h-4" /> },
        { name: 'Education', href: '/education-technology-solutions', icon: <Users className="w-4 h-4" /> },
        { name: 'Government', href: '/government-technology-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: 'Energy & Utilities', href: '/energy-utilities-solutions', icon: <Zap className="w-4 h-4" /> },
        { name: 'Transportation', href: '/transportation-solutions', icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> },
        { name: 'API Reference', href: '/api-docs', icon: <Server className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Blog', href: '/blog', icon: <Globe className="w-4 h-4" /> },
        { name: 'Webinars', href: '/webinars', icon: <Monitor className="w-4 h-4" /> },
        { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
        { name: 'Training', href: '/training', icon: <Users className="w-4 h-4" /> },
        { name: 'Support', href: '/support', icon: <Award className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Award className="w-4 h-4" /> },
        { name: 'Partners', href: '/partners', icon: <Handshake className="w-4 h-4" /> },
        { name: 'Investors', href: '/investors', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'News', href: '/news', icon: <Globe className="w-4 h-4" /> },
        { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
        { name: 'Privacy Policy', href: '/privacy', icon: <Lock className="w-4 h-4" /> },
        { name: 'Terms of Service', href: '/terms', icon: <FileText className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-500' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={fadeInUp}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Future Technology Solutions</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Pioneering the future with revolutionary AI consciousness, quantum computing, and space technology solutions that transform businesses and propel humanity forward.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-gray-800/50 rounded-lg text-gray-400 transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-transparent ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                          {link.icon}
                        </span>
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Future
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest insights on AI consciousness, quantum computing, and space technology breakthroughs.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">for the future</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link
          href="/contact"
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-200 hover:scale-110"
        >
          <ArrowRight className="w-6 h-6" />
        </Link>
      </motion.div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;