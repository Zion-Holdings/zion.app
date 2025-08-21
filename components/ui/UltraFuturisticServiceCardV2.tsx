import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, Shield, Zap } from 'lucide-react';

interface UltraFuturisticServiceCardV2Props {
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
  };
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural';
}

const UltraFuturisticServiceCardV2: React.FC<UltraFuturisticServiceCardV2Props> = ({
  service,
  variant = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'holographic':
        return {
          card: 'bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 border border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
          accent: 'from-purple-500 to-pink-500'
        };
      case 'quantum':
        return {
          card: 'bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 border border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(34,211,238,0.3)]',
          accent: 'from-cyan-500 to-blue-500'
        };
      case 'cyberpunk':
        return {
          card: 'bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20 border border-red-500/30',
          glow: 'shadow-[0_0_30px_rgba(239,68,68,0.3)]',
          accent: 'from-red-500 to-orange-500'
        };
      case 'neural':
        return {
          card: 'bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20 border border-green-500/30',
          glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]',
          accent: 'from-green-500 to-emerald-500'
        };
      default:
        return {
          card: 'bg-gradient-to-br from-gray-900/20 via-slate-900/20 to-zinc-900/20 border border-gray-500/30',
          glow: 'shadow-[0_0_30px_rgba(156,163,175,0.3)]',
          accent: 'from-gray-500 to-slate-500'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl backdrop-blur-xl ${styles.card} ${styles.glow} transition-all duration-500`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${styles.accent}, transparent)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-60 h-60 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${styles.accent}, transparent)`
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className="text-4xl"
              animate={{
                scale: isHovered ? [1, 1.1, 1] : 1,
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-sm text-gray-300">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-black"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Price and stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{service.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-blue-400" />
              <span>{service.customers.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <motion.div
            className="bg-black/20 rounded-lg p-3 border border-gray-700/50"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Market Size</span>
            </div>
            <p className="text-white font-semibold">{service.marketSize}</p>
          </motion.div>
          
          <motion.div
            className="bg-black/20 rounded-lg p-3 border border-gray-700/50"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 text-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">Growth Rate</span>
            </div>
            <p className="text-white font-semibold">{service.growthRate}</p>
          </motion.div>
        </div>

        {/* Features preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          
          <motion.button
            className="px-4 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Contact info */}
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Contact: {service.contactInfo.email}</span>
            <span>{service.contactInfo.mobile}</span>
          </div>
        </div>
      </div>

      {/* Expanded content overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl z-20 p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{service.name}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            {/* Detailed information */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technology.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {service.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-blue-300 border border-blue-600/50"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Use Cases</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">ROI & Benefits</h4>
                <p className="text-gray-300">{service.roi}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Competitors</h4>
                <p className="text-gray-300">{service.competitors.join(', ')}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4 border border-gray-700/50">
                  <h5 className="font-semibold text-white mb-2">Setup Time</h5>
                  <p className="text-gray-300">{service.setupTime}</p>
                </div>
                <div className="bg-black/20 rounded-lg p-4 border border-gray-700/50">
                  <h5 className="font-semibold text-white mb-2">Trial Period</h5>
                  <p className="text-gray-300">{service.trialDays} days</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UltraFuturisticServiceCardV2;