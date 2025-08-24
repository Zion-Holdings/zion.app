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
  Shield
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
            {service.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function AIServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = AI_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'AI Chatbot', 'Content Creation', 'Data Analytics'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI & Machine Learning Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Cutting-edge AI solutions to transform your business operations and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <AIServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}