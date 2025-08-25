import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
      path: '/services', 
      label: 'Services', 
      icon: '⚡',
      description: 'Explore our comprehensive services'
    },
    { 
      path: '/advanced-services', 
      label: 'Advanced SAAS', 
      icon: '🚀',
      description: 'Cutting-edge micro SAAS solutions',
      hasDropdown: true,
      dropdownItems: [
        { path: '/ai-services', label: 'AI Services', icon: '🤖' },
        { path: '/quantum-computing', label: 'Quantum Computing', icon: '⚛️' },
        { path: '/cybersecurity', label: 'Cybersecurity', icon: '🔒' },
        { path: '/edge-computing', label: 'Edge Computing', icon: '🌐' },
        { path: '/blockchain', label: 'Blockchain', icon: '⛓️' },
        { path: '/devops-automation', label: 'DevOps Automation', icon: '⚙️' }
      ]
    },
    { 
      path: '/comprehensive-services', 
      label: 'All Services', 
      icon: '📊',
      description: 'Complete service catalog'
    },
    { 
      path: '/it-onsite-services', 
      label: 'Onsite IT', 
      icon: '🔧',
      description: 'Professional IT support services'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with our team'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/40 shadow-2xl shadow-cyan-500/30' 
        : 'bg-gradient-to-r from-black/90 via-blue-900/90 to-purple-900/90 backdrop-blur-md'
    }`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 animate-pulse"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            {i % 2 === 0 ? (
              <div className="w-full h-full border border-cyan-400/30 rotate-45"></div>
            ) : (
              <div className="w-full h-full border border-blue-400/30 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300 group-hover:scale-110">
                Z
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              {/* Animated Ring */}
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg animate-ping opacity-75"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400 -mt-1">The Future of Tech & AI</p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/60 shadow-lg shadow-cyan-500/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.hasDropdown ? item.path : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <span className="text-xs transition-transform duration-300 group-hover:rotate-180">▼</span>
                    )}
                  </span>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/15 to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isActive(item.path) ? 'opacity-100' : ''
                  }`}></div>
                  
                  {/* Active Indicator */}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.path && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                    <div className="p-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 group"
                        >
                          <span className="text-lg">{dropdownItem.icon}</span>
                          <div>
                            <div className="font-medium">{dropdownItem.label}</div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-300">
                              Advanced {dropdownItem.label.toLowerCase()} solutions
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Enhanced Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-cyan-400 font-medium hover:text-cyan-300 transition-colors cursor-pointer">
                +1 302 464 0950
              </p>
              <p className="text-xs text-gray-400 hover:text-gray-300 transition-colors cursor-pointer">
                kleber@ziontechgroup.com
              </p>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transform hover:scale-105 border border-cyan-400/30">
              Get Quote
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 relative group"
          >
            <div className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              {/* Animated Ring */}
              <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-ping opacity-75"></div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-xl rounded-xl border border-cyan-500/40 shadow-2xl shadow-cyan-500/30">
              {navigationItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/60'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    {item.description && (
                      <p className="text-xs text-gray-500 mt-1 ml-8">{item.description}</p>
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-colors duration-200"
                        >
                          <span className="flex items-center space-x-2">
                            <span>{dropdownItem.icon}</span>
                            <span>{dropdownItem.label}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Enhanced Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/40">
                <div className="px-3 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg">
                  <p className="text-sm text-cyan-400 font-medium">+1 302 464 0950</p>
                  <p className="text-xs text-gray-400">kleber@ziontechgroup.com</p>
                </div>
                <button className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
