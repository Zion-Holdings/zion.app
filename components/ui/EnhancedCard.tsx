
import React, { useState } from 'react';
import Link from 'next/link';

interface EnhancedCardProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  color?: 'blue' | 'purple' | 'green' | 'pink';
  category?: string;
  price?: string;
  rating?: number;
  featured?: boolean;
  image?: string;
  tags?: string[];
  stats?: { label: string; value: string }[];
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({
  title,
  description,
  icon = '🚀',
  link = '#',
  color = 'blue',
  category,
  price,
  rating,
  featured = false,
  image,
  tags = [],
  stats = []
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: {
      gradient: 'from-neon-blue to-neon-purple',
      border: 'border-neon-blue/30',
      hoverBorder: 'border-neon-blue/60',
      glow: 'shadow-neon-blue/20',
      hoverGlow: 'shadow-neon-blue/40'
    },
    purple: {
      gradient: 'from-neon-purple to-neon-pink',
      border: 'border-neon-purple/30',
      hoverBorder: 'border-neon-purple/60',
      glow: 'shadow-neon-purple/20',
      hoverGlow: 'shadow-neon-purple/40'
    },
    green: {
      gradient: 'from-neon-green to-neon-blue',
      border: 'border-neon-green/30',
      hoverBorder: 'border-neon-green/60',
      glow: 'shadow-neon-green/20',
      hoverGlow: 'shadow-neon-green/40'
    },
    pink: {
      gradient: 'from-neon-pink to-neon-purple',
      border: 'border-neon-pink/30',
      hoverBorder: 'border-neon-pink/60',
      glow: 'shadow-neon-pink/20',
      hoverGlow: 'shadow-neon-pink/40'
    }
  };

  const currentColor = colorClasses[color];

  return (
    <Link href={link}>
      <div
        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 ${
          featured 
            ? 'bg-gradient-to-br from-black/40 to-black/20 border-2 border-neon-blue/50' 
            : 'glass-dark border border-white/10'
        } ${currentColor.border} hover:${currentColor.hoverBorder} ${currentColor.glow} hover:${currentColor.hoverGlow}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        
        {/* Animated Border */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-semibold text-white animate-pulse">
              Featured
            </div>
          </div>
        )}

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                  {title}
                </h3>
                {category && (
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{category}</p>
                )}
              </div>
            </div>
            
            {/* Rating */}
            {rating && (
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-400">({rating})</span>
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="mb-4 relative overflow-hidden rounded-lg">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-4xl">{icon}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/5 border border-neon-blue/20 rounded-full text-xs text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 py-1 bg-white/5 border border-neon-blue/20 rounded-full text-xs text-gray-400">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Stats */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-neon-blue">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            {price && (
              <div className="text-neon-green font-semibold">{price}</div>
            )}
            <div className="flex items-center space-x-2 text-gray-400 group-hover:text-neon-blue transition-colors duration-300">
              <span className="text-sm">Learn More</span>
              <svg 
                className={`w-4 h-4 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        <div className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${currentColor.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`}></div>
      </div>
    </Link>
  );
};

export default EnhancedCard;
