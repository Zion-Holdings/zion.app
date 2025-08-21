import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, Zap } from 'lucide-react';

interface UltraFuturisticServiceCardProps {
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

const UltraFuturisticServiceCard: React.FC<UltraFuturisticServiceCardProps> = ({
  service,
  variant = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'holographic':
        return {
          card: 'bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20 border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
          accent: 'from-purple-500 to-pink-500'
        };
      case 'quantum':
        return {
          card: 'bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
          accent: 'from-cyan-500 to-blue-500'
        };
      case 'cyberpunk':
        return {
          card: 'bg-gradient-to-br from-pink-900/20 via-red-900/20 to-orange-900/20 border-pink-500/30',
          glow: 'shadow-[0_0_30px_rgba(236,73,153,0.3)]',
          accent: 'from-pink-500 to-red-500'
        };
      case 'neural':
        return {
          card: 'bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20 border-green-500/30',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          accent: 'from-green-500 to-emerald-500'
        };
      default:
        return {
          card: 'bg-gradient-to-br from-gray-900/20 via-slate-900/20 to-zinc-900/20 border-gray-500/30',
          glow: 'shadow-[0_0_20px_rgba(100,100,100,0.3)]',
          accent: 'from-gray-500 to-slate-500'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 ${styles.card} ${styles.glow}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${service.textColor}20, transparent)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Popular badge */}
      {service.popular && (
        <motion.div
          className="absolute top-4 right-4 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            POPULAR
          </div>
        </motion.div>
      )}

      {/* Header */}
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className={`text-4xl ${isHovered ? 'scale-110' : 'scale-100'}`}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-gray-300 text-sm">{service.tagline}</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{service.description}</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.trialDays}</div>
            <div className="text-xs text-gray-400">Day Trial</div>
          </div>
        </div>

        {/* Features preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market position */}
        <div className="mb-4 p-3 bg-black/20 rounded-lg border border-gray-700/50">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Position:</h4>
          <p className="text-xs text-gray-400">{service.marketPosition}</p>
        </div>

        {/* ROI and competitors */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-black/20 rounded-lg border border-gray-700/50">
            <h4 className="text-sm font-semibold text-gray-300 mb-1">ROI</h4>
            <p className="text-xs text-gray-400">{service.roi}</p>
          </div>
          <div className="p-3 bg-black/20 rounded-lg border border-gray-700/50">
            <h4 className="text-sm font-semibold text-gray-300 mb-1">Market Size</h4>
            <p className="text-xs text-gray-400">{service.marketSize}</p>
          </div>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="border-t border-gray-700/50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 space-y-4">
              {/* Technology stack */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technology.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Integrations:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use cases */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact information */}
              <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-600/50">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Contact Information:</h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <div>📱 {service.contactInfo.mobile}</div>
                  <div>✉️ {service.contactInfo.email}</div>
                  <div>📍 {service.contactInfo.address}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action buttons */}
      <div className="p-6 pt-0">
        <div className="flex gap-3">
          <motion.button
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(service.link, '_blank');
            }}
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            className="px-4 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Hover effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${isHovered ? '50% 50%' : '0% 0%'}, rgba(0,255,255,0.1) 0%, transparent 70%)`
        }}
      />
    </motion.div>
  );
};

export default UltraFuturisticServiceCard;