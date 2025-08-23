import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Github, Youtube,
  Heart, Shield, Users, Award, TrendingUp,
  ExternalLink, ChevronRight, Globe, ArrowUp
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
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Healthcare & Biotech', href: '/solutions/healthcare', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions/financial', description: 'Fintech solutions' },
      { label: 'Government & Defense', href: '/solutions/government', description: 'Public sector solutions' },
      { label: 'Retail & E-commerce', href: '/solutions/retail', description: 'Digital commerce' },
      { label: 'Manufacturing', href: '/solutions/manufacturing', description: 'Industry 4.0' },
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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    setSubscriptionStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden" role="contentinfo">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2 xl:col-span-2">
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center space-x-2 group" aria-label="Zion Tech Group - Home">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                    <Shield className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                    Zion Tech Group
                  </span>
                </Link>
                
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-md">
                  Pioneering the future of technology with quantum computing, autonomous AI, and revolutionary solutions that drive business transformation.
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      aria-label="Email address for newsletter subscription"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={isSubscribing ? 'Subscribing to newsletter...' : 'Subscribe to newsletter'}
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  
                  {/* Subscription Status */}
                  <AnimatePresence>
                    {subscriptionStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-green-400 text-sm text-center"
                        role="status"
                        aria-live="polite"
                      >
                        Successfully subscribed! Welcome to our community.
                      </motion.div>
                    )}
                    {subscriptionStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-red-400 text-sm text-center"
                        role="status"
                        aria-live="polite"
                      >
                        Something went wrong. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={`Call us at ${contactInfo.phone}`}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={`Email us at ${contactInfo.email}`}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <address className="text-gray-400 not-italic">
                      {contactInfo.address}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <button
                  onClick={() => toggleSection(section.title)}
                  onKeyDown={(e) => handleKeyDown(e, () => toggleSection(section.title))}
                  className="flex items-center justify-between w-full text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg lg:hidden"
                  aria-expanded={expandedSections.has(section.title)}
                  aria-controls={`footer-section-${section.title}`}
                >
                  {section.title}
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSections.has(section.title) ? 'rotate-90' : ''
                    }`} 
                    aria-hidden="true" 
                  />
                </button>
                
                <h3 className="text-lg font-semibold text-white hidden lg:block">{section.title}</h3>
                
                <div 
                  id={`footer-section-${section.title}`}
                  className={`space-y-3 ${
                    expandedSections.has(section.title) ? 'block' : 'hidden lg:block'
                  }`}
                >
                  {section.links.map((link) => (
                    <div key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-start space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        aria-label={link.description ? `${link.label} - ${link.description}` : link.label}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.label}
                        </span>
                        {link.external && (
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" aria-hidden="true" />
                        )}
                      </Link>
                      {link.description && (
                        <p className="text-sm text-gray-500 mt-1 ml-4">{link.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright & Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
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
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        onKeyDown={(e) => handleKeyDown(e, scrollToTop)}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 z-40"
        aria-label="Scroll to top of page"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" aria-hidden="true" />
      </motion.button>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;