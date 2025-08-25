import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wifi, Smartphone, Server, Code, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Satellite, Rocket, Atom, Dna, Brain as BrainIcon, Microchip, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Globe as GlobeIcon, Network as NetworkIcon, Cpu as CpuIcon, Server as ServerIcon, Code as CodeIcon, Lock as LockIcon, Key as KeyIcon, Bug as BugIcon, CheckCircle as CheckCircleIcon, AlertTriangle as AlertTriangleIcon, Info as InfoIcon, ArrowRight as ArrowRightIcon, Glasses, Cpu as CpuIcon2, Brain as BrainIcon2, Zap as ZapIcon4, Shield as ShieldIcon3, Database as DatabaseIcon3, Cloud as CloudIcon, Network as NetworkIcon2, Server as ServerIcon2, Code as CodeIcon2, Lock as LockIcon2, Key as KeyIcon2, Bug as BugIcon2, CheckCircle as CheckCircleIcon2, AlertTriangle as AlertTriangleIcon2, Info as InfoIcon2, ArrowRight as ArrowRightIcon2 } from 'lucide-react';

const AIServicesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');

  // Enhanced AI Services data with more innovative offerings
  const aiServices = [
    {
      id: 1,
      name: "Quantum AI Platform",
      category: "Quantum AI",
      complexity: "Advanced",
      description: "Revolutionary quantum computing-powered AI platform for solving complex computational problems",
      price: 5000,
      pricingModel: "monthly",
      aiScore: 98,
      features: ["Quantum algorithms", "Superposition computing", "Entanglement optimization", "Quantum ML models"],
      benefits: ["Exponential speedup", "Complex problem solving", "Research breakthrough", "Competitive advantage"],
      useCases: ["Drug discovery", "Financial modeling", "Climate simulation", "Cryptography"],
      tags: ["Quantum Computing", "AI", "Advanced Algorithms", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Autonomous AI Systems",
      category: "Autonomous AI",
      complexity: "Advanced",
      description: "Self-learning autonomous systems for industrial automation and decision-making",
      price: 3500,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Self-learning algorithms", "Decision automation", "Predictive maintenance", "Adaptive control"],
      benefits: ["Operational efficiency", "Cost reduction", "24/7 operation", "Continuous improvement"],
      useCases: ["Manufacturing", "Logistics", "Energy management", "Smart cities"],
      tags: ["Autonomous Systems", "Machine Learning", "Automation", "IoT", "Industry 4.0"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Edge AI Computing",
      category: "Edge AI",
      complexity: "Intermediate",
      description: "AI processing at the edge for real-time decision making and reduced latency",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Local AI processing", "Real-time inference", "Low latency", "Offline capability"],
      benefits: ["Instant decisions", "Bandwidth savings", "Privacy protection", "Cost efficiency"],
      useCases: ["Autonomous vehicles", "Smart cameras", "IoT devices", "Mobile apps"],
      tags: ["Edge Computing", "AI", "Real-time", "IoT", "Performance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Federated Learning Platform",
      category: "Privacy AI",
      complexity: "Advanced",
      description: "Distributed AI training without sharing raw data for privacy-preserving machine learning",
      price: 4200,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Distributed training", "Privacy preservation", "Data collaboration", "Secure aggregation"],
      benefits: ["Data privacy", "Regulatory compliance", "Collaborative learning", "Security"],
      useCases: ["Healthcare", "Financial services", "Cross-company collaboration", "Research"],
      tags: ["Federated Learning", "Privacy", "Distributed AI", "Security", "Collaboration"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "AI-Powered Cybersecurity",
      category: "Security AI",
      complexity: "Advanced",
      description: "Intelligent threat detection and response using advanced AI algorithms",
      price: 3800,
      pricingModel: "monthly",
      aiScore: 97,
      features: ["Behavioral analysis", "Threat hunting", "Automated response", "Risk assessment"],
      benefits: ["Proactive defense", "Reduced false positives", "24/7 monitoring", "Cost savings"],
      useCases: ["Enterprise security", "Financial institutions", "Healthcare", "Government"],
      tags: ["Cybersecurity", "AI", "Threat Detection", "Automation", "Risk Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Multimodal AI Studio",
      category: "Multimodal AI",
      complexity: "Intermediate",
      description: "AI platform for processing and understanding multiple data types simultaneously",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 93,
      features: ["Text processing", "Image analysis", "Audio recognition", "Video understanding"],
      benefits: ["Comprehensive insights", "Better accuracy", "Unified platform", "Cost efficiency"],
      useCases: ["Content moderation", "Customer service", "Media analysis", "Research"],
      tags: ["Multimodal AI", "Computer Vision", "NLP", "Audio Processing", "Video Analysis"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "AI Ethics & Governance",
      category: "AI Governance",
      complexity: "Advanced",
      description: "Comprehensive framework for responsible AI development and deployment",
      price: 4500,
      pricingModel: "monthly",
      aiScore: 99,
      features: ["Bias detection", "Fairness metrics", "Transparency tools", "Compliance monitoring"],
      benefits: ["Regulatory compliance", "Risk mitigation", "Trust building", "Ethical AI"],
      useCases: ["AI development", "Regulatory compliance", "Risk assessment", "Stakeholder trust"],
      tags: ["AI Ethics", "Governance", "Compliance", "Risk Management", "Transparency"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "AI-Powered Drug Discovery",
      category: "Healthcare AI",
      complexity: "Advanced",
      description: "Accelerated drug discovery using AI and machine learning algorithms",
      price: 8000,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Molecular modeling", "Target identification", "Drug screening", "Clinical trial optimization"],
      benefits: ["Faster discovery", "Cost reduction", "Success rate improvement", "Innovation"],
      useCases: ["Pharmaceutical research", "Biotech companies", "Academic research", "Drug development"],
      tags: ["Drug Discovery", "AI", "Healthcare", "Molecular Biology", "Research"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "AI Financial Trading",
      category: "Financial AI",
      complexity: "Advanced",
      description: "Intelligent algorithmic trading and financial market analysis platform",
      price: 6000,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Market analysis", "Risk assessment", "Portfolio optimization", "Automated trading"],
      benefits: ["Better returns", "Risk reduction", "24/7 trading", "Data-driven decisions"],
      useCases: ["Hedge funds", "Investment firms", "Trading desks", "Portfolio management"],
      tags: ["Financial AI", "Algorithmic Trading", "Risk Management", "Portfolio Optimization", "Market Analysis"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "AI Climate Modeling",
      category: "Climate AI",
      complexity: "Advanced",
      description: "Advanced climate prediction and environmental impact analysis using AI",
      price: 5500,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Climate simulation", "Impact assessment", "Predictive modeling", "Scenario analysis"],
      benefits: ["Climate insights", "Risk assessment", "Policy support", "Sustainability"],
      useCases: ["Government agencies", "Environmental organizations", "Insurance companies", "Research institutions"],
      tags: ["Climate AI", "Environmental Modeling", "Predictive Analytics", "Sustainability", "Risk Assessment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "AI-Powered Education",
      category: "Education AI",
      complexity: "Intermediate",
      description: "Personalized learning and adaptive education platform powered by AI",
      price: 2500,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Personalized learning", "Adaptive assessments", "Progress tracking", "Content generation"],
      benefits: ["Better learning outcomes", "Individualized attention", "Efficiency improvement", "Engagement"],
      useCases: ["K-12 education", "Higher education", "Corporate training", "Online learning"],
      tags: ["Education AI", "Personalized Learning", "Adaptive Systems", "Assessment", "Content Generation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "AI Supply Chain Optimization",
      category: "Supply Chain AI",
      complexity: "Intermediate",
      description: "Intelligent supply chain management and optimization using AI algorithms",
      price: 3500,
      pricingModel: "monthly",
      aiScore: 93,
      features: ["Demand forecasting", "Inventory optimization", "Route planning", "Risk management"],
      benefits: ["Cost reduction", "Efficiency improvement", "Risk mitigation", "Customer satisfaction"],
      useCases: ["Manufacturing", "Retail", "Logistics", "E-commerce"],
      tags: ["Supply Chain AI", "Demand Forecasting", "Inventory Management", "Logistics", "Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 13,
      name: "AI-Powered Marketing",
      category: "Marketing AI",
      complexity: "Intermediate",
      description: "Intelligent marketing automation and customer behavior analysis platform",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 91,
      features: ["Customer segmentation", "Predictive analytics", "Campaign optimization", "ROI analysis"],
      benefits: ["Better targeting", "Increased conversions", "Cost efficiency", "Data insights"],
      useCases: ["E-commerce", "B2B marketing", "Retail", "Digital agencies"],
      tags: ["Marketing AI", "Customer Analytics", "Predictive Marketing", "Automation", "ROI Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 14,
      name: "AI Legal Assistant",
      category: "Legal AI",
      complexity: "Intermediate",
      description: "Intelligent legal document analysis and contract review platform",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 90,
      features: ["Document analysis", "Contract review", "Legal research", "Compliance checking"],
      benefits: ["Time savings", "Cost reduction", "Accuracy improvement", "Risk mitigation"],
      useCases: ["Law firms", "Corporate legal", "Compliance departments", "Contract management"],
      tags: ["Legal AI", "Document Analysis", "Contract Review", "Compliance", "Legal Research"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 15,
      name: "AI-Powered HR",
      category: "HR AI",
      complexity: "Intermediate",
      description: "Intelligent human resources management and talent acquisition platform",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 89,
      features: ["Resume screening", "Candidate matching", "Performance analysis", "Employee engagement"],
      benefits: ["Better hiring", "Time savings", "Cost reduction", "Employee satisfaction"],
      useCases: ["HR departments", "Recruitment agencies", "Large organizations", "Startups"],
      tags: ["HR AI", "Talent Acquisition", "Performance Management", "Employee Engagement", "Recruitment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Quantum AI', 'Autonomous AI', 'Edge AI', 'Privacy AI', 'Security AI', 'Multimodal AI', 'AI Governance', 'Healthcare AI', 'Financial AI', 'Climate AI', 'Education AI', 'Supply Chain AI', 'Marketing AI', 'Legal AI', 'HR AI'];
  const complexityLevels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'all' || service.complexity === selectedComplexity;
    
    return matchesSearch && matchesCategory && matchesComplexity;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price}/month`;
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum AI': return <Atom className="w-6 h-6" />;
      case 'Autonomous AI': return <BrainIcon className="w-6 h-6" />;
      case 'Edge AI': return <Cpu className="w-6 h-6" />;
      case 'Privacy AI': return <Shield className="w-6 h-6" />;
      case 'Security AI': return <Lock className="w-6 h-6" />;
      case 'Multimodal AI': return <Eye className="w-6 h-6" />;
      case 'AI Governance': return <Settings className="w-6 h-6" />;
      case 'Healthcare AI': return <Heart className="w-6 h-6" />;
      case 'Financial AI': return <TrendingUp className="w-6 h-6" />;
      case 'Climate AI': return <Leaf className="w-6 h-6" />;
      case 'Education AI': return <GraduationCap className="w-6 h-6" />;
      case 'Supply Chain AI': return <Truck className="w-6 h-6" />;
      case 'Marketing AI': return <Target className="w-6 h-6" />;
      case 'Legal AI': return <FileText className="w-6 h-6" />;
      case 'HR AI': return <Users className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.',
      features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Named Entity Recognition']
    },
    {
      icon: Monitor,
      title: 'Computer Vision',
      description: 'Image and video analysis with object detection and pattern recognition.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and trend prediction.',
      features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior Prediction', 'Market Analysis']
    },
    {
      icon: Circle,
      title: 'Automated Decision Making',
      description: 'AI-powered systems for intelligent decision support and automation.',
      features: ['Process Automation', 'Decision Trees', 'Rule-based Systems', 'Intelligent Routing']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, patient monitoring, and medical research.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Fraud detection, risk assessment, and algorithmic trading.',
      icon: '💳'
    },
    {
      name: 'E-commerce',
      description: 'Personalized recommendations, inventory optimization, and customer insights.',
      icon: '🛒'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    },
    {
      name: 'Education',
      description: 'Adaptive learning, student assessment, and content personalization.',
      icon: '🎓'
    },
    {
      name: 'Transportation',
      description: 'Route optimization, autonomous vehicles, and traffic management.',
      icon: '🚗'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations',
      icon: Zap
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights for improved strategic planning',
      icon: Target
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize processes and reduce operational expenses',
      icon: CheckCircle
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Personalized interactions and improved satisfaction',
      icon: Users
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Evaluate current systems and define AI implementation goals',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Data Preparation',
      description: 'Clean, structure, and prepare data for AI model training',
      duration: '2-4 weeks'
    },
    {
      step: 3,
      title: 'Model Development',
      description: 'Build and train AI models using advanced algorithms',
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Validation',
      description: 'Thorough testing and validation of AI systems',
      duration: '2-3 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Monitoring',
      description: 'Launch AI solutions and continuous performance monitoring',
      duration: '1-2 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-zion-purple-light/20 p-4 rounded-full">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services Showcase
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business. 
            Our cutting-edge AI solutions deliver intelligent automation, predictive insights, 
            and enhanced decision-making capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Explore AI Services
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Get AI Consultation
            </a>
          </div>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Capabilities & Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI expertise spans across multiple domains, enabling us to deliver 
              comprehensive solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-zion-slate-light mb-4">{capability.description}</p>
                <ul className="text-left space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Services Portfolio */}
      <div id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Services Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of AI services designed to accelerate 
              your digital transformation journey.
            </p>
          </div>

          {/* Search and Filters */}
          {activeTab === 'services' && (
            <div className="mb-8 space-y-4">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-purple"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-zion-blue-dark text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedComplexity}
                  onChange={(e) => setSelectedComplexity(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-purple"
                >
                  {complexityLevels.map(complexity => (
                    <option key={complexity} value={complexity} className="bg-zion-blue-dark text-white">
                      {complexity === 'all' ? 'All Complexity Levels' : complexity}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['services', 'industries', 'benefits'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'services' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.complexity === 'Advanced' && (
                        <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                          Advanced
                        </span>
                      )}
                    </div>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Price:</span>
                        <span className="text-white font-bold">{formatPrice(service.price, service.pricingModel)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">AI Score:</span>
                        <span className="text-zion-cyan font-bold">{service.aiScore}/100</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Complexity:</span>
                        <span className={`text-sm font-medium ${getComplexityColor(service.complexity)}`}>
                          {service.complexity}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'industries' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                    <p className="text-zion-slate-light">{industry.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-zion-purple/20 p-3 rounded-full">
                        <benefit.icon className="w-8 h-8 text-zion-purple" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-zion-slate-light">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Implementation Process */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Implementation Process
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful AI implementation with 
              clear milestones and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {implementationSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-zion-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zion-slate-light text-sm mb-2">{step.description}</p>
                <div className="flex items-center justify-center gap-1 text-zion-cyan text-xs">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive innovation, efficiency, 
            and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Schedule AI Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesShowcase;