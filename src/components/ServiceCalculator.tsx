import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  icon: React.ReactNode;
  category: string;
  estimatedTime: string;
  roi: string;
  features: string[];
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'ai-automation',
    name: 'AI Business Automation',
    basePrice: 8999,
    description: 'Intelligent process automation with machine learning',
    icon: <Brain className="w-6 h-6" />,
    category: 'AI & Automation',
    estimatedTime: '4-6 weeks',
    roi: '300-500%',
    features: ['Process Optimization', 'Predictive Analytics', 'Smart Workflows']
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration',
    basePrice: 25000,
    description: 'Complete cloud infrastructure migration',
    icon: <Cloud className="w-6 h-6" />,
    category: 'Infrastructure',
    estimatedTime: '8-12 weeks',
    roi: '200-400%',
    features: ['Zero Downtime', 'Cost Optimization', 'Scalability']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Suite',
    basePrice: 12999,
    description: 'Comprehensive security implementation',
    icon: <Shield className="w-6 h-6" />,
    category: 'Security',
    estimatedTime: '6-8 weeks',
    roi: 'Preventive',
    features: ['Threat Detection', 'Compliance', '24/7 Monitoring']
  },
  {
    id: 'web-development',
    name: 'Custom Web Application',
    basePrice: 15999,
    description: 'Modern web application development',
    icon: <Zap className="w-6 h-6" />,
    category: 'Development',
    estimatedTime: '10-14 weeks',
    roi: '250-400%',
    features: ['Responsive Design', 'Performance Optimized', 'SEO Ready']
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics Platform',
    basePrice: 18999,
    description: 'Advanced business intelligence solution',
    icon: <TrendingUp className="w-6 h-6" />,
    category: 'Analytics',
    estimatedTime: '8-10 weeks',
    roi: '400-600%',
    features: ['Real-time Insights', 'Custom Dashboards', 'Predictive Models']
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation',
    basePrice: 7999,
    description: 'CI/CD pipeline and automation',
    icon: <Zap className="w-6 h-6" />,
    category: 'DevOps',
    estimatedTime: '4-6 weeks',
    roi: '200-300%',
    features: ['Automated Deployments', 'Monitoring', 'Scalability']
  }
];

const discountTiers = [
  { services: 2, discount: 0.05, label: '5% Bundle Discount' },
  { services: 3, discount: 0.10, label: '10% Bundle Discount' },
  { services: 4, discount: 0.15, label: '15% Bundle Discount' },
  { services: 5, discount: 0.20, label: '20% Bundle Discount' },
  { services: 6, discount: 0.25, label: '25% Bundle Discount' }
];

export function ServiceCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<'small' | 'medium' | 'large'>('medium');
  const [urgency, setUrgency] = useState<'standard' | 'fast' | 'urgent'>('standard');

  const selectedServiceObjects = useMemo(() => {
    return serviceOptions.filter(service => selectedServices.includes(service.id));
  }, [selectedServices]);

  const baseTotal = useMemo(() => {
    return selectedServiceObjects.reduce((sum, service) => sum + service.basePrice, 0);
  }, [selectedServiceObjects]);

  const sizeMultiplier = useMemo(() => {
    switch (companySize) {
      case 'small': return 0.8;
      case 'medium': return 1.0;
      case 'large': return 1.3;
      default: return 1.0;
    }
  }, [companySize]);

  const urgencyMultiplier = useMemo(() => {
    switch (urgency) {
      case 'standard': return 1.0;
      case 'fast': return 1.2;
      case 'urgent': return 1.5;
      default: return 1.0;
    }
  }, [urgency]);

  const bundleDiscount = useMemo(() => {
    const tier = discountTiers.find(t => selectedServices.length >= t.services);
    return tier ? tier.discount : 0;
  }, [selectedServices.length]);

  const finalPrice = useMemo(() => {
    const adjustedPrice = baseTotal * sizeMultiplier * urgencyMultiplier;
    const discountAmount = adjustedPrice * bundleDiscount;
    return Math.round(adjustedPrice - discountAmount);
  }, [baseTotal, sizeMultiplier, urgencyMultiplier, bundleDiscount]);

  const estimatedROI = useMemo(() => {
    if (selectedServiceObjects.length === 0) return 0;
    const avgROI = selectedServiceObjects.reduce((sum, service) => {
      const roi = service.roi === 'Preventive' ? 200 : parseInt(service.roi.split('-')[0]);
      return sum + roi;
    }, 0) / selectedServiceObjects.length;
    return Math.round(avgROI);
  }, [selectedServiceObjects]);

  const totalTime = useMemo(() => {
    if (selectedServiceObjects.length === 0) return '0 weeks';
    const totalWeeks = selectedServiceObjects.reduce((sum, service) => {
      const weeks = parseInt(service.estimatedTime.split('-')[1]);
      return sum + weeks;
    }, 0);
    return `${Math.ceil(totalWeeks / 2)}-${totalWeeks} weeks`;
  }, [selectedServiceObjects]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const resetCalculator = () => {
    setSelectedServices([]);
    setCompanySize('medium');
    setUrgency('standard');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Service Cost Calculator
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Calculate the cost and ROI of our services. Mix and match services to create the perfect solution for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Company Size Selection */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                Company Size
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'small', label: 'Small', desc: '1-50 employees' },
                  { value: 'medium', label: 'Medium', desc: '51-200 employees' },
                  { value: 'large', label: 'Large', desc: '200+ employees' }
                ].map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setCompanySize(size.value as any)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-center ${
                      companySize === size.value
                        ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30'
                    }`}
                  >
                    <div className="font-semibold">{size.label}</div>
                    <div className="text-xs opacity-70">{size.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency Selection */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                Project Urgency
              </h3>
              <div className="space-y-3">
                {[
                  { value: 'standard', label: 'Standard', desc: 'Normal timeline', price: 'Base price' },
                  { value: 'fast', label: 'Fast Track', desc: '20% faster delivery', price: '+20% cost' },
                  { value: 'urgent', label: 'Urgent', desc: '50% faster delivery', price: '+50% cost' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setUrgency(option.value as any)}
                    className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                      urgency === option.value
                        ? 'bg-purple-500/20 border-purple-400/50 text-purple-400'
                        : 'bg-white/10 border-white/20 text-white/80 hover:border-purple-400/30'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-sm opacity-70">{option.desc}</div>
                      </div>
                      <div className="text-sm font-medium">{option.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selection */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-400" />
                Select Services
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {serviceOptions.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceToggle(service.id)}
                    className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                      selectedServices.includes(service.id)
                        ? 'bg-green-500/20 border-green-400/50 text-green-400'
                        : 'bg-white/10 border-white/20 text-white/80 hover:border-green-400/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-green-400">{service.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold mb-1">{service.name}</div>
                        <div className="text-sm opacity-70 mb-2">{service.description}</div>
                        <div className="flex justify-between items-center text-xs">
                          <span>${service.basePrice.toLocaleString()}</span>
                          <span>{service.estimatedTime}</span>
                          <span>ROI: {service.roi}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetCalculator}
              className="w-full py-3 px-6 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Reset Calculator
            </button>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Price Summary */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-400" />
                Cost Breakdown
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-white/80">
                  <span>Base Services:</span>
                  <span>${baseTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Company Size ({companySize}):</span>
                  <span>{(sizeMultiplier * 100 - 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Urgency ({urgency}):</span>
                  <span>{(urgencyMultiplier * 100 - 100).toFixed(0)}%</span>
                </div>
                {bundleDiscount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Bundle Discount:</span>
                    <span>-{(bundleDiscount * 100).toFixed(0)}%</span>
                  </div>
                )}
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total Investment:</span>
                    <span>${finalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {selectedServices.length > 0 && (
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">${finalPrice.toLocaleString()}</div>
                    <div className="text-white/70 text-sm">Total Investment</div>
                  </div>
                </div>
              )}
            </div>

            {/* ROI & Timeline */}
            {selectedServices.length > 0 && (
              <>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Expected Results
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">{estimatedROI}%</div>
                      <div className="text-white/70 text-sm">Average ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">{totalTime}</div>
                      <div className="text-white/70 text-sm">Timeline</div>
                    </div>
                  </div>
                </div>

                {/* Bundle Savings */}
                {bundleDiscount > 0 && (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Bundle Savings
                    </h3>
                    <p className="text-green-300 text-sm">
                      You're saving {(bundleDiscount * 100).toFixed(0)}% by bundling {selectedServices.length} services!
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-white/80 mb-4">
                    Let's discuss your project requirements and create a customized solution.
                  </p>
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Get Custom Quote
                  </button>
                </div>
              </>
            )}

            {/* Empty State */}
            {selectedServices.length === 0 && (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-12 text-center">
                <div className="text-6xl mb-4">🧮</div>
                <h3 className="text-xl font-semibold text-white mb-2">Select Services</h3>
                <p className="text-white/70">
                  Choose services from the left to see pricing and ROI calculations.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}