import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Zap, Shield, TrendingUp, Users, Award, Check, ArrowRight, Sparkles, Atom, Brain, Eye, Globe, Cpu, Database, Cloud, Bot, Lock, BarChart3, Rocket, Target, Clock, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, Play, Mail, Phone, MapPin, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck } from 'lucide-react';

interface EnhancedFuturisticCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  price?: string;
  period?: string;
  link?: string;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  color?: string;
  textColor?: string;
  gradient?: string;
  popular?: boolean;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  className?: string;
  children?: React.ReactNode;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  title,
  description,
  icon,
  features = [],
  price,
  period,
  link,
  variant = 'default',
  color = 'from-blue-500 to-purple-600',
  textColor = 'text-blue-400',
  gradient = 'from-blue-400 to-purple-500',
  popular = false,
  contactInfo,
  className = '',
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
          background: 'bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20',
          overlay: 'bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10'
        };
      case 'cyberpunk':
        return {
          border: 'border-pink-500/30',
          glow: 'shadow-[0_0_30px_rgba(255,0,102,0.3)]',
          background: 'bg-gradient-to-br from-pink-900/20 via-red-900/20 to-orange-900/20',
          overlay: 'bg-gradient-to-br from-pink-500/10 via-red-500/10 to-orange-500/10'
        };
      case 'neural':
        return {
          border: 'border-green-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,136,0.3)]',
          background: 'bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20',
          overlay: 'bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10'
        };
      case 'holographic':
        return {
          border: 'border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(255,0,255,0.3)]',
          background: 'bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20',
          overlay: 'bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10'
        };
      case 'quantum-holographic':
        return {
          border: 'border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.4)]',
          background: 'bg-gradient-to-br from-cyan-900/25 via-blue-900/25 to-purple-900/25',
          overlay: 'bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-purple-500/15'
        };
      case 'quantum-advanced':
        return {
          border: 'border-cyan-500/40',
          glow: 'shadow-[0_0_40px_rgba(0,255,255,0.5)]',
          background: 'bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30',
          overlay: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20'
        };
      case 'holographic-advanced':
        return {
          border: 'border-purple-500/40',
          glow: 'shadow-[0_0_40px_rgba(255,0,255,0.5)]',
          background: 'bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-cyan-900/30',
          overlay: 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20'
        };
      case 'neural-quantum':
        return {
          border: 'border-green-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,136,0.4)]',
          background: 'bg-gradient-to-br from-green-900/25 via-emerald-900/25 to-cyan-900/25',
          overlay: 'bg-gradient-to-br from-green-500/15 via-emerald-500/15 to-cyan-500/15'
        };
      case 'quantum-cyberpunk':
        return {
          border: 'border-cyan-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.4)]',
          background: 'bg-gradient-to-br from-cyan-900/25 via-pink-900/25 to-red-900/25',
          overlay: 'bg-gradient-to-br from-cyan-500/15 via-pink-500/15 to-red-500/15'
        };
      case 'holographic-neural':
        return {
          border: 'border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(255,0,255,0.4)]',
          background: 'bg-gradient-to-br from-purple-900/25 via-green-900/25 to-emerald-900/25',
          overlay: 'bg-gradient-to-br from-purple-500/15 via-green-500/15 to-emerald-500/15'
        };
      case 'quantum-holographic-advanced':
        return {
          border: 'border-cyan-500/50',
          glow: 'shadow-[0_0_50px_rgba(0,255,255,0.6)]',
          background: 'bg-gradient-to-br from-cyan-900/35 via-blue-900/35 to-purple-900/35',
          overlay: 'bg-gradient-to-br from-cyan-500/25 via-blue-500/25 to-purple-500/25'
        };
      case 'quantum-matrix':
        return {
          border: 'border-cyan-500/40',
          glow: 'shadow-[0_0_40px_rgba(0,255,255,0.5)]',
          background: 'bg-gradient-to-br from-cyan-900/30 via-green-900/30 to-emerald-900/30',
          overlay: 'bg-gradient-to-br from-cyan-500/20 via-green-500/20 to-emerald-500/20'
        };
      case 'neural-cyberpunk':
        return {
          border: 'border-green-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,136,0.4)]',
          background: 'bg-gradient-to-br from-green-900/25 via-pink-900/25 to-red-900/25',
          overlay: 'bg-gradient-to-br from-green-500/15 via-pink-500/15 to-red-500/15'
        };
      case 'holographic-quantum':
        return {
          border: 'border-purple-500/30',
          glow: 'shadow-[0_0_30px_rgba(255,0,255,0.4)]',
          background: 'bg-gradient-to-br from-purple-900/25 via-cyan-900/25 to-blue-900/25',
          overlay: 'bg-gradient-to-br from-purple-500/15 via-cyan-500/15 to-blue-500/15'
        };
      case 'quantum-neural-advanced':
        return {
          border: 'border-cyan-500/40',
          glow: 'shadow-[0_0_40px_rgba(0,255,255,0.5)]',
          background: 'bg-gradient-to-br from-cyan-900/30 via-green-900/30 to-emerald-900/30',
          overlay: 'bg-gradient-to-br from-cyan-500/20 via-green-500/20 to-emerald-500/20'
        };
      case 'cyberpunk-holographic':
        return {
          border: 'border-pink-500/30',
          glow: 'shadow-[0_0_30px_rgba(255,0,102,0.4)]',
          background: 'bg-gradient-to-br from-pink-900/25 via-purple-900/25 to-cyan-900/25',
          overlay: 'bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-cyan-500/15'
        };
      case 'quantum-space':
        return {
          border: 'border-indigo-500/30',
          glow: 'shadow-[0_0_30px_rgba(99,102,241,0.4)]',
          background: 'bg-gradient-to-br from-indigo-900/25 via-purple-900/25 to-blue-900/25',
          overlay: 'bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-blue-500/15'
        };
      case 'ai-futuristic':
        return {
          border: 'border-blue-500/30',
          glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]',
          background: 'bg-gradient-to-br from-blue-900/25 via-indigo-900/25 to-purple-900/25',
          overlay: 'bg-gradient-to-br from-blue-500/15 via-indigo-500/15 to-purple-500/15'
        };
      case 'quantum-entanglement':
        return {
          border: 'border-cyan-500/40',
          glow: 'shadow-[0_0_40px_rgba(0,255,255,0.5)]',
          background: 'bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-indigo-900/30',
          overlay: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20'
        };
      case 'holographic-matrix':
        return {
          border: 'border-purple-500/40',
          glow: 'shadow-[0_0_40px_rgba(255,0,255,0.5)]',
          background: 'bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-cyan-900/30',
          overlay: 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20'
        };
      case 'neural-quantum-cyberpunk':
        return {
          border: 'border-green-500/30',
          glow: 'shadow-[0_0_30px_rgba(0,255,136,0.4)]',
          background: 'bg-gradient-to-br from-green-900/25 via-cyan-900/25 to-pink-900/25',
          overlay: 'bg-gradient-to-br from-green-500/15 via-cyan-500/15 to-pink-500/15'
        };
      default:
        return {
          border: 'border-blue-500/30',
          glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
          background: 'bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20',
          overlay: 'bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Holographic Border Effect */}
      <div className={`absolute inset-0 rounded-2xl border ${variantStyles.border} ${variantStyles.glow} transition-all duration-500 group-hover:scale-105`} />
      
      {/* Main Card */}
      <motion.div
        className={`relative rounded-2xl p-6 ${variantStyles.background} backdrop-blur-xl border border-white/10 overflow-hidden`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Overlay */}
        <motion.div
          className={`absolute inset-0 ${variantStyles.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{
            background: isHovered 
              ? `radial-gradient(circle at ${isHovered ? '50% 50%' : '0% 0%'}, rgba(255,255,255,0.1) 0%, transparent 70%)`
              : 'transparent'
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              {icon && (
                <motion.div
                  className="text-3xl"
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {icon}
                </motion.div>
              )}
              <div>
                <motion.h3 
                  className={`text-xl font-bold ${textColor} mb-1`}
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                >
                  {title}
                </motion.h3>
                {popular && (
                  <motion.div
                    className="inline-flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Star className="w-3 h-3" />
                    <span>Popular</span>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Price Display */}
            {price && (
              <motion.div
                className="text-right"
                animate={{ scale: isHovered ? 1.1 : 1 }}
              >
                <div className={`text-2xl font-bold ${textColor}`}>
                  {price}
                </div>
                {period && (
                  <div className="text-sm text-gray-400">
                    {period}
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Description */}
          <motion.p 
            className="text-gray-300 mb-4 leading-relaxed"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {description}
          </motion.p>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-4">
              <div className="grid grid-cols-1 gap-2">
                {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              {features.length > 3 && (
                <motion.button
                  className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                >
                  {isExpanded ? 'Show Less' : `Show ${features.length - 3} More`}
                </motion.button>
              )}
            </div>
          )}

          {/* Contact Information */}
          {contactInfo && (
            <motion.div
              className="mt-4 p-3 bg-black/20 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
              <div className="space-y-1 text-xs text-gray-300">
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
                  <span className="truncate">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3" />
                  <span>{contactInfo.website}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Button */}
          {link && (
            <motion.div className="mt-4">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r ${color} text-white font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          )}

          {/* Children Content */}
          {children && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Holographic Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className={`w-full h-full bg-gradient-to-br ${gradient} opacity-20 transform rotate-45 translate-x-8 -translate-y-8`} />
        </div>
      </motion.div>

      {/* Quantum Energy Field */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? `0 0 40px rgba(0,255,255,0.3), 0 0 80px rgba(0,255,255,0.1)`
            : `0 0 20px rgba(0,255,255,0.1)`
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default EnhancedFuturisticCard;