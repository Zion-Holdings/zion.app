import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Zap, Clock } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface UltraFuturisticServiceCard2037Props {
  service: Service;
  variant?: 'ai' | 'quantum' | 'automation' | 'cybersecurity' | 'edge' | 'neuromorphic' | 'ai-futuristic' | 'blockchain-futuristic' | 'metaverse-futuristic' | 'iot-futuristic' | 'quantum-futuristic' | 'automation-futuristic' | 'cybersecurity-futuristic' | 'edge-futuristic' | 'neuromorphic-futuristic';
}

export default function UltraFuturisticServiceCard2037({ 
  service, 
  variant = 'ai' 
}: UltraFuturisticServiceCard2037Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
      case 'quantum-futuristic':
        return {
          gradient: 'from-purple-600 via-indigo-600 to-cyan-600',
          border: 'border-purple-500/50',
          glow: 'shadow-purple-500/30',
          accent: 'text-purple-400'
        };
      case 'automation':
      case 'automation-futuristic':
        return {
          gradient: 'from-blue-600 via-cyan-600 to-teal-600',
          border: 'border-blue-500/50',
          glow: 'shadow-blue-500/30',
          accent: 'text-blue-400'
        };
      case 'cybersecurity':
      case 'cybersecurity-futuristic':
        return {
          gradient: 'from-red-600 via-orange-600 to-yellow-600',
          border: 'border-red-500/50',
          glow: 'shadow-red-500/30',
          accent: 'text-red-400'
        };
      case 'edge':
      case 'edge-futuristic':
        return {
          gradient: 'from-green-600 via-emerald-600 to-teal-600',
          border: 'border-green-500/50',
          glow: 'shadow-green-500/30',
          accent: 'text-green-400'
        };
      case 'neuromorphic':
      case 'neuromorphic-futuristic':
        return {
          gradient: 'from-pink-600 via-rose-600 to-purple-600',
          border: 'border-pink-500/50',
          glow: 'shadow-pink-500/30',
          accent: 'text-pink-400'
        };
      case 'blockchain-futuristic':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          border: 'border-blue-500/50',
          glow: 'shadow-blue-500/30',
          accent: 'text-blue-400'
        };
      case 'metaverse-futuristic':
        return {
          gradient: 'from-cyan-600 via-blue-600 to-purple-600',
          border: 'border-cyan-500/50',
          glow: 'shadow-cyan-500/30',
          accent: 'text-cyan-400'
        };
      case 'iot-futuristic':
        return {
          gradient: 'from-green-600 via-emerald-600 to-teal-600',
          border: 'border-green-500/50',
          glow: 'shadow-green-500/30',
          accent: 'text-green-400'
        };
      case 'ai':
      case 'ai-futuristic':
      default:
        return {
          gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
          border: 'border-cyan-500/50',
          glow: 'shadow-cyan-500/30',
          accent: 'text-cyan-400'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border ${styles.border} transition-all duration-500 hover:scale-105`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Quantum Field Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent" />
      </div>

      {/* Animated Border Glow */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${styles.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        animate={{
          background: isHovered 
            ? `linear-gradient(45deg, ${styles.gradient})` 
            : `linear-gradient(0deg, ${styles.gradient})`
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Content Container */}
      <div className="relative z-10 p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{service.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-sm text-gray-300">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Popular</span>
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{service.setupTime}</span>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                transition={{ duration: 0.2 }}
              >
                {feature}
              </motion.span>
            ))}
            {service.features.length > 3 && (
              <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.customers}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.reviews}</div>
            <div className="text-xs text-gray-400">Reviews</div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/20 pt-4 mt-4">
                {/* Market Information */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Market Size</h4>
                    <p className="text-xs text-gray-300">{service.marketSize}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Growth Rate</h4>
                    <p className="text-xs text-gray-300">{service.growthRate}</p>
                  </div>
                </div>

                {/* ROI */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">ROI</h4>
                  <p className="text-xs text-gray-300">{service.roi}</p>
                </div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technology</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Contact</h4>
                  <div className="space-y-1 text-xs text-gray-300">
                    <div>📱 {service.contactInfo.mobile}</div>
                    <div>✉️ {service.contactInfo.email}</div>
                    <div>📍 {service.contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            className="flex-1 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white py-2 px-4 rounded-lg border border-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(service.link, '_blank');
            }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`, '_blank');
            }}
          >
            <span>Contact</span>
            <Zap className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Trial Badge */}
        {service.trialDays > 0 && (
          <div className="mt-4 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
              <Clock className="w-3 h-3 mr-1" />
              {service.trialDays} Day Free Trial
            </span>
          </div>
        )}
      </div>

      {/* Hover Effects */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ${styles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          boxShadow: isHovered ? `0 0 40px ${styles.glow}` : 'none'
        }}
      />

      {/* Quantum Particles Overlay */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}