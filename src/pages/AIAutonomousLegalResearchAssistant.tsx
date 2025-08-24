import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  Building,
  Zap,
  ArrowRight,
  Star,
  Users,
  BarChart3,
  Clock,
  TrendingUp,
  FileText,
  Search,
  CheckCircle
} from 'lucide-react';

const AIAutonomousLegalResearchAssistant = () => {
  const features = [
    "Autonomous case law analysis",
    "Statute interpretation & updates",
    "Legal precedent identification",
    "Real-time legal research",
    "Document analysis & summarization",
    "Citation verification",
    "Multi-jurisdiction support",
    "AI-powered legal insights"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Reduce research time from hours to minutes with AI-powered automation"
    },
    {
      icon: BarChart3,
      title: "Accuracy & Precision",
      description: "AI algorithms ensure comprehensive and accurate legal research results"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Lower legal research costs while improving quality and speed"
    },
    {
      icon: Shield,
      title: "Compliance & Updates",
      description: "Stay current with latest legal changes and regulatory updates"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Perfect for individual lawyers and small firms",
      features: [
        "Up to 100 research queries/month",
        "Basic case law analysis",
        "Standard legal databases access",
        "Email support",
        "Basic reporting dashboard"
      ]
    },
    {
      name: "Firm",
      price: "$1,999",
      period: "/month",
      description: "Ideal for law firms and legal departments",
      features: [
        "Up to 500 research queries/month",
        "Advanced AI analysis",
        "Premium legal databases",
        "Priority support",
        "Advanced analytics & reporting",
        "Multi-user access",
        "Custom integration support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large law firms and corporations",
      features: [
        "Unlimited research queries",
        "Custom AI model training",
        "Enterprise security features",
        "24/7 dedicated support",
        "Custom analytics & insights",
        "API access & integrations",
        "On-site training & support",
        "SLA guarantees"
      ]
    }
  ];

  const useCases = [
    {
      title: "Case Preparation",
      description: "Comprehensive legal research for case strategy and argument development",
      icon: FileText
    },
    {
      title: "Contract Review",
      description: "AI-powered analysis of contracts and legal documents",
      icon: Search
    },
    {
      title: "Regulatory Compliance",
      description: "Stay updated with changing regulations and compliance requirements",
      icon: Shield
    },
    {
      title: "Legal Opinions",
      description: "Generate well-researched legal opinions with AI assistance",
      icon: BarChart3
    }
  ];

  const industries = [
    "Corporate Law",
    "Criminal Defense",
    "Family Law",
    "Intellectual Property",
    "Real Estate Law",
    "Tax Law",
    "Employment Law",
    "Environmental Law"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-violet-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            AI Autonomous Legal Research Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered legal research tool that autonomously analyzes case law, statutes, 
            and legal precedents to provide comprehensive legal insights and accelerate your research.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Trusted by 1000+ legal professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>90% faster research completion</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>99.5% accuracy rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              AI-Powered Legal Research Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of legal research with our revolutionary AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Choose AI Legal Research?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your legal practice with the power of artificial intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Legal Practice Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI legal research is revolutionizing various aspects of legal practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Practice Areas Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI legal research assistant covers all major practice areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your legal research needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700/50 hover:border-purple-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-700/50 text-white hover:bg-gray-600/50 border border-gray-600/50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Revolutionize Your Legal Research?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of legal professionals who have transformed their practice with AI-powered research
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your AI Legal Journey
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousLegalResearchAssistant;