import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Moon,
  Sun,
  Globe,
  ExternalLink,
  Brain,
  Atom,
  Cpu,
  Shield,
  Building,
  Zap,
  Rocket,
  Star
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  isExternal?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface UltraFuturisticNavigation2026Props {
  className?: string;
}

const UltraFuturisticNavigation2026: React.FC<UltraFuturisticNavigation2026Props> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Enhanced navigation items with icons and descriptions
  const navigationItems: NavigationItem[] = [
    {
      label: 'AI & Autonomous',
      href: '/services/ai-autonomous',
      icon: Brain,
      description: 'Revolutionary AI systems that operate independently',
      children: [
        { 
          label: 'AI Legal Research Assistant', 
          href: '/ai-autonomous-legal-research-assistant',
          description: 'Autonomous legal research and case analysis'
        },
        { 
          label: 'AI Financial Risk Manager', 
          href: '/ai-autonomous-financial-risk-manager',
          description: 'Real-time financial risk monitoring and management'
        },
        { 
          label: 'AI Healthcare Diagnostics Pro', 
          href: '/ai-autonomous-healthcare-diagnostics-pro',
          description: 'Advanced medical diagnostics and treatment planning'
        },
        { 
          label: 'AI Supply Chain Optimizer', 
          href: '/ai-autonomous-supply-chain-optimizer',
          description: 'Intelligent supply chain optimization and disruption prediction'
        },
        { 
          label: 'AI Cybersecurity Sentinel', 
          href: '/ai-autonomous-cybersecurity-sentinel',
          description: 'Autonomous threat detection and response'
        }
      ]
    },
    {
      label: 'Quantum Technology',
      href: '/services/quantum',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      children: [
        { 
          label: 'Quantum Edge Computing', 
          href: '/quantum-edge-computing-platform',
          description: 'Quantum-enhanced edge processing platform'
        },
        { 
          label: 'Neuromorphic Computing', 
          href: '/neuromorphic-computing-infrastructure',
          description: 'Brain-inspired computing infrastructure'
        },
        { 
          label: 'Holographic Data Center', 
          href: '/holographic-data-center-platform',
          description: '3D holographic storage and processing'
        },
        { 
          label: 'Bio-Computing Infrastructure', 
          href: '/bio-computing-infrastructure',
          description: 'DNA-based computing solutions'
        },
        { 
          label: 'Quantum Internet Backbone', 
          href: '/quantum-internet-backbone',
          description: 'Ultra-secure quantum networking'
        }
      ]
    },
    {
      label: 'IT Infrastructure',
      href: '/services/infrastructure',
      icon: Cpu,
      description: 'Cutting-edge infrastructure solutions',
      children: [
        { 
          label: 'Cloud Migration', 
          href: '/cloud-migration',
          description: 'Seamless cloud infrastructure migration'
        },
        { 
          label: 'DevOps Automation', 
          href: '/devops-automation',
          description: 'Automated development and deployment'
        },
        { 
          label: 'Edge Computing', 
          href: '/edge-computing',
          description: 'Distributed edge computing solutions'
        },
        { 
          label: 'Data Center Optimization', 
          href: '/data-center-optimization',
          description: 'Performance and efficiency optimization'
        }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/services/micro-saas',
      icon: Building,
      description: 'Innovative software-as-a-service solutions',
      children: [
        { 
          label: 'AI Content Factory Pro', 
          href: '/ai-autonomous-content-factory-pro',
          description: 'Autonomous content creation platform'
        },
        { 
          label: 'Quantum CRM Intelligence', 
          href: '/quantum-crm-intelligence-suite',
          description: 'Quantum-powered customer relationship management'
        },
        { 
          label: 'AI HR Platform', 
          href: '/ai-autonomous-hr-platform',
          description: 'Intelligent human resources management'
        },
        { 
          label: 'Quantum Financial Intelligence', 
          href: '/quantum-financial-intelligence-platform',
          description: 'Advanced financial analytics and insights'
        },
        { 
          label: 'AI Education Platform', 
          href: '/ai-autonomous-education-platform',
          description: 'Personalized learning experiences'
        }
      ]
    },
    {
      label: 'Cybersecurity',
      href: '/services/cybersecurity',
      icon: Shield,
      description: 'Advanced security and protection solutions',
      children: [
        { 
          label: 'Zero Trust Architecture', 
          href: '/zero-trust-network-architecture',
          description: 'Comprehensive security framework'
        },
        { 
          label: 'Threat Intelligence', 
          href: '/threat-intelligence-platform',
          description: 'Real-time threat detection and analysis'
        },
        { 
          label: 'Compliance Automation', 
          href: '/compliance-automation',
          description: 'Automated regulatory compliance'
        }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Zap,
      description: 'Industry-specific technology solutions',
      children: [
        { 
          label: 'Healthcare Solutions', 
          href: '/healthcare-solutions',
          description: 'Digital health transformation'
        },
        { 
          label: 'Financial Solutions', 
          href: '/financial-solutions',
          description: 'FinTech innovation and optimization'
        },
        { 
          label: 'Manufacturing Solutions', 
          href: '/manufacturing-solutions',
          description: 'Industry 4.0 and smart manufacturing'
        },
        { 
          label: 'Retail Solutions', 
          href: '/retail-technology-solutions',
          description: 'Digital retail transformation'
        }
      ]
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/20' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  Future Technology Group
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {item.icon && <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-300" />}
                  <span className="font-medium">{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-300 group"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                                <div className="flex-1">
                                  <div className="font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                                    {child.label}
                                  </div>
                                  <div className="text-sm text-gray-400 mt-1">
                                    {child.description}
                                  </div>
                                </div>
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative hidden md:block"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </motion.div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+1 302 464 0950</span>
              </motion.a>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-purple-500/30"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-300">
                      {item.icon && <item.icon className="w-5 h-5 text-purple-400" />}
                      <div className="flex-1">
                        <div className="font-medium text-white">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                    </div>
                    {item.children && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300">
                              {child.label}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {child.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2026;