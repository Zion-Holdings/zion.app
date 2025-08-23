import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Lock, Phone, Mail, MapPin, ArrowRight, 
  Star, Users, Award, Brain, Atom, Rocket, Shield, 
  Cloud, Database, Code, Server, Settings, Target,
  Facebook, Twitter, Instagram, Linkedin, Youtube, Github,
  Heart, Sparkles, BarChart3, FileText, Handshake, TrendingUp,
  Monitor, Building, Factory, ShoppingCart, GraduationCap, DollarSign, Car
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
      title: 'Core Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
        { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: <Code className="w-4 h-4" /> },
        { name: 'IT Infrastructure', href: '/it-infrastructure', icon: <Server className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: <Atom className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/space-tech', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Metaverse & VR', href: '/metaverse-development', icon: <Globe className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cloud & Infrastructure', href: '/cloud-platform', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Data & Analytics', href: '/data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'DevOps & Automation', href: '/devops-automation', icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Advanced Solutions',
      links: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Neural Ecosystem', href: '/quantum-neural-ecosystem-2045', icon: <Atom className="w-4 h-4" /> },
        { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2045', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Metaverse Development Studio', href: '/metaverse-development-studio-pro-2045', icon: <Globe className="w-4 h-4" /> },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform-2045', icon: <Shield className="w-4 h-4" /> },
        { name: 'Revolutionary 2045 Services', href: '/revolutionary-2045-futuristic-services-showcase', icon: <Sparkles className="w-4 h-4" /> },
        { name: 'Innovative 2040 Services', href: '/innovative-2040-futuristic-services-showcase', icon: <Target className="w-4 h-4" /> },
        { name: 'Ultimate 2025 Services', href: '/ultimate-2025-micro-saas-showcase', icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Healthcare & Biotech', href: '/healthcare-ai-solutions', icon: <Heart className="w-4 h-4" /> },
        { name: 'Financial Services', href: '/financial-solutions', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Manufacturing', href: '/manufacturing-ai-solutions', icon: <Factory className="w-4 h-4" /> },
        { name: 'Retail & E-commerce', href: '/retail-technology-solutions', icon: <ShoppingCart className="w-4 h-4" /> },
        { name: 'Education', href: '/education-technology-solutions', icon: <GraduationCap className="w-4 h-4" /> },
        { name: 'Government', href: '/government-technology-solutions', icon: <Building className="w-4 h-4" /> },
        { name: 'Energy & Utilities', href: '/energy-utilities-solutions', icon: <Zap className="w-4 h-4" /> },
        { name: 'Transportation', href: '/transportation-solutions', icon: <Car className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Resources & Support',
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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium">Innovation 2045</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative micro SAAS solutions that transform businesses and industries.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp} className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  <span className="w-1 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-200 group hover:translate-x-1"
                      >
                        <div className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </div>
                        <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-cyan-500/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead with Innovation
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI, quantum computing, and cutting-edge technology solutions delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">Pioneering the future of technology since 2025</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-lg bg-gray-900/50 border border-cyan-500/20 text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:border-cyan-500/50`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/status" className="hover:text-cyan-400 transition-colors duration-200">
                  System Status
                </Link>
                <Link href="/sitemap" className="hover:text-cyan-400 transition-colors duration-200">
                  Sitemap
                </Link>
                <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;