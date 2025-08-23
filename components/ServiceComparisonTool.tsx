import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Check, X, Star, TrendingUp, Zap, Shield, Brain, Atom, Target } from 'lucide-react';

interface ServiceFeature {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'advanced' | 'enterprise';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  category: 'AI' | 'Quantum' | 'Business' | 'Space';
  rating: number;
  popularity: number;
  icon: React.ReactNode;
  color: string;
}

interface ServiceComparisonToolProps {
  className?: string;
}

const ServiceComparisonTool: React.FC<ServiceComparisonToolProps> = ({ className = "" }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'features' | 'pricing' | 'performance'>('features');

  const services: Service[] = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness Evolution',
      description: 'Revolutionary AI consciousness platform for advanced cognitive computing',
      price: '$2,499',
      period: 'month',
      features: ['Consciousness Evolution', 'Emotional Intelligence', 'Autonomous Learning', 'Cognitive Enhancement', 'Ethical AI Framework'],
      category: 'AI',
      rating: 4.9,
      popularity: 95,
      icon: <Brain className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'quantum-neural',
      name: 'Quantum Neural Ecosystem',
      description: 'Breakthrough quantum neural network platform for complex problem solving',
      price: '$3,999',
      period: 'month',
      features: ['Quantum Algorithms', 'Neural Networks', 'Quantum Security', 'Superposition Computing', 'Entanglement Processing'],
      category: 'Quantum',
      rating: 4.8,
      popularity: 88,
      icon: <Atom className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'autonomous-business',
      name: 'Autonomous Business Intelligence',
      description: 'Self-learning business intelligence platform with predictive analytics',
      price: '$1,799',
      period: 'month',
      features: ['Predictive Analytics', 'Business Automation', 'Real-time Insights', 'Decision Support', 'Performance Optimization'],
      category: 'Business',
      rating: 4.7,
      popularity: 92,
      icon: <Target className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'space-intelligence',
      name: 'Space Resource Intelligence',
      description: 'Advanced space mining and resource optimization platform',
      price: '$4,999',
      period: 'month',
      features: ['Resource Mapping', 'Mining Optimization', 'Orbital Analytics', 'Risk Assessment', 'Sustainability Metrics'],
      category: 'Space',
      rating: 4.6,
      popularity: 78,
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const allFeatures = [
    'Consciousness Evolution', 'Emotional Intelligence', 'Autonomous Learning', 'Cognitive Enhancement',
    'Ethical AI Framework', 'Quantum Algorithms', 'Neural Networks', 'Quantum Security',
    'Superposition Computing', 'Entanglement Processing', 'Predictive Analytics', 'Business Automation',
    'Real-time Insights', 'Decision Support', 'Performance Optimization', 'Resource Mapping',
    'Mining Optimization', 'Orbital Analytics', 'Risk Assessment', 'Sustainability Metrics'
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : prev.length < 3 
          ? [...prev, serviceId]
          : prev
    );
  };

  const getSelectedServices = () => services.filter(service => selectedServices.includes(service.id));

  const renderFeatureComparison = () => (
    <div className="space-y-4">
      {allFeatures.map((feature) => (
        <div key={feature} className="bg-white/5 border border-white/10 rounded-xl p-4">
          <h4 className="text-white font-medium mb-3">{feature}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {getSelectedServices().map((service) => (
              <div key={service.id} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color}`}></div>
                <span className="text-sm text-gray-300">
                  {service.features.includes(feature) ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Included
                    </span>
                  ) : (
                    <span className="text-red-400 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      Not Available
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderPricingComparison = () => (
    <div className="space-y-6">
      {getSelectedServices().map((service) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3`}>
              {service.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">{service.name}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{service.price}</div>
              <div className="text-gray-400 text-sm">per {service.period}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium">{service.rating}</span>
              </div>
              <div className="text-gray-400 text-xs">Rating</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-white font-medium">{service.popularity}%</span>
              </div>
              <div className="text-gray-400 text-xs">Popularity</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-white font-medium">{service.features.length}</span>
              </div>
              <div className="text-gray-400 text-xs">Features</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderPerformanceComparison = () => (
    <div className="space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          Performance Metrics Comparison
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rating Comparison */}
          <div>
            <h4 className="text-white font-medium mb-3">Customer Rating</h4>
            <div className="space-y-3">
              {getSelectedServices().map((service) => (
                <div key={service.id} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.color}`}></div>
                  <span className="text-gray-300 text-sm flex-1">{service.name}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-medium">{service.rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popularity Comparison */}
          <div>
            <h4 className="text-white font-medium mb-3">Market Popularity</h4>
            <div className="space-y-3">
              {getSelectedServices().map((service) => (
                <div key={service.id} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.color}`}></div>
                  <span className="text-gray-300 text-sm flex-1">{service.name}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-medium">{service.popularity}%</span>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Count Comparison */}
        <div className="mt-6">
          <h4 className="text-white font-medium mb-3">Feature Count</h4>
          <div className="space-y-3">
            {getSelectedServices().map((service) => (
              <div key={service.id} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.color}`}></div>
                <span className="text-gray-300 text-sm flex-1">{service.name}</span>
                <div className="flex items-center gap-1">
                  <span className="text-white font-medium">{service.features.length}</span>
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`bg-gray-900/50 backdrop-blur-xl border border-white/20 rounded-2xl p-6 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Service Comparison Tool
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Compare our cutting-edge AI, quantum computing, and business solutions to find the perfect fit for your needs.
          Select up to 3 services to compare their features, pricing, and performance.
        </p>
      </div>

      {/* Service Selection */}
      <div className="mb-8">
        <h3 className="text-white font-semibold text-lg mb-4">Select Services to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => toggleService(service.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedServices.includes(service.id)
                  ? `border-cyan-500 bg-gradient-to-r ${service.color}/20`
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.color} p-2`}>
                  {service.icon}
                </div>
                <div className="text-left">
                  <div className="text-white font-medium text-sm">{service.name}</div>
                  <div className="text-gray-400 text-xs">{service.category}</div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-lg">{service.price}</div>
                <div className="text-gray-400 text-xs">per {service.period}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Comparison View */}
      {selectedServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className="bg-white/10 border border-white/20 rounded-xl p-1">
              {(['features', 'pricing', 'performance'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    viewMode === mode
                      ? 'bg-cyan-500 text-black'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {mode === 'features' && 'Feature Comparison'}
                  {mode === 'pricing' && 'Pricing Analysis'}
                  {mode === 'performance' && 'Performance Metrics'}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {viewMode === 'features' && renderFeatureComparison()}
              {viewMode === 'pricing' && renderPricingComparison()}
              {viewMode === 'performance' && renderPerformanceComparison()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}

      {/* Empty State */}
      {selectedServices.length === 0 && (
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-white font-medium text-lg mb-2">No Services Selected</h3>
          <p className="text-gray-400">Select up to 3 services above to start comparing their features, pricing, and performance.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceComparisonTool;