import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Home,
  Briefcase,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Sparkles,
  Zap,
  Globe,
  Star,
  Lock,
  Database,
  Cpu,
  BarChart3,
  Lightbulb,
  Award,
  Mail,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-nav')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const navigationSections = [
    {
      id: 'services',
      title: 'Services',
      icon: Briefcase,
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500' },
        { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },
        { label: 'Space Technology', href: '/services?category=space-tech', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud, color: 'from-indigo-500 to-blue-500' },
        { label: 'Edge Computing', href: '/services?category=edge', icon: Cpu, color: 'from-green-500 to-emerald-500' }
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      icon: Target,
      items: [
        { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, color: 'from-blue-500 to-indigo-500' },
        { label: 'Healthcare Technology', href: '/solutions/healthcare', icon: Users, color: 'from-green-500 to-emerald-500' },
        { label: 'Financial Technology', href: '/solutions/financial', icon: BarChart3, color: 'from-emerald-500 to-teal-500' },
        { label: 'Manufacturing & IoT', href: '/solutions/manufacturing', icon: Cpu, color: 'from-orange-500 to-red-500' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText, color: 'from-blue-500 to-cyan-500' },
        { label: 'Blog & Insights', href: '/blog', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
        { label: 'Webinars', href: '/webinars', icon: Video, color: 'from-purple-500 to-pink-500' },
        { label: 'Case Studies', href: '/case-studies', icon: Award, color: 'from-emerald-500 to-teal-500' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      icon: Building,
      items: [
        { label: 'About Us', href: '/about', icon: Users, color: 'from-blue-500 to-purple-500' },
        { label: 'Leadership', href: '/leadership', icon: Star, color: 'from-yellow-500 to-orange-500' },
        { label: 'Careers', href: '/careers', icon: Users, color: 'from-green-500 to-emerald-500' },
        { label: 'Contact', href: '/contact', icon: Phone, color: 'from-cyan-500 to-blue-500' }
      ]
    }
  ];

  const quickActions = [
    { label: 'Get Started', href: '/contact', icon: Sparkles, color: 'from-cyan-500 to-purple-600' },
    { label: 'View Pricing', href: '/pricing', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { label: 'Schedule Demo', href: '/demo', icon: Video, color: 'from-purple-500 to-pink-500' },
    { label: 'Support', href: '/support', icon: Users, color: 'from-green-500 to-emerald-500' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Navigation Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-nav fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-gray-900 via-gray-800 to-black border-l border-cyan-400/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-cyan-400/20 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Zion Tech Group</h2>
                    <p className="text-xs text-cyan-400">Menu</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-cyan-500 hover:bg-cyan-600 rounded-lg flex items-center justify-center text-white transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Navigation Content */}
            <div className="p-4 space-y-6">
              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      onClick={onClose}
                      className="group p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 text-center"
                    >
                      <div className={`w-8 h-8 mx-auto mb-2 bg-gradient-to-br ${action.color} rounded-lg p-2`}>
                        <action.icon className="w-full h-full text-white" />
                      </div>
                      <span className="text-xs text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {action.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Sections */}
              {navigationSections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover:bg-gray-700/30 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg p-2">
                        <section.icon className="w-full h-full text-white" />
                      </div>
                      <span className="text-white font-medium">{section.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        activeSection === section.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {activeSection === section.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-1 overflow-hidden"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center gap-3 p-3 ml-8 bg-gray-800/20 hover:bg-gray-700/20 rounded-lg border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300 group"
                          >
                            <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-lg p-1.5`}>
                              <item.icon className="w-full h-full text-white" />
                            </div>
                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Contact Information */}
              <div className="pt-6 border-t border-gray-700/50">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-medium">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-medium text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-700/50">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', color: 'from-blue-500 to-blue-600' },
                    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'from-cyan-400 to-blue-500' },
                    { icon: Github, href: 'https://github.com/zion-tech-group', color: 'from-gray-600 to-gray-700' },
                    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', color: 'from-red-500 to-red-600' }
                  ].map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg p-2.5 hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className="w-full h-full text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;