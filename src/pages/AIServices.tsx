import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Package, Server, Lock, Code, Monitor, Smartphone, Wifi, Database as DatabaseIcon2, Globe as GlobeIcon, Shield as ShieldIcon2, Cpu as CpuIcon, Sparkles, Robot, CircuitBoard, Microchip, Eye as EyeIcon, MessageCircle, Brain as BrainIcon, Zap as ZapIcon3 } from 'lucide-react';

const AIServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // AI Services data
  const aiServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      category: "Business Intelligence",
      description: "Advanced AI-driven analytics and business intelligence solutions for data-driven decision making",
      features: ["Predictive analytics", "Natural language queries", "Automated reporting", "Real-time dashboards", "Machine learning models"],
      benefits: ["Better decision making", "Increased efficiency", "Competitive advantage", "Cost reduction"],
      targetAudience: ["Enterprises", "Financial services", "Retail", "Manufacturing"],
      pricing: "Custom pricing",
      marketPrice: "$50,000 - $500,000",
      implementationTime: "8-20 weeks",
      supportLevel: "AI specialists + ongoing optimization",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-business-intelligence",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      },
      aiCapabilities: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Computer Vision"],
      useCases: ["Customer segmentation", "Demand forecasting", "Fraud detection", "Process optimization"]
    },
    {
      id: 2,
      name: "Custom AI Solutions Development",
      category: "AI Development",
      description: "Tailored AI solutions built specifically for your business needs and industry requirements",
      features: ["Custom model development", "Data preprocessing", "API integration", "Scalable architecture", "Continuous learning"],
      benefits: ["Competitive advantage", "Process automation", "Cost savings", "Innovation leadership"],
      targetAudience: ["Enterprises", "Startups", "Tech companies", "Research institutions"],
      pricing: "Project-based",
      marketPrice: "$100,000 - $1,000,000+",
      implementationTime: "12-32 weeks",
      supportLevel: "Full AI development team + maintenance",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/custom-ai-solutions",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      },
      aiCapabilities: ["Deep Learning", "Neural Networks", "Reinforcement Learning", "Transfer Learning"],
      useCases: ["Process automation", "Quality control", "Predictive maintenance", "Customer insights"]
    },
    {
      id: 3,
      name: "AI Chatbots & Virtual Assistants",
      category: "Conversational AI",
      description: "Intelligent conversational AI solutions for customer service, sales, and internal operations",
      features: ["Natural language understanding", "Multi-language support", "Integration APIs", "Analytics dashboard", "Continuous learning"],
      benefits: ["24/7 availability", "Cost reduction", "Improved customer satisfaction", "Scalability"],
      targetAudience: ["E-commerce", "Customer service", "Healthcare", "Financial services"],
      pricing: "Project-based",
      marketPrice: "$25,000 - $150,000",
      implementationTime: "6-16 weeks",
      supportLevel: "AI engineers + ongoing training",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-chatbots",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      },
      aiCapabilities: ["Natural Language Processing", "Intent Recognition", "Sentiment Analysis", "Context Management"],
      useCases: ["Customer support", "Lead qualification", "Appointment booking", "FAQ handling"]
    },
    {
      id: 4,
      name: "Computer Vision & Image Recognition",
      category: "Computer Vision",
      description: "Advanced computer vision solutions for quality control, security, and automation",
      features: ["Image recognition", "Object detection", "Facial recognition", "Video analysis", "Real-time processing"],
      benefits: ["Quality improvement", "Security enhancement", "Automation", "Cost reduction"],
      targetAudience: ["Manufacturing", "Security", "Healthcare", "Retail"],
      pricing: "Project-based",
      marketPrice: "$40,000 - $300,000",
      implementationTime: "8-20 weeks",
              supportLevel: "Computer vision specialists + optimization",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/computer-vision",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      },
      aiCapabilities: ["Convolutional Neural Networks", "Object Detection", "Image Segmentation", "Video Analysis"],
      useCases: ["Quality control", "Security monitoring", "Medical imaging", "Retail analytics"]
    },
    {
      id: 5,
      name: "Predictive Analytics & Forecasting",
      category: "Predictive Analytics",
      description: "AI-powered predictive analytics for business forecasting and trend analysis",
      features: ["Time series analysis", "Risk assessment", "Demand forecasting", "Anomaly detection", "Scenario modeling"],
      benefits: ["Better planning", "Risk mitigation", "Cost optimization", "Strategic advantage"],
      targetAudience: ["Financial services", "Manufacturing", "Retail", "Healthcare"],
      pricing: "Project-based",
      marketPrice: "$35,000 - $250,000",
      implementationTime: "6-18 weeks",
              supportLevel: "Data scientists + ongoing model updates",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/predictive-analytics",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      },
      aiCapabilities: ["Time Series Analysis", "Regression Models", "Classification", "Ensemble Methods"],
      useCases: ["Sales forecasting", "Risk assessment", "Inventory optimization", "Customer behavior prediction"]
    },
    {
      id: 6,
      name: "AI Strategy & Consulting",
      category: "AI Consulting",
      description: "Strategic AI consulting to help organizations plan and implement AI initiatives",
      features: ["AI readiness assessment", "Strategy development", "Technology selection", "Implementation roadmap", "Change management"],
      benefits: ["Clear AI roadmap", "Risk mitigation", "Cost optimization", "Competitive advantage"],
      targetAudience: ["Enterprises", "Government", "Healthcare", "Financial services"],
      pricing: "Consulting-based",
      marketPrice: "$15,000 - $200,000",
      implementationTime: "4-16 weeks",
              supportLevel: "AI strategists + ongoing guidance",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-consulting",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      },
      aiCapabilities: ["Strategy Development", "Technology Assessment", "Implementation Planning", "Change Management"],
      useCases: ["AI transformation", "Digital strategy", "Technology roadmap", "Organizational change"]
    }
  ];

  const categories = ['all', 'Business Intelligence', 'AI Development', 'Conversational AI', 'Computer Vision', 'Predictive Analytics', 'AI Consulting'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Business Intelligence': return <BarChart3 className="w-6 h-6" />;
      case 'AI Development': return <BrainIcon className="w-6 h-6" />;
      case 'Conversational AI': return <MessageCircle className="w-6 h-6" />;
      case 'Computer Vision': return <EyeIcon className="w-6 h-6" />;
      case 'Predictive Analytics': return <TrendingUp className="w-6 h-6" />;
      case 'AI Consulting': return <Sparkles className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Business Intelligence': return 'text-purple-400';
      case 'AI Development': return 'text-green-400';
      case 'Conversational AI': return 'text-blue-400';
      case 'Computer Vision': return 'text-cyan-400';
      case 'Predictive Analytics': return 'text-orange-400';
      case 'AI Consulting': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
            AI & Machine Learning Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions designed to transform your business operations and drive innovation
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
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
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-purple-400 bg-purple-400 bg-opacity-20">
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
                <h4 className="text-sm font-semibold text-white mb-2">AI Capabilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.aiCapabilities.slice(0, 3).map((capability, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 2).map((useCase, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-pink-500/20 text-pink-300 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Support: {service.supportLevel}</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
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
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-gray-300 mb-6">
              Our AI solutions are designed to transform your business operations and drive innovation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">{aiServices[0].contactInfo.phone}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">{aiServices[0].contactInfo.email}</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
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

export default AIServices;