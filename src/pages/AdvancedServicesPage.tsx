import React, { useState } from 'react';
import { ADVANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/advancedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Users,
  DollarSign,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AdvancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter services based on search and category
  const filteredServices = ADVANCED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
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
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const uniqueCategories = Array.from(new Set(ADVANCED_SERVICES.map(service => service.category)));

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Advanced AI & IT Services - Zion Tech Group" 
        description="Discover cutting-edge AI solutions, cybersecurity services, cloud optimization, and digital transformation services. Expert IT consulting and implementation."
        keywords="AI services, IT consulting, cybersecurity, cloud optimization, digital transformation, business automation"
        canonical="https://ziontechgroup.com/advanced-services"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence, cybersecurity, and digital transformation services. 
            Expert solutions designed for the modern enterprise.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services, technologies, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-zion-blue border border-zion-blue-light text-white rounded-md"
              >
                <option value="all">All Categories</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-blue border border-zion-blue-light text-white rounded-md"
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

      {/* Service Categories Overview */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive solutions across all major technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-cyan transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-zion-cyan text-zion-blue">
                    {category.count} Services
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} Advanced Services Available
            </h2>
            <p className="text-zion-slate text-lg">
              Expert solutions with proven results and comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
            <p className="text-zion-slate-light text-lg">
              Choose the plan that fits your business needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`bg-zion-blue-dark border-zion-blue-light text-white ${index === 1 ? 'border-zion-cyan scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-zion-cyan">{tier.price}</div>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-zion-cyan" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate text-lg">
              Proven expertise, innovative solutions, and dedicated support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">AI Expertise</h3>
              <p className="text-zion-slate">Cutting-edge AI solutions with proven results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate">Bank-level security and compliance standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">Certified professionals with industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Proven Results</h3>
              <p className="text-zion-slate">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your specific needs and discover how our AI and IT solutions can drive your business forward.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          
          <div className="text-zion-slate-light">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-dark inline-flex items-center gap-1"
              >
                ziontechgroup.com <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: ProductListing }) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-zion-blue-light hover:border-zion-cyan">
      <div className="relative">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {service.featured && (
          <Badge className="absolute top-3 right-3 bg-zion-cyan text-zion-blue">
            Featured
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl text-zion-blue line-clamp-2">{service.title}</CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            <div className="text-sm text-zion-slate">Starting Price</div>
          </div>
        </div>
        
        <CardDescription className="text-zion-slate line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-zion-blue-light text-zion-blue text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Service Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-zion-slate">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{service.rating} ({service.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center gap-2 text-zion-slate">
            <Brain className="w-4 h-4 text-zion-cyan" />
            <span>AI Score: {service.aiScore}</span>
          </div>
          <div className="flex items-center gap-2 text-zion-slate">
            <Clock className="w-4 h-4 text-zion-cyan" />
            <span>{service.availability}</span>
          </div>
          <div className="flex items-center gap-2 text-zion-slate">
            <Globe className="w-4 h-4 text-zion-cyan" />
            <span>{service.location}</span>
          </div>
        </div>
        
        {/* Category */}
        <div className="text-sm text-zion-slate">
          <strong>Category:</strong> {service.category}
          {service.subcategory && (
            <span className="ml-2 text-zion-cyan">• {service.subcategory}</span>
          )}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex gap-2">
          <Button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
            Get Quote
          </Button>
          <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}