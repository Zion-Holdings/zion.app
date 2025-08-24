import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  BarChart3, Code, Palette, Camera, Video, Music,
  Gamepad2, Car, Plane, Ship, Train, Bus
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge Innovations',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Quantum Financial Trading', href: '/ai-quantum-financial-trading-2028', description: 'Revolutionary quantum AI trading with 99.9% accuracy', price: '$2,999/month' },
      { name: 'Neural Interface Development', href: '/neural-interface-development-2028', description: 'Build the future of human-computer interaction', price: '$3,999/month' },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure-2028', description: 'The future of secure, ultra-fast internet', price: '$5,999/month' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai-2028', description: 'Revolutionize manufacturing with AI autonomy', price: '$2,499/month' }
    ]
  },
  {
    title: '🎯 Practical Micro SAAS 2028',
    icon: Target,
    color: 'from-blue-600 to-cyan-600',
    description: 'Real business solutions for today',
    services: [
      { name: 'Autonomous AI Marketing Suite', href: '/autonomous-ai-marketing-suite-2028', description: 'Fully automated marketing that thinks and learns', price: '$799/month' },
      { name: 'AI Healthcare Companion Platform', href: '/ai-healthcare-companion-2028', description: 'Revolutionary AI healthcare that saves lives', price: '$599/month' },
      { name: 'Quantum Supply Chain Optimization', href: '/quantum-supply-chain-optimization-2028', description: 'Revolutionary supply chain optimization', price: '$1,499/month' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform-2028', description: 'AI-powered space exploration and management', price: '$4,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing and space exploration',
    services: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform-2028', description: 'Unbreakable security through quantum encryption', price: '$1,999/month' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform-2028', description: 'Accelerate biotech discoveries with AI', price: '$1,999/month' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform', description: 'Brain-computer quantum interface', price: '$8,999/month' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$3,999/month' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning 2028',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      'AI Consciousness Simulation', 'AI Healthcare Companion', 'Autonomous AI Agents', 'AI Content Creation Revolution'
    ].map((name, index) => ({
      name,
      href: `/ai-${name.toLowerCase().replace(/\s+/g, '-')}-2028`,
      description: `Revolutionary ${name.toLowerCase()} platform`,
      price: `$${999 + index * 200}/month`
    }))
  },
  {
    title: '🏢 Enterprise Solutions 2028',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Enterprise-grade solutions',
    services: [
      'Zero Trust Architecture 2028', 'Edge Computing Orchestration', '5G Private Networks', 'Blockchain Infrastructure'
    ].map((name, index) => ({
      name,
      href: `/zero-trust-network-architecture-2026`,
      description: `Next-gen ${name.toLowerCase()} solution`,
      price: 'Custom pricing'
    }))
  },
  {
    title: '🌌 Metaverse & Digital Reality 2028',
    icon: Globe,
    color: 'from-pink-600 to-rose-600',
    description: 'Virtual and augmented reality',
    services: [
      'Holographic Metaverse', 'AI Multiverse Creation', 'Virtual Event Holograms', 'Digital Reality Interface'
    ].map((name, index) => ({
      name,
      href: `/holographic-metaverse-development-platform`,
      description: `3D ${name.toLowerCase()} experiences`,
      price: `$${1999 + index * 1000}/month`
    }))
  }
];

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '💼 Careers', href: '/careers', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
];

const quickServices = [
  { name: 'AI Development', href: '/ai-development', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom, color: 'from-blue-500 to-cyan-500' },
  { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
  { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, color: 'from-indigo-500 to-purple-500' },
  { name: 'Data Analytics', href: '/data-analytics', icon: BarChart3, color: 'from-green-500 to-emerald-500' },
  { name: 'Web Development', href: '/web-development', icon: Code, color: 'from-yellow-500 to-orange-500' }
];

export default function UltraFuturisticNavigation2028() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href={contactInfo.website} className="hover:text-cyan-300 transition-colors">
              🌐 {contactInfo.website.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30' 
          : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">2028 Future Technology</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Company Links */}
              <div className="flex items-center space-x-6">
                {companyLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{link.name.replace('🏠 ', '').replace('🚀 ', '').replace('⭐ ', '').replace('💰 ', '')}</span>
                  </Link>
                ))}
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group">
                  <Briefcase className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                            <category.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{category.title}</h3>
                            <p className="text-gray-400 text-sm">{category.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                                    {service.name}
                                  </p>
                                  <p className="text-gray-400 text-sm">{service.description}</p>
                                </div>
                                <span className="text-cyan-400 font-semibold">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Services */}
              <div className="flex items-center space-x-4">
                {quickServices.slice(0, 3).map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200`}
                    title={service.name}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
            >
              <div className="px-4 py-6 space-y-6">
                {/* Mobile Company Links */}
                <div className="grid grid-cols-2 gap-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200"
                    >
                      <link.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-white">{link.name.replace('🏠 ', '').replace('🚀 ', '').replace('⭐ ', '').replace('💰 ', '')}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">Our Services</h3>
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">{category.title}</span>
                      </div>
                      <div className="ml-11 space-y-2">
                        {category.services.slice(0, 2).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            onClick={closeMenu}
                            className="block p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-200"
                          >
                            <p className="text-gray-300 font-medium">{service.name}</p>
                            <p className="text-gray-500 text-sm">{service.description}</p>
                            <p className="text-cyan-400 text-sm font-semibold">{service.price}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
}