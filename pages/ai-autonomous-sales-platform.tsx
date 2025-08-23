import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  DollarSign, Brain, Zap, CheckCircle, ArrowRight, 
  TrendingUp, Users, Phone, BarChart3, Target
} from 'lucide-react';

const AIAutonomousSalesPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous Sales Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI sales platform that identifies prospects, builds relationships, and closes deals autonomously. Transform your sales process with intelligent automation." />
        <meta name="keywords" content="AI sales, autonomous sales, sales automation, AI CRM, intelligent sales platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-sales-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6 border border-green-500/30">
                <DollarSign className="w-4 h-4" />
                AI That Closes Deals
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Autonomous Sales Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI that identifies prospects, builds relationships, handles objections, 
                and closes deals autonomously while learning from every interaction.
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
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Boost Sales with AI <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-full hover:bg-green-500 hover:text-black transition-all duration-300"
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
                Autonomous Sales Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI that doesn't just assist sales—it actively prospects, nurtures, and closes deals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-green-400" />,
                  title: "Intelligent Prospecting",
                  description: "AI identifies and qualifies high-value prospects using advanced data analysis and behavioral patterns"
                },
                {
                  icon: <Phone className="w-8 h-8 text-emerald-400" />,
                  title: "Automated Outreach",
                  description: "Personalized multi-channel outreach across email, social, calls, and video with human-like interactions"
                },
                {
                  icon: <Users className="w-8 h-8 text-teal-400" />,
                  title: "Relationship Building",
                  description: "AI nurtures relationships with personalized follow-ups and value-driven conversations"
                },
                {
                  icon: <Target className="w-8 h-8 text-cyan-400" />,
                  title: "Objection Handling",
                  description: "Advanced AI handles common objections and guides prospects through the decision process"
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
                  title: "Pipeline Management",
                  description: "Autonomous pipeline management with predictive analytics and deal forecasting"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
                  title: "Deal Closing",
                  description: "AI identifies buying signals and closes deals with optimized proposals and negotiations"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
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

        {/* Sales Process Automation */}
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
                Complete Sales Process Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end sales automation that works 24/7 to grow your revenue
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Sales Activities</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Lead qualification and scoring',
                    'Personalized email sequences',
                    'Social media engagement',
                    'Cold calling and voicemails',
                    'Meeting scheduling and follow-ups',
                    'Proposal generation and delivery',
                    'Contract negotiation assistance',
                    'Deal closing and upselling'
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">AI Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Natural language processing for conversations',
                    'Sentiment analysis and emotional intelligence',
                    'Predictive deal scoring and forecasting',
                    'Competitor analysis and positioning',
                    'Dynamic pricing optimization',
                    'Churn prediction and retention strategies',
                    'Cross-sell and upsell opportunity identification',
                    'Performance analytics and optimization'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-green-400 mt-0.5" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
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
                Proven Sales Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the impact of autonomous sales AI on revenue and productivity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "400%",
                  label: "Revenue Increase",
                  description: "Average improvement in sales revenue within 12 months"
                },
                {
                  metric: "60%",
                  label: "Conversion Rate Boost",
                  description: "Higher lead-to-customer conversion rates"
                },
                {
                  metric: "80%",
                  label: "Time Savings",
                  description: "Reduction in manual sales tasks and administration"
                },
                {
                  metric: "25%",
                  label: "Shorter Sales Cycles",
                  description: "Faster deal closure through AI optimization"
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
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
                AI Sales Platform Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that scales with your sales growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter",
                  price: "$399",
                  period: "month",
                  description: "Perfect for small sales teams",
                  features: [
                    "Up to 1,000 prospects/month",
                    "Basic AI prospecting",
                    "Email automation sequences",
                    "CRM integration",
                    "Standard reporting"
                  "
                },
                {
                  title: "Professional",
                  price: "$1,299",
                  period: "month",
                  description: "Ideal for growing sales teams",
                  features: [
                    "Up to 10,000 prospects/month",
                    "Advanced AI conversations",
                    "Multi-channel outreach",
                    "Deal forecasting",
                    "Priority support",
                    "Custom integrations"
                  ],
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "$3,999",
                  period: "month",
                  description: "For large sales organizations",
                  features: [
                    "Unlimited prospects",
                    "Custom AI model training",
                    "White-label solutions",
                    "Advanced analytics",
                    "24/7 dedicated support",
                    "On-premise deployment"
                  "
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
                      ? 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500 scale-105'
                      : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-green-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
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

        {/* Integration Section */}
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
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing sales stack for maximum efficiency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                'Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM',
                'Microsoft Dynamics', 'Freshsales', 'Monday.com', 'ActiveCampaign',
                'Slack', 'Microsoft Teams', 'Zoom', 'Calendly',
                'LinkedIn Sales Navigator', 'Gmail', 'Outlook', 'Zapier'
              ].map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 text-center"
                >
                  <span className="text-gray-300 font-medium">{integration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Scale Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join successful companies using AI to achieve predictable revenue growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 justify-center"
                >
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-full hover:bg-green-500 hover:text-black transition-all duration-300"
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

export default AIAutonomousSalesPlatform;