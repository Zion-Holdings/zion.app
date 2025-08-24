
import React from "react";
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
<<<<<<< HEAD:backup/home/FeatureCTAs.tsx
  Clock
=======
  Clock,
  Shield,
  Database,
  Cloud,
  Brain,
  Globe,
  Lock,
  BarChart3,
  Cpu,
  Network,
  FileText,
  Target,
  Rocket,
  Palette,
  Eye,
  Headphones,
  Monitor,
  Smartphone as Mobile,
  Server,
  Key,
  ShieldCheck,
  Zap as Lightning,
  TrendingUp,
  Globe2,
  Layers,
  Activity,
  Sparkles,
  ShoppingCart
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77:src/components/home/FeatureCTAs.tsx
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
<<<<<<< HEAD:backup/home/FeatureCTAs.tsx
=======
    // AI & Machine Learning Services
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77:src/components/home/FeatureCTAs.tsx
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.",
      price: "$299/month",
      marketPrice: "$500-800/month"
    },
    {
      title: "AI Content Generation",
      description: "Generate high-quality content, articles, and marketing copy using advanced AI models trained on industry best practices.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/services",
      badge: "New",
      details: "Create engaging content 10x faster with AI-powered writing assistance, SEO optimization, and brand voice consistency.",
      price: "$99/month",
      marketPrice: "$150-300/month"
    },
    {
<<<<<<< HEAD:backup/home/FeatureCTAs.tsx
      title: "Comprehensive Micro SAAS Services",
      description: "Explore our extensive range of micro SAAS solutions including AI chatbots, blockchain development, IoT platforms, and more.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/comprehensive-services",
      badge: "Featured",
      details: "From AI chatbots starting at $299 to enterprise blockchain solutions at $3,499, we offer competitive pricing with enterprise-grade quality and support."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
=======
      title: "AI-Powered Analytics",
      description: "Transform raw data into actionable insights with machine learning algorithms and predictive analytics.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/services",
      details: "Get predictive insights, automated reporting, and intelligent recommendations to optimize your business performance.",
      price: "$199/month",
      marketPrice: "$300-600/month"
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77:src/components/home/FeatureCTAs.tsx
    },
    {
      title: "AI Chatbot Development",
      description: "Custom AI chatbots for customer service, lead generation, and 24/7 business automation.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      details: "Intelligent conversational AI that handles customer inquiries, processes orders, and provides instant support.",
      price: "$399/month",
      marketPrice: "$600-1200/month"
    },

    // IT Infrastructure Services
    {
      title: "Cloud Migration & Management",
      description: "Seamless cloud migration, optimization, and 24/7 management for AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/services",
      badge: "Featured",
      details: "Reduce cloud costs by 30-50% while improving performance and security with expert cloud management.",
      price: "$799/month",
      marketPrice: "$1200-2500/month"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audits, penetration testing, and compliance management for modern businesses.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/services",
      details: "Identify vulnerabilities, implement security best practices, and achieve SOC 2, ISO 27001 compliance.",
      price: "$599/month",
      marketPrice: "$800-2000/month"
    },
    {
      title: "DevOps Automation",
      description: "Streamline development workflows with CI/CD pipelines, infrastructure as code, and automated testing.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/services",
      details: "Deploy 10x faster with automated testing, monitoring, and infrastructure management.",
      price: "$499/month",
      marketPrice: "$700-1500/month"
    },
    {
      title: "Database Optimization",
      description: "Performance tuning, scaling, and maintenance for SQL and NoSQL databases.",
      icon: <Database className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/services",
      details: "Improve query performance by 5-10x and reduce database costs with expert optimization.",
      price: "$299/month",
      marketPrice: "$400-1000/month"
    },

    // Business Solutions
    {
      title: "Digital Transformation",
      description: "Strategic consulting and implementation to modernize legacy systems and drive business innovation.",
      icon: <Rocket className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/services",
      details: "Transform your business with modern technology stack, automation, and data-driven decision making.",
      price: "$1499/month",
      marketPrice: "$2000-5000/month"
    },
    {
      title: "API Development & Integration",
      description: "Custom API development, third-party integrations, and microservices architecture.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/services",
      details: "Connect your systems seamlessly with robust APIs, webhooks, and integration solutions.",
      price: "$399/month",
      marketPrice: "$600-1500/month"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX.",
      icon: <Mobile className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/services",
      details: "Build engaging mobile experiences with React Native, Flutter, or native development.",
      price: "$899/month",
      marketPrice: "$1500-3000/month"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setup, payment integration, and inventory management systems.",
      icon: <ShoppingCart className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/services",
      details: "Launch your online business with secure payment processing, inventory tracking, and analytics.",
      price: "$199/month",
      marketPrice: "$300-800/month"
    },

    // Specialized Services
    {
      title: "Blockchain Development",
      description: "Smart contracts, DeFi applications, and blockchain infrastructure development.",
      icon: <Key className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
      link: "/services",
      badge: "Premium",
      details: "Build secure, scalable blockchain solutions with Solidity, Rust, and modern blockchain frameworks.",
      price: "$1299/month",
      marketPrice: "$2000-5000/month"
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things device development, sensor networks, and data collection systems.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/services",
      details: "Connect devices, collect data, and build intelligent IoT ecosystems for smart homes and businesses.",
      price: "$599/month",
      marketPrice: "$800-2000/month"
    },
    {
      title: "Data Science Consulting",
      description: "Advanced analytics, machine learning model development, and data strategy consulting.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/services",
      details: "Transform your data into competitive advantages with predictive modeling and business intelligence.",
      price: "$899/month",
      marketPrice: "$1200-3000/month"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design, prototyping, and user experience optimization for web and mobile.",
      icon: <Palette className="h-10 w-10 p-2 rounded-md bg-rose-100 text-rose-700" />,
      link: "/services",
      details: "Create intuitive, engaging user experiences that drive conversion and user satisfaction.",
      price: "$299/month",
      marketPrice: "$400-1200/month"
    },

    // Enterprise Solutions
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.",
      price: "$2499/month",
      marketPrice: "$3000-8000/month"
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.",
      price: "Free",
      marketPrice: "$100-500/month"
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.",
      price: "Free",
      marketPrice: "$50-200/month"
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
<<<<<<< HEAD:backup/home/FeatureCTAs.tsx
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-rose-100 text-rose-700" />,
      link: "/projects",
      details: "Keep your projects on track with our comprehensive project management tools, including task tracking, time management, and collaboration features."
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting to track your success and optimize performance.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-slate-100 text-slate-700" />,
      link: "/analytics",
      details: "Get detailed insights into your performance metrics, user engagement, and business outcomes with our advanced analytics platform."
=======
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.",
      price: "$99/month",
      marketPrice: "$150-400/month"
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.",
      price: "$399/month",
      marketPrice: "$600-1500/month"
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77:src/components/home/FeatureCTAs.tsx
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover What Zion Can Do For You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive ecosystem of tools, services, and solutions designed to accelerate your success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
<<<<<<< HEAD:backup/home/FeatureCTAs.tsx
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                {feature.icon}
                {feature.badge && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <p className="text-sm text-gray-500 mb-6">
                {feature.details}
              </p>
              
              <Link 
                to={feature.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
=======
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
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{feature.details}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-600">Our Price:</span>
                    <span className="text-sm font-bold text-green-600">{feature.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Market Price:</span>
                    <span className="text-sm text-muted-foreground line-through">{feature.marketPrice}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 group-hover:scale-105 transition-transform">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77:src/components/home/FeatureCTAs.tsx
          ))}
        </div>
      </div>
    </section>
  );
}
