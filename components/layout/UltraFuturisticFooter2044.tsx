import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ArrowRight, Globe, Shield, Rocket, Brain, Atom, Cpu,
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Heart, Star,
  ChevronUp, ExternalLink, Download, Calendar, Users, Award
} from 'lucide-react';

const UltraFuturisticFooter2044: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const footerSections = useMemo(() => [
    {
      id: 'services',
      title: 'Revolutionary Services 2044',
      description: 'Future-defining technology solutions',
      links: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2044', featured: true },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform-2044', featured: true },
        { name: 'Autonomous Business Intelligence', href: '/ai-autonomous-business-intelligence-2044' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform-2044' },
        { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2044' },
        { name: 'Autonomous Customer Success', href: '/autonomous-customer-success-2044' }
      ]
    },
    {
      id: 'technology',
      title: 'Technology Solutions',
      description: 'Cutting-edge infrastructure and platforms',
      links: [
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2044' },
        { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform-2044' },
        { name: 'Quantum Data Center Management', href: '/quantum-data-center-management-2044' },
        { name: 'Autonomous Network Management', href: '/autonomous-network-management-2044' },
        { name: 'Quantum Storage Solutions', href: '/quantum-storage-solutions-2044' },
        { name: 'Autonomous IT Service Management', href: '/autonomous-it-service-management-2044' }
      ]
    },
    {
      id: 'ai',
      title: 'AI & Consciousness',
      description: 'Advanced AI and consciousness solutions',
      links: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2044' },
        { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive-2044' },
        { name: 'Autonomous AI Research', href: '/autonomous-ai-research-2044' },
        { name: 'Emotional AI Intelligence', href: '/emotional-ai-intelligence-2044' },
        { name: 'Quantum AI Metaverse', href: '/quantum-ai-metaverse-2044' },
        { name: 'Autonomous AI Business Intelligence', href: '/autonomous-ai-business-intelligence-2044' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      description: 'About Zion Tech Group',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Leadership Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Press Kit', href: '/press' }
      ]
    }
  ], []);

  const socialLinks = useMemo(() => [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'from-blue-500 to-blue-600', ariaLabel: 'Follow us on Facebook' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'from-cyan-400 to-blue-500', ariaLabel: 'Follow us on Twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'from-blue-600 to-blue-700', ariaLabel: 'Follow us on LinkedIn' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'from-purple-500 to-pink-500', ariaLabel: 'Follow us on Instagram' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600', ariaLabel: 'Subscribe to our YouTube channel' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'from-gray-600 to-gray-700', ariaLabel: 'Check out our GitHub repositories' }
  ], []);

  const quickActions = useMemo(() => [
    { name: 'Get Quote', href: '/quote', icon: Download, description: 'Request a custom quote' },
    { name: 'Schedule Demo', href: '/demo', icon: Calendar, description: 'Book a personalized demo' },
    { name: 'Join Team', href: '/careers', icon: Users, description: 'Explore career opportunities' },
    { name: 'View Awards', href: '/awards', icon: Award, description: 'See our achievements' }
  ], []);

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  }, []);

  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show back to top button when scrolled
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50" role="contentinfo">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-blue-900/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href="tel:+1-800-ZION-TECH" 
                  className="hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Call us at 1-800-ZION-TECH"
                >
                  1-800-ZION-TECH
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:info@ziontechgroup.com" 
                  className="hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Email us at info@ziontechgroup.com"
                >
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <action.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {action.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {action.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.id} className="space-y-4">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full text-left lg:hidden"
                aria-expanded={expandedSections.has(section.id)}
                aria-controls={`footer-section-${section.id}`}
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{section.title}</h3>
                  <p className="text-sm text-gray-400">{section.description}</p>
                </div>
                <ChevronUp className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  expandedSections.has(section.id) ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className="hidden lg:block">
                <h3 className="text-lg font-semibold text-white mb-1">{section.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{section.description}</p>
              </div>

              <AnimatePresence>
                {(expandedSections.has(section.id) || (isClient && window.innerWidth >= 1024)) && (
                  <motion.div
                    id={`footer-section-${section.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    {section.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`block text-gray-400 hover:text-white transition-colors duration-200 text-sm ${
                          link.featured ? 'font-medium text-cyan-300 hover:text-cyan-200' : ''
                        }`}
                      >
                        {link.name}
                        {link.featured && (
                          <span className="ml-2 inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800/50 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Stay Ahead of the Future
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on revolutionary 2044 technology and AI consciousness evolution
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Made with <Heart className="w-4 h-4 inline text-red-400" /> for the future of technology
            </p>
            <p className="mt-1">
              <Star className="w-4 h-4 inline text-yellow-400" /> Revolutionary 2044 Technology Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 z-50"
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default UltraFuturisticFooter2044;