<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain, Bot, MessageSquare, Eye, BarChart3, Zap, Star, DollarSign, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Globe, TrendingUp, Shield, Lightbulb
} from 'lucide-react';

=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple AI service data structure
>>>>>>> f3114b5ec6e0762a89ac302f1e1c77234f5ec6df
interface AIService {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
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
      "Automated quality inspection",
      "Enhanced security monitoring",
      "Improved accuracy in analysis",
      "Cost reduction in manual processes",
      "Real-time decision making"
    ],
    icon: <Eye className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    marketPrice: "$12,000 - $25,000",
    aiScore: 92,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Forecasting",
    description: "Machine learning models for predicting future trends, customer behavior, and business outcomes.",
    category: "Predictive Analytics",
    price: 6000,
    currency: "$",
    duration: "4-8 weeks",
    features: [
      "Time series forecasting",
      "Customer behavior prediction",
      "Risk assessment models",
      "Demand forecasting",
      "Predictive maintenance"
    ],
    useCases: [
      "Sales forecasting",
      "Inventory optimization",
      "Customer churn prediction",
      "Risk management",
      "Maintenance scheduling"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved resource planning",
      "Reduced operational costs",
      "Increased customer retention",
      "Proactive problem solving"
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    marketPrice: "$8,000 - $20,000",
    aiScore: 89,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "nlp-processing",
    title: "Natural Language Processing (NLP)",
    description: "Advanced text analysis, sentiment analysis, and language understanding for business applications.",
    category: "NLP",
    price: 4500,
    currency: "$",
    duration: "4-6 weeks",
    features: [
      "Text classification",
      "Sentiment analysis",
      "Named entity recognition",
      "Language translation",
      "Document summarization"
    ],
    useCases: [
      "Social media monitoring",
      "Customer feedback analysis",
      "Document processing",
      "Content moderation",
      "Market research"
    ],
    benefits: [
      "Automated content analysis",
      "Improved customer insights",
      "Faster document processing",
      "Better content quality",
      "Enhanced user experience"
    ],
    icon: <Brain className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    marketPrice: "$6,000 - $15,000",
    aiScore: 91,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-automation",
    title: "AI Process Automation",
    description: "Intelligent automation solutions that streamline business processes using AI and machine learning.",
    category: "Automation",
    price: 7000,
    currency: "$",
    duration: "6-10 weeks",
    features: [
      "Process mining and analysis",
      "Workflow automation",
      "Intelligent document processing",
      "Decision automation",
      "Performance monitoring"
    ],
    useCases: [
      "Invoice processing",
      "Customer onboarding",
      "Data entry automation",
      "Quality control",
      "Compliance monitoring"
    ],
    benefits: [
      "Increased efficiency",
      "Reduced manual errors",
      "Faster processing times",
      "Cost savings",
      "Improved compliance"
    ],
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-600",
    marketPrice: "$10,000 - $25,000",
    aiScore: 88,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-consulting",
    title: "AI Strategy & Implementation Consulting",
    description: "Strategic consulting to help businesses identify and implement AI opportunities for competitive advantage.",
    category: "Consulting",
    price: 15000,
    currency: "$",
    duration: "8-16 weeks",
    features: [
      "AI readiness assessment",
      "Strategy development",
      "Implementation roadmap",
      "Change management",
      "ROI analysis"
    ],
    useCases: [
      "Digital transformation",
      "AI adoption strategy",
      "Technology assessment",
      "Team training",
      "Vendor selection"
    ],
    benefits: [
      "Clear AI roadmap",
      "Reduced implementation risks",
      "Faster time to value",
      "Competitive advantage",
      "Measurable ROI"
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    marketPrice: "$20,000 - $50,000",
    aiScore: 94,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-training",
    title: "AI Model Training & Optimization",
    description: "Custom AI model development, training, and optimization for specific business use cases.",
    category: "Model Development",
    price: 12000,
    currency: "$",
    duration: "8-20 weeks",
    features: [
      "Custom model architecture",
      "Data preparation and cleaning",
      "Model training and validation",
      "Performance optimization",
      "Model deployment"
    ],
    useCases: [
      "Industry-specific AI models",
      "Custom recommendation systems",
      "Specialized classification",
      "Anomaly detection",
      "Predictive modeling"
    ],
    benefits: [
      "Tailored to business needs",
      "Higher accuracy",
      "Competitive advantage",
      "Intellectual property",
      "Scalable solutions"
    ],
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-600",
    marketPrice: "$18,000 - $40,000",
    aiScore: 96,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-integration",
    title: "AI System Integration",
    description: "Seamless integration of AI solutions with existing business systems and workflows.",
    category: "Integration",
    price: 5500,
    currency: "$",
    duration: "4-8 weeks",
    features: [
      "API development",
      "System integration",
      "Data pipeline setup",
      "Testing and validation",
      "Documentation and training"
    ],
    useCases: [
      "CRM integration",
      "ERP system enhancement",
      "Database integration",
      "Cloud service integration",
      "Legacy system modernization"
    ],
    benefits: [
      "Seamless operations",
      "Improved data flow",
      "Enhanced user experience",
      "Reduced manual work",
      "Better system performance"
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "from-pink-500 to-rose-600",
    marketPrice: "$8,000 - $18,000",
    aiScore: 87,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
=======
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

const AI_SERVICES: AIService[] = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
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
    id: "content-generation-ai",
    title: "AI Content Generation Suite",
    description: "Advanced AI-powered content creation platform for marketing, documentation, and creative writing with brand voice customization.",
    subcategory: "Content Generation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-format content generation", "Brand voice training", "SEO optimization", "Plagiarism detection", "Collaboration tools", "Analytics dashboard"],
    benefits: ["10x faster content creation", "Consistent brand voice", "SEO-optimized content", "Cost-effective marketing", "Scalable content production"],
    tags: ["AI", "Content Generation", "Marketing", "SEO", "Writing"],
    rating: 4.7,
    aiScore: 93
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Platform",
    description: "AI-powered predictive analytics solution for business forecasting, risk assessment, and data-driven decision making.",
    subcategory: "Data Analytics",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: ["Advanced ML algorithms", "Real-time data processing", "Custom model training", "Interactive dashboards", "API integration", "Expert support"],
    benefits: ["Accurate predictions", "Risk mitigation", "Data-driven decisions", "Competitive advantage", "ROI optimization"],
    tags: ["AI", "Analytics", "Machine Learning", "Predictions", "Business Intelligence"],
    rating: 4.9,
    aiScore: 96
  },
  {
    id: "computer-vision-ai",
    title: "Computer Vision AI Platform",
    description: "Enterprise computer vision solution for image recognition, object detection, and visual data analysis across industries.",
    subcategory: "Computer Vision",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: ["Image recognition", "Object detection", "Facial recognition", "Custom model training", "Real-time processing", "Cloud deployment"],
    benefits: ["Automated visual analysis", "Quality control", "Security enhancement", "Process automation", "Cost reduction"],
    tags: ["AI", "Computer Vision", "Image Processing", "Automation", "Security"],
    rating: 4.6,
    aiScore: 91
  },
  {
    id: "nlp-processing",
    title: "Natural Language Processing Engine",
    description: "Advanced NLP platform for text analysis, sentiment analysis, and language understanding with custom model capabilities.",
    subcategory: "Natural Language Processing",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: ["Text analysis", "Sentiment analysis", "Language detection", "Custom model training", "API access", "Documentation"],
    benefits: ["Deep text understanding", "Customer insights", "Process automation", "Scalable processing", "Multi-language support"],
    tags: ["AI", "NLP", "Text Analysis", "Sentiment", "Language"],
    rating: 4.8,
    aiScore: 94
>>>>>>> f3114b5ec6e0762a89ac302f1e1c77234f5ec6df
  }
];

export default function AIServicesPage() {
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From chatbots to computer vision, we deliver intelligent automation that drives growth and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                Start AI Transformation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get AI Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Stats */}
      <section className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light">Average AI Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">40%</div>
              <div className="text-zion-slate-light">Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">8+</div>
              <div className="text-zion-slate-light">AI Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">AI Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-light rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zion-cyan">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">AI Service Portfolio</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of AI services, each designed to address specific business challenges 
              and unlock new opportunities through intelligent automation and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-zion-purple">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">AI Score: {service.aiScore}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between p-3 bg-zion-blue-light rounded-lg">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm text-zion-slate">Our Price:</span>
                    </div>
                    <span className="text-2xl font-bold text-zion-purple">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Market Comparison */}
                  <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <span className="font-medium">Market Price:</span> {service.marketPrice}
                    </p>
                    <p className="text-xs text-amber-600 mt-1">
                      You save up to 40% with Zion Tech Group
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-zion-slate">
                    <Clock className="w-4 h-4" />
                    <span>Duration: {service.duration}</span>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="font-medium text-zion-blue mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Use Cases
                    </h4>
                    <ul className="space-y-1">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <li key={index} className="text-sm text-zion-slate flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-zion-cyan" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-medium text-zion-blue mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-zion-slate flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-4 border-t border-zion-blue-light">
                    <div className="text-center space-y-2">
                      <p className="text-xs text-zion-slate">Contact us for this AI service:</p>
                      <div className="flex flex-col gap-1 text-xs">
                        <a 
                          href={`tel:${service.contactInfo.phone}`}
                          className="text-zion-cyan hover:text-zion-purple transition-colors"
                        >
                          {service.contactInfo.phone}
                        </a>
                        <a 
                          href={`mailto:${service.contactInfo.email}`}
                          className="text-zion-cyan hover:text-zion-purple transition-colors"
                        >
                          {service.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/request-quote" className="flex-1">
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Success Stories */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">AI Success Stories</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              See how businesses are transforming their operations with our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zion-blue-light rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">40% Cost Reduction</h3>
              <p className="text-zion-slate-light">
                Manufacturing company achieved 40% cost savings through AI-powered quality control automation.
              </p>
            </div>
            
            <div className="bg-zion-blue-light rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">95% Customer Satisfaction</h3>
              <p className="text-zion-slate-light">
                E-commerce business improved customer satisfaction by 95% with AI-powered chatbot support.
              </p>
            </div>
            
            <div className="bg-zion-blue-light rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">10x Faster Processing</h3>
              <p className="text-zion-slate-light">
                Financial services firm achieved 10x faster document processing with AI automation.
=======
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const filteredServices = AI_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    return matchesSearch && matchesSubcategory;
  });

  const subcategories = ['all', ...Array.from(new Set(AI_SERVICES.map(s => s.subcategory)))];

  const getSubcategoryIcon = (subcategory: string) => {
    const icons: { [key: string]: string } = {
      'Chatbots & Conversational AI': '💬',
      'Content Generation': '✍️',
      'Data Analytics': '📊',
      'Computer Vision': '👁️',
      'Natural Language Processing': '🧠'
    };
    return icons[subcategory] || '🤖';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. 
          From chatbots to predictive analytics, we deliver enterprise-grade AI services.
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
          </div>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.filter(cat => cat !== 'all').map((subcategory) => (
            <div key={subcategory} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl mb-4">{getSubcategoryIcon(subcategory)}</div>
              <h3 className="text-xl font-bold text-white mb-2">{subcategory}</h3>
              <p className="text-zion-slate-light text-sm">
                Advanced AI solutions for {subcategory.toLowerCase()} applications
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-zion-cyan"
            />
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan"
            >
              {subcategories.map(subcategory => (
                <option key={subcategory} value={subcategory} className="bg-zion-slate-dark text-white">
                  {subcategory === 'all' ? 'All AI Services' : subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
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

      {/* AI Success Stories */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            AI Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">60% Cost Reduction</h3>
              <p className="text-zion-slate-light">
                AI chatbot implementation reduced customer service costs by 60% for a Fortune 500 company
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">10x Faster Content</h3>
              <p className="text-zion-slate-light">
                AI content generation increased marketing team productivity by 10x while maintaining quality
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">95% Accuracy</h3>
              <p className="text-zion-slate-light">
                Predictive analytics achieved 95% accuracy in sales forecasting for retail clients
>>>>>>> f3114b5ec6e0762a89ac302f1e1c77234f5ec6df
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Embrace the AI Revolution?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join the AI revolution and transform your business with intelligent automation, predictive insights, and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                Start AI Journey
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Free AI Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
=======
      </div>

      {/* Why AI with Zion */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Zion for AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert AI Team</h3>
                <p className="text-zion-slate-light">
                  Our team includes PhD-level AI researchers and industry veterans with proven track records
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">
                  SOC 2 compliant with enterprise-grade security and data privacy protection
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
                <p className="text-zion-slate-light">
                  24/7 support across all time zones with local expertise and rapid response times
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-zion-slate-light">
                  Track record of successful AI implementations with measurable ROI and business impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our AI experts help you identify the perfect artificial intelligence solutions for your business needs. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get AI Consultation
            </Link>
            <a href="https://ziontechgroup.com" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </div>
>>>>>>> f3114b5ec6e0762a89ac302f1e1c77234f5ec6df
    </div>
  );
}