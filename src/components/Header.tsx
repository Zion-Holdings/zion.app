import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Set initial mobile state
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'AI Services', 
      icon: '🤖',
      description: 'Explore our AI service offerings'
    },
    { 
      path: '/emerging-tech', 
      label: 'Emerging Tech', 
      icon: '🚀',
      description: 'Cutting-edge technology solutions'
    },
    { 
      path: '/comprehensive-services', 
      label: 'All Services', 
      icon: '⚡',
      description: 'Complete service catalog'
    },
    { 
      path: '/services-comparison', 
      label: 'Compare', 
      icon: '📊',
      description: 'Compare service options'
    },
    { 
      path: '/it-onsite-services', 
      label: 'Onsite IT', 
      icon: '🔧',
      description: 'Onsite IT support services'
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    },
    { 
      path: '/white-papers', 
      label: 'White Papers', 
      icon: '📄',
      description: 'Research and technical documentation'
    },
    { 
      path: '/events', 
      label: 'Events', 
      icon: '🎪',
      description: 'Conferences, workshops, and events'
    },
    { 
      path: '/webinars', 
      label: 'Webinars', 
      icon: '🎥',
      description: 'Live and on-demand learning sessions'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing' },
        { name: 'Machine Learning Models', path: '/services#ml-models' },
        { name: 'Natural Language Processing', path: '/services#nlp' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      services: [
        { name: 'Custom Web Applications', path: '/services#web-apps' },
        { name: 'API Development', path: '/services#api-dev' },
        { name: 'Cloud Infrastructure', path: '/services#cloud-infra' },
        { name: 'Database Design', path: '/services#database' }
      ]
    },
    {
      title: 'IT Infrastructure',
      services: [
        { name: 'Network Security', path: '/services#network-security' },
        { name: 'Cloud Migration', path: '/services#cloud-migration' },
        { name: '24/7 IT Support', path: '/services#it-support' },
        { name: 'Disaster Recovery', path: '/services#disaster-recovery' }
      ]
    }
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg md:text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg md:text-xl">Zion Tech Group</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                
                {/* Hover tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  {item.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                <div className="p-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h3 className="text-cyan-400 font-semibold text-sm mb-2">{category.title}</h3>
                      <div className="space-y-1">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40">
            <div className="fixed inset-y-0 right-0 w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50">
              <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                <h2 className="text-lg font-semibold text-white">Menu</h2>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="p-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleSidebar}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to="/contact"
                    onClick={toggleSidebar}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </header>
  );
}
