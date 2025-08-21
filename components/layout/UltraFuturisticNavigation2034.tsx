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
  Keyboard, Mouse, CircuitBoard, Satellite, Dna, Microchip,
  Telescope, Beaker, TestTube, Syringe,
  Pill, Stethoscope, HeartPulse, Activity,
  Lightbulb, Flame, Battery, Power,
  Wifi, Bluetooth, Radio, Antenna, Signal,
  Compass, Navigation, Map, Globe2, ArrowRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const mainNavigation = [
  {
    title: '🏠 Home',
    href: '/',
    description: 'Welcome to Zion Tech Group'
  },
  {
    title: '🚀 Services',
    href: '/services',
    description: 'Our comprehensive service portfolio'
  },
  {
    title: '💎 2034 Innovations',
    href: '/2034-innovations',
    description: 'Cutting-edge 2034 technology showcase'
  },
  {
    title: '🚀 Innovative Micro SAAS',
    href: '/innovative-micro-saas-showcase',
    description: 'Revolutionary micro SAAS solutions showcase'
  },
  {
    title: '💰 Pricing',
    href: '/pricing',
    description: 'Transparent pricing for all services'
  },
  {
    title: '📚 Resources',
    href: '/resources',
    description: 'Knowledge base and documentation'
  },
  {
    title: '📰 News',
    href: '/news',
    description: 'Latest updates and industry insights'
  },
  {
    title: '📞 Contact',
    href: '/contact',
    description: 'Get in touch with our team'
  }
];

const serviceCategories = [
  {
    title: '🧠 2034 AI Consciousness & Evolution',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    href: '/services/ai-consciousness',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Dream Interpreter Platform', href: '/ai-dream-interpreter-platform', description: 'Dream analysis with AI psychology', price: '$299/month' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
    title: '⚛️ 2034 Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    href: '/services/quantum-tech',
    services: [
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Neural quantum communication', price: '$49,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$99,999/month' },
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', description: 'Unbreakable quantum encryption', price: '$29,999/month' },
      { name: 'Quantum Logistics Optimization', href: '/quantum-logistics-optimization', description: 'Quantum supply chain optimization', price: '$15,999/month' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Quantum-safe internet infrastructure', price: '$39,999/month' }
    ]
  },
  {
    title: '🌌 2034 Space & Metaverse',
    icon: Rocket,
    color: 'from-purple-600 via-pink-600 to-rose-600',
    description: 'Space exploration and virtual worlds',
    href: '/services/space-metaverse',
    services: [
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Asteroid mining operations', price: '$199,999/month' },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', description: 'Create immersive virtual worlds', price: '$25,999/month' },
      { name: 'Satellite Operations Management', href: '/satellite-operations-management', description: 'Satellite fleet management', price: '$45,999/month' },
      { name: 'Space Analytics Platform', href: '/space-analytics-platform', description: 'Space data insights', price: '$12,999/month' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$8,999/month' }
    ]
  },
  {
    title: '🏙️ 2034 Enterprise IT',
    icon: Shield,
    color: 'from-emerald-600 via-green-600 to-teal-600',
    description: 'Enterprise solutions and security',
    href: '/services/enterprise-it',
    services: [
      { name: 'Zero-Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Advanced security framework', price: '$18,999/month' },
      { name: 'Cloud Migration Platform', href: '/cloud-migration-platform', description: 'Seamless cloud transition', price: '$22,999/month' },
      { name: 'DevOps Automation Suite', href: '/devops-automation-suite', description: 'Automated operations', price: '$16,999/month' },
      { name: 'Data Analytics Platform', href: '/data-analytics-platform', description: 'Business intelligence', price: '$14,999/month' },
      { name: 'Cybersecurity Operations Center', href: '/cybersecurity-operations-center', description: '24/7 security monitoring', price: '$32,999/month' }
    ]
  },
  {
    title: '🎯 2034 Micro SAAS',
    icon: Target,
    color: 'from-amber-600 via-orange-600 to-red-600',
    description: 'Ready-to-use business solutions',
    href: '/services/micro-saas',
    services: [
      { name: 'AI Content Automation Suite', href: '/ai-content-automation-suite', description: 'Automated content creation', price: '$299/month' },
      { name: 'Business Productivity Suite', href: '/business-productivity-suite', description: 'Productivity tools', price: '$199/month' },
      { name: 'Marketing Automation Platform', href: '/marketing-automation-platform', description: 'Growth acceleration', price: '$399/month' },
      { name: 'Customer Success Platform', href: '/customer-success-platform', description: 'Retention optimization', price: '$249/month' },
      { name: 'Sales Copilot AI', href: '/sales-copilot-ai', description: 'AI-powered sales assistance', price: '$149/month' }
    ]
  },
  {
    title: '🔬 2034 Research & Development',
    icon: Microscope,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Breakthrough technologies',
    href: '/services/research-development',
    services: [
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'Medical research automation', price: '$89,999/month' },
      { name: 'Autonomous Manufacturing Platform', href: '/autonomous-manufacturing-platform', description: 'Smart factory automation', price: '$67,999/month' },
      { name: 'Emerging Tech Research Lab', href: '/emerging-tech-research-lab', description: 'Innovation hub', price: '$45,999/month' },
      { name: 'Quantum Research Platform', href: '/quantum-research-platform', description: 'Quantum breakthroughs', price: '$78,999/month' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'Space tech innovation', price: '$156,999/month' }
    ]
  }
];

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
}

const UltraFuturisticNavigation2034: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const filteredServices = serviceCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.services.some(service => 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">2034 Future Technology</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            {mainNavigation.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg">{item.title.split(' ')[0]}</span>
                    <span className="text-sm font-medium">{item.title.split(' ').slice(1).join(' ')}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            {/* Service Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300">
                <span>🚀 Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-8">
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                            <category.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-400">{category.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {category.services.slice(0, 3).map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.name}
                                  </h4>
                                  <p className="text-xs text-gray-500">{service.description}</p>
                                </div>
                                <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <Link
                          href={category.href}
                          className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mt-3"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <Link
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:block">{contactInfo.mobile}</span>
              </Link>
              
              <Link
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:block">{contactInfo.email}</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pb-4"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search services, technologies, solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{item.title}</span>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </Link>
              ))}

              {/* Service Categories */}
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <button
                    onClick={() => handleDropdownToggle(category.title)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === category.title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === category.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-8 space-y-2"
                      >
                        {category.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm">{service.name}</span>
                              <span className="text-xs text-cyan-400">{service.price}</span>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Contact Info */}
              <div className="pt-6 border-t border-cyan-500/30">
                <div className="space-y-3">
                  <Link
                    href={`tel:${contactInfo.mobile}`}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{contactInfo.mobile}</span>
                  </Link>
                  
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{contactInfo.email}</span>
                  </Link>
                  
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>{contactInfo.address}</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraFuturisticNavigation2034;
