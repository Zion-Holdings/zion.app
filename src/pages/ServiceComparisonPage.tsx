import React, { useState, useEffect } from 'react';
import { EXPANDED_SERVICES, ExpandedService } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Star, 
  Clock, 
  Shield, 
  Zap, 
  TrendingUp,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  X,
  BarChart3,
  DollarSign,
  Users,
  Sparkles
} from 'lucide-react';
import Target from 'lucide-react/dist/esm/icons/target';
import { SEO } from '@/components/SEO';

export default function ServiceComparisonPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [comparisonServices, setComparisonServices] = useState<ExpandedService[]>([]);

  useEffect(() => {
    const services = EXPANDED_SERVICES.filter(service => 
      selectedServices.includes(service.id)
    );
    setComparisonServices(services);
  }, [selectedServices]);

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      if (selectedServices.length < 4) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'hourly': return 'Hourly';
      case 'project': return 'Project-based';
      case 'subscription': return 'Subscription';
      case 'one-time': return 'One-time';
      default: return model;
    }
  };

  const getSupportLevelLabel = (level: string) => {
    switch (level) {
      case 'basic': return 'Basic';
      case 'premium': return 'Premium';
      case 'enterprise': return 'Enterprise';
      default: return level;
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'AI & Machine Learning': '🤖',
      'Cybersecurity': '🔒',
      'Cloud & DevOps': '☁️',
      'Data & Analytics': '📊',
      'Emerging Technologies': '🚀'
    };
    return icons[category] || '🔧';
  };

  const calculateSavings = (service: ExpandedService) => {
    const marketAvg = service.marketPrice.average;
    const ourPrice = service.price;
    const savings = ((marketAvg - ourPrice) / marketAvg) * 100;
    return savings.toFixed(0);
  };

  const getFeatureComparison = (feature: string) => {
    return comparisonServices.map(service => {
      const hasFeature = service.features.includes(feature);
      return { serviceId: service.id, hasFeature };
    });
  };

  const getCommonFeatures = () => {
    if (comparisonServices.length === 0) return [];
    
    const allFeatures = comparisonServices.flatMap(service => service.features);
    const featureCounts = allFeatures.reduce((acc, feature) => {
      acc[feature] = (acc[feature] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    
    return Object.entries(featureCounts)
      .filter(([_, count]) => count > 1)
      .sort(([_, a], [__, b]) => b - a)
      .map(([feature]) => feature);
  };

  return (
    <>
      <SEO 
        title="Service Comparison - ZionTech Group" 
        description="Compare our comprehensive range of IT and AI services side by side. Find the perfect solution for your business needs with detailed feature comparisons and pricing analysis."
        keywords="service comparison, IT services comparison, AI services comparison, pricing comparison, feature comparison, ZionTech Group"
        canonical="https://ziontechgroup.com/service-comparison"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="w-12 h-12 mr-3 text-zion-cyan" />
            <h1 className="text-5xl font-bold">Service Comparison</h1>
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Compare our comprehensive range of IT and AI services side by side. 
            Find the perfect solution for your business needs with detailed feature comparisons and pricing analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Globe className="w-5 h-5 mr-2" />
              Start Comparing
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Get Expert Advice
            </Button>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Services to Compare</h2>
            <p className="text-gray-600">
              Choose up to 4 services to compare side by side. Select the services that best fit your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {EXPANDED_SERVICES.map((service) => (
              <Card 
                key={service.id} 
                className={`cursor-pointer transition-all duration-200 ${
                  selectedServices.includes(service.id) 
                    ? 'ring-2 ring-zion-purple shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Checkbox 
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                    />
                    <Badge className="bg-zion-purple text-white text-xs">
                      {getCategoryIcon(service.category)} {service.category.split(' ')[0]}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-zion-purple font-semibold">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-gray-500">
                      {getPricingModelLabel(service.pricingModel)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedServices.length > 0 && (
            <div className="mt-6 text-center">
              <Button 
                onClick={() => setSelectedServices([])}
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-2" />
                Clear Selection
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      {comparisonServices.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Service Comparison ({comparisonServices.length} services)
            </h2>
            <p className="text-gray-600">
              Detailed comparison of selected services to help you make an informed decision
            </p>
          </div>

          {/* Service Overview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-12">
            {comparisonServices.map((service) => (
              <Card key={service.id} className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-zion-purple text-white">
                      {getCategoryIcon(service.category)} {service.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Pricing */}
                    <div className="text-center p-4 bg-gradient-to-r from-zion-blue to-zion-purple text-white rounded-lg">
                      <div className="text-3xl font-bold">{service.currency}{service.price.toLocaleString()}</div>
                      <div className="text-sm opacity-90">{getPricingModelLabel(service.pricingModel)}</div>
                      <div className="text-xs opacity-75 mt-1">
                        Save {calculateSavings(service)}% vs market average
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-gray-900">{service.deliveryTime}</div>
                        <div className="text-gray-500 text-xs">Delivery</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-gray-900">{getSupportLevelLabel(service.supportLevel)}</div>
                        <div className="text-gray-500 text-xs">Support</div>
                      </div>
                    </div>

                    {/* Market Price */}
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-sm text-gray-600 mb-1">Market Range</div>
                      <div className="font-semibold text-zion-purple">
                        {service.currency}{service.marketPrice.min.toLocaleString()} - {service.currency}{service.marketPrice.max.toLocaleString()}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Provider
                      </Button>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Email
                        </a>
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-4 text-left font-semibold text-gray-900">Features</th>
                    {comparisonServices.map((service) => (
                      <th key={service.id} className="border border-gray-200 p-4 text-center font-semibold text-gray-900">
                        {service.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getCommonFeatures().map((feature) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-4 font-medium text-gray-900">{feature}</td>
                      {comparisonServices.map((service) => (
                        <td key={service.id} className="border border-gray-200 p-4 text-center">
                          {service.features.includes(feature) ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Benefits Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits Comparison</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {comparisonServices.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Use Cases Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Use Cases & Target Audience</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {comparisonServices.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                                  <Target className="w-4 h-4 mr-2 text-zion-cyan" />
                        Use Cases
                        </h4>
                        <div className="space-y-1">
                          {service.useCases.map((useCase, index) => (
                            <div key={index} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Users className="w-4 h-4 mr-2 text-zion-cyan" />
                          Target Audience
                        </h4>
                        <div className="space-y-1">
                          {service.targetAudience.map((audience, index) => (
                            <div key={index} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                              {audience}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Service?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert consultants are here to help you select the perfect solution for your business needs. 
            Get personalized recommendations and implementation guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Get Expert Advice
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Call: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </>
  );
}