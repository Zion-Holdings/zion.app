import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users, Atom, Dna, 
  Eye, Sparkles, Target, Microscope,
  Phone, Mail
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-consciousness',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness platforms',
    badge: 'NEW',
    children: [
      { name: 'AI Consciousness Platform', href: '/services/ai-consciousness-platform', description: 'Human-AI collaboration' },
      { name: 'Emotional Intelligence AI', href: '/services/emotional-intelligence-ai', description: 'Empathetic AI systems' },
      { name: 'Consciousness Mapping', href: '/services/consciousness-mapping', description: 'Neural mapping tools' },
      { name: 'AI Ethics Framework', href: '/services/ai-ethics', description: 'Ethical AI development' }
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-emerging-tech',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and beyond',
    badge: 'BREAKTHROUGH',
    children: [
      { name: 'Quantum BCI Platform', href: '/services/quantum-brain-computer-interface', description: 'Neural communication' },
      { name: 'Quantum Trading System', href: '/services/quantum-financial-trading-system', description: 'Financial optimization' },
      { name: 'Quantum Cybersecurity', href: '/services/quantum-cybersecurity-platform', description: 'Future-proof security' },
      { name: 'Quantum Logistics', href: '/services/quantum-logistics-optimization', description: 'Supply chain optimization' }
    ]
  },
  {
    name: '🌌 Space & Metaverse',
    href: '/space-metaverse',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration & virtual worlds',
    badge: 'FRONTIER',
    children: [
      { name: 'Space Mining Platform', href: '/services/space-mining-automation-platform', description: 'Asteroid mining' },
      { name: 'Metaverse Development', href: '/services/metaverse-development-platform', description: 'Virtual world creation' },
      { name: 'Satellite Operations', href: '/services/satellite-operations', description: 'Mission control' },
      { name: 'Space Analytics', href: '/services/space-analytics', description: 'Data insights' }
    ]
  },
  {
    name: '🏙️ Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions & security',
    badge: 'ENTERPRISE',
    children: [
      { name: 'Zero-Trust Security', href: '/services/zero-trust-network-architecture', description: 'Advanced protection' },
      { name: 'Cloud Migration', href: '/services/cloud-migration', description: 'Seamless transition' },
      { name: 'DevOps Automation', href: '/services/devops-automation', description: 'Automated operations' },
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' }
    ]
  },
  {
    name: '🎯 Micro SAAS',
    href: '/micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Ready-to-use business solutions',
    badge: 'READY',
    children: [
      { name: 'AI Content Suite', href: '/services/ai-content-automation-suite', description: 'Content creation' },
      { name: 'Business Tools', href: '/services/business-tools', description: 'Productivity boosters' },
      { name: 'Marketing Automation', href: '/services/marketing-automation', description: 'Growth acceleration' },
      { name: 'Customer Success', href: '/services/customer-success', description: 'Retention optimization' },
      { name: 'Comprehensive Showcase', href: '/comprehensive-services-showcase-2025', description: 'All services portfolio' }
    ]
  },
  {
    name: '🔬 Research & Development',
    href: '/research-development',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Breakthrough technologies',
    badge: 'INNOVATION',
    children: [
      { name: 'Biotech AI Platform', href: '/services/biotech-ai-research-platform', description: 'Medical research' },
      { name: 'Autonomous Manufacturing', href: '/services/autonomous-manufacturing', description: 'Smart factories' },
      { name: 'Emerging Tech Lab', href: '/services/emerging-tech-lab', description: 'Innovation hub' },
      { name: 'Quantum Research', href: '/services/quantum-research', description: 'Quantum breakthroughs' }
    ]
  },
  {
    name: '🌟 All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Complete services portfolio',
    badge: 'NEW',
    children: [
      { name: 'Micro SAAS Services', href: '/comprehensive-services-showcase-2025?category=micro-saas', description: 'Business solutions' },
      { name: 'IT Innovations', href: '/comprehensive-services-showcase-2025?category=it-innovations', description: 'Technology solutions' },
      { name: 'AI Innovations', href: '/comprehensive-services-showcase-2025?category=ai-innovations', description: 'AI platforms' },
      { name: 'Full Portfolio', href: '/comprehensive-services-showcase-2025', description: 'View all services' }
    ]
  }
];

const UltraFuturisticNavigation2034: React.FC = () => {
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30' 
        : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                +1 302 464 0950
              </span>
              <span className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                kleber@ziontechgroup.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-400">🚀 Leading the Future of Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-300">2034 Future Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white/90 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-cyan-400">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </div>
                                  <div className="text-sm text-gray-400">{child.description}</div>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors transform rotate-[-90deg]" />
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

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
              />
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
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
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-8 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={closeAllDropdowns}
                          className="block p-2 text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link href="/contact" onClick={closeAllDropdowns}>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2034;