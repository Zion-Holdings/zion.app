import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { 
  Brain, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Image, 
  Code, 
  Shield, 
  Globe,
  ArrowRight,
  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const AI_SERVICES = [
  {
    id: "ai-content-generation",
    title: "AI Content Generation",
    description: "Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "Product descriptions",
      "SEO optimization",
      "Multi-language support"
    ],
    pricing: {
      starter: "$99/month",
      professional: "$299/month",
      enterprise: "$999/month"
    },
    icon: <MessageSquare className="h-8 w-8" />,
    category: "Content Creation",
    rating: 4.9,
    reviewCount: 1247,
    badge: "Most Popular"
  },
  {
    id: "ai-data-analytics",
    title: "AI Data Analytics Platform",
    description: "Advanced analytics and insights powered by machine learning for business intelligence.",
    features: [
      "Predictive analytics",
      "Real-time dashboards",
      "Custom reporting",
      "Data visualization",
      "Trend forecasting",
      "API integration"
    ],
    pricing: {
      starter: "$199/month",
      professional: "$499/month",
      enterprise: "$1499/month"
    },
    icon: <BarChart3 className="h-8 w-8" />,
    category: "Analytics",
    rating: 4.8,
    reviewCount: 892,
    badge: "Trending"
  },
  {
    id: "ai-automation-hub",
    title: "AI Automation Hub",
    description: "Automate repetitive tasks and workflows with intelligent AI-powered automation.",
    features: [
      "Workflow automation",
      "Process optimization",
      "Smart scheduling",
      "Integration tools",
      "Custom triggers",
      "Performance monitoring"
    ],
    pricing: {
      starter: "$149/month",
      professional: "$399/month",
      enterprise: "$1199/month"
    },
    icon: <Zap className="h-8 w-8" />,
    category: "Automation",
    rating: 4.7,
    reviewCount: 756,
    badge: "New"
  },
  {
    id: "ai-image-generation",
    title: "AI Image Generation Studio",
    description: "Create stunning visuals, graphics, and artwork using advanced AI image generation.",
    features: [
      "Custom image creation",
      "Style transfer",
      "Batch processing",
      "High resolution output",
      "Commercial licensing",
      "API access"
    ],
    pricing: {
      starter: "$79/month",
      professional: "$199/month",
      enterprise: "$599/month"
    },
    icon: <Image className="h-8 w-8" />,
    category: "Creative",
    rating: 4.9,
    reviewCount: 1103,
    badge: "Featured"
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant Pro",
    description: "Intelligent coding assistance with code generation, debugging, and optimization.",
    features: [
      "Code generation",
      "Bug detection",
      "Performance optimization",
      "Documentation generation",
      "Multi-language support",
      "IDE integration"
    ],
    pricing: {
      starter: "$129/month",
      professional: "$349/month",
      enterprise: "$899/month"
    },
    icon: <Code className="h-8 w-8" />,
    category: "Development",
    rating: 4.8,
    reviewCount: 634,
    badge: "Developer Choice"
  },
  {
    id: "ai-security-suite",
    title: "AI Security Suite",
    description: "Advanced cybersecurity powered by artificial intelligence for threat detection and prevention.",
    features: [
      "Threat detection",
      "Behavioral analysis",
      "Real-time monitoring",
      "Incident response",
      "Compliance reporting",
      "24/7 support"
    ],
    pricing: {
      starter: "$299/month",
      professional: "$699/month",
      enterprise: "$1999/month"
    },
    icon: <Shield className="h-8 w-8" />,
    category: "Security",
    rating: 4.9,
    reviewCount: 445,
    badge: "Enterprise"
  },
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Build intelligent conversational AI chatbots for customer service and engagement.",
    features: [
      "Natural language processing",
      "Multi-channel support",
      "Custom training",
      "Analytics dashboard",
      "Integration APIs",
      "Scalable infrastructure"
    ],
    pricing: {
      starter: "$89/month",
      professional: "$249/month",
      enterprise: "$799/month"
    },
    icon: <MessageSquare className="h-8 w-8" />,
    category: "Communication",
    rating: 4.7,
    reviewCount: 567,
    badge: "Customer Favorite"
  },
  {
    id: "ai-market-research",
    title: "AI Market Research Platform",
    description: "Comprehensive market analysis and competitive intelligence powered by AI.",
    features: [
      "Market trend analysis",
      "Competitor monitoring",
      "Consumer insights",
      "Predictive modeling",
      "Custom reports",
      "Data visualization"
    ],
    pricing: {
      starter: "$179/month",
      professional: "$449/month",
      enterprise: "$1299/month"
    },
    icon: <TrendingUp className="h-8 w-8" />,
    category: "Research",
    rating: 4.8,
    reviewCount: 423,
    badge: "Business Essential"
  }
];

const BENEFITS = [
  {
    title: "Cost Effective",
    description: "Reduce operational costs by up to 60% with AI automation",
    icon: <CheckCircle className="h-6 w-6 text-green-500" />
  },
  {
    title: "24/7 Availability",
    description: "AI services work around the clock without breaks or downtime",
    icon: <Clock className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Scalable Solutions",
    description: "Grow your business with flexible, scalable AI solutions",
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />
  },
  {
    title: "Expert Support",
    description: "Access to AI specialists and technical support team",
    icon: <Users className="h-6 w-6 text-cyan-500" />
  }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Discover cutting-edge AI services and micro SAAS solutions for your business needs."
        keywords="AI services, micro SAAS, artificial intelligence, automation, content generation"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-purple-light bg-clip-text text-transparent">
                AI Services Hub
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              From content generation to security, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Choose from our curated selection of AI services designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_SERVICES.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 text-zion-cyan group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                </CardContent>
                
                <div className="p-6 pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Pricing Plans:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Starter:</span>
                        <span className="text-zion-cyan font-semibold">{service.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Professional:</span>
                        <span className="text-zion-cyan font-semibold">{service.pricing.professional}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Enterprise:</span>
                        <span className="text-zion-cyan font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:scale-105 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion AI Services?
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Experience the power of AI with our proven, reliable, and scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-12 text-center border border-zion-purple/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our AI services to drive growth, 
              efficiency, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Schedule Demo
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10 px-8 py-3">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}