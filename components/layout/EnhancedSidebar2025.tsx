import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Menu, Home, Zap, Brain, Atom, Shield, Rocket,
  ChevronDown, ChevronRight, Star, TrendingUp, 
  Award, Users, FileText, HelpCircle, Settings,
  Globe, Mail, Phone, MapPin, ArrowRight,
  Cpu, Database, Lock, Heart, Palette, GraduationCap,
  Leaf, Pill, Coins, Building2, Code, Server, ShieldCheck,
  BarChart3, Target, Lightbulb, Eye, Sparkles, Layers
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-600',
    services: [
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', featured: true },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', featured: true },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-indigo-600',
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', featured: true },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', featured: true },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-600',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', featured: true },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', featured: true },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500 to-pink-600',
    services: [
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', featured: true },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite', featured: true },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home, color: 'text-blue-400' },
  { name: 'Services', href: '/services', icon: Zap, color: 'text-cyan-400' },
  { name: 'About', href: '/about', icon: Users, color: 'text-green-400' },
  { name: 'Contact', href: '/contact', icon: Mail, color: 'text-purple-400' },
  { name: 'Pricing', href: '/pricing', icon: TrendingUp, color: 'text-orange-400' },
  { name: 'Support', href: '/support', icon: HelpCircle, color: 'text-red-400' }
];

const industrySolutions = [
  { name: 'Healthcare', href: '/healthcare-solutions', icon: Pill, color: 'text-pink-400' },
  { name: 'Financial Services', href: '/financial-solutions', icon: Coins, color: 'text-yellow-400' },
  { name: 'Manufacturing', href: '/manufacturing-solutions', icon: Cpu, color: 'text-blue-400' },
  { name: 'Retail & E-commerce', href: '/retail-solutions', icon: Globe, color: 'text-green-400' },
  { name: 'Education', href: '/education-solutions', icon: GraduationCap, color: 'text-purple-400' },
  { name: 'Government', href: '/government-solutions', icon: Building2, color: 'text-indigo-400' }
];

const featuredServices = [
  { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', category: 'AI & Consciousness' },
  { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', category: 'Enterprise IT' },
  { name: 'Space Mining Platform', href: '/space-mining-platform', category: 'Emerging Tech' },
  { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', category: 'Micro SAAS' }
];

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(cat => cat !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-20 -z-10" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Zion Tech</h2>
                <p className="text-cyan-400 text-xs">Revolutionary Solutions</p>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              Contact Info
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3 h-3 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <link.icon className={`w-4 h-4 ${link.color}`} />
                    {link.name}
                  </motion.button>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Services */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              Featured Services
            </h3>
            <div className="space-y-2">
              {featuredServices.map((service) => (
                <Link key={service.name} href={service.href}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-lg hover:border-cyan-400/50 transition-all duration-200"
                  >
                    <div className="text-sm font-medium text-white mb-1">{service.name}</div>
                    <div className="text-xs text-cyan-400">{service.category}</div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              All Services
            </h3>
            <div className="space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.title} className="border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full p-3 bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-200 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <span className="text-sm font-medium text-white">{category.title}</span>
                    </div>
                    {expandedCategories.includes(category.title) ? (
                      <ChevronDown className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedCategories.includes(category.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 bg-black/20 space-y-2">
                          {category.services.map((service) => (
                            <Link key={service.name} href={service.href}>
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                {service.featured && (
                                  <Star className="w-3 h-3 text-yellow-400" />
                                )}
                                <span className={`text-xs ${service.featured ? 'text-white font-medium' : 'text-gray-300'}`}>
                                  {service.name}
                                </span>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Solutions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-green-400" />
              Industry Solutions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {industrySolutions.map((solution) => (
                <Link key={solution.name} href={solution.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-xs font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <solution.icon className={`w-3 h-3 ${solution.color}`} />
                    {solution.name}
                  </motion.button>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl">
            <h3 className="text-sm font-semibold text-white mb-3 text-center">Ready to Transform?</h3>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-400">
            <p>© 2025 Zion Tech Group</p>
            <p className="mt-1">Revolutionary Technology Solutions</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.aside>
    </>
  );
}