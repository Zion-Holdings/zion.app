import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Search, User, Settings, Bell, Zap, Globe, Shield, Cpu, Database, Bot, Cloud, BarChart3, Palette, Code, BookOpen, Activity, Smartphone, MessageSquare, FileText, Calendar, CreditCard, TrendingUp, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Play, Mail, Phone, MapPin } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: 'Micro SaaS',
    href: '/micro-saas',
    icon: <Cpu className="w-5 h-5" />,
    description: '55+ Real Micro SaaS Services',
    children: [
      { name: 'AI Services', href: '/micro-saas?category=ai', icon: <Bot className="w-4 h-4" /> },
      { name: 'Business Tools', href: '/micro-saas?category=business', icon: <Building className="w-4 h-4" /> },
      { name: 'Development', href: '/micro-saas?category=development', icon: <Code className="w-4 h-4" /> },
      { name: 'Marketing', href: '/micro-saas?category=marketing', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Analytics', href: '/micro-saas?category=analytics', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Settings className="w-5 h-5" />,
    description: 'Enterprise Solutions',
    children: [
      { name: 'AI Automation', href: '/services?category=ai', icon: <Bot className="w-4 h-4" /> },
      { name: 'Cloud Infrastructure', href: '/services?category=cloud', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Security & Compliance', href: '/services?category=security', icon: <Shield className="w-4 h-4" /> },
      { name: 'Data Analytics', href: '/services?category=analytics', icon: <BarChart3 className="w-4 h-4" /> },
      { name: 'DevOps & CI/CD', href: '/services?category=devops', icon: <Activity className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent Pricing',
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge Base',
    children: [
      { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <Target className="w-4 h-4" /> },
      { name: 'API Reference', href: '/docs/api', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    name: 'About',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'Our Story',
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Get in Touch',
  },
];

export default function FuturisticNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Holographic scan line effect */}
      <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                {/* Holographic glow effect */}
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-blue-300/60">Innovation • Intelligence • Impact</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.children && handleDropdownToggle(item.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    router.pathname === item.href
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-4">
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-blue-300/60">{item.description}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeAllDropdowns}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-200 group"
                          >
                            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-200">
                              {child.icon}
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                              {child.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>

            {/* User menu */}
            <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-blue-500/20">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={closeAllDropdowns}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    router.pathname === item.href
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
                
                {/* Mobile submenu */}
                {item.children && (
                  <div className="ml-8 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={closeAllDropdowns}
                        className="flex items-center space-x-3 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                      >
                        {child.icon}
                        <span className="text-sm">{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-blue-500/20">
              <Link
                href="/contact"
                onClick={closeAllDropdowns}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Contact info banner */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-blue-500/20 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}