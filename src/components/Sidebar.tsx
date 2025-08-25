import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Atom, Server, Database, Package, Building, Rocket } from 'lucide-react';
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
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Services', path: '/ai-services', icon: Brain },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'AI Matcher', path: '/match', icon: Brain }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Atom },
        { name: 'Innovative New Services', path: '/services/innovative-new-services', icon: Rocket },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Specialized IT Infrastructure', path: '/services/specialized-it-infrastructure', icon: Database },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Globe }
      ]
    },
    {
      title: 'Solutions & Services',
      items: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Package },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Building },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Blog', path: '/blog', icon: Globe }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', path: '/help-center', icon: Users },
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe }
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
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' }
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
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={onClose}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 shadow-2xl border-r border-cyan-500/30"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    Z
                  </div>
                  <span className="text-lg font-semibold text-cyan-400">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-8">
                  {navigationItems.map((section, index) => (
                    <div key={index} className="px-6">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={item.path}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                                location.pathname === item.path
                                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              }`}
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-700/50 p-6 space-y-6">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400">Contact Information</h4>
                  <div className="space-y-2">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-2 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <contact.icon className="w-3 h-3" />
                        <span>{contact.text}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                        aria-label={`Follow us on ${social.label}`}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}