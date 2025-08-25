import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Brain, Rocket, Shield,
  Cloud, Users, Target, Lightbulb, Code, Server, Network,
  Heart, BarChart3, Globe2, Zap, Star, Award, TrendingUp
} from 'lucide-react';

const UltraFuturisticFooter2046: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Machine Learning',
      links: [
        { label: 'Quantum Neural Interfaces', href: '/quantum-neural-interface-platform-2046' },
        { label: 'Autonomous AI Enterprise', href: '/autonomous-ai-enterprise-orchestrator-2046' },
        { label: 'Quantum Emotion Intelligence', href: '/quantum-emotion-intelligence-platform-2046' },
        { label: 'Autonomous AI Research', href: '/autonomous-ai-research-assistant-2046' },
        { label: 'Quantum Creative AI', href: '/quantum-creative-ai-platform-2046' },
        { label: 'View All AI Services', href: '/ai-services' }
      ]
    },
    {
      title: 'IT & Infrastructure',
      links: [
        { label: 'Quantum Space Computing', href: '/quantum-space-computing-infrastructure-2046' },
        { label: 'Autonomous Cybersecurity', href: '/autonomous-cybersecurity-orchestrator-2046' },
        { label: 'Quantum Cloud Hybrid', href: '/quantum-cloud-hybrid-platform-2046' },
        { label: 'Autonomous DevOps', href: '/autonomous-devops-intelligence-platform-2046' },
        { label: 'Quantum Data Center', href: '/quantum-data-center-optimization-2046' },
        { label: 'View All IT Services', href: '/it-services' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      links: [
        { label: 'Quantum Sustainability', href: '/quantum-sustainability-optimizer-2046' },
        { label: 'Autonomous HR Intelligence', href: '/autonomous-hr-intelligence-suite-2046' },
        { label: 'Quantum Financial Intelligence', href: '/quantum-financial-intelligence-platform-2046' },
        { label: 'Autonomous Supply Chain', href: '/autonomous-supply-chain-orchestrator-2046' },
        { label: 'Quantum Customer Experience', href: '/quantum-customer-experience-optimizer-2046' },
        { label: 'View All Micro SAAS', href: '/micro-saas' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Mission', href: '/mission' },
        { label: 'Leadership Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Updates', href: '/news' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Support Center', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { label: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' },
    { label: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Quantum grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Floating orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Top Section with Logo and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center"
                >
                  <Brain className="w-9 h-9 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-gray-300 text-sm">2046 • Quantum AI • Neural Interfaces • Space Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Revolutionary quantum AI, neural interface, and space technology solutions that are transforming industries worldwide. 
                Join the future of digital transformation.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800/50 border border-cyan-400/30 rounded-lg flex items-center justify-center text-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with the Future
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on quantum AI, neural interfaces, and space technology innovations.
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                />
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Subscribe to Updates <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white border-b border-cyan-400/30 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-cyan-400/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</Link> | 
                <Link href="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</Link>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>Industry Leader 2046</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>500+ Clients Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-t border-cyan-400/30">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join the future with our revolutionary quantum AI, neural interface, and space technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <Link href="/demo">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    Request Demo
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2046;