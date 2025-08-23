import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, TrendingUp, BarChart3, DollarSign, Target as TargetIcon, Lightbulb, Shield } from 'lucide-react';

export default function AISalesIntelligence2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  AI Sales Intelligence
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of sales with revolutionary AI that provides intelligent lead scoring, 
                predictive analytics, and autonomous sales optimization to maximize revenue and close rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Transform Sales Intelligence
                </button>
                <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-black transition-all duration-300">
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
                Revolutionary AI Sales Intelligence Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI sales intelligence platform represents the pinnacle of intelligent sales optimization, 
                combining advanced AI with deep understanding of sales processes and customer behavior patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Intelligent Lead Scoring",
                  description: "AI-powered lead scoring that identifies high-value prospects with precision accuracy.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Predictive Analytics",
                  description: "Advanced analytics that predict sales outcomes and identify growth opportunities.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <TargetIcon className="w-8 h-8" />,
                  title: "Sales Process Optimization",
                  description: "AI-driven optimization of sales processes for maximum efficiency and conversion.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Performance Analytics",
                  description: "Comprehensive performance tracking and analysis for sales teams and individuals.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Intelligent Insights",
                  description: "AI-generated insights that guide sales strategies and decision-making.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Revenue Optimization",
                  description: "Data-driven strategies to maximize revenue and improve sales performance.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-red-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Sales Intelligence?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your sales operations with AI that provides intelligent insights and optimization strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Increased Revenue",
                  description: "Higher sales revenue through intelligent lead scoring and process optimization.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Improved Conversion",
                  description: "Better conversion rates through data-driven sales strategies and insights.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Sales Efficiency",
                  description: "Enhanced sales efficiency through AI-powered automation and optimization.",
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
              Ready to Transform Sales Intelligence?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of AI-powered sales intelligence and maximize your revenue potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Start Sales AI Today
              </button>
              <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}