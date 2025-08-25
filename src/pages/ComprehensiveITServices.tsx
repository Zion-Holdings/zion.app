import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, Tool, Wrench, Cog, Rocket, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

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
      features: ["AWS/Azure migration", "Cost optimization", "Performance tuning", "Security implementation", "Disaster recovery", "Monitoring setup"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance", "Disaster recovery", "Flexible scaling"],
      targetAudience: ["Medium to large businesses", "Healthcare", "Finance", "E-commerce", "Manufacturing"],
      tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization", "Performance"],
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
      description: "Comprehensive security assessment, penetration testing, and security infrastructure implementation",
      price: 18000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Security assessment", "Penetration testing", "SIEM implementation", "Endpoint protection", "Security training", "Compliance audit"],
      benefits: ["Enhanced security posture", "Compliance achievement", "Risk reduction", "Employee awareness", "Incident response", "Peace of mind"],
      targetAudience: ["Healthcare", "Finance", "Government", "Manufacturing", "Retail"],
      tags: ["Cybersecurity", "Penetration Testing", "SIEM", "Compliance", "Security Training"],
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
      description: "Complete data center design, build, and implementation services",
      price: 50000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data center design", "Hardware procurement", "Installation & configuration", "Power & cooling", "Security systems", "Monitoring setup"],
      benefits: ["Custom design", "Scalable infrastructure", "Enhanced performance", "Improved reliability", "Cost optimization", "Future growth"],
      targetAudience: ["Large enterprises", "Data centers", "Cloud providers", "Financial institutions"],
      tags: ["Data Center", "Infrastructure", "Hardware", "Design", "Implementation"],
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
      description: "Complete DevOps implementation with CI/CD pipelines, automation, and monitoring",
      price: 22000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting", "Automation scripts", "Container orchestration", "Performance optimization"],
      benefits: ["Faster deployments", "Reduced errors", "Improved collaboration", "Better monitoring", "Cost savings", "Scalability"],
      targetAudience: ["Software companies", "IT departments", "Startups", "Enterprises"],
      tags: ["DevOps", "CI/CD", "Automation", "Monitoring", "Containers"],
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
      description: "Custom BI platform with data warehousing, reporting, and advanced analytics",
      price: 35000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data warehousing", "ETL processes", "Interactive dashboards", "Advanced analytics", "Predictive modeling", "Mobile access"],
      benefits: ["Data-driven decisions", "Improved insights", "Better reporting", "Real-time analytics", "Competitive advantage", "Operational efficiency"],
      targetAudience: ["Enterprises", "Healthcare", "Finance", "Retail", "Manufacturing"],
      tags: ["Business Intelligence", "Analytics", "Data Warehouse", "Reporting", "Predictive Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-20 weeks",
      support: "24/7 analytics support"
    },
    {
      id: 7,
      name: "Digital Transformation Consulting",
      category: "Consulting",
      pricing: "Enterprise",
      description: "Strategic digital transformation consulting and implementation services",
      price: 40000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Strategy development", "Process optimization", "Technology selection", "Change management", "Implementation support", "ROI measurement"],
      benefits: ["Improved efficiency", "Cost reduction", "Competitive advantage", "Employee satisfaction", "Customer experience", "Future readiness"],
      targetAudience: ["Traditional businesses", "Manufacturing", "Healthcare", "Finance", "Retail"],
      tags: ["Digital Transformation", "Strategy", "Process Optimization", "Change Management", "Technology"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "20-32 weeks",
      support: "24/7 transformation support"
    },
    {
      id: 8,
      name: "Managed IT Services",
      category: "Managed Services",
      pricing: "Monthly",
      description: "Complete managed IT services including monitoring, maintenance, and support",
      price: 5000,
      pricingModel: "monthly",
      userLimit: "Up to 500 users",
      features: ["24/7 monitoring", "Proactive maintenance", "Help desk support", "Security management", "Backup & recovery", "Performance optimization"],
      benefits: ["Reduced IT costs", "Improved reliability", "Expert support", "Proactive maintenance", "Scalable services", "Peace of mind"],
      targetAudience: ["Small to medium businesses", "Healthcare", "Finance", "Legal", "Manufacturing"],
      tags: ["Managed Services", "Monitoring", "Maintenance", "Support", "24/7"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "2-4 weeks",
      support: "24/7 managed services support"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Cloud Services', 'Security', 'DevOps', 'Analytics', 'Consulting', 'Managed Services'];
  const pricingModels = ['all', 'project-based', 'monthly', 'yearly'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Header Section */}
      <div className="bg-zion-blue-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            Comprehensive IT Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Enterprise-grade IT solutions designed to transform your business infrastructure, 
            enhance security, and drive digital innovation
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
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                {pricingModels.map(model => (
                  <option key={model} value={model} className="bg-zion-blue-dark text-white">
                    {model === 'all' ? 'All Pricing Models' : model === 'project-based' ? 'Project-Based' : model.charAt(0).toUpperCase() + model.slice(1)}
                  </option>
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
              
              <h3 className="text-2xl font-bold mb-3 text-zion-cyan">
                {service.name}
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {service.pricingModel === 'monthly' ? '/month' : service.pricingModel === 'yearly' ? '/year' : 'project'}
                  </span>
                </div>
                {service.pricingModel === 'project-based' && (
                  <p className="text-zion-slate-light text-sm">
                    Delivery: {service.deliveryTime}
                  </p>
                )}
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center text-zion-slate-light text-sm">
                      <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Target Audience:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 3).map((audience, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                  <span>Support: {service.support}</span>
                  <span>Users: {service.userLimit}</span>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-200"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan p-2 rounded-lg transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
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
            Let our expert team help you build a robust, scalable, and secure IT foundation 
            that drives your business forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Visit Our Website
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServices;