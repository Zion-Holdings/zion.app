import React from 'react';
import { NextPage } from 'next';
import { BarChart3, Brain, Zap, Target, Star, ArrowRight, CheckCircle, Users, TrendingUp, Cpu, Network } from 'lucide-react';

const AutonomousBusinessIntelligence2040: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
              <BarChart3 className="w-4 h-4" />
              <span>Revolutionary 2040 Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600 bg-clip-text text-transparent">
              Autonomous Business Intelligence 2040
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of business intelligence with our revolutionary autonomous AI platform that continuously 
              analyzes, learns, and provides actionable insights without human intervention.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              Experience Autonomous BI
            </button>
            <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous business intelligence platform delivers unprecedented insights and decision-making capabilities that transform how businesses operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Self-Learning Analytics",
                description: "AI systems that continuously learn from data patterns and automatically improve their analytical capabilities over time.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-time Intelligence",
                description: "Instant analysis and insights from live data streams, enabling immediate decision-making and response.",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Predictive Analytics",
                description: "Advanced forecasting models that predict future trends, risks, and opportunities with high accuracy.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Autonomous Reporting",
                description: "Self-generating reports and dashboards that adapt to business needs and user preferences automatically.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Natural Language Interface",
                description: "Intuitive conversational AI that allows users to ask questions and receive insights in plain language.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Continuous Optimization",
                description: "Automated optimization of business processes and strategies based on real-time performance data.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our autonomous business intelligence is transforming industries and enabling data-driven decision-making at unprecedented levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Services",
                description: "Real-time risk assessment, fraud detection, and portfolio optimization with autonomous AI-driven insights.",
                icon: <Star className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Healthcare Analytics",
                description: "Patient outcome prediction, treatment optimization, and resource allocation through autonomous medical intelligence.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Retail Intelligence",
                description: "Customer behavior analysis, inventory optimization, and personalized marketing through autonomous retail analytics.",
                icon: <Target className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Manufacturing Optimization",
                description: "Predictive maintenance, quality control, and supply chain optimization with autonomous industrial intelligence.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the most advanced AI and analytics technologies available in 2040, ensuring unparalleled business intelligence capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Quantum AI Processors",
              "Advanced Machine Learning",
              "Real-time Data Processing",
              "Natural Language Processing",
              "Predictive Analytics Engines",
              "Autonomous Decision Systems",
              "Advanced Visualization",
              "Cloud-Native Architecture"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Ready to Experience Autonomous BI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in the business intelligence revolution and discover how autonomous AI is reshaping the future of data-driven decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessIntelligence2040;