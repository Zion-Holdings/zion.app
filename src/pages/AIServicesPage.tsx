import { useState } from 'react';
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
    id: "ai-content-generation",
    title: "AI Content Generation Suite",
    description: "Comprehensive AI-powered content creation platform for marketing, blogs, social media, and technical documentation.",
    subcategory: "Content Generation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-format content generation", "SEO optimization", "Brand voice consistency", "Plagiarism detection", "Content calendar management", "Performance analytics"],
    benefits: ["10x faster content creation", "Improved SEO rankings", "Consistent brand messaging", "Reduced content costs", "Higher engagement rates"],
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
    rating: 4.7,
    aiScore: 92
  },
  {
    id: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    description: "Advanced machine learning platform for business forecasting, risk assessment, and data-driven decision making.",
    subcategory: "Data Analytics",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: ["Real-time data processing", "Custom ML model training", "Interactive dashboards", "API integrations", "Automated reporting", "Expert consultation"],
    benefits: ["95% forecast accuracy", "Reduced business risks", "Optimized resource allocation", "Competitive advantage", "Data-driven insights"],
    tags: ["AI", "Machine Learning", "Analytics", "Forecasting", "Business Intelligence"],
    rating: 4.9,
    aiScore: 98
  },
  {
    id: "computer-vision-solutions",
    title: "Computer Vision Solutions",
    description: "Enterprise computer vision platform for object detection, facial recognition, quality control, and automated inspection systems.",
    subcategory: "Computer Vision",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Real-time object detection", "Custom model training", "Edge computing support", "Multi-camera integration", "Analytics dashboard", "API access"],
    benefits: ["99.5% detection accuracy", "24/7 automated monitoring", "Reduced manual inspection costs", "Improved quality control", "Real-time alerts"],
    tags: ["AI", "Computer Vision", "Quality Control", "Automation", "IoT"],
    rating: 4.8,
    aiScore: 96
  },
  {
    id: "machine-learning-ops",
    title: "MLOps Platform",
    description: "Machine Learning Operations platform for model lifecycle management, deployment, monitoring, and continuous improvement.",
    subcategory: "MLOps",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: ["Model versioning", "Automated deployment", "Performance monitoring", "A/B testing", "Model governance", "CI/CD integration"],
    benefits: ["Faster model deployment", "Improved model performance", "Reduced operational overhead", "Better governance", "Continuous improvement"],
    tags: ["MLOps", "Machine Learning", "Deployment", "Monitoring", "Automation"],
    rating: 4.7,
    aiScore: 93
  },
  {
    id: "natural-language-processing",
    title: "NLP & Text Analytics",
    description: "Advanced natural language processing services for sentiment analysis, text classification, and language understanding.",
    subcategory: "Natural Language Processing",
    price: 349,
    currency: "$",
    pricingModel: "monthly",
    features: ["Sentiment analysis", "Text classification", "Entity recognition", "Language detection", "Custom model training", "API access"],
    benefits: ["Better customer insights", "Automated content moderation", "Improved search capabilities", "Enhanced user experience", "Data-driven decisions"],
    tags: ["NLP", "Text Analytics", "Sentiment Analysis", "Language Processing", "AI"],
    rating: 4.8,
    aiScore: 94
  },
  {
    id: "ai-recommendation-engine",
    title: "AI Recommendation Engine",
    description: "Intelligent recommendation system for personalized content, products, and services using advanced machine learning algorithms.",
    subcategory: "Recommendation Systems",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Personalized recommendations", "Real-time learning", "Multi-criteria optimization", "A/B testing framework", "Analytics dashboard", "API integration"],
    benefits: ["Increased conversion rates", "Improved user engagement", "Higher customer satisfaction", "Better retention", "Data-driven personalization"],
    tags: ["AI", "Recommendations", "Personalization", "Machine Learning", "User Experience"],
    rating: 4.8,
    aiScore: 94
  },
  {
    id: "ai-automated-testing",
    title: "AI-Powered Test Automation",
    description: "Intelligent test automation platform that uses AI to generate, execute, and maintain test cases automatically.",
    subcategory: "Test Automation",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["AI test case generation", "Automated test execution", "Visual regression testing", "Performance testing", "Test maintenance", "CI/CD integration"],
    benefits: ["90% faster test creation", "Reduced maintenance overhead", "Improved test coverage", "Faster release cycles", "Higher quality software"],
    tags: ["AI", "Test Automation", "Quality Assurance", "CI/CD", "Automation"],
    rating: 4.7,
    aiScore: 93
  },
  {
    id: "ai-data-quality",
    title: "AI Data Quality Platform",
    description: "Intelligent data quality management platform that automatically detects, cleans, and validates data using machine learning.",
    subcategory: "Data Quality",
    price: 249,
    currency: "$",
    pricingModel: "monthly",
    features: ["Automated data profiling", "Intelligent data cleaning", "Quality scoring", "Anomaly detection", "Data lineage tracking", "Compliance reporting"],
    benefits: ["Improved data accuracy", "Reduced manual effort", "Better decision making", "Compliance readiness", "Cost savings"],
    tags: ["AI", "Data Quality", "Data Management", "Automation", "Compliance"],
    rating: 4.6,
    aiScore: 91
  },
  {
    id: "ai-supply-chain",
    title: "AI Supply Chain Optimization",
    description: "Intelligent supply chain management platform using AI to optimize inventory, demand forecasting, and logistics operations.",
    subcategory: "Supply Chain AI",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Supplier risk assessment", "Real-time monitoring", "Predictive analytics"],
    benefits: ["20% inventory reduction", "Improved delivery times", "Reduced costs", "Better supplier management", "Risk mitigation"],
    tags: ["AI", "Supply Chain", "Logistics", "Optimization", "Forecasting"],
    rating: 4.8,
    aiScore: 95
  },
  {
    id: "ai-financial-analysis",
    title: "AI Financial Analysis Platform",
    description: "Intelligent financial analysis platform using AI for risk assessment, fraud detection, and investment recommendations.",
    subcategory: "Financial AI",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: ["Risk assessment", "Fraud detection", "Investment analysis", "Portfolio optimization", "Regulatory compliance", "Real-time monitoring"],
    benefits: ["Improved risk management", "Fraud prevention", "Better investment decisions", "Compliance automation", "Cost reduction"],
    tags: ["AI", "Finance", "Risk Management", "Fraud Detection", "Compliance"],
    rating: 4.9,
    aiScore: 96
  },
  {
    id: "ai-healthcare-analytics",
    title: "AI Healthcare Analytics",
    description: "Intelligent healthcare analytics platform using AI for patient diagnosis, treatment optimization, and operational efficiency.",
    subcategory: "Healthcare AI",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: ["Patient diagnosis support", "Treatment optimization", "Predictive analytics", "Operational efficiency", "Compliance management", "Expert consultation"],
    benefits: ["Improved patient outcomes", "Reduced healthcare costs", "Better resource allocation", "Enhanced efficiency", "Compliance assurance"],
    tags: ["AI", "Healthcare", "Analytics", "Diagnosis", "Treatment"],
    rating: 4.9,
    aiScore: 97
  },
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation",
    description: "Intelligent marketing automation platform using AI for customer segmentation, campaign optimization, and personalized messaging.",
    subcategory: "Marketing AI",
    price: 349,
    currency: "$",
    pricingModel: "monthly",
    features: ["Customer segmentation", "Campaign optimization", "Personalized messaging", "Predictive analytics", "A/B testing", "Performance tracking"],
    benefits: ["Improved campaign performance", "Higher conversion rates", "Better customer engagement", "Reduced marketing costs", "Data-driven decisions"],
    tags: ["AI", "Marketing", "Automation", "Personalization", "Analytics"],
    rating: 4.7,
    aiScore: 93
  },
  {
    id: "ai-customer-intelligence",
    title: "AI Customer Intelligence",
    description: "Intelligent customer intelligence platform using AI to analyze behavior, predict needs, and optimize customer experience.",
    subcategory: "Customer Intelligence",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Behavioral analysis", "Predictive modeling", "Customer journey mapping", "Sentiment analysis", "Churn prediction", "Personalization engine"],
    benefits: ["Improved customer retention", "Better customer experience", "Increased lifetime value", "Reduced churn", "Data-driven insights"],
    tags: ["AI", "Customer Intelligence", "Analytics", "Personalization", "Retention"],
    rating: 4.8,
    aiScore: 94
  },
  {
    id: "ai-process-mining",
    title: "AI Process Mining",
    description: "Intelligent process mining platform using AI to discover, analyze, and optimize business processes automatically.",
    subcategory: "Process Mining",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: ["Process discovery", "Performance analysis", "Bottleneck identification", "Optimization recommendations", "Compliance monitoring", "Real-time insights"],
    benefits: ["Process optimization", "Cost reduction", "Improved efficiency", "Compliance assurance", "Better decision making"],
    tags: ["AI", "Process Mining", "Optimization", "Analytics", "Efficiency"],
    rating: 4.7,
    aiScore: 93
  },
  {
    id: "ai-knowledge-management",
    title: "AI Knowledge Management",
    description: "Intelligent knowledge management platform using AI to organize, search, and share organizational knowledge effectively.",
    subcategory: "Knowledge Management",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: ["Intelligent search", "Knowledge organization", "Collaboration tools", "Expert identification", "Content recommendations", "Analytics dashboard"],
    benefits: ["Improved knowledge sharing", "Faster problem resolution", "Better collaboration", "Reduced training time", "Enhanced productivity"],
    tags: ["AI", "Knowledge Management", "Collaboration", "Search", "Productivity"],
    rating: 4.6,
    aiScore: 91
  },
  {
    id: "ai-voice-assistant",
    title: "AI Voice Assistant Platform",
    description: "Enterprise voice assistant platform using AI for hands-free operations, voice commands, and natural language interaction.",
    subcategory: "Voice AI",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Voice recognition", "Natural language processing", "Multi-language support", "Custom voice training", "Integration APIs", "Analytics dashboard"],
    benefits: ["Hands-free operation", "Improved accessibility", "Faster task completion", "Enhanced user experience", "Increased productivity"],
    tags: ["AI", "Voice Assistant", "NLP", "Accessibility", "Productivity"],
    rating: 4.7,
    aiScore: 92
  },
  {
    id: "ai-emotion-analysis",
    title: "AI Emotion Analysis",
    description: "Intelligent emotion analysis platform using AI to understand customer sentiment, employee engagement, and user emotions.",
    subcategory: "Emotion AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Facial expression analysis", "Voice emotion detection", "Text sentiment analysis", "Real-time monitoring", "Emotion tracking", "Analytics dashboard"],
    benefits: ["Better customer understanding", "Improved employee engagement", "Enhanced user experience", "Data-driven decisions", "Emotional intelligence"],
    tags: ["AI", "Emotion Analysis", "Sentiment", "User Experience", "Analytics"],
    rating: 4.6,
    aiScore: 90
  },
  {
    id: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance",
    description: "Intelligent predictive maintenance platform using AI to prevent equipment failures and optimize maintenance schedules.",
    subcategory: "Predictive Maintenance",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: ["Equipment monitoring", "Failure prediction", "Maintenance scheduling", "Cost optimization", "Real-time alerts", "Analytics dashboard"],
    benefits: ["Reduced downtime", "Lower maintenance costs", "Extended equipment life", "Improved safety", "Operational efficiency"],
    tags: ["AI", "Predictive Maintenance", "IoT", "Equipment", "Optimization"],
    rating: 4.8,
    aiScore: 94
  },
  {
    id: "ai-autonomous-systems",
    title: "AI Autonomous Systems",
    description: "Intelligent autonomous systems platform using AI for robotics, autonomous vehicles, and smart automation.",
    subcategory: "Autonomous Systems",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: ["Autonomous navigation", "Object recognition", "Decision making", "Safety systems", "Remote monitoring", "Expert consultation"],
    benefits: ["24/7 operation", "Improved safety", "Reduced human intervention", "Increased efficiency", "Cost optimization"],
    tags: ["AI", "Autonomous Systems", "Robotics", "Automation", "Safety"],
    rating: 4.9,
    aiScore: 97
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
      'Process Automation': '⚡',
      'AI Consulting': '🧠'
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