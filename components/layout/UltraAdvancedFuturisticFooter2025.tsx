import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Github, Youtube,
  Heart, Zap, Sparkles, Globe, ArrowRight,
  ExternalLink, ChevronRight, CheckCircle, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'AI & Machine Learning', href: '/ai-services', description: 'Advanced AI solutions' },
      { label: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen quantum tech' },
      { label: 'Space Technology', href: '/space-tech', description: 'Innovative space solutions' },
      { label: 'Cybersecurity', href: '/cybersecurity', description: 'Enterprise security' },
      { label: 'Cloud Solutions', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Leadership', href: '/about#leadership', description: 'Meet our team' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'News & Updates', href: '/news', description: 'Latest company news' },
      { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'Whitepapers', href: '/white-papers', description: 'In-depth research' },
      { label: 'Webinars', href: '/webinars', description: 'Educational content' },
      { label: 'Documentation', href: '/docs', description: 'Technical guides' },
      { label: 'API Reference', href: '/api-documentation', description: 'Developer resources' },
      { label: 'Support', href: '/support', description: 'Help & assistance' }
    ]
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Finance', href: '/financial-solutions', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/manufacturing-ai-solutions', description: 'Industry 4.0' },
      { label: 'Retail', href: '/retail-technology-solutions', description: 'E-commerce tech' },
      { label: 'Government', href: '/government-technology-solutions', description: 'Public sector' },
      { label: 'Education', href: '/education-technology-solutions', description: 'EdTech solutions' }
    ]
  }
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true, color: 'hover:text-blue-400' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true, color: 'hover:text-sky-400' },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub', external: true, color: 'hover:text-gray-300' },
  { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube', external: true, color: 'hover:text-red-400' },
  { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', label: 'Facebook', external: true, color: 'hover:text-blue-500' }
];

const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'contact@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://ziontechgroup.com'
};

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = useCallback((title: string) => {
    setExpandedSections(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(title)) {
        newExpanded.delete(title);
      } else {
        newExpanded.add(title);
      }
      return newExpanded;
    });
  }, []);

  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    setSubscriptionStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to subscribe
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 5000);
    } catch {
      setSubscriptionStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 5000);
    } finally {
      setIsSubscribing(false);
    }
  }, [email]);

  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingButtonVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }
    },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-md border-t border-gray-700/50 relative overflow-hidden" 
      role="contentinfo" 
      aria-label="Zion Tech Group Footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info & Newsletter */}
          <motion.div className="lg:col-span-2 xl:col-span-2" variants={itemVariants}>
            {/* Company Info */}
            <div className="mb-8">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur opacity-30 animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-xs text-gray-400">Future Technology Solutions</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential.
              </p>
              
              {/* Enhanced Contact Info */}
              <div className="space-y-4">
                <motion.a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">{contactInfo.phone}</span>
                </motion.a>
                
                <motion.a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">{contactInfo.email}</span>
                </motion.a>
                
                <motion.div 
                  className="flex items-start space-x-3 text-gray-400 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <address className="not-italic hover:text-white transition-colors duration-300 leading-relaxed">
                    {contactInfo.address}
                  </address>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Newsletter Signup */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-600/50 backdrop-blur-sm shadow-xl"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Get the latest insights on technology trends, company updates, and exclusive content delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 focus:bg-gray-700/70"
                    aria-label="Email address for newsletter subscription"
                    required
                  />
                  {email && !validateEmail(email) && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      Please enter a valid email address
                    </motion.p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubscribing || !validateEmail(email)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2"
                  aria-label="Subscribe to newsletter"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Enhanced Subscription Status */}
              <AnimatePresence>
                {subscriptionStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <p className="text-green-400 text-sm font-medium">Successfully subscribed! Welcome to our community.</p>
                    </div>
                  </motion.div>
                )}
                {subscriptionStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} className="space-y-4" variants={itemVariants}>
              {/* Mobile Expandable Section Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="lg:hidden w-full flex items-center justify-between text-left text-lg font-semibold text-white hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-xl p-3 hover:bg-gray-800/30"
                aria-expanded={expandedSections.has(section.title)}
                aria-controls={`footer-section-${section.title}`}
              >
                {section.title}
                <ChevronRight 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedSections.has(section.title) ? 'rotate-90' : ''
                  }`} 
                />
              </button>

              {/* Desktop Section Header */}
              <h3 className="hidden lg:block text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                {section.title}
              </h3>

              {/* Section Links */}
              <div 
                id={`footer-section-${section.title}`}
                className={`lg:block space-y-3 ${
                  expandedSections.has(section.title) ? 'block' : 'hidden'
                }`}
              >
                {section.links.map((link, linkIndex) => (
                  <motion.div 
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-start space-x-2 text-gray-400 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-2 hover:bg-gray-800/30"
                      aria-label={link.description || link.label}
                    >
                      <span className="text-sm group-hover:text-cyan-400 transition-colors duration-300">
                        {link.label}
                      </span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 mt-0.5" />
                      )}
                    </Link>
                    {link.description && (
                      <p className="text-xs text-gray-500 ml-0 mt-1 hidden lg:block leading-relaxed">
                        {link.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-700/50"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Copyright & Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <motion.p 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              </motion.p>
              <div className="flex items-center space-x-6">
                {[
                  { href: '/privacy', label: 'Privacy Policy' },
                  { href: '/terms', label: 'Terms of Service' },
                  { href: '/security', label: 'Security' }
                ].map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${social.color}`}
                  aria-label={`Follow us on ${social.label}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Contact Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-40"
        variants={floatingButtonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.button
          className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          onClick={() => window.location.href = '/contact'}
          aria-label="Quick contact Zion Tech Group"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
        
        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none"
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;