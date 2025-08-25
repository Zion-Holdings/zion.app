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
      icon: '🤖',
      description: 'Explore our comprehensive service offerings',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'AI & Machine Learning',
          items: [
            { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems' },
            { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
            { name: 'AI Content Generation', path: '/ai-content-generator' },
            { name: 'AI Marketing Automation', path: '/ai-content-marketing-automation' },
            { name: 'AI Code Review', path: '/ai-code-review' },
            { name: 'AI Agents', path: '/ai-agents' }
          ]
        },
        {
          title: 'Quantum Technology',
          items: [
            { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform' },
            { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure' },
            { name: 'Quantum Financial Trading', path: '/quantum-financial-trading' },
            { name: 'Quantum Services', path: '/quantum-services' }
          ]
        },
        {
          title: 'Cybersecurity',
          items: [
            { name: 'AI-Powered Security', path: '/ai-powered-enterprise-security' },
            { name: 'Autonomous Security', path: '/ai-autonomous-security' },
            { name: 'Compliance Automation', path: '/ai-compliance-automation' }
          ]
        },
        {
          title: 'Infrastructure',
          items: [
            { name: 'IT Infrastructure', path: '/services/it-infrastructure' },
            { name: 'Cloud & DevOps', path: '/cloud-devops' },
            { name: 'Autonomous DevOps', path: '/autonomous-devops-platform' },
            { name: 'Enterprise IT', path: '/enterprise-it' }
          ]
        }
      ]
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Industry Solutions',
          items: [
            { name: 'Healthcare', path: '/solutions/healthcare' },
            { name: 'Manufacturing', path: '/ai-autonomous-manufacturing' },
            { name: 'Financial Services', path: '/ai-autonomous-business-operations' },
            { name: 'Retail', path: '/ai-market-research' },
            { name: 'Government', path: '/ai-autonomous-ecosystem' }
          ]
        },
        {
          title: 'Business Solutions',
          items: [
            { name: 'Business Intelligence', path: '/ai-business-intelligence' },
            { name: 'Process Automation', path: '/ai-autonomous-business-process-automation' },
            { name: 'Decision Engine', path: '/ai-autonomous-decision-engine' },
            { name: 'Ecosystem Manager', path: '/ai-autonomous-ecosystem-manager' }
          ]
        }
      ]
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/case-studies', 
      label: 'Case Studies', 
      icon: '📊',
      description: 'Success stories and results'
    },
    { 
      path: '/docs', 
      label: 'Documentation', 
      icon: '📚',
      description: 'Developer resources and guides'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

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
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 ${
                        isActive(item.path)
                          ? 'text-cyan-400 border border-cyan-400/50 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white border border-transparent'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
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
                  )}
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    {item.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 z-50">
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-6">
                          {item.dropdownItems?.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                                {section.title}
                              </h3>
                              <div className="space-y-2">
                                {section.items.map((subItem, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    to={subItem.path}
                                    className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-cyan-500/30">
                          <Link
                            to={item.path}
                            className="block text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All {item.label}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="px-4 py-2 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 text-sm font-medium"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Start Project
              </Link>
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
                  <div key={item.path}>
                    <Link
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
                    
                    {/* Mobile Dropdown Items */}
                    {item.hasDropdown && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-3">
                            <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2 px-3">
                              {section.title}
                            </h4>
                            <div className="space-y-1">
                              {section.items.map((subItem, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={subItem.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-2">
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-2 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-sm font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Project
                  </Link>
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
