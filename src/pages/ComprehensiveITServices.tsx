import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Rocket, Sparkles, Layers, Atom, Globe2, Shield as ShieldIcon2, Zap as ZapIcon2, Brain as BrainIcon, Cpu as CpuIcon, Cloud as CloudIcon, Database as DatabaseIcon3, Shield as ShieldIcon3, Zap as ZapIcon3 } from 'lucide-react';
import { motion } from 'framer-motion';

const ComprehensiveITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Enhanced Comprehensive IT Services data
  const itServices = [
    {
      id: 1,
      name: "Enterprise Network Infrastructure",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Complete network design, implementation, and management for large organizations with SD-WAN and zero-trust architecture",
      price: 15000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Network design & architecture", "Cisco/Meraki implementation", "SD-WAN solutions", "Network security", "24/7 monitoring", "Performance optimization", "Zero-trust implementation", "Cloud integration"],
      benefits: ["Scalable infrastructure", "Enhanced security", "Improved performance", "Reduced downtime", "Cost optimization", "Future-ready design", "Global connectivity", "Compliance ready"],
      targetAudience: ["Large enterprises", "Multi-location businesses", "Healthcare organizations", "Financial institutions", "Government agencies"],
      tags: ["Networking", "Infrastructure", "Enterprise", "Security", "SD-WAN", "Zero Trust"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-12 weeks",
      support: "24/7 enterprise support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$15,000 - $50,000"
    },
    {
      id: 2,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      pricing: "Enterprise",
      description: "End-to-end cloud migration services with cost optimization, performance tuning, and multi-cloud strategy",
      price: 25000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AWS/Azure/GCP migration", "Cost optimization", "Performance tuning", "Security implementation", "Disaster recovery", "Monitoring setup", "Multi-cloud strategy", "Serverless architecture"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance", "Disaster recovery", "Global accessibility", "Cost predictability", "Innovation acceleration"],
      targetAudience: ["Medium to large businesses", "Healthcare providers", "Financial services", "Manufacturing companies", "E-commerce platforms"],
      tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Cost Optimization", "Multi-cloud"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-16 weeks",
      support: "24/7 cloud support",
      innovationLevel: "Advanced",
      marketPrice: "$25,000 - $75,000"
    },
    {
      id: 3,
      name: "Quantum-Ready Cybersecurity",
      category: "Security",
      pricing: "Enterprise",
      description: "Next-generation cybersecurity with quantum-resistant encryption, AI threat detection, and zero-trust architecture",
      price: 18000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture", "Security assessment", "Penetration testing", "Vulnerability scanning", "Security policy development", "Employee training"],
      benefits: ["Future-proof security", "Risk mitigation", "Compliance achievement", "Customer trust", "Reduced breach risk", "Insurance benefits", "Regulatory compliance", "Quantum readiness"],
      targetAudience: ["Financial institutions", "Healthcare organizations", "Government agencies", "E-commerce businesses", "Critical infrastructure"],
      tags: ["Cybersecurity", "Quantum Computing", "AI", "Zero Trust", "Compliance", "Risk Assessment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "6-10 weeks",
      support: "24/7 security support",
      innovationLevel: "Revolutionary",
      marketPrice: "$18,000 - $60,000"
    },
    {
      id: 4,
      name: "Edge Computing Infrastructure",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Distributed edge computing infrastructure for real-time processing, IoT integration, and low-latency applications",
      price: 35000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Edge node deployment", "IoT integration", "Real-time processing", "Low-latency networking", "Edge AI deployment", "5G optimization", "Edge security", "Monitoring & management"],
      benefits: ["Ultra-low latency", "Real-time processing", "Reduced bandwidth costs", "Enhanced privacy", "Offline operation", "Scalability", "Cost optimization", "Innovation enablement"],
      targetAudience: ["Manufacturing companies", "Smart city developers", "Healthcare providers", "Autonomous vehicle companies", "IoT platforms"],
      tags: ["Edge Computing", "IoT", "5G", "Real-time Processing", "Infrastructure", "AI"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-18 weeks",
      support: "24/7 edge support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$35,000 - $100,000"
    },
    {
      id: 5,
      name: "AI-Powered DevOps Platform",
      category: "DevOps",
      pricing: "Enterprise",
      description: "Intelligent DevOps platform with AI-driven automation, predictive analytics, and self-healing infrastructure",
      price: 22000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AI-driven CI/CD", "Infrastructure as code", "Predictive monitoring", "Self-healing systems", "Automated testing", "Performance optimization", "Security automation", "Cost optimization"],
      benefits: ["Faster deployments", "Reduced errors", "Improved collaboration", "Better monitoring", "Cost savings", "Scalability", "Proactive maintenance", "Innovation acceleration"],
      targetAudience: ["Software companies", "IT departments", "Digital agencies", "E-commerce platforms", "FinTech companies"],
      tags: ["DevOps", "AI", "CI/CD", "Automation", "Monitoring", "Infrastructure as Code"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "10-14 weeks",
      support: "24/7 DevOps support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$22,000 - $65,000"
    },
    {
      id: 6,
      name: "Blockchain Infrastructure",
      category: "Blockchain",
      pricing: "Enterprise",
      description: "Enterprise-grade blockchain infrastructure for supply chain, digital identity, and decentralized applications",
      price: 28000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Private blockchain setup", "Smart contract development", "Supply chain integration", "Digital identity management", "DeFi platform", "NFT marketplace", "Cross-chain bridges", "Security auditing"],
      benefits: ["Transparency", "Immutability", "Cost reduction", "Trust enhancement", "Automation", "Innovation", "Competitive advantage", "Future-ready"],
      targetAudience: ["Manufacturing companies", "Financial services", "Healthcare organizations", "Government agencies", "E-commerce platforms"],
      tags: ["Blockchain", "Smart Contracts", "Supply Chain", "DeFi", "NFTs", "Digital Identity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-20 weeks",
      support: "24/7 blockchain support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$28,000 - $80,000"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Cloud Services', 'Security', 'DevOps', 'Blockchain'];
  const pricingOptions = ['all', 'Enterprise', 'Professional', 'Standard'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'Cutting-edge': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Advanced': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'DevOps': return <Code className="w-6 h-6" />;
      case 'Blockchain': return <Layers className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.3),transparent_50%)]"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 bg-zion-blue-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Comprehensive IT Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade IT solutions designed to transform your business infrastructure, 
              enhance security, and drive digital transformation with cutting-edge technology
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-all duration-300"
                >
                  <option value="all">All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-all duration-300"
                >
                  <option value="all">All Pricing</option>
                  {pricingOptions.slice(1).map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg text-zion-cyan">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getInnovationLevelColor(service.innovationLevel)} border`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full border border-zion-cyan/30">
                  {service.pricing}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
                {service.name}
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-zion-cyan" />
                  <span className="text-2xl font-bold">${service.price.toLocaleString()}</span>
                  <span className="text-zion-slate-light">/ {service.pricingModel}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{service.deliveryTime}</span>
                  <span className="text-zion-cyan">•</span>
                  <span>Market: {service.marketPrice}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-zion-cyan flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-zion-slate-light">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-zion-cyan flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Benefits:
                </h4>
                <ul className="space-y-1 text-sm text-zion-slate-light">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
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
                  className="px-4 py-2 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors duration-200 flex items-center gap-2 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 bg-zion-blue-darker py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our expert team to discuss your IT needs and get a customized solution that drives innovation
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Our Website
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServices;