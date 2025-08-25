import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const services = [
    { name: 'Micro SAAS Services', path: '/micro-saas-services' },
    { name: 'AI & Machine Learning', path: '/ai-services' },
    { name: 'Enterprise Solutions', path: '/enterprise-solutions' },
    { name: 'Cloud & DevOps', path: '/cloud-devops-solutions' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
    { name: 'IT Onsite Services', path: '/it-onsite-services' },
  ];

  return (
    <header className="bg-zion-blue/95 backdrop-blur-md border-b border-zion-purple/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-zion-blue-light/95 backdrop-blur-md border border-zion-purple/20 rounded-xl shadow-2xl shadow-zion-purple/20 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-4">
                  {services.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path} 
                      className="block px-6 py-3 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-all duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200">
              Talent
            </Link>
            <Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200">
              Equipment
            </Link>
            <Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200">
              Pricing
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-200">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-200">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-zion-slate-light hover:text-zion-cyan p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-zion-blue-light/95 backdrop-blur-md border-t border-zion-purple/20">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-zion-slate-light hover:text-zion-cyan py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button 
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-zion-slate-light hover:text-zion-cyan py-2 text-base font-medium transition-colors duration-200"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link 
                        key={service.path}
                        to={service.path} 
                        className="block text-zion-slate-light hover:text-zion-cyan py-2 text-sm transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/talent" 
                className="block text-zion-slate-light hover:text-zion-cyan py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talent
              </Link>
              <Link 
                to="/equipment" 
                className="block text-zion-slate-light hover:text-zion-cyan py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Equipment
              </Link>
              <Link 
                to="/pricing" 
                className="block text-zion-slate-light hover:text-zion-cyan py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="block text-zion-slate-light hover:text-zion-cyan py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link to="/login" className="block w-full">
                  <Button variant="outline" size="sm" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-200">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" className="block w-full">
                  <Button size="sm" className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-200">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};