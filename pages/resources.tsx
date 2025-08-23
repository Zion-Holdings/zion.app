import React from 'react';
import { NextPage } from 'next';
import { BookOpen, FileText, Video, Users, ArrowRight, CheckCircle, Star, Zap, Target, Brain, Atom, Rocket, Download, ExternalLink } from 'lucide-react';

const Resources: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Knowledge Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
              Resources & Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Access comprehensive documentation, tutorials, case studies, and resources to help you master 
              our revolutionary AI consciousness, quantum computing, and space technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources organized by technology and use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Consciousness",
                description: "Documentation, tutorials, and research papers on AI consciousness evolution and emotional intelligence.",
                resources: ["API Documentation", "Implementation Guides", "Research Papers", "Case Studies"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Atom className="w-8 h-8" />,
                title: "Quantum Computing",
                description: "Comprehensive guides on quantum algorithms, neural networks, and cybersecurity applications.",
                resources: ["Quantum Algorithms", "Hardware Guides", "Security Protocols", "Performance Benchmarks"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Space Technology",
                description: "Resources for space resource intelligence, autonomous exploration, and extraterrestrial technology.",
                resources: ["Exploration Guides", "Resource Mapping", "Autonomous Systems", "Colonization Plans"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Business Intelligence",
                description: "Guides for implementing autonomous business intelligence and predictive analytics systems.",
                resources: ["Implementation Guides", "Best Practices", "ROI Calculators", "Success Stories"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Neural Interfaces",
                description: "Documentation for brain-computer interfaces and neural enhancement technologies.",
                resources: ["Development Guides", "Safety Protocols", "Integration Examples", "Research Papers"],
                color: "from-pink-500 to-red-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Integration & APIs",
                description: "Technical documentation and integration guides for all our technology platforms.",
                resources: ["API References", "SDK Downloads", "Integration Examples", "Webhook Guides"],
                color: "from-orange-500 to-yellow-500"
              }
            ].map((category, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Available Resources:</h4>
                  <ul className="space-y-1">
                    {category.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                  Explore Resources
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Types */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Documentation Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access different types of documentation to suit your learning style and technical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Documentation",
                description: "Comprehensive technical guides, API references, and implementation details for developers and engineers.",
                icon: <FileText className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500",
                features: ["API References", "Code Examples", "Architecture Guides", "Performance Metrics"]
              },
              {
                title: "Video Tutorials",
                description: "Step-by-step video guides and demonstrations for visual learners and hands-on practitioners.",
                icon: <Video className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500",
                features: ["Step-by-step Guides", "Live Demonstrations", "Best Practices", "Troubleshooting"]
              },
              {
                title: "Case Studies",
                description: "Real-world examples and success stories from organizations using our revolutionary technologies.",
                icon: <Star className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
                features: ["Success Stories", "ROI Analysis", "Implementation Details", "Lessons Learned"]
              },
              {
                title: "Research Papers",
                description: "Academic research and technical papers on AI consciousness, quantum computing, and emerging technologies.",
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-orange-500 to-red-500",
                features: ["Academic Research", "Technical Papers", "Innovation Insights", "Future Trends"]
              }
            ].map((type, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${type.color} p-3 mb-4 inline-flex`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Downloads */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quick Downloads
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our most popular resources and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Getting Started Guide",
              "API Quick Reference",
              "Security Best Practices",
              "Performance Optimization",
              "Integration Checklist",
              "Troubleshooting Guide",
              "Architecture Overview",
              "Deployment Guide"
            ].map((resource, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                <Download className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">{resource}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Access our comprehensive resource library and become an expert in revolutionary technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Browse All Resources
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;