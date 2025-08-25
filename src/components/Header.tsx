import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Shield, Rocket, Globe, Building, Users, BarChart3, Palette, Code, Server, Wifi, Lock, Database, Brain as BrainIcon, Palette as PaletteIcon, Code as CodeIcon, Server as ServerIcon, Wifi as WifiIcon, Lock as LockIcon, Database as DatabaseIcon, Shield as ShieldIcon, Cloud as CloudIcon, Rocket as RocketIcon, Globe as GlobeIcon, Building as BuildingIcon, Users as UsersIcon, BarChart3 as BarChart3Icon } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActiveRoute = (path: string) => location.pathname === path;

  const servicesMenu = [
    {
      title: "Micro SAAS Services",
      path: "/micro-saas-services",
      icon: <Zap className="w-4 h-4" />,
      description: "Affordable software solutions"
    },
    {
      title: "AI & Machine Learning",
      path: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      description: "Intelligent automation"
    },
    {
      title: "Cloud & DevOps",
      path: "/cloud-devops-solutions",
      icon: <Cloud className="w-4 h-4" />,
      description: "Scalable infrastructure"
    },
    {
      title: "IT Services",
      path: "/it-services",
      icon: <Server className="w-4 h-4" />,
      description: "Enterprise IT solutions"
    },
    {
      title: "Cybersecurity",
      path: "/advanced-services",
      icon: <Shield className="w-4 h-4" />,
      description: "Advanced protection"
    },
    {
      title: "Emerging Tech",
      path: "/emerging-tech-services",
      icon: <Rocket className="w-4 h-4" />,
      description: "Cutting-edge solutions"
    },
    {
      title: "Industry Solutions",
      path: "/industry-solutions",
      icon: <Building className="w-4 h-4" />,
      description: "Sector-specific expertise"
    }
  ];

  const solutionsMenu = [
    {
      title: "Digital Transformation",
      path: "/digital-transformation",
      icon: <Globe className="w-4 h-4" />,
      description: "Modernize your business"
    },
    {
      title: "Enterprise Solutions",
      path: "/enterprise-solutions",
      icon: <Users className="w-4 h-4" />,
      description: "Large-scale implementations"
    },
    {
      title: "AI Business Solutions",
      path: "/ai-business-solutions",
      icon: <BrainIcon className="w-4 h-4" />,
      description: "AI-powered business tools"
    },
    {
      title: "Green IT Solutions",
      path: "/green-it",
      icon: <Palette className="w-4 h-4" />,
      description: "Sustainable technology"
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-gradient-to-r from-black/80 via-zion-blue-dark/90 to-black/80 backdrop-blur-sm'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-zion-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group" onClick={closeMenu}>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center shadow-lg shadow-zion-cyan/25 group-hover:shadow-zion-cyan/40 transition-all duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent group-hover:from-zion-cyan group-hover:to-zion-purple transition-all duration-300">
                    Zion Tech Group
                  </h1>
                  <div className="text-xs text-zion-slate-light font-medium">Innovation • Technology • Growth</div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20 shadow-lg shadow-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-zion-cyan/10 transition-all duration-200 group/item"
                        onClick={closeMenu}
                      >
                        <div className="text-zion-cyan group-hover/item:text-zion-cyan-light transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-zion-slate-light">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-zion-cyan/10 transition-all duration-200 group/item"
                        onClick={closeMenu}
                      >
                        <div className="text-zion-cyan group-hover/item:text-zion-cyan-light transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-zion-slate-light">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/about') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20 shadow-lg shadow-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/contact') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20 shadow-lg shadow-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>

            <Link 
              to="/pricing" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/pricing') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20 shadow-lg shadow-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              Pricing
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-4 space-y-2 border-t border-zion-cyan/20">
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="px-4 py-3">
              <div className="text-sm font-medium text-zion-cyan mb-2">Services</div>
              <div className="space-y-2 ml-4">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-sm text-gray-300 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Solutions */}
            <div className="px-4 py-3">
              <div className="text-sm font-medium text-zion-cyan mb-2">Solutions</div>
              <div className="space-y-2 ml-4">
                {solutionsMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-sm text-gray-300 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/about" 
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/about') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/contact') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>

            <Link 
              to="/pricing" 
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActiveRoute('/pricing') 
                  ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              Pricing
            </Link>

            {/* Mobile CTA Buttons */}
            <div className="px-4 py-3 space-y-2">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300"
              >
                Sign In
              </Button>
              <Button 
                size="sm"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};