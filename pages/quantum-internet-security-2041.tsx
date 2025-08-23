import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Shield, Network, Lock, TrendingUp, Globe, Eye } from 'lucide-react';

export default function QuantumInternetSecurity2041() {
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
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Quantum Internet Security
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of internet security with revolutionary quantum technology that provides 
                unbreakable encryption, quantum key distribution, and next-generation cybersecurity protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Secure Your Internet
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
                Revolutionary Quantum Internet Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum internet security platform represents the pinnacle of cybersecurity technology, 
                combining quantum mechanics with advanced encryption and security protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Quantum Key Distribution",
                  description: "Unbreakable encryption keys distributed using quantum mechanics principles.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Quantum Network Security",
                  description: "Advanced security protocols for quantum internet infrastructure.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Quantum Encryption",
                  description: "Next-generation encryption algorithms resistant to quantum attacks.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Quantum Monitoring",
                  description: "Real-time security monitoring using quantum detection systems.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Security",
                  description: "Worldwide quantum security infrastructure and protection.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Integration",
                  description: "AI-powered quantum security analysis and threat detection.",
                  color: "from-yellow-500 to-orange-500"
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
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Internet Security?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Protect your digital assets with quantum technology that provides unbreakable security and future-proof protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Unbreakable Security",
                  description: "Quantum encryption that cannot be broken by any known computational method.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Future-Proof Protection",
                  description: "Security that remains effective even against future quantum computers.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Global Standards",
                  description: "Compliance with international quantum security standards and protocols.",
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
              Ready to Secure Your Internet?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of quantum internet security and protect your digital assets with unbreakable encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Start Quantum Security Today
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