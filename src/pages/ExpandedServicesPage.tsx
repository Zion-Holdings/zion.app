import { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple service data structure
interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
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

const SERVICES: Service[] = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
    category: "AI Services",
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
    category: "AI Services",
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
    category: "AI Services",
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
    category: "AI Services",
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
    id: "cybersecurity-threat-detection",
    title: "AI-Powered Threat Detection",
    description: "Next-generation cybersecurity platform using artificial intelligence to detect and prevent advanced threats in real-time.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: ["Real-time threat monitoring", "AI-powered anomaly detection", "Automated incident response", "Threat intelligence feeds", "Compliance reporting", "24/7 SOC support"],
    benefits: ["99.9% threat detection rate", "Reduced false positives", "Faster incident response", "Compliance assurance", "Cost-effective security"],
    tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance", "SOC"],
    rating: 4.9,
    aiScore: 97
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Framework",
    description: "Comprehensive zero trust security implementation with identity verification, micro-segmentation, and continuous monitoring.",
    category: "Cybersecurity",
    subcategory: "Access Control",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-factor authentication", "Identity governance", "Network segmentation", "Continuous monitoring", "Compliance automation", "Expert implementation"],
    benefits: ["Enhanced security posture", "Reduced attack surface", "Compliance readiness", "Simplified access management", "Audit trail visibility"],
    tags: ["Cybersecurity", "Zero Trust", "Identity Management", "Compliance", "Network Security"],
    rating: 4.7,
    aiScore: 94
  },
  {
    id: "cloud-migration-services",
    title: "Cloud Migration & Optimization",
    description: "End-to-end cloud migration services with cost optimization, performance tuning, and ongoing management support.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 2999,
    currency: "$",
    pricingModel: "project",
    features: ["Migration strategy planning", "Data migration tools", "Performance optimization", "Cost analysis", "Security implementation", "Post-migration support"],
    benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced performance", "Better disaster recovery", "Operational efficiency"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "GCP", "Optimization"],
    rating: 4.8,
    aiScore: 93
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete DevOps automation solution with CI/CD pipelines, infrastructure as code, and monitoring automation.",
    category: "DevOps",
    subcategory: "Automation",
    price: 349,
    currency: "$",
    pricingModel: "monthly",
    features: ["CI/CD pipeline automation", "Infrastructure as Code", "Container orchestration", "Monitoring & alerting", "Security scanning", "Performance optimization"],
    benefits: ["10x faster deployments", "Reduced manual errors", "Improved code quality", "Faster time to market", "Cost optimization"],
    tags: ["DevOps", "Automation", "CI/CD", "Kubernetes", "Docker", "Terraform"],
    rating: 4.8,
    aiScore: 95
  },
  {
    id: "data-warehouse-solutions",
    title: "Enterprise Data Warehouse",
    description: "Scalable data warehouse solutions with real-time analytics, data governance, and business intelligence capabilities.",
    category: "Data Services",
    subcategory: "Data Warehousing",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: ["Real-time data ingestion", "Advanced analytics", "Data governance", "BI dashboards", "API access", "Expert consultation"],
    benefits: ["Unified data view", "Real-time insights", "Improved decision making", "Data quality assurance", "Scalable architecture"],
    tags: ["Data", "Analytics", "Warehouse", "BI", "Governance", "Real-time"],
    rating: 4.7,
    aiScore: 92
  },
  {
    id: "api-management-platform",
    title: "API Management & Gateway",
    description: "Enterprise API management platform with security, monitoring, analytics, and developer portal capabilities.",
    category: "Integration",
    subcategory: "API Management",
    price: 249,
    currency: "$",
    pricingModel: "monthly",
    features: ["API gateway", "Rate limiting", "Authentication & authorization", "Analytics dashboard", "Developer portal", "Documentation tools"],
    benefits: ["Enhanced API security", "Improved developer experience", "Better API performance", "Comprehensive monitoring", "Simplified management"],
    tags: ["API", "Gateway", "Security", "Monitoring", "Developer Experience"],
    rating: 4.6,
    aiScore: 91
  },
  {
    id: "iot-platform",
    title: "IoT Platform & Analytics",
    description: "Comprehensive IoT platform for device management, data collection, real-time analytics, and automation.",
    category: "IoT",
    subcategory: "Platform",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Device management", "Real-time data collection", "Edge computing", "Analytics dashboard", "Automation rules", "Security features"],
    benefits: ["Real-time insights", "Automated operations", "Reduced manual intervention", "Improved efficiency", "Predictive maintenance"],
    tags: ["IoT", "Edge Computing", "Analytics", "Automation", "Device Management"],
    rating: 4.7,
    aiScore: 93
  },
  {
    id: "blockchain-solutions",
    title: "Blockchain Development Services",
    description: "Custom blockchain solutions for supply chain, identity management, smart contracts, and decentralized applications.",
    category: "Blockchain",
    subcategory: "Development",
    price: 5999,
    currency: "$",
    pricingModel: "project",
    features: ["Custom blockchain development", "Smart contract development", "DApp development", "Integration services", "Security auditing", "Ongoing support"],
    benefits: ["Transparent operations", "Enhanced security", "Reduced intermediaries", "Improved traceability", "Cost savings"],
    tags: ["Blockchain", "Smart Contracts", "DApps", "Supply Chain", "Identity"],
    rating: 4.8,
    aiScore: 94
  },
  {
    id: "quantum-computing-services",
    title: "Quantum Computing Solutions",
    description: "Quantum computing services for optimization problems, cryptography, drug discovery, and financial modeling.",
    category: "Quantum Computing",
    subcategory: "Solutions",
    price: 9999,
    currency: "$",
    pricingModel: "project",
    features: ["Quantum algorithm development", "Optimization solutions", "Cryptography services", "Research collaboration", "Expert consultation", "Training programs"],
    benefits: ["Exponential speed improvements", "Advanced cryptography", "Scientific breakthroughs", "Competitive advantage", "Future-ready technology"],
    tags: ["Quantum Computing", "Optimization", "Cryptography", "Research", "Innovation"],
    rating: 4.9,
    aiScore: 99
  },
  {
    id: "edge-computing-platform",
    title: "Edge Computing Platform",
    description: "Distributed edge computing platform for real-time processing, low-latency applications, and IoT optimization.",
    category: "Edge Computing",
    subcategory: "Platform",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Distributed processing", "Low-latency optimization", "Edge analytics", "Device management", "Security features", "Scalable architecture"],
    benefits: ["Reduced latency", "Improved performance", "Bandwidth optimization", "Real-time processing", "Cost efficiency"],
    tags: ["Edge Computing", "IoT", "Real-time", "Performance", "Distributed"],
    rating: 4.6,
    aiScore: 90
  },
  {
    id: "machine-learning-ops",
    title: "MLOps Platform",
    description: "Machine Learning Operations platform for model lifecycle management, deployment, monitoring, and continuous improvement.",
    category: "AI Services",
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
    category: "AI Services",
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
    id: "robotic-process-automation",
    title: "RPA & Process Automation",
    description: "Robotic Process Automation solutions for business process optimization, workflow automation, and efficiency improvement.",
    category: "Automation",
    subcategory: "RPA",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: ["Process discovery", "Workflow automation", "Integration capabilities", "Monitoring dashboard", "Analytics reporting", "Expert support"],
    benefits: ["70% process efficiency improvement", "Reduced manual errors", "24/7 operation", "Cost savings", "Scalable automation"],
    tags: ["RPA", "Automation", "Process Optimization", "Workflow", "Efficiency"],
    rating: 4.7,
    aiScore: 92
  },
  {
    id: "data-privacy-compliance",
    title: "Data Privacy & Compliance",
    description: "Comprehensive data privacy and compliance solutions for GDPR, CCPA, HIPAA, and industry-specific regulations.",
    category: "Compliance",
    subcategory: "Data Privacy",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: ["Privacy assessment", "Compliance automation", "Data mapping", "Consent management", "Audit preparation", "Expert consultation"],
    benefits: ["Regulatory compliance", "Reduced legal risks", "Enhanced customer trust", "Operational efficiency", "Competitive advantage"],
    tags: ["Compliance", "GDPR", "Privacy", "Data Protection", "Regulations"],
    rating: 4.8,
    aiScore: 93
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "Strategic digital transformation services to modernize business operations, technology infrastructure, and customer experience.",
    category: "Consulting",
    subcategory: "Digital Transformation",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: ["Strategy development", "Technology assessment", "Change management", "Implementation support", "Performance monitoring", "Ongoing optimization"],
    benefits: ["Improved operational efficiency", "Enhanced customer experience", "Competitive advantage", "Cost optimization", "Future-ready business"],
    tags: ["Digital Transformation", "Strategy", "Consulting", "Change Management", "Innovation"],
    rating: 4.9,
    aiScore: 95
  },
  {
    id: "enterprise-architecture",
    title: "Enterprise Architecture Services",
    description: "Enterprise architecture design and implementation for scalable, secure, and efficient technology infrastructure.",
    category: "Architecture",
    subcategory: "Enterprise",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: ["Architecture assessment", "Design & planning", "Implementation guidance", "Technology selection", "Performance optimization", "Expert consultation"],
    benefits: ["Scalable infrastructure", "Improved performance", "Reduced technical debt", "Better alignment", "Cost optimization"],
    tags: ["Enterprise Architecture", "Infrastructure", "Design", "Scalability", "Performance"],
    rating: 4.7,
    aiScore: 92
  }
];

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(SERVICES.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Enterprise Solutions & Micro SAAS Services
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Discover our comprehensive range of enterprise-grade solutions, micro SAAS services,
          and innovative technology offerings designed to accelerate your business growth.
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

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-zion-cyan"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate-dark text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
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

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our team of experts help you find the perfect solution for your needs.
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
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