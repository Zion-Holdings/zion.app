import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Bot, 
  Shield, 
  BarChart3, 
  Zap, 
  Search, 
  Filter,
  Star,
  Clock,
  Award,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Target from 'lucide-react/dist/esm/icons/target';
import Palette from 'lucide-react/dist/esm/icons/palette';
import { SEO } from '@/components/SEO';

interface MicroSaasService {
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
}

const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  {
    id: "ai-content-generator",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation tool for blogs, social media, and marketing materials with SEO optimization.",
    category: "Content Creation",
    price: "$29/month",
    marketPrice: "$49/month",
    features: ["Multi-language support", "SEO optimization", "Brand voice customization", "Content templates", "Analytics dashboard"],
    benefits: ["Save 80% time on content creation", "Improve SEO rankings", "Consistent brand voice", "Scalable content production"],
    link: "https://ziontechgroup.com/ai-content-generator",
    icon: <Bot className="h-8 w-8 text-zion-cyan" />,
    tags: ["AI", "Content", "Marketing", "SEO"],
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: "cybersecurity-monitor",
    title: "Real-time Cybersecurity Monitor",
    description: "24/7 threat detection and response system with automated incident handling and compliance reporting.",
    category: "Security",
    price: "$99/month",
    marketPrice: "$199/month",
    features: ["Real-time threat detection", "Automated response", "Compliance reporting", "Vulnerability scanning", "Security dashboard"],
    benefits: ["Prevent 95% of cyber attacks", "Meet compliance requirements", "Reduce security incidents", "24/7 protection"],
    link: "https://ziontechgroup.com/cybersecurity-monitor",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Security", "Compliance", "Monitoring", "Automation"],
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: "data-analytics-platform",
    title: "Business Intelligence Analytics",
    description: "Comprehensive data analytics platform with AI-powered insights and customizable dashboards for data-driven decisions.",
    category: "Analytics",
    price: "$79/month",
    marketPrice: "$149/month",
    features: ["AI-powered insights", "Custom dashboards", "Data visualization", "Real-time reporting", "Predictive analytics"],
    benefits: ["Make data-driven decisions", "Identify growth opportunities", "Optimize business processes", "Competitive advantage"],
    link: "https://ziontechgroup.com/data-analytics",
    icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />,
    tags: ["Analytics", "BI", "AI", "Insights"],
    rating: 4.7,
    reviewCount: 203
  },
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimization Suite",
    description: "Intelligent cloud resource management tool that reduces costs by up to 40% through automated optimization.",
    category: "Cloud Management",
    price: "$49/month",
    marketPrice: "$99/month",
    features: ["Cost optimization", "Resource monitoring", "Automated scaling", "Cost alerts", "ROI tracking"],
    benefits: ["Reduce cloud costs by 40%", "Optimize resource usage", "Prevent budget overruns", "Improve efficiency"],
    link: "https://ziontechgroup.com/cloud-optimizer",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Cloud", "Cost", "Optimization", "AWS"],
    rating: 4.6,
    reviewCount: 134
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Assistant",
    description: "Intelligent chatbot system that handles customer inquiries 24/7 with human-like responses and seamless escalation.",
    category: "Customer Support",
    price: "$39/month",
    marketPrice: "$79/month",
    features: ["24/7 availability", "Multi-language support", "Human-like responses", "Seamless escalation", "Analytics"],
    benefits: ["Improve customer satisfaction", "Reduce support costs", "Handle multiple inquiries", "Always available"],
    link: "https://ziontechgroup.com/ai-support",
    icon: <Bot className="h-8 w-8 text-zion-cyan" />,
    tags: ["AI", "Support", "Chatbot", "Customer Service"],
    rating: 4.8,
    reviewCount: 178
  },
  {
    id: "code-quality-analyzer",
    title: "Code Quality & Security Analyzer",
    description: "Advanced static code analysis tool that detects bugs, security vulnerabilities, and code quality issues.",
    category: "Development",
    price: "$59/month",
    marketPrice: "$119/month",
    features: ["Static analysis", "Security scanning", "Code quality metrics", "Integration support", "Custom rules"],
    benefits: ["Catch bugs early", "Improve code quality", "Enhance security", "Reduce technical debt"],
    link: "https://ziontechgroup.com/code-analyzer",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Development", "Code Quality", "Security", "Analysis"],
    rating: 4.7,
    reviewCount: 95
  },
  {
    id: "api-gateway-manager",
    title: "API Gateway & Management Platform",
    description: "Enterprise-grade API management solution with rate limiting, authentication, monitoring, and analytics.",
    category: "API Management",
    price: "$89/month",
    marketPrice: "$179/month",
    features: ["Rate limiting", "Authentication", "API monitoring", "Analytics dashboard", "Developer portal"],
    benefits: ["Secure API access", "Monitor usage patterns", "Improve developer experience", "Scale efficiently"],
    link: "https://ziontechgroup.com/api-gateway",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["API", "Management", "Security", "Monitoring"],
    rating: 4.8,
    reviewCount: 112
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation Platform",
    description: "No-code workflow automation tool that streamlines business processes and eliminates manual tasks.",
    category: "Automation",
    price: "$69/month",
    marketPrice: "$139/month",
    features: ["No-code builder", "Pre-built templates", "Integration support", "Workflow analytics", "Custom triggers"],
    benefits: ["Automate repetitive tasks", "Improve efficiency", "Reduce errors", "Scale operations"],
    link: "https://ziontechgroup.com/workflow-automation",
    icon: <Zap className="h-8 w-8 text-zion-purple" />,
    tags: ["Automation", "Workflow", "No-code", "Integration"],
    rating: 4.6,
    reviewCount: 167
  },
  {
    id: "performance-monitor",
    title: "Application Performance Monitor",
    description: "Real-time performance monitoring and alerting system for web applications and microservices.",
    category: "Monitoring",
    price: "$54/month",
    marketPrice: "$109/month",
    features: ["Real-time monitoring", "Performance alerts", "Root cause analysis", "Custom dashboards", "APM insights"],
    benefits: ["Prevent downtime", "Improve user experience", "Optimize performance", "Reduce MTTR"],
    link: "https://ziontechgroup.com/performance-monitor",
    icon: <Cpu className="h-8 w-8 text-zion-cyan" />,
    tags: ["Monitoring", "Performance", "APM", "Alerting"],
    rating: 4.7,
    reviewCount: 143
  },
  {
    id: "data-backup-recovery",
    title: "Automated Data Backup & Recovery",
    description: "Enterprise-grade backup solution with automated scheduling, encryption, and instant recovery capabilities.",
    category: "Data Protection",
    price: "$44/month",
    marketPrice: "$89/month",
    features: ["Automated backups", "End-to-end encryption", "Instant recovery", "Compliance support", "Backup testing"],
    benefits: ["Protect critical data", "Meet compliance requirements", "Minimize downtime", "Peace of mind"],
    link: "https://ziontechgroup.com/data-backup",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Backup", "Recovery", "Security", "Compliance"],
    rating: 4.9,
    reviewCount: 201
  },
  {
    id: "mobile-app-analytics",
    title: "Mobile App Analytics & Insights",
    description: "Comprehensive mobile app analytics platform with user behavior tracking and performance optimization.",
    category: "Mobile Analytics",
    price: "$34/month",
    marketPrice: "$69/month",
    features: ["User behavior tracking", "Performance metrics", "Crash reporting", "A/B testing", "ROI analytics"],
    benefits: ["Understand user behavior", "Optimize app performance", "Increase user retention", "Improve conversions"],
    link: "https://ziontechgroup.com/mobile-analytics",
    icon: <Bot className="h-8 w-8 text-zion-cyan" />,
    tags: ["Mobile", "Analytics", "User Behavior", "Performance"],
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: "seo-optimization-tool",
    title: "AI-Powered SEO Optimization",
    description: "Intelligent SEO tool that analyzes content, suggests improvements, and tracks search rankings automatically.",
    category: "SEO",
    price: "$39/month",
    marketPrice: "$79/month",
    features: ["Content analysis", "Keyword research", "Ranking tracking", "Technical SEO audit", "Competitor analysis"],
    benefits: ["Improve search rankings", "Increase organic traffic", "Optimize content", "Beat competitors"],
    link: "https://ziontechgroup.com/seo-optimization",
    icon: <Target className="h-8 w-8 text-zion-purple" />,
    tags: ["SEO", "AI", "Content", "Analytics"],
    rating: 4.8,
    reviewCount: 189
  }
];

const categories = [
  { name: "All Services", value: "all", icon: <Shield className="h-4 w-4" /> },
  { name: "AI & Machine Learning", value: "ai", icon: <Bot className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Shield className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Cloud", value: "cloud", icon: <Shield className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Shield className="h-4 w-4" /> },
  { name: "Automation", value: "automation", icon: <Zap className="h-4 w-4" /> },
  { name: "Monitoring", value: "monitoring", icon: <Cpu className="h-4 w-4" /> }
];

export default function MicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
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
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS solutions for modern businesses. AI, security, analytics, and more at competitive prices."
        keywords="micro saas, software as a service, AI tools, business software, cloud solutions"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
            Powerful, affordable software solutions designed for modern businesses. 
            From AI-powered tools to enterprise-grade security, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6"
              size="lg"
            >
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6">
              View Pricing
            </Button>
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
                placeholder="Search micro SAAS services..."
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
                {/* Pricing */}
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

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
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
                        <Award className="h-4 w-4 text-zion-purple" />
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
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                    {/* ExternalLink icon was removed from imports, so this will cause an error */}
                    {/* <ExternalLink className="h-4 w-4" /> */}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to grow faster, 
            work smarter, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg py-6">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple text-lg py-6">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-zion-blue-dark/30 rounded-2xl p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Need Custom Solutions?</h2>
            <p className="text-zion-slate-light text-lg">
              Our team of experts can help you build custom micro SAAS solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* Phone icon was removed from imports, so this will cause an error */}
              {/* <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* Mail icon was removed from imports, so this will cause an error */}
              {/* <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* MapPin icon was removed from imports, so this will cause an error */}
              {/* <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}