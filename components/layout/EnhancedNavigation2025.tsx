import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Rocket,
  Brain,
  Shield,
  Atom,
  Zap,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Users,
  Settings,
  Target,
  Heart,
  Eye,
  Car,
  Bot,
  Network,
  Dna,
  Microscope
} from 'lucide-react';

const EnhancedNavigation2025: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const navigationItems = [
    {
      name: 'Micro SAAS',
      href: '#services',
      icon: Rocket,
      description: 'Innovative business solutions',
      items: [
        { name: 'Content Automation Platform', href: 'https://ziontechgroup.com/content-automation-platform', icon: Zap },
        { name: 'CRM Intelligence Suite', href: 'https://ziontechgroup.com/crm-intelligence-suite', icon: Brain },
        { name: 'Decision Engine Pro', href: 'https://ziontechgroup.com/decision-engine-pro', icon: Target },
        { name: 'Workflow Orchestrator', href: 'https://ziontechgroup.com/workflow-orchestrator', icon: Settings },
        { name: 'Data Pipeline Manager', href: 'https://ziontechgroup.com/data-pipeline-manager', icon: Database },
        { name: 'API Gateway Enterprise', href: 'https://ziontechgroup.com/api-gateway-enterprise', icon: Network }
      ]
    },
    {
      name: 'AI Services',
      href: '#ai',
      icon: Brain,
      description: 'Cutting-edge AI solutions',
      items: [
        { name: 'AI Consciousness Platform', href: 'https://ziontechgroup.com/ai-consciousness-platform', icon: Brain },
        { name: 'Emotional Intelligence AI', href: 'https://ziontechgroup.com/emotional-intelligence-ai', icon: Heart },
        { name: 'Quantum AI Processing', href: 'https://ziontechgroup.com/quantum-ai-processing', icon: Atom },
        { name: 'Neural Network Optimizer', href: 'https://ziontechgroup.com/neural-network-optimizer', icon: Cpu },
        { name: 'AI Ethics Framework', href: 'https://ziontechgroup.com/ai-ethics-framework', icon: Shield },
        { name: 'Cognitive Computing Suite', href: 'https://ziontechgroup.com/cognitive-computing-suite', icon: Eye }
      ]
    },
    {
      name: 'IT Solutions',
      href: '#it',
      icon: Shield,
      description: 'Advanced IT infrastructure',
      items: [
        { name: 'Zero Trust Security Platform', href: 'https://ziontechgroup.com/zero-trust-security-platform', icon: Lock },
        { name: 'Quantum Cloud Infrastructure', href: 'https://ziontechgroup.com/quantum-cloud-infrastructure', icon: Cloud },
        { name: 'Autonomous Operations Center', href: 'https://ziontechgroup.com/autonomous-operations-center', icon: Bot },
        { name: 'Edge Computing Network', href: 'https://ziontechgroup.com/edge-computing-network', icon: Network },
        { name: 'DevOps Automation Suite', href: 'https://ziontechgroup.com/devops-automation-suite', icon: Settings },
        { name: 'Performance Monitoring Pro', href: 'https://ziontechgroup.com/performance-monitoring-pro', icon: BarChart3 }
      ]
    },
    {
      name: 'Emerging Tech',
      href: '#emerging',
      icon: Atom,
      description: 'Revolutionary technologies',
      items: [
        { name: 'Space Mining Platform', href: 'https://ziontechgroup.com/space-mining-platform', icon: Rocket },
        { name: 'Quantum Bio-Computing', href: 'https://ziontechgroup.com/quantum-bio-computing', icon: Dna },
        { name: 'Brain-Computer Interface', href: 'https://ziontechgroup.com/brain-computer-interface', icon: Brain },
        { name: 'Quantum Energy Platform', href: 'https://ziontechgroup.com/quantum-energy-platform', icon: Zap },
        { name: 'Autonomous Vehicle AI', href: 'https://ziontechgroup.com/autonomous-vehicle-ai', icon: Car },
        { name: 'Quantum Materials Discovery', href: 'https://ziontechgroup.com/quantum-materials-discovery', icon: Microscope }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
            <span className="text-white font-bold text-xl">ZionTech Group</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50"
                      onMouseLeave={closeDropdown}
                    >
                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{item.name}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                            >
                              <subItem.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                              <span className="text-gray-300 group-hover:text-white text-sm">{subItem.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{contactInfo.phone}</span>
            </a>
            
            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left text-white font-medium py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-300 hover:text-white py-2 text-sm"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-white/20 space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                
                <a
                  href={contactInfo.website}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation2025;