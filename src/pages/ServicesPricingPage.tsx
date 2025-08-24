import React, { useState } from 'react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Clock, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Eye,
  Brain,
  Cloud,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const categoryIcons = {
  'AI Services': <Brain className="w-5 h-5" />,
  'IT Services': <Cloud className="w-5 h-5" />,
  'Innovative Solutions': <Zap className="w-5 h-5" />
};

const categoryColors = {
  'AI Services': 'from-purple-500 to-indigo-600',
  'IT Services': 'from-blue-500 to-cyan-600',
  'Innovative Solutions': 'from-green-500 to-emerald-600'
};

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price}/month`;
    if (model === 'yearly') return `$${price}/year`;
    if (model === 'per-user') return `$${price}/user`;
    if (model === 'usage-based') return `$${price}/usage`;
    return `$${price}`;
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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services Pricing & Comparison - Zion Tech Group" 
        description="Compare our comprehensive range of AI services, IT solutions, and innovative technology services. Find the perfect solution for your business needs with transparent pricing."
        keywords="services pricing, AI services pricing, IT solutions pricing, technology services cost, service comparison"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services Pricing & Comparison
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transparent pricing for all our technology services. Compare features, benefits, and costs 
            to find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-purple hover:bg-zion-purple-dark"
            >
              All Services
            </Button>
            {Object.keys(categoryIcons).map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}
              >
                {categoryIcons[category as keyof typeof categoryIcons]}
                <span className="ml-2">{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our services side by side to find the perfect solution for your business needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-zion-blue text-white">
                  <TableHead className="text-white font-semibold">Service</TableHead>
                  <TableHead className="text-white font-semibold text-center">Category</TableHead>
                  <TableHead className="text-white font-semibold text-center">Pricing</TableHead>
                  <TableHead className="text-white font-semibold text-center">Features</TableHead>
                  <TableHead className="text-white font-semibold text-center">Support</TableHead>
                  <TableHead className="text-white font-semibold text-center">Setup Time</TableHead>
                  <TableHead className="text-white font-semibold text-center">Rating</TableHead>
                  <TableHead className="text-white font-semibold text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <TableRow key={service.id} className="hover:bg-gray-50">
                    <TableCell className="py-6">
                      <div className="flex items-start gap-3">
                        <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors]} flex items-center justify-center`}>
                          <div className="text-white">
                            {categoryIcons[service.category as keyof typeof categoryIcons]}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                          {service.freeTrial && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs mt-2">
                              {service.freeTrialDays}-day free trial
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-zion-purple/10 text-zion-purple border-zion-purple/20">
                        {service.category}
                      </Badge>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="text-lg font-bold text-zion-purple">
                        {formatPrice(service.price, service.pricingModel)}
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="text-sm text-gray-600">
                        <div className="font-medium mb-2">Top Features:</div>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center justify-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 mt-1">
                            +{service.features.length - 3} more
                          </div>
                        )}
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <Badge variant="secondary" className={getSupportLevelColor(service.supportLevel)}>
                        {service.supportLevel}
                      </Badge>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.setupTime}</span>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviewCount})</span>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="space-y-2">
                        <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                          Get Started
                        </Button>
                        <div className="flex gap-1">
                          {service.website && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          )}
                          {service.demoUrl && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <Eye className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Detailed Service Cards */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Detailed Service Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get detailed information about each service including features, benefits, use cases, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors]} flex items-center justify-center`}>
                      <div className="text-white">
                        {categoryIcons[service.category as keyof typeof categoryColors]}
                      </div>
                    </div>
                    <Badge variant="secondary" className={getSupportLevelColor(service.supportLevel)}>
                      {service.supportLevel}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Pricing */}
                  <div className="mb-4 p-3 bg-zion-purple/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    {service.freeTrial && (
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {service.freeTrialDays}-day free trial
                      </div>
                    )}
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="w-4 h-4" />
                        <span>{service.author.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                      Contact for Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our expert team is ready to help you implement the perfect technology solution. 
            Get in touch for a free consultation and discover how we can accelerate your digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="text-white hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}