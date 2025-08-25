import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Lock, Key, Brain as BrainIcon, Palette, Code, Server, Wifi, Smartphone, Tablet, Monitor, Printer, Scanner, Microphone, Headphones, Gamepad2, Watch, Thermometer, Lightbulb, Battery, Leaf as LeafIcon, Globe as GlobeIcon, Shield as ShieldIcon2, Zap as ZapIcon3, Database as DatabaseIcon2, Cloud as CloudIcon, Server as ServerIcon, Network as NetworkIcon, Lock as LockIcon, Key as KeyIcon, Brain as BrainIcon2, Palette as PaletteIcon, Code as CodeIcon, Server as ServerIcon2, Wifi as WifiIcon, Smartphone as SmartphoneIcon, Tablet as TabletIcon, Monitor as MonitorIcon, Printer as PrinterIcon, Scanner as ScannerIcon, Microphone as MicrophoneIcon, Headphones as HeadphonesIcon, Gamepad2 as Gamepad2Icon, Watch as WatchIcon, Thermometer as ThermometerIcon, Lightbulb as LightbulbIcon, Battery as BatteryIcon, Leaf as LeafIcon2, Globe as GlobeIcon2, Glasses, ArrowRight } from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Enhanced Micro SAAS Services data with new innovative services
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
    // NEW INNOVATIVE SERVICES
    {
      id: 16,
      name: "QuantumFlow AI",
      category: "AI & ML",
      pricing: "Premium",
      description: "Next-generation AI workflow automation with quantum computing optimization",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Quantum AI algorithms", "Workflow automation", "Predictive analytics", "Real-time optimization"],
      benefits: ["Unprecedented speed", "Advanced insights", "Cost optimization", "Competitive advantage"],
      targetAudience: ["Tech companies", "Research institutions", "Financial services", "Healthcare"],
      tags: ["AI", "Quantum Computing", "Automation", "Analytics", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "BlockChain Forge",
      category: "Blockchain",
      pricing: "Premium",
      description: "Enterprise blockchain development and smart contract platform for businesses",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: ["Smart contract creation", "Blockchain deployment", "Token management", "Security auditing"],
      benefits: ["Transparency", "Security", "Automation", "Trust building"],
      targetAudience: ["Financial services", "Supply chain", "Healthcare", "Real estate"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Security", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "IoT Nexus Hub",
      category: "IoT",
      pricing: "Premium",
      description: "Comprehensive IoT device management and data analytics platform",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules"],
      benefits: ["Operational efficiency", "Predictive maintenance", "Cost reduction", "Data insights"],
      targetAudience: ["Manufacturing", "Smart cities", "Agriculture", "Healthcare"],
      tags: ["IoT", "Device Management", "Analytics", "Automation", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "CyberShield Pro",
      category: "Cybersecurity",
      pricing: "Premium",
      description: "Advanced cybersecurity and threat intelligence platform for enterprises",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 200 users",
      features: ["Threat detection", "Incident response", "Vulnerability scanning", "Compliance reporting"],
      benefits: ["Risk reduction", "Regulatory compliance", "Brand protection", "Peace of mind"],
      targetAudience: ["Enterprises", "Financial services", "Healthcare", "Government"],
      tags: ["Cybersecurity", "Threat Intelligence", "Compliance", "Risk Management", "Security"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "DataFusion Studio",
      category: "Data Science",
      pricing: "Premium",
      description: "Advanced data science and machine learning platform for data analysts",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["ML model building", "Data preprocessing", "Model deployment", "Performance monitoring"],
      benefits: ["Faster insights", "Better predictions", "Automated workflows", "Scalability"],
      targetAudience: ["Data scientists", "Analysts", "Research teams", "Business intelligence"],
      tags: ["Data Science", "Machine Learning", "Analytics", "AI", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
      name: "CloudOrchestra",
      category: "Cloud Computing",
      pricing: "Premium",
      description: "Multi-cloud orchestration and cost optimization platform",
      price: 80,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Multi-cloud management", "Cost optimization", "Auto-scaling", "Performance monitoring"],
      benefits: ["Cost savings", "Better performance", "Simplified management", "Flexibility"],
      targetAudience: ["Enterprises", "Startups", "DevOps teams", "IT managers"],
      tags: ["Cloud Computing", "Multi-cloud", "Cost Optimization", "DevOps", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
      name: "DevOps Accelerator",
      category: "DevOps",
      pricing: "Premium",
      description: "Complete DevOps automation and CI/CD pipeline management platform",
      price: 70,
      pricingModel: "monthly",
      userLimit: "Up to 100 developers",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Security scanning"],
      benefits: ["Faster deployment", "Better quality", "Reduced errors", "Team productivity"],
      targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprises"],
      tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
      name: "AR/VR Creator Studio",
      category: "AR/VR",
      pricing: "Premium",
      description: "Professional AR/VR content creation and deployment platform",
      price: 90,
      pricingModel: "monthly",
      userLimit: "Up to 20 creators",
      features: ["3D modeling", "AR/VR development", "Content distribution", "Analytics"],
      benefits: ["Immersive experiences", "Engagement increase", "Innovation", "Competitive edge"],
      targetAudience: ["Game developers", "Marketing agencies", "Educational institutions", "Enterprises"],
      tags: ["AR/VR", "3D Modeling", "Content Creation", "Immersive Tech", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
      name: "GreenTech Monitor",
      category: "Sustainability",
      pricing: "Premium",
      description: "Advanced environmental monitoring and sustainability analytics platform",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Environmental sensors", "Data analytics", "Sustainability reporting", "Goal tracking"],
      benefits: ["Environmental impact", "Regulatory compliance", "Cost savings", "Brand reputation"],
      targetAudience: ["Manufacturing", "Utilities", "Agriculture", "Government"],
      tags: ["Sustainability", "Environmental Monitoring", "Analytics", "Compliance", "Green Tech"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 25,
      name: "FinTech Suite Pro",
      category: "FinTech",
      pricing: "Premium",
      description: "Comprehensive financial technology platform for modern businesses",
      price: 110,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: ["Payment processing", "Digital banking", "Cryptocurrency", "Financial analytics"],
      benefits: ["Modern banking", "Cost reduction", "Better security", "Financial insights"],
      targetAudience: ["Banks", "FinTech startups", "E-commerce", "Financial services"],
      tags: ["FinTech", "Digital Banking", "Payments", "Cryptocurrency", "Financial Services"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 26,
      name: "SmartCity Platform",
      category: "Smart Cities",
      pricing: "Enterprise",
      description: "Comprehensive smart city infrastructure management and analytics platform",
      price: 500,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Infrastructure monitoring", "Traffic management", "Energy optimization", "Citizen services"],
      benefits: ["Efficiency improvement", "Cost reduction", "Better services", "Sustainability"],
      targetAudience: ["City governments", "Municipalities", "Urban planners", "Infrastructure companies"],
      tags: ["Smart Cities", "Infrastructure", "IoT", "Analytics", "Urban Planning"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 27,
      name: "BioTech Analytics",
      category: "Biotechnology",
      pricing: "Enterprise",
      description: "Advanced biotechnology data analysis and research platform",
      price: 300,
      pricingModel: "monthly",
      userLimit: "Up to 200 researchers",
      features: ["Genomic analysis", "Drug discovery", "Clinical trials", "Research collaboration"],
      benefits: ["Faster research", "Better insights", "Collaboration", "Innovation"],
      targetAudience: ["Pharmaceutical companies", "Research institutions", "Hospitals", "Biotech startups"],
      tags: ["Biotechnology", "Genomics", "Drug Discovery", "Research", "Healthcare"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 28,
      name: "Quantum Security",
      category: "Quantum Security",
      pricing: "Enterprise",
      description: "Post-quantum cryptography and quantum-resistant security solutions",
      price: 400,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Quantum-resistant encryption", "Key management", "Security auditing", "Compliance"],
      benefits: ["Future-proof security", "Regulatory compliance", "Risk reduction", "Innovation"],
      targetAudience: ["Government agencies", "Financial services", "Healthcare", "Defense"],
      tags: ["Quantum Security", "Cryptography", "Cybersecurity", "Innovation", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 29,
      name: "SpaceTech Analytics",
      category: "Space Technology",
      pricing: "Enterprise",
      description: "Satellite data analysis and space technology management platform",
      price: 600,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Satellite imagery", "Data analysis", "Mission planning", "Performance monitoring"],
      benefits: ["Space insights", "Mission success", "Cost optimization", "Innovation"],
      targetAudience: ["Space agencies", "Satellite companies", "Research institutions", "Defense"],
      tags: ["Space Technology", "Satellite Data", "Analytics", "Mission Planning", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 30,
      name: "NeuroTech Platform",
      category: "Neurotechnology",
      pricing: "Enterprise",
      description: "Advanced brain-computer interface and neural technology platform",
      price: 800,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Brain mapping", "Neural interfaces", "Cognitive enhancement", "Research tools"],
      benefits: ["Medical breakthroughs", "Research advancement", "Innovation", "Human potential"],
      targetAudience: ["Medical research", "Universities", "Healthcare", "Defense research"],
      tags: ["Neurotechnology", "Brain-Computer Interface", "Neuroscience", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'AI & ML', 'Blockchain', 'IoT', 'Cybersecurity', 'Data Science', 'Cloud Computing', 'DevOps', 'AR/VR', 'FinTech', 'Smart Cities', 'Biotechnology', 'Quantum Security', 'Space Technology', 'Neurotechnology'];
  const pricingModels = ['all', 'Freemium', 'Premium', 'Enterprise'];

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
      case 'AI & ML': return <Brain className="w-6 h-6" />;
      case 'Blockchain': return <Lock className="w-6 h-6" />;
      case 'IoT': return <Wifi className="w-6 h-6" />;
      case 'Cybersecurity': return <ShieldIcon className="w-6 h-6" />;
      case 'Data Science': return <DatabaseIcon className="w-6 h-6" />;
      case 'Cloud Computing': return <Cloud className="w-6 h-6" />;
      case 'DevOps': return <Server className="w-6 h-6" />;
      case 'AR/VR': return <Glasses className="w-6 h-6" />;
      case 'FinTech': return <CreditCard className="w-6 h-6" />;
      case 'Smart Cities': return <Building className="w-6 h-6" />;
      case 'Biotechnology': return <Leaf className="w-6 h-6" />;
      case 'Quantum Security': return <Lock className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'Neurotechnology': return <BrainIcon className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Premium': return 'text-blue-400';
      case 'Enterprise': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zion-blue-dark to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-zion-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-zion-cyan/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Innovative Micro SAAS Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent mb-6 animate-neon-pulse">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Affordable, focused software solutions designed specifically for small businesses, startups, and entrepreneurs. 
            <span className="text-zion-cyan font-medium"> Transform your business with cutting-edge technology.</span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{microSaasServices.length}+</div>
              <div className="text-zion-slate-light text-sm">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">15+</div>
              <div className="text-zion-slate-light text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search micro SAAS services by name, features, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="text-xs text-zion-slate-light bg-zion-cyan/10 px-2 py-1 rounded-full border border-zion-cyan/20">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 hover:border-zion-cyan/40"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-black text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-3 bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 hover:border-zion-cyan/40"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-black text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
                </option>
              ))}
            </select>

            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPricing('all');
              }}
              className="px-4 py-3 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:bg-black/60 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center border border-zion-cyan/30 group-hover:border-zion-cyan/50 transition-all duration-300">
                    <div className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan-light transition-colors mb-2">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current border border-current border-opacity-30`}>
                        {service.pricing}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full text-zion-cyan bg-zion-cyan bg-opacity-20 border border-zion-cyan border-opacity-30">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
              
              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
                <div className="text-3xl font-bold text-white mb-1">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-zion-slate-light">{service.userLimit}</div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-zion-purple" />
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-purple/20 text-zion-purple-light border border-zion-purple/30 rounded-lg font-medium">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">Ready to get started?</span>
                  <a 
                    href={service.contactInfo.website}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-black/60 via-zion-blue-dark/60 to-black/60 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Get Started Today
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Scale Your Business</span>?
              </h2>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Our micro SAAS solutions are designed to grow with your business needs. 
                <span className="text-zion-cyan font-medium"> Transform your operations with cutting-edge technology.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-cyan/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-cyan/30 group-hover:border-zion-cyan/50 transition-all duration-300">
                    <Phone className="w-8 h-8 text-zion-cyan group-hover:text-zion-cyan-light transition-colors" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <a href={`tel:${microSaasServices[0].contactInfo.phone}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {microSaasServices[0].contactInfo.phone}
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-purple/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30 group-hover:border-zion-purple/50 transition-all duration-300">
                    <Mail className="w-8 h-8 text-zion-purple group-hover:text-zion-purple-light transition-colors" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <a href={`mailto:${microSaasServices[0].contactInfo.email}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {microSaasServices[0].contactInfo.email}
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-400/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-400/30 group-hover:border-green-400/50 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${microSaasServices[0].contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Request Demo
                </a>
                
                <a 
                  href={`tel:${microSaasServices[0].contactInfo.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
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