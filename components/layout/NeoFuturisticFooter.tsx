import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Phone,
  Mail,
  MapPin,
  Globe,
  Users,
  FileText,
  BarChart3,
  Cpu,
  Database,
  Shield,
  Zap,
  Brain,
  Atom,
  Eye,
  Lock,
  TrendingUp,
  Star,
  Award,
  Rocket,
  Target,
  Building,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  Calendar,
  CreditCard,
  Code,
  BookOpen,
  Activity,
  Cloud,
  Bot
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const NeoFuturisticFooter: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai' },
        { label: 'Quantum Computing', href: '/services?category=quantum' },
        { label: 'Cybersecurity', href: '/services?category=security' },
        { label: 'Cloud Solutions', href: '/services?category=cloud' },
        { label: 'Data Analytics', href: '/services?category=analytics' },
        { label: 'Automation', href: '/services?category=automation' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Resources', href: '/resources' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Support',
      items: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Help Center', href: '/help' },
        { label: 'Status Page', href: '/status' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent)]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of innovative AI, quantum computing, and micro SaaS solutions. 
                Transforming businesses with cutting-edge technology and exceptional ROI.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="py-8 border-t border-cyan-400/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">350+</div>
              <div className="text-sm text-gray-400">Real Services</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">21</div>
              <div className="text-sm text-gray-400">Free Trial</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-gray-400">AI Support</div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Policy links */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6 space-x-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 z-50 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default NeoFuturisticFooter;