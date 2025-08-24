import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  PenTool, 
  BarChart3, 
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";

const aiServices = [
  {
    id: "ai-content",
    title: "AI-Powered Content Generation",
    description: "Automated content creation for blogs, social media, and marketing materials using advanced language models.",
    price: 299,
    currency: "$",
    period: "/month",
    features: [
      "Unlimited content generation",
      "Multi-language support",
      "SEO optimization",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar management"
    ],
    icon: <PenTool className="h-8 w-8" />,
    category: "Content Creation",
    badge: "Popular",
    link: "/services",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Support Bot",
    description: "Intelligent chatbot with natural language processing for 24/7 customer support and lead generation.",
    price: 450,
    currency: "$",
    period: "/month",
    features: [
      "Natural language processing",
      "Multi-channel integration",
      "Lead qualification",
      "24/7 availability",
      "Analytics dashboard",
      "Custom training"
    ],
    icon: <MessageSquare className="h-8 w-8" />,
    category: "Customer Support",
    badge: "Featured",
    link: "/services",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a5ab?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-video",
    title: "AI-Powered Video Analytics",
    description: "Computer vision platform for video surveillance, object detection, facial recognition, and behavioral analysis.",
    price: 1800,
    currency: "$",
    period: "/month",
    features: [
      "Real-time object detection",
      "Facial recognition",
      "Behavioral analysis",
      "Custom model training",
      "API integration",
      "Compliance reporting"
    ],
    icon: <Eye className="h-8 w-8" />,
    category: "Computer Vision",
    badge: "Advanced",
    link: "/services",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-analytics",
    title: "Predictive Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive modeling for sales forecasting and trend analysis.",
    price: 800,
    currency: "$",
    period: "/month",
    features: [
      "Predictive modeling",
      "Real-time dashboards",
      "Custom algorithms",
      "Data visualization",
      "Automated reporting",
      "API access"
    ],
    icon: <BarChart3 className="h-8 w-8" />,
    category: "Business Intelligence",
    badge: "Pro",
    link: "/services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c072?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-security",
    title: "AI-Powered Threat Detection",
    description: "Advanced cybersecurity using machine learning to detect and prevent sophisticated cyber threats in real-time.",
    price: 1200,
    currency: "$",
    period: "/month",
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated response",
      "Threat intelligence",
      "Compliance monitoring",
      "24/7 SOC support"
    ],
    icon: <Shield className="h-8 w-8" />,
    category: "Cybersecurity",
    badge: "Enterprise",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-automation",
    title: "Intelligent Process Automation",
    description: "AI-driven workflow automation that learns from your business processes and continuously improves efficiency.",
    price: 650,
    currency: "$",
    period: "/month",
    features: [
      "Process mining",
      "Workflow automation",
      "Machine learning",
      "Integration APIs",
      "Performance analytics",
      "Custom workflows"
    ],
    icon: <Zap className="h-8 w-8" />,
    category: "Automation",
    badge: "New",
    link: "/services",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
  }
];

const benefits = [
  {
    title: "Cost Efficiency",
    description: "Reduce operational costs by up to 40% through intelligent automation and optimization",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "24/7 Availability",
    description: "AI services never sleep, providing round-the-clock support and monitoring",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Scalability",
    description: "Easily scale your AI capabilities as your business grows without additional infrastructure",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Continuous Learning",
    description: "AI models continuously improve and adapt to your specific business needs and data",
    icon: <Brain className="h-6 w-6" />
  }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Modern Business
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From content creation to predictive analytics, 
              our AI services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose AI Services?</h2>
            <p className="text-zion-slate-light text-lg">
              Leverage the power of artificial intelligence to drive innovation and growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of AI-powered solutions designed to address your specific business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                      {service.category}
                    </Badge>
                    {service.badge && (
                      <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-zion-purple">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-muted-foreground">{service.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button asChild className="w-full">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Join thousands of businesses already leveraging our AI solutions to drive growth and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Request Custom Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Our AI Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}