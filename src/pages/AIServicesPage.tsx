import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Brain,
  Monitor,
  Eye,
  MessageSquare,
  BarChart3,
  FileText,
  Bot,
  Sparkles
} from 'lucide-react';
import { EXPANDED_SERVICES, type ExpandedService } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function AIServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filter only AI services
  const aiServices = EXPANDED_SERVICES.filter(service => 
    service.category === 'AI Services'
  );

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = service.price < 300;
    else if (priceRange === 'medium') matchesPrice = service.price >= 300 && service.price < 800;
    else if (priceRange === 'high') matchesPrice = service.price >= 800;
    
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
      case 'Chatbots & Conversational AI': return <MessageSquare className="w-5 h-5" />;
      case 'Content Generation': return <FileText className="w-5 h-5" />;
      case 'Data Analytics': return <BarChart3 className="w-5 h-5" />;
      case 'Computer Vision': return <Eye className="w-5 h-5" />;
      case 'Natural Language Processing': return <Brain className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  const aiSubcategories = [
    'Chatbots & Conversational AI',
    'Content Generation', 
    'Data Analytics',
    'Computer Vision',
    'Natural Language Processing'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Brain className="w-20 h-20 text-white mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From chatbots to predictive analytics, we deliver AI that drives real results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                <Mail className="w-5 h-5 mr-2" />
                Start AI Journey
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Get AI Quote
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

      {/* AI Capabilities Overview */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Capabilities</h2>
            <p className="text-zion-slate-light text-lg">
              Explore our comprehensive AI service categories designed to solve real business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiSubcategories.map((subcategory) => {
              const icon = getSubcategoryIcon(subcategory);
              const services = aiServices.filter(s => s.subcategory === subcategory);
              const avgPrice = services.length > 0 ? 
                Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length) : 0;
              
              return (
                <Card key={subcategory} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
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
                placeholder="Search AI services, features, or use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="AI Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All AI Categories</SelectItem>
                {aiSubcategories.map(sub => (
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
                <SelectItem value="low">Under $300</SelectItem>
                <SelectItem value="medium">$300 - $800</SelectItem>
                <SelectItem value="high">Over $800</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} AI Services Found
            </h2>
            <p className="text-zion-slate-light">
              Discover AI solutions that can transform your business operations and customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
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
                      <div className="text-2xl font-bold text-zion-purple">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}
                    </div>
                  </div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">AI Intelligence Score</span>
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                      <Brain className="w-3 h-3 mr-1" />
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
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
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
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No AI services found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all AI categories</p>
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

      {/* AI Success Stories */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Success Stories</h2>
            <p className="text-zion-slate-light text-lg">
              See how our AI solutions have transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">E-commerce Growth</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  AI-powered recommendations increased sales by 35%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  Our AI chatbot and recommendation engine helped a major retailer increase 
                  conversion rates and average order value significantly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Customer Service</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Reduced response time from hours to seconds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  AI chatbot implementation reduced customer service costs by 60% while 
                  improving customer satisfaction scores.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Predictive Analytics</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Prevented $2M in potential losses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  AI-powered risk assessment and predictive analytics helped a financial 
                  institution identify and prevent fraudulent activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why AI with Zion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion for AI Solutions?</h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We combine deep AI expertise with industry knowledge to deliver solutions that drive measurable business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">AI Expertise</h3>
              <p className="text-zion-slate-light">
                Deep expertise in machine learning, NLP, computer vision, and emerging AI technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Business Focus</h3>
              <p className="text-zion-slate-light">
                AI solutions designed to solve real business problems, not just showcase technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security and compliance standards for all AI implementations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Pre-built AI models and rapid deployment frameworks for faster time to value
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock support and monitoring for all AI systems and implementations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Continuous Innovation</h3>
              <p className="text-zion-slate-light">
                Always up-to-date with the latest AI research and technology breakthroughs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-zion-blue via-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how artificial intelligence can transform your business operations, 
            improve customer experience, and drive growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                <Mail className="w-5 h-5 mr-2" />
                Schedule AI Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Get AI Quote
              </Button>
            </Link>
            <a href="tel:+13024640950">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Call AI Experts
              </Button>
            </a>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}