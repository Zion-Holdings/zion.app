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
  Newspaper,
  PhoneCall,
  MapPin
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
        href: '/ai-services',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        children: [
          { label: 'AI Automation', href: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
          { label: 'Machine Learning', href: '/machine-learning', icon: <Cpu className="w-4 h-4" /> },
          { label: 'Computer Vision', href: '/computer-vision', icon: <Eye className="w-4 h-4" /> },
          { label: 'Natural Language Processing', href: '/nlp', icon: <MessageCircle className="w-4 h-4" /> }
        ]
      },
      {
        label: 'IT Infrastructure',
        href: '/it-infrastructure',
        icon: <Building className="w-4 h-4" />,
        description: 'Enterprise infrastructure solutions',
        children: [
          { label: 'Cloud Services', href: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
          { label: 'DevOps & Automation', href: '/devops', icon: <Code className="w-4 h-4" /> },
          { label: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
          { label: 'Data Centers', href: '/data-centers', icon: <Database className="w-4 h-4" /> }
        ]
      },
      {
        label: 'Micro SAAS Solutions',
        href: '/micro-saas',
        icon: <Target className="w-4 h-4" />,
        description: 'Innovative business applications',
        children: [
          { label: 'Business Automation', href: '/business-automation', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Customer Success', href: '/customer-success', icon: <Heart className="w-4 h-4" /> },
          { label: 'Marketing Tools', href: '/marketing-tools', icon: <BarChart3 className="w-4 h-4" /> },
          { label: 'Analytics Platform', href: '/analytics', icon: <BarChart3 className="w-4 h-4" /> }
        ]
      },
      {
        label: 'Emerging Technologies',
        href: '/emerging-tech',
        icon: <Atom className="w-4 h-4" />,
        description: 'Cutting-edge technology solutions',
        children: [
          { label: 'Quantum Computing', href: '/quantum-computing', icon: <Atom className="w-4 h-4" /> },
          { label: 'Blockchain', href: '/blockchain', icon: <Layers className="w-4 h-4" /> },
          { label: 'IoT Solutions', href: '/iot-solutions', icon: <Network className="w-4 h-4" /> },
          { label: 'Space Technology', href: '/space-tech', icon: <Rocket className="w-4 h-4" /> }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-4 h-4" />,
    description: 'Industry-specific solutions',
    neonColor: 'shadow-green-400/50',
    category: 'main',
    children: [
      { label: 'Healthcare', href: '/healthcare-solutions', icon: <Heart className="w-4 h-4" /> },
      { label: 'Finance', href: '/finance-solutions', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'Manufacturing', href: '/manufacturing-solutions', icon: <Settings className="w-4 h-4" /> },
      { label: 'Retail', href: '/retail-solutions', icon: <ShoppingCart className="w-4 h-4" /> },
      { label: 'Education', href: '/education-solutions', icon: <GraduationCap className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Company',
    href: '/company',
    icon: <Building className="w-4 h-4" />,
    description: 'Learn about Zion Tech Group',
    neonColor: 'shadow-purple-400/50',
    category: 'main',
    children: [
      { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
      { label: 'Leadership', href: '/leadership', icon: <Award className="w-4 h-4" /> },
      { label: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
      { label: 'News', href: '/news', icon: <Newspaper className="w-4 h-4" /> },
      { label: 'Press', href: '/press', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    description: 'Knowledge and insights',
    neonColor: 'shadow-orange-400/50',
    category: 'main',
    children: [
      { label: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { label: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
      { label: 'Blog', href: '/blog', icon: <Newspaper className="w-4 h-4" /> },
      { label: 'Training', href: '/training', icon: <GraduationCap className="w-4 h-4" /> }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-4 h-4" />,
    description: 'Get in touch with us',
    neonColor: 'shadow-pink-400/50',
    category: 'main'
  }
];

const UltraFuturisticNavigation2046: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 hidden sm:block">Revolutionary Technology Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative dropdown-container">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`
                      flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-300 hover:text-white
                      hover:bg-white/10 transition-all duration-200 group
                      ${activeDropdown === item.label ? 'text-white bg-white/10' : ''}
                    `}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`
                      flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-300 hover:text-white
                      hover:bg-white/10 transition-all duration-200
                    `}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((child) => (
                          <div key={child.label}>
                            {child.children ? (
                              <div className="mb-3">
                                <div className="text-sm font-medium text-cyan-400 mb-2 flex items-center">
                                  {child.icon}
                                  <span className="ml-2">{child.label}</span>
                                </div>
                                <div className="ml-6 space-y-1">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.label}
                                      href={subChild.href}
                                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                    >
                                      {subChild.icon}
                                      <span>{subChild.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={child.href}
                                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                              >
                                {child.icon}
                                <span>{child.label}</span>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-3 text-sm text-gray-300">
              <PhoneCall className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Menu Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                            >
                              {child.icon}
                              <span>{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-400/20">
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-3">
                    <PhoneCall className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2046;