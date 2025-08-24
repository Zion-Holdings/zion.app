import React, { useState } from 'react';
import { 
  MICRO_SERVICES, 
  MicroService,
  getServicesByCategory
} from '@/data/comprehensiveServices';
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
} from '@/components/ui/icons';
import { SEO } from '@/components/SEO';

const aiServices = getServicesByCategory('ai-services');

const AIServiceCard: React.FC<{ service: MicroService }> = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);

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
            {service.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
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
            className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan transition-colors"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
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

const AIFeatureSection: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Machine Learning</h3>
      <p className="text-zion-slate-light text-sm">Advanced ML models and algorithms for predictive analytics</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Bot className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">AI Automation</h3>
      <p className="text-zion-slate-light text-sm">Intelligent automation for business processes</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <BarChart3 className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Data Intelligence</h3>
      <p className="text-zion-slate-light text-sm">Deep insights from complex data analysis</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <PenTool className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Content Creation</h3>
      <p className="text-zion-slate-light text-sm">AI-powered content generation and optimization</p>
    </div>
  </div>
);

const AIBenefitsSection: React.FC = () => (
  <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-12">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose AI Solutions?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Precision & Accuracy</h3>
          <p className="text-zion-slate-light text-sm">AI systems provide consistent, accurate results with minimal errors</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Speed & Efficiency</h3>
          <p className="text-zion-slate-light text-sm">Process large amounts of data and tasks in seconds, not hours</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Scalability</h3>
          <p className="text-zion-slate-light text-sm">Grow your operations without proportional cost increases</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Innovation</h3>
          <p className="text-zion-slate-light text-sm">Stay ahead of competition with cutting-edge AI capabilities</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-zion-slate-light text-sm">Advanced threat detection and security automation</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Integration</h3>
          <p className="text-zion-slate-light text-sm">Seamlessly integrate with existing systems and workflows</p>
        </div>
      </div>
    </div>
  </div>
);

const AICaseStudiesSection: React.FC = () => (
  <div className="space-y-6 mb-12">
    <h2 className="text-3xl font-bold text-white text-center mb-8">AI Success Stories</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Customer Service AI</h3>
            <p className="text-zion-slate-light text-sm">E-commerce Company</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm mb-4">
          Implemented AI chatbot that handles 80% of customer inquiries, reducing response time from 2 hours to 30 seconds.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-green-400">↑ 300%</span>
          <span className="text-zion-slate-light">Customer Satisfaction</span>
        </div>
      </div>
      
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Predictive Analytics</h3>
            <p className="text-zion-slate-light text-sm">Financial Services</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm mb-4">
          AI-powered risk assessment system that predicts market trends with 92% accuracy, improving investment decisions.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-green-400">↑ 25%</span>
          <span className="text-zion-slate-light">Portfolio Returns</span>
        </div>
      </div>
    </div>
  </div>
);

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group" 
        description="Expert AI development, machine learning, and intelligent automation services. Transform your business with cutting-edge AI solutions at competitive prices."
        keywords="AI services, machine learning, chatbot development, data analytics, content generation, AI automation, predictive analytics"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark to-zion-blue py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI & Machine Learning Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge AI solutions. From intelligent chatbots to predictive analytics, 
            we deliver innovative AI services that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get AI Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <AIFeatureSection />
        <AIBenefitsSection />
        <AICaseStudiesSection />
        
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive AI solutions designed to meet your business needs. Each service is crafted with expertise 
              and delivered with precision to ensure maximum value and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <AIServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-zion-blue-dark border-t border-zion-blue-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Let's discuss how AI can transform your business operations, improve efficiency, and drive innovation. 
            Our experts are ready to help you implement the right AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Start AI Project
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Mobile: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
=======
import React from 'react';
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
  }
];

export default function AIServicesPage() {
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
              </p>
            </div>
          </div>
        </div>
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
>>>>>>> df388ff54f8b91ea2191d11a1d0b66b487f26c10
    </div>
  );
}