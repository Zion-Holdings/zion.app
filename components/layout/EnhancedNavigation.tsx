import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    name: 'AI Services',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Cutting-edge AI solutions',
    children: [
      { name: 'AI Agents', href: '/ai-agents', description: 'Intelligent automation' },
      { name: 'AI Analytics', href: '/ai-analytics', description: 'Data-driven insights' },
      { name: 'AI Content', href: '/ai-content', description: 'Content generation' },
      { name: 'AI Security', href: '/ai-security', description: 'Intelligent protection' }
    ]
  },
  {
    name: 'Quantum Computing',
    href: '/quantum-computing',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Next-generation computing',
    children: [
      { name: 'Quantum AI', href: '/quantum-ai', description: 'AI + Quantum fusion' },
      { name: 'Quantum Security', href: '/quantum-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Finance', href: '/quantum-finance', description: 'Trading optimization' },
      { name: 'Quantum Logistics', href: '/quantum-logistics', description: 'Supply chain optimization' }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration & operations',
    children: [
      { name: 'Satellite Operations', href: '/satellite-operations', description: 'Mission control' },
      { name: 'Space Analytics', href: '/space-analytics', description: 'Data insights' },
      { name: 'Orbital Mechanics', href: '/orbital-mechanics', description: 'Trajectory optimization' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions',
    children: [
      { name: 'Cloud Migration', href: '/cloud-migration', description: 'Seamless transition' },
      { name: 'Cybersecurity', href: '/cybersecurity', description: 'Advanced protection' },
      { name: 'DevOps', href: '/devops', description: 'Automated operations' },
      { name: 'Data Analytics', href: '/data-analytics', description: 'Business intelligence' }
    ]
  },
  {
    name: 'Micro SaaS',
    href: '/micro-saas',
    icon: <Zap className="w-5 h-5" />,
    description: 'Ready-to-use solutions',
    children: [
      { name: 'Business Tools', href: '/business-tools', description: 'Productivity boosters' },
      { name: 'Marketing Automation', href: '/marketing-automation', description: 'Growth acceleration' },
      { name: 'Customer Success', href: '/customer-success', description: 'Retention optimization' },
      { name: 'Financial Planning', href: '/financial-planning', description: 'Wealth management' }
    ]
  },
  {
    name: 'Emerging Tech',
    href: '/emerging-tech',
    icon: <Globe className="w-5 h-5" />,
    description: 'Future technologies',
    children: [
      { name: 'Metaverse', href: '/metaverse', description: 'Virtual worlds' },
      { name: 'Brain-Computer Interface', href: '/bci', description: 'Neural technology' },
      { name: 'Autonomous Vehicles', href: '/autonomous-vehicles', description: 'Self-driving systems' },
      { name: 'Blockchain', href: '/blockchain', description: 'Decentralized solutions' }
    ]
  }
];

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <div className="text-sm font-medium text-gray-400">{item.description}</div>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                                <Star className="w-4 h-4 text-cyan-400" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
                                  {child.name}
                                </div>
                                <div className="text-xs text-gray-400">{child.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/pricing"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeAllDropdowns}
                            className="block p-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700/50 space-y-3">
                <Link
                  href="/pricing"
                  onClick={closeAllDropdowns}
                  className="block w-full px-4 py-3 text-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  onClick={closeAllDropdowns}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;