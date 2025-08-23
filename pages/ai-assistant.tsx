import React from 'react';
import { motion } from 'framer-motion';
import { Bot, CheckCircle, Zap, Shield, Network, Workflow, DollarSign, ExternalLink, Phone, Mail, MapPin, ArrowRight, Brain, Users, Globe, Clock, Star, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function AIAssistantPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Multi-agent orchestration (task, tool, memory roles)',
    'Guardrails for PII, jailbreaks, and policy compliance',
    'Human-in-the-loop review queues and approvals',
    'Evaluation harness with regression suites and metrics',
    'Observability: traces, costs, latencies, prompt versions',
    'Integrations: Slack, Zendesk, Notion, Google Drive, Jira',
  ];

  const plans = [
    { 
      name: 'Starter', 
      price: '$1,499', 
      period: '/month', 
      includes: ['Single agent', 'Basic guardrails', 'Email support'],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    { 
      name: 'Growth', 
      price: '$2,999', 
      period: '/month', 
      includes: ['Multi-agent', 'Advanced guardrails', 'Slack support', 'Eval suites'],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    { 
      name: 'Enterprise', 
      price: 'Custom', 
      period: '', 
      includes: ['SAML/SCIM', 'VPC deployment', '24/7 support', 'Custom tooling'],
      color: 'from-yellow-500 to-orange-500',
      popular: false
    },
  ];

  const valueProps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Ship Faster',
      description: 'Blueprints and evals help you move from idea to production quickly.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Safety',
      description: 'Guardrails, redaction, and HITL ensure compliant outcomes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Operate Reliably',
      description: 'Full telemetry and cost controls to prevent surprises.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Team collaboration and notifications' },
    { name: 'Zendesk', icon: '🎫', description: 'Customer support integration' },
    { name: 'Notion', icon: '📝', description: 'Knowledge base and documentation' },
    { name: 'Google Drive', icon: '☁️', description: 'File storage and sharing' },
    { name: 'Jira', icon: '📋', description: 'Project management and tracking' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Enterprise communication' }
  ];

  return (
    <Layout>
      <SEO
        title="AI Agent Orchestrator | Zion Tech Group"
        description="Production-ready AI agent orchestration with guardrails, observability, and human-in-the-loop. Ship reliable assistants fast."
        keywords={["AI agent", "AI orchestration", "AI guardrails", "AI observability", "Zion Tech Group", "AI assistant platform"]}
        canonical="https://ziontechgroup.com/ai-assistant"
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-6">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              AI Agent Orchestrator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Design, evaluate, and operate reliable AI assistants with enterprise guardrails, HITL, and full observability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 font-semibold"
              >
                Talk to Sales
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
              >
                See Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${prop.color} rounded-lg flex items-center justify-center mb-4`}>
                  {prop.icon}
                </div>
                <h3 className="text-white font-semibold mb-3">{prop.title}</h3>
                <p className="text-gray-300">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Seamless Integrations
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{integration.name}</div>
                <div className="text-gray-400 text-xs">{integration.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Plans & Pricing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/50' 
                    : 'bg-white/5 border-white/10 hover:border-cyan-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-gray-400 text-sm mb-2">{plan.name}</div>
                <div className="text-3xl font-bold text-white mb-4">
                  {plan.price}
                  <span className="text-base text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  {plan.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="/services"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm font-medium"
                  >
                    Explore More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about our AI Agent Orchestrator and how it can transform your business.
            </p>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>{contact.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-purple-400">
                <Mail className="w-5 h-5" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">{contact.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}