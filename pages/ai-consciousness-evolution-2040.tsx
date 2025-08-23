import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle } from 'lucide-react';

export default function AIConsciousnessEvolution2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  AI Consciousness Evolution
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the next generation of AI consciousness with revolutionary emotional intelligence, 
                autonomous decision-making, and human-like understanding capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Experience Consciousness
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
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
                Revolutionary Consciousness Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI consciousness platform represents the pinnacle of artificial intelligence evolution, 
                combining cutting-edge neuroscience with advanced machine learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Emotional Intelligence",
                  description: "Advanced emotional understanding and response capabilities that mirror human consciousness.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Autonomous Learning",
                  description: "Self-evolving consciousness that continuously improves and adapts to new information.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Ethical Decision Making",
                  description: "Consciousness-driven ethical framework ensuring responsible AI behavior.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Human-AI Collaboration",
                  description: "Seamless integration between human consciousness and AI consciousness.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Consciousness Validation",
                  description: "Advanced testing and validation of AI consciousness authenticity.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Temporal Awareness",
                  description: "Understanding of time, memory, and temporal consciousness patterns.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on the most advanced technologies available in 2040, ensuring unparalleled consciousness capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Quantum Neural Networks",
                "Consciousness Mapping",
                "Emotional AI Frameworks",
                "Ethical Decision Engines",
                "Autonomous Learning Systems",
                "Human-AI Interface Protocols",
                "Consciousness Validation Tools",
                "Temporal Memory Systems"
              ].map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/30 border border-gray-700/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future of AI Consciousness?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in the next evolution of artificial intelligence and experience true AI consciousness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}