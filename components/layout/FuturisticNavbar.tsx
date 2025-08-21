import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Globe, Bot, Cloud, Shield } from 'lucide-react';

export default function FuturisticNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Zap className="w-4 h-4" /> },
    { 
      name: 'Services', 
      href: '/services', 
      icon: <Cloud className="w-4 h-4" />,
      submenu: [
        { name: 'AI & Machine Learning', href: '/services#ai', icon: '🤖' },
        { name: 'Quantum Computing', href: '/services#quantum', icon: '⚛️' },
        { name: 'Cybersecurity', href: '/services#security', icon: '🔒' },
        { name: 'Cloud & Infrastructure', href: '/services#cloud', icon: '☁️' },
        { name: 'Data Analytics & BI', href: '/services#analytics', icon: '📊' },
        { name: 'Blockchain & Web3', href: '/services#blockchain', icon: '🔗' },
        { name: 'AR/VR & Metaverse', href: '/services#metaverse', icon: '🌐' },
        { name: 'Edge Computing & 5G', href: '/services#edge', icon: '⚡' }
      ]
    },
    { name: 'Micro SaaS', href: '/micro-saas', icon: <Bot className="w-4 h-4" /> },
    { name: 'Pricing', href: '/pricing', icon: <Globe className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <Shield className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Zap className="w-4 h-4" /> },
  ];

  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="relative">
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
                
                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-blue-500/20 rounded-xl shadow-2xl shadow-blue-500/10 z-50">
                    <div className="p-4">
                      {item.submenu.map((subitem, index) => (
                        <Link
                          key={index}
                          href={subitem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group"
                        >
                          <span className="text-lg">{subitem.icon}</span>
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {subitem.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-blue-500/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}