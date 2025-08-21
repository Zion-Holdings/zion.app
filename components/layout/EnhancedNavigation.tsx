import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Rocket, Shield, Globe,
  Zap, Atom, Database, Lock
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
    description: 'Advanced AI and machine learning solutions',
    children: [
      { name: 'AI Agent Orchestrator', href: '/ai-assistant' },
      { name: 'Customer Service AI', href: '/customer-service-ai' },
      { name: 'AI Data Analytics', href: '/ai-data-analytics' },
      { name: 'AI Guardrails', href: '/ai-guardrails' },
      { name: 'AI Code Review Copilot', href: '/ai-code-review-copilot' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },
      { name: 'AI Website Personalization', href: '/ai-website-personalization' },
      { name: 'Sales Copilot', href: '/sales-copilot' }
    ]
  },
  {
    name: 'Quantum Computing',
    href: '/services#quantum',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and quantum AI solutions',
    children: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' }
    ]
  },
  {
    name: 'Emerging Tech',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Blockchain, IoT, and cutting-edge technologies',
    children: [
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'IoT Edge Computing', href: '/edge-computing-orchestration' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions' },
      { name: 'Metaverse AI Platform', href: '/metaverse-ai-development-platform' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/security',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced security and compliance solutions',
    children: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'API Security Scanner', href: '/api-security-scanner' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Globe className="w-5 h-5" />,
    description: 'Space mission control and satellite operations',
    children: [
      { name: 'Space Technology Overview', href: '/space-technology' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/it-services',
    icon: <Database className="w-5 h-5" />,
    description: 'Enterprise infrastructure and solutions',
    children: [
      { name: 'Cloud Landing Zone', href: '/cloud-landing-zone' },
      { name: 'Cloud Platform', href: '/cloud-platform' },
      { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
      { name: 'Data Pipeline Observability', href: '/data-pipeline-observability' },
      { name: 'IT Services', href: '/it-services' }
    ]
  }
];

export default function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
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
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          {item.icon}
                          <div>
                            <h3 className="font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                              onClick={closeMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Quick Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                All Services
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link
                  href="/services"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={closeMenu}
                >
                  All Services
                </Link>
                <Link
                  href="/pricing"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}