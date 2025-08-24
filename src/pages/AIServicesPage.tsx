import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Code, 
  Database, 
  Globe,
  Cpu,
  Eye,
  Lock,
  TrendingUp,
  Users,
  Target,
  Sparkles
} from "lucide-react";

export default function AIServicesPage() {
  const aiServices = [
    {
      id: "ai-chatbot",
      title: "AI Chatbot Development",
      description: "Custom AI-powered chatbots for customer service, sales, and support with natural language processing.",
      price: 2500,
      currency: "$",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Integration APIs",
        "Analytics Dashboard",
        "24/7 Availability"
      ],
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      category: "Conversational AI",
      badge: "Popular",
      link: "https://ziontechgroup.com/ai-chatbot",
      contact: "+1 302 464 0950"
    },
    {
      id: "ai-analytics",
      title: "AI-Powered Analytics",
      description: "Advanced business intelligence with machine learning insights and predictive analytics.",
      price: 4000,
      currency: "$",
      features: [
        "Predictive Analytics",
        "Real-time Dashboards",
        "Custom ML Models",
        "Data Visualization",
        "Automated Reporting"
      ],
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      category: "Business Intelligence",
      badge: "Featured",
      link: "https://ziontechgroup.com/ai-analytics",
      contact: "+1 302 464 0950"
    },
    {
      id: "ai-security",
      title: "AI Security & Threat Detection",
      description: "Intelligent cybersecurity solutions with real-time threat detection and automated response.",
      price: 6000,
      currency: "$",
      features: [
        "Real-time Threat Detection",
        "Behavioral Analysis",
        "Automated Response",
        "Compliance Reporting",
        "24/7 Monitoring"
      ],
      icon: <Shield className="h-8 w-8 text-red-500" />,
      category: "Cybersecurity",
      badge: "Premium",
      link: "https://ziontechgroup.com/ai-security",
      contact: "+1 302 464 0950"
    },
    {
      id: "ai-automation",
      title: "AI Process Automation",
      description: "Intelligent automation solutions to streamline business processes and reduce manual work.",
      price: 3500,
      currency: "$",
      features: [
        "Workflow Automation",
        "Document Processing",
        "Data Entry Automation",
        "Process Optimization",
        "ROI Tracking"
      ],
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      category: "Automation",
      badge: "New",
      link: "https://ziontechgroup.com/ai-automation",
      contact: "+1 302 464 0950"
    },
    {
      id: "ai-vision",
      title: "Computer Vision Solutions",
      description: "Advanced image and video analysis for quality control, security, and automation.",
      price: 5000,
      currency: "$",
      features: [
        "Object Detection",
        "Quality Control",
        "Facial Recognition",
        "Video Analytics",
        "Custom Training"
      ],
      icon: <Eye className="h-8 w-8 text-purple-500" />,
      category: "Computer Vision",
      badge: "Advanced",
      link: "https://ziontechgroup.com/ai-vision",
      contact: "+1 302 464 0950"
    },
    {
      id: "ai-nlp",
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding for business applications.",
      price: 3000,
      currency: "$",
      features: [
        "Sentiment Analysis",
        "Text Classification",
        "Language Translation",
        "Content Generation",
        "API Integration"
      ],
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      category: "NLP",
      badge: "Popular",
      link: "https://ziontechgroup.com/ai-nlp",
      contact: "+1 302 464 0950"
    },
    {
      id: "ai-recommendation",
      title: "AI Recommendation Engine",
      description: "Personalized recommendation systems for e-commerce, content, and product discovery.",
      price: 4500,
      currency: "$",
      features: [
        "Personalized Recommendations",
        "Real-time Learning",
        "A/B Testing",
        "Performance Analytics",
        "Scalable Architecture"
      ],
      icon: <Target className="h-8 w-8 text-pink-500" />,
      category: "Recommendation Systems",
      badge: "Featured",
      link: "https://ziontechgroup.com/ai-recommendations",
      contact: "+1 302 464 0950"
    },
    {
      id: "ai-forecasting",
      title: "AI Demand Forecasting",
      description: "Predictive analytics for inventory management, sales forecasting, and resource planning.",
      price: 3800,
      currency: "$",
      features: [
        "Demand Prediction",
        "Seasonal Analysis",
        "Trend Detection",
        "Confidence Intervals",
        "Integration APIs"
      ],
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />,
      category: "Forecasting",
      badge: "New",
      link: "https://ziontechgroup.com/ai-forecasting",
      contact: "+1 302 464 0950"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
            AI-Powered Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence services. 
            From chatbots to predictive analytics, we deliver intelligent solutions that drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
              <Sparkles className="h-5 w-5 mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Users className="h-5 w-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our AI Services Portfolio
          </h2>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            Comprehensive AI solutions designed to solve real business challenges and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service) => (
            <Card key={service.id} className="bg-zion-slate/50 border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  {service.icon}
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-zion-slate-light">Starting Price</span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-zion-slate-light flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 space-y-3">
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-zion-slate-light mb-1">Contact Sales</p>
                    <a 
                      href={`tel:${service.contact}`}
                      className="text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors"
                    >
                      {service.contact}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto mb-8">
            Let's discuss how our AI solutions can help you achieve your business goals. 
            Get in touch for a personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Globe className="h-5 w-5 mr-2" />
              Visit Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}