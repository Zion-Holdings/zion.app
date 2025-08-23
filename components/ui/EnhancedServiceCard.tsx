import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Clock, Users, TrendingUp, 
  Shield, Brain, Atom, Rocket, Cpu, Target,
  CheckCircle, ExternalLink, Play
} from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    category: string;
    type: string;
    pricing?: {
      starter?: string;
      professional?: string;
      enterprise?: string;
      custom?: string;
    };
    features?: string[];
    benefits?: string[];
    marketSize?: string;
    targetAudience?: string;
    competitiveAdvantage?: string;
    slug: string;
  };
  variant?: 'default' | 'featured' | 'compact';
  showPricing?: boolean;
  showFeatures?: boolean;
  showBenefits?: boolean;
}

const EnhancedServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = 'default',
  showPricing = false,
  showFeatures = false,
  showBenefits = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('ai') || categoryLower.includes('consciousness')) return Brain;
    if (categoryLower.includes('quantum')) return Atom;
    if (categoryLower.includes('security') || categoryLower.includes('cyber')) return Shield;
    if (categoryLower.includes('space')) return Rocket;
    if (categoryLower.includes('infrastructure') || categoryLower.includes('it')) return Cpu;
    if (categoryLower.includes('business') || categoryLower.includes('saas')) return Target;
    return Star;
  };

  const getCategoryColor = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('ai') || categoryLower.includes('consciousness')) return 'from-purple-500 to-pink-500';
    if (categoryLower.includes('quantum')) return 'from-blue-500 to-cyan-500';
    if (categoryLower.includes('security') || categoryLower.includes('cyber')) return 'from-red-500 to-orange-500';
    if (categoryLower.includes('space')) return 'from-indigo-500 to-purple-500';
    if (categoryLower.includes('infrastructure') || categoryLower.includes('it')) return 'from-yellow-500 to-orange-500';
    if (categoryLower.includes('business') || categoryLower.includes('saas')) return 'from-emerald-500 to-teal-500';
    return 'from-gray-500 to-gray-600';
  };

  const CategoryIcon = getCategoryIcon(service.category);
  const categoryColor = getCategoryColor(service.category);

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/25"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${categoryColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <CategoryIcon className="w-5 h-5 text-white" />
          </div>
          <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
          {service.name}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-3 mb-3">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
            {service.category}
          </span>
          <span className="text-xs text-cyan-400 font-medium">Learn More</span>
        </div>
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 hover:from-gray-700/50 hover:to-gray-600/50 transition-all duration-500 cursor-pointer border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${categoryColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <CategoryIcon className="w-8 h-8 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">3000+</div>
              <div className="text-xs text-gray-400">Services</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">99.99%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">250+</div>
              <div className="text-xs text-gray-400">Countries</div>
            </div>
          </div>

          {/* Features Preview */}
          {showFeatures && service.features && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {service.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center justify-between">
            <Link
              href={service.slug}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <button className="p-3 text-gray-400 hover:text-cyan-300 hover:bg-gray-700/50 rounded-lg transition-all duration-300">
              <Play className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600"
        />
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/25"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${categoryColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <CategoryIcon className="w-6 h-6 text-white" />
        </div>
        <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
        {service.name}
      </h3>
      
      <p className="text-gray-300 mb-4 line-clamp-3">
        {service.description}
      </p>

      {/* Category & Type */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
          {service.category}
        </span>
        <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
          {service.type}
        </span>
      </div>

      {/* Pricing Preview */}
      {showPricing && service.pricing && (
        <div className="mb-4 p-3 bg-gray-700/30 rounded-lg">
          <div className="text-sm text-gray-400 mb-2">Starting from</div>
          <div className="text-lg font-bold text-cyan-400">
            {service.pricing.starter || service.pricing.custom}
          </div>
        </div>
      )}

      {/* Benefits Preview */}
      {showBenefits && service.benefits && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits</h4>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-3 h-3 text-cyan-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Market Info */}
      {service.marketSize && (
        <div className="mb-4 p-3 bg-gray-700/30 rounded-lg">
          <div className="text-sm text-gray-400 mb-1">Market Size</div>
          <div className="text-sm font-semibold text-green-400">{service.marketSize}</div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>Enterprise</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4" />
            <span>Growth</span>
          </div>
        </div>
        
        <Link
          href={service.slug}
          className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 font-medium"
        >
          Explore Service
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default EnhancedServiceCard;