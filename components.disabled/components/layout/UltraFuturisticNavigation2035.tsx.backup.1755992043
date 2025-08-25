import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon,
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, 
  Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  Building, MessageCircle
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

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
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Plans and average market prices',
    children: [
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Compare market averages' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Guides, reports and tools',
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      { name: 'API Docs', href: '/api-documentation', description: 'API reference' },
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />,
    description: 'Talk to our team',
    featured: true,
    children: [
      { name: 'Contact Sales', href: '/contact', description: 'Get a quote' },
      { name: 'Support', href: '/support', description: 'Help center' }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Grid className="w-5 h-5" />,
    description: 'Browse by category',
    badge: 'New',
    children: [
      { name: 'AI & Data', href: '/services#ai', description: 'AI, data, ML services' },
<<<<<<< HEAD
      { name: 'Developer Tools', href: '/services#developer-tools', description: 'Dev productivity & tooling' },
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-0a60
      { name: 'Cloud & FinOps', href: '/services#cloud', description: 'Cloud, cost, platform' },
      { name: 'Observability', href: '/services#observability', description: 'Monitoring & telemetry' },
      { name: 'Developer Tools', href: '/services#developer-tools', description: 'Developer productivity' },
      { name: 'Training & Education', href: '/training', description: 'Learning and R&D' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite', description: 'Technical SEO automation' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent', description: 'Agentless discovery' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha', description: 'HA Postgres ops' },
      { name: 'Micro SAAS', href: '/micro-saas', description: 'Business tools and automation' },
<<<<<<< HEAD
      { name: 'DORA Metrics Dashboard', href: '/dora-metrics-dashboard', description: 'DevOps performance analytics' },
      { name: 'Kubernetes Cost Guardrails', href: '/kubernetes-cost-guardrails', description: 'Policy-driven cost controls' },
      { name: 'OpenTelemetry Quickstart', href: '/opentelemetry-quickstart', description: 'Traces, metrics, logs in days' },
      { name: 'API Usage Billing Meter', href: '/api-usage-billing-meter', description: 'Metered billing for APIs' },
      { name: 'Data Quality Monitor', href: '/data-quality-monitor', description: 'Freshness and anomaly checks' },
      { name: 'Consent & Cookie Manager', href: '/consent-cookie-manager', description: 'GDPR/CCPA consent' },
      { name: 'Edge Redirect Manager', href: '/edge-redirect-manager', description: 'Safe redirects at edge' }
=======
      { name: 'New 2034 Services', href: '/services?sort=newest', description: 'Latest additions' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab', description: 'Measure RAG quality & cost' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation', description: 'Automate evidence & controls' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud', description: 'Scale headless browser flows' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation', description: 'Policy-driven key rotation' },
      { name: 'API Performance Testing', href: '/api-performance-testing', description: 'Load/soak tests with CI gates' },
      { name: 'AI Sales Email Autopilot', href: '/services/ai-sales-email-autopilot', description: 'Personalized outbound at scale' },
      { name: 'Kubernetes Cost & Rightsizing', href: '/services/kubernetes-cost-rightsizing', description: 'SLO-aware cost optimization' },
      { name: 'CI Flaky Test Detector', href: '/services/ci-flaky-test-detector', description: 'Auto quarantine and PR insights' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-0a60
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Shield className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale deployments' },
      { name: 'Healthcare', href: '/solutions/healthcare', description: 'HIPAA-compliant solutions' },
      { name: 'Financial Services', href: '/solutions/financial', description: 'Fintech & banking' },
      { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Industry 4.0 & IoT' },
      { name: 'Retail', href: '/solutions/retail', description: 'E-commerce & omnichannel' },
      { name: 'Government', href: '/solutions/government', description: 'Public sector & compliance' },
      { name: 'Education', href: '/solutions/education', description: 'EdTech & learning platforms' },
      { name: 'Energy & Utilities', href: '/solutions/energy', description: 'Smart grid & sustainability' },
      { name: 'Transportation', href: '/solutions/transportation', description: 'Logistics & mobility' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Documentation & support',
    children: [
      { name: 'Documentation', href: '/resources/documentation', description: 'Technical guides & APIs' },
      { name: 'Case Studies', href: '/resources/case-studies', description: 'Success stories & ROI' },
      { name: 'Blog', href: '/blog', description: 'Industry insights & updates' },
      { name: 'Webinars', href: '/webinars', description: 'Live & on-demand sessions' },
      { name: 'Training', href: '/training', description: 'Certification programs' },
      { name: 'Support Center', href: '/support', description: 'Help & troubleshooting' },
      { name: 'API Reference', href: '/resources/api', description: 'Developer documentation' },
      { name: 'Tools', href: '/resources/tools', description: 'Free utilities & calculators' }
    ]
  },
  {
    name: 'Company',
    href: '/company',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', description: 'Our story & mission' },
      { name: 'Leadership', href: '/leadership', description: 'Executive team' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Partners', href: '/partners', description: 'Partnership opportunities' },
      { name: 'News', href: '/news', description: 'Company updates' },
      { name: 'Press', href: '/press', description: 'Media resources' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' },
      { name: 'Locations', href: '/locations', description: 'Global presence' }
    ]
  }
];

const UltraFuturisticNavigation2035: React.FC = () => {
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

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeDropdowns();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-cyan-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
              </a>
              <div className="hidden md:flex items-center gap-2 text-pink-300">
                <MapPin className="w-4 h-4" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/market-pricing" className="text-cyan-300 hover:text-white transition-colors text-sm">
                Market Pricing
              </Link>
              <Link href="/services-advertising" className="text-purple-300 hover:text-white transition-colors text-sm">
                Services Advertising
              </Link>
              <Link href="/get-started" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-110">
                Z
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400">Future Technology Solutions</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              onClick={closeDropdowns}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:bg-cyan-300 transition-colors"></div>
                              <div className="flex-1">
                                <div className="text-white group-hover:text-cyan-300 transition-colors font-medium">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">
                                  {child.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/quote" className="text-white hover:text-cyan-300 transition-colors">
              Get Quote
            </Link>
            <Link href="/demo" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105">
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuClick}
            className="lg:hidden p-2 text-white hover:text-cyan-300 transition-colors"
            aria-label="Toggle mobile menu"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-white hover:text-cyan-300 transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            onClick={() => {
                              setIsOpen(false);
                              closeDropdowns();
                            }}
                            className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                          >
                            <div className="font-medium">{child.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{child.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-cyan-500/20">
                  <div className="space-y-3">
                    <Link
                      href="/quote"
                      onClick={() => setIsOpen(false)}
                      className="block text-white hover:text-cyan-300 transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="/demo"
                      onClick={() => setIsOpen(false)}
                      className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    >
                      Book Demo
                    </Link>
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

export default UltraFuturisticNavigation2035;