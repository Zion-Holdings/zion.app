import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Home, Globe, Rocket, Brain, Atom, Shield, Target, 
  Sparkles, DollarSign, BookOpen, Building, Users, 
  ChevronRight, Zap, Star, TrendingUp, Award, 
  Settings, HelpCircle, MessageCircle, Phone, Mail
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarSections = [
  {
    title: 'Main',
    icon: <Home className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
      { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: <Globe className="w-4 h-4" />, badge: 'Showcase' },
      { name: 'About Us', href: '/about', icon: <Building className="w-4 h-4" /> },
      { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Core Services',
    icon: <Rocket className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-500',
    items: [
      { name: 'Micro SAAS', href: '/ultimate-real-micro-saas-showcase-2025', icon: <Rocket className="w-4 h-4" />, badge: 'Hot' },
      { name: 'AI & Consciousness', href: '/ai-services', icon: <Brain className="w-4 h-4" />, badge: 'New' },
      { name: 'Quantum & Emerging Tech', href: '/quantum-services', icon: <Atom className="w-4 h-4" />, badge: 'Hot' },
      { name: 'Enterprise IT', href: '/enterprise-it', icon: <Shield className="w-4 h-4" />, badge: 'Enterprise' }
    ]
  },
  {
    title: 'Business Solutions',
    icon: <Target className="w-5 h-5" />,
    color: 'from-blue-500 to-indigo-500',
    items: [
      { name: 'Business Solutions', href: '/business-solutions', icon: <Target className="w-4 h-4" />, badge: 'Business' },
      { name: 'Innovations', href: '/innovations', icon: <Sparkles className="w-4 h-4" />, badge: 'Innovation' },
      { name: 'Professional Services', href: '/professional-services', icon: <Users className="w-4 h-4" /> },
      { name: 'Industry Solutions', href: '/industry-real-services', icon: <Building className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Resources',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'from-yellow-500 to-orange-500',
    items: [
      { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" />, badge: 'Pricing' },
      { name: 'Documentation', href: '/api-documentation-generator', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'News & Updates', href: '/news', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
    ]
  }
];

const quickActions = [
  { name: 'Get Started', href: '/contact', icon: <Zap className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" />, color: 'from-yellow-500 to-orange-500' },
  { name: 'Contact Support', href: '/support', icon: <MessageCircle className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' }
];

export default function UltraFuturisticSidebar2036({ isOpen, onClose }: SidebarProps) {
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Zion Tech
                    </div>
                    <div className="text-xs text-gray-400">Navigation</div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    onClick={onClose}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color}`}>
                      {action.icon}
                    </div>
                    <span className="text-white font-medium group-hover:text-purple-400 transition-colors">
                      {action.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="p-6 space-y-8">
              {sidebarSections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}`}>
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-gray-500 group-hover:text-purple-400 transition-colors">
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                              item.badge === 'New' ? 'bg-green-500 text-black' :
                              item.badge === 'Hot' ? 'bg-red-500 text-white' :
                              item.badge === 'Enterprise' ? 'bg-blue-500 text-white' :
                              item.badge === 'Business' ? 'bg-emerald-500 text-white' :
                              item.badge === 'Innovation' ? 'bg-pink-500 text-white' :
                              item.badge === 'Pricing' ? 'bg-yellow-500 text-black' :
                              item.badge === 'Showcase' ? 'bg-purple-500 text-white' :
                              'bg-gray-500 text-white'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="p-6 border-t border-white/10 mt-auto">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-sm">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-sm">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      Get Started Today
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}