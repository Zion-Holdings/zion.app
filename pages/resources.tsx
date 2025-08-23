import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, BookOpen, Globe, Shield, TrendingUp, Building, Star, Download, Play, FileText, ExternalLink } from 'lucide-react';

export default function Resources() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Knowledge Hub
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Resources
                </span>
                <br />
                <span className="text-white">Learn, Explore, Innovate</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Access our comprehensive collection of whitepapers, case studies, guides, 
                and tools to accelerate your understanding of cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Browse All Resources
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Request Custom Content
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our organized collection of resources designed to help you 
                understand and implement cutting-edge technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-12 h-12" />,
                  title: "Whitepapers",
                  description: "In-depth technical analysis and research on AI consciousness, quantum computing, and autonomous systems.",
                  count: "15+ papers",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <BookOpen className="w-12 h-12" />,
                  title: "Case Studies",
                  description: "Real-world implementations and success stories from our clients across various industries.",
                  count: "25+ studies",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Play className="w-12 h-12" />,
                  title: "Video Content",
                  description: "Educational videos, webinars, and demonstrations of our technology in action.",
                  count: "50+ videos",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Download className="w-12 h-12" />,
                  title: "Tools & Templates",
                  description: "Practical tools, frameworks, and templates to accelerate your technology implementation.",
                  count: "30+ tools",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Training Materials",
                  description: "Comprehensive training programs and educational materials for teams and organizations.",
                  count: "20+ courses",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Research Reports",
                  description: "Latest industry research, trends, and insights on emerging technologies.",
                  count: "40+ reports",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((category, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 text-sm font-medium">{category.count}</span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most popular and valuable resources that have helped 
                organizations transform their technology capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Consciousness Implementation Guide",
                  type: "Whitepaper",
                  description: "A comprehensive guide to implementing AI consciousness systems in enterprise environments, including ethical considerations and best practices.",
                  author: "Dr. Sarah Chen",
                  date: "March 2025",
                  pages: "45 pages",
                  downloads: "2,847",
                  color: "from-blue-500 to-indigo-500",
                  icon: <FileText className="w-8 h-8" />
                },
                {
                  title: "Quantum Computing ROI Analysis",
                  type: "Case Study",
                  description: "Real-world analysis of quantum computing implementation in financial services, including cost-benefit analysis and performance metrics.",
                  author: "Prof. Michael Rodriguez",
                  date: "February 2025",
                  pages: "32 pages",
                  downloads: "1,923",
                  color: "from-purple-500 to-pink-500",
                  icon: <BookOpen className="w-8 h-8" />
                }
              ].map((resource, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${resource.color} p-3`}>
                      {resource.icon}
                    </div>
                    <div>
                      <span className={`px-3 py-1 bg-gradient-to-r ${resource.color} text-white text-sm rounded-full`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{resource.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {resource.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {resource.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {resource.pages}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{resource.downloads} downloads</span>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our newest resources and latest insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Autonomous Systems Security Framework",
                  type: "Guide",
                  description: "Security best practices for implementing autonomous systems in enterprise environments.",
                  date: "March 10, 2025",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "AI Ethics Compliance Checklist",
                  type: "Template",
                  description: "Comprehensive checklist for ensuring AI systems meet ethical and compliance requirements.",
                  date: "March 8, 2025",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Quantum Internet Architecture Guide",
                  type: "Technical Paper",
                  description: "Detailed architecture for building quantum internet infrastructure.",
                  date: "March 5, 2025",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Healthcare AI Implementation Case Study",
                  type: "Case Study",
                  description: "Success story of AI implementation in a major healthcare network.",
                  date: "March 3, 2025",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  title: "Space Technology Innovation Report",
                  type: "Research Report",
                  description: "Latest innovations in space technology and their commercial applications.",
                  date: "March 1, 2025",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Future of Work Technology Guide",
                  type: "Guide",
                  description: "How AI and automation will transform the workplace in the next decade.",
                  date: "February 28, 2025",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((resource, index) => (
                <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${resource.color} text-white text-sm rounded-full`}>
                      {resource.type}
                    </span>
                    <span className="text-gray-400 text-sm">{resource.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{resource.description}</p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Request */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Something Specific?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Can't find what you're looking for? Let us know what resources would be most 
              valuable to you, and we'll create custom content tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Request Custom Resource
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}