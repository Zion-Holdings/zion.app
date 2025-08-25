import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight } from 'lucide-react';

const ComprehensiveITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Comprehensive IT Services data
  const itServices = [
    {
      id: 1,
      name: "Enterprise Network Infrastructure",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Complete network design, implementation, and management for large organizations",
      price: 15000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Network design & architecture", "Cisco/Meraki implementation", "SD-WAN solutions", "Network security", "24/7 monitoring", "Performance optimization"],
      benefits: ["Scalable infrastructure", "Enhanced security", "Improved performance", "Reduced downtime", "Cost optimization", "Future-ready design"],
      targetAudience: ["Large enterprises", "Multi-location businesses", "Healthcare organizations", "Financial institutions"],
      tags: ["Networking", "Infrastructure", "Enterprise", "Security", "SD-WAN"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-12 weeks",
      support: "24/7 enterprise support"
    },
    {
      id: 2,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      pricing: "Enterprise",
      description: "End-to-end cloud migration services with cost optimization and performance tuning",
      price: 25000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AWS/Azure/GCP migration", "Cost optimization", "Performance tuning", "Security implementation", "Disaster recovery", "Monitoring setup"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance", "Disaster recovery", "Global accessibility"],
      targetAudience: ["Medium to large businesses", "Healthcare providers", "Financial services", "Manufacturing companies"],
      tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Cost Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-16 weeks",
      support: "24/7 cloud support"
    },
    {
      id: 3,
      name: "Cybersecurity Assessment & Implementation",
      category: "Security",
      pricing: "Enterprise",
      description: "Comprehensive cybersecurity assessment, penetration testing, and security implementation",
      price: 18000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Security assessment", "Penetration testing", "Vulnerability scanning", "Security policy development", "Employee training", "Incident response planning"],
      benefits: ["Risk mitigation", "Compliance achievement", "Customer trust", "Reduced breach risk", "Insurance benefits", "Regulatory compliance"],
      targetAudience: ["Financial institutions", "Healthcare organizations", "Government agencies", "E-commerce businesses"],
      tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Risk Assessment", "Security Training"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "6-10 weeks",
      support: "24/7 security support"
    },
    {
      id: 4,
      name: "Data Center Design & Implementation",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Complete data center design, build, and management services for enterprise organizations",
      price: 50000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data center design", "HVAC & power systems", "Server infrastructure", "Storage solutions", "Backup systems", "Monitoring & management"],
      benefits: ["High availability", "Scalability", "Cost control", "Performance optimization", "Security enhancement", "Disaster recovery"],
      targetAudience: ["Large enterprises", "Government agencies", "Healthcare systems", "Financial institutions"],
      tags: ["Data Center", "Infrastructure", "Enterprise", "High Availability", "Disaster Recovery"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-24 weeks",
      support: "24/7 data center support"
    },
    {
      id: 5,
      name: "DevOps Implementation & Automation",
      category: "DevOps",
      pricing: "Enterprise",
      description: "Complete DevOps transformation with CI/CD pipelines, automation, and monitoring",
      price: 22000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["CI/CD pipeline setup", "Infrastructure as code", "Monitoring & alerting", "Automated testing", "Deployment automation", "Performance optimization"],
      benefits: ["Faster deployments", "Reduced errors", "Improved collaboration", "Better monitoring", "Cost savings", "Scalability"],
      targetAudience: ["Software companies", "IT departments", "Digital agencies", "E-commerce platforms"],
      tags: ["DevOps", "CI/CD", "Automation", "Monitoring", "Infrastructure as Code"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "10-14 weeks",
      support: "24/7 DevOps support"
    },
    {
      id: 6,
      name: "Business Intelligence & Analytics Platform",
      category: "Analytics",
      pricing: "Enterprise",
      description: "Comprehensive BI platform with data warehousing, reporting, and advanced analytics",
      price: 30000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data warehouse design", "ETL processes", "Interactive dashboards", "Advanced analytics", "Predictive modeling", "Real-time reporting"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage", "Performance insights", "Operational optimization"],
      targetAudience: ["Manufacturing companies", "Retail chains", "Healthcare systems", "Financial services"],
      tags: ["Business Intelligence", "Data Analytics", "Data Warehouse", "Reporting", "Predictive Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-20 weeks",
      support: "24/7 analytics support"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Cloud Services', 'Security', 'DevOps', 'Analytics'];
  const pricingOptions = ['all', 'Enterprise', 'Professional', 'Standard'];

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
                {pricingOptions.slice(1).map(option => (
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