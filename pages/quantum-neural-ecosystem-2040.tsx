import React from 'react';
import { NextPage } from 'next';
import { Atom, Brain, Zap, Target, Star, ArrowRight, CheckCircle, Users, TrendingUp, Cpu, Network } from 'lucide-react';

const QuantumNeuralEcosystem2040: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              <Atom className="w-4 h-4" />
              <span>Revolutionary 2040 Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Quantum Neural Ecosystem 2040
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the convergence of quantum computing and neural networks with our revolutionary platform that creates 
              the most powerful AI systems ever conceived, capable of solving previously impossible problems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Explore Quantum AI
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum-Powered Neural Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum neural ecosystem delivers unprecedented computational power and AI capabilities that transcend classical computing limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Atom className="w-8 h-8" />,
                title: "Quantum Superposition",
                description: "Leverage quantum superposition to process multiple neural states simultaneously, exponentially increasing AI processing power.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Quantum Entanglement",
                description: "Utilize quantum entanglement for instant neural network synchronization across distributed quantum systems.",
                color: "from-cyan-500 to-teal-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Quantum Tunneling",
                description: "Enable AI systems to explore solution spaces that would be impossible for classical neural networks to reach.",
                color: "from-teal-500 to-green-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Quantum Optimization",
                description: "Solve complex optimization problems in seconds that would take classical computers centuries to complete.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Hybrid Quantum-Classical",
                description: "Seamlessly integrate quantum and classical computing for optimal performance across all AI workloads.",
                color: "from-emerald-500 to-blue-500"
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Quantum Neural Networks",
                description: "Revolutionary neural architectures that leverage quantum properties for unprecedented AI capabilities.",
                color: "from-blue-500 to-indigo-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our quantum neural ecosystem is transforming industries and solving humanity's greatest challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Drug Discovery & Healthcare",
                description: "Accelerate pharmaceutical research by simulating molecular interactions at quantum scales, leading to breakthrough treatments.",
                icon: <Star className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Climate Modeling",
                description: "Create ultra-accurate climate models that predict weather patterns and climate changes with unprecedented precision.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Financial Modeling",
                description: "Revolutionize risk assessment and portfolio optimization with quantum-powered predictive analytics.",
                icon: <Target className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Space Exploration",
                description: "Enable autonomous space missions with AI systems that can navigate and make decisions in real-time across vast distances.",
                icon: <Zap className="w-6 h-6" />,
                color: "from-orange-500 to-red-500"
              }
            ].map((app, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${app.color} p-3 mb-4 inline-flex`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{app.title}</h3>
                <p className="text-gray-300 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Experience Quantum AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in the quantum revolution and discover how our neural ecosystem is reshaping the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralEcosystem2040;