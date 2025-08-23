import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Clock, ChevronDown, ChevronUp,
  MessageCircle, Calendar, Star,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
  rating: '4.9/5 (500+ Reviews)',
  founded: '2020',
  employees: '50+',
  countries: '25+',
  customers: '1000+'
};

const quickActions = [
  { name: 'Get Quote', href: '/contact', icon: <MessageCircle className="w-4 h-4" />, color: 'from-cyan-500 to-blue-600' },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Live Chat', href: '/support', icon: <MessageCircle className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Technical Support', href: '/support', icon: <MessageCircle className="w-4 h-4" />, color: 'from-orange-500 to-red-600' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦', color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼', color: 'hover:text-blue-600' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺', color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻', color: 'hover:text-gray-400' }
];

export default function TopContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative z-40">
      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left Side - Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {/* Phone */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.mobile}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {contactInfo.address}
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>

            {/* Center - Business Hours & Rating */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              {/* Business Hours */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.hours}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{contactInfo.rating}</span>
              </div>
            </div>

            {/* Right Side - Quick Actions & Expand Button */}
            <div className="flex items-center space-x-4">
              {/* Quick Actions */}
              <div className="hidden sm:flex items-center space-x-2">
                {quickActions.slice(0, 2).map((action) => (
                  <a
                    key={action.name}
                    href={action.href}
                    className={`flex items-center space-x-2 px-3 py-1.5 text-xs text-white bg-gradient-to-r ${action.color} border border-transparent hover:scale-105 rounded-lg transition-all duration-200 transform`}
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </a>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200"
              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Information Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-black/95 border-b border-cyan-500/20 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Company Stats */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Company Overview</span>
                  </h3>
                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span>Founded:</span>
                      <span className="text-white">{contactInfo.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Team Size:</span>
                      <span className="text-white">{contactInfo.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Global Reach:</span>
                      <span className="text-white">{contactInfo.countries} countries</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customers:</span>
                      <span className="text-white">{contactInfo.customers}+</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-purple-400">Quick Actions</h3>
                  <div className="space-y-2">
                    {quickActions.map((action) => (
                      <a
                        key={action.name}
                        href={action.href}
                        className={`flex items-center space-x-2 px-3 py-2 text-xs text-white bg-gradient-to-r ${action.color} border border-transparent hover:scale-105 rounded-lg transition-all duration-200 transform`}
                      >
                        {action.icon}
                        <span>{action.name}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-green-400">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-3 py-2 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-green-500/50 rounded-lg transition-all duration-200 ${social.color}`}
                      >
                        <span className="text-base">{social.icon}</span>
                        <span>{social.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-orange-400">Contact Methods</h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className="flex items-center space-x-2 px-3 py-2 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-orange-500/50 rounded-lg transition-all duration-200"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center space-x-2 px-3 py-2 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-orange-500/50 rounded-lg transition-all duration-200"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Send Email</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <a
                      href="/contact"
                      className="flex items-center space-x-2 px-3 py-2 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-orange-500/50 rounded-lg transition-all duration-200"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Contact Form</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <p className="text-sm text-gray-400">
                    Ready to transform your business with cutting-edge technology?
                  </p>
                  <a
                    href="/contact"
                    className="flex items-center space-x-2 px-6 py-2 text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 border border-transparent hover:from-cyan-600 hover:to-purple-700 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

