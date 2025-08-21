import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Star, Check, Zap, TrendingUp, Shield, Users, Clock } from 'lucide-react';

interface EnhancedFuturisticCardProps {
  title: string;
  description: string;
  price?: string;
  features?: string[];
  link?: string;
  color?: string;
  icon?: string;
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic';
  marketPosition?: string;
  competitiveAdvantage?: string;
  targetMarket?: string;
  setupTime?: string;
  trialPeriod?: string;
  roi?: string;
  competitors?: string;
  className?: string;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  title,
  description,
  price,
  features = [],
  link,
  color = 'from-purple-600 to-indigo-700',
  icon = '🚀',
  variant = 'quantum-holographic',
  marketPosition,
  competitiveAdvantage,
  targetMarket,
  setupTime,
  trialPeriod,
  roi,
  competitors,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-400/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
          bg: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
          accent: 'from-cyan-400 to-blue-400'
        };
      case 'holographic':
        return {
          border: 'border-purple-400/30',
          glow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
          bg: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20',
          accent: 'from-purple-400 to-pink-400'
        };
      case 'cyberpunk':
        return {
          border: 'border-pink-400/30',
          glow: 'shadow-[0_0_30px_rgba(236,73,153,0.3)]',
          bg: 'bg-gradient-to-br from-pink-900/20 to-red-900/20',
          accent: 'from-pink-400 to-red-400'
        };
      case 'neural':
        return {
          border: 'border-green-400/30',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          bg: 'bg-gradient-to-br from-green-900/20 to-emerald-900/20',
          accent: 'from-green-400 to-emerald-400'
        };
      case 'quantum-holographic':
        return {
          border: 'border-cyan-400/30',
          glow: 'shadow-[0_0_40px_rgba(0,255,255,0.4)]',
          bg: 'bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20',
          accent: 'from-cyan-400 via-purple-400 to-blue-400'
        };
      default:
        return {
          border: 'border-gray-400/30',
          glow: 'shadow-[0_0_20px_rgba(156,163,175,0.3)]',
          bg: 'bg-gradient-to-br from-gray-900/20 to-slate-900/20',
          accent: 'from-gray-400 to-slate-400'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Quantum Field Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main Card */}
      <motion.div
        className={`relative rounded-2xl p-6 backdrop-blur-xl border ${variantStyles.border} ${variantStyles.bg} ${variantStyles.glow} transition-all duration-500`}
        style={{
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          rotateX: springRotateX,
          rotateY: springRotateY
        }}
        animate={{
          boxShadow: isHovered 
            ? `0 20px 40px rgba(0,0,0,0.4), ${variantStyles.glow}` 
            : `0 10px 20px rgba(0,0,0,0.2)`
        }}
      >
        {/* Quantum Particle Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
                x: [0, (Math.random() - 0.5) * 20],
                y: [0, (Math.random() - 0.5) * 20]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Header Section */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-4xl mb-3">{icon}</div>
            {price && (
              <motion.div
                className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-400 font-semibold text-sm">{price}</span>
              </motion.div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 leading-tight">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Market Position & Competitive Advantage */}
        {marketPosition && (
          <div className="relative z-10 mb-4 p-4 rounded-lg bg-black/20 border border-gray-700/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold">Market Position</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">{marketPosition}</p>
          </div>
        )}

        {competitiveAdvantage && (
          <div className="relative z-10 mb-4 p-4 rounded-lg bg-black/20 border border-gray-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-xs font-semibold">Competitive Advantage</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">{competitiveAdvantage}</p>
          </div>
        )}

        {/* Key Metrics */}
        <div className="relative z-10 grid grid-cols-2 gap-3 mb-4">
          {setupTime && (
            <div className="flex items-center gap-2 p-2 rounded-lg bg-black/20 border border-gray-700/30">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-400 text-xs">{setupTime}</span>
            </div>
          )}
          {trialPeriod && (
            <div className="flex items-center gap-2 p-2 rounded-lg bg-black/20 border border-gray-700/30">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-yellow-400 text-xs">{trialPeriod} trial</span>
            </div>
          )}
          {roi && (
            <div className="flex items-center gap-2 p-2 rounded-lg bg-black/20 border border-gray-700/30">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-xs">{roi}</span>
            </div>
          )}
          {targetMarket && (
            <div className="flex items-center gap-2 p-2 rounded-lg bg-black/20 border border-gray-700/30">
              <Users className="w-3 h-3 text-purple-400" />
              <span className="text-purple-400 text-xs">Target market</span>
            </div>
          )}
        </div>

        {/* Features List */}
        {features.length > 0 && (
          <div className="relative z-10 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">Key Features</span>
            </div>
            <ul className="space-y-2">
              {features.slice(0, 4).map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-gray-300 text-xs"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        {link && (
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-xl bg-gradient-to-r ${color} text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-${color.split('-')[1]}-500/25`}
            >
              <span>Learn More</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        )}

        {/* Holographic Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quantum Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Floating Elements */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            exit={{ scale: 0, opacity: 0 }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            exit={{ scale: 0, opacity: 0 }}
          />
        </>
      )}
    </motion.div>
  );
};

export default EnhancedFuturisticCard;