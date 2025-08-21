import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Zap, Shield, Clock } from 'lucide-react';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateY: 0,
      rotateX: 0
    },
    hover: { 
      scale: 1.02,
      rotateY: (mousePosition.x - 150) * 0.01,
      rotateX: (mousePosition.y - 150) * 0.01,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.3 },
    hover: { 
      opacity: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const featureVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut" as const
      }
    })
  };

  const getGradientClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'from-pink-500 to-rose-600': 'from-pink-500 via-rose-500 to-rose-600',
      'from-cyan-600 to-blue-700': 'from-cyan-500 via-blue-500 to-blue-600',
      'from-emerald-600 to-teal-700': 'from-emerald-500 via-teal-500 to-teal-600',
      'from-violet-600 to-purple-700': 'from-violet-500 via-purple-500 to-purple-600',
      'from-purple-600 via-pink-600 to-cyan-600': 'from-purple-500 via-pink-500 to-cyan-500',
      'from-blue-600 via-indigo-600 to-purple-600': 'from-blue-500 via-indigo-500 to-purple-500',
      'from-green-600 via-emerald-600 to-teal-600': 'from-green-500 via-emerald-500 to-teal-500',
      'from-yellow-600 via-orange-600 to-red-600': 'from-yellow-500 via-orange-500 to-red-500',
      'from-red-600 via-pink-600 to-purple-600': 'from-red-500 via-pink-500 to-purple-500',
      'from-cyan-600 via-blue-600 to-indigo-600': 'from-cyan-500 via-blue-500 to-indigo-500',
      'from-teal-600 via-emerald-600 to-green-600': 'from-teal-500 via-emerald-500 to-green-500',
      'from-orange-600 via-red-600 to-pink-600': 'from-orange-500 via-red-500 to-pink-500',
      'from-violet-600 via-purple-600 to-pink-600': 'from-violet-500 via-purple-500 to-pink-500',
      'from-gray-600 via-slate-600 to-zinc-600': 'from-gray-500 via-slate-500 to-zinc-500',
      'from-indigo-600 via-blue-600 to-cyan-600': 'from-indigo-500 via-blue-500 to-cyan-500',
      'from-emerald-600 via-teal-600 to-cyan-600': 'from-emerald-500 via-teal-500 to-cyan-500'
    };
    return colorMap[color] || color;
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced Glow Effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${getGradientClass(service.color)} opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75`}
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
      />
      
      {/* Main Card */}
      <motion.div
        className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)`,
          boxShadow: isHovered 
            ? `0 0 40px rgba(0, 255, 255, 0.3), 0 0 80px rgba(139, 92, 246, 0.2), 0 0 120px rgba(236, 73, 153, 0.1)`
            : '0 0 20px rgba(0, 255, 255, 0.1)'
        }}
      >
        {/* Quantum Holographic Border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Header Section */}
        <motion.div
          className="relative z-10"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          {/* Popular Badge */}
          {service.popular && (
            <motion.div
              className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Star className="w-3 h-3 inline mr-1" />
              POPULAR
            </motion.div>
          )}

          {/* Service Icon and Title */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <motion.div
                className={`text-4xl ${service.textColor}`}
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm">{service.tagline}</p>
              </div>
            </div>
            
            {/* Price */}
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{service.price}</div>
              <div className="text-gray-400 text-sm">{service.period}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-300">{service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">{service.rating}/5 ({service.reviews})</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">{service.growthRate}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">{service.trialDays} day trial</span>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-6 pt-6 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                    variants={featureVariants}
                    initial="initial"
                    animate="animate"
                    custom={index}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Market Information */}
              <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <h5 className="text-sm font-semibold text-white mb-2">Market Position</h5>
                <p className="text-xs text-gray-400 mb-2">{service.marketPosition}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Market Size: <span className="text-white">{service.marketSize}</span></span>
                  <span className="text-gray-400">ROI: <span className="text-green-400">{service.roi}</span></span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Contact Information</h5>
                <div className="space-y-1 text-xs text-gray-300">
                  <div>📱 {service.contactInfo.mobile}</div>
                  <div>✉️ {service.contactInfo.email}</div>
                  <div>📍 {service.contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div
          className="flex space-x-3 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </motion.a>
          
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </motion.button>
        </motion.div>

        {/* Floating Quantum Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard;