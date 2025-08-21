import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ArrowRight, TrendingUp, Users, Clock, Shield, Zap } from 'lucide-react';

interface EnhancedServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
    textColor: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
}

const EnhancedServiceCard: React.FC<EnhancedServiceCardProps> = ({ service }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -8,
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
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        style={{
          background: `linear-gradient(135deg, ${service.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--tw-${c.split('-')[0]}-${c.split('-')[1]})`).join(', ')})`
        }}
      />
      
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Star className="w-3 h-3 fill-current" />
            POPULAR
          </motion.div>
        </div>
      )}

      {/* Card Content */}
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`text-4xl ${service.textColor}`}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {service.icon}
          </motion.div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{service.price}</div>
            <div className="text-sm text-gray-400">{service.period}</div>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-cyan-400 text-lg font-bold">{service.customers}+</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="text-purple-400 text-lg font-bold">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {feature}
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Market Info */}
        <div className="mb-6 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">Market Size</span>
            <span className="text-xs text-cyan-400">{service.marketSize}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">Growth Rate</span>
            <span className="text-xs text-green-400">{service.growthRate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">ROI</span>
            <span className="text-xs text-yellow-400">{service.roi}</span>
          </div>
        </div>

        {/* Trial & Setup Info */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            {service.trialDays} day trial
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4" />
            {service.setupTime}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            Learn More
          </motion.a>
          
          <motion.a
            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Contact Info */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-xs text-gray-500 text-center">
            Contact: {service.contactInfo.email}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default EnhancedServiceCard;