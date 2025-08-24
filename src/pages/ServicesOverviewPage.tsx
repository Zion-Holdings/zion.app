import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Clock,
  DollarSign,
  Users,
  CheckCircle
} from 'lucide-react';
import { expandedServiceCategories, getFeaturedServices } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ServicesOverviewPage() {
  const featuredServices = getFeaturedServices();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Complete Tech Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            From AI-powered chatbots to enterprise cloud solutions, we provide comprehensive technology services 
            that drive innovation and growth for businesses of all sizes.
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
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and highly-rated services that deliver exceptional value and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
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

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
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
                      <div className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
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
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expandedServiceCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Popular Services:</h4>
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
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Brain className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-First Approach</h3>
              <p className="text-zion-slate-light">
                Leverage the latest AI technologies to automate, optimize, and innovate your business processes
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-grade security and compliance standards to protect your data and maintain trust
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Zap className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Quick implementation and deployment to get your solutions up and running faster
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-zion-slate-light">
                24/7 technical support and dedicated account management for ongoing success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Competitive pricing with flexible options to fit your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$450</div>
              <div className="text-lg text-gray-600 mb-4">Starting Monthly</div>
              <p className="text-gray-500">
                Perfect for small businesses and startups looking to implement AI and automation solutions
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$8,500</div>
              <div className="text-lg text-gray-600 mb-4">Average Project</div>
              <p className="text-gray-500">
                Comprehensive solutions for medium-sized businesses requiring custom development
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$25,000+</div>
              <div className="text-lg text-gray-600 mb-4">Enterprise Solutions</div>
              <p className="text-gray-500">
                Large-scale implementations for enterprise clients with complex requirements
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All prices include setup, training, and initial support
            </p>
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your business. 
            Get in touch for a free consultation and personalized quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
              View Portfolio
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zion-slate-light">
            <div>
              <h3 className="font-semibold text-white mb-2">Contact Information</h3>
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}