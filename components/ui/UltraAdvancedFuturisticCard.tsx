import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Zap, Shield, Users, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin } from 'lucide-react';

interface UltraAdvancedFuturisticCardProps {
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
    innovationLevel: string;
    patentStatus: string;
    aiCapabilities: string[];
    marketDisruption: string;
  };
  className?: string;
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  service,
  className = ''
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Computing & AI':
        return <Cpu className="w-5 h-5" />;
      case 'Manufacturing & Industry 4.0':
        return <Building className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Healthcare & Biotechnology':
        return <Activity className="w-5 h-5" />;
      case 'Financial Technology':
        return <DollarSign className="w-5 h-5" />;
      case 'Aerospace & Space Technology':
        return <Rocket className="w-5 h-5" />;
      case 'Metaverse & VR/AR':
        return <Smartphone className="w-5 h-5" />;
      case 'Blockchain & DeFi':
        return <Code className="w-5 h-5" />;
      case 'IoT & Smart Cities':
        return <Cloud className="w-5 h-5" />;
      case 'Edge Computing':
        return <Zap className="w-5 h-5" />;
      case 'AI & Content Creation':
        return <FileText className="w-5 h-5" />;
      case 'AI & Customer Service':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Settings className="w-5 h-5" />;
    }
  };

  const getInnovationBadge = (level: string) => {
    const badges = {
      'Revolutionary': { color: 'from-red-500 to-pink-600', text: '🚀 Revolutionary' },
      'Breakthrough': { color: 'from-purple-500 to-indigo-600', text: '💡 Breakthrough' },
      'Advanced': { color: 'from-blue-500 to-cyan-600', text: '⚡ Advanced' },
      'Emerging': { color: 'from-green-500 to-emerald-600', text: '🌱 Emerging' }
    };
    
    const badge = badges[level as keyof typeof badges] || badges['Advanced'];
    
    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${badge.color} text-white`}>
        {badge.text}
      </div>
    );
  };

  const getPatentBadge = (status: string) => {
    const badges = {
      'Patented': { color: 'from-green-500 to-emerald-600', text: '📜 Patented' },
      'Patent Pending': { color: 'from-yellow-500 to-orange-600', text: '⏳ Patent Pending' },
      'Trade Secret': { color: 'from-purple-500 to-indigo-600', text: '🔒 Trade Secret' },
      'Open Source': { color: 'from-blue-500 to-cyan-600', text: '🌐 Open Source' }
    };
    
    const badge = badges[status as keyof typeof badges] || badges['Trade Secret'];
    
    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${badge.color} text-white`}>
        {badge.text}
      </div>
    );
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* Holographic border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing corners */}
      <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-transparent rounded-tl-2xl opacity-60" />
      <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-purple-400 to-transparent rounded-tr-2xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-tr from-pink-400 to-transparent rounded-bl-2xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-green-400 to-transparent rounded-br-2xl opacity-60" />

      <div className="relative p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
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
          
          {service.popular && (
            <motion.div
              className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-xs font-semibold text-white"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Popular</span>
            </motion.div>
          )}
        </div>

        {/* Innovation and Patent Badges */}
        <div className="flex flex-wrap gap-2">
          {getInnovationBadge(service.innovationLevel)}
          {getPatentBadge(service.patentStatus)}
        </div>

        {/* Price and Trial */}
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-white">
            {service.price}
            <span className="text-lg text-gray-400 font-normal">{service.period}</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Free Trial</div>
            <div className="text-lg font-semibold text-green-400">{service.trialDays} days</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">{service.description}</p>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Key Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market Information */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{service.marketSize}</div>
            <div className="text-xs text-gray-400">Market Size</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{service.growthRate}</div>
            <div className="text-xs text-gray-400">Growth Rate</div>
          </div>
        </div>

        {/* ROI and Setup */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Setup Time:</span>
            <span className="text-white font-medium">{service.setupTime}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Customers:</span>
            <span className="text-white font-medium">{service.customers.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Rating:</span>
            <div className="flex items-center space-x-1">
              <span className="text-white font-medium">{service.rating}</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-400">({service.reviews})</span>
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        {service.aiCapabilities && service.aiCapabilities.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">AI Capabilities</h4>
            <div className="flex flex-wrap gap-2">
              {service.aiCapabilities.slice(0, 3).map((capability, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-md text-xs text-blue-300"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Market Disruption */}
        <div className="p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl">
          <h4 className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-2">Market Disruption</h4>
          <p className="text-sm text-gray-300">{service.marketDisruption}</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact Zion Tech Group</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="w-4 h-4" />
              <span>{service.contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>{service.contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">{service.contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          
          <motion.button
            className="px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trial
          </motion.button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"
            animate={{
              y: [0, 15, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;