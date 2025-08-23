import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, Database, Shield, Zap, Brain, Rocket, 
  CheckCircle, ArrowRight, Star, Globe, Cpu, 
  Lock, BarChart3, Clock, Users
} from 'lucide-react';

const API: React.FC = () => {
  const apiServices = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: 'API Documentation Generator',
      description: 'Automatically generate comprehensive API documentation from your codebase',
      features: ['Auto-documentation', 'Interactive examples', 'Version control'],
      href: '/api-documentation-generator'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'API Security Scanner',
      description: 'Comprehensive security testing and vulnerability assessment for APIs',
      features: ['Security scanning', 'Vulnerability detection', 'Compliance reporting'],
      href: '/api-security-scanner'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'API Observability',
      description: 'Real-time monitoring and analytics for API performance and usage',
      features: ['Performance monitoring', 'Usage analytics', 'Error tracking'],
      href: '/api-observability'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'API Mock Contract Testing',
      description: 'Automated testing and validation of API contracts and specifications',
      features: ['Contract validation', 'Mock generation', 'Testing automation'],
      href: '/api-mock-contract-testing'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered APIs',
      description: 'Intelligent APIs that learn and adapt to your usage patterns'
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: 'High Performance',
      description: 'Optimized for speed and scalability with sub-millisecond response times'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with OAuth 2.0, JWT, and advanced encryption'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global CDN',
      description: 'Worldwide distribution for optimal performance and reliability'
    }
  ];

  const integrations = [
    'REST APIs', 'GraphQL', 'WebSocket', 'gRPC', 'Webhook', 'Event Streaming'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$99',
      period: 'month',
      features: ['100K API calls', 'Basic analytics', 'Email support', 'Standard SLA']
    },
    {
      plan: 'Professional',
      price: '$299',
      period: 'month',
      features: ['1M API calls', 'Advanced analytics', 'Priority support', '99.9% SLA'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited calls', 'Custom analytics', 'Dedicated support', '99.99% SLA']
    }
  ];

  return (
    <Layout>
      <Head>
        <title>API Services | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive API services including documentation generation, security scanning, observability, and contract testing." />
        <meta name="keywords" content="API services, API documentation, API security, API testing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/api" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                API Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Build, secure, and monitor world-class APIs with our comprehensive suite of 
                AI-powered tools and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* API Services */}
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
                API Development & Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From documentation to security, we provide everything you need to build 
                robust and scalable APIs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {apiServices.map((service, index) => (
                <motion.a
                  key={index}
                  href={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 hover:bg-black/60"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
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
                Why Choose Our API Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for developers, designed for enterprise, powered by AI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
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
                Supported Protocols & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We support all major API protocols and standards for seamless integration.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center"
                >
                  <div className="text-cyan-400 font-semibold">{integration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core features.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' 
                      : 'bg-black/40 border-gray-700/60'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="px-4 py-2 bg-cyan-500 text-black text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      {plan.period && <span className="text-lg text-gray-400">/{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
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
                Ready to Build Amazing APIs?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start building, testing, and deploying APIs with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Building
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default API;