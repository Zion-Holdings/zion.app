import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Phone, Mail, MapPin, Globe, DollarSign, Star, Users, Shield, Zap, Building } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, PRICING_TIERS, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { SEO } from '@/components/SEO';

export default function ServicesPricingPage() {
  // Group services by category for pricing table
  const servicesByCategory = SERVICE_CATEGORIES.reduce((acc, category) => {
    const categoryServices = COMPREHENSIVE_SERVICES.filter(service => service.category === category);
    if (categoryServices.length > 0) {
      acc[category] = categoryServices;
    }
    return acc;
  }, {} as Record<string, typeof COMPREHENSIVE_SERVICES>);

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Services Pricing - Zion Tech Group" 
        description="Transparent pricing for our comprehensive micro SAAS, IT, and AI services. Competitive rates with flexible tiers for businesses of all sizes."
        keywords="pricing, micro SAAS pricing, IT services pricing, AI services pricing, Zion Tech Group"
        url="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get clear, competitive pricing for our comprehensive micro SAAS solutions. No hidden fees, no surprises - just exceptional value for your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/comprehensive-services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Building className="w-5 h-5 mr-2" />
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Flexible pricing tiers designed to scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([tierName, tier], index) => (
              <Card key={tierName} className={`bg-zion-blue border-zion-blue-light ${
                index === 1 ? 'ring-2 ring-zion-cyan scale-105' : ''
              }`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white">{tierName}</CardTitle>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.label}</div>
                  <CardDescription className="text-zion-slate-light">
                    Perfect for {tierName.toLowerCase()} businesses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white text-sm">Custom solution development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white text-sm">Technical support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white text-sm">Documentation & training</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white text-sm">Maintenance & updates</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service-Specific Pricing */}
      <div className="bg-zion-blue-dark py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Detailed pricing for individual services and solutions
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <div key={category} className="bg-zion-blue rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="bg-zion-blue-dark rounded-lg p-4 border border-zion-blue-light">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-medium">{service.title}</h4>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan text-xs">
                          {service.pricingTier}
                        </Badge>
                      </div>
                      <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-zion-cyan" />
                          <span className="text-white font-semibold">
                            {service.price?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Competitive Pricing",
                description: "Market-leading rates without compromising on quality or features"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "No Hidden Fees",
                description: "Transparent pricing with clear breakdowns of all costs"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Flexible Plans",
                description: "Customizable solutions that grow with your business needs"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Proven ROI",
                description: "Measurable business outcomes and return on investment"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zion-cyan text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote tailored to your specific business requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}