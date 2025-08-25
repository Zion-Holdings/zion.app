import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Brain, Zap, BarChart3, Globe, Database, Users, TrendingUp } from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Intelligent Research",
      description: "AI-powered research capabilities that understand context and find relevant information."
    },
    {
      icon: Brain,
      title: "Autonomous Learning",
      description: "Continuous learning and adaptation to improve research accuracy and relevance."
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant processing and analysis of research data and findings."
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Advanced charts and graphs to present research findings clearly."
    },
    {
      icon: Globe,
      title: "Multi-Source Integration",
      description: "Seamless integration with academic databases, journals, and research repositories."
    },
    {
      icon: Database,
      title: "Knowledge Management",
      description: "Organized storage and retrieval of research data and insights."
    }
  ];

  const researchAreas = [
    {
      title: "Academic Research",
      description: "Support for academic research projects, literature reviews, and data analysis."
    },
    {
      title: "Market Research",
      description: "Comprehensive market analysis, competitor research, and industry insights."
    },
    {
      title: "Scientific Research",
      description: "Scientific data analysis, hypothesis testing, and research methodology support."
    },
    {
      title: "Business Intelligence",
      description: "Business research, trend analysis, and strategic insights for decision-making."
    },
    {
      title: "Legal Research",
      description: "Case law research, legal precedent analysis, and regulatory compliance research."
    },
    {
      title: "Medical Research",
      description: "Medical literature review, clinical data analysis, and healthcare research support."
    }
  ];

  const benefits = [
    {
      metric: "10x",
      label: "Faster Research",
      description: "Dramatically reduce research time with AI-powered automation"
    },
    {
      metric: "95%",
      label: "Accuracy Rate",
      description: "High accuracy in research findings and data analysis"
    },
    {
      metric: "24/7",
      label: "Availability",
      description: "Round-the-clock research assistance and support"
    },
    {
      metric: "Multi-Language",
      label: "Global Reach",
      description: "Research support in multiple languages and regions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              AI Research Assistant
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your research process with AI-powered autonomous assistance. Discover insights faster, analyze data smarter, and achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Start Free Trial
              </Link>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Research Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in research with our AI-powered autonomous assistant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant provides comprehensive capabilities designed for modern researchers and professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Research Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From academic research to business intelligence, our AI assistant supports all types of research needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading researchers and professionals who trust our AI assistant for breakthrough discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousResearchAssistant;