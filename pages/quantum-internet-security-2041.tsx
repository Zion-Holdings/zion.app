import React from 'react';
import Layout from '../components/layout/Layout';
import { Network, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Shield, Lock } from 'lucide-react';

export default function QuantumInternetSecurity2041() {
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
                  Quantum Internet Security
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of internet security with quantum-powered protection that 
                renders traditional cyber attacks obsolete and ensures unbreakable communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Secure Your Network
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
                Revolutionary Quantum Internet Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum internet security platform represents the pinnacle of network protection, 
                combining quantum mechanics with advanced cybersecurity principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Quantum Encryption",
                  description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Quantum Network Protection",
                  description: "Advanced protection for quantum networks and quantum internet infrastructure.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Threat Detection",
                  description: "Instant detection and response to quantum and classical cyber threats.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Multi-User Security",
                  description: "Secure communication channels for multiple users and organizations.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Quantum Authentication",
                  description: "Advanced authentication systems using quantum properties and biometrics.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Future-Proof Security",
                  description: "Security systems designed to withstand future quantum computing threats.",
                  color: "from-indigo-500 to-purple-500"
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

        {/* Security Layers */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Layer Quantum Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive security architecture that protects every layer of your network 
                infrastructure with quantum-powered defenses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Physical Layer", description: "Quantum key distribution and hardware security" },
                { name: "Network Layer", description: "Quantum routing and traffic protection" },
                { name: "Transport Layer", description: "Quantum-secured data transmission" },
                { name: "Application Layer", description: "Quantum-resistant application security" },
                { name: "Data Layer", description: "Quantum encryption and data protection" },
                { name: "Access Layer", description: "Quantum authentication and authorization" },
                { name: "Monitoring Layer", description: "Quantum threat detection and response" },
                { name: "Compliance Layer", description: "Regulatory compliance and auditing" }
              ].map((layer, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{layer.name}</h3>
                  <p className="text-gray-400 text-sm">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Network Security with Quantum Technology
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Achieve unprecedented levels of security and protect your digital assets 
                from current and future cyber threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Unbreakable Encryption",
                  description: "Quantum encryption that cannot be cracked by classical or quantum computers."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Future-Proof Security",
                  description: "Protection against emerging quantum computing threats and attacks."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Real-time Protection",
                  description: "Instant threat detection and response with quantum-speed processing."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Zero Trust Architecture",
                  description: "Complete network security with no implicit trust assumptions."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Regulatory Compliance",
                  description: "Meet and exceed security standards and compliance requirements."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Cost Reduction",
                  description: "Lower security costs through automated quantum protection systems."
                }
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-start space-x-4">
                    {benefit.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Network with Quantum Technology?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum security revolution and protect your digital infrastructure 
              with the most advanced security technology available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Secure Your Network Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Schedule Security Audit
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}