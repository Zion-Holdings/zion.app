import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, Check, Sparkles, Zap, Brain, 
  Atom, Shield, Rocket, Globe, Target, TrendingUp 
} from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    pricing: {
      starter: string;
      pro: string;
      enterprise: string;
    };
    features: string[];
    benefits: string[];
    useCases: string[];
    marketPrice: string;
    link: string;
    launchDate: string;
    rating: number;
    technology: string[];
    integrations: string[];
    compliance: string[];
    deployment: string[];
    [key: string]: any;
  };
  variant?: 'default' | 'featured' | 'premium' | 'quantum' | 'ai' | 'space';
  showDetails?: boolean;
}

const UltraFuturisticServiceCard2038: React.FC<ServiceCardProps> = ({ 
  service, 
  variant = 'default',
  showDetails = false 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          border: 'border-cyan-500/50',
          glow: 'shadow-2xl shadow-cyan-500/25',
          accent: 'from-cyan-500 to-blue-600',
          badge: 'bg-gradient-to-r from-cyan-500 to-blue-600'
        };
      case 'premium':
        return {
          border: 'border-purple-500/50',
          glow: 'shadow-2xl shadow-purple-500/25',
          accent: 'from-purple-500 to-pink-600',
          badge: 'bg-gradient-to-r from-purple-500 to-pink-600'
        };
      case 'quantum':
        return {
          border: 'border-indigo-500/50',
          glow: 'shadow-2xl shadow-indigo-500/25',
          accent: 'from-indigo-500 to-purple-600',
          badge: 'bg-gradient-to-r from-indigo-500 to-purple-600'
        };
      case 'ai':
        return {
          border: 'border-pink-500/50',
          glow: 'shadow-2xl shadow-pink-500/25',
          accent: 'from-pink-500 to-rose-600',
          badge: 'bg-gradient-to-r from-pink-500 to-rose-600'
        };
      case 'space':
        return {
          border: 'border-orange-500/50',
          glow: 'shadow-2xl shadow-orange-500/25',
          accent: 'from-orange-500 to-red-600',
          badge: 'bg-gradient-to-r from-orange-500 to-red-600'
        };
      default:
        return {
          border: 'border-white/10',
          glow: 'shadow-lg shadow-white/10',
          accent: 'from-gray-500 to-slate-600',
          badge: 'bg-gradient-to-r from-gray-500 to-slate-600'
        };
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('machine learning')) {
      return <Brain className="w-4 h-4" />;
    } else if (category.toLowerCase().includes('quantum')) {
      return <Atom className="w-4 h-4" />;
    } else if (category.toLowerCase().includes('space')) {
      return <Globe className="w-4 h-4" />;
    } else if (category.toLowerCase().includes('security')) {
      return <Shield className="w-4 h-4" />;
    } else if (category.toLowerCase().includes('automation')) {
      return <Zap className="w-4 h-4" />;
    } else {
      return <Rocket className="w-4 h-4" />;
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      className={`group relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border ${styles.border} rounded-2xl p-6 transition-all duration-500 hover:${styles.glow} overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-4 left-4 opacity-20">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
              {service.name}
            </h3>
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
              {service.tagline}
            </p>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300 font-medium">{service.rating}</span>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`inline-flex items-center px-3 py-1 ${styles.badge} text-white rounded-full text-xs font-medium`}>
            {getCategoryIcon(service.category)}
            <span className="ml-1">{service.category}</span>
          </div>
          {variant === 'featured' && (
            <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-xs font-medium">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 mb-6">
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Pricing Section */}
      <div className="relative z-10 mb-6">
        <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-white">
              {service.pricing.starter}
            </div>
            <div className="text-xs text-cyan-400 font-medium">
              Starting Price
            </div>
          </div>
          <div className="text-xs text-gray-400">
            Market Price: {service.marketPrice}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Launch: {new Date(service.launchDate).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="relative z-10 mb-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
          <Target className="w-4 h-4 mr-2 text-cyan-400" />
          Key Features
        </h4>
        <div className="space-y-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="flex items-center text-xs text-gray-400"
            >
              <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </motion.div>
          ))}
          {service.features.length > 3 && (
            <div className="text-xs text-cyan-400 font-medium">
              +{service.features.length - 3} more features
            </div>
          )}
        </div>
      </div>

      {/* Benefits Preview */}
      {showDetails && (
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
            Key Benefits
          </h4>
          <div className="space-y-2">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center text-xs text-gray-400"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="line-clamp-1">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Technology Stack */}
      {showDetails && (
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Technology Stack</h4>
          <div className="flex flex-wrap gap-2">
            {service.technology.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative z-10 flex items-center justify-between">
        <a
          href={service.link}
          className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300 group-hover:scale-105"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        
        <a
          href={service.link}
          className={`px-4 py-2 bg-gradient-to-r ${styles.accent} text-white rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg`}
        >
          Get Started
        </a>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110"></div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2038;