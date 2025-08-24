import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  Clock, 
  DollarSign,
  Shield,
  Cloud,
  Database,
  Cpu,
  Zap,
  TrendingUp,
  Globe,
  Lock,
  BarChart3,
  Smartphone,
  Network,
  Brain,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Advanced Tech Services Data
const advancedServices = [
  {
    id: 'blockchain-smart-contracts',
    title: 'Blockchain Smart Contract Development',
    description: 'Custom smart contracts for DeFi, NFTs, DAOs, and enterprise blockchain solutions with security auditing.',
    category: 'Blockchain & Web3',
    price: '$8,000',
    priceValue: 8000,
    rating: 4.9,
    reviewCount: 134,
    aiScore: 96,
    deliveryTime: '6-10 weeks',
    features: ['Smart Contracts', 'Security Auditing', 'DeFi', 'NFTs', 'Multi-chain'],
    icon: Shield,
    color: 'from-indigo-500 to-purple-600',
    marketPrice: '$5,000 - $25,000'
  },
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Architecture',
    description: 'Implement comprehensive zero trust security framework for modern enterprise environments.',
    category: 'Cybersecurity',
    price: '$12,000',
    priceValue: 12000,
    rating: 4.8,
    reviewCount: 89,
    aiScore: 93,
    deliveryTime: '8-12 weeks',
    features: ['IAM', 'Network Security', 'Compliance', 'Threat Detection', 'Monitoring'],
    icon: Lock,
    color: 'from-red-500 to-pink-600',
    marketPrice: '$8,000 - $30,000'
  },
  {
    id: 'multi-cloud-strategy',
    title: 'Multi-Cloud Strategy & Management',
    description: 'Design and implement multi-cloud architectures for optimal performance, cost, and reliability.',
    category: 'Cloud & DevOps',
    price: '$15,000',
    priceValue: 15000,
    rating: 4.7,
    reviewCount: 67,
    aiScore: 91,
    deliveryTime: '10-16 weeks',
    features: ['Multi-Cloud', 'Cost Optimization', 'Disaster Recovery', 'Security', 'Monitoring'],
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600',
    marketPrice: '$10,000 - $40,000'
  },
  {
    id: 'real-time-analytics',
    title: 'Real-Time Data Analytics Platform',
    description: 'Build real-time analytics platforms for instant insights and decision-making capabilities.',
    category: 'Data & Analytics',
    price: '$18,000',
    priceValue: 18000,
    rating: 4.9,
    reviewCount: 112,
    aiScore: 95,
    deliveryTime: '12-18 weeks',
    features: ['Real-Time Processing', 'Dashboards', 'Predictive Analytics', 'Visualization', 'API Integration'],
    icon: BarChart3,
    color: 'from-green-500 to-emerald-600',
    marketPrice: '$12,000 - $50,000'
  },
  {
    id: 'iot-edge-computing',
    title: 'IoT Edge Computing Solutions',
    description: 'Deploy intelligent edge computing solutions for IoT devices with real-time processing capabilities.',
    category: 'IoT & Edge',
    price: '$22,000',
    priceValue: 22000,
    rating: 4.8,
    reviewCount: 78,
    aiScore: 94,
    deliveryTime: '14-20 weeks',
    features: ['Edge Computing', 'IoT Management', 'Real-Time Processing', 'AI Inference', 'Security'],
    icon: Cpu,
    color: 'from-orange-500 to-red-600',
    marketPrice: '$15,000 - $60,000'
  }
];

const categories = ['All', 'Blockchain & Web3', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'IoT & Edge'];
const priceRanges = ['All', 'Under $10k', '$10k - $20k', '$20k+'];
const sortOptions = ['Rating', 'AI Score', 'Price', 'Delivery Time'];

export default function AdvancedTechServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('Rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = advancedServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesPrice = selectedPriceRange === 'All' || 
                          (selectedPriceRange === 'Under $10k' && service.priceValue < 10000) ||
                          (selectedPriceRange === '$10k - $20k' && service.priceValue >= 10000 && service.priceValue <= 20000) ||
                          (selectedPriceRange === '$20k+' && service.priceValue > 20000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Rating':
          return b.rating - a.rating;
        case 'AI Score':
          return b.aiScore - a.aiScore;
        case 'Price':
          return a.priceValue - b.priceValue;
        case 'Delivery Time':
          return parseInt(a.deliveryTime.split('-')[0]) - parseInt(b.deliveryTime.split('-')[0]);
        default:
          return 0;
      }
    });

  return (
    <>
      <Helmet>
        <title>Advanced Technology Services - Zion Tech Group</title>
        <meta name="description" content="Explore cutting-edge technology services including blockchain, zero trust security, multi-cloud strategies, real-time analytics, and IoT edge computing solutions." />
        <meta name="keywords" content="advanced technology, blockchain, cybersecurity, multi-cloud, data analytics, IoT, edge computing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-tech-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-blue-dark">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Advanced Technology
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                  Services
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Cutting-edge solutions for the digital future. From blockchain and zero trust security 
                to multi-cloud strategies and IoT edge computing.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Rocket className="w-5 h-5" />
                  <span>Innovation First</span>
                </div>
                <div className="flex items-center gap-2 text-zion-purple">
                  <Brain className="w-5 h-5" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Shield className="w-5 h-5" />
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-zion-slate">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                    <Input
                      placeholder="Search advanced services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map(range => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort */}
                <div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map(option => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-zion-slate-light">
                  {filteredServices.length} services found
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">AI Score:</span>
                          <span className="font-semibold text-zion-cyan">{service.aiScore}/100</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">Rating:</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{service.rating}</span>
                            <span className="text-zion-slate-light">({service.reviewCount})</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">Delivery:</span>
                          <span className="font-semibold">{service.deliveryTime}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-2xl font-bold text-zion-cyan">
                            {service.price}
                          </div>
                          <div className="text-sm text-zion-slate-light">
                            Market: {service.marketPrice}
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                          Get Started
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                            <service.icon className="w-8 h-8 text-white" />
                          </div>
                          <Badge variant="secondary">
                            {service.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </div>
                      
                      <div className="lg:w-1/3 p-6 border-l border-zion-slate-light/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">AI Score:</span>
                            <span className="font-semibold text-zion-cyan">{service.aiScore}/100</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">Rating:</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{service.rating}</span>
                              <span className="text-zion-slate-light">({service.reviewCount})</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">Delivery:</span>
                            <span className="font-semibold">{service.deliveryTime}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:w-1/3 p-6 border-l border-zion-slate-light/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-zion-cyan mb-2">
                            {service.price}
                          </div>
                          <div className="text-sm text-zion-slate-light mb-4">
                            Market: {service.marketPrice}
                          </div>
                          <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-zion-slate">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Let's discuss how our advanced technology services can drive innovation 
                and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}