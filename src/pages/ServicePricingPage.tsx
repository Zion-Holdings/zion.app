import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, TrendingUp, Phone, Mail, MapPin, Link as LinkIcon } from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from '@/data/expandedServices';
import { SEO } from '@/components/SEO';
import { TrustedBySection } from '@/components/TrustedBySection';

const pricingModelColors: Record<string, string> = {
  "subscription": "bg-blue-100 text-blue-800",
  "project-based": "bg-purple-100 text-purple-800",
  "one-time": "bg-green-100 text-green-800",
  "usage-based": "bg-orange-100 text-orange-800",
};

export default function ServicePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : EXPANDED_SERVICES.filter(s => s.category === selectedCategory);

  const handleContactClick = (serviceId: string) => {
    window.open(`https://ziontechgroup.com/contact?service=${serviceId}`, '_blank');
  };

  return (
    <>
      <SEO 
        title="Service Pricing & Plans | Zion Tech Group" 
        description="Compare pricing for all our enterprise technology services including AI automation, cybersecurity, cloud solutions, and digital transformation services."
        keywords="service pricing, enterprise technology pricing, AI services pricing, cybersecurity pricing, cloud solutions pricing"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service Pricing & Plans
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transparent pricing for all our enterprise technology services. Choose the solution that fits your budget and business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <LinkIcon className="w-5 h-5 mr-2" />
              Download Pricing Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              size="sm"
            >
              All Services
            </Button>
            {SERVICE_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                size="sm"
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Pricing Comparison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and benefits across all our services to find the perfect solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServicePricingCard key={service.id} service={service} onContactClick={handleContactClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Our Pricing Models</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer flexible pricing options to accommodate different business needs and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monthly or annual recurring payments for ongoing services and support
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Project-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fixed pricing for specific projects with defined scope and deliverables
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">One-Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Single payment for one-time services or implementations
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Usage-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pay only for what you use with scalable pricing based on consumption
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We provide exceptional value through expertise, innovation, and customer success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Expertise</h3>
              <p className="text-zion-slate-light">
                10+ years of experience delivering successful technology solutions across industries
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Competitive Pricing</h3>
              <p className="text-zion-slate-light">
                Transparent pricing with flexible options to fit your budget and business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Guaranteed Results</h3>
              <p className="text-zion-slate-light">
                We stand behind our work with satisfaction guarantees and ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team for a free consultation and customized pricing proposal. 
            We'll help you find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-dark text-white">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue/10">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4 text-zion-blue" />
                <a href="tel:+13024640950" className="text-zion-blue hover:underline">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4 text-zion-blue" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-blue hover:underline">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4 text-zion-blue" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </>
  );
}

interface ServicePricingCardProps {
  service: any;
  onContactClick: (serviceId: string) => void;
}

function ServicePricingCard({ service, onContactClick }: ServicePricingCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {service.subcategory}
          </Badge>
          {service.isNew && (
            <Badge className="bg-green-500 text-white text-xs">
              New
            </Badge>
          )}
          {service.isFeatured && (
            <Badge className="bg-yellow-500 text-white text-xs">
              Featured
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-zion-blue">
              {service.currency}{service.price.toLocaleString()}
            </span>
            <Badge className={pricingModelColors[service.pricingModel]}>
              {service.pricingModel.replace('-', ' ')}
            </Badge>
          </div>
          
          <div className="text-sm text-gray-600">
            <p><strong>Market Price:</strong> {service.marketPrice}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{service.rating}</span>
              <span className="text-gray-400">({service.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>AI Score: {service.aiScore}</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">Key Features:</p>
            <ul className="space-y-1">
              {service.features.slice(0, 3).map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1">
            {service.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardContent className="pt-0">
        <Button 
          className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white"
          onClick={() => onContactClick(service.id)}
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          Get Quote
        </Button>
      </CardContent>
    </Card>
  );
}