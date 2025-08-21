import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Clock, DollarSign, ArrowRight, ExternalLink, Phone, Mail, MapPin, Zap, Brain, Rocket, Globe, Cpu, Lock, Eye, Shield, Target, Users, Award } from 'lucide-react';
import Button from './Button';

interface Service {
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
}

interface UltraFuturisticServiceCardProps {
  service: Service;
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI & Machine Learning': <Brain className="w-4 h-4" />,
  'Quantum Computing': <Zap className="w-4 h-4" />,
  'IoT & Smart Cities': <Cpu className="w-4 h-4" />,
  'Robotics & Automation': <Rocket className="w-4 h-4" />,
  'Biotechnology & Healthcare': <Eye className="w-4 h-4" />,
  'Cybersecurity': <Lock className="w-4 h-4" />,
  'Analytics & Business Intelligence': <TrendingUp className="w-4 h-4" />,
  'Cloud & Infrastructure': <Globe className="w-4 h-4" />,
  'Quantum AI & BCI': <Brain className="w-4 h-4" />,
  'Autonomous Systems': <Rocket className="w-4 h-4" />,
  'Space Technology': <Rocket className="w-4 h-4" />,
  'Quantum Finance': <DollarSign className="w-4 h-4" />,
  'Metaverse & VR': <Globe className="w-4 h-4" />,
  'Quantum IoT': <Cpu className="w-4 h-4" />,
  'Autonomous Vehicles': <Rocket className="w-4 h-4" />,
  'Smart Energy': <Zap className="w-4 h-4" />
};

export default function UltraFuturisticServiceCard({ service }: UltraFuturisticServiceCardProps) {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'quantum-advanced':
        return 'from-purple-600 via-indigo-600 to-blue-600';
      case 'neural-cyberpunk':
        return 'from-green-600 via-emerald-600 to-teal-600';
      case 'quantum-space':
        return 'from-blue-600 via-cyan-600 to-indigo-600';
      case 'holographic-matrix':
        return 'from-pink-600 via-rose-600 to-purple-600';
      case 'neural-quantum':
        return 'from-green-600 via-cyan-600 to-blue-600';
      case 'quantum-cyberpunk':
        return 'from-purple-600 via-pink-600 to-red-600';
      case 'holographic-neural':
        return 'from-purple-600 via-green-600 to-blue-600';
      case 'quantum-holographic-advanced':
        return 'from-cyan-600 via-purple-600 to-pink-600';
      case 'quantum-matrix':
        return 'from-blue-600 via-purple-600 to-cyan-600';
      case 'holographic-quantum':
        return 'from-purple-600 via-cyan-600 to-green-600';
      case 'quantum-neural-advanced':
        return 'from-cyan-600 via-green-600 to-purple-600';
      case 'cyberpunk-holographic':
        return 'from-pink-600 via-purple-600 to-cyan-600';
      case 'ai-futuristic':
        return 'from-cyan-600 via-blue-600 to-purple-600';
      case 'quantum-entanglement':
        return 'from-purple-600 via-pink-600 to-indigo-600';
      case 'neural-quantum-cyberpunk':
        return 'from-green-600 via-cyan-600 via-purple-600 to-pink-600';
      default:
        return 'from-cyan-600 to-blue-600';
    }
  };

  const getRoiValue = (roi: string) => {
    const match = roi.match(/(\d+)/);
    return match ? match[1] : '0';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">{service.icon}</div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                {categoryIcons[service.category] && (
                  <span className="text-cyan-400">
                    {categoryIcons[service.category]}
                  </span>
                )}
                <span className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600">
                  {service.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {service.name}
              </h3>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full"
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Popular</span>
            </motion.div>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {service.tagline}
        </p>

        {/* Price and Stats */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-cyan-400 mb-2">
            {service.price}
            <span className="text-sm text-gray-400 ml-1">{service.period}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="w-3 h-3" />
              <span>{service.trialDays} days trial</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <TrendingUp className="w-3 h-3" />
              <span>{getRoiValue(service.roi)}% ROI</span>
            </div>
          </div>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white font-semibold">{service.rating}</span>
            <span className="text-gray-400 text-sm">({service.reviews})</span>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <Users className="w-3 h-3" />
            <span>{service.customers.toLocaleString()}+ users</span>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center space-x-2">
            <Target className="w-3 h-3 text-cyan-400" />
            <span>Key Features</span>
          </h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center space-x-2 text-xs text-gray-300"
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span className="truncate">{feature}</span>
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-cyan-400 mt-1">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Market Data */}
        <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-400">Market:</span>
              <div className="text-white font-semibold">{service.marketSize}</div>
            </div>
            <div>
              <span className="text-gray-400">Growth:</span>
              <div className="text-green-400 font-semibold">{service.growthRate}</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-4">
          <Button 
            href={service.link} 
            variant="quantum" 
            size="sm"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            Learn More
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
          <Button 
            href="/contact" 
            variant="outline" 
            size="sm"
            className="flex-1 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
          >
            Contact
          </Button>
        </div>

        {/* Contact Info */}
        <div className="pt-4 border-t border-gray-700/50">
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span className="truncate">{service.contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3 text-fuchsia-400" />
              <span className="truncate">{service.contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-green-400" />
              <span className="truncate text-xs">{service.contactInfo.address.split(' ').slice(0, 2).join(' ')}...</span>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none"
        />
      </div>
    </motion.div>
  );
}