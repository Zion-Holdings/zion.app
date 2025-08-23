import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2045',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-5 h-5" /> },
        { name: 'Quantum Neural Networks 2045', href: '/quantum-neural-network-platform-2045', icon: <Atom className="w-5 h-5" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: <Target className="w-5 h-5" /> },
        { name: 'Quantum Cybersecurity 2045', href: '/quantum-cybersecurity-platform-2045', icon: <Shield className="w-5 h-5" /> },
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', icon: <Rocket className="w-5 h-5" /> },
        { name: 'Autonomous Customer Success 2045', href: '/autonomous-customer-success-2045', icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045', icon: <Code className="w-5 h-5" /> },
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045', icon: <Server className="w-5 h-5" /> },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045', icon: <Network className="w-5 h-5" /> },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045', icon: <Settings className="w-5 h-5" /> },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045', icon: <Lock className="w-5 h-5" /> }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-5 h-5" /> },
        { name: 'Quantum AI Cognitive 2045', href: '/quantum-ai-cognitive-2045', icon: <Atom className="w-5 h-5" /> },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045', icon: <Zap className="w-5 h-5" /> },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045', icon: <Heart className="w-5 h-5" /> },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-2045', icon: <Globe className="w-5 h-5" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: <Target className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-5 h-5" /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-5 h-5" /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-5 h-5" /> },
        { name: 'Careers', href: '/careers', icon: <Star className="w-5 h-5" /> },
        { name: 'News & Updates', href: '/news', icon: <Globe className="w-5 h-5" /> },
        { name: 'Press Kit', href: '/press', icon: <Play className="w-5 h-5" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', color: 'from-cyan-400 to-blue-500' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup', color: 'from-purple-500 to-pink-500' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', color: 'from-gray-600 to-gray-700' }
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

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;