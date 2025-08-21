import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Clock, ChevronDown, ChevronUp,
  MessageCircle, Calendar, Star
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
  rating: '4.9/5 (200+ Reviews)'
};

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
];

export default function TopContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative z-40">
      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
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
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.address}
                </span>
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
                {quickActions.map((action) => (
                  <a
                    key={action.name}
                    href={action.href}
                    className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </a>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
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
            transition={{ duration: 0.3 }}
            className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Contact Details</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>Business Info</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{contactInfo.rating}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
                    <span>Quick Actions</span>
                  </h3>
                  <div className="space-y-3">
                    {quickActions.map((action) => (
                      <a
                        key={action.name}
                        href={action.href}
                        className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white bg-gray-800/30 hover:bg-cyan-500/20 border border-gray-700/30 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-105 group"
                      >
                        <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                          {action.icon}
                        </div>
                        <span className="font-medium">{action.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Company Highlights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Star className="w-5 h-5 text-cyan-400" />
                    <span>Why Choose Us</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg">
                      <div className="text-sm font-medium text-white mb-1">15+ Years Experience</div>
                      <div className="text-xs text-gray-400">Industry expertise and proven track record</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg">
                      <div className="text-sm font-medium text-white mb-1">500+ Services Delivered</div>
                      <div className="text-xs text-gray-400">Successful implementations worldwide</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg">
                      <div className="text-sm font-medium text-white mb-1">24/7 Support</div>
                      <div className="text-xs text-gray-400">Round-the-clock technical assistance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
                    Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Get Started Today
                    </a>
                    <a
                      href="/comprehensive-services-showcase-2025"
                      className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10"
                    >
                      View All Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

