import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, DollarSign, TrendingUp, Shield, BarChart3, Globe, Lock } from 'lucide-react';

export default function QuantumFinancialIntelligence2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Quantum Financial Intelligence
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of financial intelligence with revolutionary quantum technology that provides 
                unprecedented market analysis, risk assessment, and investment optimization capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                  Start Financial Intelligence
                </button>
                <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300">
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
                Revolutionary Quantum Financial Intelligence Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum financial intelligence platform represents the pinnacle of financial technology, 
                combining quantum computing with advanced financial analysis and AI-driven insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Quantum Market Analysis",
                  description: "Advanced quantum algorithms for comprehensive market analysis and prediction.",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Risk Assessment",
                  description: "Quantum-powered risk assessment and portfolio optimization.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Investment Optimization",
                  description: "AI-driven investment strategies optimized through quantum computing.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Market Access",
                  description: "Real-time access to global financial markets and data.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Quantum Security",
                  description: "Unbreakable security protocols for financial transactions and data.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Portfolio Management",
                  description: "Intelligent portfolio management and rebalancing systems.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-500/5 to-teal-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Financial Intelligence?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your financial operations with quantum technology that provides unprecedented insights and optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Enhanced Returns",
                  description: "Improved investment returns through quantum-optimized strategies.",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Risk Reduction",
                  description: "Significant reduction in investment risk through advanced analysis.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Competitive Advantage",
                  description: "Stay ahead with cutting-edge quantum financial technology.",
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
              Ready to Transform Financial Intelligence?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of quantum financial intelligence and unlock unprecedented market insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Start Financial AI Today
              </button>
              <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}