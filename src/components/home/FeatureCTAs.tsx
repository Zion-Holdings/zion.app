
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
  Server,
  BarChart3,
  FileText,
  Video,
  FileImage,
  TrendingUp,
  MessageCircle,
  Heart
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    // Existing features
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

    // NEW MICRO SAAS SERVICES - AI & Machine Learning
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content, code, and creative assets with our advanced AI models.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/services/ai-content-generation",
      badge: "Hot",
      details: "Create blog posts, marketing copy, code snippets, and creative content in seconds. Starting at $29/month with API access."
    },
    {
      title: "AI Image & Video Editor",
      description: "Professional-grade AI-powered image and video editing tools for creators and businesses.",
      icon: <FileImage className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-blue-100 text-green-700" />,
      link: "/services/ai-media-editing",
      badge: "Trending",
      details: "Remove backgrounds, enhance quality, generate variations, and create stunning visuals. Plans from $19/month."
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code completion, debugging, and optimization powered by advanced language models.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-orange-100 to-red-100 text-orange-700" />,
      link: "/services/ai-code-assistant",
      badge: "Developer Favorite",
      details: "Write, review, and optimize code in 50+ programming languages. IDE integrations available. Starting at $39/month."
    },
    {
      title: "AI Data Analytics Platform",
      description: "Transform raw data into actionable insights with our AI-powered analytics suite.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/services/ai-analytics",
      badge: "Enterprise",
      details: "Advanced data visualization, predictive analytics, and automated reporting. Custom pricing for enterprise clients."
    },

    // NEW MICRO SAAS SERVICES - Cybersecurity
    {
      title: "AI Threat Detection",
      description: "Real-time cybersecurity threat detection and response using advanced AI algorithms.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/services/ai-threat-detection",
      badge: "Security",
      details: "24/7 monitoring, instant alerts, and automated response to cyber threats. Starting at $99/month for small businesses."
    },
    {
      title: "Zero Trust Security Suite",
      description: "Comprehensive zero-trust security implementation for modern enterprise environments.",
      icon: <Lock className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-gray-100 to-slate-100 text-gray-700" />,
      link: "/services/zero-trust-security",
      badge: "Enterprise",
      details: "Identity verification, network segmentation, and continuous monitoring. Custom enterprise pricing available."
    },
    {
      title: "Penetration Testing as a Service",
      description: "Regular security assessments and vulnerability scanning for continuous protection.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700" />,
      link: "/services/penetration-testing",
      badge: "Compliance",
      details: "Monthly security assessments, detailed reports, and remediation guidance. Plans from $299/month."
    },

    // NEW MICRO SAAS SERVICES - Cloud & Infrastructure
    {
      title: "Multi-Cloud Management",
      description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/services/multi-cloud-management",
      badge: "Cloud",
      details: "Cost optimization, security compliance, and unified monitoring across all cloud platforms. Starting at $79/month."
    },
    {
      title: "DevOps Automation Platform",
      description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/services/devops-automation",
      badge: "DevOps",
      details: "Automated testing, deployment, and infrastructure management. Plans from $49/month with unlimited pipelines."
    },
    {
      title: "Edge Computing Solutions",
      description: "Deploy and manage applications at the edge for improved performance and reduced latency.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-violet-100 text-purple-700" />,
      link: "/services/edge-computing",
      badge: "Edge",
      details: "Global edge network, real-time processing, and IoT integration. Custom pricing based on usage and locations."
    },

    // NEW MICRO SAAS SERVICES - Business Intelligence
    {
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive analytics and automation.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/services/ai-crm",
      badge: "Sales",
      details: "Lead scoring, sales forecasting, and automated follow-ups. Starting at $39/user/month with AI features included."
    },
    {
      title: "Business Process Automation",
      description: "Automate repetitive tasks and workflows to improve efficiency and reduce costs.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-700" />,
      link: "/services/business-automation",
      badge: "Automation",
      details: "Workflow automation, document processing, and integration with 100+ business applications. Plans from $29/month."
    },
    {
      title: "AI Market Research",
      description: "Comprehensive market analysis and competitive intelligence powered by AI.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700" />,
      link: "/services/ai-market-research",
      badge: "Research",
      details: "Real-time market monitoring, competitor analysis, and trend prediction. Starting at $199/month for comprehensive insights."
    },

    // NEW MICRO SAAS SERVICES - Communication & Collaboration
    {
      title: "AI Meeting Assistant",
      description: "Intelligent meeting transcription, summarization, and action item tracking.",
      icon: <MessageCircle className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/services/ai-meeting-assistant",
      badge: "Productivity",
      details: "Real-time transcription, smart summaries, and automated follow-ups. Plans from $19/month with unlimited meetings."
    },
    {
      title: "Virtual Event Platform",
      description: "Host engaging virtual events, webinars, and conferences with AI-powered features.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/services/virtual-events",
      badge: "Events",
      details: "Interactive features, analytics, and AI-powered engagement tools. Starting at $99/month for up to 1000 attendees."
    },
    {
      title: "AI Translation Service",
      description: "Real-time translation and localization for global communication and content.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/services/ai-translation",
      badge: "Global",
      details: "Support for 100+ languages, real-time translation, and cultural adaptation. Plans from $29/month with API access."
    },

    // NEW MICRO SAAS SERVICES - Specialized Tools
    {
      title: "AI Legal Document Review",
      description: "Automated legal document analysis, contract review, and compliance checking.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-slate-100 to-gray-100 text-slate-700" />,
      link: "/services/ai-legal-review",
      badge: "Legal",
      details: "Contract analysis, risk assessment, and compliance monitoring. Starting at $149/month for law firms and businesses."
    },
    {
      title: "AI Financial Advisor",
      description: "Personalized financial planning and investment recommendations powered by AI.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/services/ai-financial-advisor",
      badge: "Finance",
      details: "Portfolio optimization, risk assessment, and financial goal planning. Plans from $39/month with personalized advice."
    },
    {
      title: "AI Healthcare Assistant",
      description: "Intelligent health monitoring, symptom analysis, and wellness recommendations.",
      icon: <Heart className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-pink-100 text-red-700" />,
      link: "/services/ai-healthcare",
      badge: "Healthcare",
      details: "Health tracking, symptom analysis, and wellness coaching. HIPAA compliant. Starting at $29/month for individuals."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-purple-light bg-clip-text text-transparent">
            Discover Zion's Comprehensive Suite of Micro SAAS Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Explore our extensive collection of AI-powered tools, cybersecurity solutions, cloud services, and business automation platforms designed to transform your business operations.
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
                    <Badge variant="secondary" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white border-0">
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
                <Button asChild className="w-full gap-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white border-0 group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all duration-300">
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
