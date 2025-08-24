import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Globe,
  Database,
  Code,
  Lock,
  Sparkles
} from "lucide-react";
import { COMPREHENSIVE_SERVICES } from "@/data/comprehensiveServices";

export default function AIServicesShowcase() {
  const aiServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category.includes('AI') || 
    service.tags.some(tag => tag.toLowerCase().includes('ai'))
  );

  const aiCategories = [
    {
      name: "AI Automation",
      description: "Intelligent process automation and workflow optimization",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-600",
      services: aiServices.filter(s => s.category.includes('Automation'))
    },
    {
      name: "AI Content Generation",
      description: "AI-powered content creation and optimization",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-600",
      services: aiServices.filter(s => s.category.includes('Content'))
    },
    {
      name: "AI Analytics",
      description: "Predictive analytics and intelligent insights",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600",
      services: aiServices.filter(s => s.category.includes('Analytics'))
    },
    {
      name: "AI Security",
      description: "Intelligent threat detection and response",
      icon: <Shield className="h-8 w-8" />,
      color: "from-red-500 to-pink-600",
      services: aiServices.filter(s => s.category.includes('Security'))
    }
  ];

  const aiUseCases = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots and virtual assistants for 24/7 customer support",
      benefits: ["Reduce response time by 90%", "Handle 80% of common queries", "Improve customer satisfaction"],
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and identify opportunities with machine learning",
      benefits: ["Increase revenue by 15-25%", "Reduce operational costs", "Improve decision making"],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Content Generation",
      description: "Automated content creation for marketing and communications",
      benefits: ["Scale content production 10x", "Maintain brand consistency", "Optimize for SEO"],
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Security Intelligence",
      description: "AI-powered threat detection and automated incident response",
      benefits: ["Detect threats 60% faster", "Reduce false positives", "Automate response actions"],
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <>
      <SEO 
        title="AI Services Showcase - Zion Tech Group" 
        description="Discover our cutting-edge AI services including automation, content generation, analytics, and security. Transform your business with intelligent solutions."
        keywords="AI services, machine learning, automation, content generation, predictive analytics, AI security"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-zion-purple to-zion-cyan p-4 rounded-full">
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
            <GradientHeading className="text-5xl md:text-6xl mb-6">
              AI-Powered Solutions
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence. From automation to predictive analytics, 
              our AI services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get AI Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Banner */}
        <section className="py-8 bg-zion-blue-light border-b border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Headquarters</p>
                  <p className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-cyan/20 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Contact</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Categories */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>AI Service Categories</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered solutions across multiple domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiCategories.map((category) => (
                <Card key={category.name} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group">
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-t-lg flex items-center justify-center`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <p className="text-zion-cyan font-medium mb-2">
                        {category.services.length} Services Available
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.services.slice(0, 2).map((service) => (
                          <Badge key={service.id} variant="secondary" className="bg-zion-blue-light text-zion-slate-light text-xs">
                            {service.title.split(' ').slice(0, 2).join(' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    >
                      <a href={`/comprehensive-services?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        Explore {category.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Use Cases */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>AI Use Cases & Benefits</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Real-world applications and measurable benefits of our AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiUseCases.map((useCase) => (
                <Card key={useCase.title} className="bg-zion-blue border border-zion-blue-light p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-zion-purple/20 p-3 rounded-full">
                      <div className="text-zion-purple">
                        {useCase.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-zion-slate-light">{useCase.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-zion-cyan font-medium">Key Benefits:</p>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured AI Services */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Featured AI Services</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Our most popular and innovative AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.slice(0, 6).map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group">
                  <div className="relative">
                    <img 
                      src={service.images[0]} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.featured && (
                      <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                        Featured
                      </Badge>
                    )}
                    <Badge className="absolute top-4 left-4 bg-zion-cyan text-white">
                      AI Score: {service.aiScore}%
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-zion-purple" />
                      <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price?.toLocaleString()}
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          Starting Price
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    >
                      <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                        Get AI Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Technology Stack */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>AI Technology Stack</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Built with cutting-edge AI technologies and frameworks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Machine Learning</h3>
                <p className="text-zion-slate-light text-sm">TensorFlow, PyTorch, Scikit-learn</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Deep Learning</h3>
                <p className="text-zion-slate-light text-sm">Neural Networks, CNN, RNN, Transformers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Database className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Data Processing</h3>
                <p className="text-zion-slate-light text-sm">Pandas, NumPy, Apache Spark</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI APIs</h3>
                <p className="text-zion-slate-light text-sm">OpenAI, Azure AI, AWS SageMaker</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Contact our AI experts today for a free consultation and discover how artificial intelligence 
              can transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule AI Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-zion-slate-light mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-zion-slate-light">
                <Clock className="inline h-4 w-4 mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}