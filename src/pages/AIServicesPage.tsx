import React, { useState } from 'react';
import { Search, Filter, Brain, Zap, Shield, Database, Users, TrendingUp, BarChart3, MessageSquare, Camera, Video, FileText, Target, Globe, Bot, Cpu, Network, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Star, Clock, DollarSign } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // AI Services data
  const aiServices = [
    {
      id: 1,
      name: "AI Content Creator Pro",
      category: "Content Generation",
      pricing: "Freemium",
      description: "Advanced AI-powered content creation platform that generates high-quality articles, blog posts, marketing copy, and social media content with human-like creativity and SEO optimization.",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["AI content generation", "SEO optimization", "Multi-language support", "Content planning", "Performance analytics", "Plagiarism detection"],
      benefits: ["Create content 10x faster", "Improve SEO rankings", "Reduce content costs by 70%", "Maintain brand voice consistency"],
      targetAudience: ["Content marketers", "Bloggers", "Agencies", "Small businesses", "E-commerce"],
      tags: ["Content Creation", "AI", "SEO", "Marketing", "Automation"],
      marketPrice: "$45/month (Industry average: $80/month)",
      roi: "400% ROI within 3 months",
      implementationTime: "2-3 days",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "AI Customer Support Bot",
      category: "Customer Service",
      pricing: "Freemium",
      description: "Intelligent chatbot solution that provides 24/7 customer support, handles complex queries, and integrates seamlessly with existing CRM systems for enhanced customer experience.",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Unlimited conversations",
      features: ["Natural language processing", "Multi-language support", "CRM integration", "Sentiment analysis", "Automated responses", "Live chat handoff"],
      benefits: ["Reduce support costs by 60%", "Improve response time to under 1 second", "Handle multiple conversations simultaneously", "24/7 availability"],
      targetAudience: ["E-commerce", "Customer support teams", "Service businesses", "SaaS companies"],
      tags: ["Chatbot", "Customer Service", "AI", "Automation", "CRM"],
      marketPrice: "$35/month (Industry average: $65/month)",
      roi: "300% ROI within 4 months",
      implementationTime: "3-5 days",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "AI Sales Predictor",
      category: "Sales Intelligence",
      pricing: "Freemium",
      description: "Predictive sales analytics platform that uses machine learning to forecast sales trends, identify high-value leads, and optimize sales strategies for maximum revenue growth.",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Sales forecasting", "Lead scoring", "Pipeline analytics", "Revenue prediction", "Performance insights", "ROI optimization"],
      benefits: ["Increase sales by 45%", "Improve lead conversion by 55%", "Reduce sales cycle by 30%", "Better resource allocation"],
      targetAudience: ["Sales teams", "Business development", "Startups", "Enterprise companies"],
      tags: ["Sales Intelligence", "AI", "Predictive Analytics", "Lead Scoring", "Forecasting"],
      marketPrice: "$55/month (Industry average: $95/month)",
      roi: "350% ROI within 5 months",
      implementationTime: "4-6 days",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "AI Image Recognition Suite",
      category: "Computer Vision",
      pricing: "Freemium",
      description: "Advanced computer vision platform that provides image recognition, object detection, and visual analysis capabilities for businesses looking to automate visual processes.",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Object detection", "Image classification", "Face recognition", "Quality control", "Automated tagging", "Visual search"],
      benefits: ["Automate visual inspections", "Improve quality control by 90%", "Reduce manual review time", "Enhanced security"],
      targetAudience: ["Manufacturing", "Retail", "Security", "Healthcare", "E-commerce"],
      tags: ["Computer Vision", "Image Recognition", "AI", "Automation", "Quality Control"],
      marketPrice: "$65/month (Industry average: $120/month)",
      roi: "280% ROI within 6 months",
      implementationTime: "5-7 days",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "AI Data Analyzer Pro",
      category: "Data Analytics",
      pricing: "Freemium",
      description: "Intelligent data analysis platform that automatically discovers insights, generates reports, and provides actionable recommendations from complex datasets.",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Automated insights", "Predictive modeling", "Natural language queries", "Real-time dashboards", "Data visualization", "Report generation"],
      benefits: ["Discover insights 5x faster", "Reduce analysis time by 80%", "Improve decision making", "Automated reporting"],
      targetAudience: ["Data analysts", "Business intelligence teams", "Executives", "Marketing teams"],
      tags: ["Data Analytics", "AI", "Business Intelligence", "Predictive Modeling", "Automation"],
      marketPrice: "$40/month (Industry average: $75/month)",
      roi: "320% ROI within 4 months",
      implementationTime: "3-5 days",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "AI Process Automation",
      category: "Process Automation",
      pricing: "Freemium",
      description: "Intelligent process automation platform that uses AI to streamline business workflows, reduce manual tasks, and improve operational efficiency across all departments.",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Workflow automation", "Document processing", "Decision automation", "Integration hub", "Process monitoring", "Performance analytics"],
      benefits: ["Reduce operational costs by 50%", "Improve process accuracy to 99.9%", "Scale operations efficiently", "Real-time monitoring"],
      targetAudience: ["Operations teams", "HR departments", "Finance teams", "Manufacturing", "Service businesses"],
      tags: ["Process Automation", "AI", "Workflow", "Efficiency", "Integration"],
      marketPrice: "$75/month (Industry average: $140/month)",
      roi: "400% ROI within 6 months",
      implementationTime: "1-2 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "AI Security Monitor",
      category: "Cybersecurity",
      pricing: "Freemium",
      description: "Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated incident response, and comprehensive security monitoring for businesses.",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Threat detection", "Incident response", "Security monitoring", "Vulnerability assessment", "Compliance reporting", "Real-time alerts"],
      benefits: ["Detect threats 10x faster", "Reduce security incidents by 80%", "Automated response", "24/7 protection"],
      targetAudience: ["IT security teams", "Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Cybersecurity", "AI", "Threat Detection", "Security Monitoring", "Compliance"],
      marketPrice: "$85/month (Industry average: $160/month)",
      roi: "250% ROI within 8 months",
      implementationTime: "1-2 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "AI Marketing Optimizer",
      category: "Marketing",
      pricing: "Freemium",
      description: "Intelligent marketing optimization platform that uses AI to analyze campaign performance, optimize ad spend, and maximize ROI across all marketing channels.",
      price: 50,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Campaign optimization", "Ad spend optimization", "Audience targeting", "Performance analytics", "A/B testing", "ROI tracking"],
      benefits: ["Increase ROI by 40%", "Reduce ad waste by 30%", "Improve targeting accuracy", "Automated optimization"],
      targetAudience: ["Marketing teams", "Digital agencies", "E-commerce", "SaaS companies"],
      tags: ["Marketing", "AI", "Optimization", "ROI", "Analytics"],
      marketPrice: "$50/month (Industry average: $90/month)",
      roi: "300% ROI within 4 months",
      implementationTime: "3-5 days",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Content Generation', 'Customer Service', 'Sales Intelligence', 'Computer Vision', 'Data Analytics', 'Process Automation', 'Cybersecurity', 'Marketing'];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
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
      case 'Content Generation': return <FileText className="w-6 h-6" />;
      case 'Customer Service': return <MessageSquare className="w-6 h-6" />;
      case 'Sales Intelligence': return <TrendingUp className="w-6 h-6" />;
      case 'Computer Vision': return <Eye className="w-6 h-6" />;
      case 'Data Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Process Automation': return <Zap className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Marketing': return <Target className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Subscription': return 'text-blue-400';
      case 'One-time': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions that transform businesses through automation, insights, and intelligent decision-making
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
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
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
                  <div className="text-purple-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-purple-400 bg-purple-400 bg-opacity-20">
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
                <div className="text-sm text-gray-400">{service.userLimit}</div>
                <div className="text-sm text-green-400 font-medium">{service.marketPrice}</div>
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
                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Start your free trial today</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-6">
              Our AI solutions are designed to scale with your business and provide measurable ROI
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
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

export default AIServicesPage;