import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Star, Clock, Globe, Users, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';

const ServiceComparisonPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = ENHANCED_SERVICES.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else if (selectedServices.length < 4) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const selectedServiceObjects = ENHANCED_SERVICES.filter(service => 
    selectedServices.includes(service.id)
  );

  const allFeatures = Array.from(new Set(
    selectedServiceObjects.flatMap(service => service.features)
  )).sort();

  const getFeatureValue = (service: any, feature: string) => {
    if (service.features.includes(feature)) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    return <XCircle className="w-5 h-5 text-red-500" />;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return '🧠';
      case 'Cybersecurity': return '🛡️';
      case 'Cloud & DevOps': return '☁️';
      case 'Data & Analytics': return '📊';
      case 'Blockchain & Web3': return '⚡';
      case 'IoT & Edge Computing': return '👁️';
      case 'Quantum Computing': return '🧠';
      case 'AR/VR & Metaverse': return '👁️';
      case 'Green Tech & Sustainability': return '🌱';
      case 'FinTech & Digital Banking': return '💰';
      default: return '⚡';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark">
      <SEO 
        title="Service Comparison - Zion Tech Group" 
        description="Compare our technology services side by side. Find the perfect solution for your business needs with detailed feature comparisons."
        keywords="service comparison, technology services, AI services, cybersecurity, cloud solutions"
        canonical="https://ziontechgroup.com/service-comparison"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Service
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Comparison
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Compare our technology services side by side to find the perfect solution for your business. 
            Make informed decisions with detailed feature comparisons and pricing analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Start Comparison
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              Download Comparison Chart
            </Button>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Filter by Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {ENHANCED_SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Selected Services</label>
              <div className="text-zion-cyan">
                {selectedServices.length}/4 services selected
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Actions</label>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                  onClick={() => setSelectedServices([])}
                >
                  Clear All
                </Button>
                <Button 
                  variant="outline" 
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                  onClick={() => setSelectedServices(filteredServices.slice(0, 4).map(s => s.id))}
                >
                  Select All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Selection Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Select Services to Compare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className={`cursor-pointer transition-all duration-300 ${
                selectedServices.includes(service.id)
                  ? 'bg-zion-purple/20 border-zion-purple/50 shadow-lg shadow-zion-purple/20'
                  : 'bg-zion-blue-dark/50 border-zion-blue-light hover:border-zion-purple/30'
              }`}
              onClick={() => handleServiceToggle(service.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-zion-cyan">
                    <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                    <span className="text-sm font-medium">{service.category}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    selectedServices.includes(service.id)
                      ? 'bg-zion-purple border-zion-purple'
                      : 'border-zion-blue-light'
                  }`}>
                    {selectedServices.includes(service.id) && (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-lg text-white mb-2 line-clamp-2">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-medium">{service.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Clock className="w-4 h-4" />
                    <span>
                      {service.availability === 'immediate' ? 'Available Now' :
                       service.availability === 'within-week' ? 'Within 1 Week' :
                       service.availability === 'within-month' ? 'Within 1 Month' : 'Contact Us'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-zion-slate-light">
                    <Globe className="w-4 h-4" />
                    {service.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedServiceObjects.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-white mb-6">Service Comparison</h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-3"></div>
                {selectedServiceObjects.map((service, index) => (
                  <div key={service.id} className="col-span-3">
                    <Card className="bg-zion-blue-dark/50 border-zion-blue-light">
                      <CardHeader className="text-center pb-2">
                        <div className="text-2xl mb-2">{getCategoryIcon(service.category)}</div>
                        <CardTitle className="text-sm text-white line-clamp-2">
                          {service.title}
                        </CardTitle>
                        <div className="text-xl font-bold text-zion-cyan">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-zion-slate-light">
                          {service.pricingModel}
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Basic Information</h3>
                </div>
                {selectedServiceObjects.map((service) => (
                  <div key={service.id} className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white">{service.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white">{service.rating}/5 ({service.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white">
                          {service.availability === 'immediate' ? 'Available Now' :
                           service.availability === 'within-week' ? 'Within 1 Week' :
                           service.availability === 'within-month' ? 'Within 1 Month' : 'Contact Us'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white">{service.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features Comparison */}
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Features</h3>
                </div>
                {selectedServiceObjects.map((service) => (
                  <div key={service.id} className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-white line-clamp-2">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits Comparison */}
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Key Benefits</h3>
                </div>
                {selectedServiceObjects.map((service) => (
                  <div key={service.id} className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                    <div className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-white line-clamp-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Use Cases</h3>
                </div>
                {selectedServiceObjects.map((service) => (
                  <div key={service.id} className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                    <div className="space-y-2">
                      {service.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          <span className="text-white line-clamp-2">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-3">Certifications</h3>
                </div>
                {selectedServiceObjects.map((service) => (
                  <div key={service.id} className="col-span-3 bg-zion-blue-dark/50 border border-zion-blue-light rounded-lg p-4">
                    <div className="space-y-2">
                      {service.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-white">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Choose Your Service?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Our team of technology experts is ready to help you implement the perfect solution 
            for your business needs. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Detailed Comparison
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light text-sm">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComparisonPage;