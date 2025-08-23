import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, Star, TrendingUp, Shield, Zap, Clock, DollarSign, 
  BarChart3, Target, Users, Globe, Award, ArrowRight
} from 'lucide-react';

interface ServiceFeature {
  name: string;
  description: string;
  category: 'core' | 'advanced' | 'enterprise';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: ServiceFeature[];
  rating: number;
  deploymentTime: string;
  support: string;
  scalability: 'basic' | 'advanced' | 'enterprise';
  category: string;
  icon: React.ReactNode;
  color: string;
}

interface ServiceComparisonToolProps {
  services: Service[];
  className?: string;
}

const ServiceComparisonTool: React.FC<ServiceComparisonToolProps> = ({ 
  services, 
  className = '' 
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [comparisonMode, setComparisonMode] = useState<'features' | 'pricing' | 'performance'>('features');
  const [expandedFeatures, setExpandedFeatures] = useState<Set<string>>(new Set());

  const maxComparisons = 4;

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else if (prev.length < maxComparisons) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const selectedServiceData = useMemo(() => {
    return services.filter(service => selectedServices.includes(service.id));
  }, [services, selectedServices]);

  const allFeatures = useMemo(() => {
    const featureSet = new Set<string>();
    selectedServiceData.forEach(service => {
      service.features.forEach(feature => featureSet.add(feature.name));
    });
    return Array.from(featureSet);
  }, [selectedServiceData]);

  const toggleFeatureExpansion = (featureName: string) => {
    setExpandedFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(featureName)) {
        newSet.delete(featureName);
      } else {
        newSet.add(featureName);
      }
      return newSet;
    });
  };

  const getFeatureValue = (service: Service, featureName: string) => {
    const feature = service.features.find(f => f.name === featureName);
    return feature ? (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center space-x-2"
      >
        <Check className="w-4 h-4 text-green-500" />
        <span className="text-sm text-gray-300">{feature.description}</span>
      </motion.div>
    ) : (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center space-x-2"
      >
        <X className="w-4 h-4 text-red-500" />
        <span className="text-sm text-gray-500">Not available</span>
      </motion.div>
    );
  };

  const getComparisonData = () => {
    switch (comparisonMode) {
      case 'pricing':
        return selectedServiceData.map(service => ({
          service,
          data: [
            { label: 'Starting Price', value: service.price, icon: DollarSign },
            { label: 'Deployment Time', value: service.deploymentTime, icon: Clock },
            { label: 'Support Level', value: service.support, icon: Users },
            { label: 'Scalability', value: service.scalability, icon: TrendingUp }
          ]
        }));
      case 'performance':
        return selectedServiceData.map(service => ({
          service,
          data: [
            { label: 'Rating', value: `${service.rating}/5`, icon: Star },
            { label: 'Security', value: 'Enterprise Grade', icon: Shield },
            { label: 'Speed', value: 'Ultra Fast', icon: Zap },
            { label: 'Reliability', value: '99.99%', icon: Award }
          ]
        }));
      default:
        return selectedServiceData.map(service => ({
          service,
          data: service.features.slice(0, 6).map(feature => ({
            label: feature.name,
            value: feature.description,
            icon: feature.category === 'core' ? Check : feature.category === 'advanced' ? Star : Award
          }))
        }));
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Service Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Select Services to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => handleServiceToggle(service.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedServices.includes(service.id)
                  ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/25'
                  : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${service.color}`}>
                  {service.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white">{service.name}</h4>
                  <p className="text-sm text-gray-400">{service.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Comparison Mode Toggle */}
      {selectedServices.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 p-1 bg-gray-800/50 rounded-lg">
            {[
              { key: 'features', label: 'Features', icon: BarChart3 },
              { key: 'pricing', label: 'Pricing', icon: DollarSign },
              { key: 'performance', label: 'Performance', icon: TrendingUp }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setComparisonMode(key as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                  comparisonMode === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Comparison Table */}
      {selectedServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-x-auto"
        >
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Features</h4>
              </div>
              {selectedServiceData.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-lg ${service.color} mb-3`}>
                      {service.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-1">{service.name}</h4>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comparison Data */}
            {getComparisonData()[0]?.data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
              >
                <div className="p-4 bg-gray-800/30 rounded-lg flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="font-medium text-white">{item.label}</span>
                </div>
                {selectedServiceData.map((service) => (
                  <motion.div
                    key={service.id}
                    layout
                    className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-center">
                      {comparisonMode === 'features' ? (
                        getFeatureValue(service, item.label)
                      ) : (
                        <span className="text-white">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {selectedServices.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="inline-flex p-4 rounded-full bg-gray-800/50 mb-4">
            <BarChart3 className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Compare Services</h3>
          <p className="text-gray-400 mb-4">
            Select up to {maxComparisons} services to compare their features, pricing, and performance.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Check className="w-4 h-4" />
            <span>Select services above to get started</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceComparisonTool;