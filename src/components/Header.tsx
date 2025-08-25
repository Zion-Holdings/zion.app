import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  Globe,
  Sparkles,
  Zap,
  Brain,
  Shield,
  Users,
  Building,
  Rocket
} from 'lucide-react';

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
      hasDropdown: true
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true
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
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Business Intelligence', path: '/services#ai-bi', description: 'Advanced AI-powered analytics' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing', description: 'Intelligent marketing solutions' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr', description: 'Smart HR automation' },
        { name: 'AI Legal Tech', path: '/services#ai-legal', description: 'Legal process automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Quantum-Safe Security', path: '/services#quantum-security', description: 'Future-proof security' },
        { name: 'Security Assessment', path: '/services#security-assessment', description: 'Comprehensive security audits' },
        { name: 'Compliance & Audit', path: '/services#compliance', description: 'Regulatory compliance' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Migration', path: '/services#cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Network Infrastructure', path: '/services#network', description: 'Robust network solutions' },
        { name: 'Managed IT Services', path: '/services#managed-it', description: '24/7 IT support' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services#blockchain', description: 'Decentralized applications' },
        { name: 'Quantum Computing', path: '/services#quantum', description: 'Next-gen computing' },
        { name: 'Metaverse Platform', path: '/services#metaverse', description: 'Virtual business solutions' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      color: 'from-blue-500 to-indigo-500',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business transformation' },
        { name: 'Enterprise Integration', path: '/solutions/enterprise', description: 'Seamless system integration' },
        { name: 'Data Analytics', path: '/services#analytics', description: 'Advanced business intelligence' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      solutions: [
        { name: 'Healthcare', path: '/solutions/healthcare', description: 'HIPAA-compliant solutions' },
        { name: 'Finance', path: '/services#fintech', description: 'Regulatory-compliant fintech' },
        { name: 'Manufacturing', path: '/services#manufacturing', description: 'Smart manufacturing solutions' }
      ]
    }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+13024640950" className="flex items-center hover:text-zion-cyan transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-zion-cyan transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              kleber@ziontechgroup.com
            </a>
            <a href="https://ziontechgroup.com" className="flex items-center hover:text-zion-cyan transition-colors">
              <Globe className="w-4 h-4 mr-2" />
              ziontechgroup.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-zion-cyan font-semibold">24/7 Global Support</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-xs">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-cyan font-medium">Revolutionary Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors py-2 group"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white hover:text-zion-cyan transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-zion-cyan mb-4">{item.label}</h3>
                      <div className="space-y-3">
                        {item.label === 'Services' && serviceCategories.map((category) => (
                          <div key={category.title} className="group">
                            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                <category.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                  {category.title}
                                </h4>
                                <div className="space-y-1 mt-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.path}
                                      onClick={closeDropdowns}
                                      className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {item.label === 'Solutions' && solutionCategories.map((category) => (
                          <div key={category.title} className="group">
                            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                <category.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                  {category.title}
                                </h4>
                                <div className="space-y-1 mt-2">
                                  {category.solutions.map((solution) => (
                                    <Link
                                      key={solution.name}
                                      to={solution.path}
                                      onClick={closeDropdowns}
                                      className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors py-1"
                                    >
                                      {solution.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/services/comprehensive-showcase"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              <Zap className="w-4 h-4 inline mr-2" />
              View Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-zion-cyan transition-colors p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:text-zion-cyan transition-colors py-2 text-lg"
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.label === 'Services' && serviceCategories.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-zion-cyan font-semibold text-sm mb-2">{category.title}</h4>
                          <div className="ml-4 space-y-1">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-1 text-sm"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      {item.label === 'Solutions' && solutionCategories.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-zion-cyan font-semibold text-sm mb-2">{category.title}</h4>
                          <div className="ml-4 space-y-1">
                            {category.solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-1 text-sm"
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-zion-cyan/20">
                <Link
                  to="/services/comprehensive-showcase"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-semibold text-center mb-3"
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  View All Services
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
