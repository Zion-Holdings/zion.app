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
  Brain,
  Shield,
  BarChart3,
  Code,
  Cloud,
  Globe,
  Video,
  TrendingUp,
  Eye,
  Server,
  Network,
  FileText,
  Key
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
      price: "$99/month",
      category: "AI Services"
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.",
      price: "Free",
      category: "Marketplace"
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.",
      price: "5% commission",
      category: "Marketplace"
    },
    {
      title: "Equipment & Tools",
      description: "Access to cutting-edge AI hardware, software licenses, and development tools for your projects.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/equipment",
      details: "Rent or purchase high-performance GPUs, specialized AI chips, and enterprise software tools at competitive rates.",
      price: "Variable",
      category: "Hardware"
    },
    {
      title: "AI Content Generator",
      description: "Generate high-quality content, code, and creative assets using advanced AI models.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/services/ai-content",
      badge: "Hot",
      details: "Create articles, blog posts, social media content, and marketing copy with AI assistance. Includes plagiarism checking and SEO optimization.",
      price: "$29/month",
      category: "AI Services"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audits and vulnerability assessments for your digital infrastructure.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/services/cybersecurity",
      details: "Professional security testing including penetration testing, code review, and compliance audits. Get detailed reports and remediation guidance.",
      price: "$499/assessment",
      category: "Security"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Custom business intelligence dashboards with real-time data visualization and reporting.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/services/analytics",
      details: "Transform your data into actionable insights with interactive charts, automated reports, and predictive analytics capabilities.",
      price: "$199/month",
      category: "Data Services"
    },
    {
      title: "Cloud Migration Service",
      description: "Seamless migration of your applications and data to cloud platforms with zero downtime.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/services/cloud-migration",
      details: "Expert cloud migration planning, execution, and optimization. Support for AWS, Azure, and Google Cloud Platform.",
      price: "$2,999/project",
      category: "Cloud Services"
    },
    {
      title: "API Integration Hub",
      description: "Connect your applications with third-party services through our unified API gateway.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/services/api-integration",
      details: "Pre-built connectors for popular services, custom API development, and comprehensive documentation. Includes monitoring and analytics.",
      price: "$149/month",
      category: "Development"
    },
    {
      title: "AI Model Training",
      description: "Custom machine learning model development and training for your specific use case.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/services/ai-training",
      details: "End-to-end ML pipeline development from data preparation to model deployment. Support for various frameworks and cloud platforms.",
      price: "$5,999/project",
      category: "AI Services"
    },
    {
      title: "Blockchain Development",
      description: "Smart contract development, DApp creation, and blockchain infrastructure setup.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
      link: "/services/blockchain",
      details: "Ethereum, Solana, and Polygon smart contract development. Includes security auditing and gas optimization.",
      price: "$3,999/project",
      category: "Blockchain"
    },
    {
      title: "IoT Platform",
      description: "Complete IoT solution including device management, data collection, and analytics.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services/iot",
      details: "Scalable IoT platform with device provisioning, real-time monitoring, and predictive maintenance capabilities.",
      price: "$399/month",
      category: "IoT Services"
    },
    {
      title: "Video Analytics AI",
      description: "AI-powered video analysis for security, retail analytics, and content moderation.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/services/video-analytics",
      details: "Real-time video processing with object detection, facial recognition, and behavior analysis. Cloud and edge deployment options.",
      price: "$299/month",
      category: "AI Services"
    },
    {
      title: "Design System Builder",
      description: "Create consistent design systems and component libraries for your brand.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/services/design-system",
      details: "Comprehensive design system including UI components, style guides, and design tokens. Compatible with major design tools.",
      price: "$1,999/project",
      category: "Design"
    },
    {
      title: "Performance Monitoring",
      description: "Real-time application performance monitoring with alerting and optimization recommendations.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/services/performance",
      details: "Monitor application performance, identify bottlenecks, and get actionable insights for optimization.",
      price: "$99/month",
      category: "DevOps"
    },
    {
      title: "User Behavior Analytics",
      description: "Understand user behavior and optimize user experience with advanced analytics.",
      icon: <Eye className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/services/user-analytics",
      details: "Track user journeys, heatmaps, and conversion funnels. Privacy-compliant analytics with GDPR support.",
      price: "$79/month",
      category: "Analytics"
    },
    {
      title: "Biometric Authentication",
      description: "Secure biometric authentication solutions for web and mobile applications.",
      icon: <Key className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/services/biometric",
      details: "Multi-modal biometric authentication including fingerprint, face, and voice recognition. FIDO2 compliant.",
      price: "$199/month",
      category: "Security"
    },
    {
      title: "Serverless Functions",
      description: "Deploy and manage serverless functions with automatic scaling and cost optimization.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/services/serverless",
      details: "Serverless function development and deployment. Support for AWS Lambda, Azure Functions, and Google Cloud Functions.",
      price: "$49/month",
      category: "Cloud Services"
    },
    {
      title: "Network Security",
      description: "Comprehensive network security solutions including firewalls, VPNs, and threat detection.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/services/network-security",
      details: "Next-generation firewall, intrusion detection, and network monitoring. 24/7 security operations center.",
      price: "$299/month",
      category: "Security"
    },
    {
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with disaster recovery and business continuity planning.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/services/backup-recovery",
      details: "Automated backup scheduling, incremental backups, and point-in-time recovery. Multi-region redundancy.",
      price: "$149/month",
      category: "Data Services"
    },
    {
      title: "AI Chatbot Platform",
      description: "Intelligent chatbot development with natural language processing and integration capabilities.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/services/chatbot",
      details: "Custom chatbot development with multi-language support, sentiment analysis, and seamless integration.",
      price: "$199/month",
      category: "AI Services"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for various industry standards.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/services/compliance",
      details: "GDPR, HIPAA, SOX, and PCI DSS compliance management. Automated audits and reporting.",
      price: "$399/month",
      category: "Compliance"
    },
    {
      title: "DevOps Automation",
      description: "Streamline your development workflow with automated CI/CD pipelines and infrastructure management.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/services/devops",
      details: "Automated testing, deployment, and infrastructure provisioning. Support for major cloud platforms and tools.",
      price: "$299/month",
      category: "DevOps"
    },
    {
      title: "Quantum Computing Consulting",
      description: "Expert guidance on quantum computing applications and algorithm development.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/services/quantum",
      details: "Quantum algorithm development, optimization, and implementation. Access to quantum computing resources.",
      price: "$999/hour",
      category: "Quantum Computing"
    },
    {
      title: "Edge Computing Platform",
      description: "Deploy applications closer to users with our edge computing infrastructure.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services/edge-computing",
      details: "Global edge network with low-latency computing. Support for containerized applications and serverless functions.",
      price: "$199/month",
      category: "Edge Computing"
    },
    {
      title: "AI Ethics Framework",
      description: "Develop responsible AI systems with our comprehensive ethics and governance framework.",
      icon: <Eye className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/services/ai-ethics",
      details: "AI bias detection, explainability, and fairness assessment. Compliance with AI ethics guidelines and regulations.",
      price: "$2,999/project",
      category: "AI Governance"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Discover Our Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of AI, IT, and technology services designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-zion-purple/30 hover:border-zion-purple/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  {feature.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs text-zion-slate-light">
                    {feature.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white group-hover:text-zion-cyan transition-colors">
                    {feature.title}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-zion-cyan">
                      {feature.price}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-3">
                <CardDescription className="text-zion-slate-light mb-3">
                  {feature.description}
                </CardDescription>
                <div className="mb-3">
                  {feature.icon}
                </div>
                <p className="text-sm text-zion-slate-light">
                  {feature.details}
                </p>
              </CardContent>
              
              <CardFooter>
                <Button asChild className="w-full bg-gradient-to-r from-zion-blue to-zion-purple hover:from-zion-purple hover:to-zion-blue text-white border-0">
                  <Link to={feature.link}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zion-slate-light mb-4">
            Don't see what you're looking for?
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white border-0">
            <Link to="/contact">
              Request Custom Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}