import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchModal from './SearchModal';
import CookieConsent from './CookieConsent';
import BackToTop from './BackToTop';
import ProgressBar from './ProgressBar';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: 'ℹ️' },
    { name: 'Services', href: '/services', icon: '🚀' },
    { name: 'Products', href: '/products', icon: '💎' },
    { name: 'Case Studies', href: '/case-studies', icon: '📊' },
    { name: 'Testimonials', href: '/testimonials', icon: '⭐' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Careers', href: '/careers', icon: '💼' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      {/* Progress Bar */}
      <ProgressBar />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-200">
              Z
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-500">Innovation & Technology</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <span>🔍</span>
              <span className="text-sm">Search</span>
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">⌘K</kbd>
            </button>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full flex items-center justify-center space-x-2 px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <span>🔍</span>
                <span>Search</span>
              </button>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
      
      {/* Back to Top Button */}
      <BackToTop />
    </nav>
    </>
  );
};

export default Navigation;