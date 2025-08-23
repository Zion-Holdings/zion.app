import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play, FileText, ArrowUp, HelpCircle
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
      title: 'Revolutionary Services 2045',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Neural Networks 2045', href: '/quantum-neural-network-platform-2045', icon: <Atom className="w-4 h-4" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: <Target className="w-4 h-4" /> },
        { name: 'Quantum Cybersecurity 2045', href: '/quantum-cybersecurity-platform-2045', icon: <Shield className="w-4 h-4" /> },
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Autonomous Customer Success 2045', href: '/autonomous-customer-success-2045', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045', icon: <Code className="w-4 h-4" /> },
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045', icon: <Server className="w-4 h-4" /> },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045', icon: <Network className="w-4 h-4" /> },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045', icon: <Settings className="w-4 h-4" /> },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045', icon: <Lock className="w-4 h-4" /> }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum AI Cognitive 2045', href: '/quantum-ai-cognitive-2045', icon: <Atom className="w-4 h-4" /> },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045', icon: <Star className="w-4 h-4" /> },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045', icon: <Heart className="w-4 h-4" /> },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-2045', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Target className="w-4 h-4" /> },
        { name: 'News & Blog', href: '/blog', icon: <Star className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> }
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden" role="contentinfo">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm">Revolutionary Technology 2045</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <address className="not-italic">
                    {contactInfo.address}
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUp} className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                        <span className="hover:underline">{link.name}</span>
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
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  aria-label="Email address for newsletter"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center lg:text-left">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">Pioneering the future of technology since 2025</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-900/50 border border-cyan-500/20 text-gray-400 transition-all duration-200 hover:scale-110 hover:border-cyan-500/50 hover:text-cyan-400"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
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
            repeat: Infinity,
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
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2045;