import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, BarChart3, TrendingUp, Users, Target, Zap, 
  Shield, Database, Globe, ArrowRight, CheckCircle, Star
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AIBusinessIntelligencePage() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Forecast future trends and customer behavior with 95% accuracy using advanced machine learning algorithms.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Monitor key performance indicators in real-time with customizable, interactive dashboards.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Automatically identify bottlenecks and optimize business processes for maximum efficiency.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Deep understanding of customer behavior, preferences, and lifetime value through AI analysis.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Data-driven decision making with scenario modeling and risk assessment capabilities.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically, saving hours of manual work each week.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Increase revenue by 25-40% through data-driven insights",
    "Reduce operational costs by 15-30% with process optimization",
    "Improve customer retention by 20-35% with predictive analytics",
    "Accelerate decision-making by 60% with real-time data",
    "Reduce manual reporting time by 80% with automation",
    "Achieve 99.9% data accuracy with AI-powered validation"
  ];

  const useCases = [
    {
      industry: "Retail & E-commerce",
      description: "Customer segmentation, inventory optimization, and demand forecasting",
      results: "35% increase in conversion rates, 25% reduction in inventory costs"
    },
    {
      industry: "Financial Services",
      description: "Risk assessment, fraud detection, and portfolio optimization",
      results: "40% improvement in risk prediction, 60% faster fraud detection"
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, resource allocation, and treatment optimization",
      results: "30% improvement in patient outcomes, 20% reduction in operational costs"
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      results: "45% reduction in downtime, 35% improvement in product quality"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic predictive analytics",
        "5 customizable dashboards",
        "Standard reporting",
        "Email support",
        "Up to 10 users"
      ],
      popular: false
    },
    {
      plan: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Advanced predictive analytics",
        "Unlimited dashboards",
        "Custom reporting",
        "Priority support",
        "Up to 50 users",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support team",
        "Unlimited users",
        "On-premise deployment",
        "Custom training",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence. Get predictive analytics, real-time dashboards, and data-driven insights to drive growth and efficiency." />
        <meta name="keywords" content="AI business intelligence, predictive analytics, business analytics, data insights, machine learning, business intelligence platform" />
        <meta property="og:title" content="AI Business Intelligence - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with AI-powered business intelligence. Get predictive analytics, real-time dashboards, and data-driven insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-business-intelligence" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform raw data into actionable insights with our advanced AI platform. 
              Make data-driven decisions, predict future trends, and optimize every aspect of your business 
              with machine learning-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to transform your business data into strategic insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose AI Business Intelligence?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our AI-powered platform delivers measurable results that directly impact your bottom line. 
                From increased revenue to reduced costs, see the difference data-driven decisions can make.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-slate-600">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-slate-600">Average Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-slate-600">Time Saved on Reporting</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Industry Applications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how businesses across different industries are leveraging AI to transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{useCase.industry}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">Results: {useCase.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using AI to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}