import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, GraduationCap, Stethoscope } from 'lucide-react';

const IndustrySolutions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedSolutionType, setSelectedSolutionType] = useState<string>('all');

  // Industry-specific solutions data
  const industrySolutions = [
    {
      id: 1,
      name: "Healthcare Technology Solutions",
      industry: "Healthcare",
      solutionType: "Digital Health",
      description: "Comprehensive digital health solutions including telemedicine, EHR systems, and patient management platforms",
      price: 75000,
      pricingModel: "project-based",
      industryScore: 96,
      features: ["Telemedicine platform", "EHR integration", "Patient portal", "HIPAA compliance"],
      benefits: ["Improved patient care", "Operational efficiency", "Regulatory compliance", "Cost reduction"],
      useCases: ["Hospitals", "Clinics", "Telemedicine providers", "Health systems"],
      compliance: ["HIPAA", "HITECH", "FDA", "SOC 2"],
      tags: ["Healthcare", "Digital Health", "Telemedicine", "EHR", "HIPAA"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Financial Technology Platform",
      industry: "Finance",
      solutionType: "FinTech",
      description: "Advanced fintech solutions for banking, payments, and financial services",
      price: 85000,
      pricingModel: "project-based",
      industryScore: 94,
      features: ["Digital banking", "Payment processing", "Risk management", "Compliance monitoring"],
      benefits: ["Enhanced security", "Improved efficiency", "Regulatory compliance", "Customer satisfaction"],
      useCases: ["Banks", "Credit unions", "Payment processors", "Investment firms"],
      compliance: ["PCI DSS", "SOC 2", "GDPR", "SOX"],
      tags: ["Finance", "FinTech", "Digital Banking", "Payments", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Manufacturing Intelligence System",
      industry: "Manufacturing",
      solutionType: "Industry 4.0",
      description: "Smart manufacturing solutions with IoT, AI, and predictive analytics",
      price: 65000,
      pricingModel: "project-based",
      industryScore: 93,
      features: ["IoT sensors", "Predictive maintenance", "Quality control", "Supply chain optimization"],
      benefits: ["Reduced downtime", "Improved quality", "Cost savings", "Operational efficiency"],
      useCases: ["Automotive", "Electronics", "Pharmaceuticals", "Food processing"],
      compliance: ["ISO 9001", "ISO 14001", "FDA", "GMP"],
      tags: ["Manufacturing", "Industry 4.0", "IoT", "Predictive Analytics", "Quality Control"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Retail Technology Suite",
      industry: "Retail",
      solutionType: "E-commerce",
      description: "Omnichannel retail solutions for seamless customer experiences",
      price: 45000,
      pricingModel: "project-based",
      industryScore: 91,
      features: ["E-commerce platform", "Inventory management", "Customer analytics", "POS integration"],
      benefits: ["Increased sales", "Better customer experience", "Inventory optimization", "Data insights"],
      useCases: ["Retail chains", "E-commerce stores", "Boutiques", "Franchises"],
      compliance: ["PCI DSS", "GDPR", "CCPA", "SOC 2"],
      tags: ["Retail", "E-commerce", "Omnichannel", "Inventory Management", "Customer Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "Education Technology Platform",
      industry: "Education",
      solutionType: "EdTech",
      description: "Comprehensive educational technology solutions for K-12 and higher education",
      price: 35000,
      pricingModel: "project-based",
      industryScore: 89,
      features: ["Learning management system", "Student analytics", "Parent portal", "Assessment tools"],
      benefits: ["Improved learning outcomes", "Administrative efficiency", "Parent engagement", "Data-driven insights"],
      useCases: ["K-12 schools", "Universities", "Training centers", "Corporate training"],
      compliance: ["FERPA", "COPPA", "GDPR", "SOC 2"],
      tags: ["Education", "EdTech", "LMS", "Student Analytics", "Assessment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Logistics & Supply Chain Platform",
      industry: "Logistics",
      solutionType: "Supply Chain",
      description: "Intelligent logistics and supply chain management solutions",
      price: 55000,
      pricingModel: "project-based",
      industryScore: 92,
      features: ["Route optimization", "Real-time tracking", "Inventory management", "Demand forecasting"],
      benefits: ["Cost reduction", "Improved efficiency", "Better customer service", "Risk mitigation"],
      useCases: ["Shipping companies", "Manufacturers", "Retailers", "E-commerce"],
      compliance: ["ISO 28000", "C-TPAT", "GDPR", "SOC 2"],
      tags: ["Logistics", "Supply Chain", "Route Optimization", "Tracking", "Forecasting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "Real Estate Technology Platform",
      industry: "Real Estate",
      solutionType: "PropTech",
      description: "Innovative property technology solutions for real estate professionals",
      price: 40000,
      pricingModel: "project-based",
      industryScore: 88,
      features: ["Property management", "CRM system", "Market analytics", "Virtual tours"],
      benefits: ["Increased sales", "Better client management", "Market insights", "Operational efficiency"],
      useCases: ["Real estate agencies", "Property managers", "Developers", "Investors"],
      compliance: ["GDPR", "CCPA", "SOC 2", "Real estate regulations"],
      tags: ["Real Estate", "PropTech", "Property Management", "CRM", "Market Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Energy Management System",
      industry: "Energy",
      solutionType: "Smart Grid",
      description: "Intelligent energy management and smart grid solutions",
      price: 70000,
      pricingModel: "project-based",
      industryScore: 95,
      features: ["Smart metering", "Energy analytics", "Grid optimization", "Renewable integration"],
      benefits: ["Energy efficiency", "Cost savings", "Sustainability", "Grid reliability"],
      useCases: ["Utility companies", "Industrial facilities", "Commercial buildings", "Smart cities"],
      compliance: ["NERC CIP", "ISO 27001", "SOC 2", "Energy regulations"],
      tags: ["Energy", "Smart Grid", "Energy Management", "Sustainability", "Grid Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const industries = ['all', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Logistics', 'Real Estate', 'Energy'];
  const solutionTypes = ['all', 'Digital Health', 'FinTech', 'Industry 4.0', 'E-commerce', 'EdTech', 'Supply Chain', 'PropTech', 'Smart Grid'];

  const filteredSolutions = industrySolutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === 'all' || solution.industry === selectedIndustry;
    const matchesSolutionType = selectedSolutionType === 'all' || solution.solutionType === selectedSolutionType;
    
    return matchesSearch && matchesIndustry && matchesSolutionType;
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

  const getIndustryColor = (score: number) => {
    if (score >= 95) return 'text-green-500';
    if (score >= 90) return 'text-blue-500';
    if (score >= 85) return 'text-yellow-500';
    return 'text-orange-500';
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Healthcare': return <Stethoscope className="w-6 h-6" />;
      case 'Finance': return <CreditCard className="w-6 h-6" />;
      case 'Manufacturing': return <Factory className="w-6 h-6" />;
      case 'Retail': return <Store className="w-6 h-6" />;
      case 'Education': return <GraduationCap className="w-6 h-6" />;
      case 'Logistics': return <Truck className="w-6 h-6" />;
      case 'Real Estate': return <Home className="w-6 h-6" />;
      case 'Energy': return <Zap className="w-6 h-6" />;
      default: return <Building className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized technology solutions designed for your industry's unique challenges and compliance requirements
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search industry solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {industries.map(industry => (
                <option key={industry} value={industry} className="bg-gray-800 text-white">
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
            
            <select
              value={selectedSolutionType}
              onChange={(e) => setSelectedSolutionType(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {solutionTypes.map(type => (
                <option key={type} value={type} className="bg-gray-800 text-white">
                  {type === 'all' ? 'All Solution Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => (
            <div key={solution.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {getIndustryIcon(solution.industry)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getIndustryColor(solution.industryScore)} bg-opacity-20 bg-current`}>
                        Industry Score: {solution.industryScore}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {solution.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{solution.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(solution.price, solution.pricingModel)}
                </div>
                <div className="text-sm text-gray-400">{solution.pricingModel.replace('-', ' ')}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Compliance:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.compliance.slice(0, 3).map((compliance, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {compliance}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Contact us for industry expertise</span>
                  <a 
                    href={solution.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Need Industry-Specific Solutions?</h2>
            <p className="text-gray-300 mb-6">
              Our team has deep expertise in your industry's unique challenges and compliance requirements
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">{industrySolutions[0].contactInfo.phone}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">{industrySolutions[0].contactInfo.email}</p>
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

export default IndustrySolutions;