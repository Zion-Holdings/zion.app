
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Bot,
  Shield,
  Cloud,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Users,
  Zap,
  Code,
  Building,
  ArrowRight
} from 'lucide-react';

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.",
      price: "Free",
      marketPrice: "$500-2000/month"
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.",
      price: "Free",
      marketPrice: "$200-1000/month"
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.",
      price: "Free",
      marketPrice: "$100-500/month"
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.",
      price: "Free",
      marketPrice: "$50-300/month"
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.",
      price: "Free",
      marketPrice: "$100-500/month"
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.",
      price: "Free",
      marketPrice: "$200-800/month"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.",
      price: "Custom",
      marketPrice: "$2000-10000/month"
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.",
      price: "Free",
      marketPrice: "$300-1500/month"
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
              icon: <Code className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.",
      price: "Free",
      marketPrice: "$100-800/month"
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.",
      price: "Free",
      marketPrice: "$200-1200/month"
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.",
      price: "$99/month",
      marketPrice: "$500-3000/month"
    },
    // New Micro SAAS Services
    {
      title: "AI Content Generator",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/ai-content-generator",
      badge: "AI-Powered",
      details: "Create engaging content in seconds with our advanced language models. Supports multiple languages and content types.",
      price: "$29/month",
      marketPrice: "$100-500/month"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audits and vulnerability assessments for your digital infrastructure.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" />,
      link: "/cybersecurity-assessment",
      badge: "Security",
      details: "Identify security gaps, assess compliance, and get actionable recommendations to protect your business.",
      price: "$199/month",
      marketPrice: "$500-2000/month"
    },
    {
      title: "Cloud Migration Service",
      description: "Seamless migration of your applications and data to cloud platforms with zero downtime.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/cloud-migration",
      badge: "Cloud",
      details: "Expert guidance and execution for migrating to AWS, Azure, Google Cloud, or hybrid solutions.",
      price: "$299/month",
      marketPrice: "$1000-5000/month"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence dashboards with customizable KPIs and automated reporting.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/data-analytics",
      badge: "Analytics",
      details: "Transform raw data into actionable insights with interactive visualizations and automated alerts.",
      price: "$79/month",
      marketPrice: "$300-1500/month"
    },
    {
      title: "API Development & Integration",
      description: "Custom API development and seamless integration with your existing systems and third-party services.",
              icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/api-development",
      badge: "Development",
      details: "Build robust APIs, implement webhooks, and create seamless integrations for your business applications.",
      price: "$149/month",
      marketPrice: "$500-3000/month"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure for optimal performance and security.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-700" />,
      link: "/network-infrastructure",
      badge: "Infrastructure",
      details: "Enterprise-grade networking solutions including SD-WAN, VPN, load balancing, and network monitoring.",
      price: "$399/month",
      marketPrice: "$1000-5000/month"
    },
    {
      title: "Document Management System",
      description: "Secure, cloud-based document management with advanced search, collaboration, and compliance features.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-slate-100 to-gray-100 text-slate-700" />,
      link: "/document-management",
      badge: "Productivity",
      details: "Organize, secure, and collaborate on documents with version control, workflow automation, and audit trails.",
      price: "$49/month",
      marketPrice: "$200-1000/month"
    },
    {
      title: "Video Production Suite",
      description: "Professional video editing, streaming, and production tools powered by AI and cloud technology.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700" />,
      link: "/video-production",
      badge: "Creative",
      details: "Create stunning videos with AI-powered editing, automated captions, and professional templates.",
      price: "$89/month",
      marketPrice: "$300-2000/month"
    },
    {
      title: "UI/UX Design Service",
      description: "Professional user interface and experience design for web and mobile applications.",
              icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/ui-ux-design",
      badge: "Design",
      details: "User-centered design solutions with wireframing, prototyping, and usability testing for optimal user experience.",
      price: "$199/month",
      marketPrice: "$500-3000/month"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your applications and websites for maximum speed, efficiency, and user experience.",
              icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700" />,
      link: "/performance-optimization",
      badge: "Performance",
      details: "Improve load times, reduce resource usage, and enhance user satisfaction with our optimization services.",
      price: "$129/month",
      marketPrice: "$400-2000/month"
    },
    {
      title: "Startup Launch Package",
      description: "Complete technology setup and launch support for new startups and businesses.",
              icon: <Zap className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-orange-100 to-red-100 text-orange-700" />,
      link: "/startup-launch",
      badge: "Startup",
      details: "Get your startup off the ground with comprehensive tech setup, website development, and digital marketing.",
      price: "$999/launch",
      marketPrice: "$3000-15000/launch"
    },
    {
      title: "Innovation Consulting",
      description: "Strategic guidance on technology adoption, digital transformation, and innovation strategies.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700" />,
      link: "/innovation-consulting",
      badge: "Strategy",
      details: "Navigate digital disruption with expert advice on emerging technologies and business model innovation.",
      price: "$299/month",
      marketPrice: "$1000-5000/month"
    },
    {
      title: "IoT Development Platform",
      description: "Build, deploy, and manage Internet of Things devices and applications with our comprehensive platform.",
              icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" />,
      link: "/iot-platform",
      badge: "IoT",
      details: "Connect, monitor, and control IoT devices with real-time data analytics and automated workflows.",
      price: "$179/month",
      marketPrice: "$500-3000/month"
    },
    {
      title: "Server Management",
      description: "24/7 server monitoring, maintenance, and optimization for optimal performance and uptime.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-gray-100 to-slate-100 text-gray-700" />,
      link: "/server-management",
      badge: "Infrastructure",
      details: "Proactive server management with automated monitoring, backup, and disaster recovery solutions.",
      price: "$249/month",
      marketPrice: "$800-4000/month"
    },
    {
      title: "Remote Work Solutions",
      description: "Complete remote work infrastructure including VPN, collaboration tools, and security measures.",
      icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/remote-work-solutions",
      badge: "Remote",
      details: "Enable secure and productive remote work with enterprise-grade tools and infrastructure.",
      price: "$99/month",
      marketPrice: "$300-1500/month"
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android with modern design and advanced features.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/mobile-app-development",
      badge: "Mobile",
      details: "Native and cross-platform mobile apps with intuitive design, performance optimization, and app store deployment.",
      price: "$399/month",
      marketPrice: "$1500-8000/month"
    },
    {
      title: "Digital Marketing Automation",
      description: "Automate your marketing campaigns with AI-powered tools for email, social media, and advertising.",
              icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/marketing-automation",
      badge: "Marketing",
      details: "Streamline marketing operations with automated workflows, lead scoring, and personalized campaigns.",
      price: "$149/month",
      marketPrice: "$500-2500/month"
    },
    {
      title: "Blockchain Development",
      description: "Custom blockchain solutions, smart contracts, and decentralized applications for your business.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-700" />,
      link: "/blockchain-development",
      badge: "Blockchain",
      details: "Build secure, transparent, and efficient blockchain solutions for various business applications.",
      price: "$599/month",
      marketPrice: "$2000-10000/month"
    },
    {
      title: "Machine Learning Platform",
      description: "End-to-end machine learning platform for building, training, and deploying AI models.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700" />,
      link: "/ml-platform",
      badge: "AI/ML",
      details: "Complete ML workflow from data preparation to model deployment with automated model management.",
      price: "$299/month",
      marketPrice: "$1000-5000/month"
    },
    {
      title: "DevOps Automation",
      description: "Automate your development and deployment processes with CI/CD pipelines and infrastructure as code.",
              icon: <Zap className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-emerald-100 to-teal-700" />,
      link: "/devops-automation",
      badge: "DevOps",
      details: "Streamline software delivery with automated testing, deployment, and monitoring workflows.",
      price: "$199/month",
      marketPrice: "$800-3000/month"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for various industry standards and regulations.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-green-100 to-emerald-100 text-green-700" />,
      link: "/compliance-management",
      badge: "Compliance",
      details: "Stay compliant with automated monitoring, reporting, and audit trails for various regulations.",
      price: "$179/month",
      marketPrice: "$600-3000/month"
    },
    {
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with disaster recovery planning and business continuity services.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700" />,
      link: "/backup-recovery",
      badge: "Data Protection",
      details: "Protect your critical data with automated backups, encryption, and rapid recovery solutions.",
      price: "$89/month",
      marketPrice: "$300-1500/month"
    },
    {
      title: "Virtual Reality Solutions",
      description: "Immersive VR experiences for training, marketing, and entertainment applications.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700" />,
      link: "/vr-solutions",
      badge: "VR/AR",
      details: "Create engaging virtual reality experiences for various industries and use cases.",
      price: "$399/month",
      marketPrice: "$1500-8000/month"
    },
    {
      title: "Quantum Computing Consulting",
      description: "Strategic guidance on quantum computing applications and implementation for your business.",
              icon: <Code className="h-10 w-10 p-2 rounded-md bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700" />,
      link: "/quantum-consulting",
      badge: "Quantum",
      details: "Explore quantum computing opportunities and prepare your business for the quantum future.",
      price: "$799/month",
      marketPrice: "$3000-15000/month"
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
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{feature.details}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-600 font-semibold">Zion Price: {feature.price}</span>
                  <span className="text-gray-500">Market: {feature.marketPrice}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 group-hover:bg-primary/90 transition-colors">
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
