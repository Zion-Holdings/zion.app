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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain, description: 'Machine Learning & AI Services' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP Solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap, description: 'Business Process Modernization' }
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Services Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-300 text-sm">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
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
                  onClick={() => setIsMobileMenuOpen(false)}
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
                      onClick={() => setIsMobileMenuOpen(false)}
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