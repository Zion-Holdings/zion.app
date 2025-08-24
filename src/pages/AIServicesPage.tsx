import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Eye, 
  Code, 
  Globe,
  Database,
  Network,
  FileText,
  Video,
  Search,
  Lock,
  TrendingUp,
  Users,
  Lightbulb,
  Phone,
  Settings,
  BarChart,
  Smartphone,

} from "lucide-react";

export default function AIServicesPage() {
  const aiServices = [
    {
      id: "ai-chatbot",
      title: "AI Chatbot Development",
      description: "Custom AI-powered chatbots for customer service, sales, and support with natural language processing capabilities.",
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      price: 2500,
      currency: "$",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Integration APIs",
        "Analytics Dashboard",
        "Custom Training",
        "24/7 Support"
      ],
      category: "Conversational AI",
      badge: "Popular",
      link: "https://ziontechgroup.com/ai-chatbot",
      details: "Transform customer interactions with intelligent chatbots that understand context, handle complex queries, and provide 24/7 support. Our solutions integrate seamlessly with your existing systems and can be trained on your specific domain knowledge."
    },
    {
      id: "ai-content-generation",
      title: "AI Content Generation Suite",
      description: "Generate high-quality articles, marketing copy, and creative content using advanced language models.",
      icon: <FileText className="h-8 w-8 text-green-500" />,
      price: 1800,
      currency: "$",
      features: [
        "Article Generation",
        "Marketing Copy",
        "SEO Optimization",
        "Plagiarism Detection",
        "Content Templates",
        "Bulk Generation"
      ],
      category: "Content AI",
      badge: "New",
      link: "https://ziontechgroup.com/ai-content",
      details: "Create engaging, SEO-optimized content at scale. Our AI understands your brand voice and generates content that resonates with your audience while maintaining high quality and originality."
    },
    {
      id: "ai-image-generation",
      title: "AI Image Generation Platform",
      description: "Create stunning visuals, logos, and graphics using state-of-the-art image generation AI models.",
      icon: <BarChart className="h-8 w-8 text-purple-500" />,
      price: 3200,
      currency: "$",
      features: [
        "Text-to-Image Generation",
        "Style Transfer",
        "Logo Creation",
        "Brand Consistency",
        "High Resolution Output",
        "Commercial License"
      ],
      category: "Visual AI",
      badge: "Featured",
      link: "https://ziontechgroup.com/ai-images",
      details: "Generate professional-quality images for marketing, branding, and creative projects. Our platform supports multiple styles and can maintain brand consistency across all generated visuals."
    },
    {
      id: "ai-video-editing",
      title: "AI Video Editing & Enhancement",
      description: "Automated video editing, enhancement, and post-production using artificial intelligence.",
      icon: <Video className="h-8 w-8 text-red-500" />,
      price: 4500,
      currency: "$",
      features: [
        "Auto-editing",
        "Background Removal",
        "Color Grading",
        "Motion Tracking",
        "4K Resolution",
        "Batch Processing"
      ],
      category: "Video AI",
      badge: "Premium",
      link: "https://ziontechgroup.com/ai-video",
      details: "Streamline your video production workflow with AI-powered editing tools. Automatically enhance quality, remove backgrounds, and apply professional-grade effects in minutes instead of hours."
    },
    {
      id: "ai-data-analytics",
      title: "AI-Powered Data Analytics",
      description: "Advanced analytics and insights using machine learning to uncover patterns and trends in your data.",
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      price: 3800,
      currency: "$",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Real-time Insights",
        "Custom Dashboards",
        "Data Visualization",
        "API Integration"
      ],
      category: "Analytics AI",
      badge: "Enterprise",
      link: "https://ziontechgroup.com/ai-analytics",
      details: "Transform raw data into actionable insights with our AI analytics platform. Predict trends, identify opportunities, and make data-driven decisions with confidence."
    },
    {
      id: "ai-cybersecurity",
      title: "AI Cybersecurity Protection",
      description: "Intelligent threat detection and prevention using machine learning algorithms.",
      icon: <Shield className="h-8 w-8 text-cyan-500" />,
      price: 5500,
      currency: "$",
      features: [
        "Threat Detection",
        "Behavioral Analysis",
        "Real-time Monitoring",
        "Incident Response",
        "Compliance Reporting",
        "24/7 Security"
      ],
      category: "Security AI",
      badge: "Critical",
      link: "https://ziontechgroup.com/ai-security",
      details: "Protect your digital assets with AI-powered cybersecurity that learns from threats and adapts to new attack vectors. Our system provides comprehensive protection with minimal false positives."
    },
    {
      id: "ai-process-automation",
      title: "AI Process Automation",
      description: "Automate complex business processes using intelligent workflow automation and decision-making AI.",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      price: 4200,
      currency: "$",
      features: [
        "Workflow Automation",
        "Decision Trees",
        "Process Optimization",
        "Integration APIs",
        "Performance Monitoring",
        "Custom Rules Engine"
      ],
      category: "Automation AI",
      badge: "Efficient",
      link: "https://ziontechgroup.com/ai-automation",
      details: "Streamline operations and reduce manual work with intelligent process automation. Our AI understands your business logic and can make complex decisions automatically."
    },
    {
      id: "ai-customer-insights",
      title: "AI Customer Insights Platform",
      description: "Deep customer understanding through AI-powered analysis of behavior, preferences, and sentiment.",
      icon: <Users className="h-8 w-8 text-pink-500" />,
      price: 2800,
      currency: "$",
      features: [
        "Behavioral Analysis",
        "Sentiment Analysis",
        "Customer Segmentation",
        "Predictive Modeling",
        "Personalization Engine",
        "ROI Tracking"
      ],
      category: "Customer AI",
      badge: "Insightful",
      link: "https://ziontechgroup.com/ai-insights",
      details: "Understand your customers like never before with AI-powered insights. Predict behavior, personalize experiences, and increase customer lifetime value through intelligent analysis."
    },
    {
      id: "ai-search-optimization",
      title: "AI Search & Discovery Engine",
      description: "Intelligent search functionality with semantic understanding and personalized recommendations.",
      icon: <Search className="h-8 w-8 text-indigo-500" />,
      price: 3500,
      currency: "$",
      features: [
        "Semantic Search",
        "Personalized Results",
        "Auto-complete",
        "Search Analytics",
        "Multi-modal Search",
        "Real-time Indexing"
      ],
      category: "Search AI",
      badge: "Smart",
      link: "https://ziontechgroup.com/ai-search",
      details: "Enhance user experience with intelligent search that understands intent and context. Our AI delivers relevant results faster and helps users discover content they didn't know existed."
    },
    {
      id: "ai-translation",
      title: "AI Translation & Localization",
      description: "Accurate, context-aware translation services supporting 100+ languages with cultural adaptation.",
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      price: 2200,
      currency: "$",
      features: [
        "100+ Languages",
        "Context Awareness",
        "Cultural Adaptation",
        "Industry Specialization",
        "API Integration",
        "Quality Assurance"
      ],
      category: "Language AI",
      badge: "Global",
      link: "https://ziontechgroup.com/ai-translation",
      details: "Break language barriers with AI-powered translation that understands context and cultural nuances. Perfect for global businesses, content creators, and international communication."
    },
    {
      id: "ai-code-generation",
      title: "AI Code Generation & Review",
      description: "Generate, review, and optimize code using advanced AI models trained on millions of repositories.",
      icon: <Code className="h-8 w-8 text-emerald-500" />,
      price: 4800,
      currency: "$",
      features: [
        "Code Generation",
        "Code Review",
        "Bug Detection",
        "Performance Optimization",
        "Documentation",
        "Multi-language Support"
      ],
      category: "Development AI",
      badge: "Developer",
      link: "https://ziontechgroup.com/ai-code",
      details: "Accelerate development with AI that writes, reviews, and optimizes code. Our platform supports multiple programming languages and integrates with your existing development workflow."
    },
    {
      id: "ai-predictive-maintenance",
      title: "AI Predictive Maintenance",
      description: "Predict equipment failures and optimize maintenance schedules using IoT data and machine learning.",
      icon: <Settings className="h-8 w-8 text-gray-500" />,
      price: 6500,
      currency: "$",
      features: [
        "Failure Prediction",
        "IoT Integration",
        "Maintenance Optimization",
        "Cost Analysis",
        "Real-time Monitoring",
        "Custom Alerts"
      ],
      category: "IoT AI",
      badge: "Industrial",
      link: "https://ziontechgroup.com/ai-maintenance",
      details: "Reduce downtime and maintenance costs with AI-powered predictive maintenance. Monitor equipment health in real-time and schedule maintenance only when needed."
    }
  ];

  const categories = [
    "All Services",
    "Conversational AI",
    "Content AI", 
    "Visual AI",
    "Video AI",
    "Analytics AI",
    "Security AI",
    "Automation AI",
    "Customer AI",
    "Search AI",
    "Language AI",
    "Development AI",
    "IoT AI"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");
  const [filteredServices, setFilteredServices] = React.useState(aiServices);

  React.useEffect(() => {
    if (selectedCategory === "All Services") {
      setFilteredServices(aiServices);
    } else {
      setFilteredServices(aiServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI solutions. From chatbots to predictive analytics, 
            we provide enterprise-grade AI services that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <Brain className="h-5 w-5 mr-2" />
              Explore AI Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Lightbulb className="h-5 w-5 mr-2" />
              Get AI Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-zion-purple text-white"
                    : "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:scale-105 border-zion-blue-light/20 bg-zion-blue-dark/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-zion-blue-dark/50 group-hover:bg-zion-purple/20 transition-colors">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <p className="text-sm text-zion-slate-light mb-3">{service.details}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-zion-cyan">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-zion-cyan">{service.currency}{service.price.toLocaleString()}</span>
                    <span className="text-zion-slate-light">/project</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Get Started
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our AI experts are ready to help you implement the perfect AI solution for your business needs. 
            Get a free consultation and discover how AI can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <MessageSquare className="h-5 w-5 mr-2" />
              Free AI Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}