import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Users, TrendingUp, Clock, ArrowRight, 
  ExternalLink, Check, ChevronDown, ChevronUp,
  Mail, Phone, MapPin, Globe, ShieldCheck
} from 'lucide-react';
import Button from './Button';
import { EnhancedRealMicroSaasService } from '../../data/enhanced-real-micro-saas-services';

interface UltraFuturisticServiceCardProps {
  service: EnhancedRealMicroSaasService;
}

export default function UltraFuturisticServiceCard({ service }: UltraFuturisticServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Holographic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 rounded-2xl border border-gray-700/50 backdrop-blur-xl overflow-hidden">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quantum Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                {service.category}
              </span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded-full">
                {service.variant}
              </span>
            </div>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </motion.button>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Price and Quick Stats */}
        <div className="mb-4">
          <div className="text-3xl font-bold text-white mb-3">
            {service.price}
            <span className="text-sm text-gray-400 font-normal">{service.period}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <Users className="w-4 h-4 text-blue-400" />
              <span>{service.customers}+ users</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{service.rating}/5.0</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>ROI</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>{service.trialDays} days trial</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <h4 className="text-xs font-semibold text-cyan-400 mb-2">Contact Information:</h4>
          <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>{service.contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>{service.contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span className="text-xs">{service.contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            href={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            <ArrowRight className="w-3 h-3 mr-1" />
            Details
          </Button>
          <Button
            href="/contact"
            variant="outline"
            className="px-3 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 text-sm"
          >
            Contact
          </Button>
        </div>

        {/* Expandable Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-top border-gray-700/50"
            >
              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technology.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                <div className="space-y-1">
                  {service.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                      <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance & Security */}
              <div className="mb-2">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Assurance:</h4>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>99.99% uptime SLA • SOC 2-ready controls • Privacy-first</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}