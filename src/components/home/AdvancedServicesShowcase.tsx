import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { ADVANCED_SERVICES } from '@/data/advancedServices';

// Featured services for the showcase
const FEATURED_SERVICES = ADVANCED_SERVICES.filter(service => service.featured).slice(0, 6);

export function AdvancedServicesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence, cybersecurity, and digital transformation services. 
            Expert solutions designed for the modern enterprise.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-zion-blue" />
              </div>
              <h3 className="text-zion-cyan font-semibold">AI-Powered</h3>
              <p className="text-zion-slate-light text-sm">Intelligent automation & insights</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-zion-blue" />
              </div>
              <h3 className="text-zion-cyan font-semibold">Enterprise Security</h3>
              <p className="text-zion-slate-light text-sm">Bank-level protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-zion-blue" />
              </div>
              <h3 className="text-zion-cyan font-semibold">Proven Results</h3>
              <p className="text-zion-slate-light text-sm">Track record of success</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-zion-blue" />
              </div>
              <h3 className="text-zion-cyan font-semibold">Expert Team</h3>
              <p className="text-zion-slate-light text-sm">Certified professionals</p>
            </div>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURED_SERVICES.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-cyan transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                  <Badge className="bg-zion-cyan text-zion-blue text-xs">
                    Featured
                  </Badge>
                </div>
                <CardDescription className="text-zion-slate-light line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Service Details */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{service.rating} ({service.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-cyan">
                    <Brain className="w-4 h-4" />
                    <span>AI Score: {service.aiScore}</span>
                  </div>
                </div>
                
                {/* Price */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price?.toLocaleString()}
                  </div>
                  <div className="text-sm text-zion-slate-light">Starting Price</div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-zion-blue-light text-zion-blue text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* CTA */}
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <div className="text-2xl mb-2">🤖</div>
              <h4 className="text-zion-cyan font-semibold">AI Automation</h4>
              <p className="text-zion-slate-light text-sm">Business process automation</p>
            </div>
            
            <div className="text-center p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="text-zion-cyan font-semibold">Cybersecurity</h4>
              <p className="text-zion-slate-light text-sm">Threat detection & compliance</p>
            </div>
            
            <div className="text-center p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <div className="text-2xl mb-2">☁️</div>
              <h4 className="text-zion-cyan font-semibold">Cloud & DevOps</h4>
              <p className="text-zion-slate-light text-sm">Optimization & automation</p>
            </div>
            
            <div className="text-center p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="text-zion-cyan font-semibold">Data & Analytics</h4>
              <p className="text-zion-slate-light text-sm">Intelligent insights</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-zion-blue-dark rounded-2xl p-8 border border-zion-blue-light max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get in touch with our experts to discuss your specific needs and discover how our AI and IT solutions can drive your business forward.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                Get Free Consultation
              </Button>
              <Link to="/advanced-services">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="text-zion-slate-light text-sm">
              <p>Call us: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p className="mt-1">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-dark"
                >
                  ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}