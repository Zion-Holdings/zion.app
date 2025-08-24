import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Check, X, Star, Brain, Atom, Rocket, Shield, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceFeature {
  name: string;
  category: string;
  description: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  features: string[];
  pros: string[];
  cons: string[];
  icon: React.ReactNode;
  color: string;
  popular?: boolean;
}

const ServiceComparisonTool: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);

  const availableServices: Service[] = [
    {
      id: 'ai-bi-platform',
      name: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with AI',
      category: 'AI & Machine Learning',
      price: '$1,299/month',
      rating: 4.8,
      features: ['Real-time analytics', 'AI-powered modeling', 'Automated reporting', 'Natural language queries', 'Predictive insights'],
      pros: ['Advanced AI capabilities', 'Real-time processing', 'Scalable architecture', 'Excellent support'],
      cons: ['Higher price point', 'Steep learning curve', 'Requires data expertise'],
      icon: <Brain className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'quantum-secure-cloud',
      name: 'Quantum-Secure Cloud',
      description: 'Future-proof security with quantum-resistant encryption',
      category: 'Quantum Computing',
      price: '$2,499/month',
      rating: 4.9,
      features: ['Quantum-resistant encryption', 'Post-quantum cryptography', 'Multi-cloud deployment', '24/7 monitoring', 'Compliance ready'],
      pros: ['Future-proof security', 'Enterprise-grade', 'Multi-cloud support', 'Advanced compliance'],
      cons: ['Premium pricing', 'Complex setup', 'Limited quantum expertise required'],
      icon: <Atom className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'metaverse-platform',
      name: 'Metaverse Development',
      description: 'Build immersive virtual worlds and experiences',
      category: 'Emerging Technologies',
      price: '$1,899/month',
      rating: 4.7,
      features: ['3D world building', 'VR/AR support', 'Multi-user environments', 'Asset management', 'Performance optimization'],
      pros: ['Cutting-edge technology', 'Immersive experiences', 'Scalable platform', 'Creative freedom'],
      cons: ['Emerging technology', 'Performance requirements', 'Content creation needed'],
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'enterprise-security',
      name: 'Enterprise Security Suite',
      description: 'Comprehensive security solutions for enterprise environments',
      category: 'Enterprise Solutions',
      price: '$3,999/month',
      rating: 4.6,
      features: ['Threat detection', 'Incident response', 'Compliance management', 'Security monitoring', 'Vulnerability assessment'],
      pros: ['Comprehensive coverage', 'Enterprise features', '24/7 support', 'Proven track record'],
      cons: ['Enterprise pricing', 'Complex deployment', 'Requires security team'],
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'micro-saas-platform',
      name: 'Micro SAAS Platform',
      description: 'Scalable software-as-a-service solutions for modern businesses',
      category: 'Micro SAAS',
      price: '$499/month',
      rating: 4.5,
      features: ['Multi-tenancy', 'Subscription management', 'Analytics dashboard', 'API access', 'Custom branding'],
      pros: ['Affordable pricing', 'Easy to use', 'Quick deployment', 'Good support'],
      cons: ['Limited customization', 'Basic features', 'Standard templates'],
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else if (selectedServices.length < 3) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const selectedServiceObjects = availableServices.filter(service => 
    selectedServices.includes(service.id)
  );

  const allFeatures = Array.from(new Set(
    availableServices.flatMap(service => service.features)
  ));

  const getFeatureValue = (service: Service, feature: string) => {
    return service.features.includes(feature) ? '✓' : '✗';
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <BarChart3 className="w-8 h-8 text-cyan-400 mr-3" />
          <h2 className="text-3xl font-bold text-white">Service Comparison Tool</h2>
        </div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Compare our services side by side to find the perfect solution for your business needs. Select up to 3 services to compare.
        </p>
      </motion.div>

      {/* Service Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Select Services to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedServices.includes(service.id)
                  ? 'border-cyan-400 bg-cyan-500/10'
                  : 'border-gray-700 hover:border-cyan-400/50 bg-gray-800/50'
              }`}
              onClick={() => toggleService(service.id)}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  Popular
                </div>
              )}
              
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                  <p className="text-sm text-gray-400">{service.category}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-white">{service.rating}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-3">{service.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedServices.includes(service.id)
                    ? 'border-cyan-400 bg-cyan-400'
                    : 'border-gray-600'
                }`}>
                  {selectedServices.includes(service.id) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Selected: {selectedServices.length}/3 services
          </p>
          {selectedServices.length >= 2 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setCompareMode(true)}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Compare Services
            </motion.button>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      <AnimatePresence>
        {compareMode && selectedServiceObjects.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Service Comparison</h3>
              <p className="text-gray-400">Detailed comparison of selected services</p>
            </div>

            {/* Overview Comparison */}
            <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Overview</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedServiceObjects.map((service) => (
                  <div key={service.id} className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    <h5 className="text-lg font-semibold text-white mb-2">{service.name}</h5>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</p>
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h6 className="text-cyan-400 font-medium text-sm">Pros:</h6>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {service.pros.slice(0, 3).map((pro, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 mt-3">
                      <h6 className="text-red-400 font-medium text-sm">Cons:</h6>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {service.cons.slice(0, 2).map((con, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <X className="w-3 h-3 text-red-400 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/services/${service.id}`}>
                      <button className="mt-4 w-full px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm">
                        Learn More
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Comparison */}
            <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 overflow-x-auto">
              <h4 className="text-lg font-semibold text-white mb-4">Feature Comparison</h4>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-3 text-cyan-400 font-medium">Feature</th>
                    {selectedServiceObjects.map((service) => (
                      <th key={service.id} className="p-3 text-center">
                        <div className="flex flex-col items-center space-y-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                            {service.icon}
                          </div>
                          <span className="text-white text-sm font-medium">{service.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature) => (
                    <tr key={feature} className="border-b border-gray-800">
                      <td className="p-3 text-gray-300 text-sm">{feature}</td>
                      {selectedServiceObjects.map((service) => (
                        <td key={service.id} className="p-3 text-center">
                          <span className={`text-lg font-bold ${
                            getFeatureValue(service, feature) === '✓' ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {getFeatureValue(service, feature)}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Recommendation */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-4">Our Recommendation</h4>
              <p className="text-gray-300 mb-4">
                Based on your comparison, we recommend{' '}
                <span className="text-cyan-400 font-semibold">
                  {selectedServiceObjects.reduce((best, current) => 
                    current.rating > best.rating ? current : best
                  ).name}
                </span>{' '}
                as the best overall solution for most businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceComparisonTool;