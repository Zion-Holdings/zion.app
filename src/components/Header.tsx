import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Globe, Shield, Cpu, Brain, Rocket } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-cyan-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text-glow">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-400 font-mono tracking-wider">
                INNOVATION • INTELLIGENCE • IMPACT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className={`nav-link group relative ${
                  isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                } transition-colors duration-300`}
              >
                <span className="flex items-center space-x-2">
                  <Rocket className="w-4 h-4" />
                  <span>Home</span>
                </span>
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                  isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>

              <Link
                to="/services"
                className={`nav-link group relative ${
                  isActive('/services') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                } transition-colors duration-300`}
              >
                <span className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4" />
                  <span>Services</span>
                </span>
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                  isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>

              <Link
                to="/comprehensive-services"
                className={`nav-link group relative ${
                  isActive('/comprehensive-services') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                } transition-colors duration-300`}
              >
                <span className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>AI Solutions</span>
                </span>
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                  isActive('/comprehensive-services') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>

              <Link
                to="/it-onsite-services"
                className={`nav-link group relative ${
                  isActive('/it-onsite-services') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                } transition-colors duration-300`}
              >
                <span className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>IT Services</span>
                </span>
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                  isActive('/it-onsite-services') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>

              <Link
                to="/contact"
                className={`nav-link group relative ${
                  isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                } transition-colors duration-300`}
              >
                <span className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Contact</span>
                </span>
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                  isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="futuristic-btn group relative overflow-hidden"
                onClick={closeMenu}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-cyan-400" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="bg-black/95 backdrop-blur-xl border-t border-cyan-500/30">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`mobile-nav-link group ${
                  isActive('/') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={closeMenu}
              >
                <span className="flex items-center space-x-3">
                  <Rocket className="w-5 h-5" />
                  <span>Home</span>
                </span>
              </Link>

              <Link
                to="/services"
                className={`mobile-nav-link group ${
                  isActive('/services') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={closeMenu}
              >
                <span className="flex items-center space-x-3">
                  <Cpu className="w-5 h-5" />
                  <span>Services</span>
                </span>
              </Link>

              <Link
                to="/comprehensive-services"
                className={`mobile-nav-link group ${
                  isActive('/comprehensive-services') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={closeMenu}
              >
                <span className="flex items-center space-x-3">
                  <Brain className="w-5 h-5" />
                  <span>AI Solutions</span>
                </span>
              </Link>

              <Link
                to="/it-onsite-services"
                className={`mobile-nav-link group ${
                  isActive('/it-onsite-services') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={closeMenu}
              >
                <span className="flex items-center space-x-3">
                  <Shield className="w-5 h-5" />
                  <span>IT Services</span>
                </span>
              </Link>

              <Link
                to="/contact"
                className={`mobile-nav-link group ${
                  isActive('/contact') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={closeMenu}
              >
                <span className="flex items-center space-x-3">
                  <Globe className="w-5 h-5" />
                  <span>Contact</span>
                </span>
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/30">
                <Link
                  to="/contact"
                  className="w-full futuristic-btn text-center"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Energy Wave Effect */}
      <div className="energy-wave">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      </div>
    </header>
  );
};

// Add custom styles for mobile navigation
const mobileNavStyles = `
  .mobile-nav-link {
    @apply px-4 py-3 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-500/30;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileNavStyles;
  document.head.appendChild(style);
}