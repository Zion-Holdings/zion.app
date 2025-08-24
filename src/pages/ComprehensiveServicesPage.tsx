import React, { useState, useMemo } from 'react';
import { 
  SERVICE_CATEGORIES, 
  MICRO_SERVICES, 
  MicroService, 
  ServiceCategory,
  getServicesByCategory,
  getFeaturedServices,
  getPopularServices,
  searchServices
} from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Star, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  TrendingUp,
  Mail,
  Phone,
  Globe,
  Award,
  Users,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface ServiceCardProps {
  service: MicroService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
            <CardDescription className="text-zion-slate-light text-sm line-clamp-2">
              {service.description}
            </CardDescription>
          </div>
          {service.featured && (
            <Badge variant="secondary" className="bg-zion-purple text-white text-xs">
              <Award className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{service.rating}</span>
            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
          </div>
          <Badge variant="outline" className="border-zion-purple text-zion-cyan text-xs">
            AI Score: {service.aiScore}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-white font-semibold">
                ${service.price.toLocaleString()}
              </span>
              <span className="text-zion-slate-light text-sm">
                {service.pricingModel === 'monthly' ? '/month' : 'one-time'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-zion-slate-light text-sm">
              <Clock className="w-3 h-3" />
              {service.deliveryTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {service.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
            {service.tags.length > 3 && (
              <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                +{service.tags.length - 3} more
              </Badge>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <TrendingUp className="w-4 h-4 text-zion-purple" />
              <span>Market Price: {service.marketPrice}</span>
            </div>
            
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Users className="w-4 h-4 text-zion-cyan" />
              <span>{service.author.name}</span>
              {service.author.verified && (
                <CheckCircle className="w-4 h-4 text-green-400" />
              )}
            </div>
          </div>

          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </Button>

          {showDetails && (
            <div className="space-y-4 pt-3 border-t border-zion-blue-light">
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-purple" />
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Benefits
                </h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zion-blue p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryCard: React.FC<{ category: ServiceCategory }> = ({ category }) => {
  const services = getServicesByCategory(category.id);
  
  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
          <span className="text-2xl">{category.icon}</span>
        </div>
        <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-zion-slate-light max-w-md mx-auto">{category.description}</p>
        <div className="mt-2 text-zion-cyan text-sm">
          {services.length} services available
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default function ComprehensiveServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = useMemo(() => {
    let services = MICRO_SERVICES;
    
    if (searchQuery) {
      services = searchServices(searchQuery);
    }
    
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }
    
    return services;
  }, [searchQuery, selectedCategory]);

  const featuredServices = getFeaturedServices();
  const popularServices = getPopularServices();

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our complete range of micro SAAS services including AI development, cybersecurity, cloud solutions, and more. Expert IT services at competitive prices."
        keywords="AI services, cybersecurity, cloud migration, data analytics, web development, IT consulting, blockchain, automation"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark to-zion-blue py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our complete ecosystem of micro SAAS services, from AI development to cybersecurity. 
            Expert solutions at competitive prices, delivered by verified professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-zion-blue-dark border-zion-blue-light">
            <TabsTrigger value="all" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              All Services
            </TabsTrigger>
            <TabsTrigger value="featured" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              Featured
            </TabsTrigger>
            <TabsTrigger value="popular" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              Popular
            </TabsTrigger>
            <TabsTrigger value="categories" className="text-zion-cyan data-[state=active]:bg-zion-purple">
              By Category
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-zion-purple' : 'border-zion-blue-light text-zion-cyan'}
              >
                All Categories
              </Button>
              {SERVICE_CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 'bg-zion-purple' : 'border-zion-blue-light text-zion-cyan'}
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
              <p className="text-zion-slate-light">Our top-tier services handpicked for excellence and innovation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Popular Services</h2>
              <p className="text-zion-slate-light">Most requested services by our clients</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-12">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.id} className="space-y-8">
                <CategoryCard category={category} />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact CTA */}
      <div className="bg-zion-blue-dark border-t border-zion-blue-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Contact our team to discuss your project requirements and get a personalized quote. 
            We're here to help you succeed with the right technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Mobile: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}