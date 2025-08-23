import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Brain, Zap, CheckCircle, ArrowRight, 
  TrendingUp, Users, Mail, BarChart3, Megaphone
} from 'lucide-react';

const AIAutonomousMarketingPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous Marketing Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI marketing platform that creates, executes, and optimizes campaigns autonomously. Transform your marketing with intelligent automation." />
        <meta name="keywords" content="AI marketing, autonomous marketing, marketing automation, AI campaigns, intelligent marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-marketing-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                <Target className="w-4 h-4" />
                Autonomous Marketing AI
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
                AI Marketing Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI that creates, executes, and optimizes marketing campaigns 
                autonomously while learning from every interaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Start Marketing with AI <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-black transition-all duration-300"
              >
                See Features
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous Marketing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI that doesn't just automate—it thinks, creates, and optimizes like a world-class marketing team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "Campaign Intelligence",
                  description: "AI analyzes market trends, competitor strategies, and customer behavior to create winning campaigns"
                },
                {
                  icon: <Megaphone className="w-8 h-8 text-pink-400" />,
                  title: "Content Generation",
                  description: "Automatically creates compelling copy, visuals, and video content optimized for each platform"
                },
                {
                  icon: <Users className="w-8 h-8 text-orange-400" />,
                  title: "Audience Targeting",
                  description: "Advanced AI identifies and targets your ideal customers with precision across all channels"
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
                  title: "Real-time Optimization",
                  description: "Continuously optimizes campaigns based on performance data and market changes"
                },
                {
                  icon: <Mail className="w-8 h-8 text-green-400" />,
                  title: "Multi-channel Execution",
                  description: "Executes campaigns across email, social media, search, display, and emerging platforms"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
                  title: "Predictive Analytics",
                  description: "Predicts campaign performance and customer lifetime value with advanced ML models"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Platform Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for autonomous marketing success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Marketing Channels</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Social Media Marketing', 'Email Marketing', 'Search Engine Marketing', 'Display Advertising',
                    'Content Marketing', 'Influencer Marketing', 'Video Marketing', 'Mobile Marketing',
                    'Programmatic Advertising', 'Retargeting Campaigns', 'Native Advertising', 'Podcast Advertising',
                    'Connected TV/OTT', 'Direct Mail', 'Event Marketing', 'Affiliate Marketing'
                  ].map((channel, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">AI Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Customer journey mapping and optimization',
                    'Predictive customer lifetime value',
                    'Dynamic pricing and promotion optimization',
                    'Sentiment analysis and brand monitoring',
                    'Competitor intelligence and analysis',
                    'Market trend prediction and adaptation',
                    'A/B testing automation and optimization',
                    'Attribution modeling across touchpoints'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-purple-400 mt-0.5" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proven ROI Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the impact of autonomous marketing AI on your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "300%",
                  label: "Increase in Campaign ROI",
                  description: "Average improvement in marketing return on investment"
                },
                {
                  metric: "85%",
                  label: "Reduction in CAC",
                  description: "Lower customer acquisition costs through AI optimization"
                },
                {
                  metric: "90%",
                  label: "Time Savings",
                  description: "Reduction in manual marketing tasks and campaign management"
                },
                {
                  metric: "45%",
                  label: "Conversion Rate Boost",
                  description: "Improvement in conversion rates across all channels"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Marketing Platform Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that scales with your marketing needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Startup",
                  price: "$499",
                  period: "month",
                  description: "Perfect for growing businesses",
                  features: [
                    "Up to 3 marketing channels",
                    "Basic AI campaign optimization",
                    "5,000 marketing contacts",
                    "Standard analytics dashboard",
                    "Email support"
                  ]
                },
                {
                  title: "Growth",
                  price: "$1,499",
                  period: "month",
                  description: "Ideal for scaling companies",
                  features: [
                    "All marketing channels included",
                    "Advanced AI optimization",
                    "50,000 marketing contacts",
                    "Predictive analytics",
                    "Priority support",
                    "Custom integrations"
                  ],
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "$4,999",
                  period: "month",
                  description: "For large organizations",
                  features: [
                    "Unlimited marketing channels",
                    "Custom AI model training",
                    "Unlimited contacts",
                    "White-label solutions",
                    "24/7 dedicated support",
                    "On-premise deployment"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500 scale-105'
                      : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-purple-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join innovative companies using AI to achieve unprecedented marketing results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 justify-center"
                >
                  Start Free Demo <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousMarketingPlatform;