
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
  Search, 
  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,
  Brain,
  Shield,
  BarChart3,
  Bot,
  Globe,
  Sparkles,
  Star,
  TrendingUp
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "AI Content Generation",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/all-services?category=AI Services",
      badge: "New",
      details: "GPT-4 powered content generation with SEO optimization, multi-language support, and brand voice customization. Save 70% on content creation costs."
    },
    {
      title: "AI Chatbot Builder",
      description: "No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard for customer support automation.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/all-services?category=AI Services",
      badge: "Featured",
      details: "Reduce customer support costs by 60% with AI-powered chatbots available 24/7 across web, WhatsApp, and Facebook platforms."
    },
    {
      title: "Cloud Migration Expert",
      description: "Professional cloud migration services with AWS, Azure, and Google Cloud expertise. Includes cost optimization, security implementation, and performance tuning.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/all-services?category=IT Services",
      badge: "Premium",
      details: "Reduce infrastructure costs by 40% with expert cloud migration, security setup, and ongoing optimization support."
    },
    {
      title: "Cybersecurity Audit",
      description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security roadmap development.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/all-services?category=IT Services",
      badge: "Enterprise",
      details: "Comprehensive security audits with compliance review (GDPR, HIPAA, SOC2), penetration testing, and security roadmap development."
    },
    {
      title: "Project Management Suite",
      description: "All-in-one project management platform with AI-powered task prioritization, team collaboration, time tracking, and resource management.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/all-services?category=Micro SAAS",
      badge: "New",
      details: "Increase team productivity by 30% with AI-powered task prioritization, real-time collaboration, and comprehensive project analytics."
    },
    {
      title: "Smart Invoicing & Billing",
      description: "Automated invoicing system with AI-powered expense categorization, payment tracking, tax calculations, and financial reporting.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/all-services?category=Micro SAAS",
      badge: "Popular",
      details: "Save 10+ hours per month on invoicing with automated expense categorization, payment tracking, and tax compliance features."
    },
    {
      title: "Customer Support Hub",
      description: "Intelligent customer support platform with AI chatbots, ticket management, knowledge base, and analytics for exceptional customer experiences.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/all-services?category=Micro SAAS",
      badge: "Featured",
      details: "Reduce support costs by 50% with AI-powered chatbots, ticket management, and comprehensive analytics dashboard."
    },
    {
      title: "Web Application Development",
      description: "Full-stack web application development with modern technologies, responsive design, and scalable architecture for your business needs.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/all-services?category=Development",
      badge: "Premium",
      details: "Custom web applications with modern tech stack, responsive design, and scalable architecture tailored to your business requirements."
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Comprehensive BI solution with interactive dashboards, automated reporting, data visualization, and KPI tracking.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/all-services?category=Analytics",
      badge: "Enterprise",
      details: "Make data-driven decisions faster with interactive dashboards, automated reporting, and real-time KPI tracking across all business metrics."
    },
    {
      title: "Managed Security Operations",
      description: "24/7 security monitoring, threat detection, incident response, and security management for comprehensive protection.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/all-services?category=Security",
      badge: "Premium",
      details: "Proactive threat detection with 24/7 security monitoring, incident response, and compliance reporting for complete peace of mind."
    },
    {
      title: "Business Process Automation",
      description: "Intelligent automation platform that streamlines workflows, reduces manual tasks, and improves operational efficiency.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/all-services?category=Automation",
      badge: "New",
      details: "Reduce manual work by 70% with workflow automation, RPA, and intelligent process optimization across your organization."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-purple/10 to-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-blue/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="h-5 w-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Innovative Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Discover Zion's Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive suite of AI-powered tools, IT services, and micro SAAS platforms designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 hover:border-zion-cyan/50 hover:-translate-y-2 bg-zion-slate-dark/50 backdrop-blur-md border border-zion-purple/20"
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex justify-between items-start mb-4">
                  {feature.icon}
                  {feature.badge && (
                    <Badge 
                      variant="secondary" 
                      className={`${
                        feature.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple' :
                        feature.badge === 'New' ? 'bg-zion-cyan/20 text-zion-cyan' :
                        feature.badge === 'Featured' ? 'bg-zion-blue/20 text-zion-blue' :
                        feature.badge === 'Premium' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4 text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-zion-slate-light">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-sm text-zion-slate-light leading-relaxed">{feature.details}</p>
              </CardContent>
              
              <CardFooter className="relative z-10 pt-0">
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all duration-300"
                >
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging Zion's innovative solutions. 
              Get started today with our comprehensive service catalog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                <Link to="/all-services">
                  <Sparkles className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                <Link to="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
