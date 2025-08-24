import React from 'react';
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Search, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle, 
  Star,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      name: "AI Content Generation Suite",
      description: "Revolutionary AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, marketing materials, and social media.",
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      features: [
        "Multi-language content generation",
        "SEO optimization with keyword research",
        "Brand voice training and customization",
        "Plagiarism detection and originality scoring",
        "Content performance analytics",
        "Automated content scheduling",
        "Team collaboration tools",
        "API integration capabilities"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$599/month",
        enterprise: "$1,299/month"
      },
      marketPrice: "$500-800/month",
      useCases: ["Marketing agencies", "Content creators", "E-commerce businesses", "Bloggers", "Social media managers"],
      benefits: [
        "10x faster content creation",
        "Improved SEO rankings",
        "Consistent brand voice",
        "Reduced content costs",
        "24/7 content generation"
      ],
      website: "https://ziontechgroup.com/ai-content-generation"
    },
    {
      name: "AI Customer Service Platform",
      description: "Intelligent chatbot solution with advanced natural language processing, sentiment analysis, and seamless human handoff capabilities.",
      icon: <MessageSquare className="w-12 h-12 text-green-500" />,
      features: [
        "Natural language understanding",
        "Multi-language support (50+ languages)",
        "Sentiment analysis and mood detection",
        "Seamless human agent handoff",
        "Integration with major CRM platforms",
        "Real-time analytics and reporting",
        "Custom knowledge base training",
        "Voice and text support"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$399/month",
        enterprise: "$799/month"
      },
      marketPrice: "$300-600/month",
      useCases: ["E-commerce platforms", "SaaS companies", "Customer support teams", "Healthcare providers", "Financial services"],
      benefits: [
        "24/7 customer support",
        "Reduced response times",
        "Lower support costs",
        "Improved customer satisfaction",
        "Scalable support operations"
      ],
      website: "https://ziontechgroup.com/ai-customer-service"
    },
    {
      name: "AI Sales Intelligence Platform",
      description: "Predictive analytics and lead scoring platform powered by machine learning algorithms for sales optimization and revenue growth.",
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      features: [
        "Advanced lead scoring algorithms",
        "Sales forecasting and predictions",
        "Pipeline analytics and insights",
        "CRM and marketing automation integration",
        "Real-time performance tracking",
        "Custom sales playbooks",
        "Competitive intelligence",
        "Revenue optimization recommendations"
      ],
      pricing: {
        starter: "$399/month",
        professional: "$799/month",
        enterprise: "$1,599/month"
      },
      marketPrice: "$600-1000/month",
      useCases: ["Sales teams", "B2B companies", "Growth teams", "Sales managers", "Revenue operations"],
      benefits: [
        "Increased conversion rates",
        "Better lead prioritization",
        "Improved sales forecasting",
        "Higher revenue per salesperson",
        "Data-driven sales decisions"
      ],
      website: "https://ziontechgroup.com/ai-sales-intelligence"
    },
    {
      name: "AI-Powered Search & RAG System",
      description: "Advanced retrieval-augmented generation system for intelligent document search, knowledge management, and contextual information retrieval.",
      icon: <Search className="w-12 h-12 text-orange-500" />,
      features: [
        "Vector-based semantic search",
        "Document processing and indexing",
        "Contextual question answering",
        "Multi-format document support",
        "Real-time knowledge updates",
        "Custom knowledge base creation",
        "API access and integrations",
        "Advanced analytics and insights"
      ],
      pricing: {
        starter: "$499/month",
        professional: "$999/month",
        enterprise: "$1,999/month"
      },
      marketPrice: "$800-1500/month",
      useCases: ["Research institutions", "Legal firms", "Healthcare organizations", "Educational institutions", "Enterprise knowledge management"],
      benefits: [
        "Instant information retrieval",
        "Improved research efficiency",
        "Better decision making",
        "Reduced information silos",
        "Enhanced knowledge sharing"
      ],
      website: "https://ziontechgroup.com/ai-search-rag"
    },
    {
      name: "AI Security & Guardrails",
      description: "Comprehensive AI safety and security platform with content filtering, bias detection, and ethical AI governance tools.",
      icon: <Shield className="w-12 h-12 text-red-500" />,
      features: [
        "Content safety filtering",
        "Bias detection and mitigation",
        "Ethical AI guidelines enforcement",
        "Real-time threat detection",
        "Compliance monitoring",
        "Audit trails and reporting",
        "Custom policy creation",
        "Integration with AI platforms"
      ],
      pricing: {
        starter: "$599/month",
        professional: "$1,199/month",
        enterprise: "$2,499/month"
      },
      marketPrice: "$1000-2000/month",
      useCases: ["AI development teams", "Enterprises", "Government agencies", "Healthcare providers", "Financial institutions"],
      benefits: [
        "Reduced AI risks",
        "Compliance assurance",
        "Ethical AI deployment",
        "Improved trust and transparency",
        "Risk mitigation"
      ],
      website: "https://ziontechgroup.com/ai-security-guardrails"
    },
    {
      name: "AI Evaluation & Testing Lab",
      description: "Comprehensive AI model evaluation platform with automated testing, performance benchmarking, and quality assurance tools.",
      icon: <Brain className="w-12 h-12 text-indigo-500" />,
      features: [
        "Automated model testing",
        "Performance benchmarking",
        "Quality assurance tools",
        "Bias and fairness testing",
        "Robustness evaluation",
        "Custom evaluation metrics",
        "Continuous monitoring",
        "Comprehensive reporting"
      ],
      pricing: {
        starter: "$799/month",
        professional: "$1,599/month",
        enterprise: "$3,199/month"
      },
      marketPrice: "$1200-2500/month",
      useCases: ["AI research teams", "ML engineers", "Data scientists", "AI product teams", "Quality assurance teams"],
      benefits: [
        "Improved AI model quality",
        "Faster model deployment",
        "Reduced AI risks",
        "Better performance tracking",
        "Comprehensive evaluation"
      ],
      website: "https://ziontechgroup.com/ai-evaluation-lab"
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "500+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Cost Savings", value: "40-60%" },
    { label: "Implementation Time", value: "2-4 weeks" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Brain className="w-20 h-20 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered solutions that transform businesses through intelligent automation, predictive analytics, and cutting-edge machine learning technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now: +1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Services%20Inquiry"
                className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Get AI Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our AI Service Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to drive innovation, efficiency, and competitive advantage across all business functions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Pricing Plans:</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Starter:</span>
                          <span className="text-green-400 font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Professional:</span>
                          <span className="text-blue-400 font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Enterprise:</span>
                          <span className="text-purple-400 font-semibold">{service.pricing.enterprise}</span>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        Market price: <span className="line-through">{service.marketPrice}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Best For:</h4>
                      <ul className="space-y-1">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="text-xs text-gray-300">• {useCase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-300">• {benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex gap-3">
                      <a 
                        href={service.website}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>Get Quote</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Zion Tech Group for AI Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  We leverage the latest AI/ML technologies and frameworks to deliver state-of-the-art solutions.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Expert AI Team</h3>
                <p className="text-gray-300">
                  Our team of AI specialists, data scientists, and ML engineers bring years of experience.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Proven Results</h3>
                <p className="text-gray-300">
                  Track record of successful AI implementations with measurable business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations, drive innovation, and create competitive advantages.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 2 hours</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown, DE 19709</p>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Services%20Consultation%20-%20Zion%20Tech%20Group"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              >
                <span>Start Your AI Transformation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Revolutionary AI and technology solutions that transform businesses worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">AI Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/ai-content-generation" className="hover:text-blue-400 transition-colors">Content Generation</a></li>
                <li><a href="/ai-customer-service" className="hover:text-blue-400 transition-colors">Customer Service</a></li>
                <li><a href="/ai-sales-intelligence" className="hover:text-blue-400 transition-colors">Sales Intelligence</a></li>
                <li><a href="/ai-search-rag" className="hover:text-blue-400 transition-colors">Search & RAG</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-blue-400 transition-colors ml-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-blue-400 transition-colors ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}