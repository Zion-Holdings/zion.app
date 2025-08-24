import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Headphones, Brain, Zap, CheckCircle, ArrowRight, 
  MessageCircle, Users, Phone, Clock, Heart
} from 'lucide-react';

const AIAutonomousCustomerService: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous Customer Service | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI customer service platform that handles inquiries, resolves issues, and delights customers autonomously 24/7. Transform support with intelligent automation." />
        <meta name="keywords" content="AI customer service, autonomous support, chatbots, AI help desk, intelligent customer support" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-customer-service" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <Headphones className="w-4 h-4" />
                AI Support Assistant
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Autonomous Customer Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI that understands customer needs, resolves complex issues, 
                and delivers exceptional support experiences 24/7 across all channels.
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
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Transform Support with AI <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300"
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
                Autonomous Support Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI that doesn't just answer questions—it understands, empathizes, and solves problems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-blue-400" />,
                  title: "Intelligent Understanding",
                  description: "AI comprehends customer intent, context, and emotions to provide accurate, empathetic responses"
                },
                {
                  icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
                  title: "Multi-Channel Support",
                  description: "Seamless support across chat, email, voice, social media, and messaging platforms"
                },
                {
                  icon: <Clock className="w-8 h-8 text-purple-400" />,
                  title: "24/7 Availability",
                  description: "Round-the-clock support that never sleeps, ensuring customers get help when they need it"
                },
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Emotional Intelligence",
                  description: "AI recognizes and responds to customer emotions, providing appropriate empathy and care"
                },
                {
                  icon: <Users className="w-8 h-8 text-cyan-400" />,
                  title: "Escalation Management",
                  description: "Smart escalation to human agents when needed, with full context and conversation history"
                },
                {
                  icon: <Zap className="w-8 h-8 text-green-400" />,
                  title: "Instant Resolution",
                  description: "Resolves common issues instantly while learning from each interaction to improve responses"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
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

        {/* Support Channels */}
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
                Omnichannel Support Experience
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consistent, intelligent support across every customer touchpoint
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Support Channels</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Live Chat & Webchat', 'Email Support', 'Phone & Voice AI', 'SMS & Text Support',
                    'Social Media Support', 'WhatsApp & Messaging', 'In-App Support', 'Video Chat Support',
                    'Knowledge Base Integration', 'Community Forums', 'Ticketing System', 'Self-Service Portal',
                    'Mobile App Support', 'Voice Assistants', 'AR/VR Support', 'IoT Device Support'
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
                    'Natural language understanding in 100+ languages',
                    'Sentiment analysis and emotion recognition',
                    'Intent classification and topic routing',
                    'Knowledge base search and retrieval',
                    'Automated ticket creation and management',
                    'Customer data integration and personalization',
                    'Real-time translation and localization',
                    'Continuous learning from interactions'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-blue-400 mt-0.5" />
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
                Customer Satisfaction Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the impact of autonomous customer service on satisfaction and efficiency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "95%",
                  label: "Customer Satisfaction",
                  description: "CSAT scores from AI-powered support interactions"
                },
                {
                  metric: "80%",
                  label: "First Contact Resolution",
                  description: "Issues resolved without human intervention"
                },
                {
                  metric: "90%",
                  label: "Response Time Improvement",
                  description: "Faster response times compared to traditional support"
                },
                {
                  metric: "70%",
                  label: "Cost Reduction",
                  description: "Lower support costs through automation"
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
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
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI customer service solutions for every industry
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce",
                  description: "Order tracking, returns, product recommendations, and shopping assistance",
                  features: ["Order status updates", "Return processing", "Product recommendations", "Payment support"]
                },
                {
                  title: "SaaS & Technology",
                  description: "Technical support, onboarding, feature explanations, and troubleshooting",
                  features: ["Technical troubleshooting", "Feature guidance", "Account management", "Integration support"]
                },
                {
                  title: "Financial Services",
                  description: "Account inquiries, transaction support, fraud detection, and financial advice",
                  features: ["Account balance queries", "Transaction history", "Fraud alerts", "Investment guidance"]
                },
                {
                  title: "Healthcare",
                  description: "Appointment scheduling, prescription inquiries, health information, and care coordination",
                  features: ["Appointment booking", "Prescription refills", "Health reminders", "Insurance support"]
                },
                {
                  title: "Travel & Hospitality",
                  description: "Booking assistance, itinerary changes, loyalty programs, and travel recommendations",
                  features: ["Booking modifications", "Travel updates", "Loyalty rewards", "Local recommendations"]
                },
                {
                  title: "Telecommunications",
                  description: "Service activation, billing support, technical troubleshooting, and plan upgrades",
                  features: ["Service activation", "Billing inquiries", "Network issues", "Plan optimization"]
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                AI Customer Service Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer support needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Essential",
                  price: "$199",
                  period: "month",
                  description: "Perfect for small businesses",
                  features: [
                    "Up to 1,000 conversations/month",
                    "Basic chat and email support",
                    "Knowledge base integration",
                    "Standard analytics",
                    "Email support"
                  ]
                },
                {
                  title: "Professional",
                  price: "$799",
                  period: "month",
                  description: "Ideal for growing companies",
                  features: [
                    "Up to 10,000 conversations/month",
                    "Omnichannel support",
                    "Advanced AI capabilities",
                    "Custom integrations",
                    "Priority support",
                    "Advanced analytics"
                  ],
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "$2,499",
                  period: "month",
                  description: "For large organizations",
                  features: [
                    "Unlimited conversations",
                    "Custom AI model training",
                    "White-label solutions",
                    "Enterprise integrations",
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
                      ? 'bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500 scale-105'
                      : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-blue-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
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
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Delight Your Customers?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join forward-thinking companies delivering exceptional customer experiences with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 justify-center"
                >
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300"
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

export default AIAutonomousCustomerService;