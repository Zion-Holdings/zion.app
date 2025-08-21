import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Brain, 
  Rocket, 
  Shield, 
  Globe, 
  Cpu, 
  Database,
  Cloud,
  Lock,
  BarChart3,
  Users,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const UltraFuturisticNavigation2034: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navigationItems = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Content Generation', href: '/ai-content-generator' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'AI Customer Service', href: '/ai-customer-service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Research Platform', href: '/ai-research-platform' }
      ]
    },
    {
      name: 'Quantum Solutions',
      href: '/quantum-solutions',
      icon: Cpu,
      dropdown: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Quantum Machine Learning', href: '/quantum-machine-learning' },
        { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
        { name: 'Quantum Research', href: '/quantum-research' }
      ]
    },
    {
      name: 'Space Technology',
      href: '/space-technology',
      icon: Rocket,
      dropdown: [
        { name: 'Space Mining Operations', href: '/space-mining-operations' },
        { name: 'Satellite Management', href: '/satellite-management' },
        { name: 'Space Tourism Platform', href: '/space-tourism-platform' },
        { name: 'Astronomical Research', href: '/astronomical-research' },
        { name: 'Space Debris Monitoring', href: '/space-debris-monitoring' },
        { name: 'Interplanetary Communications', href: '/interplanetary-communications' }
      ]
    },
    {
      name: 'Cybersecurity',
      href: '/cybersecurity',
      icon: Shield,
      dropdown: [
        { name: 'Zero Trust Architecture', href: '/zero-trust-architecture' },
        { name: 'Threat Intelligence', href: '/threat-intelligence' },
        { name: 'Incident Response', href: '/incident-response' },
        { name: 'Compliance Management', href: '/compliance-management' },
        { name: 'Security Operations Center', href: '/security-operations-center' },
        { name: 'Penetration Testing', href: '/penetration-testing' }
      ]
    },
    {
      name: 'Enterprise IT',
      href: '/enterprise-it',
      icon: Database,
      dropdown: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'DevOps Automation', href: '/devops-automation' },
        { name: 'Data Management', href: '/data-management' },
        { name: 'API Management', href: '/api-management' },
        { name: 'Microservices Architecture', href: '/microservices-architecture' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    },
    {
      name: 'Emerging Tech',
      href: '/emerging-tech',
      icon: Zap,
      dropdown: [
        { name: 'Metaverse Development', href: '/metaverse-development' },
        { name: 'Biotech AI Research', href: '/biotech-ai-research' },
        { name: 'Neural Interfaces', href: '/neural-interfaces' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'IoT Edge Computing', href: '/iot-edge-computing' }
      ]
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-pink-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/pricing" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              View Pricing
            </Link>
            <Link href="/contact" className="text-pink-400 hover:text-pink-300 transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30' 
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
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75 animate-pulse"></div>
              </div>
              <div>
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </Link>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={closeAll}
                                className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-200 group"
                              >
                                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                                <span className="text-sm">{subItem.name}</span>
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

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/demo"
                className="px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-xl font-medium hover:bg-cyan-500/10 transition-all duration-200"
              >
                Request Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
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
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
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
                          className="ml-6 mt-2 space-y-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={closeAll}
                              className="block p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-xl font-medium"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/demo"
                    onClick={closeAll}
                    className="block w-full px-6 py-3 border border-cyan-500/50 text-cyan-400 text-center rounded-xl font-medium"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-32"></div>
    </>
  );
};

export default UltraFuturisticNavigation2034;