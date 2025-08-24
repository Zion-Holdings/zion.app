<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, ExpandedService } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
  const [filteredServices, setFilteredServices] = useState<ExpandedService[]>(EXPANDED_SERVICES);

  useEffect(() => {
    let filtered = EXPANDED_SERVICES;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by pricing model
    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Filter by support level
    if (selectedSupportLevel !== 'all') {
      filtered = filtered.filter(service => service.supportLevel === selectedSupportLevel);
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, selectedPricingModel, selectedSupportLevel]);

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'hourly': return 'Hourly';
      case 'project': return 'Project-based';
      case 'subscription': return 'Subscription';
      case 'one-time': return 'One-time';
      default: return model;
    }
  };

  const getSupportLevelLabel = (level: string) => {
    switch (level) {
      case 'basic': return 'Basic';
      case 'premium': return 'Premium';
      case 'enterprise': return 'Enterprise';
      default: return level;
    }
  };

  const getCategoryIcon = (category: string) => {
    const cat = SERVICE_CATEGORIES.find(c => c.name === category);
    return cat?.icon || '🔧';
  };

  return (
    <>
      <SEO 
        title="Expanded IT & AI Services - ZionTech Group" 
        description="Discover our comprehensive range of innovative micro SAAS services, IT solutions, and AI-powered technologies. Expert consulting, development, and implementation services."
        keywords="AI services, IT consulting, cybersecurity, cloud solutions, blockchain, quantum computing, micro SAAS, ZionTech Group"
        canonical="https://ziontechgroup.com/expanded-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 mr-3 text-zion-cyan" />
            <h1 className="text-5xl font-bold">Expanded IT & AI Services</h1>
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our comprehensive ecosystem of innovative micro SAAS services, cutting-edge IT solutions, 
            and AI-powered technologies designed to transform your business operations and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Globe className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Get Quote
            </Button>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple service data structure
interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  tags: string[];
  rating: number;
  aiScore: number;
}

const SERVICES: Service[] = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-language support (50+ languages)", "Advanced NLP with GPT-4 integration", "Custom training on your data", "Analytics dashboard", "API integration", "24/7 customer support"],
    benefits: ["Reduce customer service costs by 60%", "24/7 availability", "Scalable customer support", "Improved customer satisfaction", "Data-driven insights"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    rating: 4.8,
    aiScore: 95
  },
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration Suite",
    description: "Comprehensive cloud migration solution with automated assessment, planning, and execution tools for seamless transition to cloud infrastructure.",
    category: "Cloud Services",
    subcategory: "Migration & Consulting",
    price: 4999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Automated workload assessment", "Cost optimization analysis", "Migration planning tools", "Execution automation", "Post-migration support", "Performance monitoring"],
    benefits: ["Reduce migration time by 40%", "Minimize downtime", "Optimize cloud costs", "Ensure compliance", "Risk mitigation"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "GCP", "DevOps"],
    rating: 4.7,
    aiScore: 92
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Compliance",
    description: "Comprehensive security assessment and compliance framework for enterprise organizations with detailed reporting and remediation guidance.",
    category: "Security Services",
    subcategory: "Cybersecurity",
    price: 8999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Vulnerability assessment", "Penetration testing", "Compliance audit", "Security policy review", "Incident response planning", "Staff training"],
    benefits: ["Identify security gaps", "Meet compliance requirements", "Reduce breach risk", "Improve security posture", "Protect customer data"],
    tags: ["Cybersecurity", "Compliance", "Audit", "Security", "Risk Management"],
    rating: 4.9,
    aiScore: 96
  }
];

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(SERVICES.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Enterprise Solutions & Micro SAAS Services
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Discover our comprehensive range of enterprise-grade solutions, micro SAAS services, 
          and innovative technology offerings designed to accelerate your business growth.
        </p>
        
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
          </div>
        </div>
      </div>

      {/* Search and Filters */}
<<<<<<< HEAD
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
              <SelectTrigger>
                <SelectValue placeholder="All Pricing Models" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing Models</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="project">Project-based</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
                <SelectItem value="one-time">One-time</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSupportLevel} onValueChange={setSelectedSupportLevel}>
              <SelectTrigger>
                <SelectValue placeholder="All Support Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Support Levels</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
=======
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-zion-cyan"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate-dark text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
          </div>
        </div>
      </div>

      {/* Services Grid */}
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {filteredServices.length} Services Found
          </h2>
          <p className="text-gray-600">
            Discover innovative solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-zion-purple text-white">
                    {getCategoryIcon(service.category)} {service.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">
                      {service.rating}
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-purple">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {getPricingModelLabel(service.pricingModel)}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-zion-cyan" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-zion-cyan" />
                    {service.deliveryTime}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="w-4 h-4 mr-2 text-zion-cyan" />
                    {getSupportLevelLabel(service.supportLevel)}
                  </div>
                </div>

                {/* Market Price Comparison */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-gray-600 mb-1">Market Price Range</div>
                  <div className="text-lg font-semibold text-zion-purple">
                    {service.currency}{service.marketPrice.min.toLocaleString()} - {service.currency}{service.marketPrice.max.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    Our Price: {service.currency}{service.price.toLocaleString()} ({(100 - (service.price / service.marketPrice.average) * 100).toFixed(0)}% below market)
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <img
                        src={service.author.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=40&h=40'}
                        alt={service.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{service.author.name}</div>
                        <div className="text-sm text-gray-500">Verified Provider</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact {service.author.name}
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <a
                        href={`mailto:${service.contactInfo.email}`}
                        className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                      >
                        <Mail className="w-3 h-3 mr-1" />
                        Email
                      </a>
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all services
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPricingModel('all');
                setSelectedSupportLevel('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation and quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </>
=======
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white text-sm">{service.rating}</span>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-zion-cyan font-semibold">
                  {service.currency}{service.price}
                  <span className="text-sm text-zion-slate-light ml-1">
                    /{service.pricingModel}
                  </span>
                </span>
                <span className="bg-zion-purple text-white px-2 py-1 rounded text-sm">
                  AI Score: {service.aiScore}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Learn More
                </button>
                <button className="bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our team of experts help you find the perfect solution for your needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
            <a href="https://ziontechgroup.com" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
  );
}