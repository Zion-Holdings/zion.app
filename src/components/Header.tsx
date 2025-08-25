import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/futuristic.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Services', path: '/services', icon: '🚀' },
    { name: 'AI Solutions', path: '/ai-solutions', icon: '🤖' },
    { name: 'Micro SAAS', path: '/micro-saas', icon: '💻' },
    { name: 'IT Services', path: '/it-services', icon: '🖥️' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'futuristic-nav' : 'bg-transparent'
    }`}>
      {/* Matrix Rain Effect for Header */}
      <div className="absolute inset-0 matrix-rain opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-3xl font-bold neon-text group-hover:scale-110 transition-transform duration-300">
              ZION
            </div>
            <div className="text-xl font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
              TECH GROUP
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`futuristic-nav-item flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="futuristic-btn px-6 py-2 text-sm">
              Get Started
            </button>
            <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-border">
              Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="futuristic-nav border-t border-cyan-400/30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`futuristic-nav-item flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-6 pt-6 border-t border-cyan-400/30 space-y-3">
              <button className="futuristic-btn w-full py-3">
                Get Started
              </button>
              <button className="w-full py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-border">
                Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Info */}
      <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-400/30 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm text-cyan-400">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}