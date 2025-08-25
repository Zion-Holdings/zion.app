import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/enhanced-services', 
      label: 'Services', 
      icon: '🚀',
      description: 'Explore our comprehensive service catalog'
    },
    { 
      path: '/ai-solutions', 
      label: 'AI Solutions', 
      icon: '🤖',
      description: 'Advanced AI and machine learning services'
    },
    { 
      path: '/emerging-tech', 
      label: 'Emerging Tech', 
      icon: '⚡',
      description: 'Cutting-edge technology solutions'
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
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr' },
        { name: 'AI Legal Tech', path: '/services#ai-legal' }
      ]
    },
    {
      title: 'Cybersecurity',
      services: [
        { name: 'Quantum-Safe Security', path: '/services#quantum-security' },
        { name: 'Security Assessment', path: '/services#security-assessment' },
        { name: 'Compliance & Audit', path: '/services#compliance' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Migration', path: '/services#cloud-migration' },
        { name: 'Network Infrastructure', path: '/services#network' },
        { name: 'Managed IT Services', path: '/services#managed-it' }
      ]
    },
    {
      title: 'Emerging Tech',
      services: [
        { name: 'Blockchain Solutions', path: '/services#blockchain' },
        { name: 'Quantum Computing', path: '/services#quantum' },
        { name: 'IoT & Edge Computing', path: '/services#iot-edge' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-gradient-to-r from-black/80 via-blue-900/80 to-purple-900/80 backdrop-blur-md'
      }`}>
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 futuristic-bg opacity-60"></div>
        
        {/* Enhanced Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/20 text-xs animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300 group-hover:scale-110">
                    Z
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    The Tech & AI Marketplace
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 ${
                      isActive(item.path)
                        ? 'text-cyan-400 border border-cyan-400/50 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white border border-transparent'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    {item.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-4 py-2 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 text-sm font-medium">
                Get Quote
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Start Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-xl rounded-xl border border-cyan-500/30 mt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-400/50'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                      </div>
                    </div>
                  </Link>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-2">
                  <button className="w-full px-4 py-2 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-sm font-medium">
                    Get Quote
                  </button>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium">
                    Start Project
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping animate-energy-pulse"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse animate-energy-pulse"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce animate-energy-pulse"></div>
        
        {/* Additional Quantum Particles */}
        <div className="absolute top-40 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-ping animate-energy-pulse animation-delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-blue-400 rounded-full animate-ping animate-energy-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-40 w-1 h-1 bg-purple-400 rounded-full animate-ping animate-energy-pulse animation-delay-3000"></div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
