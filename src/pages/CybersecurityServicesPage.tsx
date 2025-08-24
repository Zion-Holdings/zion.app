import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BookOpen,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Lightbulb,
  Lock,
  Eye,
  AlertTriangle,
  Server,
  Network,
  Key,
  ShieldCheck
} from 'lucide-react';
import { EXPANDED_SERVICES, type ExpandedService } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function CybersecurityServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filter only security services
  const securityServices = EXPANDED_SERVICES.filter(service => 
    service.category === 'Security Services'
  );

  const filteredServices = securityServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = service.price < 500;
    else if (priceRange === 'medium') matchesPrice = service.price >= 500 && service.price < 1000;
    else if (priceRange === 'high') matchesPrice = service.price >= 1000;
    
    return matchesSearch && matchesSubcategory && matchesPrice;
  });

  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'monthly': return <Clock className="w-4 h-4" />;
      case 'hourly': return <Zap className="w-4 h-4" />;
      case 'project-based': return <Zap className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getPricingModelText = (model: string) => {
    switch (model) {
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return 'One-time';
    }
  };

  const getSubcategoryIcon = (subcategory: string) => {
    switch (subcategory) {
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Compliance': return <ShieldCheck className="w-5 h-5" />;
      case 'Penetration Testing': return <Eye className="w-5 h-5" />;
      case 'Security Audits': return <Server className="w-5 h-5" />;
      case 'Incident Response': return <AlertTriangle className="w-5 h-5" />;
      default: return <Lock className="w-5 h-5" />;
    }
  };

  const securitySubcategories = [
    'Cybersecurity',
    'Compliance',
    'Penetration Testing',
    'Security Audits',
    'Incident Response'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-red-600 to-red-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Shield className="w-20 h-20 text-white mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity & Compliance
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Protect your business with enterprise-grade cybersecurity solutions and automated compliance management. 
            Stay ahead of threats and maintain regulatory compliance with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-800 hover:bg-zion-slate-light">
                <Mail className="w-5 h-5 mr-2" />
                Security Assessment
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Security Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Capabilities Overview */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security Capabilities</h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive cybersecurity and compliance solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securitySubcategories.map((subcategory) => {
              const icon = getSubcategoryIcon(subcategory);
              const services = securityServices.filter(s => s.subcategory === subcategory);
              const avgPrice = services.length > 0 ? 
                Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length) : 0;
              
              return (
                <Card key={subcategory} className="bg-zion-blue-dark border-zion-blue-light hover:border-red-500/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {icon}
                      </div>
                    </div>
                    <CardTitle className="text-white">{subcategory}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {services.length} service{services.length !== 1 ? 's' : ''} available
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">
                        From ${avgPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        Starting price
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search security services, compliance, or threats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Security Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Security Categories</SelectItem>
                {securitySubcategories.map(sub => (
                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full lg:w-32 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $500</SelectItem>
                <SelectItem value="medium">$500 - $1K</SelectItem>
                <SelectItem value="high">Over $1K</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} Security Services Found
            </h2>
            <p className="text-zion-slate-light">
              Discover comprehensive security solutions to protect your business and maintain compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-red-500/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-red-500/20 text-red-600 border-red-500/30">
                      {service.subcategory}
                    </Badge>
                    <div className="flex items-center gap-1 text-zion-slate-light">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-zion-blue mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getPricingModelIcon(service.pricingModel)}
                      <span className="text-sm text-zion-slate-light">
                        {getPricingModelText(service.pricingModel)}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}
                    </div>
                  </div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Security Score</span>
                    <Badge className="bg-gradient-to-r from-red-500 to-red-700 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      {service.aiScore}/100
                    </Badge>
                  </div>

                  {/* Features Preview */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Perfect For</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-4">
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </Link>
                    
                    <div className="flex gap-2">
                      {service.website && (
                        <a 
                          href={service.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      )}
                      
                      <Link to="/contact" className="flex-1">
                        <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-zion-blue-light">
                    <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                      {service.documentation && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>Docs</span>
                        </div>
                      )}
                      {service.support && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>Support</span>
                        </div>
                      )}
                      {service.compliance && service.compliance.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>{service.compliance.length} Compliance</span>
                        </div>
                      )}
                      {service.sla && (
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>SLA</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No security services found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all security categories</p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedSubcategory('all');
                setPriceRange('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Security Statistics */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security by the Numbers</h2>
            <p className="text-zion-slate-light text-lg">
              Our security solutions protect businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-white font-semibold">Threat Detection Rate</div>
              <div className="text-zion-slate-light text-sm">Advanced AI-powered threat detection</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-white font-semibold">Security Monitoring</div>
              <div className="text-zion-slate-light text-sm">Round-the-clock threat monitoring</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">15min</div>
              <div className="text-white font-semibold">Response Time</div>
              <div className="text-zion-slate-light text-sm">Average incident response time</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-white font-semibold">Compliance Success</div>
              <div className="text-zion-slate-light text-sm">Regulatory compliance rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Security */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion for Security?</h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We combine cutting-edge security technology with deep compliance expertise to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Proven Security</h3>
              <p className="text-zion-slate-light">
                Track record of protecting businesses from sophisticated cyber threats
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Compliance Expert</h3>
              <p className="text-zion-slate-light">
                Deep expertise in GDPR, HIPAA, SOC 2, PCI DSS, and industry regulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Rapid Response</h3>
              <p className="text-zion-slate-light">
                Quick incident response and recovery to minimize business impact
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Coverage</h3>
              <p className="text-zion-slate-light">
                Security solutions that work across all locations and jurisdictions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock security operations center and expert support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Continuous Improvement</h3>
              <p className="text-zion-slate-light">
                Always evolving security measures to counter new threats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-zion-blue via-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our cybersecurity and compliance solutions can protect your business 
            and maintain regulatory compliance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-800 hover:bg-zion-slate-light">
                <Mail className="w-5 h-5 mr-2" />
                Security Assessment
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Security Quote
              </Button>
            </Link>
            <a href="tel:+13024640950">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Call Security Experts
              </Button>
            </a>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}