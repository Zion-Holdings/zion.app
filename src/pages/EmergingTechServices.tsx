import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Wifi, Atom, Satellite, Cpu as CpuIcon, Network as NetworkIcon } from 'lucide-react';

const EmergingTechServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTechLevel, setSelectedTechLevel] = useState<string>('all');

  // Emerging Technology Services data
  const emergingTechServices = [
    {
      id: 1,
      name: "Blockchain & Web3 Solutions",
      category: "Blockchain",
      techLevel: "Advanced",
      description: "Enterprise blockchain solutions, smart contracts, and Web3 infrastructure development",
      price: 45000,
      pricingModel: "project-based",
      innovationScore: 98,
      features: ["Smart contract development", "DeFi platforms", "NFT marketplaces", "Blockchain consulting"],
      benefits: ["Transparency", "Security", "Decentralization", "Cost reduction"],
      useCases: ["Supply chain tracking", "Digital identity", "Tokenization", "Decentralized finance"],
      tags: ["Blockchain", "Web3", "Smart Contracts", "DeFi", "NFTs"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Internet of Things (IoT) Platform",
      category: "IoT",
      techLevel: "Advanced",
      description: "Comprehensive IoT solutions for smart cities, industrial automation, and connected devices",
      price: 35000,
      pricingModel: "project-based",
      innovationScore: 95,
      features: ["Device management", "Real-time monitoring", "Data analytics", "Security protocols"],
      benefits: ["Automation", "Efficiency", "Data insights", "Cost savings"],
      useCases: ["Smart cities", "Industrial IoT", "Connected homes", "Asset tracking"],
      tags: ["IoT", "Smart Cities", "Industrial Automation", "Connected Devices"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Quantum Computing Consulting",
      category: "Quantum Computing",
      techLevel: "Cutting-Edge",
      description: "Strategic consulting and implementation for quantum computing applications",
      price: 500,
      pricingModel: "hourly",
      innovationScore: 99,
      features: ["Quantum algorithm design", "Quantum software development", "Quantum security", "Strategic planning"],
      benefits: ["Computational advantage", "Future readiness", "Competitive edge", "Innovation leadership"],
      useCases: ["Cryptography", "Optimization", "Machine learning", "Financial modeling"],
      tags: ["Quantum Computing", "Quantum Algorithms", "Quantum Security", "Future Tech"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Edge Computing Solutions",
      category: "Edge Computing",
      techLevel: "Advanced",
      description: "Edge computing infrastructure for low-latency, high-performance applications",
      price: 28000,
      pricingModel: "project-based",
      innovationScore: 93,
      features: ["Edge nodes deployment", "Latency optimization", "Local processing", "Hybrid cloud integration"],
      benefits: ["Reduced latency", "Bandwidth savings", "Real-time processing", "Offline capability"],
      useCases: ["Autonomous vehicles", "Industrial automation", "Smart cities", "Content delivery"],
      tags: ["Edge Computing", "Low Latency", "Local Processing", "Real-time"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "5G & Next-Gen Networks",
      category: "Network Technology",
      techLevel: "Advanced",
      description: "5G network infrastructure and next-generation networking solutions",
      price: 65000,
      pricingModel: "project-based",
      innovationScore: 96,
      features: ["5G infrastructure", "Network slicing", "Ultra-low latency", "Massive IoT support"],
      benefits: ["High speed", "Low latency", "Massive connectivity", "Network efficiency"],
      useCases: ["Autonomous vehicles", "Remote surgery", "Smart manufacturing", "Enhanced mobile broadband"],
      tags: ["5G", "Next-Gen Networks", "Network Slicing", "Ultra-low Latency"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Augmented & Virtual Reality",
      category: "AR/VR",
      techLevel: "Advanced",
      description: "Immersive AR/VR solutions for training, entertainment, and business applications",
      price: 32000,
      pricingModel: "project-based",
      innovationScore: 94,
      features: ["3D modeling", "Interactive experiences", "Multi-platform support", "Content creation"],
      benefits: ["Immersive training", "Enhanced engagement", "Cost-effective simulations", "Remote collaboration"],
      useCases: ["Employee training", "Product visualization", "Virtual tours", "Gaming & entertainment"],
      tags: ["AR/VR", "Immersive Technology", "3D Modeling", "Virtual Experiences"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "Robotic Process Automation (RPA)",
      category: "Automation",
      techLevel: "Advanced",
      description: "Intelligent automation solutions for business process optimization",
      price: 18000,
      pricingModel: "project-based",
      innovationScore: 92,
      features: ["Process automation", "AI integration", "Workflow optimization", "Analytics dashboard"],
      benefits: ["Increased efficiency", "Error reduction", "Cost savings", "Scalability"],
      useCases: ["Data entry", "Invoice processing", "Customer service", "Report generation"],
      tags: ["RPA", "Process Automation", "Workflow", "Efficiency"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Digital Twin Solutions",
      category: "Digital Twins",
      techLevel: "Cutting-Edge",
      description: "Digital twin technology for real-time monitoring and predictive maintenance",
      price: 42000,
      pricingModel: "project-based",
      innovationScore: 97,
      features: ["Real-time monitoring", "Predictive analytics", "3D visualization", "IoT integration"],
      benefits: ["Predictive maintenance", "Operational efficiency", "Risk reduction", "Data insights"],
      useCases: ["Manufacturing", "Infrastructure", "Healthcare", "Smart cities"],
      tags: ["Digital Twins", "Predictive Maintenance", "Real-time Monitoring", "3D Visualization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Blockchain', 'IoT', 'Quantum Computing', 'Edge Computing', 'Network Technology', 'AR/VR', 'Automation', 'Digital Twins'];
  const techLevels = ['all', 'Advanced', 'Cutting-Edge', 'Experimental'];

  const filteredServices = emergingTechServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesTechLevel = selectedTechLevel === 'all' || service.techLevel === selectedTechLevel;
    
    return matchesSearch && matchesCategory && matchesTechLevel;
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

  const getInnovationColor = (score: number) => {
    if (score >= 95) return 'text-purple-500';
    if (score >= 90) return 'text-blue-500';
    if (score >= 85) return 'text-green-500';
    return 'text-yellow-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Emerging Technology Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology solutions that will transform your business and keep you ahead of the competition
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search emerging technology services..."
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
            
            <select
              value={selectedTechLevel}
              onChange={(e) => setSelectedTechLevel(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {techLevels.map(level => (
                <option key={level} value={level} className="bg-gray-800 text-white">
                  {level === 'all' ? 'All Tech Levels' : level}
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
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getInnovationColor(service.innovationScore)} bg-opacity-20 bg-current`}>
                      Innovation Score: {service.innovationScore}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                      {service.techLevel}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-gray-400">{service.pricingModel.replace('-', ' ')}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 2).map((useCase, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Contact us for more details</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
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
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Explore Emerging Technologies?</h2>
            <p className="text-gray-300 mb-6">
              Contact our team to discuss how these cutting-edge solutions can transform your business
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">{emergingTechServices[0].contactInfo.phone}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">{emergingTechServices[0].contactInfo.email}</p>
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

export default EmergingTechServices;