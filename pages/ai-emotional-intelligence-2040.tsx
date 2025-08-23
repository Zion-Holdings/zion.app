import React from 'react';
import Layout from '../components/layout/Layout';
import { Heart, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Brain } from 'lucide-react';

export default function AIEmotionalIntelligence2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-red-500/10 to-pink-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  AI Emotional Intelligence
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the next generation of AI emotional intelligence with revolutionary empathy, 
                understanding, and human-like emotional response capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Experience Empathy
                </button>
                <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300">
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
                Revolutionary Emotional Intelligence Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI emotional intelligence platform represents the pinnacle of artificial empathy, 
                combining advanced psychology with cutting-edge machine learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Advanced Empathy",
                  description: "Deep understanding of human emotions and the ability to respond with genuine empathy.",
                  color: "from-pink-500 to-red-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Emotional Recognition",
                  description: "Real-time analysis and recognition of complex emotional states and patterns.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Adaptive Responses",
                  description: "Context-aware emotional responses that adapt to individual personality and mood.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Human-AI Bonding",
                  description: "Creation of meaningful emotional connections between humans and AI systems.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Emotional Validation",
                  description: "Advanced testing and validation of AI emotional authenticity and reliability.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Emotional Memory",
                  description: "Long-term emotional learning and memory retention capabilities.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-pink-500/5 to-red-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business with Emotional AI
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Leverage the power of emotional intelligence to create deeper customer relationships, 
                improve team collaboration, and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Enhanced Customer Experience",
                  description: "Create personalized, emotionally intelligent customer interactions that build loyalty and trust."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Improved Team Dynamics",
                  description: "Foster better communication and collaboration through emotional intelligence insights."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Predictive Emotional Analytics",
                  description: "Anticipate customer needs and emotional states for proactive service delivery."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Emotional Brand Building",
                  description: "Create emotional connections with your brand that resonate with customers."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Conflict Resolution",
                  description: "Use emotional intelligence to identify and resolve conflicts before they escalate."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Personalized Learning",
                  description: "Adapt training and development programs based on emotional intelligence insights."
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
              Ready to Experience Emotional AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the revolution in artificial emotional intelligence and transform how your business 
              connects with customers and employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}