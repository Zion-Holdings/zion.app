import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface SimpleServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: string;
    period: string;
    features: string[];
    popular: boolean;
    category: string;
    icon: string;
    marketValidation: string;
    targetAudience: string;
    competitiveAdvantage: string;
    pricingStrategy: string;
  };
}

const SimpleServiceCard: React.FC<SimpleServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {service.name}
            </h3>
            <p className="text-sm text-gray-400">{service.category}</p>
          </div>
        </div>
        
        {service.popular && (
          <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-black">
            <Star className="w-3 h-3 fill-current" />
            <span>POPULAR</span>
          </div>
        )}
      </div>

      {/* Tagline */}
      <p className="text-gray-300 text-lg font-medium mb-3">{service.tagline}</p>
      
      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>
      
      {/* Price */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-cyan-400">
          {service.price}/{service.period}
        </div>
      </div>
      
      {/* Features */}
      <div className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="text-sm text-gray-500">
            +{service.features.length - 3} more features
          </div>
        )}
      </div>
      
      {/* Market Info */}
      <div className="space-y-2 mb-6 text-xs text-gray-500">
        <div><strong>Target:</strong> {service.targetAudience}</div>
        <div><strong>Advantage:</strong> {service.competitiveAdvantage}</div>
        <div><strong>Validation:</strong> {service.marketValidation}</div>
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
          {service.category}
        </span>
        
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 group/btn">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  );
};

export default SimpleServiceCard;