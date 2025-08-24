import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Globe, Bot, Cloud, Shield, Sparkles, Rocket, Cpu, Database, Brain, Atom, Eye, Lock, BarChart3, Users, Target, TrendingUp, Star, Award, ZapIcon, CloudIcon, BotIcon, ShieldIcon, GlobeIcon, CpuIcon, DatabaseIcon, BrainIcon, AtomIcon, EyeIcon, LockIcon, BarChart3Icon, UsersIcon, TargetIcon, TrendingUpIcon, StarIcon, AwardIcon, DollarSign, FlaskConical, Leaf, Factory, ShieldCheck } from 'lucide-react';

const FuturisticNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const navItems = [
    { name: 'Home', href: '/', icon: <Zap className="w-4 h-4" /> },
    { name: 'Services', href: '/services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'AI & Quantum', href: '/services?category=AI%20%26%20Machine%20Learning', icon: <Bot className="w-4 h-4" /> },
    { name: 'Blockchain', href: '/services?category=Blockchain%20%26%20Web3', icon: <Globe className="w-4 h-4" /> },
    { name: 'Pricing', href: '/pricing', icon: <Shield className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Zap className="w-4 h-4" /> },
  ];

  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-blue-500/30 shadow-2xl shadow-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg shadow-blue-500/30">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
                    <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Zion Tech Group
          </span>
          <span className="text-xs text-gray-400 font-medium tracking-wider">
            REVOLUTIONARY AI & QUANTUM SOLUTIONS
          </span>
        </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
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

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="relative group bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 hover:from-blue-600 hover:via-purple-700 hover:to-cyan-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get Started</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-xl hover:bg-white/5"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-2xl border-t border-blue-500/20">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/5 group"
                >
                  <span className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-medium">{item.name}</span>
                    {item.description && (
                      <span className="text-xs text-gray-500">{item.description}</span>
                    )}
                  </div>
                </Link>
                
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                      >
                        <span className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                          {dropdownItem.icon}
                        </span>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                          {dropdownItem.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-700">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-white text-center py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}