import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Users, TrendingUp, Clock, Check } from 'lucide-react';

interface UltraAdvancedFuturisticCardProps {
  service: {
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
    marketPrice: string;
    benefits: string[];
    capabilities: string[];
  };
  className?: string;
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  service,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-rotate through features
  useEffect(() => {
    if (isHovered && !isExpanded) {
      const interval = setInterval(() => {
        setCurrentFeature((prev) => (prev + 1) % service.features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isExpanded, service.features.length]);

  const getVariantStyles = () => {
    const baseStyles = "relative overflow-hidden rounded-2xl border border-gray-800/50 backdrop-blur-xl";
    
    switch (service.variant) {
      case 'quantum-advanced':
        return `${baseStyles} bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-purple-900/20 shadow-2xl shadow-purple-500/20`;
      case 'holographic-advanced':
        return `${baseStyles} bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-cyan-900/20 shadow-2xl shadow-cyan-500/20`;
      case 'cyberpunk-quantum':
        return `${baseStyles} bg-gradient-to-br from-red-900/20 via-pink-900/20 to-red-900/20 shadow-2xl shadow-red-500/20`;
      case 'neural-quantum':
        return `${baseStyles} bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-green-900/20 shadow-2xl shadow-green-500/20`;
      case 'quantum-holographic':
        return `${baseStyles} bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-yellow-900/20 shadow-2xl shadow-yellow-500/20`;
      case 'quantum-space':
        return `${baseStyles} bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-indigo-900/20 shadow-2xl shadow-indigo-500/20`;
      case 'holographic-neural':
        return `${baseStyles} bg-gradient-to-br from-cyan-900/20 via-green-900/20 to-cyan-900/20 shadow-2xl shadow-cyan-500/20`;
      case 'cyberpunk-holographic':
        return `${baseStyles} bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-green-900/20 shadow-2xl shadow-green-500/20`;
      case 'neural-quantum-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-blue-900/20 shadow-2xl shadow-blue-500/20`;
      default:
        return `${baseStyles} bg-gradient-to-br from-gray-900/20 via-slate-900/20 to-gray-900/20 shadow-2xl shadow-gray-500/20`;
    }
  };

  const getVariantGlow = () => {
    switch (service.variant) {
      case 'quantum-advanced':
        return 'hover:shadow-purple-500/40';
      case 'holographic-advanced':
        return 'hover:shadow-cyan-500/40';
      case 'cyberpunk-quantum':
        return 'hover:shadow-red-500/40';
      case 'neural-quantum':
        return 'hover:shadow-green-500/40';
      case 'quantum-holographic':
        return 'hover:shadow-yellow-500/40';
      case 'quantum-space':
        return 'hover:shadow-indigo-500/40';
      case 'holographic-neural':
        return 'hover:shadow-cyan-500/40';
      case 'cyberpunk-holographic':
        return 'hover:shadow-green-500/40';
      case 'neural-quantum-cyberpunk':
        return 'hover:shadow-blue-500/40';
      default:
        return 'hover:shadow-gray-500/40';
    }
  };

  return (
    <motion.div
      className={`${getVariantStyles()} ${getVariantGlow()} transition-all duration-500 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quantum field lines */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Holographic grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Card content */}
      <div className="relative z-10 p-6">
        {/* Header section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className="text-4xl"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-gray-300 text-sm">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Popular</span>
            </motion.div>
          )}
        </div>

        {/* Price and trial info */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{service.trialDays} day trial</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{service.rating} ({service.reviews})</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>

        {/* Features showcase */}
        <div className="mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              className="flex items-center space-x-2 text-sm text-gray-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="w-4 h-4 text-green-400" />
              <span>{service.features[currentFeature]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Market insights */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="bg-gray-800/50 rounded-lg p-2">
            <div className="text-gray-400">Market Size</div>
            <div className="text-white font-semibold">{service.marketSize}</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-2">
            <div className="text-gray-400">Growth Rate</div>
            <div className="text-white font-semibold">{service.growthRate}</div>
          </div>
        </div>

        {/* ROI highlight */}
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-3 mb-4 border border-green-500/20">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">ROI Impact</span>
          </div>
          <p className="text-gray-300 text-sm mt-1">{service.roi}</p>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3">
          <motion.button
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(service.link, '_blank')}
          >
            <span>Get Started</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Less' : 'More'}
          </motion.button>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-6 pt-6 border-t border-gray-700/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Benefits</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Core Capabilities</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology stack */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technology.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact information */}
              <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/50">
                <h4 className="text-white font-semibold mb-2">Contact Information</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>📱 {service.contactInfo.mobile}</div>
                  <div>📧 {service.contactInfo.email}</div>
                  <div>📍 {service.contactInfo.address}</div>
                  <div>🌐 {service.contactInfo.website}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover effects overlay */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;