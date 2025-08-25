import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Bot, 
  BarChart3, 
  PenTool, 
  MessageSquare, 
  Zap,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Award,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  Lightbulb,
  Shield,
  Search
} from 'lucide-react';

const AI_SERVICES = [
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    description: 'Custom AI-powered chatbots with natural language processing capabilities.',
    price: 2999,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    tags: ['AI Chatbot', 'NLP', 'Customer Service', 'Automation'],
    deliveryTime: '2-4 weeks',
    pricingModel: 'project-based'
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'AI-powered content creation for blogs, social media, and marketing materials.',
    price: 1500,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 89,
    featured: false,
    tags: ['Content Creation', 'AI Writing', 'Marketing', 'SEO'],
    deliveryTime: '1-2 weeks',
    pricingModel: 'monthly'
  },
  {
    id: 'ai-data-analysis',
    title: 'AI-Powered Data Analysis',
    description: 'Advanced data analytics using machine learning to uncover hidden patterns.',
    price: 3500,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    tags: ['Data Analytics', 'Machine Learning', 'Business Intelligence'],
    deliveryTime: '3-5 weeks',
    pricingModel: 'project-based'
  }
];

const AIServiceCard: React.FC<{ service: any }> = ({ service }) => {
  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}
            </CardTitle>
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
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-zion-cyan" />
            <span className="text-white font-semibold">
              {service.currency}{service.price.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zion-slate-light" />
            <span className="text-zion-slate-light text-sm">{service.deliveryTime}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag: string) => (
            <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white transition-colors"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            size="sm"
            className="bg-zion-cyan text-white hover:bg-zion-cyan-light transition-colors"
          >
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'chatbots', name: 'Chatbots', icon: Bot },
    { id: 'content', name: 'Content Creation', icon: PenTool },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart3 },
    { id: 'automation', name: 'Process Automation', icon: Zap },
    { id: 'security', name: 'AI Security', icon: Shield }
  ];

  const filteredServices = AI_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.tags.some((tag: string) => tag.toLowerCase().includes(selectedCategory));
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to data analytics, we deliver intelligent automation that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
                Explore Services
              </Button>
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-zion-purple text-white'
                    : 'border-zion-blue-light text-zion-slate-light hover:border-zion-purple hover:text-zion-cyan'
                } transition-colors`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-zion-blue-light border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <AIServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}