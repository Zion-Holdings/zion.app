import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Code, 
  Globe,
  Server,
  Eye,
  FileText,
  CheckCircle,
  TrendingUp,
  Users,
  Lock,
  Mic,
  Video,
  Search
} from 'lucide-react';

const AIServices = [
  {
    title: "AI Strategy Consulting",
    description: "Strategic guidance for implementing AI solutions in your business",
    price: "$2,500 - $15,000",
    features: ["AI readiness assessment", "ROI analysis", "Implementation roadmap", "Team training"],
    icon: <Brain className="h-8 w-8 text-zion-cyan" />,
    category: "Strategy",
    badge: "Popular",
    link: "/request-quote?service=ai-strategy"
  },
  {
    title: "Custom AI Model Development",
    description: "Tailored machine learning models for your specific use case",
    price: "$5,000 - $50,000",
    features: ["Data preprocessing", "Model training", "Performance optimization", "Deployment support"],
          icon: <Server className="h-8 w-8 text-zion-purple" />,
    category: "Development",
    badge: "Premium",
    link: "/request-quote?service=custom-ai-models"
  },
  {
    title: "Data Labeling & Annotation",
    description: "High-quality data preparation for machine learning projects",
    price: "$0.50 - $5.00 per item",
    features: ["Image annotation", "Text labeling", "Quality assurance", "Scalable workforce"],
    icon: <FileText className="h-8 w-8 text-zion-blue" />,
    category: "Data",
    link: "/request-quote?service=data-labeling"
  },
  {
    title: "AI-Powered Analytics",
    description: "Advanced business intelligence with machine learning insights",
    price: "$1,500 - $8,000/month",
    features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "API integration"],
    icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />,
    category: "Analytics",
    badge: "New",
    link: "/request-quote?service=ai-analytics"
  },
  {
    title: "Computer Vision Solutions",
    description: "Image and video analysis for automation and quality control",
    price: "$3,000 - $25,000",
    features: ["Object detection", "Image classification", "Video processing", "Edge deployment"],
    icon: <Eye className="h-8 w-8 text-zion-purple" />,
    category: "Vision",
    link: "/request-quote?service=computer-vision"
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, and language understanding systems",
    price: "$2,000 - $20,000",
    features: ["Sentiment analysis", "Text generation", "Language translation", "Chatbot development"],
    icon: <MessageSquare className="h-8 w-8 text-zion-blue" />,
    category: "NLP",
    link: "/request-quote?service=nlp"
  },
  {
    title: "AI Ethics & Compliance",
    description: "Ensure your AI systems are fair, transparent, and compliant",
    price: "$1,500 - $10,000",
    features: ["Bias detection", "Explainability", "Privacy compliance", "Audit reports"],
    icon: <Shield className="h-8 w-8 text-zion-cyan" />,
    category: "Compliance",
    link: "/request-quote?service=ai-ethics"
  },
  {
    title: "AI Model Optimization",
    description: "Improve performance and efficiency of existing AI models",
    price: "$1,000 - $15,000",
    features: ["Performance tuning", "Model compression", "Inference optimization", "Cost reduction"],
    icon: <Zap className="h-8 w-8 text-zion-purple" />,
    category: "Optimization",
    link: "/request-quote?service=model-optimization"
  },
  {
    title: "AI Training & Workshops",
    description: "Custom training programs for your team on AI technologies",
    price: "$500 - $3,000 per person",
    features: ["Hands-on workshops", "Custom curriculum", "Certification", "Ongoing support"],
    icon: <Users className="h-8 w-8 text-zion-blue" />,
    category: "Training",
    link: "/request-quote?service=ai-training"
  },
  {
    title: "AI Integration Services",
    description: "Seamlessly integrate AI solutions into existing systems",
    price: "$2,000 - $20,000",
    features: ["API development", "System integration", "Testing", "Maintenance"],
    icon: <Code className="h-8 w-8 text-zion-cyan" />,
    category: "Integration",
    link: "/request-quote?service=ai-integration"
  },
  {
    title: "AI Security & Testing",
    description: "Comprehensive security testing for AI systems",
    price: "$1,500 - $12,000",
    features: ["Adversarial testing", "Vulnerability assessment", "Security hardening", "Compliance checks"],
    icon: <Lock className="h-8 w-8 text-zion-purple" />,
    category: "Security",
    link: "/request-quote?service=ai-security"
  },
  {
    title: "AI Content Generation",
    description: "Automated content creation for marketing and communication",
    price: "$500 - $5,000/month",
    features: ["Blog posts", "Social media content", "Product descriptions", "Multilingual support"],
    icon: <FileText className="h-8 w-8 text-zion-blue" />,
    category: "Content",
    link: "/request-quote?service=ai-content"
  }
];

const categories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4" /> },
  { name: "Strategy", value: "strategy", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Data", value: "data", icon: <Database className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Vision", value: "vision", icon: <Eye className="h-4 w-4" /> },
  { name: "NLP", value: "nlp", icon: <MessageSquare className="h-4 w-4" /> },
  { name: "Compliance", value: "compliance", icon: <Shield className="h-4 w-4" /> },
  { name: "Optimization", value: "optimization", icon: <Zap className="h-4 w-4" /> },
  { name: "Training", value: "training", icon: <Users className="h-4 w-4" /> },
  { name: "Integration", value: "integration", icon: <Code className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Lock className="h-4 w-4" /> },
  { name: "Content", value: "content", icon: <FileText className="h-4 w-4" /> }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredServices = selectedCategory === "all" 
    ? AIServices 
    : AIServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence services. 
            From strategy to implementation, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center gap-2 ${
                selectedCategory === category.value 
                  ? "bg-zion-purple text-white" 
                  : "border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              }`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-zion-blue-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</p>
                  <p className="text-sm text-zion-slate-light">Starting price</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom AI Solution?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team can design and implement custom AI solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Code className="h-5 w-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}