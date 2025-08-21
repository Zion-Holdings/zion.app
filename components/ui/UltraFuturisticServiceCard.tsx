import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Check,
  Sparkles,
  Zap,
  Shield,
  Brain,
  Rocket,
  Globe,
  Cpu,
  Database,
  Lock,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Code,
  BookOpen,
  Activity,
  Settings,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { EnhancedRealMicroSaasService } from '../../data/enhanced-real-micro-saas-services';

interface UltraFuturisticServiceCardProps {
  service: EnhancedRealMicroSaasService;
  className?: string;
  onClick?: () => void;
}

export default function UltraFuturisticServiceCard({ 
  service, 
  className = '',
  onClick 
}: UltraFuturisticServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    if (isHovered) {
      setGlowIntensity(1);
    } else {
      setGlowIntensity(0);
    }
  }, [isHovered]);

  const getIconComponent = (icon: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      '🧠': <Brain className="w-6 h-6" />,
      '🏭': <Factory className="w-6 h-6" />,
      '🔒': <Lock className="w-6 h-6" />,
      '🚀': <Rocket className="w-6 h-6" />,
      '🌌': <Globe className="w-6 h-6" />,
      '🧬': <Database className="w-6 h-6" />,
      '💰': <CreditCard className="w-6 h-6" />,
      '🎬': <Video className="w-6 h-6" />,
      '🎭': <Palette className="w-6 h-6" />,
      '🔮': <Eye className="w-6 h-6" />,
      '🤖': <Cpu className="w-6 h-6" />,
      '🌍': <Globe className="w-6 h-6" />,
      '⚡': <Zap className="w-6 h-6" />,
      '🚚': <Truck className="w-6 h-6" />,
      '📝': <FileText className="w-6 h-6" />,
      '📊': <BarChart3 className="w-6 h-6" />,
      '☁️': <Cloud className="w-6 h-6" />
    };
    return iconMap[icon] || <Sparkles className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Quantum AI & Research': 'from-purple-600 to-indigo-700',
      'Industrial AI & Manufacturing': 'from-orange-500 to-red-600',
      'Cybersecurity & AI': 'from-red-500 to-pink-600',
      'Space Technology & Aerospace': 'from-blue-500 to-indigo-600',
      'AI & Video Production': 'from-purple-500 to-pink-600',
      'Quantum Technology': 'from-indigo-600 to-purple-800',
      'Advanced AI Services': 'from-pink-600 to-purple-700',
      'Metaverse & VR/AR': 'from-cyan-600 to-blue-700',
      'Biotechnology & Healthcare AI': 'from-emerald-600 to-teal-700',
      'Financial Technology & Trading': 'from-yellow-600 to-orange-700',
      'Robotics & Automation': 'from-gray-600 to-slate-700',
      'Climate Technology': 'from-green-600 to-emerald-700'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quantum Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          getCategoryColor(service.category)
        } opacity-0 group-hover:opacity-20 blur-xl`}
        style={{
          transform: `scale(${1 + glowIntensity * 0.1})`,
        }}
      />

      {/* Main Card */}
      <motion.div
        className="relative bg-black/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 overflow-hidden"
        style={{
          boxShadow: `0 0 ${20 + glowIntensity * 30}px rgba(0, 255, 255, ${0.1 + glowIntensity * 0.2})`,
        }}
      >
        {/* Quantum Energy Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-30"></div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {getIconComponent(service.icon)}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-gray-400 text-sm">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-black"
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐ POPULAR
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>

        {/* Price and Trial */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{service.trialDays} days free trial</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market Data */}
        <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <TrendingUp className="w-4 h-4" />
              <span>{service.marketSize}</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Zap className="w-4 h-4" />
              <span>{service.growthRate}</span>
            </div>
          </div>
        </div>

        {/* ROI and Competitors */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-2">
            <DollarSign className="w-4 h-4" />
            <span className="font-semibold">ROI: {service.roi.split(' ')[2]}</span>
          </div>
          <p className="text-xs text-gray-500 line-clamp-2">
            vs {service.competitors.slice(0, 2).join(', ')}
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900/30 rounded-lg p-3 mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Contact Us:</h4>
          <div className="space-y-1 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span className="line-clamp-1">{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(service.link, '_blank');
            }}
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className="px-4 py-3 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Less' : 'More'}
          </motion.button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 6).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases:</h4>
                    <div className="space-y-1">
                      {service.useCases.slice(0, 4).map((useCase, index) => (
                        <div key={index} className="text-xs text-gray-400 flex items-center space-x-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Implementation Details:</h4>
                  <p className="text-xs text-gray-400">{service.implementationDetails}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// Missing icon components
const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Video = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const Eye = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const Truck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM9 17h10M9 17v-4m0-4V7a2 2 0 012-2h6a2 2 0 012 2v6m-6 0h6" />
  </svg>
);

const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);