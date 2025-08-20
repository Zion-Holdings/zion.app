import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Zap, Globe, Shield } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Product', href: '#', hasDropdown: true },
    { name: 'Solutions', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const productDropdown = [
    { name: 'AI Code Assistant', href: '/ai-assistant', description: 'Intelligent code completion and suggestions', icon: '🤖' },
    { name: 'Cloud Platform', href: '/cloud-platform', description: 'Scalable cloud infrastructure', icon: '☁️' },
    { name: 'Automation Hub', href: '/automation', description: 'AI-powered workflow automation', icon: '⚡' },
    { name: 'Analytics', href: '/analytics', description: 'Real-time insights and reporting', icon: '📊' },
    { name: 'Micro SaaS Services', href: '/micro-saas', description: 'Specialized business solutions', icon: '🚀' },
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Futuristic Background Glow */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                Zion Tech
              </span>
              <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-105 group"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    </button>
                    
                    {isProductDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-4 animate-fade-in-up">
                        <div className="grid gap-3">
                          {productDropdown.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 group hover:scale-105"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                                {product.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                                  {product.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  {product.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
            >
              Contact
            </Link>
            <Link
              href="/micro-saas"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/20 animate-fade-in-down">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">{item.name}</div>
                    <div className="ml-4 space-y-2">
                      {productDropdown.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="text-xl mr-3">{product.icon}</div>
                          <div>
                            <div className="font-medium text-white">{product.name}</div>
                            <div className="text-sm text-gray-400">{product.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/20">
              <Link
                href="/contact"
                className="block px-4 py-3 text-center text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 mb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/micro-saas"
                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-center transition-all duration-300 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;