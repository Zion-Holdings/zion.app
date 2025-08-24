import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Users, TrendingUp, Clock, Shield } from 'lucide-react';

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
  index: number;
}

const EnhancedServiceCard: React.FC<EnhancedServiceCardProps> = ({ service, index }) => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <motion.div
      className="group relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>Popular</span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`text-3xl ${service.textColor}`}>
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-gray-400">{service.tagline}</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            {service.trialDays} day free trial • {service.setupTime} setup
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Key Features</span>
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 5).map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
            {service.features.length > 5 && (
              <div className="text-xs text-gray-500 mt-2">
                +{service.features.length - 5} more features
              </div>
            )}
          </div>
        </div>

        {/* Market Data */}
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Market Size</div>
              <div className="text-white font-semibold">{service.marketSize}</div>
            </div>
            <div>
              <div className="text-gray-400">Growth Rate</div>
              <div className="text-white font-semibold">{service.growthRate}</div>
            </div>
            <div>
              <div className="text-gray-400">ROI</div>
              <div className="text-white font-semibold">{service.roi}</div>
            </div>
            <div>
              <div className="text-gray-400">Customers</div>
              <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>{service.customers.toLocaleString()}+ users</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{service.rating}/5 ({service.reviews})</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>{service.growthRate}</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6 p-4 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl border border-gray-700/30">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Contact Information</span>
          </h4>
          <div className="space-y-2 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400">📱</span>
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-400">✉️</span>
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-400">📍</span>
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg group-hover:shadow-purple-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          
          <motion.a
            href={`/contact?service=${service.id}`}
            className="px-6 py-3 border border-purple-500/30 text-purple-400 rounded-xl font-semibold hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Category Badge */}
        <div className="mt-4 flex justify-center">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
            {service.category}
          </span>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default EnhancedServiceCard;