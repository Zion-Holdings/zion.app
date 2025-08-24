import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Database, 
  TrendingUp, 
  Circle, 
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';

const featuredServices = MICRO_SAAS_SERVICES.slice(0, 6);

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI Services':
      return <Zap className="w-6 h-6" />;
    case 'Analytics':
      return <BarChart3 className="w-6 h-6" />;
    case 'Security':
      return <Shield className="w-6 h-6" />;
    case 'Cloud Services':
      return <Globe className="w-6 h-6" />;
    case 'Data Services':
      return <Database className="w-6 h-6" />;
    case 'Marketing':
      return <TrendingUp className="w-6 h-6" />;
    case 'Productivity':
      return <Circle className="w-6 h-6" />;
    default:
      return <Zap className="w-6 h-6" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI Services':
      return 'from-purple-500 to-pink-500';
    case 'Analytics':
      return 'from-blue-500 to-cyan-500';
    case 'Security':
      return 'from-red-500 to-orange-500';
    case 'Cloud Services':
      return 'from-indigo-500 to-purple-500';
    case 'Data Services':
      return 'from-green-500 to-emerald-500';
    case 'Marketing':
      return 'from-yellow-500 to-orange-500';
    case 'Productivity':
      return 'from-teal-500 to-blue-500';
    default:
      return 'from-gray-500 to-slate-500';
  }
};

export function MicroSaasShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-zion-cyan/5 to-zion-purple/5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Micro SAAS Solutions
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with cutting-edge micro SAAS services. From AI-powered solutions to enterprise-grade security, 
            we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/80 backdrop-blur-md border-zion-purple/30 hover:border-zion-purple/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 group hover:-translate-y-2">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 to-transparent"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      AI Score: {service.aiScore}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="bg-zion-blue-light/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-slate-light text-sm">Starting at</span>
                    <span className="text-zion-cyan font-bold text-lg">
                      {service.pricing.currency}{service.pricing.monthly}/mo
                    </span>
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {service.pricing.currency}{service.pricing.yearly}/year (save {Math.round((1 - service.pricing.yearly / (service.pricing.monthly * 12)) * 100)}%)
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm">
                    {service.rating} ({service.reviewCount} reviews)
                  </span>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-3xl p-8 border border-zion-purple/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/micro-saas-services">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}