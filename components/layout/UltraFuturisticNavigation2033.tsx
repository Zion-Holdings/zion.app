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
  TargetIcon, MicroscopeIcon, StarIcon, ArrowRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 2033 Revolutionary AI Services',
    icon: BrainIcon,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Dream Interpreter Platform', href: '/ai-dream-interpreter-platform', description: 'Dream analysis with AI psychology', price: '$299/month' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' },
      { name: 'AI Financial Risk Assessment', href: '/ai-financial-risk-assessment', description: 'Intelligent financial risk management', price: '$4,999/month' },
      { name: 'AI IoT Platform', href: '/ai-iot-platform', description: 'Intelligent IoT and edge computing', price: '$1,999/month' },
      { name: 'AI Guardrails Platform', href: '/ai-guardrails-platform', description: 'AI safety and ethics platform', price: '$2,999/month' },
      { name: 'AI Evaluations Platform', href: '/ai-evals-platform', description: 'Comprehensive AI testing and evaluation', price: '$1,999/month' }
    ]
  },
  {
    title: '⚛️ 2033 Quantum & Emerging Tech',
    icon: AtomIcon,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
      { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' },
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing', price: '$1,299/month' },
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' },
      { name: 'Quantum AI Hybrid Platform', href: '/quantum-ai-hybrid-platform', description: 'Quantum-AI fusion', price: '$4,999/month' },
      { name: 'Space Technology Platform', href: '/space-technology-platform', description: 'Space-based computing', price: '$2,999/month' },
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', description: 'Quantum-resistant security', price: '$3,999/month' }
    ]
  },
  {
    title: '🏙️ 2033 Enterprise IT Solutions',
    icon: CpuIcon,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$799/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing', price: '$449/month' },
      { name: 'AI-Powered IT Operations Center', href: '/ai-powered-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Future-proof security', price: '$899/month' },
      { name: 'Managed PostgreSQL HA', href: '/managed-postgres-ha', description: 'High-availability database', price: '$299/month' },
      { name: 'Feature Flags Edge', href: '/feature-flags-edge', description: 'Edge-based feature management', price: '$199/month' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Intelligent job scheduling', price: '$99/month' },
      { name: 'Mobile Device Management', href: '/mobile-device-management', description: 'Enterprise mobile security', price: '$399/month' },
      { name: 'PDF Render API', href: '/pdf-render-api', description: 'High-performance PDF generation', price: '$199/month' }
    ]
  },
  {
    title: '🌌 2033 Space & Metaverse Tech',
    icon: RocketIcon,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', price: '$499/month' },
      { name: 'Holographic Event Platform', href: '/holographic-event-platform', description: 'Immersive holographic experiences', price: '$2,999/month' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic virtual events', price: '$1,999/month' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space operations', price: '$3,999/month' },
      { name: 'Quantum Space Tech Platform', href: '/quantum-space-tech-platform', description: 'Quantum space technology', price: '$5,999/month' },
      { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform', description: 'AI-powered metaverse', price: '$1,999/month' },
      { name: 'Space Mining Automation', href: '/space-mining-automation', description: 'Automated space operations', price: '$35,999/month' },
      { name: 'Quantum Metaverse Platform', href: '/quantum-metaverse-platform', description: 'Quantum virtual reality', price: '$4,999/month' }
    ]
  },
  {
    title: '🎯 2033 Innovative Micro SAAS',
    icon: TargetIcon,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'AI Content Automation Suite', href: '/ai-content-automation-suite', description: 'Complete content automation', price: '$299/month' },
      { name: 'Quantum-Secure Communication Platform', href: '/quantum-secure-communication-platform', description: 'Unbreakable encryption', price: '$599/month' },
      { name: 'AI Business Intelligence Platform', href: '/ai-powered-business-intelligence-platform', description: 'Intelligent business insights', price: '$399/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$499/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$199/month' },
      { name: 'AI HR Recruitment Platform', href: '/ai-powered-hr-recruitment-platform', description: 'Intelligent recruitment', price: '$299/month' }
    ]
  },
  {
    title: '🔬 2033 Research & Development',
    icon: MicroscopeIcon,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing', price: '$1,299/month' },
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' },
      { name: 'Quantum AI Hybrid Platform', href: '/quantum-ai-hybrid-platform', description: 'Quantum-AI fusion', price: '$4,999/month' },
      { name: 'Space Technology Platform', href: '/space-technology-platform', description: 'Space-based computing', price: '$2,999/month' },
      { name: 'Biotech Research Platform', href: '/biotech-research-platform', description: 'Advanced biotech research', price: '$1,999/month' },
      { name: 'Nanotechnology Research Platform', href: '/nanotechnology-research-platform', description: 'Nano-scale research', price: '$1,499/month' },
      { name: 'Quantum Materials Research Platform', href: '/quantum-materials-research-platform', description: 'Quantum materials research', price: '$2,499/month' },
      { name: 'AI Research Collaboration Platform', href: '/ai-research-collaboration-platform', description: 'AI research collaboration', price: '$999/month' },
      { name: 'Quantum Research Collaboration Platform', href: '/quantum-research-collaboration-platform', description: 'Quantum research collaboration', price: '$1,999/month' }
    ]
  }
];

export default function UltraFuturisticNavigation2033() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const filteredCategories = serviceCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.services.some(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-cyan-100 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-100 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href={contactInfo.website} className="hover:text-cyan-100 transition-colors">
                {contactInfo.website}
              </a>
              <span className="text-cyan-500">|</span>
              <span className="text-cyan-400">Zion Tech Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-400">2033 Future Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <div className="relative group">
              <button className="nav-link flex items-center space-x-1">
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Services Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="mt-4 p-6 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20">
                  {/* Search Bar */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  {/* Service Categories Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                              <category.icon className="w-5 h-5 text-cyan-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                          </div>
                          <p className="text-cyan-300/80 text-sm mb-4">{category.description}</p>
                          
                          <div className="space-y-2">
                            {category.services.slice(0, 4).map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-2 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                      {service.name}
                                    </h4>
                                    <p className="text-xs text-cyan-400/70">{service.description}</p>
                                  </div>
                                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                                    {service.price}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          
                          {category.services.length > 4 && (
                            <div className="mt-3 pt-3 border-t border-cyan-500/20">
                              <Link
                                href="/services"
                                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                              >
                                <span>View all {category.services.length} services</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="nav-link">
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </Link>
            
            <Link href="/about" className="nav-link">
              <Users className="w-4 h-4" />
              <span>About</span>
            </Link>
            
            <Link href="/contact" className="nav-link">
              <MessageCircle className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="mobile-nav-link" onClick={closeMenu}>
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 mb-3">Services</div>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="ml-4">
                    <div className="text-xs text-cyan-300/70 mb-2">{category.title}</div>
                    <div className="space-y-1">
                      {category.services.slice(0, 3).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="text-sm text-white">{service.name}</div>
                          <div className="text-xs text-cyan-400/70">{service.price}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/pricing" className="mobile-nav-link" onClick={closeMenu}>
                <DollarSign className="w-5 h-5" />
                <span>Pricing</span>
              </Link>
              
              <Link href="/about" className="mobile-nav-link" onClick={closeMenu}>
                <Users className="w-5 h-5" />
                <span>About</span>
              </Link>
              
              <Link href="/contact" className="mobile-nav-link" onClick={closeMenu}>
                <MessageCircle className="w-5 h-5" />
                <span>Contact</span>
              </Link>
              
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg text-center transition-all duration-300"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Navigation link styles
const navLinkClasses = "flex items-center space-x-2 px-4 py-2 text-cyan-300 hover:text-cyan-100 transition-colors duration-200 rounded-lg hover:bg-cyan-500/10";

const navLink = ({ children, ...props }: any) => (
  <Link {...props} className={navLinkClasses}>
    {children}
  </Link>
);

const mobileNavLink = ({ children, ...props }: any) => (
  <Link {...props} className="flex items-center space-x-3 px-4 py-3 text-cyan-300 hover:text-cyan-100 transition-colors duration-200 rounded-lg hover:bg-cyan-500/10">
    {children}
  </Link>
);