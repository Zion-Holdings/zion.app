import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Rocket, BookOpen, FileText, TrendingUp, ArrowRight, Cloud, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const navigationItems = [
    {
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services Overview', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Rocket },
        { name: 'Case Studies', path: '/case-studies', icon: TrendingUp },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Technology Services',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: TrendingUp },
        { name: 'AI Content Generation', path: '/ai-content-generator', icon: FileText },
        { name: 'AI Marketing Automation', path: '/ai-content-marketing-automation', icon: Zap },
        { name: 'AI Code Review', path: '/ai-code-review', icon: Briefcase },
        { name: 'AI Agents', path: '/ai-agents', icon: Brain },
        { name: 'AI Analytics Copilot', path: '/ai-analytics-copilot', icon: TrendingUp },
        { name: 'AI Assistant', path: '/ai-assistant', icon: Users }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Zap },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Globe },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: TrendingUp },
        { name: 'AI Brain Interface', path: '/ai-brain-interface', icon: Brain },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', icon: Rocket },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: BookOpen },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Zap }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Globe },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'AI-Powered Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'Autonomous DevOps', path: '/autonomous-devops-platform', icon: Zap },
        { name: 'Enterprise IT', path: '/enterprise-it', icon: Briefcase },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Shield },
        { name: 'AI Compliance Automation', path: '/ai-compliance-automation', icon: Shield }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare AI', path: '/ai-autonomous-healthcare-physician', icon: Users },
        { name: 'Manufacturing AI', path: '/ai-autonomous-manufacturing', icon: Briefcase },
        { name: 'Financial Services', path: '/ai-autonomous-business-operations', icon: TrendingUp },
        { name: 'Retail Solutions', path: '/ai-market-research', icon: Globe },
        { name: 'Government Tech', path: '/ai-autonomous-ecosystem', icon: Shield },
        { name: 'Education AI', path: '/ai-autonomous-education-professor', icon: BookOpen },
        { name: 'Legal AI', path: '/ai-autonomous-legal-counsel', icon: Shield },
        { name: 'Logistics AI', path: '/ai-autonomous-logistics', icon: Globe }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { name: 'Our Mission', path: '/mission', icon: Rocket },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'News', path: '/news', icon: TrendingUp },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: BookOpen },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Partners', path: '/partners', icon: Handshake }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Globe, href: 'https://www.youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Briefcase, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
  ];

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50">
                    Z
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400">Navigation Menu</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-6">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide px-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 group ${
                          location.pathname === item.path
                            ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-400/50'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1">{item.name}</span>
                        {location.pathname === item.path && (
                          <ArrowRight className="w-3 h-3 text-cyan-400" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-4 border-t border-cyan-500/30 mt-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-cyan-500/30">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-2 px-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:from-cyan-400/30 hover:to-blue-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-cyan-500/30">
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-sm font-medium text-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}