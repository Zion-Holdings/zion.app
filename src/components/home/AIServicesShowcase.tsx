import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Monitor,
  Database,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

export function AIServicesShowcase() {
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const aiServices = [
    {
      id: "ai-development",
      title: "Custom AI Development",
      description: "Full-stack AI solutions tailored to your business needs",
      icon: <Brain className="h-8 w-8" />,
      price: 8000,
      duration: "8-12 weeks",
      features: [
        "Custom ML model development",
        "API integration & deployment",
        "Performance optimization",
        "Scalability planning",
        "Documentation & training"
      ],
      useCases: ["Predictive analytics", "Process automation", "Customer insights"],
      technologies: ["TensorFlow", "PyTorch", "AWS SageMaker", "Azure ML"],
      successRate: 95,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "ml-training",
      title: "ML Model Training",
      description: "Specialized machine learning model training and optimization",
      icon: <Monitor className="h-8 w-8" />,
      price: 12000,
      duration: "6-10 weeks",
      features: [
        "Data preprocessing & cleaning",
        "Model architecture design",
        "Hyperparameter optimization",
        "Training pipeline setup",
        "Model validation & testing"
      ],
      useCases: ["Computer vision", "Natural language processing", "Time series forecasting"],
      technologies: ["Scikit-learn", "Keras", "MLflow", "Weights & Biases"],
      successRate: 92,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: "ai-strategy",
      title: "AI Strategy Consulting",
      description: "Strategic AI implementation planning and ROI analysis",
      icon: <TrendingUp className="h-8 w-8" />,
      price: 5000,
      duration: "2-4 weeks",
      features: [
        "AI readiness assessment",
        "ROI analysis & business case",
        "Technology roadmap",
        "Implementation strategy",
        "Change management planning"
      ],
      useCases: ["Digital transformation", "Process optimization", "Innovation strategy"],
      technologies: ["Business Intelligence", "Process Mining", "Analytics Platforms"],
      successRate: 98,
      color: "from-emerald-500 to-green-600"
    },
    {
      id: "nlp-solutions",
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text and speech processing",
      icon: <MessageSquare className="h-8 w-8" />,
      price: 6000,
      duration: "4-8 weeks",
      features: [
        "Text classification & sentiment analysis",
        "Named entity recognition",
        "Language translation",
        "Chatbot development",
        "Document processing"
      ],
      useCases: ["Customer service automation", "Content analysis", "Multilingual support"],
      technologies: ["BERT", "GPT models", "SpaCy", "Hugging Face"],
      successRate: 94,
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "computer-vision",
      title: "Computer Vision Solutions",
      description: "Image and video analysis for business applications",
      icon: <Eye className="h-8 w-8" />,
      price: 10000,
      duration: "6-10 weeks",
      features: [
        "Object detection & recognition",
        "Image classification",
        "Video analysis",
        "Facial recognition",
        "Quality control automation"
      ],
      useCases: ["Manufacturing quality control", "Security monitoring", "Retail analytics"],
      technologies: ["OpenCV", "YOLO", "ResNet", "TensorFlow Object Detection"],
      successRate: 96,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting models",
      icon: <BarChart3 className="h-8 w-8" />,
      price: 7000,
      duration: "4-8 weeks",
      features: [
        "Data analysis & visualization",
        "Statistical modeling",
        "Forecasting algorithms",
        "Risk assessment",
        "Performance monitoring"
      ],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization"],
      technologies: ["Python", "R", "Tableau", "Power BI"],
      successRate: 93,
      color: "from-violet-500 to-purple-600"
    }
  ];

  const stats = [
    { label: "AI Projects Delivered", value: "150+", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Success Rate", value: "95%", icon: <Star className="h-5 w-5" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Users className="h-5 w-5" /> },
    { label: "Global Reach", value: "25+ Countries", icon: <Globe className="h-5 w-5" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 via-transparent to-zion-cyan/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
            AI & Machine Learning Excellence
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From custom AI development to strategic consulting, we deliver results that drive growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2 text-zion-cyan">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark border border-zion-purple/30">
            <TabsTrigger value="overview" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              Service Overview
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              Pricing & ROI
            </TabsTrigger>
            <TabsTrigger value="process" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              Our Process
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service) => (
                <Card 
                  key={service.id} 
                  className={`group overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 cursor-pointer ${
                    hoveredService === service.id ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                        {service.icon}
                      </div>
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                        ${service.price.toLocaleString()}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">Duration:</span>
                        <span className="text-white font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">Success Rate:</span>
                        <div className="flex items-center gap-2">
                          <Progress value={service.successRate} className="w-20 h-2" />
                          <span className="text-white font-medium">{service.successRate}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-medium text-zion-cyan">Key Features:</h4>
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    >
                      <Link to={`/services?category=ai-services&service=${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pricing & ROI Tab */}
          <TabsContent value="pricing" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ROI Calculator */}
              <Card className="border-zion-blue-light bg-zion-blue-dark/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">ROI Calculator</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Calculate the potential return on investment for AI implementation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-zion-cyan mb-2 block">
                        Current Annual Revenue
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light">$</span>
                        <input 
                          type="number" 
                          placeholder="1,000,000"
                          className="w-full pl-8 pr-4 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder:text-zion-slate-light"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-zion-cyan mb-2 block">
                        Expected Efficiency Improvement (%)
                      </label>
                      <input 
                        type="range" 
                        min="5" 
                        max="50" 
                        defaultValue="20"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zion-slate-light mt-1">
                        <span>5%</span>
                        <span>20%</span>
                        <span>50%</span>
                      </div>
                    </div>

                    <div className="bg-zion-purple/20 p-4 rounded-lg border border-zion-purple/30">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-zion-cyan mb-1">$200,000</div>
                        <div className="text-sm text-zion-slate-light">Potential Annual Savings</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing Comparison */}
              <Card className="border-zion-blue-light bg-zion-blue-dark/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Pricing Comparison</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    See how our AI services compare to market rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-zion-blue-dark/50 rounded-lg">
                      <span className="text-white">Custom AI Development</span>
                      <div className="text-right">
                        <div className="text-zion-cyan font-bold">$8,000</div>
                        <div className="text-xs text-zion-slate-light">Market: $15,000+</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-zion-blue-dark/50 rounded-lg">
                      <span className="text-white">ML Model Training</span>
                      <div className="text-right">
                        <div className="text-zion-cyan font-bold">$12,000</div>
                        <div className="text-xs text-zion-slate-light">Market: $25,000+</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-zion-blue-dark/50 rounded-lg">
                      <span className="text-white">AI Strategy Consulting</span>
                      <div className="text-right">
                        <div className="text-zion-cyan font-bold">$5,000</div>
                        <div className="text-xs text-zion-slate-light">Market: $10,000+</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Process Tab */}
          <TabsContent value="process" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Analysis",
                    description: "We analyze your business needs and identify AI opportunities",
                    icon: <Brain className="h-8 w-8" />,
                    color: "from-purple-500 to-indigo-600"
                  },
                  {
                    step: "02",
                    title: "Strategy & Planning",
                    description: "Develop comprehensive AI strategy and implementation roadmap",
                    icon: <TrendingUp className="h-8 w-8" />,
                    color: "from-cyan-500 to-blue-600"
                  },
                  {
                    step: "03",
                    title: "Development & Testing",
                    description: "Build, test, and optimize AI solutions for your business",
                    icon: <Monitor className="h-8 w-8" />,
                    color: "from-emerald-500 to-green-600"
                  },
                  {
                    step: "04",
                    title: "Deployment & Support",
                    description: "Deploy solutions and provide ongoing support and optimization",
                    icon: <Cloud className="h-8 w-8" />,
                    color: "from-amber-500 to-orange-600"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`rounded-full w-20 h-20 bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto mb-4`}>
                      {step.icon}
                    </div>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-zion-slate-light">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-8 border border-zion-purple/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join leading companies already leveraging our AI solutions. 
              Get a free consultation and discover how AI can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                asChild
              >
                <Link to="/request-quote">
                  <Brain className="mr-2 h-5 w-5" />
                  Get Free AI Consultation
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <Link to="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Discuss Your Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}