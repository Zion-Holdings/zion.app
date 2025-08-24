import React, { useState } from 'react';
<<<<<<< HEAD
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Clock, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Eye,
  Brain,
  Cloud,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const categoryIcons = {
  'AI Services': <Brain className="w-5 h-5" />,
  'IT Services': <Cloud className="w-5 h-5" />,
  'Innovative Solutions': <Zap className="w-5 h-5" />
};

const categoryColors = {
  'AI Services': 'from-purple-500 to-indigo-600',
  'IT Services': 'from-blue-500 to-cyan-600',
  'Innovative Solutions': 'from-green-500 to-emerald-600'
};

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price}/month`;
    if (model === 'yearly') return `$${price}/year`;
    if (model === 'per-user') return `$${price}/user`;
    if (model === 'usage-based') return `$${price}/usage`;
    return `$${price}`;
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services Pricing & Comparison - Zion Tech Group" 
        description="Compare our comprehensive range of AI services, IT solutions, and innovative technology services. Find the perfect solution for your business needs with transparent pricing."
        keywords="services pricing, AI services pricing, IT solutions pricing, technology services cost, service comparison"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services Pricing & Comparison
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transparent pricing for all our technology services. Compare features, benefits, and costs 
            to find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light text-sm">
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
=======
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO } from '@/data/comprehensiveServices';
import { Check, Star, Clock, Shield, Zap, TrendingUp, Users, Award } from 'lucide-react';

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  const getPriceDisplay = (service: any) => {
    if (service.priceType === 'monthly') {
      return `$${service.price}/month`;
    } else if (service.priceType === 'yearly') {
      return `$${service.price}/year`;
    } else if (service.priceType === 'per-user') {
      return `$${service.price}/user`;
    } else {
      return `$${service.price.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '💼';
  };

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "From $99",
      features: [
        "Basic service packages",
        "Email support",
        "Standard delivery time",
        "Basic documentation",
        "Community access"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "From $2,500",
      features: [
        "Advanced service packages",
        "Priority support",
        "Faster delivery time",
        "Comprehensive documentation",
        "Training sessions",
        "Custom integrations"
      ],
      color: "from-purple-500 to-indigo-600",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "From $15,000",
      features: [
        "Full service portfolio",
        "24/7 dedicated support",
        "Custom delivery timeline",
        "Full documentation suite",
        "On-site training",
        "Custom development",
        "Dedicated account manager"
      ],
      color: "from-emerald-500 to-green-600"
    }
  ];

  const marketComparison = [
    {
      service: "AI Chatbot Development",
      ourPrice: "$2,500",
      marketPrice: "$5,000 - $15,000",
      savings: "50-83%",
      advantage: "Custom training, 3 months support included"
    },
    {
      service: "Cloud Migration",
      ourPrice: "$15,000",
      marketPrice: "$25,000 - $50,000",
      savings: "40-70%",
      advantage: "Minimal downtime, post-migration support"
    },
    {
      service: "Cybersecurity Assessment",
      ourPrice: "$3,500",
      marketPrice: "$8,000 - $20,000",
      savings: "56-82%",
      advantage: "Comprehensive audit, remediation roadmap"
    },
    {
      service: "Data Warehouse Solution",
      ourPrice: "$18,000",
      marketPrice: "$40,000 - $100,000",
      savings: "55-82%",
      advantage: "Modern architecture, 6 months support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Services Pricing</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transparent, competitive pricing for all our micro SAAS, IT, and AI services
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Competitive Market Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>ROI-Focused Solutions</span>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Category Filter */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-purple hover:bg-zion-purple-dark"
            >
              All Services
            </Button>
            {Object.keys(categoryIcons).map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}
              >
                {categoryIcons[category as keyof typeof categoryIcons]}
                <span className="ml-2">{category}</span>
              </Button>
=======
      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Choose Your Service Tier</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We offer flexible pricing options to meet businesses of all sizes and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg border-2 overflow-hidden ${
                tier.popular ? 'border-zion-purple scale-105' : 'border-zion-slate/10'
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-zion-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                    <p className="text-zion-slate-light mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold text-zion-purple mb-2">{tier.price}</div>
                    <p className="text-zion-slate-light text-sm">Starting price</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-zion-green flex-shrink-0" />
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-dark hover:to-zion-purple'
                      : 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Pricing Table */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our services side by side to find the perfect solution for your business needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-zion-blue text-white">
                  <TableHead className="text-white font-semibold">Service</TableHead>
                  <TableHead className="text-white font-semibold text-center">Category</TableHead>
                  <TableHead className="text-white font-semibold text-center">Pricing</TableHead>
                  <TableHead className="text-white font-semibold text-center">Features</TableHead>
                  <TableHead className="text-white font-semibold text-center">Support</TableHead>
                  <TableHead className="text-white font-semibold text-center">Setup Time</TableHead>
                  <TableHead className="text-white font-semibold text-center">Rating</TableHead>
                  <TableHead className="text-white font-semibold text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <TableRow key={service.id} className="hover:bg-gray-50">
                    <TableCell className="py-6">
                      <div className="flex items-start gap-3">
                        <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors]} flex items-center justify-center`}>
                          <div className="text-white">
                            {categoryIcons[service.category as keyof typeof categoryIcons]}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                          {service.freeTrial && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs mt-2">
                              {service.freeTrialDays}-day free trial
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-zion-purple/10 text-zion-purple border-zion-purple/20">
                        {service.category}
                      </Badge>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="text-lg font-bold text-zion-purple">
                        {formatPrice(service.price, service.pricingModel)}
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="text-sm text-gray-600">
                        <div className="font-medium mb-2">Top Features:</div>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center justify-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 mt-1">
                            +{service.features.length - 3} more
                          </div>
                        )}
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <Badge variant="secondary" className={getSupportLevelColor(service.supportLevel)}>
                        {service.supportLevel}
                      </Badge>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.setupTime}</span>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviewCount})</span>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      <div className="space-y-2">
                        <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                          Get Started
                        </Button>
                        <div className="flex gap-1">
                          {service.website && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          )}
                          {service.demoUrl && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <Eye className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
=======
      {/* Market Comparison */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Market Price Comparison</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              See how our competitive pricing compares to industry standards
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zion-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-center font-semibold">Our Price</th>
                      <th className="px-6 py-4 text-center font-semibold">Market Price</th>
                      <th className="px-6 py-4 text-center font-semibold">Savings</th>
                      <th className="px-6 py-4 text-left font-semibold">Our Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-zion-slate/5'}>
                        <td className="px-6 py-4 font-medium text-zion-blue">{item.service}</td>
                        <td className="px-6 py-4 text-center font-bold text-zion-purple">{item.ourPrice}</td>
                        <td className="px-6 py-4 text-center text-zion-slate-light">{item.marketPrice}</td>
                        <td className="px-6 py-4 text-center font-semibold text-zion-green">{item.savings}</td>
                        <td className="px-6 py-4 text-sm text-zion-slate-light">{item.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Detailed Service Cards */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Detailed Service Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get detailed information about each service including features, benefits, use cases, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors]} flex items-center justify-center`}>
                      <div className="text-white">
                        {categoryIcons[service.category as keyof typeof categoryColors]}
                      </div>
                    </div>
                    <Badge variant="secondary" className={getSupportLevelColor(service.supportLevel)}>
                      {service.supportLevel}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Pricing */}
                  <div className="mb-4 p-3 bg-zion-purple/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    {service.freeTrial && (
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {service.freeTrialDays}-day free trial
                      </div>
                    )}
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
=======
      {/* Service Category Pricing */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Service Category Pricing</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Explore pricing for each service category with detailed breakdowns
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-zion-blue text-white'
                  : 'bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-zion-blue text-white'
                    : 'bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg border border-zion-slate/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                      <div>
                        <span className="text-xs font-medium text-zion-slate bg-zion-slate/10 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    {service.featured && (
                      <span className="text-xs font-medium text-zion-purple bg-zion-purple/10 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-zion-blue mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>

                  {/* Pricing Details */}
                  <div className="bg-zion-slate/5 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-zion-purple mb-2">
                      {getPriceDisplay(service)}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span>{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Shield className="w-4 h-4 text-zion-green" />
                        <span>{service.support}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-zion-slate mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-green" />
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-green rounded-full"></div>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

<<<<<<< HEAD
                  {/* Use Cases */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="w-4 h-4" />
                        <span>{service.author.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                      Contact for Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
=======
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-zion-slate">{service.rating}</span>
                      <span className="text-xs text-zion-slate-light">({service.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our expert team is ready to help you implement the perfect technology solution. 
            Get in touch for a free consultation and discover how we can accelerate your digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="text-white hover:underline">ziontechgroup.com</a></p>
=======
      {/* Why Choose Us */}
      <div className="py-16 bg-zion-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver exceptional value through quality, innovation, and customer success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-zion-slate-light text-sm">
                Enterprise-grade solutions with rigorous testing and quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-zion-slate-light text-sm">
                Solutions designed to deliver measurable business value and returns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-zion-slate-light text-sm">
                Certified professionals with years of industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-zion-slate-light text-sm">
                Continuous support and maintenance to ensure long-term success
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Contact us today for a personalized quote and consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Call Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.phone}</p>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.businessHours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Email Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
              <p className="text-zion-slate-light text-sm">24/7 Support Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.address}</p>
              <p className="text-zion-slate-light text-sm">By appointment</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Pricing Inquiry`}
              className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
            >
              Get Your Custom Quote
            </a>
>>>>>>> bfd29442eb0d815cc7d437a97d09f1130ceb6a0c
          </div>
        </div>
      </div>
    </div>
  );
}