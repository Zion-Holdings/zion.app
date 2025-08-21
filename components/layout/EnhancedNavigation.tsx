import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Brain, Rocket, Dna, Zap, Globe, 
  Phone, Mail, MapPin
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
    name: 'Quantum AI',
    href: '/quantum-ai',
    icon: <Brain className="w-4 h-4" />,
    description: 'Revolutionary quantum computing and AI services',
    children: [
      { name: 'Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Trading', href: '/quantum-financial-trading' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum IoT', href: '/quantum-iot' },
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-4 h-4" />,
    description: 'Advanced space technology and satellite services',
    children: [
      { name: 'Mission Management', href: '/space-mission-management-platform' },
      { name: 'Constellation Management', href: '/satellite-constellation-management' },
      { name: 'Space Debris Monitoring', href: '/space-debris-monitoring-system' },
      { name: 'Launch Coordination', href: '/orbital-launch-coordination' },
      { name: 'Ground Station Management', href: '/ground-station-network-management' },
    ]
  },
  {
    name: 'Biotech AI',
    href: '/biotech-ai',
    icon: <Dna className="w-4 h-4" />,
    description: 'AI-powered biotechnology and healthcare solutions',
    children: [
      { name: 'Drug Discovery', href: '/ai-drug-discovery-platform' },
      { name: 'Genetic Engineering', href: '/ai-genetic-engineering-suite' },
      { name: 'Protein Design', href: '/ai-protein-design-platform' },
      { name: 'Clinical Trials', href: '/ai-clinical-trial-optimization' },
      { name: 'Personalized Medicine', href: '/ai-personalized-medicine' },
    ]
  },
  {
    name: 'Innovative AI',
    href: '/innovative-ai',
    icon: <Zap className="w-4 h-4" />,
    description: 'Cutting-edge AI and automation services',
    children: [
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer-pro' },
      { name: 'HR Recruitment', href: '/ai-hr-recruitment-suite' },
      { name: 'Market Research', href: '/ai-market-research-intelligence' },
      { name: 'Phone Agent Platform', href: '/ai-phone-agent-platform' },
      { name: 'Sales Automation', href: '/ai-sales-automation-suite' },
    ]
  },
  {
    name: 'All Services',
    href: '/services',
    icon: <Globe className="w-4 h-4" />,
    description: 'Explore our complete portfolio of 1000+ services'
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => item.children && handleDropdownToggle(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                        >
                          <div className="p-4">
                            <div className="mb-3">
                              <h3 className="text-lg font-semibold text-cyan-400">{item.name}</h3>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                            <div className="space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl z-50 border-l border-cyan-500/30"
          >
            <div className="p-6 h-full overflow-y-auto">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-cyan-400">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 mt-2 space-y-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={closeMenu}
                                className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-center block transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}