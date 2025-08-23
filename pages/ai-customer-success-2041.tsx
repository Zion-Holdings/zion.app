import React from 'react';
import Layout from '../components/layout/Layout';
import { Users, Sparkles, Zap, Target, Award, Clock, CheckCircle, Brain, TrendingUp, Heart } from 'lucide-react';

export default function AICustomerSuccess2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                  AI Customer Success
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of customer success with AI systems that predict, prevent, and 
                proactively solve customer issues before they arise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Transform Success
                </button>
                <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300">
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
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make AI Customer Success 2041 the most 
                advanced customer success platform ever created.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Predictive Analytics",
                  description: "AI-powered insights that predict customer behavior and identify potential issues before they impact satisfaction.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Proactive Engagement",
                  description: "Automated outreach that engages customers at the perfect moment to maximize success and retention.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Emotional Intelligence",
                  description: "Advanced AI that understands customer emotions and responds with empathy and personalized care.",
                  color: "from-pink-500 to-red-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Success Scoring",
                  description: "Real-time customer success scoring that identifies at-risk accounts and opportunities for growth.",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Instant Resolution",
                  description: "AI-powered solutions that resolve customer issues instantly, 24/7, without human intervention.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Personalized Journeys",
                  description: "Custom customer success journeys tailored to individual needs, preferences, and business goals.",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Measurable Success
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Track and optimize your customer success metrics with AI-powered insights and analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "99.9%", label: "Customer Satisfaction", description: "AI-driven success optimization" },
                { metric: "85%", label: "Faster Resolution", description: "Reduced time to resolution" },
                { metric: "3.2x", label: "Retention Rate", description: "Improved customer retention" },
                { metric: "24/7", label: "Support Coverage", description: "Always-on AI assistance" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-green-400 mb-2">{stat.metric}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Journey */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Customer Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience a seamless, intelligent customer journey that adapts and optimizes in real-time.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Onboarding",
                  description: "AI-guided onboarding that adapts to each customer's learning style and pace",
                  features: ["Personalized tutorials", "Progress tracking", "Success milestones"]
                },
                {
                  phase: "Adoption",
                  description: "Intelligent feature recommendations and usage optimization",
                  features: ["Usage analytics", "Feature discovery", "Best practices"]
                },
                {
                  phase: "Growth",
                  description: "Proactive expansion opportunities and value demonstration",
                  features: ["Success stories", "ROI tracking", "Growth recommendations"]
                },
                {
                  phase: "Renewal",
                  description: "Automated renewal optimization and retention strategies",
                  features: ["Value assessment", "Retention campaigns", "Loyalty programs"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the incredible benefits of implementing AI Customer Success 2041 in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Revenue",
                  description: "AI-driven customer success leads to higher retention, expansion, and lifetime value.",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Reduced Churn",
                  description: "Predictive analytics identify at-risk customers before they leave, enabling proactive intervention.",
                  icon: <Heart className="w-8 h-8" />,
                  color: "from-pink-500 to-red-500"
                },
                {
                  title: "Improved Efficiency",
                  description: "Automated processes and AI assistance free up your team to focus on high-value activities.",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Better Insights",
                  description: "Deep AI analytics provide actionable insights for continuous improvement and optimization.",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Customer Success?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of customer success with AI-powered solutions that deliver 
              measurable results and exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}