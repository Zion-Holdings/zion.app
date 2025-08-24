import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/', current: location.pathname === '/' },
    { name: 'About', path: '/about', current: location.pathname === '/about' },
    { name: 'Contact', path: '/contact', current: location.pathname === '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-cyan/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-2xl font-bold text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
              🚀
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent font-orbitron">
                Zion Tech Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'text-zion-slate-light hover:text-white hover:bg-zion-blue/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-zion-cyan">
              <span className="text-sm">📞</span>
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-cyan/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-zion-cyan text-zion-blue-dark'
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-blue/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-zion-cyan/20">
                <div className="px-3 py-2 text-zion-cyan text-sm">
                  📞 +1 302 464 0950
                </div>
                <Link
                  to="/contact"
                  className="block mt-2 px-3 py-2 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;