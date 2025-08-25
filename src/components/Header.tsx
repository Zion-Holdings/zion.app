import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/services', label: 'Services', icon: '⚡' },
    { path: '/comprehensive-services', label: 'All Services', icon: '🚀' },
    { path: '/services-comparison', label: 'Compare', icon: '📊' },
    { path: '/it-onsite-services', label: 'Onsite IT', icon: '🔧' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-gradient-to-r from-black/80 via-blue-900/80 to-purple-900/80 backdrop-blur-md'
      }`}>
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 futuristic-bg opacity-60"></div>
        
        {/* Enhanced Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Neural Network Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="neural-line" style={{ top: '25%', width: '30%', left: '0%', animationDelay: '0s' }}></div>
          <div className="neural-line" style={{ top: '45%', width: '40%', left: '30%', animationDelay: '1s' }}></div>
          <div className="neural-line" style={{ top: '65%', width: '35%', left: '20%', animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300 group-hover:scale-110 animate-quantum-float">
                  Z
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>
                {/* Quantum particles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold neon-text">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 -mt-1">The Tech & AI Marketplace</p>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/30 neon-border animate-neon-border-glow'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm animate-quantum-float">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
