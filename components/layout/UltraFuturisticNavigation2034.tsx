import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Cpu, Target, Microscope, Shield, Zap, Sparkles,
  Menu, X, Search, ChevronDown, Home, Briefcase, 
  DollarSign, BookOpen, Users, MessageCircle, Star,
  TrendingUp, Award, Crown, Infinity, Layers, Palette,
  Database, Cloud, Lock, Code, Server, Network, 
  Smartphone, Monitor, Globe2, ShieldCheck, Zap2
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI 2034',
    icon: Brain,
    color: 'from-violet-600 via-purple-700 to-indigo-800',
    description: 'Next-generation AI consciousness and autonomous systems',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform-2034', description: 'Advanced AI consciousness development', price: '$4,999/month' },
      { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence-2034', description: 'Self-learning BI platform', price: '$3,499/month' },
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform-2034', description: 'AI-powered drug development', price: '$12,999/month' },
      { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite-2034', description: 'Autonomous threat response', price: '$8,499/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech 2034',
    icon: Atom,
    color: 'from-indigo-600 via-blue-700 to-cyan-800',
    description: 'Quantum computing and cutting-edge innovations',
    services: [
      { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing-2034', description: 'Quantum-classical hybrid platform', price: '$8,999/month' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2034', description: 'Quantum-powered cloud computing', price: '$7,999/month' },
      { name: 'Quantum Data Analytics', href: '/quantum-data-analytics-platform-2034', description: 'Quantum-powered analytics', price: '$6,499/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform-2034', description: 'Quantum algorithmic trading', price: '$9,999/month' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions 2034',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-700 to-teal-800',
    description: 'Advanced enterprise infrastructure and operations',
    services: [
      { name: 'AI IT Operations Center', href: '/ai-powered-it-operations-center-2034', description: 'Autonomous IT operations', price: '$5,999/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture-2034', description: 'Next-gen cybersecurity', price: '$6,999/month' },
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform-2034', description: 'Self-managing DevOps', price: '$4,499/month' },
      { name: 'Autonomous Business Process Automation', href: '/autonomous-business-process-automation-2034', description: 'AI-powered process automation', price: '$4,999/month' }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech 2034',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-700 to-green-800',
    description: 'Space technology and metaverse development',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform-2034', description: 'Autonomous space mining', price: '$15,999/month' },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform-2034', description: 'Complete metaverse solution', price: '$5,999/month' },
      { name: 'Quantum Edge Computing', href: '/quantum-edge-computing-platform-2034', description: 'Quantum-powered edge computing', price: '$5,999/month' }
    ]
  },
  {
    title: '💼 Business Solutions 2034',
    icon: Briefcase,
    color: 'from-green-600 via-emerald-700 to-teal-800',
    description: 'Comprehensive business automation and optimization',
    services: [
      { name: 'AI Content Generator Elite', href: '/ai-content-generator-elite', description: 'Professional AI content creation', price: '$49/month' },
      { name: 'AI Guardrails Suite', href: '/ai-guardrails-suite', description: 'AI policy and safety', price: '$299/month' },
      { name: 'Sales Copilot AI', href: '/sales-copilot', description: 'AI-powered sales automation', price: '$199/month' },
      { name: 'Customer Service AI', href: '/customer-service-ai', description: 'Intelligent customer support', price: '$299/month' }
    ]
  }
];

const quickLinks = [
  { name: 'AI Services', href: '/ai-services', icon: Brain, color: 'from-violet-500 to-purple-600' },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom, color: 'from-indigo-500 to-blue-600' },
  { name: 'Space Tech', href: '/space-technology', icon: Rocket, color: 'from-teal-500 to-emerald-600' },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu, color: 'from-blue-500 to-cyan-600' },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target, color: 'from-green-500 to-yellow-600' },
  { name: 'Research & Dev', href: '/research-development', icon: Microscope, color: 'from-orange-500 to-red-600' },
  { name: 'Pricing', href: '/pricing', icon: DollarSign, color: 'from-yellow-500 to-orange-600' },
  { name: 'Contact', href: '/contact', icon: MessageCircle, color: 'from-pink-500 to-rose-600' }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: Globe2 },
  { name: 'Support', href: '/support', icon: MessageCircle }
];

export default function UltraFuturisticNavigation2034() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-black via-purple-900/40 to-black border-b border-purple-500/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm text-purple-300">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="hover:text-purple-200 transition-colors">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="hover:text-purple-200 transition-colors">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="hover:text-purple-200 transition-colors">{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-300">Leading Innovation Since 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-300">500%+ ROI Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-black via-gray-900/90 to-black border-b border-purple-500/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-gray-400">2034 Innovation Leader</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <Layers className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 border border-purple-500/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-xl">
                  <div className="p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-purple-900/20 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                                    {service.name}
                                  </h4>
                                  <p className="text-xs text-gray-500">{service.description}</p>
                                </div>
                                <span className="text-xs font-semibold text-purple-400">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 border border-purple-500/30 text-purple-400 rounded-xl font-medium hover:bg-purple-500/10 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-b border-purple-500/20 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 p-3 rounded-lg hover:bg-purple-900/20"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-purple-500/30 pb-2">
                  Our Services
                </h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <category.icon className={`w-5 h-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                      <h4 className="text-md font-medium text-white">{category.title}</h4>
                    </div>
                    <div className="ml-8 space-y-2">
                      {category.services.slice(0, 3).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeMenu}
                          className="block text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-purple-500/30">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}