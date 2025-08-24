import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple AI service data structure
interface AIService {
  id: string;
  title: string;
  description: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  tags: string[];
  rating: number;
  aiScore: number;
}

const AI_SERVICES: AIService[] = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
    subcategory: "Chatbots & Conversational AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-language support (50+ languages)", "Advanced NLP with GPT-4 integration", "Custom training on your data", "Analytics dashboard", "API integration", "24/7 customer support"],
    benefits: ["Reduce customer service costs by 60%", "24/7 availability", "Scalable customer support", "Improved customer satisfaction", "Data-driven insights"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    rating: 4.8,
    aiScore: 95
  },
  {
    id: "content-generation-ai",
    title: "AI Content Generation Suite",
    description: "Advanced AI-powered content creation platform for marketing, documentation, and creative writing with brand voice customization.",
    subcategory: "Content Generation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-format content generation", "Brand voice training", "SEO optimization", "Plagiarism detection", "Collaboration tools", "Analytics dashboard"],
    benefits: ["10x faster content creation", "Consistent brand voice", "SEO-optimized content", "Cost-effective marketing", "Scalable content production"],
    tags: ["AI", "Content Generation", "Marketing", "SEO", "Writing"],
    rating: 4.7,
    aiScore: 93
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Platform",
    description: "AI-powered predictive analytics solution for business forecasting, risk assessment, and data-driven decision making.",
    subcategory: "Data Analytics",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: ["Advanced ML algorithms", "Real-time data processing", "Custom model training", "Interactive dashboards", "API integration", "Expert support"],
    benefits: ["Accurate predictions", "Risk mitigation", "Data-driven decisions", "Competitive advantage", "ROI optimization"],
    tags: ["AI", "Analytics", "Machine Learning", "Predictions", "Business Intelligence"],
    rating: 4.9,
    aiScore: 96
  },
  {
    id: "computer-vision-ai",
    title: "Computer Vision AI Platform",
    description: "Enterprise computer vision solution for image recognition, object detection, and visual data analysis across industries.",
    subcategory: "Computer Vision",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: ["Image recognition", "Object detection", "Facial recognition", "Custom model training", "Real-time processing", "Cloud deployment"],
    benefits: ["Automated visual analysis", "Quality control", "Security enhancement", "Process automation", "Cost reduction"],
    tags: ["AI", "Computer Vision", "Image Processing", "Automation", "Security"],
    rating: 4.6,
    aiScore: 91
  },
  {
    id: "nlp-processing",
    title: "Natural Language Processing Engine",
    description: "Advanced NLP platform for text analysis, sentiment analysis, and language understanding with custom model capabilities.",
    subcategory: "Natural Language Processing",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: ["Text analysis", "Sentiment analysis", "Language detection", "Custom model training", "API access", "Documentation"],
    benefits: ["Deep text understanding", "Customer insights", "Process automation", "Scalable processing", "Multi-language support"],
    tags: ["AI", "NLP", "Text Analysis", "Sentiment", "Language"],
    rating: 4.8,
    aiScore: 94
  }
];

export default function AIServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const filteredServices = AI_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    return matchesSearch && matchesSubcategory;
  });

  const subcategories = ['all', ...Array.from(new Set(AI_SERVICES.map(s => s.subcategory)))];

  const getSubcategoryIcon = (subcategory: string) => {
    const icons: { [key: string]: string } = {
      'Chatbots & Conversational AI': '💬',
      'Content Generation': '✍️',
      'Data Analytics': '📊',
      'Computer Vision': '👁️',
      'Natural Language Processing': '🧠'
    };
    return icons[subcategory] || '🤖';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. 
          From chatbots to predictive analytics, we deliver enterprise-grade AI services.
        </p>
        
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.filter(cat => cat !== 'all').map((subcategory) => (
            <div key={subcategory} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl mb-4">{getSubcategoryIcon(subcategory)}</div>
              <h3 className="text-xl font-bold text-white mb-2">{subcategory}</h3>
              <p className="text-zion-slate-light text-sm">
                Advanced AI solutions for {subcategory.toLowerCase()} applications
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-zion-cyan"
            />
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan"
            >
              {subcategories.map(subcategory => (
                <option key={subcategory} value={subcategory} className="bg-zion-slate-dark text-white">
                  {subcategory === 'all' ? 'All AI Services' : subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white text-sm">{service.rating}</span>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-zion-cyan font-semibold">
                  {service.currency}{service.price}
                  <span className="text-sm text-zion-slate-light ml-1">
                    /{service.pricingModel}
                  </span>
                </span>
                <span className="bg-zion-purple text-white px-2 py-1 rounded text-sm">
                  AI Score: {service.aiScore}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Learn More
                </button>
                <button className="bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Success Stories */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            AI Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">60% Cost Reduction</h3>
              <p className="text-zion-slate-light">
                AI chatbot implementation reduced customer service costs by 60% for a Fortune 500 company
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">10x Faster Content</h3>
              <p className="text-zion-slate-light">
                AI content generation increased marketing team productivity by 10x while maintaining quality
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">95% Accuracy</h3>
              <p className="text-zion-slate-light">
                Predictive analytics achieved 95% accuracy in sales forecasting for retail clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why AI with Zion */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Zion for AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert AI Team</h3>
                <p className="text-zion-slate-light">
                  Our team includes PhD-level AI researchers and industry veterans with proven track records
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">
                  SOC 2 compliant with enterprise-grade security and data privacy protection
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
                <p className="text-zion-slate-light">
                  24/7 support across all time zones with local expertise and rapid response times
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-zion-slate-light">
                  Track record of successful AI implementations with measurable ROI and business impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our AI experts help you identify the perfect artificial intelligence solutions for your business needs. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get AI Consultation
            </Link>
            <a href="https://ziontechgroup.com" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}