import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe, 
  Building, 
  BarChart3, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock
} from 'lucide-react';

const featuredServices = [
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Platform",
    description: "Custom AI chatbot solution with enterprise-grade security, multi-language support, and seamless CRM integration.",
    category: "AI Services",
    price: 2999,
    rating: 4.9,
    reviewCount: 156,
    features: ["Multi-language Support", "CRM Integration", "Analytics Dashboard", "24/7 Support"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization",
    description: "End-to-end cloud migration services for AWS, Azure, and Google Cloud with cost optimization and security.",
    category: "IT Services",
    price: 4999,
    rating: 4.8,
    reviewCount: 127,
    features: ["Multi-cloud Support", "Cost Optimization", "Security Implementation", "Performance Tuning"],
    icon: <Shield className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "workflow-automation-platform",
    title: "Business Workflow Automation",
    description: "Intelligent workflow automation platform that streamlines business processes and improves operational efficiency.",
    category: "Business Solutions",
    price: 2499,
    rating: 4.8,
    reviewCount: 167,
    features: ["Process Automation", "Integration APIs", "Real-time Monitoring", "Custom Workflows"],
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-emerald-500 to-green-600"
  },
  {
    id: "ecommerce-ai-optimization",
    title: "E-commerce AI Optimization Suite",
    description: "AI-powered e-commerce optimization including personalized recommendations, dynamic pricing, and customer behavior analysis.",
    category: "Digital Solutions",
    price: 3999,
    rating: 4.9,
    reviewCount: 89,
    features: ["Personalized Recommendations", "Dynamic Pricing", "Inventory Management", "Customer Analytics"],
    icon: <Globe className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600"
  }
];

const serviceCategories = [
  {
    name: "AI Services",
    description: "Machine Learning, NLP, Computer Vision",
    icon: <Zap className="w-8 h-8" />,
    count: 15,
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "IT Services",
    description: "Cloud, Security, DevOps, Infrastructure",
    icon: <Shield className="w-8 h-8" />,
    count: 12,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Business Solutions",
    description: "Automation, Process Optimization, Analytics",
    icon: <TrendingUp className="w-8 h-8" />,
    count: 18,
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "Specialized Solutions",
    description: "Healthcare, FinTech, Manufacturing",
    icon: <Building className="w-8 h-8" />,
    count: 10,
    color: "from-red-500 to-pink-600"
  }
];

export function ComprehensiveServicesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Solutions
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transform your business with our innovative, scalable, and cost-effective micro SAAS services. 
            From AI-powered automation to enterprise-grade security, we deliver solutions that drive real results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services-pricing">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Featured Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white leading-tight group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xl font-bold text-white">
                        {service.price?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to="/comprehensive-services">
                    <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Service Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <Link key={index} to="/comprehensive-services">
                <div className="group block">
                  <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                    <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-zion-slate-light mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-medium">{category.count} Services</span>
                      <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SAAS Solutions?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Scalable & Flexible",
                description: "Start small and scale up as your business grows. Our solutions adapt to your changing needs."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-level security and compliance standards for all our solutions and services."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven ROI",
                description: "Track record of delivering measurable business outcomes and rapid return on investment."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Rapid Deployment",
                description: "Get up and running quickly with our pre-built solutions and expert implementation support."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "24/7 technical support and dedicated account management for enterprise clients."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Continuous Innovation",
                description: "Regular updates and new features to keep you ahead of the competition."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light bg-zion-blue-dark">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-semibold mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-cyan text-lg mb-8">
              Join hundreds of businesses already using our micro SAAS solutions to drive innovation and growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/comprehensive-services">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}