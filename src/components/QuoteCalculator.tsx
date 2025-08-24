import React, { useState, useMemo } from 'react';
import { EXPANDED_SERVICES, ExpandedService } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  DollarSign, 
  Clock, 
  Zap, 
  Shield, 
  Database, 
  Smartphone,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Info,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: 'priority-support',
    name: 'Priority Support',
    description: '24/7 dedicated support with 2-hour response time',
    price: 500,
    category: 'Support'
  },
  {
    id: 'training-sessions',
    name: 'Staff Training',
    description: 'Comprehensive training for your team (up to 10 people)',
    price: 800,
    category: 'Training'
  },
  {
    id: 'custom-integration',
    name: 'Custom Integration',
    description: 'Integration with your existing systems and workflows',
    price: 1200,
    category: 'Integration'
  },
  {
    id: 'data-migration',
    name: 'Data Migration',
    description: 'Assistance with data transfer and setup',
    price: 600,
    category: 'Data'
  },
  {
    id: 'security-audit',
    name: 'Security Audit',
    description: 'Additional security assessment and compliance review',
    price: 1500,
    category: 'Security'
  },
  {
    id: 'performance-optimization',
    name: 'Performance Optimization',
    description: 'Advanced performance tuning and optimization',
    price: 900,
    category: 'Performance'
  },
  {
    id: 'backup-solution',
    name: 'Backup Solution',
    description: 'Comprehensive backup and disaster recovery setup',
    price: 700,
    category: 'Backup'
  },
  {
    id: 'monitoring-setup',
    name: 'Monitoring Setup',
    description: 'Advanced monitoring and alerting systems',
    price: 400,
    category: 'Monitoring'
  }
];

interface QuoteCalculatorProps {
  initialServiceId?: string;
}

export function QuoteCalculator({ initialServiceId }: QuoteCalculatorProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || '');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [businessSize, setBusinessSize] = useState<string>('small');
  const [urgency, setUrgency] = useState<string>('normal');
  const [customRequirements, setCustomRequirements] = useState<string>('');

  const selectedService = useMemo(() => {
    return EXPANDED_SERVICES.find(service => service.id === selectedServiceId);
  }, [selectedServiceId]);

  const selectedAddOnObjects = useMemo(() => {
    return ADD_ON_OPTIONS.filter(addon => selectedAddOns.includes(addon.id));
  }, [selectedAddOns]);

  const calculateBasePrice = () => {
    if (!selectedService) return 0;
    
    let basePrice = selectedService.price;
    
    // Business size multiplier
    switch (businessSize) {
      case 'enterprise':
        basePrice *= 1.3;
        break;
      case 'medium':
        basePrice *= 1.1;
        break;
      case 'small':
      default:
        basePrice *= 1.0;
        break;
    }
    
    // Urgency multiplier
    switch (urgency) {
      case 'urgent':
        basePrice *= 1.4;
        break;
      case 'fast':
        basePrice *= 1.2;
        break;
      case 'normal':
      default:
        basePrice *= 1.0;
        break;
    }
    
    return Math.round(basePrice);
  };

  const calculateAddOnsPrice = () => {
    return selectedAddOnObjects.reduce((total, addon) => total + addon.price, 0);
  };

  const calculateTotalPrice = () => {
    return calculateBasePrice() + calculateAddOnsPrice();
  };

  const calculateSavings = () => {
    if (!selectedService) return 0;
    const marketRange = selectedService.marketPrice.replace(/[$,]/g, '').split(' - ');
    const avgMarketPrice = (parseInt(marketRange[0]) + parseInt(marketRange[1])) / 2;
    const totalPrice = calculateTotalPrice();
    return Math.round(((avgMarketPrice - totalPrice) / avgMarketPrice) * 100);
  };

  const getDeliveryTime = () => {
    if (!selectedService) return '';
    
    let baseTime = selectedService.deliveryTime;
    let timeModifier = '';
    
    switch (urgency) {
      case 'urgent':
        timeModifier = ' (Expedited)';
        break;
      case 'fast':
        timeModifier = ' (Accelerated)';
        break;
      default:
        timeModifier = '';
    }
    
    return baseTime + timeModifier;
  };

  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, string> = {
      "AI & Machine Learning": "🤖",
      "Cloud & DevOps": "☁️",
      "Cybersecurity": "🔒",
      "Data & Analytics": "📊",
      "Web & Mobile Development": "💻",
      "Blockchain & Web3": "⛓️",
      "IoT & Hardware Integration": "🔌",
      "Business Process Automation": "⚙️"
    };
    return icons[categoryName] || "🔧";
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  const handleAddOnToggle = (addonId: string) => {
    setSelectedAddOns(prev => {
      if (prev.includes(addonId)) {
        return prev.filter(id => id !== addonId);
      } else {
        return [...prev, addonId];
      }
    });
  };

  return (
    <div className="py-12 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            <Settings className="inline-block mr-3 h-10 w-10" />
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Calculate the exact cost for your project with our intelligent quote calculator. 
            Customize services, add-ons, and requirements to get a precise estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle className="text-xl">Service Selection</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Choose your primary service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedServiceId} onValueChange={setSelectedServiceId}>
                  <SelectTrigger className="bg-white/20 border-zion-blue-light text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXPANDED_SERVICES.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        <div className="flex items-center gap-2">
                          <span>{getCategoryIcon(service.category)}</span>
                          <span>{service.title}</span>
                          <span className="text-sm text-gray-500">
                            ({formatPrice(service.price)})
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {selectedService && (
              <>
                <Card className="bg-white/10 border-zion-blue-light text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Project Requirements</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Customize your project specifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">Business Size</Label>
                      <Select value={businessSize} onValueChange={setBusinessSize}>
                        <SelectTrigger className="bg-white/20 border-zion-blue-light text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small Business (1-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium Business (51-200 employees)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white">Project Urgency</Label>
                      <Select value={urgency} onValueChange={setUrgency}>
                        <SelectTrigger className="bg-white/20 border-zion-blue-light text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal (Standard timeline)</SelectItem>
                          <SelectItem value="fast">Fast (Accelerated delivery)</SelectItem>
                          <SelectItem value="urgent">Urgent (Rush delivery)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white">Custom Requirements</Label>
                      <Input
                        placeholder="Describe any special requirements..."
                        value={customRequirements}
                        onChange={(e) => setCustomRequirements(e.target.value)}
                        className="bg-white/20 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-zion-blue-light text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Add-On Services</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Enhance your project with additional features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {ADD_ON_OPTIONS.map((addon) => (
                        <div key={addon.id} className="flex items-start space-x-3">
                          <Checkbox
                            id={addon.id}
                            checked={selectedAddOns.includes(addon.id)}
                            onCheckedChange={() => handleAddOnToggle(addon.id)}
                          />
                          <div className="flex-1">
                            <label 
                              htmlFor={addon.id} 
                              className="text-sm font-medium cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <span>{addon.name}</span>
                                <span className="text-zion-cyan font-bold">
                                  +{formatPrice(addon.price)}
                                </span>
                              </div>
                              <p className="text-xs text-zion-slate-light mt-1">
                                {addon.description}
                              </p>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Quote Summary */}
          <div className="space-y-6">
            <Card className="bg-white shadow-xl">
              <CardHeader className="bg-zion-purple text-white">
                <CardTitle className="text-2xl">Your Custom Quote</CardTitle>
                <CardDescription className="text-white/90">
                  Detailed breakdown of your project costs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {selectedService ? (
                  <div className="space-y-6">
                    {/* Service Summary */}
                    <div className="border-b pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{getCategoryIcon(selectedService.category)}</span>
                        <div>
                          <h3 className="font-bold text-lg text-zion-blue-dark">
                            {selectedService.title}
                          </h3>
                          <p className="text-sm text-gray-600">{selectedService.category}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Base Price:</span>
                          <div className="font-bold text-zion-purple">
                            {formatPrice(selectedService.price)}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Market Price:</span>
                          <div className="text-gray-700">{selectedService.marketPrice}</div>
                        </div>
                      </div>
                    </div>

                    {/* Business Size & Urgency */}
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-zion-blue-dark mb-3">Project Modifiers</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Business Size:</span>
                          <div className="font-medium capitalize">{businessSize}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Urgency:</span>
                          <div className="font-medium capitalize">{urgency}</div>
                        </div>
                      </div>
                    </div>

                    {/* Add-ons */}
                    {selectedAddOnObjects.length > 0 && (
                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-zion-blue-dark mb-3">Selected Add-ons</h4>
                        <div className="space-y-2">
                          {selectedAddOnObjects.map((addon) => (
                            <div key={addon.id} className="flex justify-between items-center text-sm">
                              <span className="text-gray-700">{addon.name}</span>
                              <span className="font-bold text-zion-purple">
                                +{formatPrice(addon.price)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Base Service:</span>
                        <span>{formatPrice(selectedService.price)}</span>
                      </div>
                      
                      {businessSize !== 'small' && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Business Size Adjustment:</span>
                          <span className="text-zion-purple">
                            +{formatPrice(calculateBasePrice() - selectedService.price)}
                          </span>
                        </div>
                      )}
                      
                      {urgency !== 'normal' && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Urgency Adjustment:</span>
                          <span className="text-zion-purple">
                            +{formatPrice(calculateBasePrice() - selectedService.price)}
                          </span>
                        </div>
                      )}
                      
                      {selectedAddOnObjects.length > 0 && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Add-ons:</span>
                          <span className="text-zion-purple">
                            +{formatPrice(calculateAddOnsPrice())}
                          </span>
                        </div>
                      )}
                      
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center text-lg font-bold text-zion-blue-dark">
                          <span>Total Project Cost:</span>
                          <span className="text-2xl text-zion-purple">
                            {formatPrice(calculateTotalPrice())}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Savings & Delivery */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">
                          You Save {calculateSavings()}% vs. Market Rate!
                        </span>
                      </div>
                      <p className="text-sm text-green-700">
                        Estimated delivery: {getDeliveryTime()}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Link to="/request-quote" className="block">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Get Detailed Quote
                        </Button>
                      </Link>
                      <Link to="/contact" className="block">
                        <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                          Discuss Project
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Select a service to see your custom quote
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/10 border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle className="text-xl">Need Help?</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Our experts are here to assist you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-zion-cyan" />
                  <span>Free consultation and project planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-zion-cyan" />
                  <span>Custom solutions for your specific needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-zion-cyan" />
                  <span>Ongoing support and maintenance</span>
                </div>
                <div className="pt-3 border-t border-zion-blue-light">
                  <p className="text-sm text-zion-slate-light">
                    Contact us: +1 302 464 0950 | kleber@ziontechgroup.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}