import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, TrendingUp } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    type: string;
    pricing: {
      starter: string;
      professional: string;
      enterprise: string;
      custom: string;
    };
    features: string[];
    benefits: string[];
    useCases: string[];
    marketSize: string;
    targetAudience: string;
    competitiveAdvantage: string;
    slug: string;
  };
  onClick: () => void;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, featured = false }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Quantum Technology': 'from-blue-500 to-cyan-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Micro SAAS': 'from-emerald-500 to-teal-500',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[category] || colors.default;
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return '🤖';
    if (category.includes('Quantum')) return '⚛️';
    if (category.includes('Cybersecurity')) return '🛡️';
    if (category.includes('Space')) return '🚀';
    if (category.includes('Micro SAAS')) return '💼';
    return '⚡';
  };

  return (
    <motion.div
      className={`group cursor-pointer h-full ${
        featured 
          ? 'ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/25' 
          : ''
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{getCategoryIcon(service.category)}</span>
              {featured && (
                <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded">
                {service.type}
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {service.name}
          </h3>
          
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
            {service.tagline}
          </p>
        </div>

        {/* Category Badge */}
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} bg-opacity-20 text-white border border-white/20`}>
            {service.category}
          </span>
        </div>

        {/* Pricing */}
        <div className="mb-4 flex-1">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Starting at:</span>
              <span className="text-cyan-400 font-semibold">{service.pricing.starter}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Professional:</span>
              <span className="text-purple-400 font-semibold">{service.pricing.professional}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Enterprise:</span>
              <span className="text-emerald-400 font-semibold">{service.pricing.enterprise}</span>
            </div>
          </div>
        </div>

        {/* Market Info */}
        <div className="mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>{service.marketSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{service.targetAudience.split(',')[0]}...</span>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-4 flex-1">
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded">
              {service.category.split(' ')[0]}
            </div>
            <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
              <span className="text-sm font-medium">Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;