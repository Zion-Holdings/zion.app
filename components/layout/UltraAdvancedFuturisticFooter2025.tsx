import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Github, Youtube,
  Heart, Shield, Users, Award, TrendingUp,
  ExternalLink, ChevronRight, Globe
} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

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
      { label: 'AI & Machine Learning', href: '/services?category=ai-ml', description: 'Advanced AI solutions' },
      { label: 'Quantum Computing', href: '/services?category=quantum', description: 'Next-gen quantum tech' },
      { label: 'Space Technology', href: '/services?category=space-tech', description: 'Innovative space solutions' },
      { label: 'Cybersecurity', href: '/services?category=cybersecurity', description: 'Enterprise security' },
      { label: 'Enterprise IT', href: '/services?category=enterprise-it', description: 'Enterprise infrastructure' },
      { label: 'Micro SAAS', href: '/services?category=micro-saas', description: 'Business solutions' },
      { label: 'Advertising & Marketing', href: '/services?category=advertising-marketing', description: 'AI-powered marketing' },
      { label: 'AI Consciousness & Ethics', href: '/services?category=ai-consciousness-ethics', description: 'AI consciousness' },
      { label: 'Quantum Security', href: '/services?category=quantum-security', description: 'Quantum-resistant security' },
      { label: 'Space Colonization', href: '/services?category=space-colonization', description: 'Space technology' },
      { label: 'Autonomous Vehicles', href: '/services?category=autonomous-vehicles', description: 'AI transportation' },
      { label: 'Human Augmentation', href: '/services?category=human-augmentation', description: 'Brain-computer interfaces' },
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Healthcare & Biotech', href: '/solutions/healthcare', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions/financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions/manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E-commerce', href: '/solutions/retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions/government', description: 'Public sector' },
      { label: 'Education', href: '/solutions/education', description: 'EdTech solutions' }
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
  }
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', external: true },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', external: true },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub', external: true },
  { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube', external: true },
  { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', label: 'Facebook', external: true }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://ziontechgroup.com'
};

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
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
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    } catch {
      setSubscriptionStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 5000);
    } finally {
      setIsSubscribing(false);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50" role="contentinfo" aria-label="Zion Tech Group Footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2 xl:col-span-2">
            {/* Company Info */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <address className="not-italic hover:text-white transition-colors">
                    {contactInfo.address}
                  </address>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest insights on technology trends and company updates.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    aria-label="Email address for newsletter"
                    required
                  />
                  {email && !validateEmail(email) && (
                    <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubscribing || !validateEmail(email)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>

              {/* Subscription Status */}
              <AnimatePresence>
                {subscriptionStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
                  >
                    <p className="text-green-400 text-sm">Successfully subscribed! Welcome to our community.</p>
                  </motion.div>
                )}
                {subscriptionStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
                  >
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              {/* Mobile Expandable Section Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="lg:hidden w-full flex items-center justify-between text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-2"
                aria-expanded={expandedSections.has(section.title)}
                aria-controls={`footer-section-${section.title}`}
              >
                {section.title}
                <ChevronRight 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedSections.has(section.title) ? 'rotate-90' : ''
                  }`} 
                />
              </button>

              {/* Desktop Section Header */}
              <h3 className="hidden lg:block text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>

              {/* Section Links */}
              <div 
                id={`footer-section-${section.title}`}
                className={`lg:block space-y-3 ${
                  expandedSections.has(section.title) ? 'block' : 'hidden'
                }`}
              >
                {section.links.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-start space-x-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-1"
                      aria-label={link.description || link.label}
                    >
                      <span className="text-sm group-hover:text-cyan-400 transition-colors">
                        {link.label}
                      </span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-0.5" />
                      )}
                    </Link>
                    {link.description && (
                      <p className="text-xs text-gray-500 ml-0 mt-1 hidden lg:block">
                        {link.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright & Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p className="flex items-center space-x-1">
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <Heart className="w-3 h-3 text-red-400" />
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/privacy" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/security" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                >
                  Security
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          onClick={() => window.location.href = '/contact'}
          aria-label="Quick contact Zion Tech Group"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;