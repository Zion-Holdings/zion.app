import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Brain, Rocket, Dna, DollarSign, Shield, Globe, 
  Smartphone, Truck, GamepadIcon, TrendingUp, Users, 
  Scale, Search, Phone, Target, Video, Monitor,
  ArrowRight, Star, Zap, Sparkles, Eye, Heart
} from 'lucide-react';
import { innovativeMicroSaasServices } from '../../data/innovative-micro-saas-services';
import { emergingTechServices } from '../../data/emerging-tech-services';

interface ServiceCardProps {
  service: any;
  index: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.1 + 0.3
      }
    },
    hover: {
      scale: 1.1,
      opacity: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const getIconComponent = (icon: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      '🧠': Brain,
      '🚀': Rocket,
      '🧬': Dna,
      '💰': DollarSign,
      '🔒': Shield,
      '🌐': Globe,
      '📱': Smartphone,
      '🚛': Truck,
      '🌌': GamepadIcon,
      '🤖': TrendingUp,
      '👥': Users,
      '⚖️': Scale,
      '🔍': Search,
      '📞': Phone,
      '🎯': Target,
      '🎬': Video,
      '🏭': Monitor
    };
    
    return iconMap[icon] || Sparkles;
  };

  const IconComponent = getIconComponent(service.icon);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow Effect */}
      <motion.div
        variants={glowVariants}
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}
      />
      
      {/* Main Card */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`text-4xl ${service.textColor}`}>
              {service.icon}
            </div>
            {service.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
              >
                <Star className="w-3 h-3" />
                <span>POPULAR</span>
              </motion.div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Price */}
        <div className="relative z-10 mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-sm text-gray-400">Free trial: {service.trialDays} days</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-sm text-gray-400">Setup: {service.setupTime}</span>
          </div>
        </div>

        {/* Features */}
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.6 + idx * 0.1 }}
                className="flex items-center space-x-2 text-sm text-gray-300"
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market Data */}
        <div className="relative z-10 mb-6">
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-3 border border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Market Size:</span>
              <span className="text-green-400 font-semibold">{service.marketSize}</span>
            </div>
            <div className="flex items-center justify-between text-xs mt-1">
              <span className="text-gray-400">Growth:</span>
              <span className="text-blue-400 font-semibold">{service.growthRate}</span>
            </div>
          </div>
        </div>

        {/* ROI & Competitors */}
        <div className="relative z-10 mb-6">
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-3 border border-purple-500/20">
              <p className="text-xs text-purple-300 font-medium">ROI Promise</p>
              <p className="text-sm text-white font-semibold">{service.roi}</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-3 border border-orange-500/20">
              <p className="text-xs text-orange-300 font-medium">Competes With</p>
              <p className="text-sm text-white font-semibold">{service.competitors}</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="relative z-10 mb-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-3 border border-cyan-500/20">
            <p className="text-xs text-cyan-300 font-medium mb-2">Contact Zion Tech Group</p>
            <div className="space-y-1 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>{service.contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-3 h-3 text-cyan-400" />
                <span>{service.contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10"
        >
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 hover:border-white/30 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-4 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60"
        />
      </div>
    </motion.div>
  );
};

const InnovativeServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const allServices = [...innovativeMicroSaasServices, ...emergingTechServices];
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'quantum', name: 'Quantum Computing', count: allServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'ai', name: 'AI & Machine Learning', count: allServices.filter(s => s.name.toLowerCase().includes('ai') || s.name.toLowerCase().includes('artificial')).length },
    { id: 'space', name: 'Space Technology', count: allServices.filter(s => s.name.toLowerCase().includes('space')).length },
    { id: 'biotech', name: 'Biotech & Healthcare', count: allServices.filter(s => s.name.toLowerCase().includes('biotech') || s.name.toLowerCase().includes('health')).length },
    { id: 'autonomous', name: 'Autonomous Systems', count: allServices.filter(s => s.name.toLowerCase().includes('autonomous')).length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        const serviceName = service.name.toLowerCase();
        const categoryName = categories.find(cat => cat.id === activeCategory)?.name.toLowerCase() || '';
        return serviceName.includes(categoryName.replace(' & ', ' ').replace(' systems', '').split(' ')[0]);
      });

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,73,153,0.1),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Innovative Micro SAAS
            </h1>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the future of technology with our cutting-edge micro SAAS services. 
            From quantum computing to autonomous systems, we're revolutionizing industries with AI-powered solutions.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">200+ Services</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">99.99% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-400">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our innovative micro SAAS solutions. 
              Start your free trial today and experience the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://ziontechgroup.com/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
              </a>
              
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovativeServicesShowcase;