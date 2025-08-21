import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic, 
  Keyboard, Mouse, CpuIcon, DatabaseIcon, 
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon,
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon,
  HeartIcon, RocketIcon, ShieldIcon as ShieldIcon2,
  TargetIcon, MicroscopeIcon, StarIcon, ArrowRight,
  Infinity, Crown, Gem, Sparkles as SparklesIcon2,
  BarChart, PieChart, LineChart, Activity,
  Settings, HelpCircle, FileText, Calendar,
  CreditCard, ShoppingCart, Gift, Award,
  Zap as ZapIcon2, Target as TargetIcon2,
  Handshake, Linkedin, Github, Twitter, Youtube, Instagram
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Explore our comprehensive service offerings' },
  { name: '2024 Services', href: '/services-2024', icon: Sparkles, description: 'Latest revolutionary services for 2024' },
  { name: 'Solutions', href: '/solutions', icon: Target, description: 'Industry-specific solutions and use cases' },
  { name: 'Pricing', href: '/pricing-2033', icon: DollarSign, description: 'Transparent pricing for all our services' },
  { name: 'Resources', href: '/resources', icon: BookOpen, description: 'Documentation, guides, and learning materials' },
  { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories from our customers' },
  { name: 'Blog', href: '/blog', icon: MessageCircle, description: 'Latest insights and industry trends' },
  { name: 'About', href: '/about', icon: Users, description: 'Learn about our company and mission' },
  { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our innovative team' },
  { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with our experts' }
];

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    icon: BrainIcon,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', description: 'Transform data into actionable insights', price: '$299/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success workflows', price: '$199/month' },
      { name: 'AI Email Marketing Automation', href: '/ai-email-marketing-automation', description: 'Intelligent email campaigns', price: '$79/month' },
      { name: 'AI Social Media Manager', href: '/ai-social-media-manager', description: 'Automate social media management', price: '$89/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: AtomIcon,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Future-proof encryption', price: '$599/month' },
      { name: 'Quantum-Secure Database Platform', href: '/quantum-secure-database-platform', description: 'Quantum-resistant database security', price: '$899/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$399/month' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: CpuIcon,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Self-healing infrastructure', price: '$799/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing', price: '$449/month' },
      { name: 'AI-Powered IT Operations Center', href: '/ai-powered-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' }
    ]
  },
  {
    title: '🔌 API & Development Tools',
    icon: Code,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Developer experience and API management',
    services: [
      { name: 'AI-Powered API Management', href: '/ai-powered-api-management', description: 'Intelligent API lifecycle management', price: '$349/month' },
      { name: 'AI-Powered Project Management Pro', href: '/ai-project-management-pro', description: 'Intelligent project planning', price: '$179/month' },
      { name: 'AI-Powered Customer Support Automation', href: '/ai-customer-support-automation', description: '24/7 intelligent support', price: '$129/month' }
    ]
  },
  {
    title: '💰 Business & Analytics',
    icon: BarChart,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Business intelligence and optimization',
    services: [
      { name: 'AI-Powered SEO Automation Pro', href: '/ai-seo-automation-pro', description: 'Automate SEO with AI', price: '$149/month' },
      { name: 'Intelligent Cloud Cost Optimization', href: '/intelligent-cloud-cost-optimization', description: 'Reduce cloud costs by 40%', price: '$199/month' }
    ]
  },
  {
    title: '🔒 Security & Compliance',
    icon: ShieldIcon,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Advanced security and compliance solutions',
    services: [
      { name: 'AI-Powered Network Security', href: '/ai-powered-network-security', description: 'Intelligent threat detection', price: '$549/month' }
    ]
  }
];

const quickLinks = [
  { name: 'Documentation', href: '/docs', icon: FileText },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'Support Center', href: '/support', icon: HelpCircle },
  { name: 'Status Page', href: '/status', icon: Activity },
  { name: 'Security', href: '/security', icon: Shield },
  { name: 'Privacy', href: '/privacy', icon: Lock },
  { name: 'Terms', href: '/terms', icon: FileText },
  { name: 'Partners', href: '/partners', icon: Handshake }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];

const UltraFuturisticNavigation2034: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-6 text-cyan-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center hover:text-cyan-200 transition-colors">
                <Phone className="w-3 h-3 mr-2" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-cyan-200 transition-colors">
                <Mail className="w-3 h-3 mr-2" />
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-300">📍 {contactInfo.address}</span>
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <social.icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-300 font-medium">Innovation • Intelligence • Impact</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main navigation links */}
            <div className="flex items-center space-x-6">
              {mainNavigation.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 p-4 z-50"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="group">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 border border-cyan-500/20 group-hover:bg-opacity-20 transition-all duration-200`}>
                            <div className="flex items-center space-x-3 mb-2">
                              <category.icon className="w-5 h-5 text-cyan-300" />
                              <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                            </div>
                            <p className="text-xs text-gray-400 mb-3">{category.description}</p>
                            <div className="space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block p-2 rounded bg-black/30 hover:bg-cyan-500/10 transition-all duration-200 group"
                                  onClick={closeMenu}
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-gray-400">{service.description}</div>
                                    </div>
                                    <div className="text-xs font-bold text-cyan-400">{service.price}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* More navigation links */}
            <div className="flex items-center space-x-6">
              {mainNavigation.slice(4, 7).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
              </div>
            </form>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
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
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </form>

              {/* Mobile navigation links */}
              <div className="space-y-4">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                  >
                    <item.icon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25"
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

export default UltraFuturisticNavigation2034;