import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Lightbulb, Sparkles, CpuIcon, Monitor, Smartphone, CpuIcon as CpuIcon2 } from 'lucide-react';

const InnovativeServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Innovative Services Data
  const innovativeServices = [
    {
      id: 1,
      name: "Quantum AI Fusion Platform",
      category: "Quantum AI",
      description: "Revolutionary platform combining quantum computing with artificial intelligence for solving previously unsolvable problems",
      price: 2500,
      pricingModel: "monthly",
      innovationScore: 98,
      features: [
        "Quantum machine learning",
        "Hybrid quantum-classical algorithms",
        "Real-time quantum simulation",
        "Quantum error correction",
        "AI model optimization",
        "Quantum neural networks"
      ],
      benefits: [
        "Solve complex problems 1000x faster",
        "Breakthrough in drug discovery",
        "Revolutionary financial modeling",
        "Advanced cryptography",
        "Next-gen AI capabilities"
      ],
      useCases: [
        "Pharmaceutical research",
        "Financial risk modeling",
        "Climate prediction",
        "Materials science",
        "Cryptography"
      ],
      targetAudience: [
        "Research institutions",
        "Pharmaceutical companies",
        "Financial institutions",
        "Government agencies",
        "Tech giants"
      ],
      tags: ["Quantum Computing", "AI", "Machine Learning", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Neural Interface Platform",
      category: "Brain-Computer Interface",
      description: "Advanced neural interface technology enabling direct communication between human brain and computers",
      price: 3500,
      pricingModel: "monthly",
      innovationScore: 97,
      features: [
        "Non-invasive brain scanning",
        "Real-time thought processing",
        "Neural pattern recognition",
        "Cognitive enhancement tools",
        "Accessibility solutions",
        "Research capabilities"
      ],
      benefits: [
        "Revolutionary accessibility",
        "Enhanced cognitive abilities",
        "New communication methods",
        "Medical breakthroughs",
        "Human-computer symbiosis"
      ],
      useCases: [
        "Disability assistance",
        "Medical rehabilitation",
        "Cognitive enhancement",
        "Research applications",
        "Gaming and entertainment"
      ],
      targetAudience: [
        "Healthcare providers",
        "Research institutions",
        "Accessibility organizations",
        "Gaming companies",
        "Defense contractors"
      ],
      tags: ["BCI", "Neuroscience", "Accessibility", "Medical", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Holographic Workspace",
      category: "Mixed Reality",
      description: "Next-generation holographic workspace that transforms how teams collaborate and create in 3D space",
      price: 1800,
      pricingModel: "monthly",
      innovationScore: 95,
      features: [
        "True 3D holographic display",
        "Multi-user collaboration",
        "Gesture and voice control",
        "Real-time rendering",
        "Cross-platform compatibility",
        "Custom workspace design"
      ],
      benefits: [
        "Immersive collaboration",
        "3D design visualization",
        "Remote team engagement",
        "Creative workflow enhancement",
        "Future of work"
      ],
      useCases: [
        "Product design",
        "Architecture planning",
        "Team collaboration",
        "Training and education",
        "Creative industries"
      ],
      targetAudience: [
        "Design firms",
        "Architecture companies",
        "Creative agencies",
        "Educational institutions",
        "Remote teams"
      ],
      tags: ["Holographic", "Mixed Reality", "Collaboration", "3D", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Biological Computing Platform",
      category: "Bio-Computing",
      description: "Revolutionary platform using biological systems for computing, enabling sustainable and powerful processing",
      price: 4200,
      pricingModel: "monthly",
      innovationScore: 96,
      features: [
        "DNA-based computing",
        "Biological neural networks",
        "Sustainable processing",
        "Bio-sensor integration",
        "Environmental monitoring",
        "Medical diagnostics"
      ],
      benefits: [
        "Sustainable computing",
        "Biological accuracy",
        "Environmental monitoring",
        "Medical breakthroughs",
        "Energy efficiency"
      ],
      useCases: [
        "Environmental monitoring",
        "Medical diagnostics",
        "Drug discovery",
        "Climate modeling",
        "Biological research"
      ],
      targetAudience: [
        "Research institutions",
        "Pharmaceutical companies",
        "Environmental agencies",
        "Healthcare providers",
        "Biotech firms"
      ],
      tags: ["Bio-Computing", "DNA", "Sustainability", "Medical", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "Emotional AI Platform",
      category: "Emotional Intelligence",
      description: "Advanced AI system that understands, processes, and responds to human emotions for enhanced interactions",
      price: 1200,
      pricingModel: "monthly",
      innovationScore: 94,
      features: [
        "Emotion recognition",
        "Sentiment analysis",
        "Empathetic responses",
        "Mood tracking",
        "Behavioral insights",
        "Personalized interactions"
      ],
      benefits: [
        "Enhanced user experience",
        "Better mental health support",
        "Improved customer service",
        "Personalized interactions",
        "Emotional intelligence"
      ],
      useCases: [
        "Mental health support",
        "Customer service",
        "Education",
        "Healthcare",
        "Entertainment"
      ],
      targetAudience: [
        "Healthcare providers",
        "Customer service teams",
        "Educational institutions",
        "Mental health apps",
        "Entertainment companies"
      ],
      tags: ["Emotional AI", "Mental Health", "User Experience", "Personalization", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Time Series Prediction Engine",
      category: "Temporal AI",
      description: "Revolutionary AI engine that predicts future events with unprecedented accuracy using temporal analysis",
      price: 2800,
      pricingModel: "monthly",
      innovationScore: 93,
      features: [
        "Multi-dimensional time analysis",
        "Causal inference",
        "Pattern recognition",
        "Scenario modeling",
        "Real-time predictions",
        "Uncertainty quantification"
      ],
      benefits: [
        "Predict future events",
        "Risk mitigation",
        "Strategic planning",
        "Competitive advantage",
        "Data-driven decisions"
      ],
      useCases: [
        "Financial forecasting",
        "Supply chain optimization",
        "Risk management",
        "Strategic planning",
        "Market analysis"
      ],
      targetAudience: [
        "Financial institutions",
        "Manufacturing companies",
        "Logistics firms",
        "Consulting companies",
        "Government agencies"
      ],
      tags: ["Time Series", "Prediction", "AI", "Forecasting", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Quantum AI', 'Brain-Computer Interface', 'Mixed Reality', 'Bio-Computing', 'Emotional Intelligence', 'Temporal AI'];

  const filteredServices = innovativeServices.filter(service => {
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
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  const getInnovationScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum AI': return <CpuIcon className="w-6 h-6" />;
      case 'Brain-Computer Interface': return <Brain className="w-6 h-6" />;
      case 'Mixed Reality': return <Monitor className="w-6 h-6" />;
      case 'Bio-Computing': return <Leaf className="w-6 h-6" />;
      case 'Emotional Intelligence': return <Heart className="w-6 h-6" />;
      case 'Temporal AI': return <Clock className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Innovative Services
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge innovative services that push the boundaries 
              of what's possible in AI, quantum computing, neural interfaces, and beyond.
            </p>
          </motion.div>
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
                placeholder="Search innovative services..."
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
                    {category === 'all' ? 'All Innovation Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-purple-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getInnovationScoreColor(service.innovationScore)}`}>
                      Innovation Score: {service.innovationScore}%
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
                  <h4 className="text-sm font-semibold text-white mb-2">Revolutionary Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Transformative Benefits:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Rocket className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <li key={index} className="flex items-center">
                        <Lightbulb className="w-4 h-4 text-yellow-400 mr-2" />
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

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Explore Innovation
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Shape the Future?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServices;