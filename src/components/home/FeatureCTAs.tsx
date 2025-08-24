
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
  Sparkles,
  Shield,
  BarChart3,
  Mail,
  Heart,
  ShoppingCart,
  GraduationCap,
  DollarSign,
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
      title: "Comprehensive Services",
      description: "Access our complete range of micro SAAS, IT services, and AI solutions in one platform.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/comprehensive-services",
      badge: "New",
      details: "Discover 30+ professional services including AI development, cloud migration, cybersecurity, and more."
    }
  ];

  const microSaasServices = [
    {
      title: "AI Content Optimizer Pro",
      description: "Advanced AI-powered content optimization tool that analyzes, improves, and optimizes your content for SEO, readability, and engagement.",
      icon: <Sparkles className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-cyan-100 text-purple-700" />,
      link: "/micro-saas-services",
      badge: "New",
      price: "$29/month",
      category: "AI & ML",
      details: "Improve SEO rankings by 40%, increase content engagement by 60%, and save 5+ hours per content piece."
    },
    {
      title: "Cyber Threat Monitor",
      description: "Real-time cybersecurity threat detection and response platform that monitors your digital assets 24/7.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/micro-saas-services",
      badge: "Featured",
      price: "$99/month",
      category: "Security",
      details: "Detect threats 10x faster, reduce security incidents by 80%, and meet compliance requirements."
    },
    {
      title: "Smart Email Marketing Platform",
      description: "AI-powered email marketing automation that personalizes content, optimizes send times, and maximizes engagement.",
      icon: <Mail className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/micro-saas-services",
      badge: "Popular",
      price: "$25/month",
      category: "Marketing",
      details: "Increase open rates by 35%, boost click-through rates by 50%, and improve ROI by 60%."
    },
    {
      title: "Data Visualization Studio",
      description: "Professional data visualization and analytics platform that transforms complex data into beautiful, interactive charts and dashboards.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/micro-saas-services",
      badge: "New",
      price: "$39/month",
      category: "Analytics",
      details: "Create professional reports in minutes, improve data comprehension by 70%, and reduce reporting time by 80%."
    },
    {
      title: "AI Customer Support Assistant",
      description: "Intelligent customer support automation that handles 80% of customer inquiries automatically.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/micro-saas-services",
      badge: "Featured",
      price: "$49/month",
      category: "AI & ML",
      details: "Handle 80% of inquiries automatically, reduce response time to seconds, and improve customer satisfaction by 40%."
    },
    {
      title: "Smart Invoice Manager",
      description: "Intelligent invoice processing and management system that automates data extraction, approval workflows, and payment tracking.",
      icon: <DollarSign className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-700" />,
      link: "/micro-saas-services",
      badge: "New",
      price: "$19/month",
      category: "Finance",
      details: "Reduce invoice processing time by 90%, eliminate manual data entry errors, and improve cash flow visibility."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Main Features Section */}
      <section className="py-16 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
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

      {/* Micro SAAS Services Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-zion-cyan" />
              <h2 className="text-3xl font-bold tracking-tight text-white">Micro SAAS Solutions</h2>
              <Sparkles className="h-8 w-8 text-zion-cyan" />
            </div>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Transform your business with our curated collection of intelligent, innovative, and cost-effective micro SAAS services. 
              From AI-powered tools to enterprise security solutions.
            </p>
            <div className="mt-6">
              <Badge className="bg-zion-purple/20 text-zion-purple-light border-zion-purple-light px-4 py-2 text-sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                12 Categories • 4.8★ Rating • 24/7 Support
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:border-zion-cyan/50 bg-zion-slate-dark border-zion-blue-light group">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-3">
                    {service.icon}
                    <div className="flex flex-col items-end gap-2">
                      {service.badge && (
                        <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan">
                          {service.badge}
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs border-zion-purple-light text-zion-purple-light">
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-zion-cyan" />
                    <span className="text-white font-semibold">{service.price}</span>
                  </div>
                  <p className="text-sm text-zion-slate-light">{service.details}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full gap-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold">
                    <Link to={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white font-semibold px-8 py-3">
              <Link to="/micro-saas-services">
                <Sparkles className="h-5 w-5 mr-2" />
                View All Micro SAAS Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
