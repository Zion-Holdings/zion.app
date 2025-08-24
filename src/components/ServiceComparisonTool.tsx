import React, { useState, useMemo } from 'react';
import { EXPANDED_SERVICES, ExpandedService } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Star, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  X, 
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceComparisonProps {
  maxServices?: number;
}

export function ServiceComparisonTool({ maxServices = 4 }: ServiceComparisonProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const selectedServiceObjects = useMemo(() => {
    return EXPANDED_SERVICES.filter(service => selectedServices.includes(service.id));
  }, [selectedServices]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else if (prev.length < maxServices) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const getComparisonData = () => {
    const data: Record<string, any> = {};
    
    selectedServiceObjects.forEach(service => {
      data[service.id] = {
        title: service.title,
        category: service.category,
        price: service.price,
        pricingModel: service.pricingModel,
        deliveryTime: service.deliveryTime,
        rating: service.rating,
        aiScore: service.aiScore,
        features: service.features,
        benefits: service.benefits,
        marketPrice: service.marketPrice,
        savings: calculateSavings(service.price, service.marketPrice)
      };
    });
    
    return data;
  };

  const calculateSavings = (ourPrice: number, marketPrice: string) => {
    const marketRange = marketPrice.replace(/[$,]/g, '').split(' - ');
    const avgMarketPrice = (parseInt(marketRange[0]) + parseInt(marketRange[1])) / 2;
    return Math.round(((avgMarketPrice - ourPrice) / avgMarketPrice) * 100);
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

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') {
      return `$${price.toLocaleString()}/month`;
    } else if (model === 'hourly') {
      return `$${price.toLocaleString()}/hour`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project';
      case 'one-time': return 'One-time';
      default: return model;
    }
  };

  return (
    <div className="py-12 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Compare Services Side-by-Side
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Select up to {maxServices} services to compare features, pricing, and benefits. 
            Make informed decisions with our detailed comparison tool.
          </p>
        </div>

        {/* Service Selection */}
        <div className="bg-white/10 rounded-2xl p-8 mb-8 border border-zion-blue-light">
          <h3 className="text-2xl font-bold text-white mb-6">Select Services to Compare</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {EXPANDED_SERVICES.map((service) => (
              <div key={service.id} className="flex items-center space-x-3">
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={() => handleServiceToggle(service.id)}
                  disabled={!selectedServices.includes(service.id) && selectedServices.length >= maxServices}
                />
                <label 
                  htmlFor={service.id} 
                  className={`text-sm font-medium cursor-pointer ${
                    selectedServices.includes(service.id) ? 'text-white' : 'text-zion-slate-light'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getCategoryIcon(service.category)}</span>
                    <span className="truncate">{service.title}</span>
                  </div>
                  <div className="text-xs text-zion-slate-light">
                    {formatPrice(service.price, service.pricingModel)}
                  </div>
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-zion-slate-light">
              {selectedServices.length} of {maxServices} services selected
            </div>
            <Button
              onClick={() => setShowComparison(true)}
              disabled={selectedServices.length < 2}
              className="bg-zion-purple hover:bg-zion-purple-dark"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Compare Services
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        {showComparison && selectedServiceObjects.length >= 2 && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zion-blue-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left min-w-[200px]">Features</th>
                    {selectedServiceObjects.map((service) => (
                      <th key={service.id} className="px-6 py-4 text-center min-w-[250px]">
                        <div className="text-center">
                          <div className="text-2xl mb-2">{getCategoryIcon(service.category)}</div>
                          <div className="font-bold text-lg">{service.title}</div>
                          <div className="text-sm text-zion-slate-light">{service.category}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Pricing Row */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-zion-blue-dark">Pricing</td>
                    {selectedServiceObjects.map((service) => (
                      <td key={service.id} className="px-6 py-4 text-center">
                        <div className="text-2xl font-bold text-zion-purple">
                          {formatPrice(service.price, service.pricingModel)}
                        </div>
                        <div className="text-sm text-gray-600">
                          {getPricingModelLabel(service.pricingModel)} pricing
                        </div>
                        <Badge className="mt-2 bg-green-100 text-green-800">
                          Save {calculateSavings(service.price, service.marketPrice)}%
                        </Badge>
                      </td>
                    ))}
                  </tr>

                  {/* Market Price Row */}
                  <tr>
                    <td className="px-6 py-4 font-semibold text-zion-blue-dark">Market Price</td>
                    {selectedServiceObjects.map((service) => (
                      <td key={service.id} className="px-6 py-4 text-center">
                        <div className="text-lg text-gray-700">{service.marketPrice}</div>
                        <div className="text-sm text-green-600 font-medium">
                          vs. our price: ${service.price.toLocaleString()}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Delivery Time Row */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-zion-blue-dark">Delivery Time</td>
                    {selectedServiceObjects.map((service) => (
                      <td key={service.id} className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-lg">{service.deliveryTime}</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Rating Row */}
                  <tr>
                    <td className="px-6 py-4 font-semibold text-zion-blue-dark">Rating & Reviews</td>
                    {selectedServiceObjects.map((service) => (
                      <td key={service.id} className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="h-5 w-5 text-amber-500 fill-current" />
                          <span className="text-lg font-medium">{service.rating}</span>
                        </div>
                        <div className="text-sm text-gray-500">({service.reviewCount} reviews)</div>
                      </td>
                    ))}
                  </tr>

                  {/* AI Score Row */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-zion-blue-dark">AI Score</td>
                    {selectedServiceObjects.map((service) => (
                      <td key={service.id} className="px-6 py-4 text-center">
                        <div className="text-2xl font-bold text-zion-cyan">{service.aiScore}</div>
                        <div className="text-sm text-gray-500">out of 100</div>
                      </td>
                    ))}
                  </tr>

                  {/* Features Rows */}
                  {Array.from({ length: Math.max(...selectedServiceObjects.map(s => s.features.length)) }, (_, index) => (
                    <tr key={`feature-${index}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-zion-blue-dark">
                        Feature {index + 1}
                      </td>
                      {selectedServiceObjects.map((service) => (
                        <td key={service.id} className="px-6 py-4 text-center">
                          {service.features[index] ? (
                            <div className="flex items-center justify-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{service.features[index]}</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <X className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400">Not available</span>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Benefits Rows */}
                  {Array.from({ length: Math.max(...selectedServiceObjects.map(s => s.benefits.length)) }, (_, index) => (
                    <tr key={`benefit-${index}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-zion-blue-dark">
                        Benefit {index + 1}
                      </td>
                      {selectedServiceObjects.map((service) => (
                        <td key={service.id} className="px-6 py-4 text-center">
                          {service.benefits[index] ? (
                            <div className="flex items-center justify-center gap-2">
                              <Zap className="h-4 w-4 text-amber-500" />
                              <span className="text-sm">{service.benefits[index]}</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <X className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400">Not available</span>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Action Row */}
                  <tr className="bg-zion-purple/10">
                    <td className="px-6 py-4 font-semibold text-zion-blue-dark">Get Started</td>
                    {selectedServiceObjects.map((service) => (
                      <td key={service.id} className="px-6 py-4 text-center">
                        <div className="space-y-2">
                          <Link to="/request-quote">
                            <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                              Get Quote
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button size="sm" variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                              Contact Us
                            </Button>
                          </Link>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white/10 rounded-2xl p-8 border border-zion-blue-light">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you find the perfect solution for your business needs. 
              Get personalized recommendations and custom quotes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Get Expert Advice
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}