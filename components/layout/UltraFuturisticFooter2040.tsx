import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight, ExternalLink, ChevronDown, ChevronUp
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040', featured: true },
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', featured: true },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040', featured: true },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', featured: true },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', featured: true },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', featured: true },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Evolution 2040', href: '/ai-consciousness-evolution-2040' },
      { name: 'AI Emotional Intelligence 2040', href: '/ai-emotional-intelligence-2040' },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041' },
      { name: 'AI Content Personalization 2041', href: '/ai-content-personalization-2041' },
      { name: 'AI Ethics & Governance 2041', href: '/ai-ethics-governance-2041' },
      { name: 'AI Autonomous Ecosystem 2041', href: '/ai-autonomous-ecosystem-2041' },
      { name: 'AI Predictive Maintenance 2041', href: '/ai-predictive-maintenance-2041' },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041' },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041' },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040' },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040' },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041' },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041' },
      { name: 'Quantum Bio-Computing 2041', href: '/quantum-bio-computing-2041' },
      { name: 'Space Resource Intelligence 2040', href: '/space-resource-intelligence-2040' },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040' },
      { name: 'Autonomous Vehicle AI 2040', href: '/autonomous-vehicle-ai-2040' },
      { name: 'Quantum Materials Discovery 2040', href: '/quantum-materials-discovery-2040' },
      { name: 'Quantum Financial Intelligence 2040', href: '/quantum-financial-intelligence-2040' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'API Documentation', href: '/api' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Support', href: '/support' },
      { name: 'Training', href: '/training' },
      { name: 'Resources', href: '/resources' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const UltraFuturisticFooter2040: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced section toggle with better accessibility
  const toggleSection = useCallback((title: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  }, []);

  // Scroll to top functionality
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Enhanced visibility detection
  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50" role="contentinfo">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-purple-600/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12">
            {/* Enhanced Company Info Section */}
            <div className="lg:col-span-2 xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Link href="/" className="inline-flex items-center space-x-3 group mb-6" aria-label="Zion Tech Group Home">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech
                    </span>
                    <div className="text-sm text-gray-400">Group 2045</div>
                  </div>
                </Link>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Pioneering the future with revolutionary AI, quantum computing, and space technology solutions. 
                  Transform your business with cutting-edge innovations that define tomorrow.
                </p>

                {/* Enhanced Contact Info */}
                <div className="space-y-3">
                  <a 
                    href={`tel:${contactInfo.mobile}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    aria-label={`Call us at ${contactInfo.mobile}`}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span>{contactInfo.mobile}</span>
                  </a>
                  
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    aria-label={`Email us at ${contactInfo.email}`}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="break-all">{contactInfo.email}</span>
                  </a>
                  
                  <div className="flex items-start space-x-3 text-gray-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Enhanced Section Header */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}/20`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {section.description}
                </p>

                {/* Enhanced Links with Mobile Accordion */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full py-2 text-left text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
                    aria-expanded={expandedSections.has(section.title)}
                    aria-controls={`footer-section-${index}`}
                  >
                    <span className="text-sm font-medium">View Links</span>
                    {expandedSections.has(section.title) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.has(section.title) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        id={`footer-section-${index}`}
                        className="mt-2 space-y-2"
                      >
                        {section.links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`block text-sm transition-colors duration-200 ${
                              link.featured 
                                ? 'text-cyan-400 hover:text-cyan-300 font-medium' 
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:block space-y-2">
                  {section.links.slice(0, 6).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block text-sm transition-colors duration-200 ${
                        link.featured 
                          ? 'text-cyan-400 hover:text-cyan-300 font-medium' 
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Enhanced Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Pioneering the future of technology since 2024
              </p>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:from-cyan-400/20 hover:to-blue-500/20 transition-all duration-300 group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default UltraFuturisticFooter2040;