
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
  Bot,
  Cloud,
  Shield,
  BarChart3,
  Settings as SettingsIcon,
  Link as LinkIcon
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
      title: "Micro SAAS Solutions",
      description: "Ready-to-use business applications for inventory, CRM, project management, and more.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/micro-saas-services",
      badge: "New",
      isNew: true,
      details: "25+ micro SAAS solutions starting from $9/month. AI Chatbot Builder, Smart CRM, Inventory Management, and more."
    },
    {
      title: "AI Services",
      description: "AI-powered solutions for automation, analytics, content optimization, and intelligent decision making.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/micro-saas-services?category=ai",
      badge: "Featured",
      isNew: true,
      details: "AI Chatbot Builder, Content Optimizer, Data Visualization, and custom AI development services."
    },
    {
      title: "IT Services",
      description: "Professional IT consulting, cloud migration, cybersecurity, and infrastructure management.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/micro-saas-services?category=it",
      badge: "Professional",
      details: "Cloud migration, cybersecurity audits, DevOps automation, and enterprise system integration."
    },
    {
      title: "Security Solutions",
      description: "Comprehensive cybersecurity services including penetration testing, monitoring, and compliance.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/micro-saas-services?category=security",
      badge: "Critical",
      details: "24/7 security monitoring, penetration testing, compliance verification, and threat detection."
    },
    {
      title: "Business Automation",
      description: "Intelligent automation platforms for streamlining business processes and reducing manual work.",
      icon: <SettingsIcon className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/micro-saas-services?category=automation",
      badge: "Efficient",
      details: "Workflow automation, RPA solutions, and business process optimization to improve efficiency by 70%."
    },
    {
      title: "Analytics & BI",
      description: "Business intelligence dashboards, predictive analytics, and data visualization solutions.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/micro-saas-services?category=analytics",
      badge: "Insights",
      details: "Custom BI dashboards, predictive analytics engine, and real-time data visualization tools."
    },
    {
      title: "System Integration",
      description: "Seamless integration of business systems, APIs, and third-party platform connectors.",
      icon: <LinkIcon className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
      link: "/micro-saas-services?category=integration",
      badge: "Connect",
      details: "Enterprise system integration, API development, and third-party platform connectors for streamlined workflows."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/services",
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
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zion-purple/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-105 hover-lift group"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex gap-2">
                    {feature.isNew && (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                        New
                      </Badge>
                    )}
                    {feature.badge && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="mt-4 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
