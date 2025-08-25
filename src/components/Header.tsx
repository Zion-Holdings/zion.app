import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Zap, Shield, Cpu, Cloud, Brain, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions for business transformation',
      icon: Brain,
      link: '/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise IT Services',
      description: 'Comprehensive IT infrastructure and security solutions',
      icon: Shield,
      link: '/it-services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Micro SAAS Services',
      description: 'Custom software solutions for modern businesses',
      icon: Cpu,
      link: '/micro-saas-services',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation',
      icon: Cloud,
      link: '/cloud-devops',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business modernization',
      icon: Rocket,
      link: '/digital-transformation',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Emerging Tech',
      description: 'Next-generation technology solutions',
      icon: Zap,
      link: '/emerging-tech',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-zion-slate-light -mt-1">Innovation • Technology • Future</p>
                </div>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActive('/') ? 'text-zion-cyan' : 'text-white'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="px-3 py-2 text-sm font-medium text-white hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 p-6"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.title}
                            to={service.link}
                            className="group p-4 rounded-xl hover:bg-zion-blue-light/10 transition-all duration-300 border border-transparent hover:border-zion-cyan/30"
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                  {service.title}
                                </h3>
                                <p className="text-sm text-zion-slate-light mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActive('/about') ? 'text-zion-cyan' : 'text-white'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActive('/contact') ? 'text-zion-cyan' : 'text-white'
              }`}
            >
              Contact
            </Link>
            
            <Link 
              to="/blog" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActive('/blog') ? 'text-zion-cyan' : 'text-white'
              }`}
            >
              Blog
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
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
            className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  isActive('/') ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="px-3 py-2 text-base font-medium text-zion-slate-light">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.link}
                    className="block px-6 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  isActive('/about') ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  isActive('/contact') ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/blog" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  isActive('/blog') ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Sign In
                </Button>
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};