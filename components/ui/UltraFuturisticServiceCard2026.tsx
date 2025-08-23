import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Zap, TrendingUp, Shield, Brain, Atom, Rocket } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[];
  benefits?: string[];
}

interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default';
}

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'ai':
        return {
          gradient: 'from-purple-600 via-pink-600 to-purple-700',
          borderColor: 'border-purple-400/30',
          textColor: 'text-purple-400',
          iconBg: 'bg-purple-500/20',
          iconBorder: 'border-purple-400/30'
        };
      case 'quantum':
        return {
          gradient: 'from-cyan-600 via-blue-600 to-cyan-700',
          borderColor: 'border-cyan-400/30',
          textColor: 'text-cyan-400',
          iconBg: 'bg-cyan-500/20',
          iconBorder: 'border-cyan-400/30'
        };
      case 'space':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700',
          borderColor: 'border-indigo-400/30',
          textColor: 'text-indigo-400',
          iconBg: 'bg-indigo-500/20',
          iconBorder: 'border-indigo-400/30'
        };
      case 'cybersecurity':
        return {
          gradient: 'from-red-600 via-orange-600 to-red-700',
          borderColor: 'border-red-400/30',
          textColor: 'text-red-400',
          iconBg: 'bg-red-500/20',
          iconBorder: 'border-red-400/30'
        };
      case 'enterprise':
        return {
          gradient: 'from-indigo-600 via-purple-600 to-indigo-700',
          borderColor: 'border-indigo-400/30',
          textColor: 'text-indigo-400',
          iconBg: 'bg-indigo-500/20',
          iconBorder: 'border-indigo-400/30'
        };
      case 'automation':
        return {
          gradient: 'from-green-600 via-emerald-600 to-green-700',
          borderColor: 'border-green-400/30',
          textColor: 'text-green-400',
          iconBg: 'bg-green-500/20',
          iconBorder: 'border-green-400/30'
        };
      case 'it':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-blue-700',
          borderColor: 'border-blue-400/30',
          textColor: 'text-blue-400',
          iconBg: 'bg-blue-500/20',
          iconBorder: 'border-blue-400/30'
        };
      case 'emerging':
        return {
          gradient: 'from-yellow-600 via-orange-600 to-yellow-700',
          borderColor: 'border-yellow-400/30',
          textColor: 'text-yellow-400',
          iconBg: 'bg-yellow-500/20',
          iconBorder: 'border-yellow-400/30'
        };
      case 'premium':
        return {
          gradient: 'from-amber-600 via-yellow-600 to-amber-700',
          borderColor: 'border-amber-400/30',
          textColor: 'text-amber-400',
          iconBg: 'bg-amber-500/20',
          iconBorder: 'border-amber-400/30'
        };
      default:
        return {
          gradient: 'from-gray-600 via-gray-700 to-gray-800',
          borderColor: 'border-gray-400/30',
          textColor: 'text-gray-400',
          iconBg: 'bg-gray-500/20',
          iconBorder: 'border-gray-400/30'
        };
    }
  };

  const styles = getVariantStyles();

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Rocket;
    if (category.includes('Cybersecurity')) return Shield;
    return TrendingUp;
  };

  const CategoryIcon = getCategoryIcon(service.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
        {/* Enhanced Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {/* Popular Badge */}
        {service.popular && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg"
          >
            <Star className="w-4 h-4 inline mr-1" />
            Popular
          </motion.div>
        )}
        
        {/* Service Header */}
        <div className="text-center mb-8 relative z-10">
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${styles.iconBg} flex items-center justify-center border ${styles.iconBorder} text-4xl backdrop-blur-sm`}>
            {service.icon}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
            {service.name}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {service.tagline}
          </p>
          
          <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
            {service.price}
            <span className="text-lg text-gray-400 font-normal">/{service.period}</span>
          </div>
          
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs text-gray-300">
            <CategoryIcon className="w-3 h-3" />
            <span>{service.category}</span>
          </div>
        </div>
        
        {/* Features List */}
        <div className="space-y-3 mb-8 relative z-10">
          <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-cyan-400" />
            Key Features
          </h4>
          {service.features.slice(0, 6).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center space-x-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Market Information */}
        {service.marketPrice && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Market Price:</span>
              <span className="text-green-400 font-semibold">{service.marketPrice}</span>
            </div>
            
            {service.competitors && (
              <div className="text-xs text-gray-500">
                Competes with: {service.competitors.slice(0, 2).join(', ')}
              </div>
            )}
          </div>
        )}
        
        {/* Target Market & Use Cases */}
        {service.targetMarket && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="text-xs">
              <div className="text-gray-400 mb-2">Target Market:</div>
              <div className="text-gray-300">{service.targetMarket}</div>
            </div>
            
            {service.useCases && (
              <div className="text-xs mt-3">
                <div className="text-gray-400 mb-2">Use Cases:</div>
                <div className="text-gray-300">{service.useCases.slice(0, 3).join(', ')}</div>
              </div>
            )}
          </div>
        )}
        
        {/* Benefits Section */}
        {service.benefits && (
          <div className="border-t border-white/10 pt-4 mb-6 relative z-10">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
              Key Benefits
            </h4>
            <div className="space-y-2">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                  <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA Button */}
        <div className="relative z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${styles.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${styles.textColor}/25 border border-white/20 hover:border-white/40`}
          >
            Get Started
          </motion.button>
        </div>
        
        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/2 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
      </div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2026;