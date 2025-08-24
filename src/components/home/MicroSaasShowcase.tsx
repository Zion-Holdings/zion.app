import React from 'react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  BarChart3,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function MicroSaasShowcase() {
  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Zap className="h-6 w-6 text-zion-cyan" />;
      case 'IT Services':
        return <Shield className="h-6 w-6 text-zion-purple" />;
      case 'Business Solutions':
        return <Users className="h-6 w-6 text-zion-green" />;
      case 'Specialized Services':
        return <BarChart3 className="h-6 w-6 text-zion-orange" />;
      default:
        return <Zap className="h-6 w-6 text-zion-cyan" />;
    }
  };

  const getPricingDisplay = (service: any) => {
    if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${service.price}/year`;
    } else if (service.pricingModel === 'one-time') {
      return `${service.currency}${service.price}`;
    } else {
      return `${service.currency}${service.price}`;
    }
  };

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Micro SAAS Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Discover innovative technology solutions that drive business growth. From AI-powered tools to enterprise IT services, 
            we provide cutting-edge solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <Link to="/micro-saas-services">
                View All Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Get Consultation
              </a>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                      {service.category}
                    </Badge>
                  </div>
                  {service.featured && (
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Pricing & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-bold text-lg">
                    {getPricingDisplay(service)}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="h-3 w-3 text-zion-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <TrendingUp className="h-3 w-3 text-zion-cyan" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Level */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Support:</span>
                  <Badge variant="outline" className="border-zion-cyan text-zion-cyan text-xs">
                    {service.supportLevel}
                  </Badge>
                </div>

                {/* Free Tier Notice */}
                {service.freeTier && (
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-2 text-center">
                    <div className="text-green-400 font-medium text-xs">Free Tier Available</div>
                  </div>
                )}
              </CardContent>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                      <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Get Quote
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                      <Link to={`/micro-saas-services#${service.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">10+</div>
              <div className="text-zion-slate-light">Micro SAAS Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">40%</div>
              <div className="text-zion-slate-light">Average Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
              <div className="text-zion-slate-light">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-orange mb-2">100+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <a href="mailto:kleber@ziontechgroup.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}