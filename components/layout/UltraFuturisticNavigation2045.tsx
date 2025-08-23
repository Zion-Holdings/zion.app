import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Home,
  Briefcase,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Zap,
  Star,
  Sparkles,
  Globe,
  Cpu,
  Database,
  Eye,
  Heart,
  Infinity,
  TrendingUp,
  Palette,
  Layers,
  Grid,
  BarChart3,
  Settings,
  HelpCircle,
  MessageCircle,
  Calendar,
  Award,
  Lightbulb,
  Play,
  DollarSign,
  GraduationCap,
  Mail,
  ArrowRight,
  Network,
  ShoppingCart,
  Monitor,
  Lock,
  Server,
  Globe2,
  Newspaper
} from 'lucide-react';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  neonColor?: string;
  category?: string;
  color?: string;
}

// Enhanced navigation items with better organization
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50',
    category: 'main'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    category: 'main',
    children: [
              {
          label: 'AI & Machine Learning',
          href: '/services?category=ai-ml',
          icon: <Brain className="w-4 h-4" />,
          description: 'Advanced AI solutions for enterprise',
          featured: true,
          neonColor: 'shadow-purple-400/50',
          category: 'ai'
        },
        {
          label: 'Quantum Computing',
          href: '/services?category=quantum',
          icon: <Atom className="w-4 h-4" />,
          description: 'Next-generation quantum solutions',
          featured: true,
          neonColor: 'shadow-blue-400/50',
          category: 'quantum'
        },
        {
          label: 'Space Technology',
          href: '/services?category=space-tech',
          icon: <Rocket className="w-4 h-4" />,
          description: 'Innovative space tech applications',
          featured: true,
          neonColor: 'shadow-pink-400/50',
          category: 'space'
        },
        {
          label: 'Cybersecurity',
          href: '/services?category=cybersecurity',
          icon: <Shield className="w-4 h-4" />,
          description: 'Advanced security solutions',
          neonColor: 'shadow-red-400/50',
          category: 'security'
        },
        {
          label: 'Cloud Infrastructure',
          href: '/services?category=cloud',
          icon: <Cloud className="w-4 h-4" />,
          description: 'Scalable cloud solutions',
          neonColor: 'shadow-indigo-400/50',
          category: 'cloud'
        },
      {
        label: 'Edge Computing',
        href: '/services?category=edge',
        icon: <Cpu className="w-4 h-4" />,
        description: 'Next-generation edge solutions',
        neonColor: 'shadow-green-400/50',
        category: 'edge'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions and use cases',
    neonColor: 'shadow-emerald-400/50',
    category: 'main',
    children: [
      {
        label: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: <Building className="w-4 h-4" />,
        description: 'Large-scale enterprise implementations',
        neonColor: 'shadow-blue-400/50',
        category: 'enterprise'
      },
      {
        label: 'Startup Solutions',
        href: '/solutions/startup',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Scalable solutions for startups',
        neonColor: 'shadow-green-400/50',
        category: 'startup'
      },
      {
        label: 'Government Solutions',
        href: '/solutions/government',
        icon: <Shield className="w-4 h-4" />,
        description: 'Secure government implementations',
        neonColor: 'shadow-purple-400/50',
        category: 'government'
      },
      {
        label: 'Healthcare Solutions',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />,
        description: 'AI-powered healthcare solutions',
        neonColor: 'shadow-red-400/50',
        category: 'healthcare'
      },
      {
        label: 'Financial Solutions',
        href: '/solutions/financial',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Fintech and financial services',
        neonColor: 'shadow-yellow-400/50',
        category: 'financial'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge base and learning resources',
    neonColor: 'shadow-orange-400/50',
    category: 'main',
    children: [
      {
        label: 'Documentation',
        href: '/resources/documentation',
        icon: <FileText className="w-4 h-4" />,
        description: 'Technical documentation and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'docs'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Live and recorded webinars',
        neonColor: 'shadow-purple-400/50',
        category: 'webinars'
      },
      {
        label: 'Case Studies',
        href: '/resources/case-studies',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Success stories and implementations',
        neonColor: 'shadow-green-400/50',
        category: 'case-studies'
      },
      {
        label: 'API Reference',
        href: '/resources/api',
        icon: <Code className="w-4 h-4" />,
        description: 'Developer API documentation',
        neonColor: 'shadow-indigo-400/50',
        category: 'api'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <GraduationCap className="w-4 h-4" />,
        description: 'Training programs and certifications',
        neonColor: 'shadow-yellow-400/50',
        category: 'training'
      }
    ]
  },
  {
    label: 'Company',
    href: '/company',
    icon: <Building className="w-4 h-4" />,
    description: 'About Zion Tech Group',
    neonColor: 'shadow-cyan-400/50',
    category: 'main',
    children: [
      {
        label: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Our story and mission',
        neonColor: 'shadow-blue-400/50',
        category: 'about'
      },
      {
        label: 'Mission',
        href: '/mission',
        icon: <Target className="w-4 h-4" />,
        description: 'Our vision and goals',
        neonColor: 'shadow-green-400/50',
        category: 'mission'
      },
      {
        label: 'Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our team',
        neonColor: 'shadow-purple-400/50',
        category: 'team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Award className="w-4 h-4" />,
        description: 'Join our team',
        neonColor: 'shadow-orange-400/50',
        category: 'careers'
      },
      {
        label: 'News',
        href: '/news',
        icon: <FileText className="w-4 h-4" />,
        description: 'Latest company news',
        neonColor: 'shadow-indigo-400/50',
        category: 'news'
      }
    ]
  },
  {
    label: 'Support',
    href: '/support',
    icon: <HelpCircle className="w-4 h-4" />,
    description: 'Get help and support',
    neonColor: 'shadow-red-400/50',
    category: 'main',
    children: [
      {
        label: 'Help Center',
        href: '/support/help',
        icon: <HelpCircle className="w-4 h-4" />,
        description: 'Self-service help and guides',
        neonColor: 'shadow-blue-400/50',
        category: 'help'
      },
      {
        label: 'Contact Us',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with our team',
        neonColor: 'shadow-green-400/50',
        category: 'contact'
      },
      {
        label: 'Status',
        href: '/status',
        icon: <BarChart3 className="w-4 h-4" />,
        description: 'Service status and uptime',
        neonColor: 'shadow-orange-400/50',
        category: 'status'
      },
      {
        label: 'Support Portal',
        href: '/support/portal',
        icon: <Settings className="w-4 h-4" />,
        description: 'Customer support portal',
        neonColor: 'shadow-purple-400/50',
        category: 'portal'
      }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    badge: '2045',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      { 
        label: 'About Us', 
        href: '/about', 
        description: 'Learn about our mission and values',
        icon: <Users className="w-4 h-4" />,
        featured: true
      },
      { 
        label: 'Our Team', 
        href: '/team', 
        description: 'Meet our leadership team',
        icon: <Users className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        label: 'Careers', 
        href: '/careers', 
        description: 'Join our innovative team',
        icon: <Briefcase className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        label: 'News & Blog', 
        href: '/blog', 
        description: 'Latest insights and updates',
        icon: <Newspaper className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      },
      { 
        label: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories from our clients',
        icon: <FileText className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      }
    ]
  }
];

// Quick action buttons
const quickActions = [
  {
    label: 'Get Started',
    href: '/get-started',
    icon: <Zap className="w-4 h-4" />,
    variant: 'primary' as const
  },
  {
    label: 'Demo',
    href: '/demo',
    icon: <Play className="w-4 h-4" />,
    variant: 'secondary' as const
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
    variant: 'outline' as const
  }
];

interface UltraFuturisticNavigation2045Props {
  className?: string;
}

const UltraFuturisticNavigation2045: React.FC<UltraFuturisticNavigation2045Props> = ({ 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI & Consciousness', href: '/services/ai-consciousness', icon: Brain, description: 'Revolutionary AI consciousness solutions' },
        { name: 'Quantum Technology', href: '/services/quantum-technology', icon: Atom, description: 'Quantum computing and quantum AI' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security and threat protection' },
        { name: 'Space Technology', href: '/services/space-technology', icon: Rocket, description: 'Space resource intelligence and mining' },
        { name: 'Business Solutions', href: '/services/business-solutions', icon: Target, description: 'AI-powered business transformation' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Cloud, description: 'Modern cloud and infrastructure solutions' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMobileMenu}>
            <motion.div 
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </motion.div>
            <div>
              <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech
              </span>
              <div className="text-xs lg:text-sm text-cyan-400 font-medium">
                Revolutionary Technology 2045
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-200">
                                    <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-700/50">
                              <Link
                                href={item.href}
                                className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/demo"
              className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              Watch Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-3"
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg"
                              >
                                <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors py-3"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-700/50 space-y-4">
                <Link
                  href="/demo"
                  onClick={closeMobileMenu}
                  className="block text-center px-6 py-3 border border-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Watch Demo
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2045;