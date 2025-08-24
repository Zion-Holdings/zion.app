import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Zap, TrendingUp, Shield, Users } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/expandedServices';

export function ExpandedServicesPreview() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return '🤖';
      case 'Micro SAAS': return '☁️';
      case 'IT Services': return '💻';
      case 'Digital Services': return '🚀';
      default: return '⚡';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services': return 'from-purple-500 to-indigo-600';
      case 'Micro SAAS': return 'from-blue-500 to-cyan-600';
      case 'IT Services': return 'from-green-500 to-emerald-600';
      case 'Digital Services': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered automation to micro SAAS solutions, we offer a complete ecosystem of services 
            designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {SERVICE_CATEGORIES.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-zion-blue-light">
              <CardHeader className="text-center pb-4">
                <div className={`rounded-full w-20 h-20 bg-gradient-to-br ${getCategoryColor(category.name)} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-3xl">{getCategoryIcon(category.name)}</div>
                </div>
                <CardTitle className="text-xl text-zion-blue-dark">{category.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-zion-purple mb-4">
                  {category.services.length} Services
                </div>
                <Link to="/expanded-services">
                  <Button variant="outline" className="w-full group-hover:bg-zion-purple group-hover:text-white transition-colors">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-zion-blue-dark mb-8">
            Featured Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Customer Service */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl">🤖</div>
                  <Badge className="bg-blue-100 text-blue-800">AI Services</Badge>
                </div>
                <CardTitle className="text-lg text-zion-blue-dark">
                  AI-Powered Customer Service
                </CardTitle>
                <CardDescription>
                  Intelligent chatbot automation with 24/7 availability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-zion-purple">$2,500</div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="h-4 w-4 text-zion-purple" />
                    <span>AI Score: 96</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>60% cost reduction</span>
                  </div>
                </div>
                <Link to="/expanded-services">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Smart Inventory */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl">☁️</div>
                  <Badge className="bg-blue-100 text-blue-800">Micro SAAS</Badge>
                </div>
                <CardTitle className="text-lg text-zion-blue-dark">
                  Smart Inventory Management
                </CardTitle>
                <CardDescription>
                  Cloud-based inventory tracking with predictive analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-zion-purple">$299</div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.6</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="h-4 w-4 text-zion-purple" />
                    <span>AI Score: 88</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>90% stockout reduction</span>
                  </div>
                </div>
                <Link to="/expanded-services">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cloud Migration */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl">💻</div>
                  <Badge className="bg-purple-100 text-purple-800">IT Services</Badge>
                </div>
                <CardTitle className="text-lg text-zion-blue-dark">
                  Cloud Migration Service
                </CardTitle>
                <CardDescription>
                  End-to-end cloud migration with cost optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-zion-purple">$8,000</div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="h-4 w-4 text-zion-purple" />
                    <span>AI Score: 93</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>30-50% cost savings</span>
                  </div>
                </div>
                <Link to="/expanded-services">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 text-zion-slate-light">
              Discover how our comprehensive tech solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/expanded-services">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
                  Explore All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}