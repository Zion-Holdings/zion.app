import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Star, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Network,
  Smartphone,
  CreditCard,
  Users,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, SERVICE_FEATURES, MARKET_PRICING } from '@/data/enhancedServices';

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? ENHANCED_SERVICES 
    : ENHANCED_SERVICES.filter(service => 
        SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.services.includes(service)
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Premier IT Services & AI Solutions Provider - Transforming Businesses Through Innovation
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-cyan-light">+1 302 464 0950</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-cyan-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            From AI-powered automation to enterprise cybersecurity, we deliver cutting-edge solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            All Services
          </Button>
          {SERVICE_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Market Analysis Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Understand the market trends, competitive landscape, and expected returns on your technology investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(MARKET_PRICING).map(([key, data]) => (
              <Card key={key} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                <CardHeader>
                  <CardTitle className="text-zion-cyan capitalize">{key.replace('-', ' ')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-zion-purple" />
                    <span className="text-white">{data.averagePrice}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span className="text-zion-cyan-light">{data.marketTrend}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-zion-cyan-light">{data.roi}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Brain className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">AI-First Approach</h3>
              <p className="text-zion-cyan-light">
                We leverage the latest AI technologies to create intelligent, scalable solutions that adapt to your business needs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-cyan-light">
                Our security-first approach ensures your data and systems are protected with industry-leading security measures.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-zion-cyan-light">
                Our certified professionals bring years of experience in delivering successful technology solutions across industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can drive your digital transformation and business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-cyan-light">
                Premier IT services and AI solutions provider helping businesses thrive in the digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>AI & Automation</p>
                <p>Cybersecurity</p>
                <p>Cloud Services</p>
                <p>Data Analytics</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="space-y-2">
                <Link to="https://ziontechgroup.com" className="flex items-center text-zion-cyan hover:text-zion-cyan-light">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </Link>
                <Button variant="outline" size="sm" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Services
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center text-zion-cyan-light">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
            {service.category}
          </Badge>
          {service.featured && (
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white">{service.rating}</span>
              <span className="text-zion-cyan-light">({service.reviewCount})</span>
            </div>
          </div>

          {/* AI Score */}
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan-light">AI Score:</span>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-zion-blue-light rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              </div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-zion-cyan-light">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Available: {service.availability}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Detailed Information */}
          {showDetails && (
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-zion-cyan/20">
              <Accordion type="single" collapsible>
                <AccordionItem value="features">
                  <AccordionTrigger className="text-zion-cyan hover:text-zion-cyan-light">
                    Features & Benefits
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-cyan-light">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Advanced AI algorithms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>24/7 support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Custom integration</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="contact">
                  <AccordionTrigger className="text-zion-cyan hover:text-zion-cyan-light">
                    Get Started
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-cyan-light">
                    <div className="space-y-3">
                      <p>Ready to implement this solution?</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-zion-cyan" />
                          <span>+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-zion-cyan" />
                          <span>kleber@ziontechgroup.com</span>
                        </div>
                      </div>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                        Schedule Consultation
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}