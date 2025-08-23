import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, ExternalLink, Star, Zap, Shield, Users, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight as ChevronRightIcon, LinkIcon, Building2 } from 'lucide-react';

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
  };
  className?: string;
  onClick?: () => void;
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  service,
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for advanced interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Holographic effect state
  const [holographicOffset, setHolographicOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHolographicOffset(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Content Creation': <MessageSquare className="w-5 h-5" />,
      'AI & Customer Service': <Users className="w-5 h-5" />,
      'AI & Sales Automation': <TrendingUp className="w-5 h-5" />,
      'AI & Data Analytics': <ChartBar className="w-5 h-5" />,
      'AI & Legal Tech': <Shield className="w-5 h-5" />,
      'AI & HR Tech': <Users className="w-5 h-5" />,
      'AI & Market Research': <Search className="w-5 h-5" />,
      'AI & Video Production': <Play className="w-5 h-5" />,
      'AI & SEO': <TrendingUp className="w-5 h-5" />,
      'AI & Blockchain': <LinkIcon className="w-5 h-5" />,
      'AI & IoT': <Cpu className="w-5 h-5" />,
      'Healthcare & Biotechnology': <FlaskConical className="w-5 h-5" />,
      'Manufacturing & Industry 4.0': <Factory className="w-5 h-5" />,
      'Cybersecurity & Privacy': <Shield className="w-5 h-5" />,
      'Metaverse & Virtual Reality': <Globe2 className="w-5 h-5" />,
      'Fintech & Trading': <DollarSign className="w-5 h-5" />,
      'Blockchain & Supply Chain': <LinkIcon className="w-5 h-5" />,
      'Space Technology': <Rocket className="w-5 h-5" />,
      'Quantum Computing & AI': <Brain className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const getVariantStyles = (variant: string) => {
    const variants: { [key: string]: { bg: string; border: string; glow: string } } = {
      'quantum-entanglement': {
        bg: 'from-cyan-900/20 via-blue-900/20 to-cyan-900/20',
        border: 'border-cyan-500/30',
        glow: 'shadow-cyan-500/20'
      },
      'cyberpunk-holographic': {
        bg: 'from-purple-900/20 via-pink-900/20 to-purple-900/20',
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20'
      },
      'neural-quantum': {
        bg: 'from-green-900/20 via-emerald-900/20 to-green-900/20',
        border: 'border-green-500/30',
        glow: 'shadow-green-500/20'
      },
      'holographic-matrix': {
        bg: 'from-indigo-900/20 via-blue-900/20 to-indigo-900/20',
        border: 'border-indigo-500/30',
        glow: 'shadow-indigo-500/20'
      },
      'quantum-matrix': {
        bg: 'from-yellow-900/20 via-orange-900/20 to-yellow-900/20',
        border: 'border-yellow-500/30',
        glow: 'shadow-yellow-500/20'
      },
      'neural-cyberpunk': {
        bg: 'from-red-900/20 via-pink-900/20 to-red-900/20',
        border: 'border-red-500/30',
        glow: 'shadow-red-500/20'
      },
      'quantum-space': {
        bg: 'from-gray-900/20 via-slate-900/20 to-gray-900/20',
        border: 'border-gray-500/30',
        glow: 'shadow-gray-500/20'
      },
      'ai-futuristic': {
        bg: 'from-pink-900/20 via-rose-900/20 to-pink-900/20',
        border: 'border-pink-500/30',
        glow: 'shadow-pink-500/20'
      },
      'quantum-advanced': {
        bg: 'from-emerald-900/20 via-teal-900/20 to-emerald-900/20',
        border: 'border-emerald-500/30',
        glow: 'shadow-emerald-500/20'
      },
      'quantum-holographic-advanced': {
        bg: 'from-violet-900/20 via-purple-900/20 to-violet-900/20',
        border: 'border-violet-500/30',
        glow: 'shadow-violet-500/20'
      },
      'quantum-cyberpunk': {
        bg: 'from-cyan-900/20 via-blue-900/20 to-cyan-900/20',
        border: 'border-cyan-500/30',
        glow: 'shadow-cyan-500/20'
      },
      'holographic-neural': {
        bg: 'from-purple-900/20 via-indigo-900/20 to-purple-900/20',
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20'
      },
      'neural-quantum-cyberpunk': {
        bg: 'from-emerald-900/20 via-cyan-900/20 to-emerald-900/20',
        border: 'border-emerald-500/30',
        glow: 'shadow-emerald-500/20'
      }
    };
    return variants[variant] || variants['quantum-entanglement'];
  };

  const variantStyles = getVariantStyles(service.variant);

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* Holographic Background Layer */}
      <div className="absolute inset-0 rounded-2xl opacity-20">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `conic-gradient(from ${holographicOffset}deg, transparent, rgba(0, 255, 255, 0.1), transparent, rgba(139, 92, 246, 0.1), transparent)`,
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Main Card */}
      <motion.div
        className={`relative rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 ${variantStyles.border} ${variantStyles.glow}`}
        style={{
          background: `linear-gradient(135deg, ${variantStyles.bg})`,
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        animate={{
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0, 255, 255, 0.25), 0 0 0 1px rgba(0, 255, 255, 0.1)` 
            : `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 255, 255, 0.05)`
        }}
      >
        {/* Quantum Energy Field */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"
            animate={{
              x: isHovered ? [0, 100, 0] : 0,
              opacity: isHovered ? [0.1, 0.3, 0.1] : 0.1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Header Section */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`text-3xl ${service.textColor}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.tagline}</p>
              </div>
            </div>
            
            {/* Popular Badge */}
            {service.popular && (
              <motion.div
                className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-xs font-medium">Popular</span>
              </motion.div>
            )}
          </div>

          {/* Category and Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-gray-400">
              {getCategoryIcon(service.category)}
              <span className="text-sm">{service.category}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-yellow-400 text-sm font-medium">{service.rating}</span>
              <span className="text-gray-400 text-sm">({service.reviews})</span>
            </div>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400 ml-1">{service.period}</span>
            </div>
            <motion.button
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 mb-6">
          <p className="text-gray-300 leading-relaxed">{service.description}</p>
        </div>

        {/* Key Features */}
        <div className="relative z-10 mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Key Features</span>
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-gray-300 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market Info */}
        <div className="relative z-10 mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-3 bg-black/20 rounded-lg border border-gray-700/30">
              <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
              <div className="text-gray-400">Market Size</div>
            </div>
            <div className="text-center p-3 bg-black/20 rounded-lg border border-gray-700/30">
              <div className="text-purple-400 font-semibold">{service.growthRate}</div>
              <div className="text-gray-400">Growth Rate</div>
            </div>
          </div>
        </div>

        {/* Expandable Details */}
        <motion.div
          className="relative z-10"
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '0' }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 pt-4 border-t border-gray-700/30"
            >
              {/* Technology Stack */}
              <div>
                <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Technology Stack</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {service.technology.slice(0, 6).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ROI Information */}
              <div>
                <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>ROI & Benefits</span>
                </h5>
                <p className="text-gray-300 text-sm">{service.roi}</p>
              </div>

              {/* Contact Information */}
              <div className="bg-black/20 rounded-lg p-4 border border-gray-700/30">
                <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>Contact Information</span>
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{service.contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>{service.contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Expand/Collapse Button */}
        <motion.button
          className="relative z-10 w-full mt-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center justify-center space-x-2"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'Show More Details'}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>

        {/* Holographic Border Effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <motion.div
            className="absolute inset-0 rounded-2xl border border-cyan-500/20"
            animate={{
              borderColor: [
                'rgba(0, 255, 255, 0.2)',
                'rgba(139, 92, 246, 0.2)',
                'rgba(0, 255, 255, 0.2)'
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Quantum Particles Overlay */}
        {isHovered && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;