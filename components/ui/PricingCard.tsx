import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import Button from './Button';

interface PricingFeature {
  text: string;
  included: boolean;
  highlighted?: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  featured?: boolean;
  variant?: 'ai-futuristic' | 'quantum-futuristic' | 'space-futuristic' | 'biotech-futuristic';
  onSelect?: () => void;
  badge?: string;
  rating?: number;
  customers?: number;
  buttonText?: string;
}

export default function PricingCard({
  title,
  price,
  period = '/month',
  description,
  features,
  featured = false,
  variant = 'ai-futuristic',
  onSelect,
  badge,
  rating,
  customers,
  buttonText = 'Get Started'
}: PricingCardProps) {
  const variantStyles = {
    'ai-futuristic': {
      bg: 'from-cyan-900/20 via-blue-900/20 to-purple-900/20',
      border: 'border-cyan-400/30',
      accent: 'text-cyan-400',
      button: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
    },
    'quantum-futuristic': {
      bg: 'from-purple-900/20 via-pink-900/20 to-violet-900/20',
      border: 'border-purple-400/30',
      accent: 'text-purple-400',
      button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400'
    },
    'space-futuristic': {
      bg: 'from-indigo-900/20 via-blue-900/20 to-cyan-900/20',
      border: 'border-indigo-400/30',
      accent: 'text-indigo-400',
      button: 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400'
    },
    'biotech-futuristic': {
      bg: 'from-green-900/20 via-emerald-900/20 to-teal-900/20',
      border: 'border-green-400/30',
      accent: 'text-green-400',
      button: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400'
    }
  };

  const style = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className={`
        relative overflow-hidden rounded-2xl backdrop-blur-xl
        bg-gradient-to-br ${style.bg}
        border ${style.border}
        ${featured ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-cyan-400/50' : ''}
        shadow-2xl hover:shadow-neon-blue
        transition-all duration-300
        h-full flex flex-col
      `}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-1 -right-1 z-10">
          <div className={`
            bg-gradient-to-r ${style.button}
            text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl
            shadow-lg
          `}>
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Custom Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`
            ${style.accent} bg-gray-900/70 backdrop-blur-sm
            text-xs font-semibold px-2 py-1 rounded-full border ${style.border}
          `}>
            {badge}
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline mb-2">
            <span className={`text-3xl sm:text-4xl font-bold ${style.accent}`}>
              {price}
            </span>
            <span className="text-gray-400 ml-1 text-sm sm:text-base">
              {period}
            </span>
          </div>
          
          {/* Social Proof */}
          {(rating || customers) && (
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-400">
              {rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{rating}/5</span>
                </div>
              )}
              {customers && (
                <div className="flex items-center space-x-1">
                  <span>{customers} customers</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="flex-1 mb-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className={`
                  flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
                  ${feature.included 
                    ? `bg-gradient-to-r ${style.button}` 
                    : 'bg-gray-600'
                  }
                `}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className={`
                  text-sm sm:text-base
                  ${feature.included ? 'text-gray-200' : 'text-gray-500 line-through'}
                  ${feature.highlighted ? `font-semibold ${style.accent}` : ''}
                `}>
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={onSelect}
            className={`
              w-full py-3 sm:py-4 font-semibold text-white
              bg-gradient-to-r ${style.button}
              border-none shadow-lg hover:shadow-xl
              transition-all duration-300
              flex items-center justify-center space-x-2
            `}
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Animated Border Glow */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 hover:opacity-100
        bg-gradient-to-r ${style.bg} blur-xl -z-10
        transition-opacity duration-300
      `} />
    </motion.div>
  );
}