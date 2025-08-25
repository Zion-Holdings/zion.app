import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Target, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export default function AIHRRecruitment() {
  const features = [
    {
      icon: Users,
      title: "Smart Candidate Sourcing",
      description: "AI-powered talent discovery that identifies and attracts top candidates across multiple platforms."
    },
    {
      icon: Search,
      title: "Intelligent Resume Parsing",
      description: "Advanced NLP algorithms that extract key information and match candidates to job requirements."
    },
    {
      icon: Target,
      title: "Predictive Candidate Scoring",
      description: "Machine learning models that predict candidate success and cultural fit based on multiple data points."
    },
    {
      icon: Brain,
      title: "Automated Interview Scheduling",
      description: "Smart scheduling system that coordinates interviews across multiple stakeholders and time zones."
    },
    {
      icon: Zap,
      title: "Bias-Free Screening",
      description: "AI algorithms designed to eliminate unconscious bias and ensure fair candidate evaluation."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with GDPR compliance and data protection measures."
    }
  ];

  const benefits = [
    "Reduce time-to-hire by 40-60% with automated screening",
    "Improve candidate quality by 30-50% with AI matching",
    "Cut recruitment costs by 25-40% through automation",
    "Increase diversity by 35-45% with bias-free screening",
    "Enhance candidate experience with 24/7 engagement",
    "Achieve 90%+ candidate satisfaction scores"
  ];

  const useCases = [
    {
      industry: "Technology",
      description: "Technical skill assessment, coding challenges, and culture fit evaluation",
      metrics: ["Time-to-Hire", "Quality of Hire", "Retention Rate"]
    },
    {
      industry: "Healthcare",
      description: "Clinical competency verification, license validation, and patient safety assessment",
      metrics: ["Credential Verification", "Clinical Skills", "Patient Outcomes"]
    },
    {
      industry: "Finance",
      description: "Regulatory compliance, background checks, and risk assessment",
      metrics: ["Compliance Rate", "Background Check Speed", "Risk Score"]
    },
    {
      industry: "Manufacturing",
      description: "Safety training verification, skill assessment, and operational readiness",
      metrics: ["Safety Score", "Skill Proficiency", "Training Completion"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,000",
      period: "/month",
      description: "Perfect for small companies starting with AI recruitment",
      features: [
        "Up to 50 job postings",
        "Basic AI screening",
        "Resume parsing",
        "Interview scheduling",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$6,000",
      period: "/month",
      description: "Ideal for growing companies with advanced recruitment needs",
      features: [
        "Up to 200 job postings",
        "Advanced AI matching",
        "Predictive analytics",
        "Multi-channel sourcing",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex hiring requirements",
      features: [
        "Unlimited job postings",
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
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI HR & Recruitment
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Revolutionize your hiring process with intelligent AI that finds, screens, and matches 
            the best candidates while eliminating bias and reducing time-to-hire.
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
            Advanced HR & Recruitment Features
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
              Proven Recruitment Results
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
            Industry Applications
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
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI-powered recruitment platform 
              to find and hire the best talent faster and more efficiently.
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