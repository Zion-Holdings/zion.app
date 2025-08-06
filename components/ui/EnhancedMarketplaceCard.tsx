import Link from 'next/link'
import { useState } from 'react'

interface EnhancedMarketplaceCardProps {
  title: string
  description: string
  icon?: string
  link: string
  color: 'blue' | 'purple' | 'green' | 'pink'
  category?: string
  price?: string
  rating?: number
  featured?: boolean
  image?: string
  tags?: string[]
}

const EnhancedMarketplaceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  color, 
  category, 
  price, 
  rating, 
  featured,
  image,
  tags = []
}: EnhancedMarketplaceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    blue: {
      border: 'border-neon-blue/30 hover:border-neon-blue/60',
      bg: 'bg-gradient-to-br from-neon-blue/10 to-neon-blue/5',
      text: 'text-neon-blue',
      glow: 'hover:shadow-neon-blue/50'
    },
    purple: {
      border: 'border-neon-purple/30 hover:border-neon-purple/60',
      bg: 'bg-gradient-to-br from-neon-purple/10 to-neon-purple/5',
      text: 'text-neon-purple',
      glow: 'hover:shadow-neon-purple/50'
    },
    green: {
      border: 'border-neon-green/30 hover:border-neon-green/60',
      bg: 'bg-gradient-to-br from-neon-green/10 to-neon-green/5',
      text: 'text-neon-green',
      glow: 'hover:shadow-neon-green/50'
    },
    pink: {
      border: 'border-neon-pink/30 hover:border-neon-pink/60',
      bg: 'bg-gradient-to-br from-neon-pink/10 to-neon-pink/5',
      text: 'text-neon-pink',
      glow: 'hover:shadow-neon-pink/50'
    }
  }

  return (
    <Link href={link}>
      <div 
        className={`group glass border ${colorClasses[color].border} ${colorClasses[color].bg} rounded-xl p-6 transition-all duration-500 cursor-pointer h-full relative overflow-hidden ${colorClasses[color].glow}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-transform duration-700 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}></div>

        {/* Featured Badge */}
        {featured && (
          <div className="mb-4 relative z-10">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              ⭐ FEATURED
            </span>
          </div>
        )}

        {/* Image or Icon */}
        <div className="relative z-10 mb-4">
          {image ? (
            <div className="w-16 h-16 rounded-lg overflow-hidden mb-4">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : icon ? (
            <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          ) : null}
        </div>

        {/* Category */}
        {category && (
          <div className="mb-2 relative z-10">
            <span className={`text-xs font-semibold uppercase tracking-wide ${colorClasses[color].text}`}>
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-high-contrast mb-3 group-hover:text-white transition-colors relative z-10">
          {title}
        </h3>

        {/* Description */}
        <p className="text-high-contrast-secondary text-sm mb-4 leading-relaxed relative z-10">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 relative z-10">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-black/20 rounded-full text-xs text-gray-300 border border-gray-600/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price and Rating */}
        {(price || rating) && (
          <div className="flex justify-between items-center mt-auto relative z-10">
            {price && (
              <span className={`font-semibold ${colorClasses[color].text}`}>
                {price}
              </span>
            )}
            {rating && (
              <div className="flex items-center">
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-high-contrast text-sm ml-1">
                  {rating}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Interactive Arrow */}
        <div className={`absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
          isHovered ? 'translate-x-1' : 'translate-x-0'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          color === 'blue' ? 'bg-neon-blue/10' :
          color === 'purple' ? 'bg-neon-purple/10' :
          color === 'green' ? 'bg-neon-green/10' :
          'bg-neon-pink/10'
        }`}></div>
      </div>
    </Link>
  )
}

export default EnhancedMarketplaceCard
