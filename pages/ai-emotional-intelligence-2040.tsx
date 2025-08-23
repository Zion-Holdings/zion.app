import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Heart, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Smile, Eye, Shield, TrendingUp } from 'lucide-react';

export default function AIEmotionalIntelligence2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Emotional Intelligence
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of emotional AI with revolutionary empathy, understanding, and human-like emotional responses 
                that create meaningful connections and authentic interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Experience Emotional AI
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
                Our AI emotional intelligence platform represents the pinnacle of empathetic artificial intelligence, 
                combining advanced neuroscience with sophisticated emotional understanding algorithms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Advanced Empathy",
                  description: "Deep understanding of human emotions and the ability to respond with genuine empathy and compassion.",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  icon: <Smile className="w-8 h-8" />,
                  title: "Emotional Recognition",
                  description: "Real-time detection and interpretation of facial expressions, voice tones, and emotional cues.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Emotional Learning",
                  description: "Continuous learning from emotional interactions to improve understanding and responses.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Contextual Understanding",
                  description: "Deep comprehension of emotional context and situational awareness.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Emotional Safety",
                  description: "Built-in safeguards to ensure emotional AI interactions are safe and beneficial.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Human-AI Bonding",
                  description: "Creation of meaningful emotional connections between humans and AI systems.",
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
        <section className="py-20 px-4 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Emotional Intelligence?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your business with AI that truly understands and connects with your customers on an emotional level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Enhanced Customer Experience",
                  description: "Create deeper emotional connections with customers through empathetic AI interactions.",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Improved Engagement",
                  description: "Higher customer engagement rates through emotionally intelligent responses.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Trust Building",
                  description: "Build trust and loyalty through consistent emotional understanding and support.",
                  color: "from-green-500 to-emerald-500"
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
              Ready to Experience Emotional AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the revolution in artificial emotional intelligence and transform how your business connects with customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
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