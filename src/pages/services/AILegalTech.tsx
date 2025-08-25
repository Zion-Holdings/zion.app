import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  FileText, 
  Search, 
  Brain, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  UserCheck,
  Zap
} from 'lucide-react';

export default function AILegalTech() {
  const features = [
    {
      icon: Scale,
      title: "Contract Analysis",
      description: "AI-powered contract review that identifies risks, obligations, and opportunities in legal documents."
    },
    {
      icon: FileText,
      title: "Document Generation",
      description: "Automated creation of legal documents, contracts, and agreements with customizable templates."
    },
    {
      icon: Search,
      title: "Legal Research",
      description: "Intelligent search through case law, statutes, and legal precedents with relevance scoring."
    },
    {
      icon: Brain,
      title: "Risk Assessment",
      description: "Machine learning models that predict legal risks and compliance issues before they arise."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated tracking of regulatory changes and compliance requirements across jurisdictions."
    },
    {
      icon: Clock,
      title: "E-Discovery",
      description: "AI-powered document review and analysis for litigation and regulatory investigations."
    }
  ];

  const benefits = [
    "Reduce legal document review time by 60-80% with AI analysis",
    "Cut legal research costs by 40-60% through automation",
    "Improve contract accuracy by 85-95% with AI validation",
    "Accelerate case preparation by 50-70% with smart insights",
    "Enhance compliance monitoring with 24/7 automated tracking",
    "Achieve 99%+ accuracy in legal document processing"
  ];

  const useCases = [
    {
      industry: "Corporate Law",
      description: "Contract review, M&A due diligence, and corporate governance compliance",
      metrics: ["Contract Review Speed", "Risk Detection Rate", "Compliance Score"]
    },
    {
      industry: "Litigation",
      description: "E-discovery, case research, and evidence analysis",
      metrics: ["Document Review Speed", "Evidence Discovery Rate", "Case Success Rate"]
    },
    {
      industry: "Real Estate",
      description: "Lease agreement analysis, title review, and regulatory compliance",
      metrics: ["Agreement Review Speed", "Risk Assessment", "Compliance Rate"]
    },
    {
      industry: "Healthcare",
      description: "Regulatory compliance, patient consent, and medical malpractice defense",
      metrics: ["Compliance Rate", "Risk Assessment", "Document Accuracy"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$3,000",
      period: "/month",
      description: "Perfect for small law firms starting with AI legal tech",
      features: [
        "Up to 100 documents/month",
        "Basic contract analysis",
        "Document generation",
        "Legal research tools",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$8,000",
      period: "/month",
      description: "Ideal for growing law firms with advanced legal tech needs",
      features: [
        "Up to 500 documents/month",
        "Advanced AI analysis",
        "Risk assessment",
        "Compliance monitoring",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large law firms and corporate legal departments",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced security",
        "API access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Scale className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Legal Tech
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your legal practice with intelligent AI that analyzes documents, 
            conducts research, and provides insights to enhance efficiency and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-quote"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Legal Technology Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Proven Legal Practice Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Practice Area Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan">Key Metrics:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-2xl p-6 ${
                plan.popular ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' : 'border-zion-cyan/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light'
                      : 'bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of law firms already using our AI-powered legal technology platform 
              to enhance efficiency, accuracy, and client service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/request-quote"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}