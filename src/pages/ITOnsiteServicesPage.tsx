import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wrench, Server, Laptop, Smartphone, Router, HardDrive, Lock, Key, EyeOff, ShieldCheck, Globe2, Wifi, Bluetooth, Satellite, Antenna, CircuitBoard, Chip, Memory, Storage, Backup, Sync, RefreshCw, Download, Upload, Share2, Link, Unlink, Settings2, Cog, Tool, Hammer, Screwdriver, Drill, Saw, Paintbrush, Palette, Brush, PenTool, Vector, Layers, Grid, Layout, Monitor, Display, Projector, Printer, Scanner, Fax, Copier, Archive, Folder, File, Document, Spreadsheet, Presentation, Database, Chart, Graph, Analytics, Report, Dashboard, Calendar, Clock, Timer, Stopwatch, Hourglass, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarWeek, CalendarMonth, CalendarYear, Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Code } from 'lucide-react';

const ITOnsiteServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Comprehensive IT Services data
  const itServices = [
    {
      id: 1,
      name: "Enterprise Network Infrastructure",
      category: "Networking",
      pricing: "Project-based",
      description: "Complete network design, implementation, and optimization for enterprise environments",
      price: 15000,
      pricingModel: "project-based",
      duration: "2-4 weeks",
      features: ["Network architecture design", "Cisco/Meraki implementation", "Security configuration", "Performance optimization"],
      benefits: ["Scalable infrastructure", "Enhanced security", "Improved performance", "Future-proof design"],
      targetAudience: ["Large enterprises", "Multi-location businesses", "Healthcare facilities", "Educational institutions"],
      tags: ["Networking", "Infrastructure", "Enterprise", "Security"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Cybersecurity Assessment & Implementation",
      category: "Security",
      pricing: "Project-based",
      description: "Comprehensive security audit, threat assessment, and security infrastructure implementation",
      price: 8000,
      pricingModel: "project-based",
      duration: "1-3 weeks",
      features: ["Security audit", "Penetration testing", "Firewall configuration", "Security training"],
      benefits: ["Threat protection", "Compliance", "Risk reduction", "Employee awareness"],
      targetAudience: ["Financial institutions", "Healthcare", "Legal firms", "Manufacturing"],
      tags: ["Cybersecurity", "Security Audit", "Compliance", "Training"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      pricing: "Project-based",
      description: "Seamless migration to cloud platforms with optimization and cost management",
      price: 12000,
      pricingModel: "project-based",
      duration: "3-6 weeks",
      features: ["Cloud strategy", "Migration planning", "Data transfer", "Cost optimization"],
      benefits: ["Scalability", "Cost reduction", "Disaster recovery", "Global access"],
      targetAudience: ["Growing businesses", "Remote teams", "E-commerce", "SaaS companies"],
      tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Data Center Design & Implementation",
      category: "Infrastructure",
      pricing: "Project-based",
      description: "Custom data center design with high availability and disaster recovery",
      price: 25000,
      pricingModel: "project-based",
      duration: "6-12 weeks",
      features: ["Facility design", "Power systems", "Cooling solutions", "Security systems"],
      benefits: ["High availability", "Disaster recovery", "Energy efficiency", "Scalability"],
      targetAudience: ["Large corporations", "Data centers", "Financial services", "Government"],
      tags: ["Data Center", "Infrastructure", "High Availability", "Disaster Recovery"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "IT Support & Managed Services",
      category: "Support",
      pricing: "Monthly",
      description: "24/7 IT support and proactive managed services for business continuity",
      price: 1500,
      pricingModel: "monthly",
      duration: "Ongoing",
      features: ["24/7 support", "Proactive monitoring", "Patch management", "Backup management"],
      benefits: ["Reduced downtime", "Predictable costs", "Expert support", "Peace of mind"],
      targetAudience: ["Small businesses", "Medium enterprises", "Healthcare", "Legal firms"],
      tags: ["IT Support", "Managed Services", "24/7 Support", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Digital Transformation Consulting",
      category: "Consulting",
      pricing: "Hourly",
      description: "Strategic IT consulting for digital transformation and technology modernization",
      price: 200,
      pricingModel: "hourly",
      duration: "Flexible",
      features: ["Technology assessment", "Strategy development", "Implementation planning", "Change management"],
      benefits: ["Competitive advantage", "Operational efficiency", "Cost optimization", "Future readiness"],
      targetAudience: ["Traditional businesses", "Manufacturing", "Retail", "Service industries"],
      tags: ["Digital Transformation", "Consulting", "Strategy", "Change Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "Hardware Installation & Maintenance",
      category: "Hardware",
      pricing: "Project-based",
      description: "Professional hardware installation, configuration, and ongoing maintenance services",
      price: 5000,
      pricingModel: "project-based",
      duration: "1-2 weeks",
      features: ["Hardware installation", "Configuration", "Testing", "Documentation"],
      benefits: ["Professional installation", "Proper configuration", "Warranty protection", "Long-term reliability"],
      targetAudience: ["New offices", "Hardware upgrades", "Equipment replacement", "System expansion"],
      tags: ["Hardware", "Installation", "Configuration", "Maintenance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Software Implementation & Training",
      category: "Software",
      pricing: "Project-based",
      description: "Enterprise software implementation with comprehensive user training and support",
      price: 10000,
      pricingModel: "project-based",
      duration: "2-4 weeks",
      features: ["Software installation", "Configuration", "Data migration", "User training"],
      benefits: ["Faster adoption", "Reduced errors", "Increased productivity", "Better ROI"],
      targetAudience: ["ERP implementations", "CRM systems", "Accounting software", "Industry-specific solutions"],
      tags: ["Software", "Implementation", "Training", "Support"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "Disaster Recovery & Business Continuity",
      category: "Recovery",
      pricing: "Project-based",
      description: "Comprehensive disaster recovery planning and implementation for business resilience",
      price: 18000,
      pricingModel: "project-based",
      duration: "4-8 weeks",
      features: ["Risk assessment", "Recovery planning", "Backup systems", "Testing procedures"],
      benefits: ["Business continuity", "Risk mitigation", "Compliance", "Customer confidence"],
      targetAudience: ["Financial services", "Healthcare", "Manufacturing", "Critical infrastructure"],
      tags: ["Disaster Recovery", "Business Continuity", "Risk Management", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "IoT Infrastructure & Smart Building",
      category: "IoT",
      pricing: "Project-based",
      description: "Internet of Things infrastructure for smart buildings and connected environments",
      price: 22000,
      pricingModel: "project-based",
      duration: "6-10 weeks",
      features: ["IoT architecture", "Sensor deployment", "Data collection", "Analytics platform"],
      benefits: ["Energy efficiency", "Automation", "Data insights", "Cost savings"],
      targetAudience: ["Commercial buildings", "Manufacturing facilities", "Healthcare campuses", "Educational institutions"],
      tags: ["IoT", "Smart Buildings", "Automation", "Energy Efficiency"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "Virtualization & Containerization",
      category: "Virtualization",
      pricing: "Project-based",
      description: "Server virtualization and containerization for improved resource utilization",
      price: 15000,
      pricingModel: "project-based",
      duration: "3-5 weeks",
      features: ["VMware/Hyper-V setup", "Docker containers", "Resource optimization", "Management tools"],
      benefits: ["Resource efficiency", "Cost reduction", "Scalability", "Easier management"],
      targetAudience: ["Data centers", "Development teams", "IT departments", "Growing businesses"],
      tags: ["Virtualization", "Containers", "Docker", "VMware"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "Compliance & Regulatory Solutions",
      category: "Compliance",
      pricing: "Project-based",
      description: "IT compliance solutions for HIPAA, SOX, GDPR, and industry-specific regulations",
      price: 12000,
      pricingModel: "project-based",
      duration: "4-6 weeks",
      features: ["Compliance audit", "Policy development", "Implementation", "Ongoing monitoring"],
      benefits: ["Regulatory compliance", "Risk reduction", "Audit readiness", "Legal protection"],
      targetAudience: ["Healthcare", "Financial services", "Legal firms", "Government contractors"],
      tags: ["Compliance", "HIPAA", "SOX", "GDPR"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Networking', 'Security', 'Cloud Services', 'Infrastructure', 'Support', 'Consulting', 'Hardware', 'Software', 'Recovery', 'IoT', 'Virtualization', 'Compliance'];
  const pricingModels = ['all', 'Project-based', 'Monthly', 'Hourly'];

  const filteredServices = itServices.filter(service => {
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
        return `$${price.toLocaleString()}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Networking': return <Network className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Support': return <Settings className="w-6 h-6" />;
      case 'Consulting': return <Users className="w-6 h-6" />;
      case 'Hardware': return <Cpu className="w-6 h-6" />;
      case 'Software': return <Code className="w-6 h-6" />;
      case 'Recovery': return <RefreshCw className="w-6 h-6" />;
      case 'IoT': return <Wifi className="w-6 h-6" />;
      case 'Virtualization': return <Layers className="w-6 h-6" />;
      case 'Compliance': return <ShieldCheck className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Project-based': return 'text-blue-400';
      case 'Monthly': return 'text-green-400';
      case 'Hourly': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            IT Onsite Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional IT services delivered on-site with enterprise-grade solutions for businesses of all sizes
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
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
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
                <div className="text-sm text-gray-400">Duration: {service.duration}</div>
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
                  <span>Get professional IT support</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us →
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
              Our expert IT professionals are ready to deliver on-site solutions tailored to your business needs
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

export default ITOnsiteServicesPage;
