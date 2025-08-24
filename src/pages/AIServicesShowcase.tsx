import React, { useState } from 'react';
import { comprehensiveServices } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Bot, 
  BarChart3, 
  FileText, 
  Eye, 
  MessageSquare,
  Star,
  CheckCircle,
  TrendingUp,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Sparkles,
  Monitor,
  Database,
  Shield,
  Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const aiServices = comprehensiveServices.filter(service => 
  service.category === 'AI & Machine Learning'
);

const aiCapabilities = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Natural Language Processing",
    description: "Advanced NLP capabilities for understanding and generating human-like text",
    features: ["Text Analysis", "Language Generation", "Sentiment Analysis", "Translation"]
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Intelligent Automation",
    description: "Automate complex business processes with AI-driven decision making",
    features: ["Process Automation", "Smart Workflows", "Predictive Actions", "Learning Systems"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Predictive Analytics",
    description: "Forecast trends and outcomes using machine learning algorithms",
    features: ["Trend Prediction", "Risk Assessment", "Demand Forecasting", "Performance Optimization"]
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Computer Vision",
    description: "Image and video analysis for automated visual inspection and recognition",
    features: ["Object Detection", "Image Classification", "Video Analysis", "Quality Control"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with AI-powered analytics",
    features: ["Data Mining", "Pattern Recognition", "Anomaly Detection", "Real-time Insights"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "AI Security",
    description: "Protect your systems with intelligent threat detection and prevention",
    features: ["Threat Detection", "Behavioral Analysis", "Fraud Prevention", "Security Automation"]
  }
];

const aiIndustries = [
  {
    name: "Healthcare",
    description: "AI-powered diagnostics, patient care, and medical research",
    icon: "🏥",
    benefits: ["Improved Diagnosis", "Patient Monitoring", "Drug Discovery", "Administrative Efficiency"]
  },
  {
    name: "Finance",
    description: "Fraud detection, risk assessment, and automated trading",
    icon: "💳",
    benefits: ["Fraud Prevention", "Risk Management", "Customer Service", "Investment Analysis"]
  },
  {
    name: "Manufacturing",
    description: "Predictive maintenance, quality control, and supply chain optimization",
    icon: "🏭",
    benefits: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Cost Reduction"]
  },
  {
    name: "Retail",
    description: "Personalized recommendations, inventory management, and customer insights",
    icon: "🛍️",
    benefits: ["Personalization", "Inventory Management", "Customer Insights", "Sales Optimization"]
  },
  {
    name: "Education",
    description: "Adaptive learning, student assessment, and administrative automation",
    icon: "🎓",
    benefits: ["Personalized Learning", "Student Assessment", "Administrative Efficiency", "Content Creation"]
  },
  {
    name: "Transportation",
    description: "Route optimization, predictive maintenance, and autonomous systems",
    icon: "🚗",
    benefits: ["Route Optimization", "Predictive Maintenance", "Safety Enhancement", "Cost Reduction"]
  }
];

export default function AIServicesShowcase() {
  const [selectedTab, setSelectedTab] = useState('services');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-zion-cyan mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              AI-Powered Solutions
            </h1>
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence. From chatbots to predictive analytics, 
            our AI solutions drive innovation and growth across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Zap className="w-5 h-5 mr-2" />
                Explore All AI Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Circle className="w-5 h-5 mr-2" />
                Get AI Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Capabilities Overview */}
      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              AI Capabilities & Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI solutions leverage the latest technologies to deliver intelligent, scalable, and cost-effective results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => (
              <Card key={index} className="border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-full flex items-center justify-center text-zion-cyan mb-4">
                    {capability.icon}
                  </div>
                  <CardTitle className="text-lg text-zion-blue">{capability.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-zion-slate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zion-blue mb-4">
                AI Services Portfolio
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Choose from our comprehensive range of AI-powered services designed for modern businesses
              </p>
            </div>
            
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="services" className="text-zion-blue">AI Services</TabsTrigger>
              <TabsTrigger value="industries" className="text-zion-blue">Industries</TabsTrigger>
              <TabsTrigger value="benefits" className="text-zion-blue">Benefits</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service) => (
                  <Card key={service.id} className="h-full border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {service.subcategory}
                        </Badge>
                        {service.featured && (
                          <Badge className="bg-zion-purple text-white text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg text-zion-blue line-clamp-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-zion-slate-light line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-3">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-zion-blue">
                            {service.currency}{service.price.toLocaleString()}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {service.pricingModel}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-zion-slate-light">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span>{service.rating}</span>
                          </div>
                          <div className="text-xs text-zion-slate-light">
                            AI Score: {service.aiScore}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <div className="w-full space-y-3">
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
                            onClick={() => window.open(`tel:${service.contactInfo.phone}`)}
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Call Now
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 border-zion-blue-light text-zion-blue hover:bg-zion-blue/10"
                            onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
                          >
                            <Mail className="w-3 h-3 mr-1" />
                            Email
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="industries" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiIndustries.map((industry, index) => (
                  <Card key={index} className="border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <div className="text-4xl mb-4">{industry.icon}</div>
                      <CardTitle className="text-lg text-zion-blue">{industry.name}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-zion-slate">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-zion-blue">Business Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-zion-blue">Increased Efficiency</h4>
                        <p className="text-zion-slate-light">Automate repetitive tasks and streamline operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Circle className="w-6 h-6 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-zion-blue">Better Decision Making</h4>
                        <p className="text-zion-slate-light">Data-driven insights for strategic planning</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-yellow-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-zion-blue">Cost Reduction</h4>
                        <p className="text-zion-slate-light">Lower operational costs through automation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-zion-blue">Technical Advantages</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Monitor className="w-6 h-6 text-purple-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-zion-blue">Scalable Architecture</h4>
                        <p className="text-zion-slate-light">Grow with your business needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-red-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-zion-blue">Enterprise Security</h4>
                        <p className="text-zion-slate-light">Bank-level security and compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="w-6 h-6 text-cyan-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-zion-blue">Real-time Processing</h4>
                        <p className="text-zion-slate-light">Instant insights and responses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              AI Implementation Process
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful AI integration and maximum ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Evaluate your current systems and identify AI opportunities",
                icon: "🔍"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop a comprehensive AI roadmap aligned with business goals",
                icon: "📋"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Deploy AI solutions with expert guidance and support",
                icon: "⚡"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuously improve and scale AI capabilities",
                icon: "🚀"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center border-zion-blue-light">
                <CardHeader>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <div className="text-sm text-zion-purple font-bold mb-2">{phase.step}</div>
                  <CardTitle className="text-lg text-zion-blue">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify the perfect solutions for your business needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center gap-2 text-zion-cyan">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zion-cyan">
              <Mail className="w-5 h-5" />
              <span className="text-lg font-semibold">kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Circle className="w-5 h-5 mr-2" />
                Get AI Consultation
                <ArrowRight className="w-5 h-2" />
              </Button>
            </Link>
            <Link to="/comprehensive-services">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Brain className="w-5 h-5 mr-2" />
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}