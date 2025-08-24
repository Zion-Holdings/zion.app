import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ADVANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/advancedServices';
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Users, 
  ShoppingCart,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

export function AdvancedServicesShowcase() {
  // Get featured services
  const featuredServices = ADVANCED_SERVICES.filter(service => service.featured).slice(0, 6);
  
  // Get top categories
  const topCategories = SERVICE_CATEGORIES.slice(0, 4);

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => 
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category?.icon || '🚀';
  };

  const getCategoryColor = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => 
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zion-blue mb-6">
            Advanced AI & IT Solutions
          </h2>
          <p className="text-xl text-zion-slate-dark max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI-powered services, 
            cybersecurity solutions, and cutting-edge technology services designed for the modern enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
              <Link to="/advanced-services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
              <TrendingUp className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {topCategories.map((category) => (
            <Link key={category.id} to={`/advanced-services?category=${category.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <CardTitle className="text-lg text-zion-blue group-hover:text-zion-cyan transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-zion-slate-dark">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-zion-blue text-center mb-12">
            Featured Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-cyan text-zion-blue">
                    Featured
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded text-sm">
                      <Brain className="w-4 h-4 text-zion-cyan mr-1" />
                      {service.aiScore}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}
                    >
                      {getCategoryIcon(service.category)} {service.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-blue">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-zion-slate-dark">per month</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-dark">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue group-hover:bg-zion-blue group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-zion-blue rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Why Choose Our Advanced Services?
            </h3>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              solutions that drive real business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-semibold mb-2">AI-First Approach</h4>
              <p className="text-zion-slate-light text-sm">
                Built from the ground up with artificial intelligence at the core of every solution
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light text-sm">
                Bank-level security with SOC 2 compliance and advanced threat protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Rapid Implementation</h4>
              <p className="text-zion-slate-light text-sm">
                Get up and running in days, not months, with our pre-built solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Support</h4>
              <p className="text-zion-slate-light text-sm">
                24/7 support from certified AI and IT professionals
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <CheckCircle className="w-5 h-5 mr-2" />
              Start Your Free Trial
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-zion-blue mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-dark mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations 
            with our AI-powered solutions. Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
              <Link to="/advanced-services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
              <TrendingUp className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}