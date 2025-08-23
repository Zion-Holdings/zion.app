import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Dna, Leaf, TrendingUp, Shield, TestTube, Microscope } from 'lucide-react';

export default function QuantumBioComputing2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Quantum Bio-Computing
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of biological computing with revolutionary quantum technology that combines 
                quantum mechanics with biological systems for unprecedented computational capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Start Bio-Computing
                </button>
                <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300">
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
                Revolutionary Quantum Bio-Computing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum bio-computing platform represents the pinnacle of biological computing technology, 
                combining quantum mechanics with advanced biological systems and computational biology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Dna className="w-8 h-8" />,
                  title: "Quantum DNA Computing",
                  description: "Quantum computing using DNA molecules for biological information processing.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: "Biological Quantum Systems",
                  description: "Integration of quantum mechanics with living biological systems.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <TestTube className="w-8 h-8" />,
                  title: "Quantum Bio-Synthesis",
                  description: "Quantum-controlled biological synthesis and molecular engineering.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Microscope className="w-8 h-8" />,
                  title: "Quantum Bio-Imaging",
                  description: "Advanced imaging using quantum bio-computing technology.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Neural Quantum Computing",
                  description: "Quantum computing integrated with biological neural networks.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Bio-Security",
                  description: "Advanced security protocols for biological computing systems.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Bio-Computing?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your computing capabilities with quantum technology that integrates with biological systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Biological Integration",
                  description: "Seamless integration of quantum computing with biological systems.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Advanced Processing",
                  description: "Unprecedented processing capabilities through quantum bio-computing.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Innovation Leadership",
                  description: "Leading-edge technology at the intersection of quantum and biology.",
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
              Ready to Start Bio-Computing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of quantum bio-computing and unlock the potential of biological quantum systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Bio-Computing Today
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}