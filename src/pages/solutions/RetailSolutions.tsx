import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

export default function RetailSolutions() {
  const solutions = [
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Modern, scalable e-commerce solutions with AI-powered personalization",
      features: ["Multi-channel Sales", "AI Recommendations", "Inventory Management", "Payment Processing"]
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Omnichannel customer experience solutions with personalization",
      features: ["Customer Analytics", "Personalization Engine", "Loyalty Programs", "Customer Support"]
    },
    {
      icon: BarChart3,
      title: "Retail Analytics",
      description: "Advanced analytics and insights for retail optimization",
      features: ["Sales Analytics", "Customer Behavior", "Inventory Optimization", "Performance Metrics"]
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Mobile-first retail solutions for modern consumers",
      features: ["Mobile Apps", "Progressive Web Apps", "Mobile Payments", "Location Services"]
    },
    {
      icon: Shield,
      title: "Retail Security",
      description: "Comprehensive security solutions for retail environments",
      features: ["Payment Security", "Fraud Detection", "Data Protection", "Compliance Management"]
    },
    {
      icon: Zap,
      title: "Omnichannel Integration",
      description: "Seamless integration across all retail channels and touchpoints",
      features: ["Channel Integration", "Unified Inventory", "Order Management", "Customer Data"]
    }
  ];

  const benefits = [
    "Increased sales and conversion rates",
    "Improved customer satisfaction and loyalty",
    "Enhanced operational efficiency and cost savings",
    "Better inventory management and optimization",
    "Increased customer engagement and retention",
    "Enhanced data insights and decision-making"
  ];

  const caseStudies = [
    {
      company: "Regional Retail Chain",
      specialty: "Omnichannel Retail",
      challenge: "Disconnected online and offline customer experiences",
      solution: "Implemented unified omnichannel platform with AI personalization",
      results: "45% increase in online sales, 60% improvement in customer satisfaction"
    },
    {
      company: "E-commerce Startup",
      specialty: "Customer Experience",
      challenge: "Low conversion rates and poor customer engagement",
      solution: "AI-powered recommendation engine and personalized shopping experience",
      results: "35% increase in conversion rates, 50% improvement in average order value"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Retail Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transforming retail with AI-powered solutions for omnichannel commerce, customer experience, and operational excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Retail Quote
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Retail Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to omnichannel retail, we provide end-to-end solutions that drive sales and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retail Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements in sales, customer experience, and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retail Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from retail companies using our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-400">{study.specialty}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{study.company}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Challenge:</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Solution:</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Results:</h4>
                    <p className="text-gray-300">{study.results}</p>
                  </div>
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Retail?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our retail solutions can drive sales, improve customer experience, and optimize operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/services-overview"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}