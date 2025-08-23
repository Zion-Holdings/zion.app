import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Search, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, TestTube, Lightbulb, Globe, TrendingUp } from 'lucide-react';

export default function AIAutonomousResearch2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  AI Autonomous Research
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of autonomous AI research with revolutionary self-directed discovery, 
                hypothesis generation, and breakthrough innovation capabilities that accelerate scientific progress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Autonomous Research
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Autonomous Research Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI autonomous research platform represents the pinnacle of self-directed artificial intelligence, 
                combining advanced machine learning with sophisticated research methodologies and breakthrough discovery capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Self-Directed Discovery",
                  description: "AI that independently identifies research opportunities and pursues promising avenues of investigation.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Hypothesis Generation",
                  description: "Autonomous creation of novel research hypotheses based on data analysis and pattern recognition.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <TestTube className="w-8 h-8" />,
                  title: "Experimental Design",
                  description: "AI-driven design of research experiments and methodologies to test hypotheses.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Data Analysis",
                  description: "Advanced autonomous analysis of complex datasets to extract meaningful insights.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Cross-Domain Research",
                  description: "Integration of insights from multiple disciplines to create breakthrough innovations.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Rapid Iteration",
                  description: "Accelerated research cycles through autonomous optimization and refinement.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Autonomous Research?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Accelerate your research and development with AI that works independently to discover breakthroughs and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "24/7 Research",
                  description: "Continuous autonomous research operations that never stop, accelerating discovery timelines.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Breakthrough Innovation",
                  description: "AI-driven discovery of novel solutions and approaches that humans might miss.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Cost Efficiency",
                  description: "Reduced research costs through automated processes and optimized resource utilization.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.color} p-5 mx-auto mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Research?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of autonomous AI research and accelerate your breakthrough discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Research Today
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}