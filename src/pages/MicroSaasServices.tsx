import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Atom, CircuitBoard, Satellite, Eye as EyeIcon, Shield as ShieldIcon2, Globe as GlobeIcon, Zap as ZapIcon3, Stethoscope } from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Enhanced service categories with icons
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: 0 },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 0 },
    { id: 'Blockchain & DeFi', name: 'Blockchain & DeFi', icon: <CircuitBoard className="w-5 h-5" />, count: 0 },
    { id: 'IoT & Smart Cities', name: 'IoT & Smart Cities', icon: <Building className="w-5 h-5" />, count: 0 },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 0 },
    { id: 'Edge Computing', name: 'Edge Computing', icon: <Zap className="w-5 h-5" />, count: 0 },
    { id: 'Digital Twin', name: 'Digital Twin', icon: <Eye className="w-5 h-5" />, count: 0 },
    { id: 'AR/VR & Immersive', name: 'AR/VR & Immersive', icon: <EyeIcon className="w-5 h-5" />, count: 0 },
    { id: 'Space Technology', name: 'Space Technology', icon: <Satellite className="w-5 h-5" />, count: 0 },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 0 },
    { id: 'Productivity', name: 'Productivity', icon: <Target className="w-5 h-5" />, count: 0 },
    { id: 'Finance', name: 'Finance', icon: <CreditCard className="w-5 h-5" />, count: 0 },
    { id: 'Marketing', name: 'Marketing', icon: <TrendingUp className="w-5 h-5" />, count: 0 },
    { id: 'CRM', name: 'CRM', icon: <Users className="w-5 h-5" />, count: 0 },
    { id: 'Analytics', name: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, count: 0 },
    { id: 'Scheduling', name: 'Scheduling', icon: <Calendar className="w-5 h-5" />, count: 0 },
    { id: 'Content', name: 'Content', icon: <FileText className="w-5 h-5" />, count: 0 },
    { id: 'Security', name: 'Security', icon: <ShieldIcon className="w-5 h-5" />, count: 0 },
    { id: 'Media', name: 'Media', icon: <Video className="w-5 h-5" />, count: 0 },
    { id: 'Education', name: 'Education', icon: <BookOpen className="w-5 h-5" />, count: 0 },
    { id: 'Sustainability', name: 'Sustainability', icon: <Leaf className="w-5 h-5" />, count: 0 },
    { id: 'Legal', name: 'Legal', icon: <ShieldIcon2 className="w-5 h-5" />, count: 0 },
    { id: 'Healthcare', name: 'Healthcare', icon: <Stethoscope className="w-5 h-5" />, count: 0 },
    { id: 'Events', name: 'Events', icon: <Calendar className="w-5 h-5" />, count: 0 },
    { id: 'Inventory', name: 'Inventory', icon: <Truck className="w-5 h-5" />, count: 0 }
  ];

  // Micro SAAS Services data with enhanced innovative services
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
      id: 16,
      name: "AI Business Intelligence Platform",
      category: "AI & Machine Learning",
      pricing: "Enterprise",
      description: "Advanced AI-powered BI platform that transforms raw data into actionable insights using machine learning and predictive analytics.",
      price: 299,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Real-time data visualization", "Predictive analytics", "Natural language queries", "Automated reporting"],
      benefits: ["Increase decision-making speed by 40%", "Reduce manual reporting time by 70%", "Improve data accuracy by 95%"],
      targetAudience: ["Business analysts", "Data scientists", "Executives", "Operations managers"],
      tags: ["AI", "Business Intelligence", "Data Analytics", "Machine Learning", "Predictive Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "Blockchain Supply Chain Platform",
      category: "Blockchain & DeFi",
      pricing: "Enterprise",
      description: "Transparent and secure supply chain management platform using blockchain technology for traceability, compliance, and efficiency optimization.",
      price: 599,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["End-to-end supply chain tracking", "Smart contract automation", "Real-time transparency", "Compliance monitoring"],
      benefits: ["Reduce supply chain costs by 25%", "Improve traceability to 100%", "Reduce compliance risks by 80%"],
      targetAudience: ["Manufacturing companies", "Retail chains", "Food producers", "Pharmaceutical companies"],
      tags: ["Blockchain", "Supply Chain", "Transparency", "Compliance", "Traceability"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "IoT Smart Building Platform",
      category: "IoT & Smart Cities",
      pricing: "Enterprise",
      description: "Comprehensive IoT platform for smart building management, energy optimization, and facility automation using advanced sensors and AI analytics.",
      price: 799,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Real-time building monitoring", "Energy consumption optimization", "Predictive maintenance alerts", "Occupancy analytics"],
      benefits: ["Reduce energy costs by 30-40%", "Improve building efficiency by 25%", "Reduce maintenance costs by 35%"],
      targetAudience: ["Property managers", "Facility managers", "Building owners", "Real estate companies"],
      tags: ["IoT", "Smart Buildings", "Energy Management", "Automation", "Predictive Maintenance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "Quantum-Safe Cybersecurity Platform",
      category: "Cybersecurity",
      pricing: "Enterprise",
      description: "Future-proof cybersecurity platform using post-quantum cryptography to protect against quantum computing threats and advanced cyber attacks.",
      price: 1299,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Post-quantum cryptography algorithms", "Advanced threat detection", "Real-time security monitoring", "Automated incident response"],
      benefits: ["Protect against quantum computing threats", "Reduce security incidents by 90%", "Meet future compliance requirements"],
      targetAudience: ["Banks and financial institutions", "Healthcare providers", "Government agencies", "Defense contractors"],
      tags: ["Cybersecurity", "Quantum-Safe", "Post-Quantum Cryptography", "Threat Detection", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "Edge AI Computing Platform",
      category: "Edge Computing",
      pricing: "Enterprise",
      description: "Distributed edge computing platform that brings computation and data storage closer to data sources for faster processing and reduced latency.",
      price: 899,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Distributed edge nodes", "Real-time data processing", "Low-latency applications", "Edge AI capabilities"],
      benefits: ["Reduce latency by 80-90%", "Lower bandwidth costs by 60%", "Improve application performance", "Enable offline operation"],
      targetAudience: ["IoT companies", "Manufacturing companies", "Smart city initiatives", "Transportation companies"],
      tags: ["Edge Computing", "IoT", "Real-time Processing", "Low Latency", "Distributed Systems"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
      name: "Digital Twin Platform",
      category: "Digital Twin",
      pricing: "Enterprise",
      description: "Advanced digital twin platform that creates virtual replicas of physical assets, processes, and systems for real-time monitoring and predictive analytics.",
      price: 699,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["3D asset modeling", "Real-time data synchronization", "Predictive maintenance", "Performance optimization"],
      benefits: ["Reduce maintenance costs by 30%", "Improve asset utilization by 25%", "Prevent unplanned downtime", "Optimize operational efficiency"],
      targetAudience: ["Manufacturing companies", "Infrastructure operators", "Building managers", "Utility companies"],
      tags: ["Digital Twin", "IoT", "Predictive Maintenance", "3D Modeling", "Real-time Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
      name: "AR/VR Training Platform",
      category: "AR/VR & Immersive",
      pricing: "Enterprise",
      description: "Immersive training platform using augmented and virtual reality for employee training, skill development, and simulation-based learning.",
      price: 449,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["VR training simulations", "AR overlay training", "Progress tracking and analytics", "Custom content creation"],
      benefits: ["Improve training retention by 75%", "Reduce training costs by 40%", "Accelerate skill development by 3x", "Provide safe training environments"],
      targetAudience: ["Corporate training departments", "Manufacturing companies", "Healthcare organizations", "Educational institutions"],
      tags: ["AR/VR", "Training", "Simulation", "Learning", "Immersive Technology"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
      name: "Space Technology Platform",
      category: "Space Technology",
      pricing: "Enterprise",
      description: "Comprehensive platform for satellite data analysis, space mission planning, and Earth observation applications using advanced AI and data science.",
      price: 1499,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Satellite data processing", "Earth observation analytics", "Mission planning tools", "Real-time data feeds"],
      benefits: ["Access to space-based data", "Improve decision-making with satellite insights", "Reduce costs of ground-based monitoring", "Enable global coverage"],
      targetAudience: ["Environmental organizations", "Agricultural companies", "Urban planning agencies", "Government agencies"],
      tags: ["Space Technology", "Satellite Analytics", "Earth Observation", "AI", "Environmental Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
      name: "Quantum Machine Learning Platform",
      category: "Quantum Computing",
      pricing: "Enterprise",
      description: "Cutting-edge platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI model training.",
      price: 2499,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Quantum algorithm library", "Hybrid quantum-classical workflows", "Quantum neural networks", "Optimization solvers"],
      benefits: ["Solve previously intractable problems", "Exponential speedup for specific algorithms", "Future-proof technology investment", "Competitive advantage in research"],
      targetAudience: ["Research institutions", "Pharmaceutical companies", "Financial services", "Technology companies"],
      tags: ["Quantum Computing", "Machine Learning", "Optimization", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  // Calculate category counts
  serviceCategories.forEach(category => {
    if (category.id === 'all') {
      category.count = microSaasServices.length;
    } else {
      category.count = microSaasServices.filter(service => service.category === category.id).length;
    }
  });

  const categories = serviceCategories.map(cat => cat.id);
  const pricingModels = ['all', 'Freemium', 'Enterprise', 'Subscription', 'One-time'];

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
    const categoryObj = serviceCategories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.icon : <ZapIcon2 className="w-6 h-6" />;
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Enterprise': return 'text-purple-400';
      case 'Subscription': return 'text-blue-400';
      case 'One-time': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent mb-4">
            Innovative Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Cutting-edge software solutions powered by AI, Blockchain, IoT, and emerging technologies. 
            Transform your business with our comprehensive suite of intelligent, scalable, and future-proof services.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-green-400">
              <Brain className="w-5 h-5" />
              <span>AI & Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <CircuitBoard className="w-5 h-5" />
              <span>Blockchain & DeFi</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Building className="w-5 h-5" />
              <span>IoT & Smart Cities</span>
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <Rocket className="w-5 h-5" />
              <span>Emerging Technologies</span>
            </div>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search innovative services, AI solutions, blockchain platforms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {serviceCategories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                  {category.name === 'All Services' ? 'All Categories' : `${category.name} (${category.count})`}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-green-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Start your transformation today</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-green-400 hover:text-green-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Our innovative micro SAAS solutions combine cutting-edge technology with practical business value. 
              From AI-powered analytics to blockchain supply chains, we're here to help you stay ahead of the curve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://ziontechgroup.com"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;