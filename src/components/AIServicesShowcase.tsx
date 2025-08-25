import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp, 
  Star,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AIService {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  users: number;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  status: 'active' | 'beta' | 'new';
}

const aiServices: AIService[] = [
  {
    id: 'ai-chat',
    name: 'ZionGPT Pro',
    description: 'Advanced conversational AI with enterprise-grade security and customization',
    category: 'Conversational AI',
    rating: 4.9,
    users: 15420,
    price: 'From $99/month',
    features: ['Multi-language support', 'Custom training', 'API access', 'Analytics'],
    icon: Brain,
    color: 'from-purple-500 to-purple-700',
    status: 'active'
  },
  {
    id: 'ai-vision',
    name: 'VisionAI Suite',
    description: 'Computer vision solutions for image recognition, analysis, and processing',
    category: 'Computer Vision',
    rating: 4.8,
    users: 8920,
    price: 'From $149/month',
    features: ['Real-time processing', 'Custom models', 'Batch processing', 'SDK'],
    icon: Cpu,
    color: 'from-blue-500 to-blue-700',
    status: 'beta'
  },
  {
    id: 'ai-data',
    name: 'DataMind Analytics',
    description: 'Intelligent data analysis and predictive modeling platform',
    category: 'Data Analytics',
    rating: 4.7,
    users: 12340,
    price: 'From $199/month',
    features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'API'],
    icon: Database,
    color: 'from-green-500 to-green-700',
    status: 'active'
  },
  {
    id: 'ai-global',
    name: 'GlobalAI Network',
    description: 'Distributed AI computing network for global scale operations',
    category: 'Infrastructure',
    rating: 4.6,
    users: 5670,
    price: 'From $299/month',
    features: ['Global deployment', 'Auto-scaling', 'Load balancing', 'Monitoring'],
    icon: Globe,
    color: 'from-orange-500 to-orange-700',
    status: 'new'
  }
];

const categories = ['All', 'Conversational AI', 'Computer Vision', 'Data Analytics', 'Infrastructure'];

export function AIServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<AIService | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { color: 'bg-green-500', text: 'Active' },
      beta: { color: 'bg-yellow-500', text: 'Beta' },
      new: { color: 'bg-blue-500', text: 'New' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span className={`${config.color} text-white text-xs px-2 py-1 rounded-full font-medium`}>
        {config.text}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Latest AI Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Future of
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge AI solutions designed to transform your business operations and drive innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-6 right-6">
                    {getStatusBadge(service.status)}
                  </div>

                  {/* Service icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Service content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="text-sm text-zion-slate-light mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-zion-slate-light border border-white/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats and price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{service.rating}</span>
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          {service.users.toLocaleString()} users
                        </div>
                      </div>
                      <div className="text-purple-300 font-semibold">
                        {service.price}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI solutions to drive growth and innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Schedule Demo
                <Play className="w-5 h-5" />
              </Link>
            </div>
          </div>
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
              className="bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} p-4`}>
                    <selectedService.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.name}</h3>
                    <p className="text-zion-slate-light">{selectedService.category}</p>
                  </div>
                </div>
                {getStatusBadge(selectedService.status)}
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {selectedService.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zion-slate-light">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-purple-300">{selectedService.price}</div>
                <Link
                  to={`/services/${selectedService.id}`}
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}