import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Zap, Shield, Clock, Phone } from 'lucide-react';

interface UltraFuturisticServiceCardProps {
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

const UltraFuturisticServiceCard: React.FC<UltraFuturisticServiceCardProps> = ({
  service,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'market' | 'contact'>('overview');
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Enhanced glow effect on hover
  useEffect(() => {
    if (isHovered && glowRef.current) {
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        glowRef.current.style.left = `${centerX}px`;
        glowRef.current.style.top = `${centerY}px`;
      }
    }
  }, [isHovered]);

  const getGradientColors = (variant: string) => {
    switch (variant) {
      case 'quantum':
        return 'from-cyan-500 via-blue-500 to-purple-600';
      case 'holographic':
        return 'from-purple-500 via-pink-500 to-rose-600';
      case 'matrix':
        return 'from-green-500 via-emerald-500 to-teal-600';
      case 'neural':
        return 'from-yellow-500 via-orange-500 to-red-600';
      case 'cyberpunk':
        return 'from-pink-500 via-purple-500 to-cyan-600';
      default:
        return 'from-blue-500 via-purple-500 to-pink-600';
    }
  };

  const getGlowColor = (variant: string) => {
    switch (variant) {
      case 'quantum':
        return 'rgba(0, 255, 255, 0.3)';
      case 'holographic':
        return 'rgba(139, 92, 246, 0.3)';
      case 'matrix':
        return 'rgba(16, 185, 129, 0.3)';
      case 'neural':
        return 'rgba(245, 158, 11, 0.3)';
      case 'cyberpunk':
        return 'rgba(236, 73, 153, 0.3)';
      default:
        return 'rgba(59, 130, 246, 0.3)';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Zap },
    { id: 'features', label: 'Features', icon: Shield },
    { id: 'market', label: 'Market', icon: TrendingUp },
    { id: 'contact', label: 'Contact', icon: Users }
  ];

  return (
    <div className={`relative group ${className}`}>
      {/* Enhanced glow effect */}
      <div
        ref={glowRef}
        className="absolute w-96 h-96 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
        style={{
          background: `radial-gradient(circle, ${getGlowColor(service.variant)} 0%, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
      />

      <motion.div
        ref={cardRef}
        className={`relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
          isHovered ? 'scale-105 shadow-cyan-500/20' : 'scale-100'
        }`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        </div>

        {/* Header section */}
        <div className="relative p-6">
          {/* Popular badge */}
          {service.popular && (
            <motion.div
              className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              POPULAR
            </motion.div>
          )}

          {/* Service icon and title */}
          <div className="flex items-start space-x-4 mb-4">
            <motion.div
              className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${getGradientColors(service.variant)} shadow-lg`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {service.icon}
            </motion.div>
            
            <div className="flex-1">
              <motion.h3
                className="text-xl font-bold text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {service.name}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-sm leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {service.tagline}
              </motion.p>
            </div>
          </div>

          {/* Price and trial info */}
          <motion.div
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">{service.period}</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Free Trial</div>
              <div className="text-lg font-semibold text-green-400">{service.trialDays} days</div>
            </div>
          </motion.div>

          {/* Rating and customers */}
          <motion.div
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400 ml-2">
                {service.rating} ({service.reviews} reviews)
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Customers</div>
              <div className="text-lg font-semibold text-blue-400">{service.customers.toLocaleString()}+</div>
            </div>
          </motion.div>
        </div>

        {/* Tab navigation */}
        <div className="px-6">
          <div className="flex space-x-1 bg-gray-800/50 rounded-lg p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Setup Time</div>
                    <div className="text-sm text-white font-medium">{service.setupTime}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Category</div>
                    <div className="text-sm text-white font-medium">{service.category}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-4 border border-blue-500/20">
                  <div className="text-sm text-blue-400 mb-2">ROI Promise</div>
                  <div className="text-white font-medium">{service.roi}</div>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'market' && (
              <motion.div
                key="market"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Market Size</div>
                    <div className="text-sm text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Growth Rate</div>
                    <div className="text-sm text-green-400 font-medium">{service.growthRate}</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-2">Competitors</div>
                  <div className="text-sm text-gray-300">{service.competitors.join(', ')}</div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-2">Target Audience</div>
                  <div className="text-sm text-gray-300">{service.targetAudience}</div>
                </div>
              </motion.div>
            )}

            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{service.contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{service.contactInfo.address}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-4 border border-green-500/20">
                  <div className="text-sm text-green-400 mb-2">Ready to Transform?</div>
                  <div className="text-white text-sm">Contact us today to start your journey into the future of technology.</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action buttons */}
        <div className="p-6 pt-0">
          <div className="flex space-x-3">
            <motion.button
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(service.link, '_blank')}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              className="px-4 py-3 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 rounded-lg transition-all duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="text-sm">{isExpanded ? 'Less' : 'More'}</span>
            </motion.button>
          </div>
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-gray-800"
            >
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.integrations.slice(0, 5).map((integration, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-purple-400 text-xs rounded-md"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Use Cases</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        <span className="text-gray-300 text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Implementation Details</h4>
                  <p className="text-gray-300 text-sm">{service.implementationDetails}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UltraFuturisticServiceCard;