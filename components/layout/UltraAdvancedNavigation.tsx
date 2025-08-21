import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'Revolutionary 2026 AI',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Simulator Pro', href: '/ai-consciousness-simulator-pro', description: 'Simulate human-like consciousness in AI systems', price: '$4,999/month' },
      { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing', description: 'Hybrid AI-Quantum computing for complex problem solving', price: '$7,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Unified AI platform for text, image, audio, and video processing', price: '$2,999/month' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'AI system that makes complex decisions autonomously', price: '$5,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Advanced AI with human-like emotional understanding', price: '$3,999/month' }
    ]
  },
  {
    title: 'Revolutionary 2026 IT',
    icon: Cpu,
    services: [
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing for next-generation AI', price: '$12,999/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing for complex problem solving', price: '$15,999/month' },
      { name: 'Photonic Computing Platform', href: '/photonic-computing-platform', description: 'Light-speed computing with photonic processors', price: '$9,999/month' },
      { name: 'Holographic Computing Platform', href: '/holographic-computing-platform', description: '3D holographic computing and visualization', price: '$6,999/month' },
      { name: 'Quantum Internet Platform', href: '/quantum-internet-platform', description: 'Ultra-secure quantum communication network', price: '$8,999/month' }
    ]
  },
  {
    title: 'Revolutionary 2026 Micro SaaS',
    icon: Zap,
    services: [
      { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', description: 'Transform data into actionable insights with AI', price: '$299/month' },
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Automate customer support with intelligent AI agents', price: '$199/month' },
      { name: 'AI Marketing Automation Suite', href: '/ai-marketing-automation-suite', description: 'Intelligent marketing automation powered by AI', price: '$399/month' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'Boost sales performance with AI-powered insights', price: '$249/month' },
      { name: 'AI HR Recruitment Automation', href: '/ai-hr-recruitment-automation', description: 'Streamline hiring with intelligent AI automation', price: '$179/month' }
    ]
  },
  {
    title: 'Quantum Computing',
    icon: Atom,
    services: [
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Unbreakable encryption for the quantum era', price: '$599/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum computing for financial market advantage', price: '$999/month' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Next-generation internet security with quantum technology', price: '$699/month' },
      { name: 'Quantum Internet Platform', href: '/quantum-internet-platform', description: 'Ultra-secure quantum communication network', price: '$1,599/month' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Rocket,
    services: [
      { name: 'Neuromorphic Computing', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing for next-generation AI', price: '$1,499/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing for complex problem solving', price: '$2,999/month' },
      { name: 'Photonic Computing', href: '/photonic-computing-platform', description: 'Light-speed computing with photonic processors', price: '$1,999/month' },
      { name: 'Holographic Display', href: '/holographic-display-platform', description: 'Next-generation 3D holographic visualization', price: '$699/month' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: '2026 Services', href: '/2026-services-showcase' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

export default function UltraAdvancedNavigation() {
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

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-yellow-300">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">1000+ Revolutionary Services</span>
              </div>
              <div className="flex items-center space-x-2 text-green-300">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">1000% ROI Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-900/95 backdrop-blur-2xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-sm text-gray-300 font-medium">
                    Revolutionary AI & Quantum Solutions
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(category.title)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === category.title ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === category.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-96 bg-gray-900/98 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 z-50"
                      >
                        <div className="p-6">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {category.title}
                              </span>
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>
                          </div>
                          <div className="space-y-4">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
                                onClick={closeMenu}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-lg">
                                      {service.name}
                                    </h4>
                                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                                      {service.description}
                                    </p>
                                  </div>
                                  <div className="ml-4 text-right">
                                    <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                      {service.price}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">per month</div>
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

              {/* Company Links */}
              <div className="flex items-center space-x-6">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold rounded-2xl hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105 border border-transparent hover:border-cyan-400/50"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-bold rounded-2xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <category.icon className="w-5 h-5 text-cyan-400" />
                    <span>{category.title}</span>
                  </h3>
                  <div className="space-y-2 ml-6">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{service.name}</h4>
                            <p className="text-sm text-gray-400 mt-1">
                              {service.description}
                            </p>
                          </div>
                          <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full ml-3">
                            {service.price}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-gray-700/50">
                <div className="space-y-3">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/pricing"
                    className="block w-full px-6 py-3 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl text-center hover:bg-cyan-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
