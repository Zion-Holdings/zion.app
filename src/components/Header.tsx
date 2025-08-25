<<<<<<< HEAD
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
                  
                  {/* Enhanced Hover Effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isActive(item.path) ? 'opacity-100' : ''
                  }`}></div>
                  
                  {/* Enhanced Active Indicator */}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animate-energy-pulse"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Enhanced Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 relative group"
                title="Open Navigation Menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Quantum particle effect on button */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="text-right">
                <p className="text-sm neon-text font-medium">+1 302 464 0950</p>
                <p className="text-xs text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <button className="quantum-button px-4 py-2 font-medium transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 relative group"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Quantum particle effect on button */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 relative group"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
                {/* Quantum particle effect on button */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 futuristic-card border border-cyan-500/30 shadow-xl shadow-cyan-500/20">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 neon-border'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <span className="text-lg animate-quantum-float">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  </Link>
                ))}
                
                {/* Enhanced Mobile Contact Info */}
                <div className="pt-4 border-t border-cyan-500/30">
                  <div className="px-3 py-2">
                    <p className="text-sm neon-text font-medium">+1 302 464 0950</p>
                    <p className="text-xs text-gray-400">kleber@ziontechgroup.com</p>
                  </div>
                  <button className="w-full mt-2 quantum-button font-medium">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Floating Quantum Elements */}
        <div className="absolute top-4 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping animate-energy-pulse"></div>
        <div className="absolute top-4 right-32 w-1 h-1 bg-blue-400 rounded-full animate-ping animate-energy-pulse animation-delay-1000"></div>
        <div className="absolute top-4 right-44 w-1 h-1 bg-purple-400 rounded-full animate-ping animate-energy-pulse animation-delay-2000"></div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
=======
export { Header } from './header/Header';
export type { HeaderProps } from './header/Header';
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
