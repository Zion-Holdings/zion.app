import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

interface RevolutionaryServiceCardProps {
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
  variant?: 'default' | 'holographic' | 'quantum' | 'neural' | 'cyberpunk';
}

const RevolutionaryServiceCard: React.FC<RevolutionaryServiceCardProps> = ({
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
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'holographic':
        return {
          card: 'bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80 border-indigo-500/50',
          glow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
          accent: 'from-indigo-400 to-purple-400'
        };
      case 'quantum':
        return {
          card: 'bg-gradient-to-br from-cyan-900/80 via-blue-900/80 to-purple-900/80 border-cyan-500/50',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
          accent: 'from-cyan-400 to-blue-400'
        };
      case 'neural':
        return {
          card: 'bg-gradient-to-br from-green-900/80 via-emerald-900/80 to-teal-900/80 border-green-500/50',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          accent: 'from-green-400 to-emerald-400'
        };
      case 'cyberpunk':
        return {
          card: 'bg-gradient-to-br from-red-900/80 via-pink-900/80 to-purple-900/80 border-pink-500/50',
          glow: 'shadow-[0_0_30px_rgba(236,73,153,0.3)]',
          accent: 'from-pink-400 to-red-400'
        };
      default:
        return {
          card: 'bg-gradient-to-br from-gray-900/80 via-slate-900/80 to-zinc-900/80 border-gray-500/50',
          glow: 'shadow-[0_0_30px_rgba(75,85,99,0.3)]',
          accent: 'from-gray-400 to-slate-400'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl border backdrop-blur-xl ${styles.card} ${styles.glow}`}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">{service.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-gray-300">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-xs font-semibold text-black"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-white">{service.price}</span>
          <span className="text-gray-400">{service.period}</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">{service.description}</p>

        {/* Market Data */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-black/20 rounded-lg p-3 border border-white/10">
            <div className="flex items-center space-x-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Market Size</span>
            </div>
            <p className="text-white font-semibold">{service.marketSize}</p>
          </div>
          
          <div className="bg-black/20 rounded-lg p-3 border border-white/10">
            <div className="flex items-center space-x-2 text-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">Growth Rate</span>
            </div>
            <p className="text-white font-semibold">{service.growthRate}</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Key Features:</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">{service.customers.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">{service.rating}</span>
            </div>
          </div>
          
          <div className="text-gray-400">
            {service.trialDays} day trial
          </div>
        </div>

        {/* ROI Highlight */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 border border-green-500/30">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">ROI Promise:</span>
          </div>
          <p className="text-green-300 text-sm mt-1">{service.roi}</p>
        </div>

        {/* Contact Info */}
        <div className="bg-black/30 rounded-lg p-3 border border-white/10">
          <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
          <div className="space-y-1 text-xs text-gray-300">
            <div>📱 {service.contactInfo.mobile}</div>
            <div>✉️ {service.contactInfo.email}</div>
            <div>📍 {service.contactInfo.address}</div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href={service.link}
          className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center space-x-2">
            <span>Explore {service.name}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.a>

        {/* Floating elements */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default RevolutionaryServiceCard;