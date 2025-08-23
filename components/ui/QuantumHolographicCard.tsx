import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Users, TrendingUp, Zap, Shield, Brain, Rocket } from 'lucide-react';

interface QuantumHolographicCardProps {
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
    variant: string;
    rating: number;
    reviews: number;
    customers: number;
    growthRate: string;
    marketSize: string;
    roi: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
  };
  onClick?: () => void;
  className?: string;
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({ 
  service, 
  onClick, 
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    if (isHovered) {
      setParticleCount(20);
    } else {
      setParticleCount(0);
    }
  }, [isHovered]);

  const getVariantStyles = (variant: string) => {
    const baseStyles = "relative overflow-hidden rounded-2xl border border-transparent";
    
    switch (variant) {
      case 'quantum-entanglement-advanced':
        return `${baseStyles} bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-cyan-900/20 shadow-[0_0_50px_rgba(0,255,255,0.3)]`;
      case 'quantum-space':
        return `${baseStyles} bg-gradient-to-br from-blue-900/20 via-cyan-900/30 to-indigo-900/20 shadow-[0_0_50px_rgba(59,130,246,0.3)]`;
      case 'neural-quantum-advanced':
        return `${baseStyles} bg-gradient-to-br from-green-900/20 via-emerald-900/30 to-cyan-900/20 shadow-[0_0_50px_rgba(16,185,129,0.3)]`;
      case 'holographic-matrix-advanced':
        return `${baseStyles} bg-gradient-to-br from-purple-900/20 via-pink-900/30 to-violet-900/20 shadow-[0_0_50px_rgba(139,92,246,0.3)]`;
      case 'quantum-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-emerald-900/20 via-teal-900/30 to-cyan-900/20 shadow-[0_0_50px_rgba(0,255,255,0.3)]`;
      case 'neural-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-orange-900/20 via-red-900/30 to-pink-900/20 shadow-[0_0_50px_rgba(236,73,153,0.3)]`;
      case 'quantum-neural-advanced':
        return `${baseStyles} bg-gradient-to-br from-fuchsia-900/20 via-pink-900/30 to-purple-900/20 shadow-[0_0_50px_rgba(236,73,153,0.3)]`;
      default:
        return `${baseStyles} bg-gradient-to-br from-gray-900/20 via-slate-900/30 to-gray-900/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]`;
    }
  };

  const getGlowEffect = (variant: string) => {
    switch (variant) {
      case 'quantum-entanglement-advanced':
        return 'shadow-[0_0_80px_rgba(0,255,255,0.6)]';
      case 'quantum-space':
        return 'shadow-[0_0_80px_rgba(59,130,246,0.6)]';
      case 'neural-quantum-advanced':
        return 'shadow-[0_0_80px_rgba(16,185,129,0.6)]';
      case 'holographic-matrix-advanced':
        return 'shadow-[0_0_80px_rgba(139,92,246,0.6)]';
      case 'quantum-cyberpunk':
        return 'shadow-[0_0_80px_rgba(0,255,255,0.6)]';
      case 'neural-cyberpunk':
        return 'shadow-[0_0_80px_rgba(236,73,153,0.6)]';
      case 'quantum-neural-advanced':
        return 'shadow-[0_0_80px_rgba(236,73,153,0.6)]';
      default:
        return 'shadow-[0_0_60px_rgba(139,92,246,0.4)]';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${getVariantStyles(service.variant)} ${className} cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Quantum Holographic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border Glow */}
      <div className={`absolute inset-0 rounded-2xl ${getGlowEffect(service.variant)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Quantum Particles */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {[...Array(particleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Holographic Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,255,0.3)_100%)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(139,92,246,0.3)_100%)] bg-[length:20px_20px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`text-4xl ${service.textColor} filter drop-shadow-lg`}>
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-cyan-200 transition-colors duration-300">
                {service.tagline}
              </p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xs font-semibold text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-white">{service.rating}</span>
            </div>
            <span className="text-xs text-gray-400">({service.reviews})</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {service.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 bg-white/5 rounded-lg backdrop-blur-sm">
            <Users className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <div className="text-xs text-gray-400">Customers</div>
            <div className="text-sm font-semibold text-white">{service.customers.toLocaleString()}</div>
          </div>
          
          <div className="text-center p-2 bg-white/5 rounded-lg backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-xs text-gray-400">Growth</div>
            <div className="text-sm font-semibold text-white">{service.growthRate}</div>
          </div>
          
          <div className="text-center p-2 bg-white/5 rounded-lg backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <div className="text-xs text-gray-400">ROI</div>
            <div className="text-sm font-semibold text-white">{service.roi.split(' ')[0]}</div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
            <Brain className="w-4 h-4 text-purple-400 mr-2" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-300">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                {feature}
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-cyan-400 mt-1">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Market Info */}
        <div className="mb-4 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
          <div className="text-xs text-gray-400 mb-1">Market Size</div>
          <div className="text-sm font-semibold text-white">{service.marketSize}</div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started</span>
            <Rocket className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            className="px-4 py-2 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 flex items-center space-x-2 group/btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Contact Information */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-xs text-gray-400 mb-2">Contact Information</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <Shield className="w-3 h-3 text-green-400" />
              <span className="text-white">{service.contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-3 h-3 text-purple-400" />
              <span className="text-white">{service.contactInfo.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Features Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="border-t border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6">
              <h4 className="text-lg font-semibold text-white mb-3">All Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand/Collapse Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group/expand"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-cyan-400 group-hover/expand:text-white"
        >
          ▼
        </motion.div>
      </button>
    </motion.div>
  );
};

export default QuantumHolographicCard;