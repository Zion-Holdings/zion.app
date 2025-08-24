
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
  Cloud,
  Shield,
  TrendingUp,
  Bot,
  FileText,
  BarChart3,
  Globe
} from "lucide-react";
import GitBranch from "lucide-react/dist/esm/icons/git-branch";
import Target from "lucide-react/dist/esm/icons/target";

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
      title: "AI Chatbot Builder Pro",
      description: "No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integration capabilities.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/micro-saas-services",
      badge: "New",
      details: "Reduce customer service costs by 60% with 24/7 AI-powered support. Features drag & drop interface, CRM integration, and analytics dashboard."
    },
    {
      title: "AI Content Generator Suite",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/micro-saas-services",
      badge: "Featured",
      details: "10x faster content creation with SEO optimization, plagiarism detection, brand voice customization, and performance analytics."
    },
    {
      title: "AI-Powered Business Intelligence",
      description: "Comprehensive data analytics platform with AI-driven insights, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/micro-saas-services",
      badge: "Premium",
      details: "Uncover hidden business insights, predict future trends, and make data-driven decisions faster with our advanced analytics platform."
    },
    {
      title: "Cloud Migration Pro",
      description: "End-to-end cloud migration services including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/micro-saas-services",
      badge: "Enterprise",
      details: "Reduce infrastructure costs by 30-50% with improved scalability, enhanced security, and better disaster recovery capabilities."
    },
    {
      title: "Comprehensive Cybersecurity Audit",
      description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security recommendations.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/micro-saas-services",
      badge: "Critical",
      details: "Identify and fix security vulnerabilities, meet compliance requirements, and protect against modern cyber threats with our expert security team."
    },
    {
      title: "DevOps Automation Suite",
      description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.",
      icon: <GitBranch className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/micro-saas-services",
      badge: "Popular",
      details: "10x faster deployment cycles, reduced manual errors, improved code quality, and better team collaboration with our automation tools."
    },
    {
      title: "Custom AI Model Training",
      description: "Specialized AI model development and training services for computer vision, NLP, and predictive analytics applications.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/micro-saas-services",
      badge: "Expert",
      details: "Tailored AI solutions for specific use cases with improved accuracy, competitive advantage, and expert guidance throughout the process."
    },
    {
      title: "AI Process Automation Platform",
      description: "Intelligent automation platform that combines RPA with AI to automate complex business processes and improve efficiency.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/micro-saas-services",
      badge: "Innovative",
      details: "Reduce manual work by 70-90%, improve process accuracy, faster execution, and enhanced compliance with our intelligent automation platform."
    },
    {
      title: "AI Customer Insights Platform",
      description: "Advanced customer analytics platform that uses AI to analyze behavior, predict churn, and provide actionable insights.",
      icon: <Target className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/micro-saas-services",
      badge: "Strategic",
      details: "Reduce customer churn by 20-40%, increase lifetime value, improve satisfaction scores, and better targeted marketing campaigns."
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
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Complete Service Portfolio?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              From AI-powered solutions to comprehensive IT services, discover how Zion Tech Group can transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
                <Link to="/micro-saas-services">
                  <Globe className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
