import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Atom, TestTube, TrendingUp, Shield, Microscope } from 'lucide-react';

export default function QuantumMaterialsDiscovery2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Quantum Materials Discovery
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of materials science with revolutionary quantum technology that accelerates 
                discovery, predicts properties, and creates next-generation materials with unprecedented capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Materials Discovery
                </button>
                <button className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-xl hover:bg-violet-400 hover:text-black transition-all duration-300">
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
                Revolutionary Quantum Materials Discovery Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum materials discovery platform represents the pinnacle of materials science technology, 
                combining quantum computing with advanced simulation and prediction capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum Simulation",
                  description: "Advanced quantum simulations for accurate materials property prediction.",
                  color: "from-violet-500 to-purple-500"
                },
                {
                  icon: <TestTube className="w-8 h-8" />,
                  title: "Virtual Synthesis",
                  description: "AI-powered virtual synthesis of new materials with desired properties.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Microscope className="w-8 h-8" />,
                  title: "Quantum Analysis",
                  description: "Quantum-powered analysis of materials at atomic and molecular levels.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <TestTube className="w-8 h-8" />,
                  title: "Property Prediction",
                  description: "Accurate prediction of materials properties before synthesis.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Integration",
                  description: "AI algorithms that accelerate materials discovery and optimization.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Quality Assurance",
                  description: "Advanced quality control and validation of discovered materials.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-violet-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Materials Discovery?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Accelerate your materials research with quantum technology that predicts and discovers breakthrough materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Accelerated Discovery",
                  description: "Dramatically faster materials discovery through quantum simulation.",
                  color: "from-violet-500 to-purple-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Cost Reduction",
                  description: "Significant reduction in research and development costs.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Innovation Leadership",
                  description: "Stay ahead with cutting-edge materials science technology.",
                  color: "from-green-500 to-emerald-500"
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
              Ready to Discover New Materials?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of quantum materials discovery and accelerate your breakthrough research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Discovery Today
              </button>
              <button className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-xl hover:bg-violet-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}