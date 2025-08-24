import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Enhanced Services', href: '/enhanced-services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Cybersecurity', href: '/cybersecurity-services' },
    { name: 'Comprehensive Services', href: '/comprehensive-services' },
    { name: 'Micro SAAS', href: '/micro-saas-services' },
    { name: 'IT Onsite', href: '/it-onsite-services' },
    { name: 'Contact', href: '/comprehensive-contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-zion-cyan'
                    : 'text-zion-cyan-light hover:text-zion-cyan'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-4 w-4 mr-2" />
              +1 302 464 0950
            </Button>
            <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zion-cyan hover:text-zion-cyan-light"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zion-blue-light/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-zion-cyan'
                      : 'text-zion-cyan-light hover:text-zion-cyan'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 302 464 0950
                </Button>
                <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}