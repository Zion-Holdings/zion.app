import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wifi, Smartphone, Server, Code, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Satellite, Rocket, Atom, Dna, Brain as BrainIcon, Microchip, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Globe as GlobeIcon, Network as NetworkIcon, Cpu as CpuIcon, Server as ServerIcon, Code as CodeIcon, Lock as LockIcon, Key as KeyIcon, Bug as BugIcon, CheckCircle as CheckCircleIcon, AlertTriangle as AlertTriangleIcon, Info as InfoIcon, ArrowRight as ArrowRightIcon, Glasses, Cpu as CpuIcon2, Brain as BrainIcon2, Zap as ZapIcon4, Shield as ShieldIcon3, Database as DatabaseIcon3, Cloud as CloudIcon, Network as NetworkIcon2, Server as ServerIcon2, Code as CodeIcon2, Lock as LockIcon2, Key as KeyIcon2, Bug as BugIcon2, CheckCircle as CheckCircleIcon2, AlertTriangle as AlertTriangleIcon2, Info as InfoIcon2, ArrowRight as ArrowRightIcon2 } from 'lucide-react';

const ComprehensiveITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Enhanced Comprehensive IT Services data with more innovative offerings
  const itServices = [
    {
      id: 1,
      name: "Quantum Computing Infrastructure",
      category: "Quantum IT",
      pricing: "Enterprise",
      description: "Next-generation quantum computing infrastructure and quantum-ready systems for research and enterprise applications",
      price: 100000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Quantum hardware integration", "Quantum algorithm development", "Quantum security protocols", "Hybrid classical-quantum systems", "Quantum error correction", "Performance optimization"],
      benefits: ["Quantum advantage", "Research breakthrough", "Competitive edge", "Future-proof infrastructure", "Innovation leadership", "Scientific advancement"],
      targetAudience: ["Research institutions", "Government agencies", "Tech companies", "Financial institutions", "Pharmaceutical companies", "Universities"],
      tags: ["Quantum Computing", "Infrastructure", "Research", "Innovation", "Advanced Technology", "Scientific Computing"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-24 weeks",
      support: "24/7 quantum support"
    },
    {
      id: 2,
      name: "Autonomous IT Operations",
      category: "Autonomous Systems",
      pricing: "Enterprise",
      description: "Self-healing and self-optimizing IT infrastructure with autonomous operations and predictive maintenance",
      price: 75000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Self-healing systems", "Predictive maintenance", "Automated troubleshooting", "Intelligent scaling", "Performance optimization", "Zero-downtime operations"],
      benefits: ["Reduced downtime", "Operational efficiency", "Cost optimization", "Proactive management", "Scalability", "Reliability"],
      targetAudience: ["Large enterprises", "Cloud providers", "Data centers", "Financial institutions", "Healthcare systems", "Manufacturing"],
      tags: ["Autonomous Systems", "Self-Healing", "Predictive Maintenance", "Automation", "Zero-Downtime", "Intelligent Operations"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 autonomous support"
    },
    {
      id: 3,
      name: "Edge Computing Network",
      category: "Edge Computing",
      pricing: "Enterprise",
      description: "Distributed edge computing infrastructure for low-latency applications and IoT deployments",
      price: 60000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Edge node deployment", "Latency optimization", "IoT integration", "5G network support", "Edge AI processing", "Global distribution"],
      benefits: ["Ultra-low latency", "Bandwidth optimization", "Real-time processing", "Global reach", "Cost efficiency", "Scalability"],
      targetAudience: ["Gaming companies", "CDN providers", "IoT platforms", "Autonomous vehicle companies", "Smart city projects", "Telecommunications"],
      tags: ["Edge Computing", "IoT", "5G", "Low Latency", "Global Distribution", "Real-time Processing"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "10-16 weeks",
      support: "24/7 edge support"
    },
    {
      id: 4,
      name: "Zero-Trust Security Architecture",
      category: "Security",
      pricing: "Enterprise",
      description: "Comprehensive zero-trust security framework with advanced threat detection and response capabilities",
      price: 85000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Threat hunting", "Incident response", "Compliance management"],
      benefits: ["Enhanced security", "Risk reduction", "Regulatory compliance", "Threat prevention", "Trust building", "Cost savings"],
      targetAudience: ["Financial institutions", "Healthcare organizations", "Government agencies", "E-commerce businesses", "Critical infrastructure", "Defense contractors"],
      tags: ["Zero-Trust", "Cybersecurity", "Identity Management", "Threat Detection", "Compliance", "Risk Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-14 weeks",
      support: "24/7 security support"
    },
    {
      id: 5,
      name: "AI-Powered DevOps Platform",
      category: "DevOps",
      pricing: "Enterprise",
      description: "Intelligent DevOps platform with AI-driven automation, monitoring, and optimization capabilities",
      price: 55000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AI automation", "Intelligent monitoring", "Predictive analytics", "Auto-scaling", "Performance optimization", "Continuous deployment"],
      benefits: ["Faster deployment", "Reduced errors", "Cost optimization", "Performance improvement", "Team productivity", "Quality assurance"],
      targetAudience: ["Software companies", "Tech startups", "Enterprise IT", "Cloud providers", "Digital agencies", "E-commerce platforms"],
      tags: ["AI DevOps", "Automation", "Continuous Deployment", "Monitoring", "Performance", "Productivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "6-12 weeks",
      support: "24/7 DevOps support"
    },
    {
      id: 6,
      name: "Blockchain Infrastructure",
      category: "Blockchain",
      pricing: "Enterprise",
      description: "Enterprise-grade blockchain infrastructure and smart contract development platform",
      price: 70000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Blockchain deployment", "Smart contract development", "Wallet integration", "Transaction monitoring", "Security auditing", "Scalability solutions"],
      benefits: ["Transparency", "Security", "Cost reduction", "Innovation", "Trust building", "Efficiency"],
      targetAudience: ["Fintech companies", "Supply chain businesses", "Healthcare organizations", "Government agencies", "NFT platforms", "DeFi projects"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "Web3", "Cryptocurrency"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "10-18 weeks",
      support: "24/7 blockchain support"
    },
    {
      id: 7,
      name: "IoT Platform & Analytics",
      category: "IoT",
      pricing: "Enterprise",
      description: "Comprehensive IoT platform with device management, data analytics, and intelligent automation",
      price: 65000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Device management", "Data collection", "Real-time analytics", "Predictive maintenance", "Automation workflows", "Security protocols"],
      benefits: ["Operational efficiency", "Data insights", "Cost reduction", "Predictive capabilities", "Automation", "Competitive advantage"],
      targetAudience: ["Manufacturing companies", "Smart city projects", "Agriculture businesses", "Healthcare providers", "Retail chains", "Energy companies"],
      tags: ["IoT", "Device Management", "Data Analytics", "Predictive Maintenance", "Automation", "Smart Cities"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 IoT support"
    },
    {
      id: 8,
      name: "Hybrid Cloud Architecture",
      category: "Cloud Services",
      pricing: "Enterprise",
      description: "Advanced hybrid cloud solutions with seamless integration and intelligent workload management",
      price: 80000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Multi-cloud integration", "Workload optimization", "Cost management", "Security compliance", "Disaster recovery", "Performance monitoring"],
      benefits: ["Flexibility", "Cost optimization", "Security enhancement", "Scalability", "Compliance", "Performance"],
      targetAudience: ["Large enterprises", "Financial institutions", "Healthcare organizations", "Government agencies", "E-commerce platforms", "Media companies"],
      tags: ["Hybrid Cloud", "Multi-Cloud", "Workload Management", "Cost Optimization", "Security", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-22 weeks",
      support: "24/7 cloud support"
    },
    {
      id: 9,
      name: "Data Fabric & Analytics",
      category: "Data & Analytics",
      pricing: "Enterprise",
      description: "Unified data fabric with advanced analytics, AI integration, and real-time insights",
      price: 90000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data integration", "Real-time analytics", "AI/ML integration", "Data governance", "Self-service analytics", "Performance optimization"],
      benefits: ["Data insights", "Operational efficiency", "Better decisions", "Cost reduction", "Innovation", "Competitive advantage"],
      targetAudience: ["Data-driven companies", "Financial institutions", "Healthcare organizations", "Retail chains", "Manufacturing companies", "Research institutions"],
      tags: ["Data Fabric", "Analytics", "AI/ML", "Data Governance", "Real-time", "Insights"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-24 weeks",
      support: "24/7 data support"
    },
    {
      id: 10,
      name: "Digital Twin Platform",
      category: "Digital Twins",
      pricing: "Enterprise",
      description: "Advanced digital twin technology for physical asset monitoring and predictive maintenance",
      price: 75000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["3D modeling", "Real-time monitoring", "Predictive analytics", "Simulation capabilities", "IoT integration", "Performance optimization"],
      benefits: ["Predictive maintenance", "Cost reduction", "Operational efficiency", "Risk mitigation", "Innovation", "Competitive advantage"],
      targetAudience: ["Manufacturing companies", "Infrastructure projects", "Smart cities", "Healthcare facilities", "Energy companies", "Transportation"],
      tags: ["Digital Twins", "3D Modeling", "Predictive Analytics", "IoT", "Simulation", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 digital twin support"
    },
    {
      id: 11,
      name: "AR/VR Enterprise Platform",
      category: "Immersive Tech",
      pricing: "Enterprise",
      description: "Enterprise-grade augmented and virtual reality platform for training, collaboration, and visualization",
      price: 60000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["3D content creation", "Multi-user collaboration", "Analytics dashboard", "Integration APIs", "Content management", "Performance optimization"],
      benefits: ["Enhanced training", "Improved collaboration", "Cost reduction", "Innovation", "Competitive advantage", "User engagement"],
      targetAudience: ["Training companies", "Manufacturing", "Healthcare", "Education", "Retail", "Entertainment"],
      tags: ["AR/VR", "3D Content", "Collaboration", "Training", "Visualization", "Immersive Tech"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "10-16 weeks",
      support: "24/7 AR/VR support"
    },
    {
      id: 12,
      name: "5G Network Infrastructure",
      category: "5G & Networking",
      pricing: "Enterprise",
      description: "Next-generation 5G network infrastructure with edge computing and IoT integration capabilities",
      price: 120000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["5G deployment", "Edge computing", "IoT integration", "Network slicing", "Security protocols", "Performance monitoring"],
      benefits: ["Ultra-fast connectivity", "Low latency", "Massive IoT support", "Network flexibility", "Future-proof infrastructure", "Innovation"],
      targetAudience: ["Telecommunications", "Smart cities", "Manufacturing", "Healthcare", "Transportation", "Entertainment"],
      tags: ["5G", "Edge Computing", "IoT", "Network Slicing", "Connectivity", "Infrastructure"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "20-32 weeks",
      support: "24/7 5G support"
    },
    {
      id: 13,
      name: "Green IT Solutions",
      category: "Sustainability",
      pricing: "Enterprise",
      description: "Eco-friendly IT infrastructure with energy optimization and carbon footprint reduction",
      price: 55000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Energy optimization", "Carbon tracking", "Sustainable hardware", "Green data centers", "E-waste management", "Performance monitoring"],
      benefits: ["Cost savings", "Environmental impact", "Regulatory compliance", "Brand reputation", "Innovation", "Sustainability"],
      targetAudience: ["Environmentally conscious companies", "Government agencies", "Educational institutions", "Healthcare organizations", "Manufacturing", "Retail"],
      tags: ["Green IT", "Sustainability", "Energy Optimization", "Carbon Tracking", "Eco-friendly", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-16 weeks",
      support: "24/7 green IT support"
    },
    {
      id: 14,
      name: "Quantum-Safe Cryptography",
      category: "Security",
      pricing: "Enterprise",
      description: "Post-quantum cryptography solutions for future-proof security against quantum computing threats",
      price: 95000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Post-quantum algorithms", "Key management", "Security auditing", "Compliance tools", "Performance optimization", "Migration support"],
      benefits: ["Future-proof security", "Quantum resistance", "Regulatory compliance", "Risk mitigation", "Innovation", "Competitive advantage"],
      targetAudience: ["Financial institutions", "Government agencies", "Healthcare organizations", "Defense contractors", "Critical infrastructure", "Tech companies"],
      tags: ["Quantum-Safe", "Cryptography", "Post-Quantum", "Security", "Compliance", "Future-Proof"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 quantum security support"
    },
    {
      id: 15,
      name: "Autonomous Data Centers",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Self-managing data center infrastructure with AI-driven optimization and autonomous operations",
      price: 150000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AI management", "Autonomous operations", "Predictive maintenance", "Energy optimization", "Security automation", "Performance monitoring"],
      benefits: ["Operational efficiency", "Cost reduction", "Reliability", "Scalability", "Innovation", "Competitive advantage"],
      targetAudience: ["Cloud providers", "Large enterprises", "Data center operators", "Financial institutions", "Healthcare systems", "Government agencies"],
      tags: ["Autonomous Data Centers", "AI Management", "Predictive Maintenance", "Energy Optimization", "Automation", "Infrastructure"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "24-36 weeks",
      support: "24/7 autonomous data center support"
    }
  ];

  const categories = ['all', 'Quantum IT', 'Autonomous Systems', 'Edge Computing', 'Security', 'DevOps', 'Blockchain', 'IoT', 'Cloud Services', 'Data & Analytics', 'Digital Twins', 'Immersive Tech', '5G & Networking', 'Sustainability', 'Infrastructure'];
  const pricingModels = ['all', 'Enterprise', 'Project-based', 'Subscription'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Header Section */}
      <div className="bg-zion-blue-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            Comprehensive IT Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Enterprise-grade IT solutions designed to transform your business infrastructure, 
            enhance security, and drive digital transformation
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                <option value="all">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                <option value="all">All Pricing</option>
                {pricingModels.slice(1).map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                  {service.category}
                </span>
                <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full">
                  {service.pricing}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-zion-cyan">{service.name}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-zion-cyan" />
                  <span className="text-2xl font-bold">${service.price.toLocaleString()}</span>
                  <span className="text-zion-slate-light">/ {service.pricingModel}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Clock className="w-4 h-4" />
                  <span>{service.deliveryTime}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-zion-cyan">Key Features:</h4>
                <ul className="space-y-1 text-sm text-zion-slate-light">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-zion-cyan">Benefits:</h4>
                <ul className="space-y-1 text-sm text-zion-slate-light">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-zion-cyan" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <Users className="w-4 h-4" />
                  <span>{service.userLimit}</span>
                </div>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                  className="px-4 py-2 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors duration-200"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-zion-blue-darker py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact our expert team to discuss your IT needs and get a customized solution
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-lg">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-lg">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-lg">Middletown, DE</span>
            </div>
          </div>
          
          <a
            href="https://ziontechgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors duration-200"
          >
            Visit Our Website
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServices;