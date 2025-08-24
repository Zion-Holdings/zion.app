import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass' | 'neon' | 'holographic';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function FuturisticCard({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = true,
  onClick 
}: FuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    relative overflow-hidden rounded-2xl border transition-all duration-500
    ${hoverEffect ? 'cursor-pointer transform-gpu' : ''}
    ${className}
  `;

  const variants = {
    default: `
      bg-gray-900/50 border-gray-700/50 backdrop-blur-sm
      ${hoverEffect ? 'hover:bg-gray-800/60 hover:border-gray-600/50 hover:scale-105' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20 
      border-blue-500/30 backdrop-blur-sm
      ${hoverEffect ? 'hover:from-blue-800/30 hover:via-purple-800/30 hover:to-green-800/30 hover:scale-105' : ''}
    `,
    glass: `
      bg-white/5 border-white/10 backdrop-blur-xl
      ${hoverEffect ? 'hover:bg-white/10 hover:border-white/20 hover:scale-105' : ''}
    `,
    neon: `
      bg-gray-900/80 border-cyan-400/50 backdrop-blur-sm
      ${hoverEffect ? 'hover:border-cyan-300/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105' : ''}
    `,
    holographic: `
      bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 
      border-cyan-400/30 backdrop-blur-sm
      ${hoverEffect ? 'hover:from-cyan-400/20 hover:via-blue-400/20 hover:to-purple-400/20 hover:scale-105' : ''}
    `
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { opacity: 1, scale: 1.2 }
  };

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
      whileTap={hoverEffect ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated border glow */}
      {variant === 'neon' && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20"
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Holographic effect */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%]" />
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-br-lg opacity-60" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-bl from-purple-400 to-pink-500 rounded-bl-lg opacity-60" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-tr-lg opacity-60" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-orange-400 to-red-500 rounded-tl-lg opacity-60" />
    </motion.div>
  );
}

// Specialized card variants
export function ServiceCard({ 
  title, 
  description, 
  icon, 
  price, 
  features, 
  popular = false,
  className = '',
  onClick 
}: {
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  popular?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <FuturisticCard 
      variant="gradient" 
      className={`${className} ${popular ? 'ring-2 ring-yellow-400/50' : ''}`}
      onClick={onClick}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="text-3xl font-bold text-white mb-2">{price}</div>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
        Get Started
      </button>
    </FuturisticCard>
  );
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  className = '',
  onClick 
}: {
  title: string;
  description: string;
  icon: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <FuturisticCard 
      variant="glass" 
      className={`${className} text-center`}
      onClick={onClick}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </FuturisticCard>
  );
}