import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, ArrowRight, CheckCircle, TrendingUp, BarChart3, Target, Rocket, Lock, Sparkles, Layers, Code, Database as DatabaseIcon2, Globe2, Shield as ShieldIcon2, Zap as ZapIcon2, Brain as BrainIcon, Cpu as CpuIcon, Cloud as CloudIcon, Database as DatabaseIcon3, Shield as ShieldIcon3, Zap as ZapIcon3, MessageSquare, Atom } from 'lucide-react';
import { motion } from 'framer-motion';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Enhanced AI Service data with more innovative services
  const aiServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      category: "Business Intelligence",
      description: "Advanced analytics and business intelligence powered by machine learning algorithms for data-driven decision making",
      price: 2500,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization", "Natural language queries", "Automated insights"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage", "Real-time insights", "Automated reporting"],
      useCases: ["Financial analysis", "Sales forecasting", "Customer behavior analysis", "Performance tracking", "Market research", "Operational optimization"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning", "Predictive Analytics"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$2,500 - $8,000/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Natural Language Processing Solutions",
      category: "Language AI",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding with multilingual support",
      price: 1800,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Chatbot integration", "Document processing", "Voice recognition"],
      benefits: ["Improved customer service", "Automated content analysis", "Multilingual support", "Efficiency gains", "24/7 availability", "Cost reduction"],
      useCases: ["Customer support", "Content moderation", "Market research", "Document analysis", "Voice assistants", "Translation services"],
      tags: ["NLP", "Language AI", "Text Analysis", "Sentiment Analysis", "Machine Translation"],
      innovationLevel: "Advanced",
      marketPrice: "$1,800 - $5,000/month",
      deliveryTime: "4-6 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Computer Vision & Image Recognition",
      category: "Visual AI",
      description: "Computer vision solutions for image and video analysis, object detection, and pattern recognition with real-time processing",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis", "Real-time processing", "Custom model training"],
      benefits: ["Automated quality control", "Security enhancement", "Process automation", "Data extraction", "24/7 monitoring", "Accuracy improvement"],
      useCases: ["Manufacturing QC", "Security systems", "Retail analytics", "Medical imaging", "Autonomous vehicles", "Surveillance"],
      tags: ["Computer Vision", "Image Recognition", "Object Detection", "Video Analysis", "Deep Learning"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$3,200 - $10,000/month",
      deliveryTime: "8-10 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Predictive Analytics & Forecasting",
      category: "Predictive AI",
      description: "AI-powered predictive analytics for forecasting trends, risks, and opportunities with high accuracy models",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 91,
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Anomaly detection", "Scenario modeling", "Real-time updates"],
      benefits: ["Proactive decision making", "Risk mitigation", "Resource optimization", "Competitive advantage", "Cost savings", "Improved planning"],
      useCases: ["Supply chain optimization", "Financial risk management", "Sales forecasting", "Maintenance prediction", "Market analysis", "Inventory management"],
      tags: ["Predictive Analytics", "Forecasting", "Risk Assessment", "Trend Analysis", "Machine Learning"],
      innovationLevel: "Advanced",
      marketPrice: "$2,800 - $7,500/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "AI-Powered Automation",
      category: "Process Automation",
      description: "Intelligent automation solutions that learn and adapt to optimize business processes with minimal human intervention",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 89,
      features: ["Process optimization", "Workflow automation", "Decision automation", "Learning algorithms", "Integration APIs", "Performance monitoring"],
      benefits: ["Increased efficiency", "Cost reduction", "Error reduction", "Scalability", "24/7 operation", "Continuous improvement"],
      useCases: ["Customer service", "Data entry", "Document processing", "Quality control", "Supply chain", "Financial operations"],
      tags: ["Automation", "Process Optimization", "Workflow", "Decision Making", "RPA"],
      innovationLevel: "Advanced",
      marketPrice: "$2,200 - $6,000/month",
      deliveryTime: "5-7 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "AI Chatbot & Virtual Assistants",
      category: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants for customer service and business automation with natural conversations",
      price: 1500,
      pricingModel: "monthly",
      aiScore: 88,
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard", "Custom training", "Voice interface"],
      benefits: ["24/7 availability", "Cost reduction", "Improved customer satisfaction", "Scalable support", "Consistent service", "Quick responses"],
      useCases: ["Customer support", "Sales assistance", "Appointment booking", "Information retrieval", "Order tracking", "Technical support"],
      tags: ["Chatbot", "Virtual Assistant", "Conversational AI", "Customer Service", "NLP"],
      innovationLevel: "Advanced",
      marketPrice: "$1,500 - $4,000/month",
      deliveryTime: "3-4 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "Quantum Machine Learning",
      category: "Quantum AI",
      description: "Revolutionary quantum machine learning platform that combines quantum computing with AI for exponential speedup",
      price: 5000,
      pricingModel: "monthly",
      aiScore: 98,
      features: ["Quantum ML algorithms", "Hybrid quantum-classical training", "Optimization solvers", "Quantum feature selection", "Model acceleration", "Expert consultation"],
      benefits: ["Exponential speedup", "Solve intractable problems", "Future-proof technology", "Competitive advantage", "Research leadership", "Innovation edge"],
      useCases: ["Drug discovery", "Financial modeling", "Supply chain optimization", "Climate modeling", "Cryptography", "Scientific research"],
      tags: ["Quantum Computing", "Machine Learning", "AI", "Optimization", "Research"],
      innovationLevel: "Revolutionary",
      marketPrice: "$5,000 - $15,000/month",
      deliveryTime: "10-12 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Edge AI Computing Platform",
      category: "Edge AI",
      description: "Distributed AI computing platform that brings machine learning to edge devices for real-time processing",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 93,
      features: ["Edge AI deployment", "Real-time processing", "Offline capabilities", "Device management", "Model optimization", "Security protocols"],
      benefits: ["Real-time processing", "Reduced latency", "Lower bandwidth costs", "Enhanced privacy", "Offline operation", "Scalability"],
      useCases: ["IoT devices", "Autonomous vehicles", "Smart cities", "Industrial automation", "Healthcare monitoring", "Retail analytics"],
      tags: ["Edge Computing", "AI", "IoT", "Real-time Processing", "Device Management"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$2,800 - $8,000/month",
      deliveryTime: "8-10 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "AI-Powered Cybersecurity",
      category: "AI Security",
      description: "Advanced AI cybersecurity platform that detects and prevents threats in real-time using behavioral analysis",
      price: 3500,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Threat detection", "Behavioral analysis", "Real-time monitoring", "Incident response", "Vulnerability assessment", "Compliance reporting"],
      benefits: ["Proactive threat prevention", "Reduced false positives", "Faster incident response", "Compliance automation", "Cost-effective security", "24/7 protection"],
      useCases: ["Network security", "Endpoint protection", "Cloud security", "Compliance management", "Incident response", "Threat hunting"],
      tags: ["AI", "Cybersecurity", "Threat Detection", "Compliance", "Security Analytics"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$3,500 - $10,000/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "AI-Powered Healthcare Analytics",
      category: "Healthcare AI",
      description: "Advanced healthcare analytics platform that uses AI to improve patient outcomes and optimize operations",
      price: 4000,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Patient outcome prediction", "Operational optimization", "Risk assessment", "Clinical decision support", "Population health analytics", "Cost analysis"],
      benefits: ["Improved patient outcomes", "Reduced healthcare costs", "Optimized resource allocation", "Enhanced clinical decisions", "Regulatory compliance", "Population health insights"],
      useCases: ["Clinical decision support", "Population health management", "Operational optimization", "Risk assessment", "Quality improvement", "Research"],
      tags: ["Healthcare", "AI", "Analytics", "Clinical Decision Support", "Population Health"],
      innovationLevel: "Advanced",
      marketPrice: "$4,000 - $12,000/month",
      deliveryTime: "8-10 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "AI-Powered Financial Services",
      category: "FinTech AI",
      description: "Intelligent financial services platform that uses AI for risk assessment, fraud detection, and personalized banking",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Risk assessment", "Fraud detection", "Personalized banking", "Investment recommendations", "Credit scoring", "Regulatory compliance"],
      benefits: ["Reduced fraud losses", "Improved risk management", "Personalized services", "Regulatory compliance", "Cost reduction", "Customer satisfaction"],
      useCases: ["Fraud detection", "Credit assessment", "Investment advisory", "Risk management", "Compliance monitoring", "Customer service"],
      tags: ["FinTech", "AI", "Risk Management", "Fraud Detection", "Personalization"],
      innovationLevel: "Advanced",
      marketPrice: "$3,200 - $9,000/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "AI-Powered Supply Chain",
      category: "Supply Chain AI",
      description: "Intelligent supply chain platform that uses AI to optimize inventory, predict demand, and streamline logistics",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 90,
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Supplier management", "Real-time tracking", "Performance analytics"],
      benefits: ["Reduced inventory costs", "Improved delivery times", "Increased efficiency", "Reduced stockouts", "Optimized supplier relationships", "Cost savings"],
      useCases: ["Retail inventory", "Manufacturing supply chains", "E-commerce logistics", "Distribution optimization", "Procurement automation", "Warehouse management"],
      tags: ["AI", "Supply Chain", "Logistics", "Inventory Management", "Optimization"],
      innovationLevel: "Advanced",
      marketPrice: "$2,800 - $7,500/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Quantum AI', 'Edge AI', 'AI Security', 'Healthcare AI', 'FinTech AI', 'Supply Chain AI'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
    if (score >= 95) return 'text-emerald-400';
    if (score >= 90) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 bg-purple-400/20';
      case 'Cutting-edge': return 'text-blue-400 bg-blue-400/20';
      case 'Advanced': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Business Intelligence': return <BarChart3 className="w-6 h-6" />;
      case 'Language AI': return <Globe2 className="w-6 h-6" />;
      case 'Visual AI': return <Eye className="w-6 h-6" />;
      case 'Predictive AI': return <TrendingUp className="w-6 h-6" />;
      case 'Process Automation': return <Settings className="w-6 h-6" />;
      case 'Conversational AI': return <MessageSquare className="w-6 h-6" />;
      case 'Quantum AI': return <Atom className="w-6 h-6" />;
      case 'Edge AI': return <Cpu className="w-6 h-6" />;
      case 'AI Security': return <Shield className="w-6 h-6" />;
      case 'Healthcare AI': return <Heart className="w-6 h-6" />;
      case 'FinTech AI': return <CreditCard className="w-6 h-6" />;
      case 'Supply Chain AI': return <Truck className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 bg-gradient-to-r from-purple-600/90 to-blue-600/90 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive innovation across all aspects of your organization.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brain className="w-5 h-5 text-purple-300" />
                <span className="text-purple-100">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Eye className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">Computer Vision</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe2 className="w-5 h-5 text-green-300" />
                <span className="text-green-100">NLP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All AI Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getInnovationLevelColor(service.innovationLevel)}`}>
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getAIScoreColor(service.aiScore)}`}>
                      AI Score: {service.aiScore}%
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full mb-2 border border-purple-500/30">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600/20 text-slate-300 text-xs px-3 py-1 rounded-full ml-2 border border-slate-500/30">
                    {service.pricingModel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Key Features:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    Use Cases:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <li key={index} className="flex items-center">
                        <Zap className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded border border-slate-600/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                  <span>Delivery: {service.deliveryTime}</span>
                  <span>Market: {service.marketPrice}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm py-16 border-t border-slate-700/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Harness AI Power?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Contact our expert team to discuss your AI needs and get a customized solution that transforms your business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Phone className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">+1 302 464 0950</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MapPin className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Our Website
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 group"
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

export default AIServicesPage;