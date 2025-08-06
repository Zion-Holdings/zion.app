import Link from 'next/link'
import { useState } from 'react'

interface FuturisticCardProps {
  title: string
  description: string
  icon?: string
  link: string
  color: 'blue' | 'purple' | 'green' | 'pink'
  category?: string
  price?: string
  rating?: number
  featured?: boolean
}

const FuturisticCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  color, 
  category, 
  price, 
  rating, 
  featured 
}: FuturisticCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    blue: 'border-neon-blue/30 hover:border-neon-blue/60 bg-gradient-to-br from-neon-blue/10 to-neon-blue/5',
    purple: 'border-neon-purple/30 hover:border-neon-purple/60 bg-gradient-to-br from-neon-purple/10 to-neon-purple/5',
    green: 'border-neon-green/30 hover:border-neon-green/60 bg-gradient-to-br from-neon-green/10 to-neon-green/5',
    pink: 'border-neon-pink/30 hover:border-neon-pink/60 bg-gradient-to-br from-neon-pink/10 to-neon-pink/5'
  }

  const textColorClasses = {
    blue: 'text-neon-blue',
    purple: 'text-neon-purple',
    green: 'text-neon-green',
    pink: 'text-neon-pink'
  }

  const glowClasses = {
    blue: 'hover:shadow-neon-blue/50',
    purple: 'hover:shadow-neon-purple/50',
    green: 'hover:shadow-neon-green/50',
    pink: 'hover:shadow-neon-pink/50'
  }

  return (
    <Link href={link}>
      <div 
        className={`group glass border ${colorClasses[color]} ${glowClasses[color]} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer h-full relative overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-transform duration-700 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}></div>

        {/* Featured Badge with Animation */}
        {featured && (
          <div className="mb-4 relative z-10">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              FEATURED
            </span>
          </div>
        )}

        {/* Animated Icon */}
        {icon && (
          <div className={`text-4xl mb-4 transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
            {icon}
          </div>
        )}

        {/* Category with Hover Effect */}
        {category && (
          <div className="mb-2 relative z-10">
            <span className={`text-xs font-semibold uppercase tracking-wide ${textColorClasses[color]} transition-colors duration-300 ${
              isHovered ? 'text-white' : ''
            }`}>
              {category}
            </span>
          </div>
        )}

        {/* Title with Enhanced Typography */}
        <h3 className="text-lg font-bold text-high-contrast mb-3 group-hover:text-white transition-colors duration-300 relative z-10">
          {title}
        </h3>

        {/* Description with Improved Readability */}
        <p className="text-high-contrast-secondary text-sm mb-4 leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Enhanced Price and Rating Section */}
        {(price || rating) && (
          <div className="flex justify-between items-center mt-auto relative z-10">
            {price && (
              <span className={`font-semibold transition-all duration-300 ${textColorClasses[color]} ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}>
                {price}
              </span>
            )}
            {rating && (
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-high-contrast text-sm font-medium">
                  {rating}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Interactive Corner Element */}
        <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r ${colorClasses[color].split(' ')[0]} rounded-bl-lg transition-all duration-300 ${
          isHovered ? 'w-12 h-12' : 'w-8 h-8'
        }`}></div>

        {/* Hover Indicator */}
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${textColorClasses[color]} transition-all duration-300 ${
          isHovered ? 'w-full' : 'w-0'
        }`}></div>
      </div>
    </Link>
  )
}

export default FuturisticCard
