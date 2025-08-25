import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Package, Server, Lock, Code, Monitor, Smartphone, Wifi, Database as DatabaseIcon2, Globe as GlobeIcon, Shield as ShieldIcon2, Cpu as CpuIcon } from 'lucide-react';

const ITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // IT Services data
  const itServices = [
    {
      id: 1,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      description: "Complete cloud migration strategy and optimization for improved performance and cost savings",
      features: ["Cloud assessment", "Migration planning", "Performance optimization", "Cost optimization", "Security implementation"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance"],
      targetAudience: ["Medium businesses", "Enterprises", "Tech companies", "Healthcare organizations"],
      pricing: "Project-based",
      marketPrice: "$15,000 - $100,000",
      implementationTime: "4-12 weeks",
      supportLevel: "Dedicated project manager + 24/7 support",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/cloud-migration",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 2,
      name: "Cybersecurity Assessment & Implementation",
      category: "Security",
      description: "Comprehensive cybersecurity assessment and implementation of enterprise-grade security solutions",
      features: ["Security audit", "Vulnerability assessment", "Penetration testing", "Security implementation", "Employee training"],
      benefits: ["Enhanced security posture", "Compliance achievement", "Risk reduction", "Customer trust"],
      targetAudience: ["Financial services", "Healthcare", "E-commerce", "Government contractors"],
      pricing: "Project-based",
      marketPrice: "$25,000 - $150,000",
      implementationTime: "6-16 weeks",
      supportLevel: "Security team + 24/7 monitoring",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/cybersecurity",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 3,
      name: "DevOps Implementation",
      category: "DevOps",
      description: "End-to-end DevOps implementation with CI/CD pipelines and automation",
      features: ["CI/CD setup", "Infrastructure as Code", "Monitoring & alerting", "Security integration", "Team training"],
      benefits: ["Faster deployments", "Better reliability", "Improved collaboration", "Cost reduction"],
      targetAudience: ["Development teams", "Tech companies", "Startups", "Enterprises"],
      pricing: "Project-based",
      marketPrice: "$25,000 - $75,000",
      implementationTime: "6-12 weeks",
      supportLevel: "DevOps engineers + ongoing support",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/devops-implementation",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 4,
      name: "Legacy System Modernization",
      category: "Digital Transformation",
      description: "Modernize legacy systems with cloud-native technologies and microservices architecture",
      features: ["System analysis", "Architecture redesign", "Cloud migration", "API development", "Data migration"],
      benefits: ["Improved performance", "Better scalability", "Reduced maintenance", "Enhanced security"],
      targetAudience: ["Enterprises", "Financial services", "Healthcare", "Manufacturing"],
      pricing: "Project-based",
      marketPrice: "$50,000 - $500,000",
      implementationTime: "12-36 weeks",
      supportLevel: "Full project team + ongoing maintenance",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/legacy-modernization",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 5,
      name: "Data Strategy & Implementation",
      category: "Data Services",
      description: "Comprehensive data strategy, architecture, and implementation for business intelligence",
      features: ["Data assessment", "Architecture design", "ETL implementation", "Analytics setup", "Governance framework"],
      benefits: ["Better decision making", "Data insights", "Compliance", "Operational efficiency"],
      targetAudience: ["Enterprises", "Financial services", "Healthcare", "Retail"],
      pricing: "Project-based",
      marketPrice: "$40,000 - $300,000",
      implementationTime: "8-24 weeks",
      supportLevel: "Data architects + ongoing optimization",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/data-strategy",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 6,
      name: "Network Infrastructure & Security",
      category: "Infrastructure",
      description: "Enterprise-grade network infrastructure design, implementation, and security",
      features: ["Network design", "Security implementation", "Monitoring setup", "Disaster recovery", "Compliance"],
      benefits: ["Enhanced security", "Better performance", "Reliability", "Scalability"],
      targetAudience: ["Enterprises", "Healthcare", "Financial services", "Government"],
      pricing: "Project-based",
      marketPrice: "$30,000 - $200,000",
      implementationTime: "8-20 weeks",
      supportLevel: "Network engineers + 24/7 monitoring",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/network-infrastructure",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    }
  ];

  const categories = ['all', 'Cloud Services', 'Security', 'DevOps', 'Digital Transformation', 'Data Services', 'Infrastructure'];
  const pricingModels = ['all', 'Project-based', 'Subscription', 'Consulting'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedCategory === 'all' || service.pricing === selectedCategory;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'DevOps': return <CpuIcon className="w-6 h-6" />;
      case 'Digital Transformation': return <Zap className="w-6 h-6" />;
      case 'Data Services': return <DatabaseIcon className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      default: return <Settings className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cloud Services': return 'text-blue-400';
      case 'Security': return 'text-red-400';
      case 'DevOps': return 'text-green-400';
      case 'Digital Transformation': return 'text-purple-400';
      case 'Data Services': return 'text-cyan-400';
      case 'Infrastructure': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Enterprise IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business infrastructure, enhance security, and drive digital innovation
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search IT services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(service.category)} bg-opacity-20 bg-current`}>
                        {service.category}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.pricing}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {service.marketPrice}
                </div>
                <div className="text-sm text-gray-400">Implementation: {service.implementationTime}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Support: {service.supportLevel}</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our enterprise IT solutions are designed to scale with your business needs and drive digital transformation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">{itServices[0].contactInfo.phone}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">{itServices[0].contactInfo.email}</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
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

export default ITServices;