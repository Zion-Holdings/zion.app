
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
  Globe,
  TrendingUp,
  Sparkles,
  Lock
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    // Core Platform Features
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/match",
      badge: "Popular",
      category: "Core Platform",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      category: "Core Platform",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      category: "Core Platform",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      category: "Core Platform",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    
    // Micro SAAS Services
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials with advanced NLP capabilities.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/micro-saas-services?category=AI",
      badge: "Micro SAAS",
      category: "AI Services",
      details: "Save 80% of content creation time with AI-optimized content that improves SEO rankings and maintains consistent brand voice."
    },
    {
      title: "AI Customer Support",
      description: "Intelligent customer support automation with natural language processing and seamless human handoff capabilities.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/micro-saas-services?category=AI",
      badge: "Micro SAAS",
      category: "AI Services",
      details: "Reduce support costs by 70% while providing 24/7 automated support with intelligent routing and sentiment analysis."
    },
    {
      title: "Cloud Migration Pro",
      description: "Comprehensive cloud migration service with automated tools, cost optimization, and zero-downtime strategies.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-sky-100 text-sky-700" />,
      link: "/micro-saas-services?category=IT",
      badge: "Micro SAAS",
      category: "IT Services",
      details: "Reduce cloud costs by 30-40% with automated migration tools, performance monitoring, and expert consulting support."
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and compliance monitoring.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/micro-saas-services?category=Security",
      badge: "Micro SAAS",
      category: "Security",
      details: "Protect against 99.9% of cyber threats with real-time monitoring, automated incident response, and compliance tools."
    },
    {
      title: "Workflow Automation",
      description: "Intelligent workflow automation platform that streamlines business processes and reduces manual tasks.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/micro-saas-services?category=Automation",
      badge: "Micro SAAS",
      category: "Automation",
      details: "Reduce manual tasks by 70% with AI-powered process optimization and integration with 500+ business applications."
    },
    
    // Additional Features
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      category: "Community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      category: "Mobile",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      category: "Enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      category: "Development",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      category: "Education",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      category: "AI Recruiting",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    }
  ];

  const categories = ['all', ...Array.from(new Set(features.map(f => f.category)))];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-zion-cyan/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-zion-purple/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-zion-blue/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-zion-cyan/10 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            New Micro SAAS Services Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Discover Zion's Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive suite of tools and micro SAAS services designed to transform how you connect, 
            collaborate, and create in the tech ecosystem. From AI-powered solutions to enterprise-grade services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant="outline"
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-cyan hover:text-zion-slate hover:border-zion-cyan transition-all duration-300"
            >
              {category === 'all' ? 'All Features' : category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:border-zion-cyan/50 bg-white/5 backdrop-blur-sm border-zion-blue-light/20 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  {feature.icon}
                  <div className="flex gap-2">
                    {feature.badge && (
                      <Badge 
                        variant="secondary" 
                        className={`${
                          feature.badge === 'Micro SAAS' 
                            ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' 
                            : feature.badge === 'Popular'
                            ? 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30'
                            : feature.badge === 'New'
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : feature.badge === 'Featured'
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : 'bg-zion-blue/20 text-zion-blue border-zion-blue/30'
                        }`}
                      >
                        {feature.badge}
                      </Badge>
                    )}
                    {feature.category !== 'Core Platform' && (
                      <Badge variant="outline" className="border-zion-slate-light/30 text-zion-slate-light text-xs">
                        {feature.category}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-zion-slate-light">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zion-slate-light leading-relaxed">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-2 group-hover:bg-zion-cyan group-hover:text-zion-slate transition-all duration-300">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 border border-zion-purple/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Micro SAAS Services?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Discover our comprehensive suite of AI, IT, and business automation solutions designed to accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
                <Link to="/micro-saas-services">
                  <Sparkles className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Link to="/request-quote">
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
