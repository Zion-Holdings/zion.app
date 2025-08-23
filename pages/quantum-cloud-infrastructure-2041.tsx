import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Cloud, Server, TrendingUp, Shield, Globe, Cpu } from 'lucide-react';

export default function QuantumCloudInfrastructure2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Quantum Cloud Infrastructure
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of cloud computing with revolutionary quantum infrastructure that provides 
                unprecedented processing power, quantum security, and next-generation cloud capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Build Quantum Cloud
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
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
                Revolutionary Quantum Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum cloud infrastructure platform represents the pinnacle of cloud computing technology, 
                combining quantum computing with advanced cloud architecture and quantum security protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Quantum Cloud Computing",
                  description: "Cloud infrastructure powered by quantum computing for unprecedented performance.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Quantum Server Architecture",
                  description: "Advanced server infrastructure optimized for quantum operations and processing.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Quantum Security",
                  description: "Unbreakable security protocols built into the cloud infrastructure.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Quantum Network",
                  description: "Worldwide quantum cloud infrastructure with seamless connectivity.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Quantum Processing Units",
                  description: "Specialized quantum processing units for cloud-based quantum computing.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Integration",
                  description: "AI-powered quantum cloud management and optimization systems.",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your cloud operations with quantum technology that provides unprecedented performance and security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Quantum Performance",
                  description: "Unprecedented processing power and computational capabilities.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Scalable Infrastructure",
                  description: "Infrastructure that scales seamlessly with growing quantum computing demands.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Future-Proof Technology",
                  description: "Cloud infrastructure built for the quantum computing era.",
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
              Ready to Build Quantum Cloud?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of quantum cloud infrastructure and unlock unprecedented computing power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Quantum Cloud Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}