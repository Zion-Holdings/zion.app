import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UltraFuturisticServiceCard2026Props {
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
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
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
  variant?: 'default' | 'premium' | 'enterprise';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
}

const UltraFuturisticServiceCard2026: React.FC<UltraFuturisticServiceCard2026Props> = ({
  service,
  variant = 'default',
  theme = 'quantum'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const variantConfigs = {
    default: {
      borderColor: 'border-cyan-400/30',
      hoverBorderColor: 'border-cyan-400/60',
      glowColor: 'shadow-cyan-400/20',
      hoverGlowColor: 'shadow-cyan-400/40'
    },
    premium: {
      borderColor: 'border-purple-400/30',
      hoverBorderColor: 'border-purple-400/60',
      glowColor: 'shadow-purple-400/20',
      hoverGlowColor: 'shadow-purple-400/40'
    },
    enterprise: {
      borderColor: 'border-emerald-400/30',
      hoverBorderColor: 'border-emerald-400/60',
      glowColor: 'shadow-emerald-400/20',
      hoverGlowColor: 'shadow-emerald-400/40'
    }
  };

  const themeConfigs = {
    quantum: {
      bgGradient: 'from-slate-900/80 via-cyan-900/20 to-slate-900/80',
      accentColor: 'cyan',
      particleColor: '#00ffff'
    },
    neon: {
      bgGradient: 'from-slate-900/80 via-pink-900/20 to-slate-900/80',
      accentColor: 'pink',
      particleColor: '#ff0080'
    },
    holographic: {
      bgGradient: 'from-slate-900/80 via-emerald-900/20 to-slate-900/80',
      accentColor: 'emerald',
      particleColor: '#4ecdc4'
    },
    cyberpunk: {
      bgGradient: 'from-slate-900/80 via-orange-900/20 to-slate-900/80',
      accentColor: 'orange',
      particleColor: '#ff8000'
    }
  };

  const config = variantConfigs[variant];
  const themeConfig = themeConfigs[theme];

  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-500 ${
        config.borderColor
      } hover:${config.hoverBorderColor} ${
        config.glowColor
      } hover:${config.hoverGlowColor}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${themeConfig.bgGradient}`} />
      
      {/* Quantum particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl">
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${themeConfig.accentColor}-400/20 via-${themeConfig.accentColor}-400/10 to-${themeConfig.accentColor}-400/20`}
          animate={{
            opacity: isHovered ? [0.2, 0.5, 0.2] : 0.2,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
            animate={{
              rotate: isHovered ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            {service.icon}
          </motion.div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Service Info */}
        <motion.h3 
          className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
          animate={{
            color: isHovered ? '#22d3ee' : '#ffffff'
          }}
        >
          {service.name}
        </motion.h3>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {service.tagline}
        </p>

        {/* Price */}
        <motion.div 
          className={`text-2xl font-bold mb-4 ${service.textColor}`}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          {service.price}
          <span className="text-sm text-gray-400">{service.period}</span>
        </motion.div>

        {/* Features Preview */}
        <div className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center text-gray-300 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className={`text-${themeConfig.accentColor}-400 mr-2 text-lg`}>✓</span>
              {feature}
            </motion.div>
          ))}
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
              {/* Additional Features */}
              <div className="space-y-2 mb-4 pt-4 border-t border-gray-700/50">
                {service.features.slice(3).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-gray-300 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className={`text-${themeConfig.accentColor}-400 mr-2 text-lg`}>✓</span>
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* Market Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="text-gray-400 mb-1">Market Size</div>
                  <div className="text-white font-semibold">{service.marketSize}</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="text-gray-400 mb-1">Growth Rate</div>
                  <div className="text-white font-semibold">{service.growthRate}</div>
                </div>
              </div>

              {/* ROI */}
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-3 mb-4">
                <div className="text-green-400 text-sm font-semibold mb-1">ROI Impact</div>
                <div className="text-gray-300 text-xs">{service.roi}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={service.link}
            className={`flex-1 bg-gradient-to-r from-${themeConfig.accentColor}-500 to-${themeConfig.accentColor}-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:from-${themeConfig.accentColor}-600 hover:to-${themeConfig.accentColor}-700 transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
          
          <motion.button
            className={`px-4 py-2 border border-${themeConfig.accentColor}-400 text-${themeConfig.accentColor}-400 rounded-lg text-sm font-semibold hover:bg-${themeConfig.accentColor}-400 hover:text-black transition-all duration-300`}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Less' : 'More'}
          </motion.button>
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-4 pt-4 border-t border-gray-700/50 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <span>📧 {service.contactInfo.email}</span>
            <span>📱 {service.contactInfo.mobile}</span>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-4 right-4 w-2 h-2 bg-${themeConfig.accentColor}-400 rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute bottom-4 left-4 w-1 h-1 bg-${themeConfig.accentColor}-400 rounded-full`}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2026;