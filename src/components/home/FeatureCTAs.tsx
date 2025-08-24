
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
  Shield,
  Cloud,
  Database,
  Globe,
  Brain,
  Lock,
  Network,
  Monitor,
  Server,
  Bot,
  TrendingUp,
  FileText,
  Video,
  BarChart3,
  AlertTriangle,
  Eye,
  PieChart
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
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    },
    // New Micro SAAS Services
    {
      title: "AI Content Generator",
      description: "Generate high-quality content, code, and documentation using advanced AI models tailored to your industry.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/ai-content-generator",
      badge: "AI-Powered",
      details: "Create engaging content, technical documentation, and marketing copy with our AI-powered content generation platform. Starting at $29/month."
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security monitoring, threat detection, and incident response for businesses of all sizes.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/cybersecurity-suite",
      badge: "Security",
      details: "24/7 threat monitoring, automated incident response, and compliance reporting. Enterprise-grade security starting at $199/month."
    },
    {
      title: "Cloud Cost Optimizer",
      description: "AI-driven cloud cost optimization and resource management across AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/cloud-optimizer",
      badge: "Cost-Saving",
      details: "Reduce cloud costs by up to 40% with intelligent resource allocation and automated optimization. Plans from $49/month."
    },
    {
      title: "Data Analytics Platform",
      description: "Real-time business intelligence and predictive analytics powered by machine learning algorithms.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/analytics-platform",
      badge: "Analytics",
      details: "Transform raw data into actionable insights with interactive dashboards and predictive modeling. Starting at $79/month."
    },
    {
      title: "API Gateway & Management",
      description: "Secure, scalable API gateway with rate limiting, authentication, and comprehensive monitoring.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/api-gateway",
      badge: "Developer",
      details: "Enterprise-grade API management with advanced security features and developer portal. Plans from $99/month."
    },
    {
      title: "DevOps Automation Platform",
      description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-orange-100 to-red-100 text-orange-700" />,
      link: "/devops-platform",
      badge: "DevOps",
      details: "Automate your entire development workflow with intelligent deployment strategies and monitoring. Starting at $149/month."
    },
    {
      title: "AI Model Training Service",
      description: "Custom AI model development and training using your proprietary data and business requirements.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700" />,
      link: "/ai-training",
      badge: "Custom AI",
      details: "Develop bespoke AI models tailored to your specific use case with expert guidance. Project-based pricing from $5,000."
    },
    {
      title: "Blockchain Development Suite",
      description: "Complete blockchain infrastructure, smart contract development, and DApp deployment platform.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700" />,
      link: "/blockchain-suite",
      badge: "Web3",
      details: "Build, deploy, and manage blockchain applications with enterprise-grade security. Plans from $199/month."
    },
    {
      title: "Video AI Processing",
      description: "AI-powered video editing, enhancement, and content generation for creators and businesses.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/video-ai",
      badge: "Media AI",
      details: "Transform video content with AI-powered editing, enhancement, and automated generation. Starting at $39/month."
    },
    {
      title: "IoT Management Platform",
      description: "Comprehensive IoT device management, data collection, and analytics platform.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-slate-100 to-gray-100 text-slate-700" />,
      link: "/iot-platform",
      badge: "IoT",
      details: "Manage thousands of IoT devices with real-time monitoring and predictive maintenance. Plans from $89/month."
    },
    {
      title: "AI Chatbot Builder",
      description: "Create intelligent chatbots and virtual assistants without coding knowledge.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/chatbot-builder",
      badge: "No-Code",
      details: "Build AI-powered chatbots for customer service, sales, and support. Drag-and-drop interface starting at $19/month."
    },
    {
      title: "Data Privacy Compliance",
      description: "Automated GDPR, CCPA, and privacy compliance management with audit trails.",
      icon: <Lock className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700" />,
      link: "/privacy-compliance",
      badge: "Compliance",
      details: "Ensure data privacy compliance with automated monitoring and reporting tools. Starting at $129/month."
    },
    {
      title: "AI-Powered SEO Suite",
      description: "Comprehensive SEO optimization using AI to improve search rankings and drive organic traffic.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-lime-100 to-green-100 text-lime-700" />,
      link: "/seo-suite",
      badge: "Marketing",
      details: "AI-driven SEO analysis, keyword research, and content optimization. Plans from $59/month."
    },
    {
      title: "Code Quality Analyzer",
      description: "Automated code review, quality assessment, and security vulnerability detection.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/code-analyzer",
      badge: "Quality",
      details: "Improve code quality with automated analysis, security scanning, and performance optimization. Starting at $69/month."
    },
    {
      title: "AI-Powered Testing",
      description: "Intelligent test automation and quality assurance using machine learning.",
      icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-violet-100 text-purple-700" />,
      link: "/ai-testing",
      badge: "QA",
      details: "Automate testing with AI-generated test cases and intelligent bug detection. Plans from $79/month."
    },
    {
      title: "Customer Success Platform",
      description: "AI-driven customer success management with predictive analytics and automated workflows.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700" />,
      link: "/customer-success",
      badge: "CX",
      details: "Improve customer retention with predictive analytics and automated success workflows. Starting at $89/month."
    },
    {
      title: "AI Legal Assistant",
      description: "AI-powered legal document review, contract analysis, and compliance checking.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-700" />,
      link: "/legal-ai",
      badge: "Legal Tech",
      details: "Streamline legal processes with AI-powered document analysis and contract review. Plans from $149/month."
    },
    {
      title: "AI Translation Service",
      description: "Real-time multilingual translation and localization for global business communication.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-sky-100 to-blue-100 text-sky-700" />,
      link: "/ai-translation",
      badge: "Global",
      details: "Break language barriers with AI-powered translation supporting 100+ languages. Starting at $29/month."
    },
    {
      title: "AI-Powered HR Suite",
      description: "Intelligent recruitment, employee management, and performance analytics platform.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-rose-100 to-pink-100 text-rose-700" />,
      link: "/hr-suite",
      badge: "HR Tech",
      details: "Transform HR operations with AI-powered recruitment and employee management. Plans from $99/month."
    },
    {
      title: "AI Financial Advisor",
      description: "Personalized financial planning and investment recommendations using machine learning.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/financial-ai",
      badge: "FinTech",
      details: "Get personalized financial advice and investment strategies powered by AI. Starting at $39/month."
    },
    {
      title: "AI Design Assistant",
      description: "AI-powered design tools for logos, graphics, and visual content creation.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700" />,
      link: "/design-ai",
      badge: "Creative",
      details: "Create professional designs with AI-powered tools and templates. Plans from $19/month."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Discover Zion's Comprehensive Tech Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore our extensive suite of micro SAAS services, AI solutions, and IT services designed to transform how you work, innovate, and grow in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:border-zion-purple/50 hover:scale-105 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 text-zion-purple border-zion-purple/30">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4 text-lg group-hover:text-zion-cyan transition-colors duration-300">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-purple/25">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
