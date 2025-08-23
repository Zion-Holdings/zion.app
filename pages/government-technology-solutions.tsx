import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Building, Shield, TrendingUp, BarChart3, Globe, Lock } from 'lucide-react';

export default function GovernmentTechnologySolutions() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 rounded-full text-slate-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary Government Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 bg-clip-text text-transparent">
                  Government Technology Solutions
                </span>
                <br />
                <span className="text-white">Powered by AI & Quantum Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of government with revolutionary AI and quantum technology that provides 
                advanced security, intelligent automation, and next-generation public services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
                  Transform Government
                </button>
                <button className="px-8 py-4 border-2 border-slate-400 text-slate-400 font-semibold rounded-xl hover:bg-slate-400 hover:text-black transition-all duration-300">
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
                Revolutionary Government Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our government technology platform represents the pinnacle of public sector innovation, 
                combining advanced AI with quantum computing and cutting-edge government analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI-Powered Analytics",
                  description: "Advanced AI algorithms for comprehensive government analytics and insights.",
                  color: "from-slate-500 to-gray-500"
                },
                {
                  icon: <Building className="w-8 h-8" />,
                  title: "Smart Infrastructure",
                  description: "Intelligent infrastructure management optimized through AI and quantum computing.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "National Security",
                  description: "Advanced security protocols for government systems and data protection.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Digital Services",
                  description: "Modernized digital services for improved citizen experience.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Cybersecurity",
                  description: "Quantum-enhanced cybersecurity for government networks and systems.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Operational Efficiency",
                  description: "AI-driven optimization of government operations and services.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-slate-500/5 to-gray-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Government Technology?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform government operations with technology that improves efficiency and enhances public services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Enhanced Security",
                  description: "Improved national security through AI-powered threat detection.",
                  color: "from-slate-500 to-gray-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Operational Efficiency",
                  description: "Streamlined government operations through AI automation.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Citizen Experience",
                  description: "Enhanced public services and improved citizen satisfaction.",
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
              Ready to Transform Government?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of AI-powered government and create efficient, secure public services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
                Start Government AI Today
              </button>
              <button className="px-8 py-4 border-2 border-slate-400 text-slate-400 font-semibold rounded-xl hover:bg-slate-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}