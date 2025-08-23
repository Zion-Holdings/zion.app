import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Shield, Rocket, Brain, Atom,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  Users, Lock, Cloud, Code, Server, Database, Network, Settings, Target, Play,
  ArrowUpRight, Sparkles, Award, BookOpen, FileText, Video, MessageCircle, Calendar,
  ArrowRight, CheckCircle, ShieldCheck, Zap as ZapIcon2, Globe2, Cpu as CpuIcon,
  Truck, BarChart3
} from 'lucide-react';

const UltraFuturisticFooter2047: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2047',
      description: 'Future-defining technology solutions',
      links: [
        { name: 'AI Consciousness Evolution 2047', href: '/ai-consciousness-evolution-2047', icon: Brain, featured: true },
        { name: 'Quantum Neural Networks 2047', href: '/quantum-neural-network-platform-2047', icon: Atom, featured: true },
        { name: 'AI Autonomous Business Intelligence 2047', href: '/ai-autonomous-business-intelligence-2047', icon: Target, featured: true },
        { name: 'Quantum Cybersecurity 2047', href: '/quantum-cybersecurity-platform-2047', icon: Shield, featured: true },
        { name: 'Space Resource Intelligence 2047', href: '/space-resource-intelligence-2047', icon: Rocket, featured: true },
        { name: 'Autonomous Customer Success 2047', href: '/autonomous-customer-success-2047', icon: Users, featured: true },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation-2025', icon: Users },
        { name: 'Intelligent Content Marketing', href: '/intelligent-content-marketing-suite-2025', icon: FileText },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform-2025', icon: Target },
        { name: 'Autonomous Supply Chain', href: '/autonomous-supply-chain-intelligence-2025', icon: Truck },
        { name: 'Quantum Healthcare Analytics', href: '/quantum-healthcare-analytics-platform-2025', icon: Heart },
        { name: 'Autonomous Sales Intelligence', href: '/autonomous-sales-intelligence-2025', icon: Target }
      ]
    },
    {
      title: 'Technology Solutions',
      description: 'Advanced technology infrastructure',
      links: [
        { name: 'Quantum Cloud Infrastructure 2047', href: '/quantum-cloud-infrastructure-2047', icon: Cloud, featured: true },
        { name: 'Autonomous DevOps Platform 2047', href: '/autonomous-devops-platform-2047', icon: Code, featured: true },
        { name: 'Quantum Data Center Management 2047', href: '/quantum-data-center-management-2047', icon: Server, featured: true },
        { name: 'Autonomous Network Management 2047', href: '/autonomous-network-management-2047', icon: Network, featured: true },
        { name: 'Autonomous IT Service Management 2047', href: '/autonomous-it-service-management-2047', icon: Settings, featured: true },
        { name: 'Autonomous Security Operations Center 2047', href: '/autonomous-security-operations-center-2047', icon: Lock, featured: true },
        { name: 'Zero Trust Quantum Network', href: '/zero-trust-quantum-network', icon: Shield },
        { name: 'Autonomous Edge Computing Network', href: '/autonomous-edge-computing-network', icon: CpuIcon },
        { name: 'AI Autonomous Business Orchestrator', href: '/ai-autonomous-business-orchestrator', icon: Brain },
        { name: 'Quantum AI Cybersecurity Sentinel', href: '/quantum-ai-cybersecurity-sentinel', icon: Shield },
        { name: 'Quantum Cloud Hybrid Platform', href: '/quantum-cloud-hybrid-platform', icon: Cloud },
        { name: 'Autonomous Content Creation Suite', href: '/autonomous-content-creation-suite', icon: FileText }
      ]
    },
    {
      title: 'AI & Consciousness',
      description: 'Advanced AI consciousness systems',
      links: [
        { name: 'AI Consciousness Overview', href: '/ai-consciousness', icon: Brain, featured: true },
        { name: 'AI Autonomous Business Orchestrator', href: '/ai-autonomous-business-orchestrator', icon: Target, featured: true },
        { name: 'Quantum AI Cybersecurity Sentinel', href: '/quantum-ai-cybersecurity-sentinel', icon: Shield, featured: true },
        { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', icon: Atom, featured: true },
        { name: 'Autonomous Content Creation Suite', href: '/autonomous-content-creation-suite', icon: FileText, featured: true },
        { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', icon: Heart, featured: true },
        { name: 'Consciousness-Based Learning Platform', href: '/consciousness-based-learning-platform', icon: BookOpen },
        { name: 'AI Autonomous Business Intelligence', href: '/ai-autonomous-business-intelligence', icon: BarChart3 },
        { name: 'Autonomous Customer Success', href: '/autonomous-customer-success', icon: Users },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation-2025', icon: Users },
        { name: 'Intelligent Content Marketing Suite', href: '/intelligent-content-marketing-suite-2025', icon: FileText },
        { name: 'Autonomous Sales Intelligence', href: '/autonomous-sales-intelligence-2025', icon: Target }
      ]
    },
    {
      title: 'Company & Resources',
      description: 'About Zion Tech Group and resources',
      links: [
        { name: 'About Us', href: '/about', icon: Users, featured: true },
        { name: 'Our Mission', href: '/mission', icon: Star, featured: true },
        { name: 'Leadership Team', href: '/team', icon: Users, featured: true },
        { name: 'Careers', href: '/careers', icon: Target, featured: true },
        { name: 'News & Updates', href: '/news', icon: FileText, featured: true },
        { name: 'Press Kit', href: '/press', icon: Database, featured: true },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Training', href: '/training', icon: BookOpen },
        { name: 'Blog', href: '/blog', icon: MessageCircle },
        { name: 'Events', href: '/events', icon: Calendar },
        { name: 'Contact Us', href: '/contact', icon: Mail }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'from-cyan-400 to-blue-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'from-purple-500 to-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'from-gray-600 to-gray-700' }
  ];

  const stats = [
    { number: "5000+", label: "Innovative Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
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
    <footer className="bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Stats Section */}
        <section className="py-16 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 backdrop-blur-sm group-hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{section.description}</p>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`group flex items-start space-x-3 transition-all duration-200 ${
                        link.featured 
                          ? 'p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                          : 'hover:text-cyan-400'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${
                        link.featured 
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                          : 'bg-gray-700'
                      }`}>
                        <link.icon className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium transition-colors duration-200 ${
                            link.featured ? 'text-white' : 'text-gray-300 group-hover:text-cyan-400'
                          }`}>
                            {link.name}
                          </span>
                          {link.featured && (
                            <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact & Social Section */}
        <section className="py-12 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                    <div className="text-sm text-gray-400">Revolutionary Technology 2047</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <section className="py-6 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. Revolutionary Technology 2047.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 z-50"
      >
        <ArrowUpRight className="w-5 h-5 text-white rotate-[-45deg]" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2047;