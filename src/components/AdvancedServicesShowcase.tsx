import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Rocket, 
  Target,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Users,
  Lock,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
  price: {
    monthly: number;
    yearly: number;
    oneTime?: number;
    currency: string;
  };
  rating: number;
  reviewCount: number;
  badge?: 'Popular' | 'New' | 'Featured' | 'Premium' | 'Enterprise';
  link: string;
  aiScore: number;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const ADVANCED_SERVICES: Service[] = [
  {
    id: 'quantum-ai-platform',
    title: 'Quantum AI Platform',
    description: 'Next-generation AI platform leveraging quantum computing principles for unprecedented processing power and accuracy.',
    category: 'AI Services',
    icon: <Brain className="w-8 h-8" />,
    features: [
      'Quantum-enhanced machine learning',
      'Real-time neural network optimization',
      'Advanced pattern recognition',
      'Predictive analytics engine',
      'Multi-modal AI processing'
    ],
    price: { monthly: 2500, yearly: 25000, currency: '$' },
    rating: 4.9,
    reviewCount: 127,
    badge: 'Premium',
    link: '/services/quantum-ai-platform',
    aiScore: 98,
    complexity: 'Expert'
  },
  {
    id: 'cyber-defense-suite',
    title: 'Cyber Defense Suite',
    description: 'Comprehensive cybersecurity solution with AI-powered threat detection and automated response systems.',
    category: 'Security',
    icon: <Shield className="w-8 h-8" />,
    features: [
      'AI threat intelligence',
      'Zero-day vulnerability detection',
      'Automated incident response',
      'Compliance monitoring',
      '24/7 security operations'
    ],
    price: { monthly: 1800, yearly: 18000, currency: '$' },
    rating: 4.8,
    reviewCount: 89,
    badge: 'Popular',
    link: '/services/cyber-defense-suite',
    aiScore: 95,
    complexity: 'Advanced'
  },
  {
    id: 'quantum-cloud-infrastructure',
    title: 'Quantum Cloud Infrastructure',
    description: 'Revolutionary cloud platform built on quantum computing principles for ultra-fast data processing.',
    category: 'Cloud',
    icon: <Cloud className="w-8 h-8" />,
    features: [
      'Quantum-accelerated computing',
      'Hybrid cloud architecture',
      'Auto-scaling infrastructure',
      'Global edge computing',
      'Quantum encryption'
    ],
    price: { monthly: 3200, yearly: 32000, currency: '$' },
    rating: 4.7,
    reviewCount: 156,
    badge: 'New',
    link: '/services/quantum-cloud-infrastructure',
    aiScore: 92,
    complexity: 'Expert'
  },
  {
    id: 'ai-powered-devops',
    title: 'AI-Powered DevOps',
    description: 'Intelligent DevOps automation platform that learns from your development patterns and optimizes workflows.',
    category: 'Automation',
    icon: <Rocket className="w-8 h-8" />,
    features: [
      'Intelligent CI/CD pipelines',
      'Automated testing optimization',
      'Performance monitoring',
      'Resource optimization',
      'Predictive maintenance'
    ],
    price: { monthly: 1200, yearly: 12000, currency: '$' },
    rating: 4.6,
    reviewCount: 203,
    link: '/services/ai-powered-devops',
    aiScore: 88,
    complexity: 'Intermediate'
  },
  {
    id: 'quantum-blockchain',
    title: 'Quantum Blockchain',
    description: 'Future-proof blockchain technology with quantum-resistant cryptography and AI-powered consensus mechanisms.',
    category: 'Blockchain',
    icon: <Network className="w-8 h-8" />,
    features: [
      'Quantum-resistant cryptography',
      'AI consensus algorithms',
      'Smart contract automation',
      'Cross-chain interoperability',
      'Scalable architecture'
    ],
    price: { monthly: 2800, yearly: 28000, currency: '$' },
    badge: 'Featured',
    rating: 4.9,
    reviewCount: 67,
    link: '/services/quantum-blockchain',
    aiScore: 96,
    complexity: 'Advanced'
  },
  {
    id: 'iot-intelligence-platform',
    title: 'IoT Intelligence Platform',
    description: 'Comprehensive IoT solution with AI-powered analytics, predictive maintenance, and automated optimization.',
    category: 'IoT',
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      'Real-time data analytics',
      'Predictive maintenance',
      'Device management',
      'Security monitoring',
      'Energy optimization'
    ],
    price: { monthly: 1500, yearly: 15000, currency: '$' },
    rating: 4.5,
    reviewCount: 134,
    link: '/services/iot-intelligence-platform',
    aiScore: 85,
    complexity: 'Intermediate'
  },
  {
    id: 'quantum-data-analytics',
    title: 'Quantum Data Analytics',
    description: 'Revolutionary data analytics platform using quantum algorithms for complex pattern recognition and insights.',
    category: 'Analytics',
    icon: <Database className="w-8 h-8" />,
    features: [
      'Quantum pattern recognition',
      'Real-time data processing',
      'Predictive modeling',
      'Visualization tools',
      'API integration'
    ],
    price: { monthly: 2200, yearly: 22000, currency: '$' },
    badge: 'Premium',
    rating: 4.8,
    reviewCount: 98,
    link: '/services/quantum-data-analytics',
    aiScore: 94,
    complexity: 'Advanced'
  },
  {
    id: 'ai-enterprise-suite',
    title: 'AI Enterprise Suite',
    description: 'Complete enterprise AI solution covering all aspects of business intelligence and automation.',
    category: 'AI Services',
    icon: <Cpu className="w-8 h-8" />,
    features: [
      'Business process automation',
      'Customer intelligence',
      'Supply chain optimization',
      'Financial analytics',
      'HR automation'
    ],
    price: { monthly: 4500, yearly: 45000, currency: '$' },
    badge: 'Enterprise',
    rating: 4.9,
    reviewCount: 245,
    link: '/services/ai-enterprise-suite',
    aiScore: 97,
    complexity: 'Expert'
  }
];

const CATEGORIES = ['All', 'AI Services', 'Security', 'Cloud', 'Automation', 'Blockchain', 'IoT', 'Analytics'];

export const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? ADVANCED_SERVICES 
    : ADVANCED_SERVICES.filter(service => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="holographic-text-strong">Advanced Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-neon'
                  : 'bg-glass-morphism text-zion-slate-light hover:bg-glass-morphism-strong hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative h-full p-6 glass-morphism rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                variants={cardVariants}
                onClick={() => setSelectedService(service)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Badge */}
                {service.badge && (
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      service.badge === 'Popular' ? 'bg-zion-green' :
                      service.badge === 'New' ? 'bg-zion-cyan' :
                      service.badge === 'Featured' ? 'bg-zion-purple' :
                      service.badge === 'Premium' ? 'bg-zion-blue' :
                      'bg-zion-slate'
                    }`}
                  >
                    {service.badge}
                  </Badge>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-300">
                  <div className="text-zion-cyan group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* AI Score */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse" />
                    <span className="text-sm text-zion-cyan font-semibold">
                      AI Score: {service.aiScore}%
                    </span>
                  </div>

                  {/* Complexity */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Target className="w-4 h-4 text-zion-purple" />
                    <span className="text-sm text-zion-slate-light">
                      {service.complexity}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      ({service.reviewCount})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    </div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-xl group-hover:shadow-neon transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(service.link, '_blank');
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-105 hover:shadow-neon-strong transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-morphism-strong rounded-2xl p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zion-slate-light/20 hover:bg-zion-slate-light/40 text-white flex items-center justify-center transition-colors duration-300"
              >
                ×
              </button>

              {/* Service Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                      <div className="text-zion-cyan text-3xl">
                        {selectedService.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedService.title}
                      </h2>
                      <p className="text-zion-slate-light">
                        {selectedService.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-lg mb-6">
                    {selectedService.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-zion-cyan rounded-full" />
                      <span className="text-white font-semibold">AI Score: {selectedService.aiScore}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-zion-purple" />
                      <span className="text-zion-slate-light">Complexity: {selectedService.complexity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-zion-slate-light">
                        {selectedService.rating}/5 ({selectedService.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="glass-morphism rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zion-slate-light">Monthly:</span>
                        <span className="text-2xl font-bold text-white">
                          {selectedService.price.currency}{selectedService.price.monthly.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zion-slate-light">Yearly:</span>
                        <span className="text-2xl font-bold text-white">
                          {selectedService.price.currency}{selectedService.price.yearly.toLocaleString()}
                        </span>
                      </div>
                      {selectedService.price.oneTime && (
                        <div className="flex justify-between items-center">
                          <span className="text-zion-slate-light">One-time:</span>
                          <span className="text-2xl font-bold text-white">
                            {selectedService.price.currency}{selectedService.price.oneTime.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="glass-morphism rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-zion-green" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-bold rounded-xl"
                  onClick={() => window.open(selectedService.link, '_blank')}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl"
                >
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};