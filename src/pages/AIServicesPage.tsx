import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Bot, 
  MessageSquare, 
  Image, 
  Code, 
  BarChart3, 
  Shield, 
  Zap,
  Globe,
  Database,
  FileText,
  Video,
  Mic,
  Palette,
  Search,
  TrendingUp,
  Users,
  Lock
} from "lucide-react";

export default function AIServicesPage() {
  const aiServices = [
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns using advanced AI models.",
      price: "$29/month",
      features: ["Unlimited content generation", "Multiple content types", "SEO optimization", "Brand voice customization"],
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      badge: "Popular",
      link: "/ai-content-generator",
      category: "Content Creation"
    },
    {
      title: "AI Image Generator Studio",
      description: "Create stunning visuals, illustrations, and graphics with AI-powered image generation technology.",
      price: "$19/month",
      features: ["High-resolution images", "Multiple art styles", "Commercial license", "Batch generation"],
      icon: <Image className="h-8 w-8 text-purple-500" />,
      badge: "New",
      link: "/ai-image-generator",
      category: "Visual Design"
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent coding companion that helps developers write, debug, and optimize code across multiple languages.",
      price: "$39/month",
      features: ["Multi-language support", "Code completion", "Bug detection", "Performance optimization"],
      icon: <Code className="h-8 w-8 text-green-500" />,
      badge: "Featured",
      link: "/ai-code-assistant",
      category: "Development"
    },
    {
      title: "AI Chatbot Builder",
      description: "Create intelligent conversational AI chatbots for customer service, sales, and support automation.",
      price: "$49/month",
      features: ["No-code builder", "Multi-platform integration", "Analytics dashboard", "Custom training"],
      icon: <Bot className="h-8 w-8 text-cyan-500" />,
      badge: "Premium",
      link: "/ai-chatbot-builder",
      category: "Automation"
    },
    {
      title: "AI Data Analytics Platform",
      description: "Transform raw data into actionable insights with AI-powered analytics and predictive modeling.",
      price: "$79/month",
      features: ["Real-time analytics", "Predictive insights", "Custom dashboards", "Data visualization"],
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      badge: "Enterprise",
      link: "/ai-analytics",
      category: "Data Science"
    },
    {
      title: "AI Voice & Speech Recognition",
      description: "Advanced speech-to-text and text-to-speech capabilities with natural language processing.",
      price: "$34/month",
      features: ["Multi-language support", "Real-time transcription", "Voice cloning", "Custom models"],
      icon: <Mic className="h-8 w-8 text-red-500" />,
      badge: "Advanced",
      link: "/ai-voice-recognition",
      category: "Audio Processing"
    },
    {
      title: "AI Video Production Suite",
      description: "Create professional videos with AI-powered editing, effects, and content generation.",
      price: "$59/month",
      features: ["Auto-editing", "AI effects", "Voice synthesis", "Multi-format export"],
      icon: <Video className="h-8 w-8 text-indigo-500" />,
      badge: "Pro",
      link: "/ai-video-production",
      category: "Video Creation"
    },
    {
      title: "AI Security & Fraud Detection",
      description: "Protect your business with AI-powered security monitoring and fraud prevention systems.",
      price: "$89/month",
      features: ["Real-time monitoring", "Behavioral analysis", "Threat detection", "Compliance reporting"],
      icon: <Shield className="h-8 w-8 text-emerald-500" />,
      badge: "Security",
      link: "/ai-security",
      category: "Cybersecurity"
    },
    {
      title: "AI Translation & Localization",
      description: "Break language barriers with AI-powered translation and cultural adaptation services.",
      price: "$24/month",
      features: ["100+ languages", "Cultural context", "Document translation", "API access"],
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      badge: "Global",
      link: "/ai-translation",
      category: "Language Services"
    },
    {
      title: "AI Customer Insights Platform",
      description: "Understand your customers better with AI-powered sentiment analysis and behavior prediction.",
      price: "$69/month",
      features: ["Sentiment analysis", "Customer segmentation", "Predictive modeling", "ROI tracking"],
      icon: <Users className="h-8 w-8 text-pink-500" />,
      badge: "Insights",
      link: "/ai-customer-insights",
      category: "Customer Intelligence"
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation and decision-making workflows.",
      price: "$54/month",
      features: ["Process automation", "Decision trees", "Integration APIs", "Performance metrics"],
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      badge: "Automation",
      link: "/ai-workflow-automation",
      category: "Business Process"
    },
    {
      title: "AI Research Assistant",
      description: "Accelerate research with AI-powered literature review, data analysis, and insight generation.",
      price: "$44/month",
      features: ["Literature review", "Data synthesis", "Citation management", "Collaboration tools"],
      icon: <Search className="h-8 w-8 text-violet-500" />,
      badge: "Research",
      link: "/ai-research-assistant",
      category: "Academic & Research"
    }
  ];

  const categories = ["All", "Content Creation", "Visual Design", "Development", "Automation", "Data Science", "Audio Processing", "Video Creation", "Cybersecurity", "Language Services", "Customer Intelligence", "Business Process", "Academic & Research"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              AI-Powered Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence services designed for the modern enterprise
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your AI Solution
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            From content creation to cybersecurity, our AI services cover every aspect of modern business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  {service.icon}
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/40">
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
                <div className="text-2xl font-bold text-zion-cyan mt-2">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardHeader className="pt-0">
                <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-12 text-center border border-zion-purple/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging AI to gain competitive advantages and drive growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-3">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10 px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}