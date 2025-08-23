import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  Target, 
  Star,
  ArrowRight,
  Check,
  Play,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Server,
  Cloud,
  BarChart3,
  Code,
  Settings,
  Eye,
  Heart,
  Zap,
  Users,
  Globe
} from 'lucide-react';

const AIGuardrails: React.FC = () => {
  const features = [
    'AI safety monitoring',
    'Compliance frameworks',
    'Ethical AI guidelines',
    'Risk assessment',
    'Content filtering',
    'Bias detection',
    'Privacy protection',
    'Audit trails',
    'Real-time monitoring',
    'Automated safeguards',
    'Policy enforcement',
    'Incident response'
  ];

  const benefits = [
    'Enhanced AI safety',
    'Regulatory compliance',
    'Risk mitigation',
    'Ethical AI deployment',
    'Trust and transparency',
    'Cost reduction',
    'Brand protection',
    'Operational efficiency'
  ];

  const useCases = [
    'Content moderation',
    'Customer service AI',
    'Financial AI systems',
    'Healthcare AI',
    'Educational AI',
    'Legal AI applications',
    'Marketing AI',
    'Research AI systems'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small AI deployments',
      features: [
        'Basic safety monitoring',
        'Standard compliance',
        '5 AI models',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      period: '/month',
      description: 'Ideal for growing AI operations',
      features: [
        'Advanced safety monitoring',
        'Enhanced compliance',
        '25 AI models',
        'Priority support',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$14,999',
      period: '/month',
      description: 'For large AI organizations',
      features: [
        'Full safety suite',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Custom training',
        'White-label solutions',
        'Advanced compliance'
      ],
      popular: false
    }
  ];

  return (
    <Layout 
      title="AI Guardrails Suite | Zion Tech Group"
      description="Comprehensive AI safety and compliance framework ensuring ethical AI deployment and regulatory compliance."
      keywords="AI guardrails, AI safety, AI compliance, ethical AI, AI risk management, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/ai-guardrails"
    >
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-300 text-sm font-medium">AI Guardrails Suite</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                AI Guardrails
              </span>
              <br />
              <span className="text-white">Safety Suite</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive AI safety and compliance framework ensuring ethical AI deployment, 
              regulatory compliance, and risk mitigation for your AI systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="border border-red-500/30 text-red-300 hover:bg-red-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Safety Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI safety capabilities designed to protect your organization and ensure ethical AI deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature}</h3>
                <p className="text-gray-300">
                  Comprehensive AI safety and compliance capabilities that protect your organization.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Business Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization and gain competitive advantages with comprehensive AI safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300">
                    Ensure AI safety and compliance while driving business growth and innovation.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Industry Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI guardrails protect AI systems across industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive AI safety and compliance for critical applications.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your AI safety and compliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500/50' 
                    : 'bg-gradient-to-br from-gray-900/30 to-slate-900/30 border border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Ready to Protect?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure your AI systems with comprehensive safety and compliance frameworks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-red-500/30 text-red-300 hover:bg-red-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Ready to secure your AI systems? Contact our team today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIGuardrails;