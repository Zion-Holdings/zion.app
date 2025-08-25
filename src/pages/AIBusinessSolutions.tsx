import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Stethoscope, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Calendar, FileText, BarChart3 as BarChart3Icon, Users as UsersIcon2, CreditCard as CreditCardIcon2, MessageSquare as MessageSquareIcon, Camera as CameraIcon, Video as VideoIcon, Music as MusicIcon, BookOpen as BookOpenIcon } from 'lucide-react';

const AIBusinessSolutions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBusinessSize, setSelectedBusinessSize] = useState<string>('all');

  // AI Business Solutions data
  const aiBusinessSolutions = [
    {
      id: 1,
      name: "AI-Powered Customer Analytics",
      category: "Analytics",
      businessSize: "Enterprise",
      description: "Advanced AI analytics platform for deep customer insights and behavior prediction",
      price: 120000,
      pricingModel: "project-based",
      aiScore: 98,
      features: ["Customer segmentation", "Behavior prediction", "Churn analysis", "Personalization engine"],
      benefits: ["Increased customer retention", "Better targeting", "Revenue growth", "Data-driven decisions"],
      useCases: ["E-commerce", "SaaS companies", "Retail chains", "Financial services"],
      aiCapabilities: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      tags: ["AI Analytics", "Customer Insights", "Predictive Modeling", "Personalization", "Business Intelligence"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Intelligent Supply Chain Optimization",
      category: "Supply Chain",
      businessSize: "Enterprise",
      description: "AI-driven supply chain management with predictive analytics and automated optimization",
      price: 150000,
      pricingModel: "project-based",
      aiScore: 97,
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Risk assessment"],
      benefits: ["Cost reduction", "Improved efficiency", "Risk mitigation", "Better planning"],
      useCases: ["Manufacturing", "Logistics", "Retail", "Distribution"],
      aiCapabilities: ["Predictive Analytics", "Optimization Algorithms", "Machine Learning", "IoT Integration"],
      tags: ["Supply Chain", "AI Optimization", "Predictive Analytics", "Logistics", "Inventory Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "AI Marketing Automation Suite",
      category: "Marketing",
      businessSize: "Mid-Size",
      description: "Comprehensive AI marketing platform for automated campaigns and personalized content",
      price: 85000,
      pricingModel: "project-based",
      aiScore: 96,
      features: ["Campaign automation", "Content personalization", "A/B testing", "Performance analytics"],
      benefits: ["Increased conversions", "Better ROI", "Time savings", "Personalized experiences"],
      useCases: ["B2B marketing", "E-commerce", "SaaS", "Retail"],
      aiCapabilities: ["Natural Language Processing", "Machine Learning", "Predictive Analytics", "Computer Vision"],
      tags: ["AI Marketing", "Automation", "Personalization", "Campaign Management", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Intelligent Financial Risk Management",
      category: "Finance",
      businessSize: "Enterprise",
      description: "AI-powered risk assessment and financial modeling for enterprise financial operations",
      price: 180000,
      pricingModel: "project-based",
      aiScore: 99,
      features: ["Risk assessment", "Fraud detection", "Portfolio optimization", "Regulatory compliance"],
      benefits: ["Risk reduction", "Compliance automation", "Better decisions", "Cost savings"],
      useCases: ["Building2s", "Investment firms", "Insurance", "Corporate finance"],
      aiCapabilities: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Predictive Analytics"],
      tags: ["Financial AI", "Risk Management", "Fraud Detection", "Compliance", "Portfolio Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "AI-Powered HR & Talent Management",
      category: "HR",
      businessSize: "Mid-Size",
      description: "Intelligent HR platform for recruitment, employee engagement, and performance management",
      price: 75000,
      pricingModel: "project-based",
      aiScore: 94,
      features: ["AI recruitment", "Employee analytics", "Performance tracking", "Engagement monitoring"],
      benefits: ["Better hiring", "Employee retention", "Performance improvement", "Data insights"],
      useCases: ["Large companies", "HR agencies", "Startups", "Consulting firms"],
      aiCapabilities: ["Natural Language Processing", "Machine Learning", "Predictive Analytics", "Sentiment Analysis"],
      tags: ["HR Tech", "AI Recruitment", "Employee Analytics", "Performance Management", "Talent Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Smart Document Processing & Analysis",
      category: "Document AI",
      businessSize: "Small",
      description: "AI-powered document processing, analysis, and intelligent information extraction",
      price: 45000,
      pricingModel: "project-based",
      aiScore: 95,
      features: ["Document OCR", "Information extraction", "Contract analysis", "Compliance checking"],
      benefits: ["Time savings", "Accuracy improvement", "Cost reduction", "Better compliance"],
      useCases: ["Legal firms", "Insurance", "Healthcare", "Financial services"],
      aiCapabilities: ["Optical Character Recognition", "Natural Language Processing", "Machine Learning", "Computer Vision"],
      tags: ["Document AI", "OCR", "Information Extraction", "Contract Analysis", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "AI Customer Service & Support",
      category: "Customer Service",
      businessSize: "Mid-Size",
      description: "Intelligent customer service platform with chatbots and automated support solutions",
      price: 65000,
      pricingModel: "project-based",
      aiScore: 93,
      features: ["AI chatbots", "Ticket automation", "Knowledge base", "Customer analytics"],
      benefits: ["24/7 support", "Cost reduction", "Better customer experience", "Faster resolution"],
      useCases: ["E-commerce", "SaaS", "Retail", "Service businesses"],
      aiCapabilities: ["Natural Language Processing", "Machine Learning", "Conversational AI", "Sentiment Analysis"],
      tags: ["Customer Service", "AI Chatbots", "Support Automation", "Customer Experience", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Predictive Maintenance & IoT Analytics",
      category: "IoT & Maintenance",
      businessSize: "Enterprise",
      description: "AI-driven predictive maintenance and IoT analytics for industrial operations",
      price: 110000,
      pricingModel: "project-based",
      aiScore: 96,
      features: ["Equipment monitoring", "Failure prediction", "Maintenance scheduling", "Performance analytics"],
      benefits: ["Reduced downtime", "Cost savings", "Safety improvement", "Efficiency gains"],
      useCases: ["Manufacturing", "Energy", "Transportation", "Healthcare"],
      aiCapabilities: ["Machine Learning", "Predictive Analytics", "IoT Integration", "Computer Vision"],
      tags: ["Predictive Maintenance", "IoT Analytics", "Industrial AI", "Equipment Monitoring", "Maintenance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "AI-Powered Sales Intelligence",
      category: "Sales",
      businessSize: "Mid-Size",
      description: "Intelligent sales platform with lead scoring, forecasting, and performance optimization",
      price: 70000,
      pricingModel: "project-based",
      aiScore: 94,
      features: ["Lead scoring", "Sales forecasting", "Performance analytics", "Pipeline optimization"],
      benefits: ["Increased sales", "Better forecasting", "Improved efficiency", "Data insights"],
      useCases: ["B2B sales", "Enterprise sales", "Sales agencies", "Consulting"],
      aiCapabilities: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Data Mining"],
      tags: ["Sales AI", "Lead Scoring", "Sales Forecasting", "Performance Analytics", "Pipeline Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "Intelligent Business Process Automation",
      category: "Process Automation",
      businessSize: "Small",
      description: "AI-powered business process automation for workflow optimization and efficiency",
      price: 55000,
      pricingModel: "project-based",
      aiScore: 92,
      features: ["Workflow automation", "Process optimization", "Decision automation", "Performance monitoring"],
      benefits: ["Increased efficiency", "Cost reduction", "Error elimination", "Better compliance"],
      useCases: ["Manufacturing", "Healthcare", "Finance", "Service businesses"],
      aiCapabilities: ["Machine Learning", "Process Mining", "Decision Trees", "Optimization Algorithms"],
      tags: ["Process Automation", "Workflow Optimization", "Decision Automation", "Efficiency", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Analytics', 'Supply Chain', 'Marketing', 'Finance', 'HR', 'Document AI', 'Customer Service', 'IoT & Maintenance', 'Sales', 'Process Automation'];
  const businessSizes = ['all', 'Small', 'Mid-Size', 'Enterprise'];

  const filteredSolutions = aiBusinessSolutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesBusinessSize = selectedBusinessSize === 'all' || solution.businessSize === selectedBusinessSize;
    
    return matchesSearch && matchesCategory && matchesBusinessSize;
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

  const getAIScoreColor = (score: number) => {
    if (score >= 95) return 'text-purple-500';
    if (score >= 90) return 'text-blue-500';
    if (score >= 85) return 'text-green-500';
    return 'text-yellow-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            AI Business Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions designed for enterprise success and operational excellence
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI business solutions..."
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
              value={selectedBusinessSize}
              onChange={(e) => setSelectedBusinessSize(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {businessSizes.map(size => (
                <option key={size} value={size} className="bg-gray-800 text-white">
                  {size === 'all' ? 'All Business Sizes' : size}
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
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAIScoreColor(solution.aiScore)} bg-opacity-20 bg-current`}>
                      AI Score: {solution.aiScore}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                      {solution.businessSize}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{solution.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold">{formatPrice(solution.price, solution.pricingModel)}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{solution.businessSize} Business</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                  {solution.features.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded">
                      +{solution.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">AI Capabilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.aiCapabilities.map((capability, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.benefits.map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.useCases.map((useCase, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Contact Information:</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span>{solution.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span>{solution.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Globe className="w-4 h-4" />
                    <a href={solution.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      {solution.contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI experts are ready to help you implement cutting-edge AI solutions that will drive growth, efficiency, and innovation in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-blue-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessSolutions;