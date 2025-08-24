import React, { useState } from 'react';
import { ENHANCED_SERVICES, EnhancedService } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Shield, 
  Zap,
  Phone,
  ExternalLink,
  ArrowRight,
  BarChart3
} from 'lucide-react';

interface ServicesComparisonProps {
  maxServices?: number;
  showActions?: boolean;
}

export function ServicesComparison({ maxServices = 3, showActions = true }: ServicesComparisonProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    ENHANCED_SERVICES[0]?.id,
    ENHANCED_SERVICES[1]?.id,
    ENHANCED_SERVICES[2]?.id
  ].filter(Boolean));

  const selectedServiceObjects = selectedServices
    .map(id => ENHANCED_SERVICES.find(service => service.id === id))
    .filter(Boolean) as EnhancedService[];

  const addService = (serviceId: string) => {
    if (selectedServices.length < maxServices && !selectedServices.includes(serviceId)) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter(id => id !== serviceId));
  };

  const getFeatureIcon = (hasFeature: boolean) => {
    return hasFeature ? (
      <CheckCircle className="w-5 h-5 text-green-500" />
    ) : (
      <XCircle className="w-5 h-5 text-red-500" />
    );
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'immediate': return <Zap className="w-4 h-4 text-green-500" />;
      case '1-2 weeks': return <Clock className="w-4 h-4 text-yellow-500" />;
      case '1 month': return <Clock className="w-4 h-4 text-orange-500" />;
      case 'custom': return <Clock className="w-4 h-4 text-blue-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  // Get all unique features across selected services
  const allFeatures = Array.from(new Set(
    selectedServiceObjects.flatMap(service => service.features)
  ));

  // Get all unique benefits across selected services
  const allBenefits = Array.from(new Set(
    selectedServiceObjects.flatMap(service => service.benefits)
  ));

  return (
    <div className="w-full">
      {/* Service Selection */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-semibold">Compare Services</h3>
          <Badge variant="outline">
            {selectedServices.length}/{maxServices} Selected
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedServices.map((serviceId, index) => {
            const service = ENHANCED_SERVICES.find(s => s.id === serviceId);
            if (!service) return null;

            return (
              <Card key={serviceId} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-sm">{service.title}</CardTitle>
                      <CardDescription className="text-xs">
                        {service.category} • {getPricingModelLabel(service.pricingModel)}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeService(serviceId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">
                        ${service.price.toLocaleString()}
                      </span>
                      <Badge className={getSupportLevelColor(service.supportLevel)}>
                        {service.supportLevel}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {getAvailabilityIcon(service.availability)}
                      <span>{service.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Add Service Button */}
          {selectedServices.length < maxServices && (
            <Card className="border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors">
              <CardContent className="flex items-center justify-center h-32">
                <Select onValueChange={addService}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Add Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {ENHANCED_SERVICES
                      .filter(service => !selectedServices.includes(service.id))
                      .map(service => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedServiceObjects.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-zion-blue text-white">
                <th className="p-4 text-left border-b min-w-[200px]">Features & Benefits</th>
                {selectedServiceObjects.map((service) => (
                  <th key={service.id} className="p-4 text-center border-b min-w-[250px]">
                    <div className="text-center">
                      <div className="font-semibold text-sm mb-2">{service.title}</div>
                      <div className="text-xs opacity-90">{service.category}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Pricing Row */}
              <tr className="bg-gray-50">
                <td className="p-4 font-medium border-b">Pricing</td>
                {selectedServiceObjects.map((service) => (
                  <td key={service.id} className="p-4 text-center border-b">
                    <div className="text-2xl font-bold text-green-600">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {getPricingModelLabel(service.pricingModel)}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Market: {service.marketPrice}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Rating & AI Score Row */}
              <tr>
                <td className="p-4 font-medium border-b">Rating & AI Score</td>
                {selectedServiceObjects.map((service) => (
                  <td key={service.id} className="p-4 text-center border-b">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviewCount})</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">AI Score: {service.aiScore}</span>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Support Level Row */}
              <tr className="bg-gray-50">
                <td className="p-4 font-medium border-b">Support Level</td>
                {selectedServiceObjects.map((service) => (
                  <td key={service.id} className="p-4 text-center border-b">
                    <Badge className={getSupportLevelColor(service.supportLevel)}>
                      {service.supportLevel}
                    </Badge>
                  </td>
                ))}
              </tr>

              {/* Availability Row */}
              <tr>
                <td className="p-4 font-medium border-b">Availability</td>
                {selectedServiceObjects.map((service) => (
                  <td key={service.id} className="p-4 text-center border-b">
                    <div className="flex items-center justify-center gap-2">
                      {getAvailabilityIcon(service.availability)}
                      <span className="text-sm">{service.availability}</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Features Section */}
              <tr className="bg-blue-50">
                <td className="p-4 font-bold text-blue-800 border-b" colSpan={selectedServiceObjects.length + 1}>
                  Key Features
                </td>
              </tr>
              {allFeatures.map((feature) => (
                <tr key={feature}>
                  <td className="p-4 border-b">{feature}</td>
                  {selectedServiceObjects.map((service) => (
                    <td key={service.id} className="p-4 text-center border-b">
                      {getFeatureIcon(service.features.includes(feature))}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Benefits Section */}
              <tr className="bg-green-50">
                <td className="p-4 font-bold text-green-800 border-b" colSpan={selectedServiceObjects.length + 1}>
                  Key Benefits
                </td>
              </tr>
              {allBenefits.map((benefit) => (
                <tr key={benefit}>
                  <td className="p-4 border-b">{benefit}</td>
                  {selectedServiceObjects.map((service) => (
                    <td key={service.id} className="p-4 text-center border-b">
                      {getFeatureIcon(service.benefits.includes(benefit))}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Actions Row */}
              {showActions && (
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium border-b">Actions</td>
                  {selectedServiceObjects.map((service) => (
                    <td key={service.id} className="p-4 text-center border-b">
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {selectedServiceObjects.length === 0 && (
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Services Selected</h3>
          <p className="text-gray-500 mb-4">
            Select services from the dropdown above to compare their features and pricing.
          </p>
          <Button onClick={() => addService(ENHANCED_SERVICES[0]?.id || '')}>
            <ArrowRight className="w-4 h-4 mr-2" />
            Add First Service
          </Button>
        </div>
      )}

      {/* CTA Section */}
      {selectedServiceObjects.length > 0 && (
        <div className="mt-8 text-center">
          <div className="bg-zion-blue rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Ready to Choose?</h3>
            <p className="text-zion-slate-light mb-4">
              Contact our team to discuss your specific needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <ExternalLink className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}