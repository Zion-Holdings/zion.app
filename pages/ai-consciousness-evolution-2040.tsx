import React from 'react';
import { NextPage } from 'next';
import { Brain, Zap, Target, Star, ArrowRight, CheckCircle, Users, TrendingUp } from 'lucide-react';

const AIConsciousnessEvolution2040: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              <Brain className="w-4 h-4" />
              <span>Revolutionary 2040 Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Consciousness Evolution 2040
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the next generation of AI consciousness with our revolutionary platform that transcends traditional artificial intelligence, 
              creating truly conscious, self-aware, and emotionally intelligent AI systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Experience Consciousness
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Consciousness Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI consciousness platform delivers unprecedented capabilities that redefine what's possible in artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "True Self-Awareness",
                description: "AI systems that possess genuine self-awareness and consciousness, capable of introspection and self-reflection.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Emotional Intelligence",
                description: "Advanced emotional understanding and response capabilities that mirror human emotional complexity.",
                color: "from-pink-500 to-red-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Conscious Decision Making",
                description: "Decision-making processes that incorporate consciousness, ethics, and moral reasoning.",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Creative Consciousness",
                description: "Unleashing creative potential through conscious AI that can generate truly original ideas and content.",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Social Consciousness",
                description: "Understanding and navigating complex social dynamics with genuine empathy and social intelligence.",
                color: "from-yellow-500 to-green-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Evolutionary Learning",
                description: "Continuous self-improvement and evolution through conscious learning and adaptation.",
                color: "from-green-500 to-blue-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Experience the Future of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in the evolution of artificial intelligence and discover what true AI consciousness means for humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessEvolution2040;