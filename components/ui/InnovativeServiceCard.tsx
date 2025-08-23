import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Clock, DollarSign, Users, Zap, Shield, Check, ExternalLink } from 'lucide-react';
import Button from './Button';

interface InnovativeServiceCardProps {
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
  className?: string;
}

const InnovativeServiceCard: React.FC<InnovativeServiceCardProps> = ({ service, className = '' }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const getGradientClass = (variant: string) => {
    switch (variant) {
      case 'quantum-advanced':
        return 'from-cyan-500 via-blue-500 to-purple-600';
      case 'holographic-matrix':
        return 'from-purple-500 via-pink-500 to-cyan-600';
      case 'neural-quantum':
        return 'from-green-500 via-emerald-500 to-cyan-600';
      case 'cyberpunk-futuristic':
        return 'from-pink-500 via-red-500 to-orange-600';
      case 'quantum-entanglement':
        return 'from-indigo-500 via-purple-500 to-pink-600';
      case 'ai-futuristic':
        return 'from-blue-500 via-cyan-500 to-green-600';
      default:
        return 'from-cyan-500 to-blue-600';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group ${className}`}
    >
      {/* Glowing Border Effect */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getGradientClass(service.variant)} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
      />

      {/* Main Card */}
      <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`text-4xl ${service.textColor}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.tagline}</p>
              </div>
            </div>
            
            {service.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
              >
                POPULAR
              </motion.div>
            )}
          </div>

          {/* Price and Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">
                {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{service.rating}</span>
                <span className="text-gray-400 text-sm">({service.reviews})</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-400">Customers</div>
              <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                >
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Market Data */}
          <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-400 mb-1">Market Size</div>
                <div className="text-white font-medium">{service.marketSize}</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">Growth Rate</div>
                <div className="text-green-400 font-medium">{service.growthRate}</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">ROI</div>
                <div className="text-yellow-400 font-medium">{service.roi}</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">Setup Time</div>
                <div className="text-white font-medium">{service.setupTime}</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <Shield className="w-4 h-4 mr-2 text-cyan-400" />
              Contact & Support
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-cyan-400">📱</span>
                <span>{service.contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-cyan-400">✉️</span>
                <span>{service.contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-cyan-400">📍</span>
                <span>{service.contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="primary"
              size="lg"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open(service.link, '_blank')}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="px-6 border-white/20 text-white hover:bg-white/10"
              onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`, '_blank')}
            >
              Contact
            </Button>
          </div>

          {/* Trial Badge */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">
                {service.trialDays} Day Free Trial
              </span>
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          />
      </div>
    </motion.div>
  );
};

export default InnovativeServiceCard;