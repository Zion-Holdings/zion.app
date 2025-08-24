import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Database, 
  Code, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  MessageSquare, 
  Eye,
  Server,
  Network,
  Circle,
  FileText,
  Video,
  Mic,
  Monitor,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      id: 'ai-development',
      title: 'AI Development & Integration',
      description: 'Custom AI solutions development and seamless integration into existing systems',
      category: 'Development',
      price: 'From $5,000',
      features: ['Custom AI Models', 'API Integration', 'Performance Optimization', 'Scalability Planning'],
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      badge: 'Popular',
      rating: 4.9,
      reviewCount: 156,
      link: '/services/ai-development'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'End-to-end machine learning pipeline development and deployment',
      category: 'ML/AI',
      price: 'From $3,500',
      features: ['Data Preprocessing', 'Model Training', 'Deployment', 'Monitoring'],
      icon: <Server className="h-8 w-8 text-zion-purple" />,
      badge: 'Featured',
      rating: 4.8,
      reviewCount: 89,
      link: '/services/machine-learning'
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Transform raw data into actionable business insights with advanced analytics',
      category: 'Analytics',
      price: 'From $4,200',
      features: ['Data Mining', 'Statistical Analysis', 'Visualization', 'Predictive Modeling'],
      icon: <BarChart3 className="h-8 w-8 text-zion-blue" />,
      rating: 4.7,
      reviewCount: 134,
      link: '/services/data-science'
    },
    {
      id: 'nlp-processing',
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment analysis, and language understanding systems',
      category: 'NLP',
      price: 'From $3,800',
      features: ['Text Analysis', 'Sentiment Detection', 'Language Models', 'Translation'],
      icon: <MessageSquare className="h-8 w-8 text-emerald-500" />,
      rating: 4.6,
      reviewCount: 67,
      link: '/services/nlp-processing'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis, object detection, and visual AI applications',
      category: 'Vision',
      price: 'From $4,500',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      icon: <Eye className="h-8 w-8 text-amber-500" />,
      rating: 4.8,
      reviewCount: 92,
      link: '/services/computer-vision'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions to streamline business processes',
      category: 'Automation',
      price: 'From $2,800',
      features: ['Workflow Automation', 'Document Processing', 'Decision Support', 'Process Optimization'],
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      badge: 'New',
      rating: 4.5,
      reviewCount: 45,
      link: '/services/ai-automation'
    },
    {
      id: 'ai-consulting',
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance for AI adoption and digital transformation',
      category: 'Consulting',
      price: 'From $6,000',
      features: ['AI Roadmap', 'Technology Assessment', 'Implementation Planning', 'ROI Analysis'],
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      rating: 4.9,
      reviewCount: 78,
      link: '/services/ai-consulting'
    },
    {
      id: 'ai-security',
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and security automation using artificial intelligence',
      category: 'Security',
      price: 'From $5,500',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
      icon: <Shield className="h-8 w-8 text-red-500" />,
      rating: 4.7,
      reviewCount: 112,
      link: '/services/ai-security'
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI for customer service and support',
      category: 'Chatbots',
      price: 'From $2,500',
      features: ['Conversational AI', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      rating: 4.6,
      reviewCount: 89,
      link: '/services/ai-chatbots'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing, documentation, and creative projects',
      category: 'Content',
      price: 'From $1,800',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization'],
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      rating: 4.4,
      reviewCount: 56,
      link: '/services/ai-content-generation'
    },
    {
      id: 'ai-voice-assistants',
      title: 'Voice AI & Speech Recognition',
      description: 'Voice-enabled AI solutions for hands-free interaction and accessibility',
      category: 'Voice',
      price: 'From $3,200',
      features: ['Speech Recognition', 'Voice Synthesis', 'Multi-language', 'Custom Wake Words'],
      icon: <Mic className="h-8 w-8 text-blue-500" />,
      rating: 4.5,
      reviewCount: 43,
      link: '/services/ai-voice-assistants'
    },
    {
      id: 'ai-iot-solutions',
      title: 'AI IoT Solutions',
      description: 'Intelligent Internet of Things solutions with AI-powered analytics',
      category: 'IoT',
      price: 'From $4,800',
      features: ['Sensor Integration', 'Real-time Analytics', 'Predictive Maintenance', 'Edge Computing'],
      icon: <Network className="h-8 w-8 text-cyan-500" />,
      rating: 4.6,
      reviewCount: 38,
      link: '/services/ai-iot-solutions'
    }
  ];

  const categories = [
    { name: 'All Services', count: aiServices.length, active: true },
    { name: 'Development', count: aiServices.filter(s => s.category === 'Development').length },
    { name: 'ML/AI', count: aiServices.filter(s => s.category === 'ML/AI').length },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length },
    { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length }
  ];

  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Comprehensive AI services including development, machine learning, data science, and automation solutions. Transform your business with cutting-edge AI technology."
        keywords="AI services, machine learning, data science, artificial intelligence, AI development, AI consulting"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-zion-blue/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                AI Services & Solutions
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From custom AI development 
                to machine learning implementation, we deliver intelligent solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
                  <Link to="/request-quote">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose from our extensive portfolio of AI services, each designed to address specific business challenges 
                and drive measurable results.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={category.active ? "bg-zion-purple text-white" : "border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      {service.icon}
                      {service.badge && (
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-muted-foreground">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">({service.reviewCount})</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                  </CardContent>
                  
                  <CardContent className="pt-0">
                    <Button asChild className="w-full group-hover:bg-zion-purple group-hover:text-white transition-all duration-300">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify the right solutions for your business. 
              Get a free consultation and discover how AI can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your AI Journey</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}