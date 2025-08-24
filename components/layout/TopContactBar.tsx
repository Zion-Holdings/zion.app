import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Clock, MessageCircle, X, ChevronDown,
  ExternalLink, Calendar, Headphones
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
  support: '24/7 AI Support Available'
};

const quickActions = [
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'Get Support', href: '/support', icon: <Headphones className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' }
];

export default function TopContactBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Hide bar on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="relative bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 backdrop-blur-xl border-b border-cyan-500/30 z-40"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-6 text-sm">
            {/* Phone */}
            <div className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors duration-200">
                {contactInfo.mobile}
              </a>
            </div>

            {/* Email */}
            <div className="hidden md:flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-200">
                {contactInfo.email}
              </a>
            </div>

            {/* Address */}
            <div className="hidden lg:flex items-center space-x-2 text-cyan-300">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>

            {/* Hours */}
            <div className="hidden xl:flex items-center space-x-2 text-cyan-300">
              <Clock className="w-4 h-4" />
              <span>{contactInfo.hours}</span>
            </div>
          </div>

          {/* Right Side - Actions & Toggle */}
          <div className="flex items-center space-x-4">
            {/* Quick Actions */}
            <div className="hidden sm:flex items-center space-x-2">
              {quickActions.map((action) => (
                <a
                  key={action.name}
                  href={action.href}
                  className={`flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-white rounded-lg bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  {action.icon}
                  <span>{action.name}</span>
                </a>
              ))}
            </div>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:text-white bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-all duration-200 border border-cyan-500/30 hover:border-cyan-500/50"
            >
              <span>{isExpanded ? 'Less' : 'More'}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-cyan-500/30 pt-4 pb-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Contact Details */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Contact Methods</span>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-cyan-300">
                      <Phone className="w-3 h-3" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors duration-200">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-300">
                      <Mail className="w-3 h-3" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-200">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-300">
                      <Globe className="w-3 h-3" />
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 flex items-center space-x-1">
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location & Hours */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Location & Hours</span>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-cyan-300">
                      <p className="font-medium">Zion Tech Group</p>
                      <p>{contactInfo.address}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-300">
                      <Clock className="w-3 h-3" />
                      <span>{contactInfo.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Support & Services */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-cyan-400" />
                    <span>Support & Services</span>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-cyan-300">
                      <p className="font-medium">{contactInfo.support}</p>
                      <p className="text-xs text-cyan-400">AI-powered assistance available 24/7</p>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-300">
                      <Headphones className="w-3 h-3" />
                      <span>Live human support during business hours</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>Quick Actions</span>
                  </h4>
                  <div className="space-y-2">
                    {quickActions.map((action) => (
                      <a
                        key={action.name}
                        href={action.href}
                        className={`flex items-center justify-center space-x-2 px-3 py-2 text-xs font-medium text-white rounded-lg bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                      >
                        {action.icon}
                        <span>{action.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

