import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Users, TrendingUp, Zap, Shield, Brain, Rocket } from 'lucide-react';

interface EnhancedFuturisticCardProps {
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
  className?: string;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({ service, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getVariantStyles = () => {
    const baseStyles = 'relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500';
    
    switch (service.variant) {
      case 'quantum':
        return `${baseStyles} border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 via-slate-900/40 to-cyan-800/20 shadow-[0_0_50px_rgba(0,255,255,0.1)]`;
      case 'holographic':
        return `${baseStyles} border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-slate-900/40 to-pink-800/20 shadow-[0_0_50px_rgba(139,92,246,0.1)]`;
      case 'neural':
        return `${baseStyles} border-green-500/30 bg-gradient-to-br from-green-900/20 via-slate-900/40 to-emerald-800/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]`;
      case 'cyberpunk':
        return `${baseStyles} border-pink-500/30 bg-gradient-to-br from-pink-900/20 via-slate-900/40 to-red-800/20 shadow-[0_0_50px_rgba(236,73,153,0.1)]`;
      case 'space':
        return `${baseStyles} border-blue-500/30 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-indigo-800/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]`;
      case 'matrix':
        return `${baseStyles} border-green-500/30 bg-gradient-to-br from-green-900/20 via-slate-900/40 to-emerald-800/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]`;
      default:
        return `${baseStyles} border-slate-500/30 bg-gradient-to-br from-slate-900/20 via-slate-900/40 to-slate-800/20`;
    }
  };

  const getGlowColor = () => {
    switch (service.variant) {
      case 'quantum': return 'rgba(0, 255, 255, 0.3)';
      case 'holographic': return 'rgba(139, 92, 246, 0.3)';
      case 'neural': return 'rgba(16, 185, 129, 0.3)';
      case 'cyberpunk': return 'rgba(236, 73, 153, 0.3)';
      case 'space': return 'rgba(59, 130, 246, 0.3)';
      case 'matrix': return 'rgba(16, 185, 129, 0.3)';
      default: return 'rgba(148, 163, 184, 0.3)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${getVariantStyles()} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${getGlowColor()}, transparent 40%)`,
          transition: 'all 0.3s ease'
        }}
      />

      {/* Holographic border effect */}
      <div className="absolute inset-0 rounded-2xl">
        <div 
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${getGlowColor()}, transparent 70%)`,
            animation: isHovered ? 'borderGlow 2s linear infinite' : 'none'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className="text-4xl"
              animate={{ 
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-sm text-slate-400">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.3 }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-slate-400">{service.period}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-white">{service.rating}</span>
            <span className="text-xs text-slate-400">({service.reviews})</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{service.description}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 bg-slate-800/50 rounded-lg">
            <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <div className="text-xs text-slate-400">Customers</div>
            <div className="text-sm font-semibold text-white">{service.customers.toLocaleString()}</div>
          </div>
          <div className="text-center p-2 bg-slate-800/50 rounded-lg">
            <TrendingUp className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-xs text-slate-400">Growth</div>
            <div className="text-sm font-semibold text-white">{service.growthRate}</div>
          </div>
          <div className="text-center p-2 bg-slate-800/50 rounded-lg">
            <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <div className="text-xs text-slate-400">ROI</div>
            <div className="text-sm font-semibold text-white">{service.roi.split(' ')[0]}</div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-xs text-slate-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span className="line-clamp-1">{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-slate-500 mt-2">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Technology:</h4>
          <div className="flex flex-wrap gap-1">
            {service.technology.slice(0, 4).map((tech, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
            {service.technology.length > 4 && (
              <span className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-500">
                +{service.technology.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(service.link, '_blank')}
          >
            <span>Get Started</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className="px-4 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Less' : 'More'}
          </motion.button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-slate-700"
            >
              {/* Market Position */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Market Position:</h4>
                <p className="text-xs text-slate-300">{service.marketPosition}</p>
              </div>

              {/* Use Cases */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.useCases.map((useCase, index) => (
                    <div key={index} className="text-xs text-slate-300 bg-slate-800/30 p-2 rounded">
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Integrations:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.integrations.slice(0, 6).map((integration, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300">
                      {integration}
                    </span>
                  ))}
                  {service.integrations.length > 6 && (
                    <span className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-500">
                      +{service.integrations.length - 6}
                    </span>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-800/30 p-3 rounded-lg">
                <h4 className="text-sm font-semibold text-white mb-2">Contact:</h4>
                <div className="space-y-1 text-xs text-slate-300">
                  <div>📱 {service.contactInfo.mobile}</div>
                  <div>✉️ {service.contactInfo.email}</div>
                  <div>📍 {service.contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </motion.div>
  );
};

export default EnhancedFuturisticCard;