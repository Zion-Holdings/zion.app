import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Star } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Financial Services Transformation',
      company: 'Global Bank Corp',
      industry: 'Financial Services',
      challenge: 'Complex legacy systems and manual processes causing delays and errors',
      solution: 'Implemented AI-powered automation platform with quantum computing capabilities',
      results: {
        efficiency: '85%',
        costReduction: '60%',
        timeToMarket: '70%',
        customerSatisfaction: '95%'
      },
      image: '/api/placeholder/400/250',
      category: 'AI & Automation'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation Success',
      company: 'Metro Health Systems',
      industry: 'Healthcare',
      challenge: 'Patient data analysis taking weeks, affecting treatment decisions',
      solution: 'Deployed AI-powered diagnostic and treatment recommendation system',
      results: {
        efficiency: '90%',
        costReduction: '45%',
        timeToMarket: '80%',
        customerSatisfaction: '98%'
      },
      image: '/api/placeholder/400/250',
      category: 'Healthcare AI'
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      company: 'Tech Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'Integrated AI-powered predictive maintenance and quality control systems',
      results: {
        efficiency: '75%',
        costReduction: '55%',
        timeToMarket: '65%',
        customerSatisfaction: '92%'
      },
      image: '/api/placeholder/400/250',
      category: 'Industrial AI'
    },
    {
      id: 4,
      title: 'Retail Customer Experience Revolution',
      company: 'Smart Retail Chain',
      industry: 'Retail',
      challenge: 'Poor customer engagement and inventory management',
      solution: 'AI-powered customer analytics and inventory optimization platform',
      results: {
        efficiency: '80%',
        costReduction: '40%',
        timeToMarket: '75%',
        customerSatisfaction: '96%'
      },
      image: '/api/placeholder/400/250',
      category: 'Retail AI'
    },
    {
      id: 5,
      title: 'Government Digital Transformation',
      company: 'City Government',
      industry: 'Government',
      challenge: 'Slow citizen services and outdated systems',
      solution: 'Modernized infrastructure with AI-powered citizen service platform',
      results: {
        efficiency: '70%',
        costReduction: '50%',
        timeToMarket: '85%',
        customerSatisfaction: '94%'
      },
      image: '/api/placeholder/400/250',
      category: 'Government Tech'
    },
    {
      id: 6,
      title: 'Education Technology Innovation',
      company: 'University Network',
      industry: 'Education',
      challenge: 'Limited student engagement and outdated learning methods',
      solution: 'AI-powered personalized learning platform with adaptive content',
      results: {
        efficiency: '85%',
        costReduction: '35%',
        timeToMarket: '90%',
        customerSatisfaction: '97%'
      },
      image: '/api/placeholder/400/250',
      category: 'EdTech'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Healthcare AI', 'Industrial AI', 'Retail AI', 'Government Tech', 'EdTech'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how organizations across industries are transforming their operations 
              with our cutting-edge AI and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-xl border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-cyan-400 text-4xl font-bold">{study.company.charAt(0)}</div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {study.company} • {study.industry}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.results.efficiency}</div>
                      <div className="text-xs text-gray-400">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.results.costReduction}</div>
                      <div className="text-xs text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.results.timeToMarket}</div>
                      <div className="text-xs text-gray-400">Faster Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{study.results.customerSatisfaction}</div>
                      <div className="text-xs text-gray-400">Satisfaction</div>
                    </div>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful organizations that have transformed their operations with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;