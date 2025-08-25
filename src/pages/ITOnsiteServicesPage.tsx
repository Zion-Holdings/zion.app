import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wrench, Server, Router, Laptop, Smartphone, Printer, HardDrive, Wifi, Lock, Unlock, Key, EyeOff, EyeOn, AlertTriangle, CheckCircle, XCircle, Info, HelpCircle, Settings2, Cog, Tool, Hammer, Screwdriver, Drill, Saw, Paintbrush, Palette, Brush, Eraser, Ruler, Compass, Calculator, CalendarDays, Clock3, Timer, Stopwatch, Hourglass, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarWeek, CalendarMonth, CalendarYear, CalendarHeart, CalendarStar, CalendarUser, CalendarSettings, CalendarSearch, CalendarEdit, CalendarTrash, CalendarDownload, CalendarUpload, CalendarShare, CalendarLink, CalendarUnlink, CalendarLock, CalendarUnlock, CalendarEye, CalendarEyeOff, CalendarAlert, CalendarCheckCircle, CalendarXCircle, CalendarInfo, CalendarHelp, CalendarQuestion, CalendarExclamation, CalendarMinusCircle, CalendarPlusCircle, CalendarXCircle2, CalendarCheckCircle2, CalendarInfoCircle, CalendarQuestionCircle, CalendarExclamationCircle, CalendarMinusCircle2, CalendarPlusCircle2, CalendarXCircle3, CalendarCheckCircle3, CalendarInfoCircle2, CalendarQuestionCircle2, CalendarExclamationCircle2, CalendarMinusCircle3, CalendarPlusCircle3, CalendarXCircle4, CalendarCheckCircle4, CalendarInfoCircle3, CalendarQuestionCircle3, CalendarExclamationCircle3, CalendarMinusCircle4, CalendarPlusCircle4, CalendarXCircle5, CalendarCheckCircle5, CalendarInfoCircle4, CalendarQuestionCircle4, CalendarExclamationCircle4, CalendarMinusCircle5, CalendarPlusCircle5, CalendarXCircle6, CalendarCheckCircle6, CalendarInfoCircle5, CalendarQuestionCircle5, CalendarExclamationCircle5, CalendarMinusCircle6, CalendarPlusCircle6, CalendarXCircle7, CalendarCheckCircle7, CalendarInfoCircle6, CalendarQuestionCircle6, CalendarExclamationCircle6, CalendarMinusCircle7, CalendarPlusCircle7, CalendarXCircle8, CalendarCheckCircle8, CalendarInfoCircle7, CalendarQuestionCircle7, CalendarExclamationCircle7, CalendarMinusCircle8, CalendarPlusCircle8, CalendarXCircle9, CalendarCheckCircle9, CalendarInfoCircle8, CalendarQuestionCircle8, CalendarExclamationCircle8, CalendarMinusCircle9, CalendarPlusCircle9, CalendarXCircle10, CalendarCheckCircle10, CalendarInfoCircle9, CalendarQuestionCircle9, CalendarExclamationCircle9, CalendarMinusCircle10, CalendarPlusCircle10 } from 'lucide-react';

const ITOnsiteServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  // Comprehensive IT Services data
  const itServices = [
    {
      id: 1,
      name: "Network Infrastructure Setup & Maintenance",
      category: "Networking",
      location: "Onsite",
      description: "Complete network infrastructure design, installation, and ongoing maintenance for businesses of all sizes",
      price: 150,
      pricingModel: "hourly",
      responseTime: "4-8 hours",
      features: ["Network design & planning", "Router & switch configuration", "WiFi optimization", "Security implementation", "24/7 monitoring", "Performance optimization"],
      benefits: ["Reliable connectivity", "Enhanced security", "Scalable infrastructure", "Reduced downtime", "Expert support", "Cost optimization"],
      targetAudience: ["Small businesses", "Medium enterprises", "Healthcare facilities", "Educational institutions", "Retail stores", "Manufacturing plants"],
      tags: ["Networking", "Infrastructure", "WiFi", "Security", "Monitoring", "Optimization"],
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
      location: "Onsite",
      description: "Comprehensive cybersecurity audits, threat assessment, and security infrastructure implementation",
      price: 200,
      pricingModel: "hourly",
      responseTime: "24-48 hours",
      features: ["Security audit & assessment", "Firewall configuration", "Intrusion detection", "Vulnerability scanning", "Security training", "Incident response"],
      benefits: ["Data protection", "Regulatory compliance", "Risk mitigation", "Business continuity", "Customer trust", "Legal protection"],
      targetAudience: ["Financial institutions", "Healthcare providers", "Legal firms", "E-commerce businesses", "Manufacturing companies", "Government agencies"],
      tags: ["Cybersecurity", "Security Audit", "Firewall", "Compliance", "Risk Management", "Training"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Cloud Migration & Management",
      category: "Cloud Services",
      location: "Hybrid",
      description: "Seamless cloud migration, setup, and ongoing management for optimal performance and cost efficiency",
      price: 175,
      pricingModel: "hourly",
      responseTime: "1-3 days",
      features: ["Cloud strategy planning", "Migration execution", "Performance optimization", "Cost management", "Security implementation", "Backup & recovery"],
      benefits: ["Scalability", "Cost reduction", "Enhanced security", "Disaster recovery", "Global accessibility", "Automatic updates"],
      targetAudience: ["Growing businesses", "Remote teams", "Data-heavy companies", "E-commerce platforms", "SaaS providers", "Consulting firms"],
      tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "Performance", "Cost Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Hardware Installation & Maintenance",
      category: "Hardware",
      location: "Onsite",
      description: "Professional installation, configuration, and maintenance of all IT hardware and peripherals",
      price: 125,
      pricingModel: "hourly",
      responseTime: "2-6 hours",
      features: ["Workstation setup", "Server installation", "Printer configuration", "Peripheral setup", "Hardware upgrades", "Preventive maintenance"],
      benefits: ["Proper installation", "Extended lifespan", "Optimal performance", "Reduced failures", "Expert knowledge", "Warranty protection"],
      targetAudience: ["New businesses", "Office expansions", "Hardware upgrades", "Equipment replacement", "System migrations", "Maintenance contracts"],
      tags: ["Hardware", "Installation", "Maintenance", "Workstations", "Servers", "Peripherals"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "Data Backup & Disaster Recovery",
      category: "Data Protection",
      location: "Hybrid",
      description: "Comprehensive data backup solutions and disaster recovery planning to protect your business data",
      price: 225,
      pricingModel: "hourly",
      responseTime: "4-12 hours",
      features: ["Backup strategy design", "Automated backup systems", "Cloud backup setup", "Recovery testing", "Disaster planning", "Business continuity"],
      benefits: ["Data protection", "Business continuity", "Regulatory compliance", "Peace of mind", "Quick recovery", "Cost savings"],
      targetAudience: ["All businesses", "Healthcare providers", "Financial institutions", "Legal firms", "Manufacturing", "Retail"],
      tags: ["Data Backup", "Disaster Recovery", "Business Continuity", "Cloud Backup", "Recovery Testing", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "IT Consulting & Strategic Planning",
      category: "Consulting",
      location: "Hybrid",
      description: "Strategic IT consulting to align technology with business goals and optimize IT investments",
      price: 250,
      pricingModel: "hourly",
      responseTime: "1-2 weeks",
      features: ["Technology assessment", "Strategic planning", "Vendor selection", "Budget planning", "ROI analysis", "Implementation roadmap"],
      benefits: ["Strategic alignment", "Cost optimization", "Risk reduction", "Competitive advantage", "Future readiness", "Expert guidance"],
      targetAudience: ["Business owners", "IT managers", "Executives", "Growing companies", "Technology companies", "Consulting firms"],
      tags: ["IT Consulting", "Strategic Planning", "Technology Assessment", "Vendor Selection", "ROI Analysis", "Implementation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "VoIP & Communication Systems",
      category: "Communications",
      location: "Onsite",
      description: "Modern communication system setup including VoIP, video conferencing, and unified communications",
      price: 160,
      pricingModel: "hourly",
      responseTime: "1-3 days",
      features: ["VoIP system design", "Phone system setup", "Video conferencing", "Call routing", "Voicemail setup", "Mobile integration"],
      benefits: ["Cost savings", "Enhanced collaboration", "Professional image", "Scalability", "Remote work support", "Advanced features"],
      targetAudience: ["Service businesses", "Consulting firms", "Sales teams", "Remote companies", "Healthcare providers", "Educational institutions"],
      tags: ["VoIP", "Communication", "Video Conferencing", "Phone Systems", "Call Routing", "Mobile Integration"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Software Installation & Training",
      category: "Software",
      location: "Onsite",
      description: "Professional software installation, configuration, and user training for optimal productivity",
      price: 140,
      pricingModel: "hourly",
      responseTime: "1-2 days",
      features: ["Software installation", "Configuration setup", "User training", "Documentation", "Support materials", "Follow-up support"],
      benefits: ["Proper setup", "User adoption", "Productivity gains", "Reduced support calls", "Knowledge transfer", "ROI maximization"],
      targetAudience: ["New software users", "Software upgrades", "Employee onboarding", "Process improvements", "Compliance requirements", "Efficiency projects"],
      tags: ["Software", "Installation", "Training", "Configuration", "Documentation", "Support"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "IT Support & Help Desk",
      category: "Support",
      location: "Hybrid",
      description: "Comprehensive IT support services including help desk, remote support, and on-site assistance",
      price: 120,
      pricingModel: "hourly",
      responseTime: "1-4 hours",
      features: ["Help desk support", "Remote assistance", "On-site support", "Issue tracking", "Knowledge base", "User training"],
      benefits: ["Quick resolution", "Reduced downtime", "User satisfaction", "Cost efficiency", "Proactive support", "Continuous improvement"],
      targetAudience: ["All businesses", "Remote teams", "Growing companies", "Technology-dependent businesses", "Healthcare", "Education"],
      tags: ["IT Support", "Help Desk", "Remote Support", "Issue Tracking", "User Training", "Proactive Support"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "Server Management & Optimization",
      category: "Infrastructure",
      location: "Onsite",
      description: "Professional server management, monitoring, and optimization for maximum performance and reliability",
      price: 180,
      pricingModel: "hourly",
      responseTime: "4-8 hours",
      features: ["Server setup", "Performance monitoring", "Security hardening", "Backup management", "Capacity planning", "Disaster recovery"],
      benefits: ["Optimal performance", "Enhanced security", "Reduced downtime", "Scalability", "Cost optimization", "Expert management"],
      targetAudience: ["Medium businesses", "Large companies", "Data centers", "Hosting providers", "Software companies", "E-commerce platforms"],
      tags: ["Server Management", "Performance", "Security", "Monitoring", "Optimization", "Disaster Recovery"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Networking', 'Security', 'Cloud Services', 'Hardware', 'Data Protection', 'Consulting', 'Communications', 'Software', 'Support', 'Infrastructure'];
  const locations = ['all', 'Onsite', 'Hybrid', 'Remote'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || service.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'hourly':
        return `$${price}/hour`;
      case 'daily':
        return `$${price * 8}/day`;
      case 'monthly':
        return `$${price * 160}/month`;
      case 'project':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Networking': return <Network className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Hardware': return <Server className="w-6 h-6" />;
      case 'Data Protection': return <Database className="w-6 h-6" />;
      case 'Consulting': return <Users className="w-6 h-6" />;
      case 'Communications': return <MessageSquare className="w-6 h-6" />;
      case 'Software': return <Settings className="w-6 h-6" />;
      case 'Support': return <HelpCircle className="w-6 h-6" />;
      case 'Infrastructure': return <Building className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getLocationColor = (location: string) => {
    switch (location) {
      case 'Onsite': return 'text-green-400';
      case 'Hybrid': return 'text-blue-400';
      case 'Remote': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-purple-900/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)] animate-float"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4 animate-neon-pulse">
            IT Onsite Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional IT services delivered directly to your business location. Expert technicians, rapid response times, and comprehensive solutions.
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
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            >
              {locations.map(location => (
                <option key={location} value={location} className="bg-gray-800 text-white">
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLocationColor(service.location)} bg-opacity-20 bg-current`}>
                        {service.location}
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
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Response: {service.responseTime}
                </div>
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
                    className="text-blue-400 hover:text-blue-300 transition-colors group-hover:scale-105"
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
            <h2 className="text-2xl font-bold text-white mb-4">Need Immediate IT Support?</h2>
            <p className="text-gray-300 mb-6">
              Our expert technicians are available for onsite visits and remote support
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="group">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">{itServices[0].contactInfo.phone}</p>
              </div>
              <div className="group">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">{itServices[0].contactInfo.email}</p>
              </div>
              <div className="group">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
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
