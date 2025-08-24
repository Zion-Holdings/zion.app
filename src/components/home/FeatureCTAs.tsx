
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
  BarChart3,
  PenTool,
  Shield,
  Cloud
} from "lucide-react";
import { AnimatedBackground, NeonBorder } from "@/components/ui/AnimatedBackground";

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
    {
      title: "AI Analytics Dashboard",
      description: "Transform your business data into actionable intelligence with AI-powered analytics and insights.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/ai-analytics-dashboard",
      badge: "New",
      details: "Get real-time insights, predictive analytics, and custom dashboards to drive data-driven business decisions."
    },
    {
      title: "AI Content Generator",
      description: "Create engaging content with AI-powered writing tools for blogs, social media, and marketing.",
      icon: <PenTool className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/ai-content-generator",
      badge: "Featured",
      details: "Generate high-quality content in seconds while maintaining your brand voice and SEO optimization."
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions including penetration testing, audits, and incident response.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/cybersecurity-services",
      badge: "Secure",
      details: "Protect your business with enterprise-grade cybersecurity services and 24/7 threat monitoring."
    },
    {
      title: "Cloud Migration Services",
      description: "Expert cloud migration to AWS, Azure, and Google Cloud with zero downtime guarantee.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/cloud-migration-services",
      badge: "Cloud",
      details: "Seamless migration to the cloud with cost optimization, security, and performance improvements."
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-background to-background/90">
      <AnimatedBackground variant="section" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
              <AnimatedBackground variant="card" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4" />
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
