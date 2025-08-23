import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Users, 
  Award, Brain, Atom, Rocket, Shield, Cloud, Database,
  Code, Server, Zap, Palette, Cpu, BarChart3, Settings,
  Target, Linkedin, Twitter, Facebook, Instagram, Youtube,
  Github, ExternalLink
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Featured Revolutionary Services',
      items: [
        { label: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2040', icon: <Brain className="w-4 h-4" />, featured: true },
        { label: 'Quantum Neural Ecosystem', href: '/quantum-neural-ecosystem-2040', icon: <Atom className="w-4 h-4" />, featured: true },
        { label: 'Space Resource Intelligence', href: '/space-resource-intelligence-2040', icon: <Rocket className="w-4 h-4" />, featured: true },
        { label: 'Zero Trust Security', href: '/zero-trust-network-architecture', icon: <Shield className="w-4 h-4" />, featured: true },
        { label: 'Multi-Cloud Orchestration', href: '/multi-cloud-orchestration-platform', icon: <Cloud className="w-4 h-4" />, featured: true }
      ]
    },
    {
      title: 'AI & Consciousness',
      items: [
        { label: 'AI Autonomous Code Review', href: '/ai-autonomous-code-review', icon: <Code className="w-4 h-4" /> },
        { label: 'AI-Powered Content Generation', href: '/ai-content-generation-platform', icon: <Brain className="w-4 h-4" /> },
        { label: 'AI Customer Intelligence', href: '/ai-customer-intelligence-platform', icon: <Users className="w-4 h-4" /> },
        { label: 'AI-Powered Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: <Target className="w-4 h-4" /> },
        { label: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization', icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      items: [
        { label: 'Quantum Financial Trading', href: '/quantum-financial-trading', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'Quantum Cryptography', href: '/quantum-cryptography', icon: <Shield className="w-4 h-4" /> },
        { label: 'Quantum Machine Learning', href: '/quantum-machine-learning', icon: <Brain className="w-4 h-4" /> },
        { label: 'Space Technology Solutions', href: '/space-technology-solutions', icon: <Rocket className="w-4 h-4" /> },
        { label: 'Advanced Robotics', href: '/advanced-robotics-solutions', icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Enterprise Solutions',
      items: [
        { label: 'Enterprise IT Consulting', href: '/enterprise-it-consulting', icon: <Server className="w-4 h-4" /> },
        { label: 'Digital Transformation', href: '/digital-transformation', icon: <Zap className="w-4 h-4" /> },
        { label: 'Cloud Migration', href: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
        { label: 'Data Analytics Platform', href: '/data-analytics-platform', icon: <Database className="w-4 h-4" /> },
        { label: 'DevOps Automation', href: '/devops-automation', icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { label: 'Case Studies', href: '/case-studies', icon: <Target className="w-4 h-4" /> },
        { label: 'Market Pricing', href: '/market-pricing', icon: <BarChart3 className="w-4 h-4" /> },
        { label: 'Blog & Insights', href: '/blog', icon: <Code className="w-4 h-4" /> },
        { label: 'Documentation', href: '/docs', icon: <Database className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
    { label: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" /> },
    { label: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" /> },
    { label: 'YouTube', href: '#', icon: <Youtube className="w-5 h-5" /> },
    { label: 'GitHub', href: '#', icon: <Github className="w-5 h-5" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-cyan-500/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-16">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                {section.title === 'Featured Revolutionary Services' && <Star className="w-5 h-5 text-yellow-400" />}
                {section.title === 'AI & Consciousness' && <Brain className="w-5 h-5 text-purple-400" />}
                {section.title === 'Quantum & Emerging Tech' && <Atom className="w-5 h-5 text-cyan-400" />}
                {section.title === 'Enterprise Solutions' && <Server className="w-5 h-5 text-blue-400" />}
                {section.title === 'Company & Resources' && <Users className="w-5 h-5 text-green-400" />}
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
                        {item.label}
                      </span>
                      {item.featured && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                          Featured
                        </span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact & CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our innovative services can drive your success and propel you into the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="flex items-center justify-center gap-3 text-cyan-400 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-200">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Mobile</div>
                <div className="font-semibold">{contactInfo.mobile}</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 text-purple-400 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-semibold">{contactInfo.email}</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 text-pink-400 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors duration-200">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Address</div>
                <div className="font-semibold text-sm">{contactInfo.address}</div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
            >
              Request Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Company Info */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400">2040 Future Technology</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-gray-800">
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;