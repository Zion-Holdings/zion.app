import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Zap, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Cloud, Lock, ShieldCheck
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Revolutionary AI Services',
    icon: Brain,
    color: 'from-violet-600 via-pink-600 to-rose-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Business Predictor Pro', href: '/ai-business-predictor-pro', description: '95% accuracy business predictions', price: '$2,999/month' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: '99.2% medical diagnostic accuracy', price: '$12,999/month' },
      { name: 'AI Customer Experience Platform', href: '/ai-customer-experience-platform', description: '300% customer satisfaction increase', price: '$3,999/month' },
      { name: 'AI Marketing Automation Platform', href: '/ai-marketing-automation-platform', description: 'AI-powered campaign optimization', price: '$4,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and breakthrough technologies',
    services: [
      { name: 'Quantum Secure Communication Enterprise', href: '/quantum-secure-communication-enterprise', description: 'Unbreakable quantum encryption', price: '$8,999/month' },
      { name: 'Quantum Computing as a Service', href: '/quantum-computing-as-a-service', description: '1000+ qubit quantum access', price: '$15,999/month' },
      { name: 'Brain-Computer Interface Enterprise', href: '/brain-computer-interface-enterprise', description: 'Direct neural control systems', price: '$45,999/month' },
      { name: 'Quantum Internet Gateway Enterprise', href: '/quantum-internet-gateway-enterprise', description: 'Quantum network connectivity', price: '$35,999/month' }
    ]
  },
  {
    title: '🏙️ 2029 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'Autonomous Business Operations Platform', href: '/autonomous-business-operations-platform', description: '40% operational cost reduction', price: '$12,999/month' },
      { name: 'Intelligent Data Governance Platform', href: '/intelligent-data-governance-platform', description: 'AI-powered compliance automation', price: '$6,999/month' },
      { name: 'AI Cybersecurity Platform Enterprise', href: '/ai-cybersecurity-platform-enterprise', description: '99.9% threat detection accuracy', price: '$22,999/month' },
      { name: 'Intelligent HR and Talent Management', href: '/intelligent-hr-talent-management', description: 'AI-powered HR automation', price: '$5,999/month' }
    ]
  },
  {
    title: '🌌 2029 Space & Advanced Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and breakthrough innovations',
    services: [
      { name: 'Space Mining Operations Platform', href: '/space-mining-operations-platform', description: 'Automated asteroid mining', price: '$75,999/month' },
      { name: 'Fusion Energy Management Platform', href: '/fusion-energy-management-platform', description: 'Commercial fusion power generation', price: '$55,999/month' },
      { name: 'Synthetic Biology Platform Enterprise', href: '/synthetic-biology-platform-enterprise', description: 'Biological system engineering', price: '$28,999/month' },
      { name: 'Quantum AI Consciousness Platform', href: '/quantum-ai-consciousness-platform', description: 'Genuine AI consciousness development', price: '$95,999/month' }
    ]
  },
  {
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'Autonomous Financial Trading AI', href: '/autonomous-financial-trading-ai', description: '40% annual returns', price: '$25,999/month' },
      { name: 'AI Legal Contract Analyzer Enterprise', href: '/ai-legal-contract-analyzer-enterprise', description: '90% contract review time reduction', price: '$4,999/month' },
      { name: 'Autonomous Supply Chain AI', href: '/autonomous-supply-chain-ai', description: '30% cost reduction', price: '$18,999/month' },
      { name: 'Intelligent Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'Real-time optimization', price: '$8,999/month' }
    ]
  },
  {
    title: '🔬 2029 Research & Development',
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      { name: 'AI Financial Risk Management Platform', href: '/ai-financial-risk-management-platform', description: 'Real-time risk assessment', price: '$15,999/month' },
      { name: 'Advanced Research Automation', href: '/advanced-research-automation', description: 'Automated research workflows', price: '$4,999/month' },
      { name: 'Quantum Research Platform', href: '/quantum-research-platform', description: 'Quantum computing research', price: '$8,999/month' },
      { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'Intelligent research support', price: '$2,999/month' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const quickLinks = [
  { name: 'AI Services', href: '/ai-services', icon: Brain },
  { name: 'Quantum Computing', href: '/quantum-services', icon: Atom },
  { name: 'Space Technology', href: '/space-tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target },
  { name: 'Enterprise IT', href: '/it-services', icon: Cpu },
  { name: 'Case Studies', href: '/case-studies', icon: Star }
];

export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleCategoryHover = (index: number) => {
    setActiveCategory(index);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  const filteredServices = serviceCategories.flatMap(category => 
    category.services.filter(service => 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-purple-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3 w-3 text-purple-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-purple-300">2029 Revolutionary Technology</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-purple-200 hover:text-purple-400 transition-colors duration-200 group"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-200 hover:text-purple-400 transition-colors duration-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Service Categories Bar */}
      <div className="bg-gradient-to-r from-black/80 via-purple-900/20 to-black/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden lg:flex items-center space-x-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="relative"
                  onMouseEnter={() => handleCategoryHover(index)}
                  onMouseLeave={handleCategoryLeave}
                >
                  <button className="flex items-center space-x-2 text-purple-200 hover:text-purple-400 transition-colors duration-200 group">
                    <category.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">{category.title.split(' ')[0]}</span>
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeCategory === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl z-50"
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-purple-200 mb-3">{category.title}</h3>
                          <p className="text-sm text-purple-300 mb-4">{category.description}</p>
                          <div className="space-y-3">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group"
                                onClick={closeMenu}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-medium text-purple-200 group-hover:text-purple-400 transition-colors duration-200">
                                      {service.name}
                                    </h4>
                                    <p className="text-sm text-purple-300">{service.description}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-lg font-bold text-purple-400">{service.price}</div>
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

            {/* Quick Links for Mobile */}
            <div className="lg:hidden flex items-center space-x-4 overflow-x-auto">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-purple-200 hover:text-purple-400 transition-colors duration-200 whitespace-nowrap"
                >
                  <link.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-purple-500/30"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                />
              </div>

              {/* Main Navigation */}
              <div className="space-y-4">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-purple-200 hover:text-purple-400 transition-colors duration-200 py-2"
                    onClick={closeMenu}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Service Categories */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-200 border-b border-purple-500/30 pb-2">
                  Service Categories
                </h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <h4 className="font-medium text-purple-300 flex items-center space-x-2">
                      <category.icon className="h-4 w-4" />
                      <span>{category.title}</span>
                    </h4>
                    <div className="pl-6 space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          {service.name} - {service.price}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="pt-4 border-t border-purple-500/30">
                <div className="space-y-2 text-sm text-purple-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results Dropdown */}
      {searchQuery && filteredServices.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl mx-4 mt-2">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-200 mb-3">
              Search Results ({filteredServices.length})
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group"
                  onClick={() => setSearchQuery('')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-purple-200 group-hover:text-purple-400 transition-colors duration-200">
                        {service.name}
                      </h4>
                      <p className="text-sm text-purple-300">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-400">{service.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}