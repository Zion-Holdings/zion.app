import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'FAQ', href: '/faq', current: location.pathname === '/faq' },
    { name: 'Help Center', href: '/help', current: location.pathname === '/help' }
  ];

  const services = [
    { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'Cloud Infrastructure', href: '/services/cloud', icon: Cloud, description: 'AWS, Azure, GCP Solutions' },
    { name: 'Cybersecurity', href: '/services/security', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/services/transformation', icon: Zap, description: 'Business Process Modernization' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.current
                    ? 'text-cyan-400'
                    : 'text-white/70 hover:text-cyan-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl"
                  >
                    <div className="p-4 space-y-3">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 mr-3" />
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-white/60">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side - Contact & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-white/70 hover:text-cyan-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a
              href="tel:+13024640950"
              className="flex items-center text-sm text-white/70 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center text-sm text-white/70 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-lg font-medium transition-colors ${
                    item.current
                      ? 'text-cyan-400'
                      : 'text-white/70 hover:text-cyan-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-white/20">
                <div className="text-lg font-medium text-white/70 mb-3">Services</div>
                <div className="space-y-3 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center text-white/70 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-white/20">
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    +1 (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}