import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/services',
      dropdown: [
        { name: 'AI Automation', href: '/services#ai-automation' },
        { name: 'Cloud Infrastructure', href: '/services#cloud' },
        { name: 'DevOps Solutions', href: '/services#devops' },
        { name: 'Security & Compliance', href: '/services#security' }
      ]
    },
    { name: 'Solutions', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => router.pathname === href;

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-110" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center space-x-1 ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 animate-fade-in">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/docs"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Docs
            </Link>
            <Link
              href="/contact"
              className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 animate-fade-in">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/docs"
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  href="/contact"
                  className="block mx-4 mt-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-center transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;