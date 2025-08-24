
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
  Database,
  Cloud,
  Brain,
  Globe,
  Lock,
  BarChart3,
  Network,
  FileText,
  Video,
  Mic,
  Eye,
  Monitor,
  Server,
  Key,
  Layers
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.",
      price: "Free - $99/month",
      category: "AI Services"
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.",
      price: "Free - $49/month",
      category: "Talent Services"
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.",
      price: "$50 - $5000+",
      category: "IT Services"
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.",
      price: "$100 - $50,000+",
      category: "Hardware"
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.",
      price: "Free - $29/month",
      category: "Community"
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.",
      price: "Free",
      category: "Mobile"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.",
      price: "$999/month - Custom",
      category: "Enterprise"
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.",
      price: "Free - $199/month",
      category: "Developer"
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.",
      price: "Free - $79/month",
      category: "Education"
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.",
      price: "Free - $39/month",
      category: "Productivity"
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.",
      price: "$199/month - $999/month",
      category: "AI Recruiting"
    },
    // New Micro SAAS Services
    {
      title: "AI Content Generator",
      description: "Generate high-quality content, code, and documentation using advanced AI models.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700" />,
      link: "/ai-content-generator",
      badge: "AI-Powered",
      details: "Create blog posts, technical documentation, marketing copy, and code snippets with our intelligent content generation platform.",
      price: "$29/month - $199/month",
      category: "AI Content"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audits and vulnerability assessments for your digital infrastructure.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-red-100 to-orange-100 text-red-700" />,
      link: "/cybersecurity-assessment",
      badge: "Security",
      details: "Identify security gaps, perform penetration testing, and implement robust protection measures with expert guidance.",
      price: "$299/month - $1,999/month",
      category: "Cybersecurity"
    },
    {
      title: "Cloud Migration Service",
      description: "Seamless migration to cloud platforms with minimal downtime and optimized performance.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/cloud-migration",
      badge: "Cloud",
      details: "Migrate your applications, databases, and infrastructure to AWS, Azure, or Google Cloud with expert support.",
      price: "$499/month - $3,999/month",
      category: "Cloud Services"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence and analytics to drive data-driven decision making.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-green-100 to-emerald-100 text-green-700" />,
      link: "/data-analytics",
      badge: "Analytics",
      details: "Transform raw data into actionable insights with customizable dashboards, reports, and predictive analytics.",
      price: "$99/month - $599/month",
      category: "Data Analytics"
    },
    {
      title: "AI Model Training",
      description: "Custom AI model development and training for your specific business requirements.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/ai-model-training",
      badge: "AI Development",
      details: "Develop, train, and deploy custom machine learning models tailored to your industry and use case.",
      price: "$1,999/month - $9,999/month",
      category: "AI Development"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure for optimal performance.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700" />,
      link: "/network-infrastructure",
      badge: "Infrastructure",
      details: "Build scalable, secure, and high-performance network solutions with 24/7 monitoring and support.",
      price: "$399/month - $2,499/month",
      category: "Network Services"
    },
    {
      title: "Video Production Suite",
      description: "Professional video editing, animation, and production tools for content creators.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700" />,
      link: "/video-production",
      badge: "Creative",
      details: "Create stunning videos, animations, and visual content with our comprehensive production suite and templates.",
      price: "$49/month - $299/month",
      category: "Creative Tools"
    },
    {
      title: "Voice AI Assistant",
      description: "Intelligent voice recognition and natural language processing for customer service automation.",
      icon: <Mic className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700" />,
      link: "/voice-ai-assistant",
      badge: "Voice AI",
      details: "Implement AI-powered voice assistants, chatbots, and automated customer service solutions.",
      price: "$79/month - $399/month",
      category: "Voice AI"
    },
    {
      title: "Visual Recognition API",
      description: "Advanced computer vision and image recognition capabilities for your applications.",
      icon: <Eye className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700" />,
      link: "/visual-recognition-api",
      badge: "Computer Vision",
      details: "Integrate image recognition, object detection, and facial recognition into your applications with simple API calls.",
      price: "$0.01/image - $0.10/image",
      category: "Computer Vision"
    },
    {
      title: "Design System Builder",
      description: "Create and maintain consistent design systems across your products and platforms.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-orange-100 to-red-100 text-orange-700" />,
      link: "/design-system-builder",
      badge: "Design",
      details: "Build scalable design systems with reusable components, style guides, and design tokens for consistent branding.",
      price: "$39/month - $199/month",
      category: "Design Tools"
    },
    {
      title: "Performance Monitoring",
      description: "Real-time monitoring and optimization of your applications and infrastructure performance.",
      icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700" />,
      link: "/performance-monitoring",
      badge: "Monitoring",
      details: "Monitor application performance, identify bottlenecks, and optimize for speed and reliability with detailed analytics.",
      price: "$29/month - $199/month",
      category: "Performance"
    },
    {
      title: "API Gateway Service",
      description: "Secure, scalable API management and gateway solution for microservices architecture.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700" />,
      link: "/api-gateway",
      badge: "API Management",
      details: "Manage, secure, and scale your APIs with rate limiting, authentication, monitoring, and analytics.",
      price: "$99/month - $599/month",
      category: "API Services"
    },
    {
      title: "IoT Device Management",
      description: "Comprehensive IoT platform for device connectivity, monitoring, and data collection.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/iot-device-management",
      badge: "IoT",
      details: "Connect, monitor, and manage IoT devices with real-time data collection, analytics, and automation capabilities.",
      price: "$0.50/device/month - $5/device/month",
      category: "IoT Platform"
    },
    {
      title: "Blockchain Integration",
      description: "Integrate blockchain technology into your applications for enhanced security and transparency.",
      icon: <Key className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700" />,
      link: "/blockchain-integration",
      badge: "Blockchain",
      details: "Implement smart contracts, decentralized applications, and blockchain-based solutions with expert guidance.",
      price: "$199/month - $1,999/month",
      category: "Blockchain"
    },
    {
      title: "Biometric Authentication",
      description: "Secure biometric authentication solutions using fingerprint, facial, and voice recognition.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/biometric-authentication",
      badge: "Security",
      details: "Implement multi-factor authentication with biometric verification for enhanced security and user experience.",
      price: "$0.01/authentication - $0.10/authentication",
      category: "Security"
    },
    {
      title: "Global CDN Service",
      description: "High-performance content delivery network for global content distribution and optimization.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-green-100 to-emerald-100 text-green-700" />,
      link: "/global-cdn",
      badge: "CDN",
      details: "Accelerate content delivery worldwide with edge servers, intelligent routing, and performance optimization.",
      price: "$0.04/GB - $0.12/GB",
      category: "Content Delivery"
    },
    {
      title: "Quantum Computing API",
      description: "Access to quantum computing resources for complex calculations and simulations.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700" />,
      link: "/quantum-computing-api",
      badge: "Quantum",
      details: "Leverage quantum computing power for cryptography, optimization, and scientific computing applications.",
      price: "$0.10/quantum-second - $1.00/quantum-second",
      category: "Quantum Computing"
    },
    {
      title: "Edge Computing Platform",
      description: "Distributed computing platform for low-latency applications and real-time processing.",
      icon: <Layers className="h-10 w-10 p-2 rounded-md bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700" />,
      link: "/edge-computing",
      badge: "Edge",
      details: "Deploy applications closer to users with edge computing infrastructure for improved performance and reduced latency.",
      price: "$0.50/hour - $5.00/hour",
      category: "Edge Computing"
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
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4 group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{feature.details}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{feature.category}</span>
                  <span className="text-sm font-semibold text-primary">{feature.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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
