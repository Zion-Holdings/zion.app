import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Brain, 
  Bot, 
  Zap, 
  Shield, 
  Search, 
  Filter,
  Star,
  Clock,
  Award,
  Eye,
  Mic,
  Code,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Play,
  Users,
  CheckCircle,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Target from 'lucide-react/dist/esm/icons/target';
import Palette from 'lucide-react/dist/esm/icons/palette';
import { SEO } from '@/components/SEO';

interface AIService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  expertise: string;
}

const AI_SERVICES: AIService[] = [
  {
    id: "custom-ai-model",
    title: "Custom AI Model Development",
    description: "Tailored machine learning models built specifically for your business needs, from data preprocessing to deployment.",
    category: "Machine Learning",
    price: "$15,000",
    marketPrice: "$25,000",
    features: ["Custom model architecture", "Data preprocessing", "Model training & validation", "API integration", "Performance monitoring"],
    benefits: ["Competitive advantage", "Tailored to your data", "Scalable solution", "ROI optimization"],
    link: "https://ziontechgroup.com/custom-ai-model",
    icon: <Brain className="h-8 w-8 text-zion-cyan" />,
    tags: ["Custom AI", "Machine Learning", "Deep Learning", "Neural Networks"],
    rating: 4.9,
    reviewCount: 67,
    deliveryTime: "8-12 weeks",
    expertise: "Expert Level"
  },
  {
    id: "computer-vision-suite",
    title: "Computer Vision AI Suite",
    description: "Advanced computer vision solutions for object detection, facial recognition, and image analysis across industries.",
    category: "Computer Vision",
    price: "$8,500",
    marketPrice: "$15,000",
    features: ["Object detection", "Facial recognition", "Image segmentation", "Real-time processing", "Multi-platform support"],
    benefits: ["Automate visual tasks", "Improve accuracy", "Reduce manual work", "24/7 operation"],
    link: "https://ziontechgroup.com/computer-vision",
    icon: <Eye className="h-8 w-8 text-zion-purple" />,
    tags: ["Computer Vision", "Image Processing", "Object Detection", "Facial Recognition"],
    rating: 4.8,
    reviewCount: 89,
    deliveryTime: "6-8 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "nlp-chatbot",
    title: "Advanced NLP Chatbot System",
    description: "Intelligent conversational AI with natural language understanding, sentiment analysis, and multi-language support.",
    category: "Natural Language Processing",
    price: "$6,500",
    marketPrice: "$12,000",
    features: ["Natural language understanding", "Sentiment analysis", "Multi-language support", "Context awareness", "Integration APIs"],
    benefits: ["24/7 customer support", "Reduce support costs", "Improve customer satisfaction", "Scalable solution"],
    link: "https://ziontechgroup.com/nlp-chatbot",
    icon: <Bot className="h-8 w-8 text-zion-cyan" />,
    tags: ["NLP", "Chatbot", "Conversational AI", "Sentiment Analysis"],
    rating: 4.7,
    reviewCount: 134,
    deliveryTime: "4-6 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "speech-recognition",
    title: "Enterprise Speech Recognition",
    description: "High-accuracy speech-to-text and text-to-speech systems with noise cancellation and industry-specific terminology.",
    category: "Speech Processing",
    price: "$7,500",
    marketPrice: "$14,000",
    features: ["Speech-to-text", "Text-to-speech", "Noise cancellation", "Industry terminology", "Real-time processing"],
    benefits: ["Improve accessibility", "Automate transcription", "Reduce manual work", "Multi-language support"],
    link: "https://ziontechgroup.com/speech-recognition",
    icon: <Mic className="h-8 w-8 text-zion-purple" />,
    tags: ["Speech Recognition", "Voice Processing", "Transcription", "TTS"],
    rating: 4.8,
    reviewCount: 78,
    deliveryTime: "5-7 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-code-assistant",
    title: "AI-Powered Code Generation",
    description: "Intelligent code generation and optimization tool with support for multiple programming languages and frameworks.",
    category: "AI Development Tools",
    price: "$4,500",
    marketPrice: "$9,000",
    features: ["Multi-language support", "Code optimization", "Bug detection", "Documentation generation", "IDE integration"],
    benefits: ["Faster development", "Reduce bugs", "Improve code quality", "Automate repetitive tasks"],
    link: "https://ziontechgroup.com/ai-code-assistant",
    icon: <Code className="h-8 w-8 text-zion-cyan" />,
    tags: ["Code Generation", "AI Development", "Programming", "Automation"],
    rating: 4.6,
    reviewCount: 156,
    deliveryTime: "3-5 weeks",
    expertise: "Intermediate Level"
  },
  {
    id: "predictive-analytics",
    title: "AI Predictive Analytics Platform",
    description: "Advanced predictive modeling and forecasting system with real-time data processing and actionable insights.",
    category: "Predictive Analytics",
    price: "$9,500",
    marketPrice: "$18,000",
    features: ["Predictive modeling", "Real-time processing", "Data visualization", "Automated insights", "API access"],
    benefits: ["Data-driven decisions", "Predict trends", "Optimize operations", "Competitive advantage"],
    link: "https://ziontechgroup.com/predictive-analytics",
    icon: <BarChart3 className="h-8 w-8 text-zion-purple" />,
    tags: ["Predictive Analytics", "Forecasting", "Data Science", "Business Intelligence"],
    rating: 4.9,
    reviewCount: 92,
    deliveryTime: "6-9 weeks",
    expertise: "Expert Level"
  },
  {
    id: "ai-security",
    title: "AI-Powered Cybersecurity",
    description: "Intelligent threat detection and response system using machine learning to identify and prevent cyber attacks.",
    category: "AI Security",
    price: "$12,000",
    marketPrice: "$22,000",
    features: ["Threat detection", "Behavioral analysis", "Automated response", "Compliance reporting", "Real-time monitoring"],
    benefits: ["Prevent attacks", "Reduce false positives", "Automate security", "Meet compliance"],
    link: "https://ziontechgroup.com/ai-security",
    icon: <Shield className="h-8 w-8 text-zion-cyan" />,
    tags: ["Cybersecurity", "AI Security", "Threat Detection", "Compliance"],
    rating: 4.9,
    reviewCount: 45,
    deliveryTime: "8-10 weeks",
    expertise: "Expert Level"
  },
  {
    id: "ai-automation",
    title: "Intelligent Process Automation",
    description: "AI-driven automation platform that learns and optimizes business processes for maximum efficiency.",
    category: "Process Automation",
    price: "$8,000",
    marketPrice: "$15,000",
    features: ["Process learning", "Workflow optimization", "Integration support", "Performance analytics", "Custom automation"],
    benefits: ["Increase efficiency", "Reduce costs", "Improve accuracy", "Scale operations"],
    link: "https://ziontechgroup.com/ai-automation",
    icon: <Zap className="h-8 w-8 text-zion-purple" />,
    tags: ["Process Automation", "Workflow", "Efficiency", "Optimization"],
    rating: 4.7,
    reviewCount: 112,
    deliveryTime: "5-7 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-recommendation",
    title: "AI Recommendation Engine",
    description: "Personalized recommendation system using machine learning to improve user engagement and conversion rates.",
    category: "Recommendation Systems",
    price: "$6,000",
    marketPrice: "$11,000",
    features: ["Personalized recommendations", "Real-time learning", "Multi-channel support", "A/B testing", "Analytics dashboard"],
    benefits: ["Increase engagement", "Improve conversions", "Personalize experience", "Data insights"],
    link: "https://ziontechgroup.com/ai-recommendations",
    icon: <Target className="h-8 w-8 text-zion-cyan" />,
    tags: ["Recommendations", "Personalization", "Machine Learning", "User Experience"],
    rating: 4.8,
    reviewCount: 89,
    deliveryTime: "4-6 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-data-processing",
    title: "AI Data Processing Pipeline",
    description: "Intelligent data processing and ETL system with automated data cleaning, transformation, and quality assurance.",
    category: "Data Processing",
    price: "$7,000",
    marketPrice: "$13,000",
    features: ["Data cleaning", "ETL automation", "Quality assurance", "Real-time processing", "Scalable architecture"],
    benefits: ["Improve data quality", "Automate processing", "Reduce errors", "Scale efficiently"],
    link: "https://ziontechgroup.com/ai-data-processing",
    icon: <Database className="h-8 w-8 text-zion-purple" />,
    tags: ["Data Processing", "ETL", "Data Quality", "Automation"],
    rating: 4.6,
    reviewCount: 67,
    deliveryTime: "5-7 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-edge-computing",
    title: "AI Edge Computing Solutions",
    description: "Edge AI deployment for real-time processing with optimized models for IoT devices and edge networks.",
    category: "Edge AI",
    price: "$10,000",
    marketPrice: "$19,000",
    features: ["Edge deployment", "Model optimization", "Real-time processing", "IoT integration", "Network optimization"],
    benefits: ["Low latency", "Reduce bandwidth", "Offline operation", "Scalable deployment"],
    link: "https://ziontechgroup.com/ai-edge-computing",
    icon: <Network className="h-8 w-8 text-zion-cyan" />,
    tags: ["Edge Computing", "IoT", "Real-time", "Optimization"],
    rating: 4.8,
    reviewCount: 34,
    deliveryTime: "7-9 weeks",
    expertise: "Expert Level"
  },
  {
    id: "ai-mobile-apps",
    title: "AI-Enhanced Mobile Applications",
    description: "Mobile apps with integrated AI features including image recognition, voice processing, and personalized experiences.",
    category: "Mobile AI",
    price: "$5,500",
    marketPrice: "$10,000",
    features: ["AI integration", "Cross-platform", "Performance optimization", "User experience", "Analytics"],
    benefits: ["Enhanced user experience", "Competitive advantage", "Increased engagement", "Personalization"],
    link: "https://ziontechgroup.com/ai-mobile-apps",
    icon: <Smartphone className="h-8 w-8 text-zion-purple" />,
    tags: ["Mobile AI", "App Development", "User Experience", "Personalization"],
    rating: 4.7,
    reviewCount: 123,
    deliveryTime: "4-6 weeks",
    expertise: "Intermediate Level"
  }
];

const categories = [
  { name: "All AI Services", value: "all", icon: <Brain className="h-4 w-4" /> },
  { name: "Machine Learning", value: "machine learning", icon: <Brain className="h-4 w-4" /> },
  { name: "Computer Vision", value: "computer vision", icon: <Eye className="h-4 w-4" /> },
  { name: "NLP", value: "nlp", icon: <Bot className="h-4 w-4" /> },
  { name: "Speech Processing", value: "speech", icon: <Mic className="h-4 w-4" /> },
  { name: "Development Tools", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Shield className="h-4 w-4" /> }
];

export default function AIServices() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredServices = AI_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "all" || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.tags.some(tag => tag.toLowerCase().includes(selectedCategory));
    
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="AI Services & Solutions - Zion Tech Group" 
        description="Expert AI development services including machine learning, computer vision, NLP, and custom AI solutions for businesses."
        keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, custom AI development"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated background with more particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
          <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 rounded-full bg-zion-cyan opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/6 w-2.5 h-2.5 rounded-full bg-zion-purple-light opacity-30 animate-pulse delay-500"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence. From custom ML models to enterprise AI solutions, 
            we deliver intelligent technology that drives growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6"
              size="lg"
            >
              Start AI Project
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6">
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-zion-slate-light">AI Projects Delivered</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">98%</div>
            <div className="text-zion-slate-light">Client Satisfaction</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">50+</div>
            <div className="text-zion-slate-light">AI Experts</div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.value
                      ? "bg-zion-purple text-white"
                      : "border-zion-blue-light text-zion-slate-light hover:bg-zion-purple/10"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/30 border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-zion-slate-dark/50 rounded-xl">
                    {service.icon}
                  </div>
                  <Badge className="bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pricing and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light line-through ml-2">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-zion-purple" />
                    <span className="text-zion-slate-light">{service.expertise}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-zion-purple" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-zion-slate-dark/50 text-zion-slate-light border-zion-blue-light">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            We follow a proven methodology to deliver high-quality AI solutions that meet your business objectives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-cyan">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Discovery & Analysis</h3>
            <p className="text-zion-slate-light">Understand your requirements and analyze data for AI solution design.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-purple">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Model Development</h3>
            <p className="text-zion-slate-light">Build and train AI models using state-of-the-art algorithms and frameworks.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-cyan">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Testing & Validation</h3>
            <p className="text-zion-slate-light">Rigorous testing and validation to ensure accuracy and performance.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-purple">4</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Deployment & Support</h3>
            <p className="text-zion-slate-light">Seamless deployment with ongoing support and maintenance.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how artificial intelligence can transform your business operations 
            and give you a competitive edge in the market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg py-6">
              Start Your AI Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple text-lg py-6">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-zion-blue-dark/30 rounded-2xl p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-zion-slate-light text-lg">
              Our AI experts are ready to help you create intelligent solutions that drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-cyan">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-purple">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-cyan">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}