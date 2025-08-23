import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Shield, Atom, Zap, Target, Users, Award, Clock, CheckCircle, Lock, Eye } from 'lucide-react';

export default function QuantumCybersecurityFuture2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300 text-sm mb-6">
                <Shield className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Quantum Cybersecurity Future
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of cybersecurity with our revolutionary quantum-powered security platform, 
                providing unbreakable encryption and advanced threat detection capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Secure Your Future
                </button>
                <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
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
                Revolutionary Cybersecurity Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum cybersecurity platform represents the pinnacle of security technology, 
                combining quantum computing power with advanced threat detection and prevention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum Encryption",
                  description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Advanced Threat Detection",
                  description: "AI-powered threat detection using quantum computing for pattern recognition.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Protection",
                  description: "Instant threat response and protection across all digital assets and networks.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Zero Trust Security",
                  description: "Comprehensive zero-trust architecture with quantum-verified authentication.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Quantum Monitoring",
                  description: "Advanced monitoring systems using quantum sensors and AI analysis.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Predictive Security",
                  description: "AI-driven threat prediction and proactive security measures.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
                Advanced Quantum Security Technology
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on the most advanced quantum and cybersecurity technologies available in 2040, ensuring unparalleled protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Quantum Key Distribution",
                "Post-Quantum Cryptography",
                "Quantum Random Number Generation",
                "AI-Powered Threat Intelligence",
                "Quantum-Resistant Algorithms",
                "Advanced Network Security",
                "Zero Trust Architecture",
                "Quantum Threat Detection"
              ].map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/30 border border-gray-700/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Security Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum cybersecurity platform enables breakthrough security applications across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Services",
                  description: "Unbreakable encryption for banking, trading, and financial transactions.",
                  icon: "🏦"
                },
                {
                  title: "Healthcare",
                  description: "Quantum-secured patient data and medical device protection.",
                  icon: "🏥"
                },
                {
                  title: "Government",
                  description: "National security and classified information protection.",
                  icon: "🏛️"
                },
                {
                  title: "Critical Infrastructure",
                  description: "Power grid, water systems, and transportation security.",
                  icon: "⚡"
                },
                {
                  title: "Cloud Computing",
                  description: "Quantum-secured cloud infrastructure and data centers.",
                  icon: "☁️"
                },
                {
                  title: "IoT Security",
                  description: "Protection for connected devices and smart systems.",
                  icon: "🔗"
                }
              ].map((useCase, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-red-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in the cybersecurity revolution and experience the future of quantum-powered protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}