import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, 
  Cpu, Database, Atom, Users, Award, BookOpen, Phone
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'All Services', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative services' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: '/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: '/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },
    { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant', icon: Brain, description: 'Autonomous AI research platform' },
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all services' }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our mission and team' },
    { name: 'Portfolio', href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' },
    { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                        Our Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-200">
                              <service.icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-medium text-sm">{service.name}</p>
                              <p className="text-white/60 text-xs mt-1 leading-relaxed">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                        Company
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-200">
                              <item.icon className="w-4 h-4 text-pink-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-medium text-sm">{item.name}</p>
                              <p className="text-white/60 text-xs mt-1 leading-relaxed">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <Link href="/solutions" className="text-white/80 hover:text-white transition-colors duration-200">
              Solutions
            </Link>
            <Link href="/resources" className="text-white/80 hover:text-white transition-colors duration-200">
              Resources
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {/* Mobile Services */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={closeAllDropdowns}
                      className="block text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">Company</h3>
                <div className="space-y-2">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAllDropdowns}
                      className="block text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Direct Links */}
              <div className="space-y-2">
                <Link
                  href="/solutions"
                  onClick={closeAllDropdowns}
                  className="block text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  Solutions
                </Link>
                <Link
                  href="/resources"
                  onClick={closeAllDropdowns}
                  className="block text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  Resources
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeAllDropdowns}
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium text-center transition-all duration-200"
                >
                  Get Started
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
