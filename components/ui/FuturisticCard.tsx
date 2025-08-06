import Link from 'next/link'

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

  return (
    <Link href={link}>
      <div className={`group glass border ${colorClasses[color]} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer h-full`}>
        {/* Featured Badge */}
        {featured && (
          <div className="mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-3 py-1 rounded-full text-xs font-semibold">
              FEATURED
            </span>
          </div>
        )}

        {/* Icon */}
        {icon && (
          <div className="text-4xl mb-4">
            {icon}
          </div>
        )}

        {/* Category */}
        {category && (
          <div className="mb-2">
            <span className={`text-xs font-semibold uppercase tracking-wide ${textColorClasses[color]}`}>
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-high-contrast mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-high-contrast-secondary text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Price and Rating */}
        {(price || rating) && (
          <div className="flex justify-between items-center mt-auto">
            {price && (
              <span className={`font-semibold ${textColorClasses[color]}`}>
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

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </Link>
  )
}

export default FuturisticCard
