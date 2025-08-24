import React, { useState } from 'react';
import { ADVANCED_SERVICES, SERVICE_CATEGORIES, ENTERPRISE_PRICING, CONTACT_INFO } from '@/data/advancedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Star, 
  Clock, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Users,
  ShoppingCart,
  Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AdvancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter services based on search and category
  const filteredServices = ADVANCED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'ai-score':
        return (b.aiScore || 0) - (a.aiScore || 0);
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => 
      cat.name.toLowerCase().includes(category.toLowerCase())
    );
    return categoryData?.icon || '🚀';
  };

  const getCategoryColor = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => 
      cat.name.toLowerCase().includes(category.toLowerCase())
    );
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Advanced AI & IT Services - Zion Tech Group" 
        description="Discover our comprehensive suite of AI-powered business solutions, cybersecurity services, cloud optimization, and more. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, cybersecurity, cloud optimization, business automation, Zion Tech Group"
        canonical="https://ziontechgroup.com/advanced-services"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced AI & IT Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions, 
            cybersecurity services, and cutting-edge technology services
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              View All Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-zion-slate-light">Cutting-edge artificial intelligence for business transformation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">Advanced cybersecurity and compliance solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Support</h3>
              <p className="text-zion-slate-light">24/7 support with rapid response times</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-dark w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-zion-blue-light focus:border-zion-cyan"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md bg-white focus:border-zion-cyan focus:outline-none"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md bg-white focus:border-zion-cyan focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="ai-score">AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-cyan text-zion-blue">
                      Featured
                    </Badge>
                  )}
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
                  
                  <div className="flex items-center justify-between text-sm text-zion-slate-dark mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.availability}
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      {service.location}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Pricing Section */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">
              Enterprise Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-dark max-w-2xl mx-auto">
              Choose the perfect plan for your organization's needs. All plans include our core AI services and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ENTERPRISE_PRICING.map((plan) => (
              <Card 
                key={plan.tier} 
                className={`relative ${plan.recommended ? 'border-zion-cyan shadow-xl scale-105' : 'border-zion-blue-light'}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-cyan text-zion-blue px-4 py-2">
                      Recommended
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-zion-blue">{plan.tier}</CardTitle>
                  <div className="text-4xl font-bold text-zion-cyan">
                    {plan.price}
                    <span className="text-lg text-zion-slate-dark">/{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.recommended ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue' : 'bg-zion-blue hover:bg-zion-blue-dark text-white'}`}
                  >
                    {plan.tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get in touch with our team to discuss how our AI and IT services can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <a href={`tel:${CONTACT_INFO.mobile}`} className="text-zion-slate-light hover:text-zion-cyan">
                      {CONTACT_INFO.mobile}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-zion-slate-light hover:text-zion-cyan">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-zion-slate-light">{CONTACT_INFO.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Website</div>
                    <a 
                      href={CONTACT_INFO.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zion-slate-light hover:text-zion-cyan flex items-center"
                    >
                      {CONTACT_INFO.website}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-zion-blue-light">
                <div className="text-white font-semibold mb-2">Support & Response</div>
                <div className="text-zion-slate-light">
                  <div>Support Hours: {CONTACT_INFO.supportHours}</div>
                  <div>Response Time: {CONTACT_INFO.responseTime}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-zion-blue mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-dark mb-2">Name</label>
                  <Input placeholder="Your name" className="border-zion-blue-light focus:border-zion-cyan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-dark mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="border-zion-blue-light focus:border-zion-cyan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-dark mb-2">Company</label>
                  <Input placeholder="Your company" className="border-zion-blue-light focus:border-zion-cyan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-dark mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project or requirements..."
                    className="w-full px-3 py-2 border border-zion-blue-light rounded-md focus:border-zion-cyan focus:outline-none resize-none"
                  />
                </div>
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-dark max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              solutions that drive real business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">AI-First Approach</h3>
              <p className="text-zion-slate-dark">
                Built from the ground up with artificial intelligence at the core of every solution
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Enterprise Security</h3>
              <p className="text-zion-slate-dark">
                Bank-level security with SOC 2 compliance and advanced threat protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Rapid Implementation</h3>
              <p className="text-zion-slate-dark">
                Get up and running in days, not months, with our pre-built solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Expert Support</h3>
              <p className="text-zion-slate-dark">
                24/7 support from certified AI and IT professionals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}