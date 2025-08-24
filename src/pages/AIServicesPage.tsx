import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain, Bot, MessageSquare, Eye, BarChart3, Zap, Star, DollarSign, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Globe, TrendingUp, Shield, Lightbulb
} from 'lucide-react';

interface AIService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  duration: string;
  features: string[];
  useCases: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  marketPrice: string;
  aiScore: number;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const aiServices: AIService[] = [
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot Development",
    description: "Intelligent conversational AI chatbots for customer service, sales, and support automation.",
    category: "Conversational AI",
    price: 3500,
    currency: "$",
    duration: "3-6 weeks",
    features: [
      "Natural language processing",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics and reporting",
      "24/7 availability"
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification",
      "Appointment scheduling",
      "FAQ handling",
      "Sales assistance"
    ],
    benefits: [
      "24/7 customer support",
      "Reduced response time",
      "Cost savings on support staff",
      "Improved customer satisfaction",
      "Scalable customer service"
    ],
    icon: <MessageSquare className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    marketPrice: "$5,000 - $12,000",
    aiScore: 95,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "computer-vision",
    title: "Computer Vision Solutions",
    description: "Advanced image and video analysis using deep learning for object detection, recognition, and processing.",
    category: "Computer Vision",
    price: 8000,
    currency: "$",
    duration: "6-12 weeks",
    features: [
      "Object detection and recognition",
      "Image classification",
      "Video analysis",
      "Real-time processing",
      "Custom model training"
    ],
    useCases: [
      "Quality control in manufacturing",
      "Security surveillance",
      "Medical image analysis",
      "Retail analytics",
      "Autonomous vehicles"
    ],
    benefits: [
      "Automated quality control",
      "Enhanced security",
      "Improved accuracy",
      "Cost reduction",
      "Real-time insights"
    ],
    icon: <Eye className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    marketPrice: "$15,000 - $50,000",
    aiScore: 92,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & ML",
    description: "Machine learning models for forecasting, pattern recognition, and data-driven decision making.",
    category: "Machine Learning",
    price: 6000,
    currency: "$",
    duration: "4-8 weeks",
    features: [
      "Data preprocessing and cleaning",
      "Feature engineering",
      "Model training and validation",
      "Performance monitoring",
      "API integration"
    ],
    useCases: [
      "Sales forecasting",
      "Customer churn prediction",
      "Risk assessment",
      "Inventory optimization",
      "Market trend analysis"
    ],
    benefits: [
      "Data-driven decisions",
      "Improved forecasting accuracy",
      "Risk mitigation",
      "Operational efficiency",
      "Competitive advantage"
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    marketPrice: "$8,000 - $25,000",
    aiScore: 88,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default function AIServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(aiServices.map(s => s.category)))];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'Conversational AI': <MessageSquare className="w-5 h-5" />,
      'Computer Vision': <Eye className="w-5 h-5" />,
      'Machine Learning': <BarChart3 className="w-5 h-5" />
    };
    return icons[category] || <Brain className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Brain className="w-8 h-8 text-zion-cyan" />
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
              AI Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From chatbots to computer vision, we deliver enterprise-grade AI that drives results.
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:ring-zion-cyan"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <Badge className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      AI Score: {service.aiScore}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between p-4 bg-zion-blue-dark/30 rounded-lg">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-zion-slate-light text-sm">
                        Market: {service.marketPrice}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-cyan text-sm">{service.duration}</div>
                      <div className="text-zion-slate-light text-xs">Delivery</div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-zion-purple/20">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-zion-cyan" />
                        {service.contactInfo.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-zion-cyan" />
                        {service.contactInfo.email}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      <span className="flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Let's discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
              <span className="flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}