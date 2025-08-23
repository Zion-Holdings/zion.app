import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, ChevronRight, Search, Brain, Atom, Shield, 
  Rocket, Cpu, Target, Sparkles, Heart, DollarSign, GraduationCap, 
  Building, Truck, Zap, Star, CheckCircle, TrendingUp, Award, 
  Clock, Users, FileText, Phone, Mail, MapPin, Globe, Zap as ZapIcon
} from 'lucide-react';

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedSidebar2025: React.FC<EnhancedSidebar2025Props> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  }, []);

  const sidebarSections = [
    {
      id: 'ai-consciousness',
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      badge: 'Revolutionary',
      items: [
        { name: 'AI Consciousness Evolution', href: '/services/ai-consciousness', badge: 'Hot' },
        { name: 'Neural Network Development', href: '/services/ai-consciousness', badge: 'New' },
        { name: 'Machine Learning Solutions', href: '/services/ai-consciousness', badge: 'Trending' },
        { name: 'Cognitive Computing', href: '/services/ai-consciousness', badge: 'Revolutionary' },
        { name: 'Emotional Intelligence AI', href: '/services/ai-consciousness', badge: 'Critical' }
      ]
    },
    {
      id: 'quantum-tech',
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      badge: 'Cutting-Edge',
      items: [
        { name: 'Quantum Computing', href: '/services/quantum-technology', badge: 'Hot' },
        { name: 'Quantum Cryptography', href: '/services/quantum-technology', badge: 'New' },
        { name: 'Hybrid Quantum Systems', href: '/services/quantum-technology', badge: 'Trending' },
        { name: 'Quantum Algorithms', href: '/services/quantum-technology', badge: 'Revolutionary' },
        { name: 'Quantum Bio-Computing', href: '/services/quantum-technology', badge: 'Critical' }
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-pink-500 to-red-500',
      badge: 'Futuristic',
      items: [
        { name: 'Space Resource Intelligence', href: '/services/space-technology', badge: 'Hot' },
        { name: 'Satellite Technology', href: '/services/space-technology', badge: 'New' },
        { name: 'Space Analytics Platform', href: '/services/space-technology', badge: 'Trending' },
        { name: 'Orbital Computing', href: '/services/space-technology', badge: 'Revolutionary' },
        { name: 'Space Cybersecurity', href: '/services/space-technology', badge: 'Critical' }
      ]
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT Solutions',
      icon: Cpu,
      color: 'from-yellow-500 to-orange-500',
      badge: 'Scalable',
      items: [
        { name: 'Cloud Infrastructure', href: '/services/it-infrastructure', badge: 'Hot' },
        { name: 'DevOps Automation', href: '/services/it-infrastructure', badge: 'New' },
        { name: 'Data Analytics', href: '/services/it-infrastructure', badge: 'Trending' },
        { name: 'API Development', href: '/services/it-infrastructure', badge: 'Efficient' },
        { name: 'System Integration', href: '/services/it-infrastructure', badge: 'Modern' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      badge: 'Critical',
      items: [
        { name: 'Advanced Threat Protection', href: '/services/cybersecurity', badge: 'Hot' },
        { name: 'Zero Trust Security', href: '/services/cybersecurity', badge: 'New' },
        { name: 'Incident Response', href: '/services/cybersecurity', badge: 'Critical' },
        { name: 'Security Audits', href: '/services/cybersecurity', badge: 'Essential' },
        { name: 'Quantum Encryption', href: '/services/cybersecurity', badge: 'Revolutionary' }
      ]
    },
    {
      id: 'business-solutions',
      title: 'Business Solutions',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      badge: 'Efficient',
      items: [
        { name: 'Micro SAAS Development', href: '/services/business-solutions', badge: 'Hot' },
        { name: 'Business Process Automation', href: '/services/business-solutions', badge: 'New' },
        { name: 'Digital Transformation', href: '/services/business-solutions', badge: 'Trending' },
        { name: 'Strategic Consulting', href: '/services/business-solutions', badge: 'Insights' },
        { name: 'AI Business Intelligence', href: '/services/business-solutions', badge: 'Revolutionary' }
      ]
    },
    {
      id: 'industry-solutions',
      title: 'Industry Solutions',
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-500',
      badge: 'Specialized',
      items: [
        { name: 'Healthcare & Biotech', href: '/solutions/healthcare', badge: 'Critical' },
        { name: 'Financial Services', href: '/solutions/financial', badge: 'Secure' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', badge: 'Efficient' },
        { name: 'Retail & E-commerce', href: '/solutions/retail', badge: 'Modern' },
        { name: 'Education', href: '/solutions/education', badge: 'Innovative' },
        { name: 'Government', href: '/solutions/government', badge: 'Secure' },
        { name: 'Energy & Utilities', href: '/solutions/energy', badge: 'Sustainable' },
        { name: 'Transportation', href: '/solutions/transportation', badge: 'Smart' }
      ]
    }
  ];

  const quickActions = [
    { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'from-green-500 to-emerald-500' },
    { name: 'Get Support', href: '/support', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { name: 'View Documentation', href: '/docs', icon: FileText, color: 'from-purple-500 to-pink-500' },
    { name: 'Schedule Demo', href: '/contact', icon: Star, color: 'from-yellow-500 to-orange-500' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const filteredSections = sidebarSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Zion Tech</h2>
                    <p className="text-xs text-cyan-400">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      href={action.href}
                      onClick={onClose}
                      className="group p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs text-white/80 group-hover:text-white transition-colors duration-300">
                        {action.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Navigation Sections */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Services & Solutions</h3>
                
                {filteredSections.map((section) => (
                  <div key={section.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-4 text-left hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                            <section.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{section.title}</div>
                            <div className="text-xs text-white/60">{section.items.length} services</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            {section.badge}
                          </span>
                          <ChevronDown 
                            className={`w-4 h-4 text-white/60 transition-transform duration-300 ${
                              expandedSections.includes(section.id) ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedSections.includes(section.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/10"
                        >
                          <div className="p-4 space-y-2">
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={onClose}
                                className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                              >
                                <div className="flex items-center space-x-3">
                                  <ChevronRight className="w-3 h-3 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                                  <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                                    {item.name}
                                  </span>
                                </div>
                                <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/60 rounded-full">
                                  {item.badge}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href={`tel:${contactInfo.phone}`} className="text-sm">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-sm">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnhancedSidebar2025;