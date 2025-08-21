import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, Check, Zap, Shield, TrendingUp, Clock, DollarSign, Users, Globe, Cpu, Brain, Rocket, FlaskConical, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Cloud, Database, Lock, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, Phone, MapPin, Sparkles, Atom, Eye, Trophy, Dna } from 'lucide-react';

interface EnhancedFuturisticCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  price?: string;
  period?: string;
  features?: string[];
  popular?: boolean;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  color?: string;
  textColor?: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  stats?: Array<{
    value: string;
    label: string;
    icon: React.ReactNode;
    color: string;
  }>;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  title,
  description,
  icon,
  price,
  period,
  features = [],
  popular = false,
  variant = 'default',
  color = 'from-indigo-500 to-purple-600',
  textColor = 'text-indigo-400',
  link,
  onClick,
  className = '',
  children,
  stats = [],
  contactInfo
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Enhanced motion values for advanced interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  const scale = useSpring(isHovered ? 1.05 : 1, { stiffness: 300, damping: 20 });
  const glowIntensity = useSpring(isHovered ? 1 : 0.3, { stiffness: 200, damping: 20 });

  // Quantum particle effect
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number, life: number}>>([]);

  useEffect(() => {
    if (isHovered && variant.includes('quantum')) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 100
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isHovered, variant]);

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

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(139, 92, 246, 0.1))',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          shadow: '0 0 30px rgba(0, 255, 255, 0.2)'
        };
      case 'holographic':
        return {
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 73, 153, 0.1))',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          shadow: '0 0 30px rgba(139, 92, 246, 0.2)'
        };
      case 'neural':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          shadow: '0 0 30px rgba(16, 185, 129, 0.2)'
        };
      case 'cyberpunk':
        return {
          background: 'linear-gradient(135deg, rgba(236, 73, 153, 0.1), rgba(245, 158, 11, 0.1))',
          border: '1px solid rgba(236, 73, 153, 0.3)',
          shadow: '0 0 30px rgba(236, 73, 153, 0.2)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          shadow: '0 0 30px rgba(59, 130, 246, 0.2)'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ${className}`}
      style={{
        background: variantStyles.background,
        border: variantStyles.border,
        boxShadow: variantStyles.shadow,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        rotateX: isHovered ? rotateX.get() : 0,
        rotateY: isHovered ? rotateY.get() : 0,
        scale: scale.get()
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quantum particles */}
        {variant.includes('quantum') && (
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
                animate={{
                  x: [0, particle.vx * 50],
                  y: [0, particle.vy * 50],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        {/* Holographic grid */}
        {variant.includes('holographic') && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-purple-400/10 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        {/* Neural network connections */}
        {variant.includes('neural') && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400/30 rounded-full"
                style={{
                  left: `${(i * 12.5) % 100}%`,
                  top: `${(i * 10) % 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}

        {/* Cyberpunk glitch effect */}
        {variant.includes('cyberpunk') && (
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent"
              animate={{
                opacity: [0, 0.2, 0],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            />
          </div>
        )}
      </div>

      {/* Popular badge */}
      {popular && (
        <motion.div
          className="absolute top-4 right-4 z-20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            POPULAR
          </div>
        </motion.div>
      )}

      {/* Card content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <motion.div
                className={`text-3xl ${textColor}`}
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {icon}
              </motion.div>
            )}
            <div>
              <motion.h3
                className="text-xl font-bold text-white mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h3>
              {price && (
                <motion.div
                  className="flex items-baseline gap-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-2xl font-bold text-white">{price}</span>
                  {period && <span className="text-gray-400">{period}</span>}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Features */}
        {features.length > 0 && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats */}
        {stats.length > 0 && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 rounded-lg bg-black/20 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Info */}
        {contactInfo && (
          <motion.div
            className="mb-6 p-4 rounded-lg bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              Contact Information
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action button */}
        {(link || onClick) && (
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              className={`px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${color} hover:shadow-lg transition-all duration-300 flex items-center gap-2 group/btn`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link ? 'Learn More' : 'Get Started'}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        )}

        {/* Children content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Enhanced glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 255, 0.1) 0%, transparent 50%)`,
          opacity: glowIntensity,
        }}
      />
    </motion.div>
  );
};

export default EnhancedFuturisticCard;