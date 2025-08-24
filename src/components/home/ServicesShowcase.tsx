import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { 
  Brain, 
  Cloud, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

const categoryIcons = {
  'AI Services': <Brain className="w-6 h-6" />,
  'IT Services': <Cloud className="w-6 h-6" />,
  'Innovative Solutions': <Zap className="w-6 h-6" />
};

const categoryColors = {
  'AI Services': 'from-purple-500 to-indigo-600',
  'IT Services': 'from-blue-500 to-cyan-600',
  'Innovative Solutions': 'from-green-500 to-emerald-600'
};

export function ServicesShowcase() {
  const featuredServices = COMPREHENSIVE_SERVICES.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Technology Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our cutting-edge AI services, IT solutions, and innovative technology services 
            designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors]} flex items-center justify-center`}>
                    <div className="text-white">
                      {categoryIcons[service.category as keyof typeof categoryIcons]}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-zion-purple/10 text-zion-purple border-zion-purple/20">
                    {service.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-3 text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Pricing */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-purple">
                    ${service.price?.toLocaleString()}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                  <Link to={`/micro-saas-services#${service.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our expert team can create tailored technology solutions that perfectly fit your business needs. 
              Get in touch for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-purple hover:underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}