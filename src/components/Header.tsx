import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Menu, 
  X, 
  Building, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Users,
  Globe,
  Zap,
  ChevronDown,
  Search,
  Phone,
  Mail,
  Code,
  Database,
  Lock,
  Cpu,
  Network,
  BarChart3,
  Palette,
  Smartphone,
  Server,
  Wifi,
  Target,
  Lightbulb,
  TrendingUp,
  Briefcase,
  Home,
  Info,
  MessageCircle,
  FileText,
  Settings,
  UserPlus
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { 
      name: 'Services', 
      href: '/services',
      icon: Rocket,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/ai-services-showcase', icon: Brain, description: 'Advanced AI solutions & automation' },
        { name: 'Cybersecurity', href: '/services', icon: Shield, description: 'Advanced threat protection & compliance' },
        { name: 'Cloud Solutions', href: '/services', icon: Cloud, description: 'Quantum cloud infrastructure & migration' },
        { name: 'Web Development', href: '/services', icon: Code, description: 'Modern web applications & e-commerce' },
        { name: 'Mobile Development', href: '/services', icon: Smartphone, description: 'iOS & Android applications' },
        { name: 'Data Analytics', href: '/analytics', icon: BarChart3, description: 'Business intelligence & insights' },
        { name: 'DevOps & Automation', href: '/services', icon: Server, description: 'CI/CD & infrastructure automation' },
        { name: 'IoT Solutions', href: '/services', icon: Wifi, description: 'Connected devices & smart systems' },
        { name: 'Digital Marketing', href: '/services', icon: Target, description: 'SEO, PPC & social media' },
        { name: 'IT Consulting', href: '/services', icon: Lightbulb, description: 'Strategic technology planning' },
        { name: 'Software Testing', href: '/services', icon: Cpu, description: 'QA & quality assurance' },
        { name: 'Blockchain', href: '/services', icon: Lock, description: 'DeFi & smart contracts' },
        { name: 'All Services', href: '/all-services', icon: Zap, description: 'Complete service portfolio' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/enterprise-solutions',
      icon: Briefcase,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building, description: 'Large-scale business solutions' },
        { name: 'Startup Solutions', href: '/services', icon: TrendingUp, description: 'Growth-focused technology services' },
        { name: 'Government Solutions', href: '/services', icon: Shield, description: 'Public sector technology services' },
        { name: 'Healthcare Solutions', href: '/services', icon: Users, description: 'Medical technology & compliance' },
        { name: 'Financial Solutions', href: '/services', icon: BarChart3, description: 'Fintech & banking technology' },
        { name: 'Education Solutions', href: '/services', icon: Lightbulb, description: 'EdTech & learning platforms' }
      ]
    },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const isActive = (path: string) => location.pathname === path;

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-glass-morphism-strong backdrop-blur-xl border-b border-zion-cyan/20 shadow-neon-strong' 
          : 'bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-2 right-1/3 w-0.5 h-0.5 bg-zion-purple rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-4 left-1/2 w-0.5 h-0.5 bg-zion-cyan rounded-full animate-pulse opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center group-hover:from-zion-purple group-hover:to-zion-cyan transition-all duration-300">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300" />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-zion-slate-light group-hover:text-zion-cyan/70 transition-colors duration-300">
                  Quantum Innovation
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan cursor-pointer transition-colors duration-300"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 font-medium transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-96 bg-glass-morphism-strong backdrop-blur-xl rounded-2xl border border-zion-cyan/20 shadow-neon-strong overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Dropdown Header */}
                    <div className="p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border-b border-zion-cyan/20">
                      <div className="text-sm font-semibold text-zion-cyan mb-1 uppercase tracking-wider">
                        {item.name}
                      </div>
                      <div className="text-xs text-zion-slate-light">
                        Explore our comprehensive {item.name.toLowerCase()} portfolio
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-300">
                              <dropdownItem.icon className="w-4 h-4 text-zion-cyan group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              className="p-2 rounded-xl bg-glass-morphism hover:bg-glass-morphism-strong text-zion-slate-light hover:text-zion-cyan transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Info */}
            <motion.div
              className="hidden xl:flex items-center space-x-4 text-sm"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
            >
              <Button
                variant="outline"
                size="sm"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-xl bg-glass-morphism hover:bg-glass-morphism-strong text-zion-slate-light hover:text-zion-cyan transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-glass-morphism-strong backdrop-blur-xl border-t border-zion-cyan/20 shadow-neon-strong"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-zion-cyan mb-2 flex items-center space-x-2">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.dropdown?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="flex items-center space-x-3">
                                <dropdownItem.icon className="w-5 h-5 text-zion-cyan" />
                                <div>
                                  <div className="font-medium text-white">{dropdownItem.name}</div>
                                  <div className="text-sm text-zion-slate-light">{dropdownItem.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block p-3 rounded-xl transition-all duration-300 ${
                          isActive(item.href)
                            ? 'bg-zion-cyan/20 text-zion-cyan'
                            : 'text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Phone className="w-5 h-5" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Mail className="w-5 h-5" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white transition-all duration-300"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
