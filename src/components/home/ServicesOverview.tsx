import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Zap, Shield, Database, Code, Smartphone, Link as LinkIcon, Settings, BarChart3 } from 'lucide-react';

const getCategoryIcon = (icon: string) => {
  return <span className="text-4xl">{icon}</span>;
};

const getCategoryFeatures = (categoryName: string) => {
  const features = {
    "AI & Machine Learning": ["Custom AI Models", "NLP Solutions", "Computer Vision", "Predictive Analytics"],
    "Cloud & DevOps": ["Multi-Cloud Migration", "Kubernetes Management", "CI/CD Automation", "Infrastructure as Code"],
    "Cybersecurity": ["Penetration Testing", "Zero Trust Security", "SOC Setup", "Security Audits"],
    "Data & Analytics": ["Real-time Streaming", "BI Dashboards", "Data Warehouse Optimization", "Big Data Processing"],
    "Web & Mobile Development": ["Progressive Web Apps", "Cross-platform Apps", "E-commerce Platforms", "Custom Solutions"],
    "Blockchain & Web3": ["Smart Contracts", "NFT Marketplaces", "DeFi Protocols", "DApp Development"],
    "IoT & Hardware Integration": ["IoT Platforms", "Hardware APIs", "Device Management", "Sensor Integration"],
    "Business Process Automation": ["Workflow Automation", "Document Management", "Process Optimization", "Integration Services"]
  };
  
  return features[categoryName as keyof typeof features] || [];
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            From cutting-edge AI solutions to enterprise-grade infrastructure, we deliver professional 
            services that drive business growth and digital transformation.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICE_CATEGORIES.map((category) => (
            <Card key={category.name} className="bg-white/10 border-zion-blue-light text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mb-4">{getCategoryIcon(category.icon)}</div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan mb-3">
                  {category.count} Services
                </Badge>
                <div className="text-sm text-zion-slate-light">
                  Starting from $3,200
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services Preview */}
        <div className="bg-white/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Featured Services</h3>
            <p className="text-zion-slate-light">
              Explore our most popular and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Chatbot Service */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark">AI Chatbot Development</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Intelligent chatbots with NLP capabilities for customer service automation
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-zion-purple">$3,500</div>
                <Badge className="bg-green-100 text-green-800">Popular</Badge>
              </div>
            </div>

            {/* Cybersecurity Service */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark">Penetration Testing</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-sm text-gray-600">4.9 (267 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive security assessment and vulnerability testing
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-zion-purple">$6,800</div>
                <Badge className="bg-red-100 text-red-800">High Demand</Badge>
              </div>
            </div>

            {/* Cloud Migration Service */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark">Multi-Cloud Migration</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-sm text-gray-600">4.8 (203 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Strategic migration across multiple cloud providers for optimal performance
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-zion-purple">$8,500</div>
                <Badge className="bg-blue-100 text-blue-800">Enterprise</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Service Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
            <p className="text-zion-slate-light">Quick turnaround times without compromising quality</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Enterprise Security</h4>
            <p className="text-zion-slate-light">Bank-level security and compliance standards</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
            <p className="text-zion-slate-light">Track record of successful implementations</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p className="text-zion-slate-light">Round-the-clock technical support and maintenance</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 rounded-2xl p-8 border border-zion-blue-light">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Zion Tech Group for their digital transformation needs. 
              Get started with a free consultation and discover how our services can drive your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/expanded-services">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Explore All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">📞</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">🌐</span>
              <span>ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}