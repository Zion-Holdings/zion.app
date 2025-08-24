import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Phone, Mail, Building } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: 'Services', 
      href: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/services/ai-machine-learning', description: 'Custom AI models and automation' },
        { name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure', description: 'Cloud migration and optimization' },
        { name: 'Web & Mobile Development', href: '/services/web-mobile-development', description: 'Full-stack applications' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Blockchain & DeFi', href: '/services/blockchain-defi', description: 'Decentralized solutions' },
        { name: 'IoT & Smart Cities', href: '/services/iot-smart-cities', description: 'Connected infrastructure' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise IT', href: '/solutions/enterprise-it', description: 'Large-scale IT solutions' },
        { name: 'Micro SaaS', href: '/solutions/micro-saas', description: 'Professional business tools' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Business modernization' },
        { name: 'Research & Development', href: '/solutions/research-development', description: 'Innovation and R&D' }
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { 
      name: 'Company', 
      href: '/about', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'News & Updates', href: '/news', description: 'Latest developments' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' }
      ]
    },
    { name: 'Resources', href: '/resources' }
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
            {/* Contact Info */}
            <div className="flex items-center space-x-4 mr-6">
              <a href="tel:+13024640950" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>

            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') {
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                          setIsSolutionsDropdownOpen(false);
                          setIsCompanyDropdownOpen(false);
                        } else if (item.name === 'Solutions') {
                          setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                          setIsServicesDropdownOpen(false);
                          setIsCompanyDropdownOpen(false);
                        } else if (item.name === 'Company') {
                          setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                          setIsServicesDropdownOpen(false);
                          setIsSolutionsDropdownOpen(false);
                        }
                      }}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    {((item.name === 'Services' && isServicesDropdownOpen) ||
                      (item.name === 'Solutions' && isSolutionsDropdownOpen) ||
                      (item.name === 'Company' && isCompanyDropdownOpen)) && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                        <div className="p-4 space-y-3">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                setIsSolutionsDropdownOpen(false);
                                setIsCompanyDropdownOpen(false);
                              }}
                            >
                              <div className="font-medium text-white mb-1">{dropdownItem.name}</div>
                              <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActive(item.href)
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2 mb-4">
              {/* Contact Info Mobile */}
              <div className="px-3 py-2 space-y-2 border-b border-white/20 pb-4 mb-4">
                <a href="tel:+13024640950" className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>

              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-300">
                        {item.name}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
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
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}