import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Memoized navigation items for better performance
  const navigationItems = useMemo(() => [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group',
      priority: 'high'
    },
    { 
      path: '/services', 
      label: 'AI Services', 
      icon: '🤖',
      description: 'Explore our AI service offerings',
      priority: 'high'
    },
    { 
      path: '/emerging-tech', 
      label: 'Emerging Tech', 
      icon: '🚀',
      description: 'Cutting-edge technology solutions',
      priority: 'medium'
    },
    { 
      path: '/comprehensive-services', 
      label: 'All Services', 
      icon: '⚡',
      description: 'Complete service catalog',
      priority: 'medium'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company',
      priority: 'medium'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us',
      priority: 'high'
    },
    { 
      path: '/white-papers', 
      label: 'White Papers', 
      icon: '📄',
      description: 'Research and technical documentation',
      priority: 'low'
    },
    { 
      path: '/events', 
      label: 'Events', 
      icon: '🎪',
      description: 'Conferences, workshops, and events',
      priority: 'low'
    },
    { 
      path: '/webinars', 
      label: 'Webinars', 
      icon: '🎥',
      description: 'Live and on-demand learning sessions',
      priority: 'low'
    }
  ], []);

  // Memoized service categories
  const serviceCategories = useMemo(() => [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing', description: 'Intelligent marketing solutions' },
        { name: 'Machine Learning Models', path: '/services#ml-models', description: 'Custom ML model development' }
      ]
    },
    {
      title: 'Emerging Technologies',
      services: [
        { name: 'Quantum Computing', path: '/services#quantum', description: 'Next-gen computing power' },
        { name: 'Blockchain Solutions', path: '/services#blockchain', description: 'Secure decentralized systems' },
        { name: 'IoT Integration', path: '/services#iot', description: 'Connected device ecosystems' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      services: [
        { name: 'Cloud Migration', path: '/services#cloud', description: 'Seamless cloud transitions' },
        { name: 'Cybersecurity', path: '/services#security', description: 'Advanced threat protection' },
        { name: 'Digital Transformation', path: '/services#digital', description: 'Complete business modernization' }
      ]
    }
  ], []);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 16); // ~60fps
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Throttle utility function
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(prev => !prev);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            aria-label="Zion Tech Group - Home"
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                Z
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400 hidden lg:block">Innovation • Technology • Future</p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigationItems.filter(item => item.priority === 'high').map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                title={item.description}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                
                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Active Indicator */}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* More Menu with Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center space-x-2">
                <span>More</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Enhanced Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4">
                  {navigationItems.filter(item => item.priority !== 'high').map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      title={item.description}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Search Button */}
            <button
              onClick={toggleSearch}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
              aria-label="Search"
              aria-expanded={isSearchOpen}
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Enhanced Contact Button */}
            <Link
              to="/contact"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in-down">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, solutions, or topics..."
                className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                autoFocus
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in-down">
            <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Enhanced Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
