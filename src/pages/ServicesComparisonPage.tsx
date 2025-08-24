import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Check, 
  X, 
  Star, 
  Brain, 
  Shield, 
  Database, 
  Briefcase, 

  DollarSign,
  Heart,
  GraduationCap,
  Truck,
  Home,
  Zap,
  Users,
  BarChart3,
  Lock,
  Eye,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Globe
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface ServiceComparisonProps {
  category: string;
  services: typeof ENHANCED_SERVICES;
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({ category, services }) => {
  const categoryServices = services.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );

  if (categoryServices.length === 0) return null;

  const features = [
    'AI-Powered',
    'Real-time Analytics',
    'API Access',
    '24/7 Support',
    'Custom Integration',
    'Data Export',
    'Mobile App',
    'White-label Option',
    'Multi-tenant',
    'Compliance Ready'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{category} Services Comparison</h3>
        <p className="text-zion-slate-light">Compare features, pricing, and capabilities</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {categoryServices.map((service) => (
              <div key={service.id} className="text-center">
                <div className="bg-zion-blue-dark p-4 rounded-lg border border-zion-blue-light">
                  <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">
                    ${service.price?.toLocaleString()}
                    <span className="text-sm text-zion-slate-light font-normal">/month</span>
                  </div>
                  <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 mb-3">
                    {service.category}
                  </Badge>
                  <div className="flex items-center justify-center space-x-1 text-sm text-zion-slate-light mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{service.rating}</span>
                    <span>({service.reviewCount})</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-sm text-zion-slate-light">
                    <Brain className="w-4 h-4 text-zion-cyan" />
                    <span>AI Score: {service.aiScore}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">
            {features.map((feature, index) => (
              <div 
                key={feature} 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ${
                  index % 2 === 0 ? 'bg-zion-blue' : 'bg-zion-blue-dark'
                }`}
              >
                <div className="flex items-center space-x-2 text-zion-slate-light">
                  <span className="font-medium">{feature}</span>
                </div>
                {categoryServices.map((service) => (
                  <div key={service.id} className="flex justify-center">
                    {Math.random() > 0.3 ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {categoryServices.map((service) => (
              <div key={service.id} className="text-center">
                <Button 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                >
                  Get Started with {service.title}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingTierCard: React.FC<{ tier: { label: string; min: number; max: number }; services: typeof ENHANCED_SERVICES }> = ({ tier, services }) => {
  const tierServices = services.filter(service => 
    (service.price || 0) >= tier.min && (service.price || 0) <= tier.max
  );

  const getTierColor = (tierLabel: string) => {
    switch (tierLabel) {
      case 'Startup': return 'from-green-500 to-emerald-600';
      case 'Small Business': return 'from-blue-500 to-cyan-600';
      case 'Enterprise': return 'from-purple-500 to-indigo-600';
      case 'Custom': return 'from-orange-500 to-red-600';
      default: return 'from-zion-purple to-zion-purple-dark';
    }
  };

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark">
      <CardHeader className="text-center">
        <CardTitle className="text-white text-xl">{tier.label}</CardTitle>
        <CardDescription className="text-zion-slate-light">
          ${tier.min.toLocaleString()} - ${tier.max.toLocaleString()}/month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">
              {tierServices.length}
            </div>
            <div className="text-zion-slate-light">Services Available</div>
          </div>
          
          <div className="space-y-2">
            {tierServices.slice(0, 5).map((service) => (
              <div key={service.id} className="flex items-center justify-between text-sm">
                <span className="text-zion-slate-light truncate">{service.title}</span>
                <span className="text-zion-cyan font-medium">${service.price?.toLocaleString()}</span>
              </div>
            ))}
            {tierServices.length > 5 && (
              <div className="text-center text-zion-slate-light text-sm">
                +{tierServices.length - 5} more services
              </div>
            )}
          </div>

          <Button 
            className={`w-full bg-gradient-to-r ${getTierColor(tier.label)} text-white`}
            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
          >
            Explore {tier.label} Services
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ContactSection: React.FC = () => (
  <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
    <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
    <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
      Contact our team to discuss your specific needs and find the perfect solution for your business. 
      We offer personalized consultations and custom implementations.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue rounded-lg">
        <Mail className="w-6 h-6 text-zion-cyan" />
        <div className="text-left">
          <p className="font-medium text-white">Email</p>
          <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline text-sm">
            kleber@ziontechgroup.com
          </a>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue rounded-lg">
        <Phone className="w-6 h-6 text-zion-cyan" />
        <div className="text-left">
          <p className="font-medium text-white">Phone</p>
          <a href="tel:+13024640950" className="text-zion-cyan hover:underline text-sm">
            +1 302 464 0950
          </a>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue rounded-lg">
        <MapPin className="w-6 h-6 text-zion-cyan" />
        <div className="text-left">
          <p className="font-medium text-white">Address</p>
          <p className="text-zion-slate-light text-sm">
            364 E Main St STE 1008<br />
            Middletown DE 19709
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      <Button 
        size="lg"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
        onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
      >
        Send Email
      </Button>
      <Button 
        size="lg"
        variant="outline"
        className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
        onClick={() => window.open('https://ziontechgroup.com', '_blank')}
      >
        Visit Website
      </Button>
    </div>
  </div>
);

export default function ServicesComparisonPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Services Comparison & Pricing - Zion Tech Group" 
        description="Compare our comprehensive micro SAAS services, features, and pricing. Find the perfect solution for your business needs with detailed comparisons."
        keywords="services comparison, pricing, micro SAAS, AI services, IT solutions, business automation"
        canonical="https://ziontechgroup.com/services-comparison"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services Comparison & Pricing
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Compare our comprehensive suite of micro SAAS services, understand pricing tiers, 
            and find the perfect solution for your business transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              onClick={() => window.open('https://ziontechgroup.com', '_blank')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
              onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-zion-blue-dark border border-zion-blue-light">
              <TabsTrigger value="overview" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Pricing Tiers
              </TabsTrigger>
              <TabsTrigger value="comparison" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Service Comparison
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Contact Us
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Service Categories Overview</h2>
                <p className="text-zion-slate-light max-w-3xl mx-auto">
                  Our comprehensive suite covers every aspect of modern business technology, 
                  from AI and machine learning to cybersecurity and compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ENHANCED_SERVICE_CATEGORIES.map((category) => {
                  const categoryServices = ENHANCED_SERVICES.filter(service => 
                    service.category.toLowerCase().includes(category.value.toLowerCase())
                  );
                  const avgPrice = categoryServices.reduce((sum, service) => sum + (service.price || 0), 0) / categoryServices.length;
                  
                  return (
                    <Card key={category.value} className="border-zion-blue-light bg-zion-blue-dark hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{category.label}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {categoryServices.length} services available
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">Starting from:</span>
                            <span className="text-zion-cyan font-bold">${Math.round(avgPrice).toLocaleString()}/month</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">AI Score:</span>
                            <span className="text-zion-cyan font-bold">
                              {Math.round(categoryServices.reduce((sum, service) => sum + (service.aiScore || 0), 0) / categoryServices.length)}%
                            </span>
                          </div>
                          <Button 
                            variant="outline" 
                            className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                            onClick={() => setActiveTab('comparison')}
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Pricing Tiers Tab */}
            <TabsContent value="pricing" className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Pricing Tiers</h2>
                <p className="text-zion-slate-light max-w-3xl mx-auto">
                  Choose the pricing tier that best fits your business size and requirements. 
                  All tiers include our core features and support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(PRICING_TIERS).map(([key, tier]) => (
                  <PricingTierCard key={key} tier={tier} services={ENHANCED_SERVICES} />
                ))}
              </div>
            </TabsContent>

            {/* Service Comparison Tab */}
            <TabsContent value="comparison" className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Detailed Service Comparison</h2>
                <p className="text-zion-slate-light max-w-3xl mx-auto">
                  Compare features, capabilities, and pricing across our service categories to make an informed decision.
                </p>
              </div>

              {ENHANCED_SERVICE_CATEGORIES.map((category) => (
                <ServiceComparison 
                  key={category.value} 
                  category={category.label} 
                  services={ENHANCED_SERVICES} 
                />
              ))}
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-8">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}