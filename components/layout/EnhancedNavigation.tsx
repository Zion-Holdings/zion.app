import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Brain, Zap, Shield, Network, Globe, 
  Cloud, Rocket, Star, Phone, Mail, MapPin
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
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI solutions for every industry',
    children: [
      { name: 'AI Content Generation', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI Customer Service', href: '/ai-customer-service' },
      { name: 'AI Data Analytics', href: '/ai-data-analytics' },
      { name: 'AI HR & Recruitment', href: '/ai-hr-recruitment' },
      { name: 'AI Legal Analysis', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Market Research', href: '/ai-market-research' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },
      { name: 'AI SEO Optimization', href: '/ai-seo-optimization' },
      { name: 'AI Video Editing', href: '/ai-video-editing' }
    ]
  },
  {
    name: 'Quantum Computing',
    href: '/quantum-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Quantum-powered solutions for complex problems',
    children: [
      { name: 'Quantum AI Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface' },
      { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
      { name: 'Quantum Blockchain', href: '/quantum-blockchain' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Energy', href: '/quantum-energy' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum IoT', href: '/quantum-iot' },
      { name: 'Quantum Logistics', href: '/quantum-logistics' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/security',
    icon: <Shield className="w-5 h-5" />,
    description: 'Next-generation security solutions',
    children: [
      { name: 'AI Cybersecurity Threat Hunting', href: '/ai-cybersecurity-threat-hunting' },
      { name: 'AI Zero-Day Threat Hunter', href: '/ai-zero-day-threat-hunter' },
      { name: 'AI Quantum Encryption Platform', href: '/ai-quantum-encryption-platform' },
      { name: 'AI Behavioral Biometrics', href: '/ai-behavioral-biometrics' },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation' },
      { name: 'Vendor Risk Automation', href: '/vendor-risk-automation' },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor' },
      { name: 'API Security Scanner', href: '/api-security-scanner' }
    ]
  },
  {
    name: 'Blockchain & Web3',
    href: '/blockchain-services',
    icon: <Network className="w-5 h-5" />,
    description: 'Decentralized and blockchain solutions',
    children: [
      { name: 'AI Quantum Blockchain Platform', href: '/ai-quantum-blockchain-platform' },
      { name: 'AI DeFi Optimization Engine', href: '/ai-defi-optimization-engine' },
      { name: 'AI NFT Intelligence Platform', href: '/ai-nft-intelligence-platform' },
      { name: 'AI Metaverse Development Platform', href: '/ai-metaverse-development-platform' },
      { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' }
    ]
  },
  {
    name: 'IoT & Edge Computing',
    href: '/iot-services',
    icon: <Globe className="w-5 h-5" />,
    description: 'Connected and intelligent systems',
    children: [
      { name: 'AI IoT Edge Intelligence Platform', href: '/ai-iot-edge-intelligence' },
      { name: 'AI Smart City Platform', href: '/ai-smart-city-platform' },
      { name: 'AI Industrial IoT Platform', href: '/ai-industrial-iot-platform' },
      { name: 'AI Healthcare IoT Platform', href: '/ai-healthcare-iot-platform' },
      { name: 'AI IoT Platform', href: '/ai-iot-platform' }
    ]
  },
  {
    name: 'Cloud & Data',
    href: '/cloud-services',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Cloud computing and data analytics',
    children: [
      { name: 'AI Quantum Cloud Platform', href: '/ai-quantum-cloud-platform' },
      { name: 'AI Big Data Analytics Engine', href: '/ai-big-data-analytics-engine' },
      { name: 'AI Data Pipeline Automation', href: '/ai-data-pipeline-automation' },
      { name: 'AI Real-Time Streaming Platform', href: '/ai-real-time-streaming-platform' },
      { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
      { name: 'Cloud Landing Zone', href: '/cloud-landing-zone' },
      { name: 'Cloud Backup Compliance', href: '/cloud-backup-compliance' }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and satellite solutions',
    children: [
      { name: 'Space Technology Platform', href: '/space-technology' },
      { name: 'AI Space Mission Controller', href: '/ai-space-mission-controller' }
    ]
  }
];

const EnhancedNavigation: React.FC = () => {
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Revolutionary Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-2xl"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                          <p className="text-xs text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.slice(0, 8).map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeMenu}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                          {item.children && item.children.length > 8 && (
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                            >
                              View all {item.children.length} services →
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side - Contact & Search */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:text-white hover:border-gray-500 transition-colors duration-200"
              >
                Pricing
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-white">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  {item.children && (
                    <div className="ml-8 space-y-1">
                      {item.children.slice(0, 4).map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={closeMenu}
                          className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                      {item.children.length > 4 && (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 py-1"
                        >
                          View all {item.children.length} services →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started Today
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