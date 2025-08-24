import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  Brain, 
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Users
} from 'lucide-react';
import { expandedServiceCategories, getFeaturedServices } from '@/data/expandedServices';

export function ExpandedServicesShowcase() {
  const featuredServices = getFeaturedServices();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered chatbots to enterprise cloud solutions, we provide cutting-edge technology services 
            that drive innovation and growth for businesses of all sizes.
          </p>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.slice(0, 6).map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-zion-purple text-white">
                    Featured
                  </Badge>
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-zion-purple" />
                      <span className="text-sm font-medium">AI Score: {service.aiScore}</span>
                    </div>
                    <Badge variant="secondary">
                      {service.category}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-zion-purple">
                        ${service.pricing.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.pricing.type === 'monthly' ? '/month' : 'one-time'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">
                        {service.deliveryTime}
                      </div>
                      <div className="text-xs text-gray-500">Delivery</div>
                    </div>
                  </div>

                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Service Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expandedServiceCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 mb-6">
                    {category.services.slice(0, 3).map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm font-medium text-gray-700">{service.title}</span>
                        <Badge variant="outline" className="text-xs">
                          ${service.pricing.amount.toLocaleString()}
                        </Badge>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-sm text-zion-purple text-center">
                        +{category.services.length - 3} more services
                      </div>
                    )}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-zion-purple group-hover:text-white transition-colors">
                    View All {category.name} Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Zion Tech Group?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Brain className="h-8 w-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-First Approach</h4>
              <p className="text-gray-600 text-sm">
                Leverage the latest AI technologies to automate and optimize your business processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h4>
              <p className="text-gray-600 text-sm">
                Bank-grade security and compliance standards to protect your data and maintain trust
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Zap className="h-8 w-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Rapid Deployment</h4>
              <p className="text-gray-600 text-sm">
                Quick implementation and deployment to get your solutions up and running faster
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">
                24/7 technical support and dedicated account management for ongoing success
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-zion-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution. 
              Get in touch for a personalized consultation and quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
                Explore All Services
              </Button>
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}