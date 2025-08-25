import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wifi, Smartphone, Server, Code, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Satellite, Rocket, Atom, Dna, Brain as BrainIcon, Microchip, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Globe as GlobeIcon, Network as NetworkIcon, Cpu as CpuIcon, Server as ServerIcon, Code as CodeIcon, Lock as LockIcon, Key as KeyIcon, Bug as BugIcon, CheckCircle as CheckCircleIcon, AlertTriangle as AlertTriangleIcon, Info as InfoIcon, ArrowRight as ArrowRightIcon, Glasses } from 'lucide-react';

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
        website: "https://ziontechgroup.com/inventorysmart"
      }
    },
    {
      id: 16,
      name: "CodeSync Pro",
      category: "Development",
      pricing: "Freemium",
      description: "AI-powered code review and collaboration platform for development teams",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 25 developers",
      features: ["AI code review", "Git integration", "Code quality metrics", "Team collaboration", "Security scanning"],
      benefits: ["Faster code reviews", "Better code quality", "Security improvement", "Team productivity"],
      targetAudience: ["Development teams", "Startups", "Tech companies", "Freelance developers"],
      tags: ["Code Review", "AI", "Development", "Collaboration", "Security"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/codesync-pro"
      }
    },
    {
      id: 17,
      name: "DataGuardian",
      category: "Data Protection",
      pricing: "Subscription",
      description: "Comprehensive data backup and disaster recovery solution for businesses",
      price: 60,
      pricingModel: "monthly",
      userLimit: "Unlimited data",
      features: ["Automated backups", "Cloud storage", "Disaster recovery", "Compliance reporting", "24/7 monitoring"],
      benefits: ["Data security", "Business continuity", "Compliance", "Peace of mind"],
      targetAudience: ["Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Data Backup", "Disaster Recovery", "Security", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/dataguardian"
      }
    },
    {
      id: 18,
      name: "HR Suite Pro",
      category: "Human Resources",
      pricing: "Freemium",
      description: "Complete HR management system for small to medium businesses",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 100 employees",
      features: ["Employee onboarding", "Time tracking", "Payroll integration", "Performance reviews", "Benefits management"],
      benefits: ["Streamlined HR processes", "Compliance", "Employee satisfaction", "Cost reduction"],
      targetAudience: ["Small businesses", "Startups", "Consulting firms", "Service companies"],
      tags: ["HR Management", "Employee Onboarding", "Time Tracking", "Payroll", "Performance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/hr-suite-pro"
      }
    },
    {
      id: 19,
      name: "AIAnalytics Pro",
      category: "AI & Analytics",
      pricing: "Freemium",
      description: "Advanced AI-powered business intelligence and predictive analytics platform",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["AI insights", "Predictive modeling", "Custom dashboards", "Data visualization", "Real-time alerts"],
      benefits: ["Better decision making", "Predictive insights", "Competitive advantage", "Data-driven growth"],
      targetAudience: ["Business analysts", "Executives", "Marketing teams", "Data scientists"],
      tags: ["AI Analytics", "Business Intelligence", "Predictive Modeling", "Data Visualization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-analytics-pro"
      }
    },
    {
      id: 20,
      name: "ChatBot Studio",
      category: "AI & Automation",
      pricing: "Freemium",
      description: "AI-powered chatbot builder for customer service and lead generation",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 10 chatbots",
      features: ["No-code builder", "AI training", "Multi-language support", "Analytics dashboard", "Integration APIs"],
      benefits: ["24/7 customer support", "Lead generation", "Cost reduction", "Customer satisfaction"],
      targetAudience: ["E-commerce", "Service businesses", "Startups", "Marketing agencies"],
      tags: ["Chatbot", "AI", "Customer Service", "Automation", "Lead Generation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/chatbot-studio"
      }
    },
    {
      id: 21,
      name: "DevOpsFlow",
      category: "Development",
      pricing: "Subscription",
      description: "Complete CI/CD automation and DevOps pipeline management platform",
      price: 42,
      pricingModel: "monthly",
      userLimit: "Up to 30 developers",
      features: ["CI/CD pipelines", "Docker integration", "Kubernetes support", "Monitoring", "Security scanning"],
      benefits: ["Faster deployments", "Better reliability", "Security compliance", "Team efficiency"],
      targetAudience: ["Development teams", "DevOps engineers", "Tech companies", "Startups"],
      tags: ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/devopsflow"
      }
    },
    {
      id: 22,
      name: "API Gateway Pro",
      category: "Development",
      pricing: "Freemium",
      description: "Enterprise-grade API management and gateway solution for microservices",
      price: 28,
      pricingModel: "monthly",
      userLimit: "Up to 1000 API calls/month",
      features: ["API gateway", "Rate limiting", "Authentication", "Analytics", "Documentation"],
      benefits: ["Better API security", "Performance monitoring", "Developer experience", "Scalability"],
      targetAudience: ["API developers", "Tech companies", "Startups", "Enterprise teams"],
      tags: ["API Management", "Gateway", "Microservices", "Security", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/api-gateway-pro"
      }
    },
    {
      id: 23,
      name: "LegalAssist AI",
      category: "Legal Tech",
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
        website: "https://ziontechgroup.com/legalassist-ai"
      }
    },
    {
      id: 24,
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
        website: "https://ziontechgroup.com/ecotrack-pro"
      }
    },
    {
      id: 25,
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
        website: "https://ziontechgroup.com/healthtrack-plus"
      }
    },
    // NEW INNOVATIVE SERVICES ADDED
    {
      id: 16,
      name: "AI CodeGen Pro",
      category: "Development",
      pricing: "Freemium",
      description: "AI-powered code generation and development assistance for developers and teams",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 10 developers",
      features: ["AI code generation", "Code review", "Bug detection", "Documentation auto-generation"],
      benefits: ["Faster development", "Code quality", "Reduced bugs", "Team productivity"],
      targetAudience: ["Software developers", "Development teams", "Startups", "Tech companies"],
      tags: ["AI Development", "Code Generation", "Programming", "Automation", "Productivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "BlockchainFlow",
      category: "Blockchain",
      pricing: "Freemium",
      description: "Simplified blockchain integration and smart contract development platform",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 5 projects",
      features: ["Smart contract templates", "Blockchain deployment", "Wallet integration", "Transaction monitoring"],
      benefits: ["Blockchain adoption", "Cost reduction", "Security", "Innovation"],
      targetAudience: ["Fintech startups", "NFT creators", "DeFi projects", "Blockchain developers"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "Web3"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "IoT Connect Hub",
      category: "IoT",
      pricing: "Freemium",
      description: "Internet of Things device management and data analytics platform",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 100 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Alert system"],
      benefits: ["IoT insights", "Operational efficiency", "Predictive maintenance", "Cost savings"],
      targetAudience: ["Manufacturing", "Smart cities", "Agriculture", "Healthcare IoT"],
      tags: ["IoT", "Device Management", "Data Analytics", "Monitoring", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "QuantumML Studio",
      category: "AI/ML",
      pricing: "Freemium",
      description: "Quantum machine learning platform for advanced AI model training",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 3 researchers",
      features: ["Quantum algorithms", "ML model training", "Quantum simulation", "Performance optimization"],
      benefits: ["Quantum advantage", "Faster training", "Advanced AI", "Research innovation"],
      targetAudience: ["AI researchers", "Data scientists", "Universities", "Tech companies"],
      tags: ["Quantum Computing", "Machine Learning", "AI", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "Edge Computing Pro",
      category: "Infrastructure",
      pricing: "Freemium",
      description: "Edge computing platform for distributed application deployment",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 20 edge nodes",
      features: ["Edge deployment", "Load balancing", "Latency optimization", "Global distribution"],
      benefits: ["Reduced latency", "Better performance", "Cost optimization", "Global reach"],
      targetAudience: ["Gaming companies", "CDN providers", "IoT platforms", "Global apps"],
      tags: ["Edge Computing", "Infrastructure", "Performance", "Global", "Deployment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
      name: "VoiceAI Studio",
      category: "AI",
      pricing: "Freemium",
      description: "AI-powered voice recognition and natural language processing platform",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 1000 API calls/month",
      features: ["Voice recognition", "Speech synthesis", "Language translation", "Voice analytics"],
      benefits: ["Voice interfaces", "Multilingual support", "Accessibility", "User experience"],
      targetAudience: ["Call centers", "Mobile apps", "Accessibility tools", "Language learning"],
      tags: ["Voice AI", "Speech Recognition", "NLP", "Accessibility", "Multilingual"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
      name: "AR/VR Creator",
      category: "Immersive Tech",
      pricing: "Freemium",
      description: "Augmented and virtual reality content creation platform for businesses",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 5 creators",
      features: ["3D modeling", "AR/VR development", "Content publishing", "Analytics dashboard"],
      benefits: ["Immersive experiences", "Customer engagement", "Innovation", "Competitive advantage"],
      targetAudience: ["Marketing agencies", "Retail stores", "Training companies", "Entertainment"],
      tags: ["AR/VR", "3D Modeling", "Immersive Tech", "Content Creation", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
      name: "Cybersecurity AI",
      category: "Security",
      pricing: "Freemium",
      description: "AI-powered cybersecurity threat detection and response platform",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 50 endpoints",
      features: ["Threat detection", "Behavioral analysis", "Incident response", "Security automation"],
      benefits: ["Proactive security", "Reduced breaches", "Compliance", "Peace of mind"],
      targetAudience: ["Financial institutions", "Healthcare", "E-commerce", "Government agencies"],
      tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
      name: "GreenTech Analytics",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Environmental impact analytics and sustainability reporting platform",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["Carbon tracking", "ESG reporting", "Sustainability scoring", "Goal monitoring"],
      benefits: ["ESG compliance", "Investor appeal", "Cost savings", "Brand reputation"],
      targetAudience: ["Public companies", "ESG investors", "Sustainability consultants", "Government"],
      tags: ["Sustainability", "ESG", "Carbon Tracking", "Reporting", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 25,
      name: "FinTech Suite",
      category: "Finance",
      pricing: "Freemium",
      description: "Comprehensive financial technology platform for modern businesses",
      price: 80,
      pricingModel: "monthly",
      userLimit: "Up to 100 transactions/month",
      features: ["Payment processing", "Financial analytics", "Risk assessment", "Compliance tools"],
      benefits: ["Financial efficiency", "Risk management", "Regulatory compliance", "Cost reduction"],
      targetAudience: ["Fintech startups", "E-commerce", "SaaS companies", "Financial services"],
      tags: ["FinTech", "Payments", "Analytics", "Risk Management", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 26,
      name: "BioTech Lab",
      category: "Biotechnology",
      pricing: "Freemium",
      description: "Biotechnology research and data analysis platform for life sciences",
      price: 150,
      pricingModel: "monthly",
      userLimit: "Up to 10 researchers",
      features: ["DNA analysis", "Protein modeling", "Clinical trial management", "Research collaboration"],
      benefits: ["Research acceleration", "Data insights", "Collaboration", "Innovation"],
      targetAudience: ["Biotech companies", "Research institutions", "Pharmaceuticals", "Universities"],
      tags: ["Biotechnology", "DNA Analysis", "Research", "Clinical Trials", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 27,
      name: "SpaceTech Platform",
      category: "Space Technology",
      pricing: "Freemium",
      description: "Space technology and satellite data analytics platform",
      price: 200,
      pricingModel: "monthly",
      userLimit: "Up to 5 projects",
      features: ["Satellite data", "Orbital calculations", "Space weather", "Launch planning"],
      benefits: ["Space insights", "Innovation", "Research", "Competitive advantage"],
      targetAudience: ["Space companies", "Research institutions", "Government agencies", "Universities"],
      tags: ["Space Technology", "Satellites", "Data Analytics", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 28,
      name: "Quantum Security",
      category: "Security",
      pricing: "Freemium",
      description: "Quantum-resistant cryptography and security solutions for future-proof protection",
      price: 180,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Quantum encryption", "Post-quantum algorithms", "Key management", "Security auditing"],
      benefits: ["Future-proof security", "Quantum resistance", "Advanced protection", "Compliance"],
      targetAudience: ["Government agencies", "Financial institutions", "Healthcare", "Defense contractors"],
      tags: ["Quantum Security", "Cryptography", "Post-Quantum", "Advanced Security", "Future-Proof"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 29,
      name: "NeuroTech AI",
      category: "AI/Neuroscience",
      pricing: "Freemium",
      description: "AI-powered neuroscience research and brain-computer interface platform",
      price: 250,
      pricingModel: "monthly",
      userLimit: "Up to 8 researchers",
      features: ["Brain mapping", "Neural networks", "BCI development", "Research tools"],
      benefits: ["Neuroscience insights", "BCI innovation", "Research acceleration", "Medical advances"],
      targetAudience: ["Neuroscience researchers", "Medical institutions", "BCI companies", "Universities"],
      tags: ["Neuroscience", "Brain-Computer Interface", "AI", "Research", "Medical Technology"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 30,
      name: "ClimateTech Analytics",
      category: "Climate Technology",
      pricing: "Freemium",
      description: "Climate change monitoring and environmental technology platform",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 40 users",
      features: ["Climate monitoring", "Carbon tracking", "Environmental modeling", "Sustainability reporting"],
      benefits: ["Climate insights", "ESG compliance", "Risk assessment", "Innovation"],
      targetAudience: ["Climate tech companies", "Environmental agencies", "Insurance companies", "Research institutions"],
      tags: ["Climate Technology", "Environmental Monitoring", "Carbon Tracking", "Sustainability", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'Blockchain', 'IoT', 'AI/ML', 'Infrastructure', 'Immersive Tech', 'Biotechnology', 'Space Technology', 'Climate Technology'];
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
      case 'Development': return <Code className="w-6 h-6" />;
      case 'Blockchain': return <Network className="w-6 h-6" />;
      case 'IoT': return <Wifi className="w-6 h-6" />;
      case 'AI/ML': return <BrainIcon className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Immersive Tech': return <Glasses className="w-6 h-6" />;
      case 'Biotechnology': return <Dna className="w-6 h-6" />;
      case 'Space Technology': return <Satellite className="w-6 h-6" />;
      case 'Climate Technology': return <Leaf className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Subscription': return 'text-blue-400';
      case 'One-time': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent mb-4">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Affordable, focused software solutions designed specifically for small businesses, startups, and entrepreneurs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search micro SAAS services..."
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
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
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
                  <span>Start your free trial today</span>
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

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our micro SAAS solutions are designed to grow with your business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">{microSaasServices[0].contactInfo.phone}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">{microSaasServices[0].contactInfo.email}</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;