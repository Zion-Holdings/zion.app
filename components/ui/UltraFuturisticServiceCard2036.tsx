import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, Check, Zap, Brain, Atom, Rocket, 
  Shield, Cpu, Globe, Eye, Building, Lightbulb, Target,
  TrendingUp, Users, Clock, Award
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
  rating?: number;
  marketSize?: string;
  targetAudience?: string;
  competitiveAdvantage?: string;
  integration?: string[];
  useCases?: string[];
}

interface UltraFuturisticServiceCard2036Props {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'automation' | 'cyber' | 'default';
  className?: string;
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI & Data': <Brain className="w-5 h-5" />,
  'Quantum Technology': <Atom className="w-5 h-5" />,
  'Space Technology': <Rocket className="w-5 h-5" />,
  'IT Infrastructure': <Cpu className="w-5 h-5" />,
  'Cybersecurity': <Shield className="w-5 h-5" />,
  'Edge Computing': <Zap className="w-5 h-5" />,
  'Blockchain': <Globe className="w-5 h-5" />,
  'Manufacturing': <Building className="w-5 h-5" />,
  'Healthcare AI': <Eye className="w-5 h-5" />,
  'Emerging Technology': <Lightbulb className="w-5 h-5" />,
  'Biotechnology': <Target className="w-5 h-5" />,
  'Human-Computer Interaction': <Users className="w-5 h-5" />,
  'Metaverse': <Globe className="w-5 h-5" />,
  'Autonomous Systems': <Rocket className="w-5 h-5" />,
  'Climate Technology': <Globe className="w-5 h-5" />
};

const variantConfig = {
  ai: {
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    border: 'border-green-500/30',
    glow: 'shadow-green-500/20',
    accent: 'text-green-400',
    bg: 'from-green-900/20 to-emerald-900/20'
  },
  quantum: {
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    accent: 'text-cyan-400',
    bg: 'from-cyan-900/20 to-blue-900/20'
  },
  space: {
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    accent: 'text-purple-400',
    bg: 'from-purple-900/20 to-pink-900/20'
  },
  automation: {
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    border: 'border-orange-500/30',
    glow: 'shadow-orange-500/20',
    accent: 'text-orange-400',
    bg: 'from-orange-900/20 to-red-900/20'
  },
  cyber: {
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    accent: 'text-blue-400',
    bg: 'from-blue-900/20 to-indigo-900/20'
  },
  default: {
    gradient: 'from-gray-500 via-slate-500 to-zinc-500',
    border: 'border-gray-500/30',
    glow: 'shadow-gray-500/20',
    accent: 'text-gray-400',
    bg: 'from-gray-900/20 to-slate-900/20'
  }
};

export default function UltraFuturisticServiceCard2036({ 
  service, 
  variant = 'default',
  className = ''
}: UltraFuturisticServiceCard2036Props) {
  const config = variantConfig[variant];

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: { 
      rotate: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut" as const
      }
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className={`relative group bg-gradient-to-br ${config.bg} border ${config.border} rounded-2xl p-6 hover:${config.border.replace('/30', '/50')} transition-all duration-500 ${config.glow} hover:shadow-2xl ${className}`}
    >
      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
        >
          <Star className="w-3 h-3 inline mr-1" />
          Popular
        </motion.div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              variants={iconVariants}
              className={`w-12 h-12 bg-gradient-to-br ${config.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
            >
              {categoryIcons[service.category] || <Target className="w-6 h-6" />}
            </motion.div>
            <div>
              <span className="px-3 py-1 bg-gray-800/50 text-xs font-medium text-gray-300 rounded-full border border-gray-700">
                {service.category}
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {service.name}
          </h3>
          
          <p className={`text-sm font-medium ${config.accent} mb-2`}>
            {service.tagline}
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">{service.price}</span>
            {service.period && (
              <span className="text-gray-400 text-sm ml-1">{service.period}</span>
            )}
          </div>
          {service.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300 font-medium">{service.rating}</span>
            </div>
          )}
        </div>
        
        {service.marketSize && (
          <div className="mt-2 text-xs text-gray-400">
            Market Size: <span className="text-green-400 font-medium">{service.marketSize}</span>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          Key Features
        </h4>
        <div className="space-y-2">
          {service.features.slice(0, 4).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
          {service.features.length > 4 && (
            <div className="text-xs text-gray-500 mt-2 text-center">
              +{service.features.length - 4} more features
            </div>
          )}
        </div>
      </div>

      {/* Additional Info */}
      {(service.targetAudience || service.competitiveAdvantage) && (
        <div className="mb-6 space-y-3">
          {service.targetAudience && (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-1 flex items-center gap-2">
                <Users className="w-3 h-3" />
                Target Audience
              </h4>
              <p className="text-xs text-gray-500">{service.targetAudience}</p>
            </div>
          )}
          
          {service.competitiveAdvantage && (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-1 flex items-center gap-2">
                <Award className="w-3 h-3" />
                Competitive Advantage
              </h4>
              <p className="text-xs text-gray-500">{service.competitiveAdvantage}</p>
            </div>
          )}
        </div>
      )}

      {/* CTA Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto"
      >
        <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
        </button>
      </motion.div>

      {/* Hover Effects */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${config.gradient} opacity-10 rounded-bl-full transition-all duration-500 group-hover:opacity-20`} />
    </motion.div>
  );
}