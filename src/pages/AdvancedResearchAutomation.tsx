import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Brain, Zap, Globe, ArrowRight, CheckCircle, Star, BarChart3, Lightbulb } from 'lucide-react';

export default function AdvancedResearchAutomation() {
  const features = [
    {
      icon: Search,
      title: "Intelligent Research Discovery",
      description: "AI-powered research discovery across multiple databases and sources"
    },
    {
      icon: Brain,
      title: "Advanced Analytics",
      description: "Deep learning algorithms for pattern recognition and insights"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined research processes with intelligent automation"
    },
    {
      icon: Globe,
      title: "Global Data Access",
      description: "Access to worldwide research databases and repositories"
    }
  ];

  const capabilities = [
    "Automated Literature Review",
    "Data Mining & Analysis",
    "Pattern Recognition",
    "Predictive Modeling",
    "Cross-Reference Analysis",
    "Citation Management",
    "Research Collaboration Tools",
    "Real-time Data Updates"
  ];

  const benefits = [
    "Accelerate research by 10x faster",
    "Reduce manual research time by 80%",
    "Discover hidden connections and patterns",
    "Improve research quality and accuracy",
    "Enable collaborative research workflows",
    "Access to comprehensive data sources",
    "Automated citation and referencing",
    "Real-time research insights"
  ];

  const researchAreas = [
    "Scientific Research",
    "Market Research",
    "Academic Studies",
    "Medical Research",
    "Technology Trends",
    "Business Intelligence",
    "Social Sciences",
    "Environmental Studies"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Advanced Research Automation
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your research capabilities with AI-powered automation, intelligent discovery, 
            and advanced analytics that accelerate insights and breakthroughs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Researching
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Research Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that make research faster, smarter, and more effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-orange-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Research Automation
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our platform automates every aspect of the research process, from initial discovery 
                to final analysis and collaboration.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Lightbulb className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Research Benefits</h3>
                  <p className="text-gray-300">Accelerate your research today</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Across All Fields
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced research automation platform works across all research domains, 
              providing specialized tools and insights for your specific field.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading researchers and organizations that have already transformed 
            their research capabilities with AI-powered automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}