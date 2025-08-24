import React, { useState, useEffect } from 'react';
import { EXPANDED_SERVICES, ExpandedService } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  BarChart3,
  PieChart,
  LineChart,
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  Mail,
  Phone,
  Globe,
  Sparkles
} from 'lucide-react';
import Calculator from 'lucide-react/dist/esm/icons/calculator';
import Target from 'lucide-react/dist/esm/icons/target';
import { SEO } from '@/components/SEO';

interface CalculationInputs {
  serviceId: string;
  companySize: 'small' | 'medium' | 'large' | 'enterprise';
  implementationComplexity: 'low' | 'medium' | 'high';
  customFeatures: number;
  supportLevel: 'basic' | 'premium' | 'enterprise';
  contractDuration: number; // months
}

interface CalculationResults {
  baseCost: number;
  implementationCost: number;
  monthlyCost: number;
  totalFirstYearCost: number;
  estimatedROI: number;
  paybackPeriod: number;
  implementationTime: string;
  costSavings: number;
  efficiencyGains: number;
}

export default function ServiceCalculatorPage() {
  const [selectedService, setSelectedService] = useState<ExpandedService | null>(null);
  const [inputs, setInputs] = useState<CalculationInputs>({
    serviceId: '',
    companySize: 'medium',
    implementationComplexity: 'medium',
    customFeatures: 0,
    supportLevel: 'premium',
    contractDuration: 12
  });
  const [results, setResults] = useState<CalculationResults | null>(null);

  useEffect(() => {
    if (inputs.serviceId) {
      const service = EXPANDED_SERVICES.find(s => s.id === inputs.serviceId);
      setSelectedService(service || null);
    }
  }, [inputs.serviceId]);

  useEffect(() => {
    if (selectedService) {
      const calculatedResults = calculateServiceCosts(selectedService, inputs);
      setResults(calculatedResults);
    }
  }, [selectedService, inputs]);

  const calculateServiceCosts = (service: ExpandedService, inputs: CalculationInputs): CalculationResults => {
    // Base cost adjustments based on company size
    const sizeMultiplier = {
      small: 0.8,
      medium: 1.0,
      large: 1.3,
      enterprise: 1.8
    };

    // Implementation complexity multipliers
    const complexityMultiplier = {
      low: 0.7,
      medium: 1.0,
      high: 1.5
    };

    // Support level multipliers
    const supportMultiplier = {
      basic: 0.8,
      premium: 1.0,
      enterprise: 1.4
    };

    // Calculate base cost
    let baseCost = service.price * sizeMultiplier[inputs.companySize];
    
    // Add custom features cost
    const customFeaturesCost = inputs.customFeatures * 500;
    
    // Calculate implementation cost
    const implementationCost = baseCost * 0.3 * complexityMultiplier[inputs.implementationComplexity];
    
    // Calculate monthly cost for subscription services
    let monthlyCost = 0;
    if (service.pricingModel === 'subscription') {
      monthlyCost = baseCost / 12;
    } else if (service.pricingModel === 'hourly') {
      monthlyCost = baseCost * 160; // Assuming 160 hours per month
    }
    
    // Apply support level multiplier
    monthlyCost *= supportMultiplier[inputs.supportLevel];
    
    // Calculate total first year cost
    const totalFirstYearCost = baseCost + implementationCost + (monthlyCost * 12);
    
    // Calculate ROI based on service benefits
    let efficiencyGains = 0;
    let costSavings = 0;
    
    if (service.category === 'AI & Machine Learning') {
      efficiencyGains = 300; // 300% efficiency improvement
      costSavings = totalFirstYearCost * 2.5;
    } else if (service.category === 'Cybersecurity') {
      efficiencyGains = 150; // 150% security improvement
      costSavings = totalFirstYearCost * 1.8;
    } else if (service.category === 'Cloud & DevOps') {
      efficiencyGains = 200; // 200% efficiency improvement
      costSavings = totalFirstYearCost * 2.0;
    } else if (service.category === 'Data & Analytics') {
      efficiencyGains = 250; // 250% efficiency improvement
      costSavings = totalFirstYearCost * 2.2;
    } else if (service.category === 'Emerging Technologies') {
      efficiencyGains = 400; // 400% innovation improvement
      costSavings = totalFirstYearCost * 3.0;
    }
    
    // Calculate ROI
    const estimatedROI = ((costSavings - totalFirstYearCost) / totalFirstYearCost) * 100;
    
    // Calculate payback period
    const paybackPeriod = totalFirstYearCost / (costSavings / 12);
    
    // Calculate implementation time
    let implementationTime = '';
    if (inputs.implementationComplexity === 'low') {
      implementationTime = '2-4 weeks';
    } else if (inputs.implementationComplexity === 'medium') {
      implementationTime = '4-8 weeks';
    } else {
      implementationTime = '8-16 weeks';
    }
    
    return {
      baseCost: Math.round(baseCost),
      implementationCost: Math.round(implementationCost),
      monthlyCost: Math.round(monthlyCost),
      totalFirstYearCost: Math.round(totalFirstYearCost),
      estimatedROI: Math.round(estimatedROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      implementationTime,
      costSavings: Math.round(costSavings),
      efficiencyGains
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getCompanySizeDescription = (size: string) => {
    switch (size) {
      case 'small': return '1-50 employees';
      case 'medium': return '51-200 employees';
      case 'large': return '201-1000 employees';
      case 'enterprise': return '1000+ employees';
      default: return '';
    }
  };

  const getComplexityDescription = (complexity: string) => {
    switch (complexity) {
      case 'low': return 'Simple integration, minimal customization';
      case 'medium': return 'Standard implementation with some customization';
      case 'high': return 'Complex integration with extensive customization';
      default: return '';
    }
  };

  return (
    <>
      <SEO 
        title="Service Cost Calculator - ZionTech Group" 
        description="Calculate costs, ROI, and implementation timelines for our IT and AI services. Get accurate estimates and understand the value proposition of each solution."
        keywords="service calculator, cost calculator, ROI calculator, implementation cost, service pricing, ZionTech Group"
        canonical="https://ziontechgroup.com/service-calculator"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-12 h-12 mr-3 text-zion-cyan" />
            <h1 className="text-5xl font-bold">Service Cost Calculator</h1>
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Calculate costs, ROI, and implementation timelines for our comprehensive range of IT and AI services. 
            Get accurate estimates and understand the value proposition of each solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
                          <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
                <Calculator className="w-5 h-5 mr-2" />
                Start Calculating
              </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculator Inputs
                </CardTitle>
                <CardDescription>
                  Configure your requirements to get accurate cost estimates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service
                  </label>
                  <Select value={inputs.serviceId} onValueChange={(value) => setInputs({...inputs, serviceId: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {EXPANDED_SERVICES.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <Select value={inputs.companySize} onValueChange={(value: any) => setInputs({...inputs, companySize: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (1-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                      <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    {getCompanySizeDescription(inputs.companySize)}
                  </p>
                </div>

                {/* Implementation Complexity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Complexity
                  </label>
                  <Select value={inputs.implementationComplexity} onValueChange={(value: any) => setInputs({...inputs, implementationComplexity: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Simple integration</SelectItem>
                      <SelectItem value="medium">Medium - Standard implementation</SelectItem>
                      <SelectItem value="high">High - Complex integration</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    {getComplexityDescription(inputs.implementationComplexity)}
                  </p>
                </div>

                {/* Custom Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Features Required: {inputs.customFeatures}
                  </label>
                  <Slider
                    value={[inputs.customFeatures]}
                    onValueChange={(value) => setInputs({...inputs, customFeatures: value[0]})}
                    max={20}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Each custom feature adds ~$500 to implementation cost
                  </p>
                </div>

                {/* Support Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Support Level
                  </label>
                  <Select value={inputs.supportLevel} onValueChange={(value: any) => setInputs({...inputs, supportLevel: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Support</SelectItem>
                      <SelectItem value="premium">Premium Support</SelectItem>
                      <SelectItem value="enterprise">Enterprise Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contract Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contract Duration: {inputs.contractDuration} months
                  </label>
                  <Slider
                    value={[inputs.contractDuration]}
                    onValueChange={(value) => setInputs({...inputs, contractDuration: value[0]})}
                    max={36}
                    min={6}
                    step={6}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Longer contracts may qualify for volume discounts
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            {selectedService && results ? (
              <div className="space-y-6">
                {/* Service Overview */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{selectedService.title}</CardTitle>
                        <CardDescription className="text-lg">{selectedService.description}</CardDescription>
                      </div>
                      <Badge className="bg-zion-purple text-white text-lg px-4 py-2">
                        {selectedService.category}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>

                {/* Cost Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-600">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Cost Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Base Service Cost:</span>
                        <span className="font-semibold">{formatCurrency(results.baseCost)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Implementation Cost:</span>
                        <span className="font-semibold">{formatCurrency(results.implementationCost)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Cost:</span>
                        <span className="font-semibold">{formatCurrency(results.monthlyCost)}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total First Year:</span>
                          <span className="text-green-600">{formatCurrency(results.totalFirstYearCost)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-600">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        ROI Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Estimated ROI:</span>
                        <span className="font-semibold text-green-600">{results.estimatedROI}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payback Period:</span>
                        <span className="font-semibold">{results.paybackPeriod} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Savings:</span>
                        <span className="font-semibold text-green-600">{formatCurrency(results.costSavings)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Efficiency Gains:</span>
                        <span className="font-semibold text-blue-600">{results.efficiencyGains}%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Implementation Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Implementation Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{results.implementationTime}</div>
                        <div className="text-sm text-gray-600">Implementation Time</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{results.paybackPeriod} months</div>
                        <div className="text-sm text-gray-600">Payback Period</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{results.estimatedROI}%</div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Market Comparison */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Market Price Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold">Market Average Price</div>
                          <div className="text-sm text-gray-600">Based on industry standards</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-700">
                          {formatCurrency(selectedService.marketPrice.average)}
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-green-700">Our Price</div>
                          <div className="text-sm text-green-600">Competitive pricing</div>
                        </div>
                        <div className="text-2xl font-bold text-green-700">
                          {formatCurrency(results.totalFirstYearCost)}
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-blue-700">Total Savings</div>
                          <div className="text-sm text-blue-600">vs market average</div>
                        </div>
                        <div className="text-2xl font-bold text-blue-700">
                          {formatCurrency(selectedService.marketPrice.average - results.totalFirstYearCost)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Based on your requirements, this service offers excellent value with a {results.estimatedROI}% ROI 
                        and payback period of {results.paybackPeriod} months. Here's what you can do next:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                          <Mail className="w-4 h-4 mr-2" />
                          Request Detailed Quote
                        </Button>
                        <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
                          <Phone className="w-4 h-4 mr-2" />
                          Schedule Consultation
                        </Button>
                      </div>
                      <div className="text-sm text-gray-500 text-center">
                        Contact us at {selectedService.contactInfo.email} or call {selectedService.contactInfo.phone}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="text-center py-12">
                <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Service to Calculate Costs</h3>
                <p className="text-gray-600 mb-6">
                  Choose a service from the dropdown menu to see detailed cost breakdowns, ROI projections, and implementation timelines.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                    <Globe className="w-4 h-4 mr-2" />
                    Browse All Services
                  </Button>
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Custom Quote
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Accurate Estimates?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert consultants can provide you with detailed, customized quotes based on your specific requirements 
            and business context. Get in touch for personalized pricing and implementation guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </>
  );
}