import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Sparkles, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductDropdownOpen(false);
  }, [router.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProductDropdownOpen) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isProductDropdownOpen]);

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      description: '200+ Real Micro SaaS Solutions',
      icon: <Zap className="w-5 h-5" />,
      children: [
        { name: 'All Services', href: '/services' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Quantum Technology', href: '/quantum-services' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'IT Solutions', href: '/it-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Platform', href: '/cloud-platform' },
        { name: 'AI Assistant', href: '/ai-assistant' },
        { name: 'Status Pages & SLO', href: '/status-pages-slo' },
        { name: 'AI Synthetic Data Studio', href: '/services/ai-synthetic-data-studio' },
        { name: 'Zero-Trust SSO Mesh', href: '/services/zero-trust-sso-mesh' },
        { name: 'ETL Reliability Copilot', href: '/services/etl-reliability-copilot' },
        { name: 'Edge Personalization Kit', href: '/services/edge-personalization-kit' },
        { name: 'Kubernetes Cost Anomaly Guard', href: '/services/kubernetes-cost-anomaly-guard' },
        { name: 'AI Sales Sequence Personalizer', href: '/services/ai-sales-sequence-personalizer' },
        { name: 'Postgres Performance Tuner', href: '/services/postgres-performance-tuner' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      description: 'Industry-Specific Solutions',
      icon: <Sparkles className="w-5 h-5" />,
      children: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Government Solutions', href: '/solutions/government' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Education Solutions', href: '/solutions/education' },
        { name: 'Energy Solutions', href: '/solutions/energy' },
        { name: 'Transportation Solutions', href: '/solutions/transportation' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      description: 'About Zion Tech Group',
      icon: <Sparkles className="w-5 h-5" />,
      children: [
        { name: 'About Us', href: '/about' },
        { name: 'Mission', href: '/mission' },
        { name: 'Values', href: '/values' },
        { name: 'Team', href: '/team' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Culture', href: '/culture' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Investors', href: '/investors' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      description: 'Knowledge & Tools',
      icon: <Sparkles className="w-5 h-5" />,
      children: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api-docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Events', href: '/events' },
        { name: 'Training', href: '/training' },
        { name: 'Support Center', href: '/support' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Press', href: '/press' },
        { name: 'Media Kit', href: '/media-kit' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com'
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="Zion Tech Homepage">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                      aria-expanded={isProductDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isProductDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="product-menu-button"
                      >
                        <div className="grid gap-3">
                          {productDropdown.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                              onClick={() => setIsProductDropdownOpen(false)}
                              role="menuitem"
                            >
                              <div className="font-medium text-white mb-1">{product.name}</div>
                              <div className="text-sm text-gray-400">{product.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-4"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl">
                      {item.icon}
                      <div>
                        <div className="font-semibold text-white">{item.name}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="px-4 py-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
            <div className="py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2 text-gray-300 font-medium">{item.name}</div>
                      <div className="pl-8 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
                        isActive(item.href)
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {contactInfo.email}
                </a>
                <Button href="/contact" variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;