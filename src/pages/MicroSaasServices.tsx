import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, ArrowRight, Rocket } from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Micro SAAS Services data
  const microSaasServices = [
    {
      id: 1,
      name: "TaskFlow Pro",
      category: "Productivity",
      pricing: "Freemium",
      description: "Simple yet powerful task management and project collaboration tool for small teams",
      price: 15,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Task management", "Team collaboration", "Time tracking", "Progress reports"],
      benefits: ["Increased productivity", "Better team coordination", "Project visibility", "Easy to use"],
      targetAudience: ["Small teams", "Startups", "Freelancers", "Small businesses"],
      tags: ["Task Management", "Productivity", "Collaboration", "Project Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 16,
      name: "AI CodeGen Pro",
      category: "Development",
      pricing: "Freemium",
      description: "AI-powered code generation and development assistance for developers and teams",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 8 developers",
      features: ["AI code generation", "Code review", "Bug detection", "Documentation auto-generation"],
      benefits: ["Faster development", "Code quality improvement", "Reduced bugs", "Time savings"],
      targetAudience: ["Software developers", "Dev teams", "Startups", "Tech companies"],
      tags: ["AI Development", "Code Generation", "Code Review", "Automation", "Productivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "Quantum Analytics",
      category: "Analytics",
      pricing: "Freemium",
      description: "Advanced predictive analytics and business intelligence using quantum computing principles",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Predictive modeling", "Real-time analytics", "AI insights", "Custom dashboards"],
      benefits: ["Future-proof decisions", "Competitive advantage", "Data-driven insights", "Scalable analytics"],
      targetAudience: ["Data scientists", "Business analysts", "Executives", "Consulting firms"],
      tags: ["Quantum Analytics", "Predictive Modeling", "Business Intelligence", "AI", "Real-time"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "Blockchain Business Suite",
      category: "Blockchain",
      pricing: "Freemium",
      description: "Complete blockchain solution for business operations and smart contract management",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Smart contracts", "Token management", "DeFi integration", "Blockchain analytics"],
      benefits: ["Transparency", "Security", "Cost reduction", "Innovation leadership"],
      targetAudience: ["Fintech companies", "Supply chain", "Real estate", "Healthcare"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Cryptocurrency", "Business Solutions"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "IoT Enterprise Hub",
      category: "IoT",
      pricing: "Freemium",
      description: "Comprehensive IoT platform for enterprise device management and data collection",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules"],
      benefits: ["Operational efficiency", "Cost reduction", "Predictive maintenance", "Data insights"],
      targetAudience: ["Manufacturing", "Healthcare", "Smart cities", "Agriculture"],
      tags: ["IoT", "Device Management", "Real-time Monitoring", "Automation", "Enterprise"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "AR/VR Studio Pro",
      category: "Immersive Tech",
      pricing: "Freemium",
      description: "Professional AR/VR development platform for immersive experiences and training",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 15 developers",
      features: ["3D modeling", "VR development", "AR integration", "Analytics dashboard"],
      benefits: ["Immersive experiences", "Training efficiency", "Customer engagement", "Innovation"],
      targetAudience: ["Game developers", "Training companies", "Real estate", "Education"],
      tags: ["AR/VR", "3D Modeling", "Immersive Tech", "Training", "Development"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "InvoiceGenius",
      category: "Finance",
      pricing: "Freemium",
      description: "AI-powered invoice generation and financial management for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["AI invoice generation", "Expense tracking", "Financial reports", "Tax preparation"],
      benefits: ["Time savings", "Accuracy improvement", "Tax compliance", "Financial insights"],
      targetAudience: ["Small businesses", "Freelancers", "Consultants", "Service providers"],
      tags: ["Invoicing", "Finance", "AI", "Tax Preparation", "Expense Tracking"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "SocialSync Pro",
      category: "Marketing",
      pricing: "Freemium",
      description: "Comprehensive social media management and analytics platform for businesses",
      price: 30,
      pricingModel: "monthly",
      userLimit: "Up to 5 users",
      features: ["Multi-platform posting", "Content scheduling", "Analytics dashboard", "Engagement tracking"],
      benefits: ["Time efficiency", "Better engagement", "Data insights", "Brand consistency"],
      targetAudience: ["Marketing teams", "Small businesses", "Agencies", "Content creators"],
      tags: ["Social Media", "Marketing", "Analytics", "Content Management", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "CustomerFlow CRM",
      category: "CRM",
      pricing: "Freemium",
      description: "Lightweight customer relationship management system for growing businesses",
      price: 20,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Contact management", "Sales pipeline", "Email integration", "Reporting tools"],
      benefits: ["Better customer relationships", "Sales improvement", "Data organization", "Team collaboration"],
      targetAudience: ["Sales teams", "Small businesses", "Startups", "Consultants"],
      tags: ["CRM", "Sales", "Customer Management", "Pipeline", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "DataViz Studio",
      category: "Analytics",
      pricing: "Freemium",
      description: "Easy-to-use data visualization and analytics platform for business insights",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Interactive dashboards", "Data connectors", "Custom charts", "Real-time updates"],
      benefits: ["Data insights", "Better decisions", "Visual communication", "Time savings"],
      targetAudience: ["Business analysts", "Marketing teams", "Executives", "Data teams"],
      tags: ["Analytics", "Data Visualization", "Dashboards", "Business Intelligence", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "ScheduleMaster",
      category: "Scheduling",
      pricing: "Freemium",
      description: "Intelligent scheduling and appointment booking system for service businesses",
      price: 18,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Online booking", "Calendar integration", "Automated reminders", "Payment processing"],
      benefits: ["Reduced no-shows", "24/7 booking", "Payment collection", "Time savings"],
      targetAudience: ["Service businesses", "Consultants", "Healthcare", "Beauty salons"],
      tags: ["Scheduling", "Appointments", "Booking", "Calendar", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "ContentCraft AI",
      category: "Content",
      pricing: "Freemium",
      description: "AI-powered content creation and optimization tool for marketers and creators",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 6 users",
      features: ["AI content generation", "SEO optimization", "Content planning", "Performance analytics"],
      benefits: ["Content creation speed", "SEO improvement", "Engagement increase", "Time efficiency"],
      targetAudience: ["Content marketers", "Bloggers", "Agencies", "Small businesses"],
      tags: ["Content Creation", "AI", "SEO", "Marketing", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "SecureVault",
      category: "Security",
      pricing: "Freemium",
      description: "Enterprise-grade security and compliance management for small businesses",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Password management", "Access control", "Compliance monitoring", "Security audits"],
      benefits: ["Enhanced security", "Compliance", "Risk reduction", "Peace of mind"],
      targetAudience: ["Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Security", "Compliance", "Password Management", "Access Control", "Risk Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "MediaHub Pro",
      category: "Media",
      pricing: "Freemium",
      description: "Digital asset management and media organization platform for creative teams",
      price: 28,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Asset organization", "Version control", "Collaboration tools", "Search & filtering"],
      benefits: ["Better organization", "Team collaboration", "Time savings", "Asset protection"],
      targetAudience: ["Design teams", "Marketing agencies", "Photographers", "Content creators"],
      tags: ["Media Management", "Digital Assets", "Collaboration", "Organization", "Creative Tools"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "LearnFlow LMS",
      category: "Education",
      pricing: "Freemium",
      description: "Learning management system for corporate training and online education",
      price: 32,
      pricingModel: "monthly",
      userLimit: "Up to 100 learners",
      features: ["Course creation", "Progress tracking", "Assessment tools", "Mobile learning"],
      benefits: ["Training efficiency", "Progress monitoring", "Cost reduction", "Scalability"],
      targetAudience: ["Corporate training", "Educational institutions", "Online courses", "Skill development"],
      tags: ["LMS", "Education", "Training", "Online Learning", "Assessment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "EcoTrack Pro",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Sustainability tracking and environmental impact management for businesses",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Carbon footprint tracking", "Sustainability reporting", "Goal setting", "Progress monitoring"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "Sustainability-focused companies"],
      tags: ["Sustainability", "Environmental Impact", "Carbon Tracking", "Reporting", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "LegalAssist AI",
      category: "Legal",
      pricing: "Freemium",
      description: "AI-powered legal document generation and contract management for small businesses",
      price: 50,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Document templates", "AI generation", "Contract management", "Legal compliance"],
      benefits: ["Cost reduction", "Legal protection", "Time savings", "Compliance"],
      targetAudience: ["Small businesses", "Startups", "Freelancers", "Legal professionals"],
      tags: ["Legal Tech", "AI", "Document Generation", "Contract Management", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 13,
      name: "HealthTrack Plus",
      category: "Healthcare",
      pricing: "Freemium",
      description: "Health monitoring and wellness tracking platform for individuals and small clinics",
      price: 22,
      pricingModel: "monthly",
      userLimit: "Up to 50 patients",
      features: ["Health monitoring", "Wellness tracking", "Patient portal", "Health reports"],
      benefits: ["Better health outcomes", "Patient engagement", "Data insights", "Preventive care"],
      targetAudience: ["Small clinics", "Wellness centers", "Personal trainers", "Individuals"],
      tags: ["Healthcare", "Wellness", "Health Monitoring", "Patient Portal", "Preventive Care"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 14,
      name: "EventMaster Pro",
      category: "Events",
      pricing: "Freemium",
      description: "Comprehensive event management and ticketing platform for event organizers",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 1000 attendees",
      features: ["Event planning", "Ticket sales", "Attendee management", "Analytics dashboard"],
      benefits: ["Event success", "Revenue increase", "Attendee satisfaction", "Data insights"],
      targetAudience: ["Event organizers", "Conferences", "Workshops", "Entertainment"],
      tags: ["Event Management", "Ticketing", "Planning", "Attendee Management", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 15,
      name: "InventorySmart",
      category: "Inventory",
      pricing: "Freemium",
      description: "Intelligent inventory management and supply chain optimization for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Inventory tracking", "Demand forecasting", "Reorder alerts", "Analytics reports"],
      benefits: ["Stock optimization", "Cost reduction", "Better planning", "Customer satisfaction"],
      targetAudience: ["Retail stores", "E-commerce", "Manufacturing", "Distribution"],
      tags: ["Inventory Management", "Supply Chain", "Forecasting", "Analytics", "Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
      name: "Cybersecurity Shield",
      category: "Security",
      pricing: "Freemium",
      description: "Advanced cybersecurity platform with AI-powered threat detection and response",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Threat detection", "AI monitoring", "Incident response", "Compliance reporting"],
      benefits: ["Enhanced security", "Real-time protection", "Compliance", "Peace of mind"],
      targetAudience: ["Financial services", "Healthcare", "Government", "Enterprise"],
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Compliance", "Enterprise"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
      name: "GreenTech Monitor",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Environmental impact tracking and sustainability reporting for eco-conscious businesses",
      price: 42,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["Carbon tracking", "ESG reporting", "Sustainability goals", "Green certifications"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "ESG-focused companies"],
      tags: ["Sustainability", "ESG", "Carbon Tracking", "Green Tech", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
      name: "VoiceAI Assistant",
      category: "AI",
      pricing: "Freemium",
      description: "Voice-powered AI assistant for business automation and customer interaction",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Voice commands", "AI automation", "Multi-language", "Integration APIs"],
      benefits: ["Hands-free operation", "Increased efficiency", "Better accessibility", "Modern interface"],
      targetAudience: ["Customer service", "Sales teams", "Administrative staff", "Accessibility needs"],
      tags: ["Voice AI", "Automation", "Accessibility", "Customer Service", "AI Assistant"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
      name: "Quantum Finance Pro",
      category: "Finance",
      pricing: "Freemium",
      description: "Quantum computing-powered financial modeling and risk assessment platform",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Quantum modeling", "Risk assessment", "Portfolio optimization", "Real-time analysis"],
      benefits: ["Superior accuracy", "Competitive advantage", "Risk reduction", "Future-proof technology"],
      targetAudience: ["Investment firms", "Banks", "Hedge funds", "Financial advisors"],
      tags: ["Quantum Finance", "Risk Assessment", "Portfolio Management", "Financial Modeling", "AI"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 25,
      name: "Edge Computing Hub",
      category: "Infrastructure",
      pricing: "Freemium",
      description: "Edge computing platform for distributed applications and real-time processing",
      price: 68,
      pricingModel: "monthly",
      userLimit: "Up to 100 nodes",
      features: ["Edge deployment", "Real-time processing", "Load balancing", "Monitoring tools"],
      benefits: ["Reduced latency", "Better performance", "Cost efficiency", "Scalability"],
      targetAudience: ["IoT applications", "Gaming", "Real-time systems", "Distributed computing"],
      tags: ["Edge Computing", "Real-time Processing", "IoT", "Performance", "Infrastructure"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'Blockchain', 'IoT', 'Immersive Tech', 'AI', 'Infrastructure'];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price}/month`;
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Productivity': return <Target className="w-6 h-6" />;
      case 'Finance': return <CreditCardIcon className="w-6 h-6" />;
      case 'Marketing': return <TrendingUp className="w-6 h-6" />;
      case 'CRM': return <UsersIcon className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Scheduling': return <Calendar className="w-6 h-6" />;
      case 'Content': return <FileText className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Media': return <Video className="w-6 h-6" />;
      case 'Education': return <BookOpen className="w-6 h-6" />;
      case 'Development': return <Cpu className="w-6 h-6" />;
      case 'Blockchain': return <DatabaseIcon className="w-6 h-6" />;
      case 'IoT': return <Network className="w-6 h-6" />;
      case 'Immersive Tech': return <Eye className="w-6 h-6" />;
      case 'AI': return <Brain className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Sustainability': return <Leaf className="w-6 h-6" />;
      case 'Legal': return <ShieldIcon className="w-6 h-6" />;
      case 'Healthcare': return <Heart className="w-6 h-6" />;
      case 'Events': return <Calendar className="w-6 h-6" />;
      case 'Inventory': return <ShoppingCart className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-zion-cyan';
      case 'Subscription': return 'text-zion-purple';
      case 'One-time': return 'text-zion-purple-light';
      default: return 'text-zion-slate-light';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-black to-zion-blue-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-cyan/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)] animate-float"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.1),transparent_70%)] animate-float delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Innovation at Scale
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6 animate-neon-pulse">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Revolutionary software solutions designed specifically for small businesses, startups, and entrepreneurs. 
            <span className="text-zion-cyan font-semibold"> Affordable, powerful, and future-ready.</span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-zion-slate-light">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span>25+ Services Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse delay-500"></div>
              <span>Starting from $15/month</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse delay-1000"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
            <input
              type="text"
              placeholder="Search for innovative micro SAAS solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/30 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg text-xs text-zion-cyan">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-black/30 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-black text-white">
                  {category === 'all' ? '🌐 All Categories' : `📁 ${category}`}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-6 py-3 bg-black/30 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 cursor-pointer"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-black text-white">
                  {pricing === 'all' ? '💰 All Pricing Models' : `💳 ${pricing}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-black/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:bg-black/50 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-zion-cyan">
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 border border-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full text-zion-purple bg-zion-purple/20 border border-zion-purple/30">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-zion-slate-light mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
                <div className="text-3xl font-bold text-white mb-1">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-zion-cyan">{service.userLimit}</div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-cyan/20 text-zion-cyan rounded-lg border border-zion-cyan/30">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-zion-purple" />
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-purple/20 text-zion-purple rounded-lg border border-zion-purple/30">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-zion-cyan/20 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">Ready to transform your business?</span>
                  <a 
                    href={service.contactInfo.website}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 group-hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10 backdrop-blur-sm border border-zion-cyan/30 rounded-3xl p-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)] animate-pulse"></div>
            
            <div className="relative">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-4">
                  <Rocket className="w-4 h-4" />
                  Ready to Transform Your Business?
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6">
                Let's Build the Future Together
              </h2>
              
              <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
                Our cutting-edge micro SAAS solutions are designed to scale with your business needs. 
                <span className="text-zion-cyan font-semibold"> Start your digital transformation journey today.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <p className="text-zion-slate-light">{microSaasServices[0].contactInfo.phone}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-purple/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-zion-purple" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <p className="text-zion-slate-light">{microSaasServices[0].contactInfo.email}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-zion-cyan/25"
                >
                  <Mail className="w-5 h-5" />
                  Get Started Today
                </a>
                <a 
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;