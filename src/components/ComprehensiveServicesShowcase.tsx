import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Zap,
  Star
} from 'lucide-react';
import { SERVICE_CATEGORIES, ComprehensiveService } from '@/data/comprehensiveServices';

interface ServiceCardProps {
  service: ComprehensiveService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPricingDisplay = (service: ComprehensiveService) => {
    switch (service.pricingModel) {
      case 'one-time':
        return `${service.currency}${service.price.toLocaleString()}`;
      case 'monthly':
        return `${service.currency}${service.price.toLocaleString()}/month`;
      case 'yearly':
        return `${service.currency}${service.price.toLocaleString()}/year`;
      case 'per-user':
        return `${service.currency}${service.price.toLocaleString()}/user`;
      case 'per-project':
        return `${service.currency}${service.price.toLocaleString()}/project`;
      default:
        return `${service.currency}${service.price.toLocaleString()}`;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
            {service.subcategory}
          </Badge>
          <Badge className={getSupportLevelColor(service.supportLevel)}>
            {service.supportLevel}
          </Badge>
        </div>
        <CardTitle className="text-white text-lg leading-tight mb-2">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Pricing */}
          <div className="bg-zion-blue-light/10 rounded-lg p-3 border border-zion-blue-light/20">
            <div className="flex items-center justify-between">
              <span className="text-zion-slate-light text-sm">Starting at</span>
              <span className="text-zion-cyan font-bold text-lg">
                {getPricingDisplay(service)}
              </span>
            </div>
            <div className="text-zion-slate-light text-xs mt-1">
              Market range: {service.marketPrice}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-zion-cyan" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-1">
              {service.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="text-zion-slate-light text-xs flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zion-cyan hover:text-zion-cyan-light text-xs p-0 h-auto"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Show less' : `+${service.features.length - 3} more features`}
                </Button>
              )}
            </div>
            {isExpanded && (
              <div className="mt-2 space-y-1">
                {service.features.slice(3).map((feature, index) => (
                  <div key={index} className="text-zion-slate-light text-xs flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-zion-cyan" />
              Benefits
            </h4>
            <div className="grid grid-cols-1 gap-1">
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="text-zion-slate-light text-xs flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery & Support */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Clock className="h-3 w-3 text-zion-cyan" />
              <span>{service.estimatedDelivery}</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Users className="h-3 w-3 text-zion-cyan" />
              <span>{service.targetAudience.length} target audiences</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {service.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light/30 text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-zion-blue-light/5 rounded-lg p-3 border border-zion-blue-light/10">
            <h4 className="text-white font-semibold text-sm mb-2">Get Started</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Phone className="h-3 w-3 text-zion-cyan" />
                <a href={`tel:${service.contactInfo.phone}`} className="text-zion-cyan hover:text-zion-cyan-light">
                  {service.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Mail className="h-3 w-3 text-zion-cyan" />
                <a href={`mailto:${service.contactInfo.email}`} className="text-zion-cyan hover:text-zion-cyan-light">
                  {service.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Globe className="h-3 w-3 text-zion-cyan" />
                <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(SERVICE_CATEGORIES[0].name);

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Tech Solutions</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our extensive portfolio of professional technology services designed to accelerate your business growth, 
            enhance security, and drive innovation across all aspects of your organization.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 bg-zion-blue-dark border border-zion-blue-light">
            {SERVICE_CATEGORIES.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="text-zion-slate-light data-[state=active]:bg-zion-purple data-[state=active]:text-white data-[state=active]:border-zion-purple"
              >
                <span className="hidden md:block">{category.icon}</span>
                <span className="text-xs md:text-sm">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Service Content */}
          {SERVICE_CATEGORIES.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.icon} {category.name}
                </h3>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Our expert team is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call +1 302 464 0950
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Mail className="h-4 w-4 mr-2" />
                Email kleber@ziontechgroup.com
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Visit ziontechgroup.com
              </Button>
            </div>
            <div className="mt-6 text-zion-slate-light text-sm">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};