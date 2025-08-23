import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Sparkles, ChevronDown, Brain, Rocket, Cpu, Shield, Globe, Users, FileText, BookOpen } from 'lucide-react';
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

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      description: '200+ Revolutionary Technology Solutions',
      icon: <Zap className="w-5 h-5" />,
      children: [
        { name: 'All Services', href: '/services' },
        { name: 'AI & Machine Learning', href: '/ai-services' },
        { name: 'Quantum Computing', href: '/quantum-services' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'IT Solutions', href: '/it-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Platform', href: '/cloud-platform' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      description: 'Industry-Specific Solutions',
      icon: <Sparkles className="w-5 h-5" />,
      children: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Industry Solutions', href: '/solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'AI Implementation', href: '/ai-implementation' },
        { name: 'Quantum Applications', href: '/quantum-applications' },
        { name: 'Space Intelligence', href: '/space-intelligence' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      description: 'Knowledge & Learning Hub',
      icon: <BookOpen className="w-5 h-5" />,
      children: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog & Articles', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Training', href: '/training' },
        { name: 'Support Center', href: '/support' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      description: 'About Zion Tech Group',
      icon: <Users className="w-5 h-5" />,
      children: [
        { name: 'About Us', href: '/about' },
        { name: 'Mission & Vision', href: '/mission' },
        { name: 'Team', href: '/team' },
        { name: 'Partners', href: '/partners' },
        { name: 'Investors', href: '/investors' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/news' }
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors py-2"
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

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
              >
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
                <span className="xl:hidden">Call</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
              >
                <span className="hidden xl:inline">{contactInfo.email}</span>
                <span className="xl:hidden">Email</span>
              </a>
            </div>
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
                            key={child.name}
                            href={child.href}
                            className="block py-2 text-gray-400 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="px-4 py-4 border-t border-gray-700/50 space-y-3">
                <div className="text-sm text-gray-400">Contact Information</div>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="block text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-purple-400 hover:text-purple-300 transition-colors"
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