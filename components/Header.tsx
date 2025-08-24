import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Zap, Globe, Shield, Brain, Rocket, Code } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
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
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', hasDropdown: true },
    { name: 'Industries', href: '/industries', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing-2025' }
  ];

  const servicesDropdown = [
    { name: 'AI & Machine Learning', href: '/services/ai-machine-learning', icon: Brain },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Zap },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure', icon: Globe },
    { name: 'Blockchain & DeFi', href: '/services/blockchain-defi', icon: Code },
    { name: 'Space Technology', href: '/services/space-technology', icon: Rocket }
  ];

  const solutionsDropdown = [
    { name: 'Financial Services', href: '/solutions/financial-services' },
    { name: 'Healthcare', href: '/solutions/healthcare' },
    { name: 'Manufacturing', href: '/solutions/manufacturing' },
    { name: 'Government', href: '/solutions/government' },
    { name: 'Education', href: '/solutions/education' },
    { name: 'Retail & E-commerce', href: '/solutions/retail-ecommerce' }
  ];

  const industriesDropdown = [
    { name: 'Banking & Finance', href: '/industries/banking-finance' },
    { name: 'Healthcare & Life Sciences', href: '/industries/healthcare-life-sciences' },
    { name: 'Manufacturing & Industry 4.0', href: '/industries/manufacturing-industry4' },
    { name: 'Government & Public Sector', href: '/industries/government-public-sector' },
    { name: 'Education & Research', href: '/industries/education-research' },
    { name: 'Retail & E-commerce', href: '/industries/retail-ecommerce' }
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
                      onClick={() => {
                        if (item.name === 'Services') {
                          setIsProductDropdownOpen(!isProductDropdownOpen);
                          setIsSolutionsDropdownOpen(false);
                        } else if (item.name === 'Solutions') {
                          setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                          setIsProductDropdownOpen(false);
                        } else if (item.name === 'Industries') {
                          // Handle industries dropdown
                        }
                      }}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Services Dropdown */}
                    {item.name === 'Services' && isProductDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {servicesDropdown.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                              >
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                  <service.icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200">
                                    {service.name}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && isSolutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {solutionsDropdown.map((solution) => (
                              <Link
                                key={solution.name}
                                href={solution.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                              >
                                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                  <Globe className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="text-white font-medium group-hover:text-green-400 transition-colors duration-200">
                                    {solution.name}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
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
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/20">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <div className="text-white font-medium mb-2">{item.name}</div>
                    <div className="ml-4 space-y-2">
                      {item.name === 'Services' && servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                      {item.name === 'Solutions' && solutionsDropdown.map((solution) => (
                        <Link
                          key={solution.name}
                          href={solution.href}
                          className="block text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}