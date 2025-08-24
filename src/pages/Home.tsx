
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Brain, Shield, BarChart3, Bot, Globe, Sparkles, Star, 
  TrendingUp, Building, Settings, Code, Cpu, Palette, Wifi, Fingerprint,
  Globe2, Rocket, Zap, Network, ShieldCheck, Database, Cloud, Lock,
  Smartphone, Monitor, Server, ShieldX, Eye, BrainCircuit, MessageSquare,
  FileText, Video, Music, Camera, Mic, Search, Users, Target, Award,
  Clock, CheckCircle, DollarSign, BarChart, PieChart, LineChart, PhoneCall, Mail, MapPin
} from 'lucide-react';
import { FuturisticBackground } from '../components/ui/FuturisticBackground';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Home() {
  const microSaasServices = [
    {
      title: "AI Talent Matching Platform",
      description: "Advanced AI-powered talent acquisition and matching system with predictive analytics and automated screening.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/ai-talent-matching",
      badge: "AI-Powered",
      price: "$299/month",
      category: "AI Services",
      details: "Reduce hiring time by 70% and improve candidate quality with our intelligent matching algorithm."
    },
    {
      title: "AI Content Generator Pro",
      description: "Enterprise-grade AI content creation platform with multi-language support and brand voice customization.",
      icon: <FileText className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/ai-content-generator",
      badge: "Featured",
      price: "$199/month",
      category: "AI Services",
      details: "Generate high-quality content 10x faster with GPT-4 integration and SEO optimization."
    },
    {
      title: "AI Model Training Suite",
      description: "Custom AI model training platform with automated hyperparameter tuning and model deployment.",
      icon: <BrainCircuit className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/ai-model-training",
      badge: "Premium",
      price: "$499/month",
      category: "AI Services",
      details: "Train and deploy custom AI models with enterprise-grade infrastructure and monitoring."
    },
    {
      title: "Zion Hire AI Assistant",
      description: "Intelligent hiring assistant that automates candidate screening, scheduling, and communication.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/zion-hire-ai",
      badge: "New",
      price: "$149/month",
      category: "AI Services",
      details: "Streamline your hiring process with AI-powered automation and intelligent decision support."
    },
    {
      title: "Voice AI Assistant",
      description: "Custom voice AI solutions for customer service, sales, and internal operations automation.",
      icon: <Mic className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/voice-ai-assistant",
      badge: "Innovative",
      price: "$399/month",
      category: "AI Services",
      details: "Transform customer interactions with natural language processing and voice recognition."
    },
    {
      title: "Visual Recognition API",
      description: "Advanced computer vision API for image analysis, object detection, and facial recognition.",
      icon: <Eye className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/visual-recognition-api",
      badge: "Advanced",
      price: "$249/month",
      category: "AI Services",
      details: "Integrate powerful computer vision capabilities into your applications with simple API calls."
    },
    {
      title: "Cybersecurity Assessment Platform",
      description: "Comprehensive security audit platform with automated vulnerability scanning and compliance reporting.",
      icon: <ShieldCheck className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/cybersecurity-assessment",
      badge: "Essential",
      price: "$399/month",
      category: "Security",
      details: "Protect your business with enterprise-grade security assessments and real-time threat monitoring."
    },
    {
      title: "Cloud Migration Suite",
      description: "End-to-end cloud migration platform with cost optimization and performance monitoring.",
      icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/cloud-migration",
      badge: "Popular",
      price: "$599/month",
      category: "IT Services",
      details: "Migrate to the cloud with confidence using our automated tools and expert guidance."
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence platform with predictive analytics and automated reporting.",
      icon: <BarChart className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/data-analytics",
      badge: "Insights",
      price: "$299/month",
      category: "Analytics",
      details: "Transform raw data into actionable insights with our advanced analytics and visualization tools."
    },
    {
      title: "Network Infrastructure Manager",
      description: "Comprehensive network management platform with monitoring, automation, and security features.",
      icon: <Network className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/network-infrastructure",
      badge: "Enterprise",
      price: "$449/month",
      category: "IT Services",
      details: "Manage your network infrastructure efficiently with automated monitoring and proactive maintenance."
    },
    {
      title: "Video Production Suite",
      description: "AI-powered video editing and production platform with automated content generation.",
      icon: <Video className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/video-production",
      badge: "Creative",
      price: "$199/month",
      category: "Media",
      details: "Create professional videos with AI assistance and automated editing tools."
    },
    {
      title: "API Gateway & Management",
      description: "Enterprise API management platform with security, monitoring, and developer portal.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/api-gateway",
      badge: "Developer",
      price: "$349/month",
      category: "Development",
      details: "Manage your APIs efficiently with advanced security, rate limiting, and analytics."
    },
    {
      title: "IoT Device Management",
      description: "Comprehensive IoT platform for device monitoring, data collection, and automation.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/iot-device-management",
      badge: "IoT",
      price: "$399/month",
      category: "IoT",
      details: "Connect and manage your IoT devices with our secure and scalable platform."
    },
    {
      title: "Blockchain Integration Platform",
      description: "Enterprise blockchain solutions for supply chain, finance, and identity management.",
      icon: <ShieldX className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
      link: "/blockchain-integration",
      badge: "Blockchain",
      price: "$599/month",
      category: "Blockchain",
      details: "Leverage blockchain technology for secure, transparent, and efficient business processes."
    },
    {
      title: "Biometric Authentication System",
      description: "Advanced biometric security platform with multi-factor authentication and fraud detection.",
      icon: <Fingerprint className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/biometric-authentication",
      badge: "Security",
      price: "$299/month",
      category: "Security",
      details: "Enhance security with biometric authentication and advanced fraud prevention."
    },
    {
      title: "Global CDN & Edge Computing",
      description: "High-performance content delivery network with edge computing capabilities.",
      icon: <Globe2 className="h-10 w-10 p-2 rounded-md bg-sky-100 text-sky-700" />,
      link: "/global-cdn",
      badge: "Performance",
      price: "$199/month",
      category: "Infrastructure",
      details: "Deliver content globally with lightning-fast speed and edge computing power."
    },
    {
      title: "Quantum Computing API",
      description: "Access to quantum computing resources for complex calculations and simulations.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/quantum-computing-api",
      badge: "Quantum",
      price: "$799/month",
      category: "Advanced Tech",
      details: "Harness the power of quantum computing for breakthrough research and development."
    },
    {
      title: "Edge Computing Platform",
      description: "Distributed edge computing platform for real-time processing and low-latency applications.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-slate-100 text-slate-700" />,
      link: "/edge-computing",
      badge: "Edge",
      price: "$449/month",
      category: "Infrastructure",
      details: "Process data closer to users with our distributed edge computing platform."
    }
  ];

  const stats = [
    { label: "Micro SAAS Services", value: "25+", icon: Star },
    { label: "AI-Powered Solutions", value: "15+", icon: Brain },
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Success Rate", value: "99%", icon: Award },
    { label: "Support Hours", value: "24/7", icon: Clock },
    { label: "Global Coverage", value: "50+", icon: Globe }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Futuristic Background */}
      <FuturisticBackground variant="particles" intensity="medium" className="opacity-30" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
              <span className="text-blue-400 text-sm font-medium">Innovation at Your Fingertips</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
              Discover our comprehensive suite of 25+ micro SAAS services, AI solutions, and IT platforms 
              designed to accelerate your business growth and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/micro-saas-services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform shadow-lg"
              >
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Explore Our Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-blue-800/50 to-indigo-800/50 backdrop-blur-sm border border-blue-400/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-400" />
                <a href={contactInfo.website} className="font-medium hover:text-cyan-400 transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SAAS Services Section */}
        <div className="py-16 bg-gradient-to-b from-slate-900/50 to-blue-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Comprehensive Micro SAAS Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                25+ innovative micro SAAS solutions designed to transform your business operations and drive growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      {service.icon}
                      <Badge variant="secondary" className="bg-cyan-600/20 text-cyan-300 border-cyan-400/30">
                        {service.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit text-xs text-gray-300 border-gray-600">
                      {service.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </CardDescription>
                    <p className="text-xs text-gray-400 mb-4">{service.details}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 text-sm"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm border-t border-blue-400/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Join 500+ companies already leveraging our AI-powered solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Sparkles className="h-5 w-5" />
                Get Started Today
              </Link>
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
