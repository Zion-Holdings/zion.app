import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Home, Target, Brain, Cpu, Shield, 
  Rocket, Users, Settings, HelpCircle, 
  Phone, Mail, MapPin, Globe, Star,
  ChevronRight, ChevronDown, Zap, Microscope, Server
} from 'lucide-react';
import Link from 'next/link';

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

const serviceCategories = [
  {
    title: 'Advanced Micro SAAS',
    icon: Target,
    color: 'from-emerald-500 to-teal-600',
    services: [
      { name: 'CustomerSuccess AI Pro', href: '/customer-success-ai-pro', description: 'AI-powered customer success' },
      { name: 'QuantumSupply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum-enhanced logistics' },
      { name: 'BlockID Verify Pro', href: '/blockid-verify-pro', description: 'Blockchain identity verification' },
      { name: 'HR Analytics AI Suite', href: '/hr-analytics-ai-suite', description: 'AI-powered HR analytics' },
      { name: 'QuantumRisk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum risk assessment' }
    ]
  },
  {
    title: 'Advanced AI Services',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'AI consciousness development' },
      { name: 'Quantum AI Hybrid Computing Platform', href: '/quantum-ai-hybrid-computing-platform', description: 'Quantum AI computing' },
      { name: 'Multimodal AI Orchestrator Pro', href: '/multimodal-ai-orchestrator-pro', description: 'Multimodal AI orchestration' },
      { name: 'AI Autonomous Ecosystem Platform', href: '/ai-autonomous-ecosystem-platform', description: 'Autonomous AI ecosystem' },
      { name: 'AI Ethics & Governance Platform', href: '/ai-ethics-governance-platform', description: 'AI ethics and governance' }
    ]
  },
  {
    title: 'Advanced IT Services',
    icon: Server,
    color: 'from-blue-500 to-indigo-600',
    services: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud infrastructure' },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-platform', description: 'Edge computing orchestration' },
      { name: 'Zero Trust Security Pro', href: '/zero-trust-security-platform', description: 'Zero trust security' },
      { name: 'Blockchain Enterprise Platform Pro', href: '/blockchain-enterprise-platform', description: 'Enterprise blockchain' },
      { name: 'AI DevOps Platform Pro', href: '/ai-devops-platform', description: 'AI-powered DevOps' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Microscope,
    color: 'from-orange-500 to-red-600',
    services: [
      { name: 'Space Mining Platform Pro', href: '/space-mining-platform', description: 'Space mining platform' },
      { name: 'Quantum Bio-Computing Pro', href: '/quantum-bio-computing-platform', description: 'Quantum bio-computing' },
      { name: 'Brain-Computer Interface Pro', href: '/brain-computer-interface-platform', description: 'Brain-computer interface' },
      { name: 'Quantum Energy Platform Pro', href: '/quantum-energy-platform', description: 'Quantum energy platform' },
      { name: 'Autonomous Vehicle AI Pro', href: '/autonomous-vehicle-ai-platform', description: 'Autonomous vehicle AI' }
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: Target },
  { name: 'Contact', href: '/contact', icon: Phone },
  { name: 'Blog', href: '/blog', icon: Globe },
  { name: 'Careers', href: '/careers', icon: Rocket }
];

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: Star, color: 'from-cyan-500 to-blue-600' },
  { name: 'Book Demo', href: '/demo', icon: Zap, color: 'from-emerald-500 to-teal-600' },
  { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-purple-500 to-pink-600' }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const [expandedCategories, setExpandedCategories] = React.useState<Set<string>>(new Set());

  const toggleCategory = (title: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.5 
            }}
            className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 via-gray-800 to-black border-r border-gray-700/50 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400">Future Technology Solutions</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-200"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={action.href}
                      className={`block p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-center text-sm font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                    >
                      <action.icon className="w-4 h-4 mx-auto mb-1" />
                      {action.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                  Main Navigation
                </h3>
                <nav className="space-y-2">
                  {mainNavigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 border border-transparent hover:border-cyan-500/30 transition-all duration-200 group"
                        onClick={onClose}
                      >
                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Service Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                  Our Services
                </h3>
                <div className="space-y-3">
                  {serviceCategories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                      className="border border-gray-700/50 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                            <category.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-white">{category.title}</span>
                        </div>
                        {expandedCategories.has(category.title) ? (
                          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedCategories.has(category.title) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800/20 border-t border-gray-700/30"
                          >
                            <div className="p-3 space-y-2">
                              {category.services.map((service, serviceIndex) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: serviceIndex * 0.05 }}
                                >
                                  <Link
                                    href={service.href}
                                    className="block p-2 rounded text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30 transition-all duration-200"
                                    onClick={onClose}
                                  >
                                    <div className="font-medium">{service.name}</div>
                                    <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t border-gray-700/50">
                <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-sm hover:text-cyan-400 transition-colors duration-200">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-cyan-400 transition-colors duration-200">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* View All Services Button */}
              <div className="pt-4">
                <Link
                  href="/services"
                  className="block w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={onClose}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}