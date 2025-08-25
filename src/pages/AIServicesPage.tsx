import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // AI Service data directly in the component
  const aiServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      category: "Business Intelligence",
      description: "Advanced analytics and business intelligence powered by machine learning algorithms",
      price: 2500,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage"],
      useCases: ["Financial analysis", "Sales forecasting", "Customer behavior analysis", "Performance tracking"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"]
    },
    {
      id: 2,
      name: "Natural Language Processing Solutions",
      category: "Language AI",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding",
      price: 1800,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Chatbot integration"],
      benefits: ["Improved customer service", "Automated content analysis", "Multilingual support", "Efficiency gains"],
      useCases: ["Customer support", "Content moderation", "Market research", "Document analysis"],
      tags: ["NLP", "Language AI", "Text Analysis", "Sentiment Analysis"]
    },
    {
      id: 3,
      name: "Computer Vision & Image Recognition",
      category: "Visual AI",
      description: "Computer vision solutions for image and video analysis, object detection, and pattern recognition",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis"],
      benefits: ["Automated quality control", "Security enhancement", "Process automation", "Data extraction"],
      useCases: ["Manufacturing QC", "Security systems", "Retail analytics", "Medical imaging"],
      tags: ["Computer Vision", "Image Recognition", "Object Detection", "Video Analysis"]
    },
    {
      id: 4,
      name: "Predictive Analytics & Forecasting",
      category: "Predictive AI",
      description: "AI-powered predictive analytics for forecasting trends, risks, and opportunities",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 91,
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Anomaly detection"],
      benefits: ["Proactive decision making", "Risk mitigation", "Resource optimization", "Competitive advantage"],
      useCases: ["Supply chain optimization", "Financial risk management", "Sales forecasting", "Maintenance prediction"],
      tags: ["Predictive Analytics", "Forecasting", "Risk Assessment", "Trend Analysis"]
    },
    {
      id: 5,
      name: "AI-Powered Automation",
      category: "Process Automation",
      description: "Intelligent automation solutions that learn and adapt to optimize business processes",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 89,
      features: ["Process optimization", "Workflow automation", "Decision automation", "Learning algorithms"],
      benefits: ["Increased efficiency", "Cost reduction", "Error reduction", "Scalability"],
      useCases: ["Customer service", "Data entry", "Document processing", "Quality control"],
      tags: ["Automation", "Process Optimization", "Workflow", "Decision Making"]
    },
    {
      id: 6,
      name: "AI Chatbot & Virtual Assistants",
      category: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants for customer service and business automation",
      price: 1500,
      pricingModel: "monthly",
      aiScore: 88,
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      benefits: ["24/7 availability", "Cost reduction", "Improved customer satisfaction", "Scalable support"],
      useCases: ["Customer support", "Sales assistance", "Appointment booking", "Information retrieval"],
      tags: ["Chatbot", "Virtual Assistant", "Conversational AI", "Customer Service"]
    },
    // NEW INNOVATIVE AI SERVICES ADDED
    {
      id: 7,
      name: "Quantum AI Computing Platform",
      category: "Quantum AI",
      description: "Revolutionary quantum computing platform for AI model training and optimization",
      price: 8500,
      pricingModel: "monthly",
      aiScore: 98,
      features: ["Quantum algorithms", "AI model acceleration", "Quantum machine learning", "Research tools"],
      benefits: ["Exponential speed increase", "Breakthrough AI capabilities", "Research leadership", "Competitive advantage"],
      useCases: ["Drug discovery", "Financial modeling", "Climate simulation", "AI research"],
      tags: ["Quantum AI", "Quantum Computing", "Machine Learning", "Research", "Innovation"]
    },
    {
      id: 8,
      name: "Neuromorphic AI Systems",
      category: "Neuromorphic AI",
      description: "Brain-inspired AI systems that mimic human neural processing for advanced cognitive tasks",
      price: 4200,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Brain-like processing", "Cognitive computing", "Adaptive learning", "Energy efficiency"],
      benefits: ["Human-like reasoning", "Lower power consumption", "Adaptive intelligence", "Cognitive enhancement"],
      useCases: ["Autonomous vehicles", "Robotics", "Medical diagnosis", "Cognitive computing"],
      tags: ["Neuromorphic", "Cognitive AI", "Brain-inspired", "Adaptive Learning", "Robotics"]
    },
    {
      id: 9,
      name: "Federated Learning Platform",
      category: "Privacy-Preserving AI",
      description: "Distributed AI training platform that preserves data privacy while enabling collaborative learning",
      price: 3800,
      pricingModel: "monthly",
      aiScore: 93,
      features: ["Privacy-preserving training", "Distributed learning", "Secure aggregation", "Model sharing"],
      benefits: ["Data privacy protection", "Collaborative learning", "Regulatory compliance", "Reduced data costs"],
      useCases: ["Healthcare AI", "Financial services", "Cross-company collaboration", "Privacy-sensitive domains"],
      tags: ["Federated Learning", "Privacy", "Distributed AI", "Collaboration", "Security"]
    },
    {
      id: 10,
      name: "AI-Powered Drug Discovery",
      category: "Healthcare AI",
      description: "Advanced AI platform for pharmaceutical research, drug discovery, and clinical trial optimization",
      price: 6500,
      pricingModel: "monthly",
      aiScore: 97,
      features: ["Molecular modeling", "Drug screening", "Clinical trial design", "Biomarker discovery"],
      benefits: ["Faster drug development", "Cost reduction", "Success rate improvement", "Patient safety"],
      useCases: ["Pharmaceutical research", "Clinical trials", "Personalized medicine", "Drug repurposing"],
      tags: ["Drug Discovery", "Healthcare AI", "Pharmaceuticals", "Clinical Trials", "Personalized Medicine"]
    },
    {
      id: 11,
      name: "AI-Powered Climate Modeling",
      category: "Environmental AI",
      description: "Advanced climate modeling and environmental prediction using AI and machine learning",
      price: 5200,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Climate prediction", "Environmental monitoring", "Carbon tracking", "Disaster forecasting"],
      benefits: ["Climate action planning", "Risk mitigation", "Sustainability insights", "Policy support"],
      useCases: ["Government planning", "Agriculture optimization", "Disaster preparedness", "Environmental protection"],
      tags: ["Climate AI", "Environmental Modeling", "Sustainability", "Risk Assessment", "Policy"]
    },
    {
      id: 12,
      name: "AI-Powered Space Exploration",
      category: "Space AI",
      description: "AI solutions for space exploration, satellite data analysis, and astronomical research",
      price: 7800,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Satellite data analysis", "Space object detection", "Astronomical research", "Mission planning"],
      benefits: ["Space exploration advancement", "Scientific discovery", "Mission optimization", "Cost efficiency"],
      useCases: ["NASA missions", "Satellite operations", "Astronomical research", "Space debris tracking"],
      tags: ["Space AI", "Satellite Data", "Astronomy", "Space Exploration", "Research"]
    },
    {
      id: 13,
      name: "AI-Powered Financial Trading",
      category: "Financial AI",
      description: "Advanced AI trading platform with real-time market analysis and automated trading strategies",
      price: 4500,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Real-time analysis", "Algorithmic trading", "Risk management", "Portfolio optimization"],
      benefits: ["Improved returns", "Risk reduction", "24/7 trading", "Emotion-free decisions"],
      useCases: ["Hedge funds", "Investment firms", "Trading desks", "Personal investing"],
      tags: ["Financial AI", "Algorithmic Trading", "Risk Management", "Portfolio Optimization", "Trading"]
    },
    {
      id: 14,
      name: "AI-Powered Cybersecurity",
      category: "Security AI",
      description: "Next-generation cybersecurity platform with AI-powered threat detection and response",
      price: 3900,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Zero-day protection"],
      benefits: ["Enhanced security", "Faster response", "Proactive protection", "Cost reduction"],
      useCases: ["Enterprise security", "Government agencies", "Financial institutions", "Healthcare"],
      tags: ["Cybersecurity", "Threat Detection", "Behavioral Analysis", "Zero-day", "Security"]
    },
    {
      id: 15,
      name: "AI-Powered Creative Suite",
      category: "Creative AI",
      description: "Comprehensive AI-powered creative platform for content generation, design, and multimedia creation",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Content generation", "Design automation", "Video creation", "Music composition"],
      benefits: ["Creative efficiency", "Cost reduction", "24/7 creativity", "Quality improvement"],
      useCases: ["Marketing agencies", "Content creators", "Design studios", "Entertainment"],
      tags: ["Creative AI", "Content Generation", "Design", "Video", "Music"]
    },
    {
      id: 16,
      name: "AI-Powered Education Platform",
      category: "Educational AI",
      description: "Personalized learning platform with AI-powered tutoring, assessment, and curriculum optimization",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 91,
      features: ["Personalized learning", "Adaptive assessment", "Intelligent tutoring", "Progress tracking"],
      benefits: ["Improved learning outcomes", "Personalized experience", "Teacher efficiency", "Student engagement"],
      useCases: ["K-12 education", "Higher education", "Corporate training", "Online learning"],
      tags: ["Educational AI", "Personalized Learning", "Adaptive Assessment", "Tutoring", "Education"]
    }
  ];

  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Quantum AI', 'Neuromorphic AI', 'Privacy-Preserving AI', 'Healthcare AI', 'Environmental AI', 'Space AI', 'Financial AI', 'Security AI', 'Creative AI', 'Educational AI'];

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
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive innovation across all aspects of your organization.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
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
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getAIScoreColor(service.aiScore)}`}>
                      AI Score: {service.aiScore}%
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full ml-2">
                    {service.pricingModel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <li key={index} className="flex items-center">
                        <Zap className="w-4 h-4 text-green-400 mr-2" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Harness AI Power?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;