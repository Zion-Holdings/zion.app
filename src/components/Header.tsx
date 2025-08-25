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
  UserPlus,
  Star,
  Award,
  Sparkles,
  Eye,
  Layers,
  CpuIcon,
  Bot,
  Globe2,
  ShieldCheck,
  ZapIcon
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
      name: 'AI Services', 
      href: '/ai-services-showcase',
      icon: Brain,
      badge: 'New',
      dropdown: [
        { name: 'AI Content Generation', href: '/ai-services-showcase', icon: Bot, description: 'GPT-4 powered content creation', badge: 'Popular' },
        { name: 'AI Business Intelligence', href: '/ai-services-showcase', icon: BarChart3, description: 'Predictive analytics & insights', badge: 'New' },
        { name: 'AI Customer Support', href: '/ai-services-showcase', icon: MessageCircle, description: 'Automated customer service', badge: 'Featured' },
        { name: 'AI Recruitment Platform', href: '/ai-services-showcase', icon: Users, description: 'Intelligent hiring solutions', badge: 'Popular' },
        { name: 'Quantum AI Platform', href: '/ai-services-showcase', icon: CpuIcon, description: 'Quantum computing + AI', badge: 'Premium' },
        { name: 'AI Ethics & Governance', href: '/ai-services-showcase', icon: ShieldCheck, description: 'Responsible AI development', badge: 'Enterprise' },
        { name: 'Federated Learning', href: '/ai-services-showcase', icon: Network, description: 'Privacy-preserving ML', badge: 'Premium' },
        { name: 'Neuromorphic Computing', href: '/ai-services-showcase', icon: Brain, description: 'Brain-inspired AI processing', badge: 'New' }
      ]
    },
    { 
      name: 'IT Solutions', 
      href: '/services',
      icon: Server,
      dropdown: [
        { name: 'Edge Computing Platform', href: '/services', icon: Globe2, description: 'Distributed edge computing', badge: 'New' },
        { name: 'DevOps Automation', href: '/services', icon: ZapIcon, description: 'CI/CD & infrastructure automation', badge: 'Popular' },
        { name: 'API Gateway Management', href: '/services', icon: Network, description: 'Enterprise API management', badge: 'Enterprise' },
        { name: 'Cloud-Native Development', href: '/services', icon: Cloud, description: 'Microservices & containers', badge: 'Premium' },
        { name: 'Low-Code Platform', href: '/services', icon: Layers, description: 'Visual development platform', badge: 'Featured' },
        { name: 'PWA Builder', href: '/services', icon: Smartphone, description: 'Progressive web apps', badge: 'New' }
      ]
    },
    { 
      name: 'Development', 
      href: '/services',
      icon: Code,
      dropdown: [
        { name: 'Web Development', href: '/services', icon: Globe, description: 'Modern web applications', badge: 'Popular' },
        { name: 'Mobile Development', href: '/services', icon: Smartphone, description: 'iOS & Android apps', badge: 'Featured' },
        { name: 'Metaverse Development', href: '/services', icon: Eye, description: 'VR/AR & 3D worlds', badge: 'New' },
        { name: 'Blockchain Development', href: '/services', icon: Lock, description: 'DeFi & smart contracts', badge: 'Premium' },
        { name: 'IoT Development', href: '/services', icon: Wifi, description: 'Connected devices', badge: 'Enterprise' }
      ]
    },
    { 
      name: 'Security', 
      href: '/services',
      icon: Shield,
      dropdown: [
        { name: 'Cyber Threat Detection', href: '/services', icon: ShieldCheck, description: 'AI-powered security', badge: 'Premium' },
        { name: 'Blockchain Identity', href: '/services', icon: Lock, description: 'Decentralized verification', badge: 'New' },
        { name: 'Managed SOC', href: '/services', icon: Eye, description: '24/7 security monitoring', badge: 'Enterprise' },
        { name: 'Compliance & Audit', href: '/services', icon: Award, description: 'Regulatory compliance', badge: 'Featured' }
      ]
    },
    { 
      name: 'Enterprise', 
      href: '/enterprise-solutions',
      icon: Building,
      dropdown: [
        { name: 'Digital Transformation', href: '/enterprise-solutions', icon: TrendingUp, description: 'Business modernization', badge: 'Enterprise' },
        { name: 'Legacy System Migration', href: '/enterprise-solutions', icon: Server, description: 'System modernization', badge: 'Premium' },
        { name: 'Cloud Migration', href: '/enterprise-solutions', icon: Cloud, description: 'Cloud infrastructure', badge: 'Popular' },
        { name: 'Data Center Solutions', href: '/enterprise-solutions', icon: Database, description: 'Infrastructure optimization', badge: 'Featured' }
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
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            variants={itemVariants}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-zion-cyan rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-cyan/70 font-medium">Innovation • Intelligence • Impact</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                variants={itemVariants}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group relative ${
                    isActive(item.href)
                      ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                      : 'text-white hover:text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full font-bold animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="p-4">
                      <div className="grid gap-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors duration-300">
                              <dropdownItem.icon className="w-4 h-4 text-zion-cyan" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                  {dropdownItem.name}
                                </p>
                                {dropdownItem.badge && (
                                  <span className={`px-2 py-1 text-xs rounded-full font-bold ${
                                    dropdownItem.badge === 'New' ? 'bg-green-500 text-white' :
                                    dropdownItem.badge === 'Popular' ? 'bg-zion-cyan text-white' :
                                    dropdownItem.badge === 'Featured' ? 'bg-purple-500 text-white' :
                                    dropdownItem.badge === 'Premium' ? 'bg-yellow-500 text-white' :
                                    'bg-blue-500 text-white'
                                  }`}>
                                    {dropdownItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-zion-cyan/70 mt-1">
                                {dropdownItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div 
            className="hidden lg:flex items-center space-x-3"
            variants={itemVariants}
          >
            <Button
              variant="ghost"
              className="text-white hover:text-zion-cyan hover:bg-zion-cyan/10 border border-zion-cyan/20"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 302 464 0950
            </Button>
            <Button
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white border-0 shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/30 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            variants={itemVariants}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-zion-cyan hover:bg-zion-cyan/10"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                        : 'text-white hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.dropdown && (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-2 rounded-lg text-zion-cyan/80 hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span className="text-sm">{dropdownItem.name}</span>
                          {dropdownItem.badge && (
                            <span className={`px-2 py-1 text-xs rounded-full font-bold ${
                              dropdownItem.badge === 'New' ? 'bg-green-500 text-white' :
                              dropdownItem.badge === 'Popular' ? 'bg-zion-cyan text-white' :
                              dropdownItem.badge === 'Featured' ? 'bg-purple-500 text-white' :
                              dropdownItem.badge === 'Premium' ? 'bg-yellow-500 text-white' :
                              'bg-blue-500 text-white'
                            }`}>
                              {dropdownItem.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <Button
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white border-0 shadow-lg shadow-zion-cyan/25"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
