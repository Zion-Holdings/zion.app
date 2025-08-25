import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Zap, Globe, Shield, Cpu, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for business',
      icon: Brain,
      link: '/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure',
      icon: Globe,
      link: '/cloud-devops-solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      icon: Shield,
      link: '/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business operations',
      icon: Cpu,
      link: '/digital-transformation',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg shadow-zion-cyan/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-slate-light -mt-1">Innovation Unleashed</p>
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-200">
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-4 w-80 bg-zion-blue-light/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.link}
                        className="group p-4 rounded-xl hover:bg-zion-cyan/10 transition-all duration-200 border border-transparent hover:border-zion-cyan/30"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg mb-3 flex items-center justify-center`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-zion-slate-light leading-relaxed">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                    <Link
                      to="/services"
                      className="block text-center text-zion-cyan hover:text-white transition-colors text-sm font-medium"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/contact" 
              className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-200"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-200"
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
            className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              <nav className="space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm font-medium text-zion-cyan">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.link}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                >
                  About
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                >
                  Contact
                </Link>
              </nav>
              
              <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-200"
                >
                  Sign In
                </Button>
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-200"
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