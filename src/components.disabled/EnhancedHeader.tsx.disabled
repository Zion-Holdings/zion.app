import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Menu, X, Zap, Brain, Shield } from 'lucide-react';

export function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { path: '/', label: 'Home', icon: <Zap className="h-4 w-4" /> },
    { path: '/enhanced-services', label: 'Services', icon: <Brain className="h-4 w-4" /> },
    { path: '/about', label: 'About', icon: <Shield className="h-4 w-4" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/30 shadow-lg shadow-zion-purple/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-1/4 w-2 h-2 bg-zion-cyan rounded-full animate-pulse opacity-60" />
          <div className="absolute top-8 right-1/3 w-1 h-1 bg-zion-purple rounded-full animate-ping" />
          <div className="absolute top-12 left-1/2 w-1.5 h-1.5 bg-zion-cyan rounded-full animate-bounce" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-zion-slate-light">Innovation at Your Fingertips</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20'
                    : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 border border-transparent hover:border-zion-purple/30'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Phone className="h-4 w-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                <Mail className="h-4 w-4" />
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-zion-purple/30 bg-zion-blue-dark/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30'
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="px-4 py-4 border-t border-zion-purple/30 space-y-3">
                <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                  <Phone className="h-4 w-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                  <Mail className="h-4 w-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                  <MapPin className="h-4 w-4 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60" />
    </header>
  );
}