import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Facebook,
  Instagram,
  Globe,
  ArrowUp,
  Heart,
  Shield,
  Award,
  Users,
  Building,
  Rocket,
  Brain,
  Atom,
  Cloud,
  Target,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  MessageCircle,
  FileText,
  Video,
  BookOpen,
  HelpCircle,
  Settings,
  BarChart3,
  Cpu,
  Database,
  Lock,
  Star
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about', icon: Building },
        { label: 'Our Team', href: '/team', icon: Users },
        { label: 'Careers', href: '/careers', icon: Award },
        { label: 'News & Updates', href: '/news', icon: FileText },
        { label: 'Press Kit', href: '/press', icon: Globe }
      ]
    },
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
        { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: Shield },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud },
        { label: 'Business Intelligence', href: '/services?category=bi', icon: BarChart3 }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { label: 'Startups', href: '/solutions/startups', icon: Rocket },
        { label: 'Government', href: '/solutions/government', icon: Shield },
        { label: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { label: 'Financial Services', href: '/solutions/financial', icon: Target }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText },
        { label: 'Blog', href: '/blog', icon: BookOpen },
        { label: 'Webinars', href: '/webinars', icon: Video },
        { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { label: 'API Reference', href: '/api', icon: Cpu }
      ]
    },
    {
      title: 'Support',
      items: [
        { label: 'Help Center', href: '/support', icon: HelpCircle },
        { label: 'Contact Support', href: '/contact', icon: MessageCircle },
        { label: 'Status Page', href: '/status', icon: BarChart3 },
        { label: 'Training', href: '/training', icon: BookOpen },
        { label: 'Community', href: '/community', icon: Users }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github, color: 'hover:text-gray-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management', icon: Shield },
    { name: 'SOC 2 Type II', description: 'Security & Availability Controls', icon: Lock },
    { name: 'GDPR Compliant', description: 'Data Protection Regulation', icon: Database },
    { name: 'FedRAMP Ready', description: 'Federal Risk Authorization', icon: Award }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-32 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section with Logo and Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-sm text-gray-400">Revolutionary Technology 2045</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>contact@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-300">
                  Get the latest insights on revolutionary technology and industry trends.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                    required
                    aria-label="Email address for newsletter"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  Subscribe to Newsletter
                </motion.button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Successfully subscribed to newsletter!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-gray-800/50">
                <p className="text-sm text-gray-400 mb-3">Trusted by industry leaders</p>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center space-x-2 text-xs text-gray-400">
                      <cert.icon className="w-3 h-3 text-cyan-400" />
                      <span>{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-300 transition-colors duration-300"
                        onMouseEnter={() => setActiveSection(item.label)}
                        onMouseLeave={() => setActiveSection(null)}
                      >
                        <item.icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-sm">{item.label}</span>
                        <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              {/* Copyright and Links */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span>© 2024 Zion Tech Group. All rights reserved.</span>
                  <Heart className="w-4 h-4 text-red-400" />
                </div>
                <div className="flex items-center space-x-6">
                  <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-cyan-300 transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="hover:text-cyan-300 transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 ${social.color} hover:bg-gray-700/50 transition-all duration-300`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2045;