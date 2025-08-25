import React from 'react';
import { Link } from 'react-router-dom';

export default function AIResearchAssistant() {
  const features = [
    {
      title: 'Intelligent Literature Review',
      description: 'AI-powered analysis of research papers, journals, and academic sources',
      icon: '📚',
      benefits: ['Faster research discovery', 'Comprehensive coverage', 'Trend analysis']
    },
    {
      title: 'Data Mining & Analysis',
      description: 'Advanced algorithms to extract insights from large datasets',
      icon: '🔍',
      benefits: ['Pattern recognition', 'Statistical analysis', 'Predictive modeling']
    },
    {
      title: 'Citation Management',
      description: 'Automated citation tracking and bibliography generation',
      icon: '📝',
      benefits: ['Multiple format support', 'Auto-updating', 'Collaboration tools']
    },
    {
      title: 'Research Collaboration',
      description: 'Real-time collaboration tools for research teams',
      icon: '👥',
      benefits: ['Shared workspaces', 'Version control', 'Communication tools']
    }
  ];

  const useCases = [
    {
      industry: 'Academic Research',
      applications: ['Literature reviews', 'Meta-analyses', 'Systematic reviews', 'Grant writing']
    },
    {
      industry: 'Market Research',
      applications: ['Competitive analysis', 'Trend forecasting', 'Customer insights', 'Industry reports']
    },
    {
      industry: 'Scientific Research',
      applications: ['Data analysis', 'Hypothesis testing', 'Experimental design', 'Publication support']
    },
    {
      industry: 'Business Intelligence',
      applications: ['Market analysis', 'Risk assessment', 'Strategic planning', 'Performance metrics']
    }
  ];

  const tools = [
    { name: 'Semantic Scholar', url: 'https://www.semanticscholar.org/', description: 'AI-powered academic search engine' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/', description: 'Comprehensive academic search' },
    { name: 'ResearchGate', url: 'https://www.researchgate.net/', description: 'Academic social network' },
    { name: 'arXiv', url: 'https://arxiv.org/', description: 'Preprint repository' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            AI Research Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your research process with AI-powered tools that accelerate discovery, 
            enhance collaboration, and deliver deeper insights across all domains.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Research Project
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Research Applications Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-300">
                      • {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Research Tools Integration */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Integrated Research Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{tool.name}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Visit Tool
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Research?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading researchers and organizations who are already using AI to accelerate 
              their discoveries and gain competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}