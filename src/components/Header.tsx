import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Bell,
  MessageSquare,
  Zap,
  Brain,
  Code,
  Shield
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai', icon: <Brain className="w-4 h-4" /> },
        { name: 'IT Services', href: '/services?category=it', icon: <Code className="w-4 h-4" /> },
        { name: 'Micro SAAS', href: '/services?category=saas', icon: <Zap className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: <User className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <MessageSquare className="w-4 h-4" />
    }
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
          />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-cyan-400">Future Technology</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                        isActiveRoute(item.href)
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                                  {dropdownItem.icon}
                                </div>
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActiveRoute(item.href)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            {/* Search Button */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-8 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.icon}
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800/50">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;