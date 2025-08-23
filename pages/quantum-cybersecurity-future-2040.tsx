import React from 'react';
import { NextPage } from 'next';
import { Shield, Atom, Zap, Target, Star, ArrowRight, CheckCircle, Users, TrendingUp, Lock, Eye } from 'lucide-react';

const QuantumCybersecurityFuture2040: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/20 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300 text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Revolutionary 2040 Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent">
              Quantum Cybersecurity Future 2040
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of cybersecurity with our revolutionary quantum-powered platform that provides 
              unbreakable encryption and advanced threat detection capabilities beyond current technological limitations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
              Secure Your Future
            </button>
            <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum cybersecurity platform delivers unprecedented protection capabilities that transcend traditional security limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Atom className="w-8 h-8" />,
                title: "Quantum Encryption",
                description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security.",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Advanced Threat Detection",
                description: "AI-powered threat detection that identifies and neutralizes cyber threats before they can cause damage.",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-time Protection",
                description: "Instant security updates and threat response that adapts to emerging cyber threats in real-time.",
                color: "from-yellow-500 to-green-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Zero Trust Architecture",
                description: "Comprehensive zero-trust security framework that verifies every access attempt and connection.",
                color: "from-green-500 to-blue-500"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Quantum Authentication",
                description: "Multi-factor quantum authentication that ensures only authorized users can access protected systems.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Advanced Monitoring",
                description: "Comprehensive security monitoring and analytics that provide complete visibility into your security posture.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our quantum cybersecurity is transforming industries and providing unprecedented protection for critical systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Security",
                description: "Protect financial transactions, banking systems, and cryptocurrency operations with quantum-resistant security.",
                icon: <Star className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Healthcare Protection",
                description: "Secure patient data, medical devices, and healthcare systems with advanced quantum cybersecurity.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Government Security",
                description: "Protect critical infrastructure, government systems, and national security with quantum-grade protection.",
                icon: <Target className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Industrial Security",
                description: "Secure manufacturing systems, IoT devices, and industrial control systems with quantum cybersecurity.",
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

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Advanced Security Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the most advanced quantum and cybersecurity technologies available in 2040, ensuring unparalleled protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Quantum Key Distribution",
              "Post-Quantum Cryptography",
              "AI Threat Detection",
              "Zero Trust Architecture",
              "Quantum Random Number Generation",
              "Advanced Firewall Systems",
              "Behavioral Analytics",
              "Quantum-Safe Protocols"
            ].map((tech, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in the cybersecurity revolution and discover how quantum technology is reshaping the future of digital protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumCybersecurityFuture2040;