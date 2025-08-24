import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Users, Clock, 
  ArrowRight, ExternalLink, Check, 
  Zap, Shield, Rocket, Brain, Cpu
} from 'lucide-react';

interface UltraAdvancedServiceCardProps {
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
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural';
}

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({
  service,
  variant = 'default'
}) => {
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

  const getVariantStyles = () => {
    switch (variant) {
      case 'holographic':
        return {
          card: 'bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-500/20 backdrop-blur-xl',
          glow: 'shadow-[0_0_30px_rgba(236,72,153,0.3)]',
          accent: 'from-pink-500 to-purple-500'
        };
      case 'quantum':
        return {
          card: 'bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/20 backdrop-blur-xl',
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          accent: 'from-cyan-500 to-blue-500'
        };
      case 'cyberpunk':
        return {
          card: 'bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10 border border-red-500/20 backdrop-blur-xl',
          glow: 'shadow-[0_0_30px_rgba(239,68,68,0.3)]',
          accent: 'from-red-500 to-pink-500'
        };
      case 'neural':
        return {
          card: 'bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/20 backdrop-blur-xl',
          glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]',
          accent: 'from-green-500 to-emerald-500'
        };
      default:
        return {
          card: 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-xl',
          glow: 'shadow-[0_0_30px_rgba(75,85,99,0.3)]',
          accent: 'from-blue-500 to-purple-500'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative group ${styles.card} ${styles.glow} rounded-2xl p-6 transition-all duration-300 overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white to-transparent rounded-full" />
      </div>

      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
        >
          <Star className="w-3 h-3" />
          POPULAR
        </motion.div>
      )}

      {/* Service Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="text-4xl mb-4"
      >
        {service.icon}
      </motion.div>

      {/* Service Name */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
      >
        {service.name}
      </motion.h3>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 text-sm mb-4"
      >
        {service.tagline}
      </motion.p>

      {/* Price */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-4"
      >
        <span className="text-3xl font-bold text-white">{service.price}</span>
        <span className="text-gray-400 ml-1">{service.period}</span>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-300 text-sm mb-6 leading-relaxed"
      >
        {service.description}
      </motion.p>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-6"
      >
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          Key Features
        </h4>
        <div className="space-y-2">
          {service.features.slice(0, 5).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Market Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-6 p-4 bg-black/20 rounded-lg border border-gray-700/50"
      >
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Market Size:</span>
            <p className="text-white font-semibold">{service.marketSize}</p>
          </div>
          <div>
            <span className="text-gray-400">Growth Rate:</span>
            <p className="text-white font-semibold">{service.growthRate}</p>
          </div>
          <div>
            <span className="text-gray-400">ROI:</span>
            <p className="text-white font-semibold">{service.roi}</p>
          </div>
          <div>
            <span className="text-gray-400">Customers:</span>
            <p className="text-white font-semibold">{service.customers.toLocaleString()}</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mb-6 p-4 bg-black/20 rounded-lg border border-gray-700/50"
      >
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-400" />
          Contact Information
        </h4>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Mobile:</span>
            <span className="text-white">{service.contactInfo.mobile}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Email:</span>
            <span className="text-white">{service.contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Address:</span>
            <span className="text-white text-xs">{service.contactInfo.address}</span>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <motion.a
          href={service.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
        >
          <Rocket className="w-4 h-4" />
          Get Started
        </motion.a>
        
        <motion.a
          href={`/contact?service=${service.id}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Brain className="w-4 h-4" />
          Learn More
        </motion.a>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-xl" />
    </motion.div>
  );
};

export default UltraAdvancedServiceCard;