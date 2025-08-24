import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Zap, Target, Users, Clock, DollarSign, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PricingFactor {
  id: string;
  name: string;
  description: string;
  options: {
    value: string;
    label: string;
    multiplier: number;
    description: string;
  }[];
}

interface ServiceEstimate {
  serviceName: string;
  basePrice: number;
  totalPrice: number;
  factors: string[];
  timeline: string;
  complexity: string;
}

const ADVANCED_PRICING_FACTORS: PricingFactor[] = [
  {
    id: 'complexity',
    name: 'Project Complexity',
    description: 'How complex is your project?',
    options: [
      { value: 'simple', label: 'Simple', multiplier: 1.0, description: 'Basic implementation, standard features' },
      { value: 'moderate', label: 'Moderate', multiplier: 1.5, description: 'Custom features, integrations' },
      { value: 'complex', label: 'Complex', multiplier: 2.2, description: 'Advanced AI, custom algorithms' },
      { value: 'enterprise', label: 'Enterprise', multiplier: 3.0, description: 'Multi-system integration, scalability' }
    ]
  },
  {
    id: 'team-size',
    name: 'Team Size',
    description: 'How many developers do you need?',
    options: [
      { value: 'small', label: 'Small (2-3)', multiplier: 1.0, description: '2-3 developers' },
      { value: 'medium', label: 'Medium (4-6)', multiplier: 1.8, description: '4-6 developers' },
      { value: 'large', label: 'Large (7-10)', multiplier: 2.5, description: '7-10 developers' },
      { value: 'enterprise', label: 'Enterprise (10+)', multiplier: 3.5, description: '10+ developers' }
    ]
  },
  {
    id: 'timeline',
    name: 'Timeline',
    description: 'How quickly do you need it?',
    options: [
      { value: 'standard', label: 'Standard', multiplier: 1.0, description: 'Normal development timeline' },
      { value: 'accelerated', label: 'Accelerated', multiplier: 1.4, description: '50% faster delivery' },
      { value: 'rush', label: 'Rush', multiplier: 2.0, description: 'Priority development, overtime' },
      { value: 'critical', label: 'Critical', multiplier: 3.0, description: '24/7 development, maximum resources' }
    ]
  },
  {
    id: 'integrations',
    name: 'Integrations',
    description: 'How many systems need to integrate?',
    options: [
      { value: 'none', label: 'None', multiplier: 1.0, description: 'Standalone solution' },
      { value: 'few', label: 'Few (1-3)', multiplier: 1.2, description: '1-3 system integrations' },
      { value: 'multiple', label: 'Multiple (4-8)', multiplier: 1.6, description: '4-8 system integrations' },
      { value: 'extensive', label: 'Extensive (8+)', multiplier: 2.2, description: '8+ system integrations' }
    ]
  },
  {
    id: 'ai-complexity',
    name: 'AI Complexity',
    description: 'How advanced is the AI required?',
    options: [
      { value: 'basic', label: 'Basic', multiplier: 1.0, description: 'Simple automation, basic ML' },
      { value: 'advanced', label: 'Advanced', multiplier: 1.8, description: 'Deep learning, custom models' },
      { value: 'cutting-edge', label: 'Cutting-Edge', multiplier: 2.5, description: 'Latest AI research, innovation' },
      { value: 'research', label: 'Research', multiplier: 3.5, description: 'Novel AI approaches, R&D' }
    ]
  }
];

const SERVICE_BASE_PRICES = {
  'ai-services': 15000,
  'cybersecurity': 12000,
  'cloud-services': 18000,
  'data-services': 20000,
  'web-development': 12000,
  'it-consulting': 8000,
  'blockchain': 25000,
  'automation': 10000,
  'iot-edge': 22000,
  'quantum-computing': 50000,
  'augmented-reality': 35000,
  'green-tech': 28000,
  'space-tech': 200000,
  'biotech-ai': 120000,
  'autonomous-tech': 180000
};

export const AdvancedPricingCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('ai-services');
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [estimate, setEstimate] = useState<ServiceEstimate | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  useEffect(() => {
    // Initialize with default selections
    const defaults: Record<string, string> = {};
    ADVANCED_PRICING_FACTORS.forEach(factor => {
      defaults[factor.id] = factor.options[0].value;
    });
    setSelections(defaults);
  }, []);

  const calculateEstimate = () => {
    const basePrice = SERVICE_BASE_PRICES[selectedService as keyof typeof SERVICE_BASE_PRICES] || 15000;
    
    let totalMultiplier = 1.0;
    const selectedFactors: string[] = [];
    
    ADVANCED_PRICING_FACTORS.forEach(factor => {
      const selection = selections[factor.id];
      const option = factor.options.find(opt => opt.value === selection);
      if (option) {
        totalMultiplier *= option.multiplier;
        selectedFactors.push(`${factor.name}: ${option.label}`);
      }
    });

    const totalPrice = Math.round(basePrice * totalMultiplier);
    
    // Determine timeline and complexity based on selections
    const timeline = selections.timeline === 'rush' ? '4-8 weeks' : 
                   selections.timeline === 'accelerated' ? '6-10 weeks' : 
                   selections.timeline === 'critical' ? '2-4 weeks' : '8-16 weeks';
    
    const complexity = selections.complexity === 'enterprise' ? 'Very High' :
                      selections.complexity === 'complex' ? 'High' :
                      selections.complexity === 'moderate' ? 'Medium' : 'Low';

    setEstimate({
      serviceName: selectedService.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      basePrice,
      totalPrice,
      factors: selectedFactors,
      timeline,
      complexity
    });
    
    setShowBreakdown(true);
  };

  const getServiceIcon = (serviceId: string) => {
    const icons: Record<string, string> = {
      'ai-services': '🤖',
      'cybersecurity': '🔒',
      'cloud-services': '☁️',
      'data-services': '📊',
      'web-development': '💻',
      'it-consulting': '🎯',
      'blockchain': '⛓️',
      'automation': '⚡',
      'iot-edge': '🌐',
      'quantum-computing': '⚛️',
      'augmented-reality': '🥽',
      'green-tech': '🌱',
      'space-tech': '🚀',
      'biotech-ai': '🧬',
      'autonomous-tech': '🚗'
    };
    return icons[serviceId] || '🚀';
  };

  const getServiceName = (serviceId: string) => {
    const names: Record<string, string> = {
      'ai-services': 'AI & Machine Learning',
      'cybersecurity': 'Cybersecurity',
      'cloud-services': 'Cloud & DevOps',
      'data-services': 'Data & Analytics',
      'web-development': 'Web & Mobile Development',
      'it-consulting': 'IT Consulting',
      'blockchain': 'Blockchain & Web3',
      'automation': 'Process Automation',
      'iot-edge': 'IoT & Edge Computing',
      'quantum-computing': 'Quantum Computing',
      'augmented-reality': 'AR/VR & Metaverse',
      'green-tech': 'Green Technology',
      'space-tech': 'Space Technology',
      'biotech-ai': 'Biotech AI',
      'autonomous-tech': 'Autonomous Technology'
    };
    return names[serviceId] || serviceId;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Advanced Pricing Calculator
        </h2>
        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
          Get accurate estimates for our cutting-edge technology services. 
          Customize your project requirements and see real-time pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Selection */}
        <Card className="bg-zion-blue-light/20 border-zion-blue-light/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5 text-zion-cyan" />
              Select Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(SERVICE_BASE_PRICES).map(([serviceId, basePrice]) => (
                <div
                  key={serviceId}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedService === serviceId
                      ? 'border-zion-cyan bg-zion-cyan/10'
                      : 'border-zion-blue-light/30 hover:border-zion-cyan/50'
                  }`}
                  onClick={() => setSelectedService(serviceId)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getServiceIcon(serviceId)}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">
                        {getServiceName(serviceId)}
                      </h3>
                      <p className="text-sm text-zion-slate-light">
                        Starting from ${basePrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Configuration Options */}
        <Card className="bg-zion-blue-light/20 border-zion-blue-light/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Settings className="w-5 h-5 text-zion-cyan" />
              Configure Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {ADVANCED_PRICING_FACTORS.map((factor) => (
                <div key={factor.id}>
                  <h4 className="font-semibold text-white mb-2">{factor.name}</h4>
                  <p className="text-sm text-zion-slate-light mb-3">{factor.description}</p>
                  <div className="space-y-2">
                    {factor.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 p-3 rounded-lg border border-zion-blue-light/30 hover:bg-zion-blue-light/10 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={factor.id}
                          value={option.value}
                          checked={selections[factor.id] === option.value}
                          onChange={(e) => setSelections(prev => ({ ...prev, [factor.id]: e.target.value }))}
                          className="text-zion-cyan"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-white">{option.label}</div>
                          <div className="text-sm text-zion-slate-light">{option.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-zion-blue-light/20 border-zion-blue-light/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Calculator className="w-5 h-5 text-zion-cyan" />
              Estimate Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!estimate ? (
              <div className="text-center py-8">
                <Calculator className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <p className="text-zion-slate-light">
                  Configure your project and click calculate to see the estimate
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">
                    ${estimate.totalPrice.toLocaleString()}
                  </div>
                  <p className="text-zion-slate-light">Total Project Cost</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-zion-blue-light/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Base Price</span>
                      <span className="text-zion-slate-light">${estimate.basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Complexity Multiplier</span>
                      <span className="text-zion-cyan">{(estimate.totalPrice / estimate.basePrice).toFixed(1)}x</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      <span className="text-white">Timeline: {estimate.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      <span className="text-white">Complexity: {estimate.complexity}</span>
                    </div>
                  </div>

                  {showBreakdown && (
                    <div className="mt-4">
                      <h5 className="font-medium text-white mb-2">Selected Factors:</h5>
                      <div className="space-y-1">
                        {estimate.factors.map((factor, index) => (
                          <Badge key={index} variant="outline" className="mr-2 mb-2">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Button 
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Project Quote Request'} 
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark"
                >
                  Get Detailed Quote
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Calculate Button */}
      <div className="text-center mt-8">
        <Button
          onClick={calculateEstimate}
          size="lg"
          className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark px-8 py-4 text-lg"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate Estimate
        </Button>
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-zion-blue-light/20 border-zion-blue-light/30 text-center">
          <CardContent className="pt-6">
            <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
            <p className="text-zion-slate-light">
              Accelerated development options available for urgent projects
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zion-blue-light/20 border-zion-blue-light/30 text-center">
          <CardContent className="pt-6">
            <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-zion-slate-light">
              Experienced developers and AI specialists for complex projects
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zion-blue-light/20 border-zion-blue-light/30 text-center">
          <CardContent className="pt-6">
            <DollarSign className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Flexible Pricing</h3>
            <p className="text-zion-slate-light">
              Custom payment plans and milestone-based billing available
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedPricingCalculator;