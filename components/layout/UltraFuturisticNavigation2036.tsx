import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  MessageCircle,
  Calculator,
  Play,
  Brain,
  Atom,
  Zap,
  Globe,
  Shield,
  Rocket,
  Heart,
  DollarSign,
  Truck,
  Cloud,
  GraduationCap,
  Users,
  Building,
  FileText,
  BookOpen,
  LifeBuoy,
  Award,
  TrendingUp,
  Target,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import EnhancedSearch from '../EnhancedSearch';

// Custom ShoppingBag icon component
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Play className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Calculator className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'Advanced AI solutions',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Healthcare AI', 
        href: '/healthcare-ai-solutions', 
        description: 'AI-powered healthcare',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Financial Technology', 
        href: '/fintech-solutions', 
        description: 'Fintech and banking solutions',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Supply Chain AI', 
        href: '/supply-chain-ai', 
        description: 'AI-powered logistics',
        icon: <Truck className="w-4 h-4" />
      },
      { 
        name: 'Environmental Tech', 
        href: '/environmental-technology', 
        description: 'Green technology solutions',
        icon: <Cloud className="w-4 h-4" />
      },
      { 
        name: 'Education AI', 
        href: '/education-ai', 
        description: 'AI-powered education',
        icon: <GraduationCap className="w-4 h-4" />
      },
      { 
        name: 'Specialized Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <Target className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Innovation Showcase',
    href: '/innovative-2037-2038-showcase',
    icon: <Lightbulb className="w-5 h-5" />,
    description: 'Future technology showcase',
    badge: 'New',
    category: 'showcase',
    featured: true,
    children: [
      { 
        name: '2037-2038 Services', 
        href: '/innovative-2037-2038-showcase', 
        description: 'Cutting-edge future services',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Quantum AI Services', 
        href: '/quantum-ai-cognitive', 
        description: 'Quantum AI consciousness',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Holographic Metaverse', 
        href: '/holographic-metaverse-ai', 
        description: 'AI-powered metaverse',
        icon: <Globe className="w-4 h-4" />
      },
      { 
        name: 'Neural Interfaces', 
        href: '/neural-interface-development', 
        description: 'Brain-computer interfaces',
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: 'Space Mining AI', 
        href: '/quantum-space-mining', 
        description: 'Space resource automation',
        icon: <Rocket className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Services portfolio & pricing',
    badge: 'Showcase',
    category: 'showcase',
    featured: true,
    children: [
      { 
        name: 'Services Showcase', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Complete services overview',
        icon: <Calculator className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Service pricing information',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Market price references',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Revolutionary 2025', 
        href: '/revolutionary-2025-services-showcase', 
        description: '2025 revolutionary services',
        icon: <Star className="w-4 h-4" />
      },
      { 
        name: 'Ultimate 2026', 
        href: '/ultimate-2026-services-showcase', 
        description: '2026 ultimate services',
        icon: <Award className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Company information',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Contact', 
        href: '/contact', 
        description: 'Get in touch',
        icon: <MessageCircle className="w-4 h-4" />
      },
      { 
        name: 'Partners', 
        href: '/partners', 
        description: 'Partnership opportunities',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Investors', 
        href: '/investors', 
        description: 'Investment information',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Locations', 
        href: '/locations', 
        description: 'Our global presence',
        icon: <MapPin className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge & support',
    category: 'resources',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Blog & News', 
        href: '/news', 
        description: 'Latest insights',
        icon: <BookOpen className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Support', 
        href: '/support', 
        description: 'Technical support',
        icon: <LifeBuoy className="w-4 h-4" />
      },
      { 
        name: 'Training', 
        href: '/training', 
        description: 'Learning resources',
        icon: <GraduationCap className="w-4 h-4" />
      },
      { 
        name: 'White Papers', 
        href: '/white-papers', 
        description: 'Research papers',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Educational webinars',
        icon: <Play className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry solutions',
    category: 'industries',
    children: [
      { 
        name: 'Healthcare', 
        href: '/healthcare-solutions', 
        description: 'Healthcare technology',
        icon: <Heart className="w-4 h-4" />
      },
      { 
        name: 'Financial Services', 
        href: '/financial-services', 
        description: 'Fintech solutions',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Manufacturing', 
        href: '/manufacturing-ai-solutions', 
        description: 'AI manufacturing',
        icon: <Zap className="w-4 h-4" />
      },
      { 
        name: 'Retail', 
        href: '/retail-technology-solutions', 
        description: 'Retail technology',
        icon: <ShoppingBag className="w-4 h-4" />
      },
      { 
        name: 'Education', 
        href: '/education-solutions', 
        description: 'Educational technology',
        icon: <GraduationCap className="w-4 h-4" />
      },
      { 
        name: 'Government', 
        href: '/government-technology-solutions', 
        description: 'Government tech',
        icon: <Building className="w-4 h-4" />
      },
      { 
        name: 'Energy', 
        href: '/energy-solutions', 
        description: 'Energy technology',
        icon: <Zap className="w-4 h-4" />
      },
      { 
        name: 'Transportation', 
        href: '/transportation-solutions', 
        description: 'Transportation tech',
        icon: <Truck className="w-4 h-4" />
      }
    ]
  }
];

export default function UltraFuturisticNavigation2036() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl lg:text-2xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-1 px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                                {child.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                  {child.name}
                                </p>
                                <p className="text-xs text-gray-400 truncate">
                                  {child.description}
                                </p>
                              </div>
                              {child.featured && (
                                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <EnhancedSearch />
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    <span className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={normalizeHref(child.href)}
                          className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
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
}