import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Search, Bell, User, Settings, LogOut, SparklesIcon,
  Home, Briefcase, BookOpen, Users as Team, MessageCircle,
  DollarSign, Grid, List, ArrowRight
} from 'lucide-react';

// Import all the new service data
import { revolutionary2026AIAutomationServices } from '../../data/revolutionary-2026-ai-automation-services';
import { revolutionary2026EmergingTechServices } from '../../data/revolutionary-2026-emerging-tech-services';
import { revolutionary2026HealthcareBiotechServices } from '../../data/revolutionary-2026-healthcare-biotech-services';
import { revolutionary2026FintechBlockchainServices } from '../../data/revolutionary-2026-fintech-blockchain-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness 2026',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Next-generation AI consciousness solutions',
    services: revolutionary2026AIAutomationServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Rocket,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge emerging tech solutions',
    services: revolutionary2026EmergingTechServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  },
  {
    title: 'Healthcare & Biotech 2026',
    icon: Shield,
    color: 'from-teal-600 to-cyan-600',
    description: 'Revolutionary healthcare innovations',
    services: revolutionary2026HealthcareBiotechServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  },
  {
    title: 'Fintech & Blockchain 2026',
    icon: DollarSign,
    color: 'from-yellow-600 to-orange-600',
    description: 'Next-generation financial technology',
    services: revolutionary2026FintechBlockchainServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  }
];

const companyLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/revolutionary-2026-services', icon: Rocket },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const Revolutionary2026UltimateNavigation = () => {
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

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900 to-cyan-900 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-purple-400 hover:text-white transition-colors">
                Get Started
              </Link>
              <Link href="/pricing" className="text-purple-400 hover:text-white transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Zion Tech Group</div>
              <div className="text-xs text-purple-400">Revolutionary 2026</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Revolutionary Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[800px] bg-gray-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-500/10"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-white">{category.title}</h3>
                                <p className="text-sm text-gray-400">{category.description}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={closeAllDropdowns}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-sm`}>
                                    {service.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-sm text-gray-400">{service.description}</div>
                                  </div>
                                  <div className="text-sm text-purple-400 font-semibold">{service.price}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-purple-500/20">
                        <Link
                          href="/revolutionary-2026-services"
                          onClick={closeAllDropdowns}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                        >
                          View All Revolutionary Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Links */}
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-purple-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Revolutionary Services</h3>
                <div className="space-y-3">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <div className="flex items-center gap-3 text-purple-400">
                        <category.icon className="w-5 h-5" />
                        <span className="font-medium">{category.title}</span>
                      </div>
                      <div className="ml-8 space-y-2">
                        {category.services.slice(0, 2).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeAllDropdowns}
                            className="block text-gray-300 hover:text-white transition-colors py-1"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Company Links */}
              <div className="space-y-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeAllDropdowns}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-purple-500/20">
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Revolutionary2026UltimateNavigation;