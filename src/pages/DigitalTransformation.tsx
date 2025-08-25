import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Stethoscope, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Calendar, FileText, BarChart3 as BarChart3Icon, Users as UsersIcon2, CreditCard as CreditCardIcon2, MessageSquare as MessageSquareIcon, Camera as CameraIcon, Video as VideoIcon, Music as MusicIcon, BookOpen as BookOpenIcon } from 'lucide-react';

const DigitalTransformation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaturity, setSelectedMaturity] = useState<string>('all');

  // Digital Transformation & Innovation Services data
  const digitalTransformationServices = [
    {
      id: 1,
      name: "Digital Strategy & Roadmap Development",
      category: "Strategy",
      maturity: "Enterprise",
      description: "Comprehensive digital transformation strategy with detailed roadmap and implementation planning",
      price: 150000,
      pricingModel: "project-based",
      innovationScore: 98,
      features: ["Digital assessment", "Strategy development", "Roadmap creation", "Change management"],
      benefits: ["Clear direction", "Competitive advantage", "Operational efficiency", "Future readiness"],
      useCases: ["Large enterprises", "Traditional businesses", "Digital transformation", "Strategic planning"],
      methodologies: ["Design Thinking", "Agile", "Lean", "Change Management", "Digital Maturity Assessment"],
      tags: ["Digital Strategy", "Transformation", "Roadmap", "Change Management", "Strategic Planning"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Customer Experience (CX) Transformation",
      category: "Customer Experience",
      maturity: "Advanced",
      description: "End-to-end customer experience transformation with journey mapping and digital touchpoints",
      price: 95000,
      pricingModel: "project-based",
      innovationScore: 97,
      features: ["Customer journey mapping", "Touchpoint optimization", "Digital experience design", "Analytics integration"],
      benefits: ["Improved satisfaction", "Increased loyalty", "Higher conversions", "Better insights"],
      useCases: ["E-commerce", "Financial services", "Healthcare", "Retail", "Service businesses"],
      methodologies: ["Customer Journey Mapping", "Design Thinking", "User Research", "A/B Testing", "Analytics"],
      tags: ["Customer Experience", "Journey Mapping", "Digital Touchpoints", "User Research", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Process Digitalization & Automation",
      category: "Process Automation",
      maturity: "Mid-Size",
      description: "Comprehensive process digitalization with intelligent automation and workflow optimization",
      price: 75000,
      pricingModel: "project-based",
      innovationScore: 95,
      features: ["Process analysis", "Digital workflow design", "Automation implementation", "Performance monitoring"],
      benefits: ["Increased efficiency", "Cost reduction", "Error elimination", "Better compliance"],
      useCases: ["Manufacturing", "Finance", "Healthcare", "Logistics", "Administrative processes"],
      methodologies: ["Process Mining", "RPA", "Workflow Automation", "BPM", "Lean Six Sigma"],
      tags: ["Process Automation", "Digitalization", "Workflow", "Efficiency", "RPA"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Data-Driven Decision Making Platform",
      category: "Data Analytics",
      maturity: "Advanced",
      description: "Comprehensive data analytics platform for informed decision making and business intelligence",
      price: 110000,
      pricingModel: "project-based",
      innovationScore: 96,
      features: ["Data integration", "Advanced analytics", "Real-time dashboards", "Predictive modeling"],
      benefits: ["Better decisions", "Data insights", "Competitive advantage", "Operational efficiency"],
      useCases: ["Enterprise analytics", "Business intelligence", "Performance monitoring", "Strategic planning"],
      methodologies: ["Data Science", "Machine Learning", "Business Intelligence", "Predictive Analytics", "Data Visualization"],
      tags: ["Data Analytics", "Business Intelligence", "Predictive Modeling", "Dashboards", "Data Science"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "Innovation Lab & Digital Hub",
      category: "Innovation",
      maturity: "Enterprise",
      description: "Dedicated innovation lab for digital experimentation, prototyping, and innovation management",
      price: 180000,
      pricingModel: "project-based",
      innovationScore: 99,
      features: ["Innovation lab setup", "Prototyping facilities", "Innovation management", "Collaboration tools"],
      benefits: ["Innovation culture", "Faster prototyping", "Talent attraction", "Competitive advantage"],
      useCases: ["Large enterprises", "Innovation-focused companies", "R&D departments", "Startup incubators"],
      methodologies: ["Design Thinking", "Lean Startup", "Agile Innovation", "Open Innovation", "Innovation Management"],
      tags: ["Innovation Lab", "Digital Hub", "Prototyping", "Innovation Management", "R&D"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Digital Workplace Transformation",
      category: "Workplace",
      maturity: "Mid-Size",
      description: "Modern digital workplace solutions with collaboration tools and remote work capabilities",
      price: 85000,
      pricingModel: "project-based",
      innovationScore: 94,
      features: ["Collaboration platforms", "Remote work tools", "Digital workflows", "Employee experience"],
      benefits: ["Improved productivity", "Better collaboration", "Employee satisfaction", "Cost reduction"],
      useCases: ["Corporate offices", "Remote teams", "Hybrid work", "Knowledge workers"],
      methodologies: ["Change Management", "User Adoption", "Workplace Design", "Digital Collaboration", "Employee Experience"],
      tags: ["Digital Workplace", "Collaboration", "Remote Work", "Productivity", "Employee Experience"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "E-commerce & Digital Commerce Platform",
      category: "Digital Commerce",
      maturity: "Advanced",
      description: "Comprehensive e-commerce platform with advanced features and digital commerce capabilities",
      price: 120000,
      pricingModel: "project-based",
      innovationScore: 95,
      features: ["E-commerce platform", "Payment integration", "Inventory management", "Customer analytics"],
      benefits: ["Increased sales", "Better customer experience", "Operational efficiency", "Market expansion"],
      useCases: ["Retail businesses", "B2B commerce", "Marketplaces", "Digital brands"],
      methodologies: ["E-commerce Strategy", "Platform Selection", "User Experience Design", "Payment Integration", "Analytics"],
      tags: ["E-commerce", "Digital Commerce", "Online Retail", "Payment Integration", "Customer Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Digital Marketing & Growth Hacking",
      category: "Digital Marketing",
      maturity: "Mid-Size",
      description: "Comprehensive digital marketing strategies with growth hacking and performance optimization",
      price: 65000,
      pricingModel: "project-based",
      innovationScore: 93,
      features: ["Marketing strategy", "Growth hacking", "Performance optimization", "Analytics & reporting"],
      benefits: ["Increased leads", "Better conversions", "Market expansion", "ROI improvement"],
      useCases: ["B2B marketing", "E-commerce", "SaaS companies", "Startups", "Growth companies"],
      methodologies: ["Growth Hacking", "Digital Marketing", "A/B Testing", "Performance Marketing", "Analytics"],
      tags: ["Digital Marketing", "Growth Hacking", "Performance Optimization", "Lead Generation", "ROI"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "Digital Product Development",
      category: "Product Development",
      maturity: "Advanced",
      description: "End-to-end digital product development from ideation to launch and iteration",
      price: 140000,
      pricingModel: "project-based",
      innovationScore: 96,
      features: ["Product strategy", "Design & development", "Testing & validation", "Launch & iteration"],
      benefits: ["Faster time to market", "Better product-market fit", "Reduced development costs", "Higher success rate"],
      useCases: ["Startups", "Product companies", "Digital services", "Innovation projects"],
      methodologies: ["Design Thinking", "Lean Startup", "Agile Development", "User Research", "Product Strategy"],
      tags: ["Product Development", "Digital Products", "Design Thinking", "Lean Startup", "Agile"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "Change Management & Digital Adoption",
      category: "Change Management",
      maturity: "Enterprise",
      description: "Comprehensive change management for digital transformation with employee adoption strategies",
      price: 95000,
      pricingModel: "project-based",
      innovationScore: 94,
      features: ["Change strategy", "Communication planning", "Training programs", "Adoption monitoring"],
      benefits: ["Smoother transitions", "Higher adoption rates", "Reduced resistance", "Better outcomes"],
      useCases: ["Large transformations", "Technology rollouts", "Process changes", "Organizational change"],
      methodologies: ["Change Management", "Communication Strategy", "Training & Development", "Stakeholder Management", "Adoption Metrics"],
      tags: ["Change Management", "Digital Adoption", "Training", "Communication", "Stakeholder Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Strategy', 'Customer Experience', 'Process Automation', 'Data Analytics', 'Innovation', 'Workplace', 'Digital Commerce', 'Digital Marketing', 'Product Development', 'Change Management'];
  const maturityLevels = ['all', 'Basic', 'Mid-Size', 'Advanced', 'Enterprise'];

  const filteredServices = digitalTransformationServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesMaturity = selectedMaturity === 'all' || service.maturity === selectedMaturity;
    
    return matchesSearch && matchesCategory && matchesMaturity;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent mb-4">
            Digital Transformation & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge digital strategies, innovation solutions, and future-ready technologies
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search digital transformation services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedMaturity}
              onChange={(e) => setSelectedMaturity(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {maturityLevels.map(level => (
                <option key={level} value={level} className="bg-gray-800 text-white">
                  {level === 'all' ? 'All Maturity Levels' : level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getInnovationColor(service.innovationScore)} bg-opacity-20 bg-current`}>
                      Innovation Score: {service.innovationScore}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                      {service.maturity}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{service.maturity} Level</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Methodologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.methodologies.map((methodology, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {methodology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
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
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Globe className="w-4 h-4" />
                    <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                      {service.contactInfo.website}
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business Digitally?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our digital transformation experts are ready to help you navigate the digital landscape and build a future-ready business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
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

export default DigitalTransformation;