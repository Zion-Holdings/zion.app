import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  ArrowRight, 
  Zap, 
  Brain, 
  Atom, 
  Rocket,
  Shield,
  Cpu,
  Target,
  TrendingUp,
  Users,
  Clock,
  Award
} from 'lucide-react';

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
}

interface UltraFuturisticServiceCard2026Props {
  service: Service;
  variant?: 'ai' | 'quantum' | 'automation' | 'space' | 'enterprise';
}

const UltraFuturisticServiceCard2026: React.FC<UltraFuturisticServiceCard2026Props> = ({
  service,
  variant = 'ai'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'ai':
        return {
          gradient: 'from-cyan-500 to-blue-600',
          border: 'border-cyan-400/30',
          hoverBorder: 'hover:border-cyan-400/60',
          iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
          badgeBg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
          featureIcon: <Brain className="w-4 h-4 text-cyan-400" />
        };
      case 'quantum':
        return {
          gradient: 'from-purple-500 to-pink-600',
          border: 'border-purple-400/30',
          hoverBorder: 'hover:border-purple-400/60',
          iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
          badgeBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
          featureIcon: <Atom className="w-4 h-4 text-purple-400" />
        };
      case 'automation':
        return {
          gradient: 'from-green-500 to-emerald-600',
          border: 'border-green-400/30',
          hoverBorder: 'hover:border-green-400/60',
          iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
          badgeBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
          featureIcon: <Zap className="w-4 h-4 text-green-400" />
        };
      case 'space':
        return {
          gradient: 'from-blue-500 to-indigo-600',
          border: 'border-blue-400/30',
          hoverBorder: 'hover:border-blue-400/60',
          iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
          badgeBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
          featureIcon: <Rocket className="w-4 h-4 text-blue-400" />
        };
      case 'enterprise':
        return {
          gradient: 'from-gray-500 to-slate-600',
          border: 'border-gray-400/30',
          hoverBorder: 'hover:border-gray-400/60',
          iconBg: 'bg-gradient-to-br from-gray-400 to-slate-500',
          badgeBg: 'bg-gradient-to-r from-gray-500 to-slate-600',
          featureIcon: <Cpu className="w-4 h-4 text-gray-400" />
        };
      default:
        return {
          gradient: 'from-cyan-500 to-blue-600',
          border: 'border-cyan-400/30',
          hoverBorder: 'hover:border-cyan-400/60',
          iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
          badgeBg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
          featureIcon: <Target className="w-4 h-4 text-cyan-400" />
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`relative group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border ${styles.border} ${styles.hoverBorder} rounded-3xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
      
      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 ${styles.badgeBg} text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Star className="w-4 h-4" />
          Most Popular
        </motion.div>
      )}

      {/* Header Section */}
      <div className="relative z-10 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
            {service.icon}
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-white mb-1">
              {service.price}
            </div>
            <div className="text-sm text-gray-400">
              per {service.period}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-gray-300 text-lg mb-3">
          {service.tagline}
        </p>
        
        <p className="text-gray-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Features Section */}
      <div className="relative z-10 mb-8">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-400" />
          Key Features
        </h4>
        
        <div className="space-y-3">
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-5 h-5 bg-cyan-400/20 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <Users className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <div className="text-sm font-semibold text-white">500+</div>
            <div className="text-xs text-gray-400">Clients</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <Clock className="w-5 h-5 text-blue-400 mx-auto mb-2" />
            <div className="text-sm font-semibold text-white">24/7</div>
            <div className="text-xs text-gray-400">Support</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <Award className="w-5 h-5 text-purple-400 mx-auto mb-2" />
            <div className="text-sm font-semibold text-white">99.9%</div>
            <div className="text-xs text-gray-400">Uptime</div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        className={`w-full py-4 bg-gradient-to-r ${styles.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Get Started</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
      </motion.button>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        initial={false}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className={`absolute top-4 right-4 w-2 h-2 ${styles.iconBg} rounded-full opacity-60`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute bottom-4 left-4 w-1 h-1 ${styles.iconBg} rounded-full opacity-40`}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Category Badge */}
      <div className={`absolute top-4 left-4 px-3 py-1 ${styles.badgeBg} text-white text-xs font-medium rounded-full opacity-80`}>
        {service.category}
      </div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2026;