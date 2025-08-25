import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Brain, Zap, Database, Globe, TrendingUp, Users, BookOpen } from 'lucide-react';

const AdvancedResearchAutomation: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Intelligent Literature Review",
      description: "AI-powered analysis of research papers, patents, and scientific literature"
    },
    {
      icon: Brain,
      title: "Hypothesis Generation",
      description: "Machine learning algorithms that suggest new research directions and hypotheses"
    },
    {
      icon: Zap,
      title: "Automated Data Collection",
      description: "Intelligent scraping and collection of research data from multiple sources"
    },
    {
      icon: Database,
      title: "Data Analysis Pipeline",
      description: "Automated statistical analysis and visualization of research findings"
    },
    {
      icon: Globe,
      title: "Collaborative Research",
      description: "Multi-institutional research coordination and knowledge sharing"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Identify emerging research trends and opportunities in your field"
    }
  ];

  const researchAreas = [
    {
      title: "Scientific Research",
      description: "Accelerate discoveries in physics, chemistry, biology, and mathematics",
      icon: Search,
      examples: ["Drug discovery", "Climate modeling", "Particle physics", "Genomics research"]
    },
    {
      title: "Market Research",
      description: "Comprehensive analysis of market trends, competitors, and opportunities",
      icon: TrendingUp,
      examples: ["Competitive analysis", "Market sizing", "Consumer behavior", "Industry trends"]
    },
    {
      title: "Academic Research",
      description: "Streamline academic research processes and collaboration",
      icon: BookOpen,
      examples: ["Literature reviews", "Citation analysis", "Research collaboration", "Publication tracking"]
    },
    {
      title: "Technology Research",
      description: "Stay ahead of emerging technologies and innovation trends",
      icon: Brain,
      examples: ["Patent analysis", "Technology forecasting", "Innovation tracking", "R&D optimization"]
    }
  ];

  const capabilities = [
    {
      title: "Literature Mining",
      description: "Extract insights from millions of research papers and documents",
      features: ["Semantic search", "Citation analysis", "Trend identification", "Gap analysis"]
    },
    {
      title: "Data Collection",
      description: "Automated gathering of research data from diverse sources",
      features: ["Web scraping", "API integration", "Database mining", "Real-time updates"]
    },
    {
      title: "Analysis & Visualization",
      description: "Advanced analytics and interactive visualizations",
      features: ["Statistical analysis", "Machine learning", "Interactive charts", "Report generation"]
    },
    {
      title: "Collaboration Tools",
      description: "Foster research collaboration across teams and institutions",
      features: ["Team workspaces", "Version control", "Comment systems", "Progress tracking"]
    }
  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Reduce research time by 60-80% through automation",
      metric: "60-80%"
    },
    {
      title: "Quality Improvement",
      description: "Higher quality research through comprehensive analysis",
      metric: "3x"
    },
    {
      title: "Cost Reduction",
      description: "Lower research costs through efficient resource utilization",
      metric: "40%"
    },
    {
      title: "Innovation Speed",
      description: "Accelerate breakthrough discoveries and innovations",
      metric: "5x"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Advanced Research Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your research capabilities with AI-powered automation. Our platform accelerates 
              discoveries, streamlines collaboration, and unlocks insights hidden in vast amounts of data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-400">Comprehensive research automation powered by artificial intelligence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Research Areas</h2>
            <p className="text-xl text-gray-400">Accelerate research across diverse domains and industries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{area.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{area.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {area.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-400">Powerful tools to accelerate your research and discoveries</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-400 text-lg mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Benefits</h2>
            <p className="text-xl text-gray-400">See the real impact on your research productivity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-4xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Research Tool Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing research tools and databases</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "PubMed", "arXiv", "IEEE Xplore", "ScienceDirect", "Google Scholar", "Web of Science",
              "Scopus", "ResearchGate", "Mendeley", "EndNote", "Zotero", "Overleaf"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-orange-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Research?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading researchers and institutions that have transformed their research 
            capabilities with our automation platform. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedResearchAutomation;