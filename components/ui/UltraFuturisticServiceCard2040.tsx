import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, CheckCircle, Brain, Atom, Rocket, 
  Shield, Cloud, Target, Lightbulb, Users, Award,
  TrendingUp, Globe, Lock, Database, Network, Code, BarChart3, Cpu
} from 'lucide-react';
import Link from 'next/link';

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
  marketValidation?: string;
  targetAudience?: string;
  competitiveAdvantage?: string;
  pricingStrategy?: string;
}

interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'automation' | 'space' | 'security' | 'cloud';
  showDetails?: boolean;
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'ai':
      return {
        gradient: 'from-cyan-500 to-blue-600',
        borderColor: 'border-cyan-500/30',
        glowColor: 'shadow-cyan-500/25',
        iconBg: 'from-cyan-500 to-blue-600',
        badgeBg: 'from-cyan-500 to-blue-600'
      };
    case 'quantum':
      return {
        gradient: 'from-purple-500 to-pink-600',
        borderColor: 'border-purple-500/30',
        glowColor: 'shadow-purple-500/25',
        iconBg: 'from-purple-500 to-pink-600',
        badgeBg: 'from-purple-500 to-pink-600'
      };
    case 'space':
      return {
        gradient: 'from-orange-500 to-red-600',
        borderColor: 'border-orange-500/30',
        glowColor: 'shadow-orange-500/25',
        iconBg: 'from-orange-500 to-red-600',
        badgeBg: 'from-orange-500 to-red-600'
      };
    case 'security':
      return {
        gradient: 'from-green-500 to-emerald-600',
        borderColor: 'border-green-500/30',
        glowColor: 'shadow-green-500/25',
        iconBg: 'from-green-500 to-emerald-600',
        badgeBg: 'from-green-500 to-emerald-600'
      };
    case 'cloud':
      return {
        gradient: 'from-blue-500 to-indigo-600',
        borderColor: 'border-blue-500/30',
        glowColor: 'shadow-blue-500/25',
        iconBg: 'from-blue-500 to-indigo-600',
        badgeBg: 'from-blue-500 to-indigo-600'
      };
    default:
      return {
        gradient: 'from-gray-500 to-gray-600',
        borderColor: 'border-gray-500/30',
        glowColor: 'shadow-gray-500/25',
        iconBg: 'from-gray-500 to-gray-600',
        badgeBg: 'from-gray-500 to-gray-600'
      };
  }
};

const getCategoryIcon = (category: string) => {
  if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('machine learning')) {
    return <Brain className="w-5 h-5" />;
  }
  if (category.toLowerCase().includes('quantum')) {
    return <Atom className="w-5 h-5" />;
  }
  if (category.toLowerCase().includes('space')) {
    return <Rocket className="w-5 h-5" />;
  }
  if (category.toLowerCase().includes('security') || category.toLowerCase().includes('cyber')) {
    return <Shield className="w-5 h-5" />;
  }
  if (category.toLowerCase().includes('cloud')) {
    return <Cloud className="w-5 h-5" />;
  }
  if (category.toLowerCase().includes('automation') || category.toLowerCase().includes('devops')) {
    return <Cpu className="w-5 h-5" />;
  }
  if (category.toLowerCase().includes('data') || category.toLowerCase().includes('analytics')) {
    return <BarChart3 className="w-5 h-5" />;
  }
  if (category.toLowerCase().includes('blockchain') || category.toLowerCase().includes('web3')) {
    return <Network className="w-5 h-5" />;
  }
  return <Target className="w-5 h-5" />;
};

const UltraFuturisticServiceCard2040: React.FC<ServiceCardProps> = ({ 
  service, 
  variant = 'ai',
  showDetails = false 
}) => {
  const styles = getVariantStyles(variant);
  const categoryIcon = getCategoryIcon(service.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border ${styles.borderColor} hover:border-white/40 transition-all duration-500 cursor-pointer`}
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`px-3 py-1 bg-gradient-to-r ${styles.badgeBg} text-white text-xs font-semibold rounded-full shadow-lg`}
          >
            Popular
          </motion.div>
        </div>
      )}

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${styles.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
              <span className="text-2xl">{service.icon}</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                {categoryIcon}
                <span className="text-xs text-gray-400 uppercase tracking-wider">{service.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            {service.tagline}
          </p>
          
          {showDetails && service.description && (
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          )}

          {/* Pricing */}
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              {service.price}
            </span>
            <span className="text-gray-400">/{service.period}</span>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Key Features</h4>
            <div className="grid grid-cols-1 gap-2">
              {service.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-sm text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Market validation info */}
          {showDetails && service.marketValidation && (
            <div className="pt-4 border-t border-gray-700/50 space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 font-medium">Market Validation:</span>
                <span className="text-gray-400">{service.marketValidation}</span>
              </div>
              
              {service.targetAudience && (
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 font-medium">Target:</span>
                  <span className="text-gray-400">{service.targetAudience}</span>
                </div>
              )}
              
              {service.competitiveAdvantage && (
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 font-medium">Advantage:</span>
                  <span className="text-gray-400">{service.competitiveAdvantage}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Link href={`/services/${service.id}`}>
            <button className={`w-full px-6 py-3 bg-gradient-to-r ${styles.gradient} text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg ${styles.glowColor} group-hover:shadow-xl`}>
              <span className="flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>

        {/* Hover effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2040;