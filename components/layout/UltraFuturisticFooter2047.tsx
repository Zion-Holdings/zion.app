import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, MapPin, Globe, Brain, Rocket, Atom, Shield, Cpu,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, Mail as MailIcon,
  Phone as PhoneIcon, MapPin as MapPinIcon, Clock, Users, Award, Star,
  ChevronRight, ExternalLink, Heart, Zap, Sparkles, Infinity, Target
} from 'lucide-react';

const UltraFuturisticFooter2047: React.FC = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Innovative Services 2025',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-emerald-500 to-cyan-500',
      links: [
        { name: 'AI Autonomous Ecosystem', href: '/2025-innovative-services-showcase-v2' },
        { name: 'Quantum & Emerging Tech', href: '/2025-innovative-services-showcase-v2' },
        { name: 'IT Infrastructure V2', href: '/2025-innovative-services-showcase-v2' },
        { name: 'Space Technology', href: '/space-technology' }
      ]
    },
    {
      title: 'Revolutionary Services 2046',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform-2046' },
        { name: 'Quantum AI Neural Networks', href: '/quantum-ai-neural-network-platform-2046' },
        { name: 'Autonomous Business Intelligence', href: '/autonomous-ai-business-intelligence-platform-2046' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-intelligence-platform-2046' }
      ]
    },
    {
      title: 'Core Solutions',
      icon: <Target className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-500',
      links: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Business Solutions', href: '/business-solutions' }
      ]
    },
    {
      title: 'Company',
      icon: <Users className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const stats = [
    { number: '5000+', label: 'Innovative Services', icon: Star },
    { number: '99.99%', label: 'Uptime Guarantee', icon: Zap },
    { number: '24/7', label: 'AI Intelligence', icon: Brain },
    { number: '300+', label: 'Countries Served', icon: Globe }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
      </div>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                    <div className="text-sm text-cyan-400">Innovating the Future</div>
                  </div>
                </Link>

                <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                  Pioneering the future of technology with revolutionary AI, quantum computing, and cutting-edge IT infrastructure solutions that transform businesses and advance humanity.
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <MailIcon className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <PhoneIcon className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-5 h-5 text-cyan-400" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 group hover:translate-x-1"
                      >
                        <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm group-hover:text-cyan-400 transition-colors duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Ahead with Innovation
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights on AI, quantum computing, and cutting-edge technology solutions delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  required
                />
              </div>
              <button 
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-1 flex items-center justify-center lg:justify-start">
                <span>Pioneering the future of technology since 2025</span>
                <Heart className="w-4 h-4 text-red-400 mx-2" />
                <span>Made with AI & Innovation</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-gray-800/50 border border-cyan-500/20 text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:border-cyan-500/50 hover:bg-gray-700/50`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/status" className="hover:text-cyan-400 transition-colors duration-200">
                System Status
              </Link>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-cyan-400 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-32 w-1 h-1 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity as any,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2047;