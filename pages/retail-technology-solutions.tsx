import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, ShoppingCart, Shield, TrendingUp, BarChart3, Globe, Eye } from 'lucide-react';

export default function RetailTechnologySolutions() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary Retail Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Retail Technology Solutions
                </span>
                <br />
                <span className="text-white">Powered by AI & Quantum Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of retail with revolutionary AI and quantum technology that provides 
                intelligent customer insights, automated operations, and next-generation shopping experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                  Transform Retail
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
                Revolutionary Retail Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our retail technology platform represents the pinnacle of retail innovation, 
                combining advanced AI with quantum computing and cutting-edge retail analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI-Powered Analytics",
                  description: "Advanced AI algorithms for comprehensive retail analytics and insights.",
                  color: "from-orange-500 to-amber-500"
                },
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  title: "Smart Shopping",
                  description: "Intelligent shopping experiences optimized through AI and quantum computing.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Customer Intelligence",
                  description: "Advanced customer behavior analysis and personalized recommendations.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Omnichannel Integration",
                  description: "Seamless integration across all retail channels and touchpoints.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Visual Recognition",
                  description: "AI-powered visual recognition for inventory and customer tracking.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Inventory Optimization",
                  description: "AI-driven inventory management and demand forecasting.",
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
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Retail Technology?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform retail operations with technology that improves customer experience and maximizes sales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Enhanced Customer Experience",
                  description: "Improved customer satisfaction through personalized shopping experiences.",
                  color: "from-orange-500 to-amber-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Increased Sales",
                  description: "Higher sales through intelligent recommendations and optimization.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Operational Efficiency",
                  description: "Streamlined operations through AI automation and optimization.",
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
              Ready to Transform Retail?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of AI-powered retail and create exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                Start Retail AI Today
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