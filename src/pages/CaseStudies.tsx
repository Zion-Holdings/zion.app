import React from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp, Users, Globe, Database, Shield, Zap, Brain } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Manufacturing Optimization",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes leading to 30% waste and delayed deliveries",
      solution: "Implemented AI autonomous systems for predictive maintenance and production optimization",
      results: [
        "40% reduction in production waste",
        "25% improvement in delivery times",
        "$2.5M annual cost savings",
        "99.5% uptime improvement"
      ],
      icon: Brain,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum-Safe Cybersecurity Implementation",
      company: "Financial Services Inc",
      industry: "Financial Services",
      challenge: "Vulnerable to quantum computing attacks and regulatory compliance issues",
      solution: "Deployed quantum-resistant encryption and SOC2 compliance automation",
      results: [
        "100% quantum-safe security posture",
        "SOC2 Type II compliance achieved",
        "Zero security breaches in 18 months",
        "50% reduction in compliance audit time"
      ],
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "5G Enterprise Network Transformation",
      company: "Tech Solutions Ltd",
      industry: "Technology",
      challenge: "Outdated network infrastructure limiting growth and innovation",
      solution: "Implemented 5G enterprise solutions with AI-powered asset management",
      results: [
        "10x faster network speeds",
        "99.9% network reliability",
        "60% reduction in IT infrastructure costs",
        "Real-time network monitoring and optimization"
      ],
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Research Assistant for Healthcare",
      company: "Medical Research Institute",
      industry: "Healthcare",
      challenge: "Slow research processes and limited access to medical literature",
      solution: "Deployed AI autonomous research assistant with medical database integration",
      results: [
        "90% faster research completion",
        "Access to 10M+ medical papers",
        "Improved accuracy in diagnosis research",
        "Collaboration with 50+ research institutions"
      ],
      icon: Users,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Autonomous Business Operations Platform",
      company: "E-commerce Giant",
      industry: "Retail",
      challenge: "Manual business processes causing delays and customer service issues",
      solution: "Implemented autonomous business operations platform with AI automation",
      results: [
        "24/7 automated customer service",
        "95% reduction in manual processing",
        "Real-time business intelligence",
        "$5M annual operational cost savings"
      ],
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Quantum Neural Network for Drug Discovery",
      company: "Pharmaceutical Research",
      industry: "Pharmaceuticals",
      challenge: "Slow drug discovery process and limited computational power",
      solution: "Deployed quantum neural network platform for molecular simulation",
      results: [
        "100x faster molecular simulations",
        "Accelerated drug discovery timeline",
        "Improved accuracy in drug targeting",
        "Potential breakthrough in cancer treatment"
      ],
      icon: Award,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const industries = [
    "Manufacturing", "Financial Services", "Technology", "Healthcare", 
    "Retail", "Pharmaceuticals", "Energy", "Transportation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how leading organizations are transforming their businesses with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Start Your Success Story
              </Link>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Filter by Industry
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="p-8 border-b border-cyan-500/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      {study.company}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="p-8 border-b border-cyan-500/30">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join these leading organizations and transform your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;