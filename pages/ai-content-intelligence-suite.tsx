import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, 
  Phone, Zap, DollarSign, Shield, Mail, 
  MapPin, Rocket, Brain, Sparkles, Atom, 
  Dna, Users, Globe, Cpu, Lock, Database,
  BarChart3, Target, Microscope, Cloud,
  FileText, Search, Globe2, Calendar,
  Users2, Zap as Lightning, BarChart,
  MessageSquare, BookOpen, Target as TargetIcon
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Content Generation',
    description: 'Advanced AI models create high-quality, engaging content that matches your brand voice and style.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Real-time keyword analysis and SEO optimization to improve search rankings and drive organic traffic.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Globe2,
    title: 'Multi-Language Support',
    description: 'Create content in multiple languages with automatic localization and cultural adaptation.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Comprehensive analytics and A/B testing to optimize content performance and engagement.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Calendar,
    title: 'Content Calendar Management',
    description: 'Organize and schedule content with automated workflows and team collaboration tools.',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: Users2,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with approval workflows, comments, and version control.',
    color: 'from-indigo-500 to-purple-600'
  }
];

const useCases = [
  {
    title: 'Blog Content Creation',
    description: 'Generate engaging blog posts, articles, and thought leadership content at scale.',
    icon: FileText,
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Social Media Marketing',
    description: 'Create optimized social media posts for all platforms with consistent brand messaging.',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Email Campaigns',
    description: 'Generate personalized email content that drives engagement and conversions.',
    icon: Mail,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Product Descriptions',
    description: 'Create compelling product descriptions that highlight benefits and drive sales.',
    icon: TargetIcon,
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Educational Content',
    description: 'Develop comprehensive educational materials and training content.',
    icon: BookOpen,
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'SEO Content',
    description: 'Generate SEO-optimized content that ranks well and drives organic traffic.',
    icon: Search,
    color: 'from-indigo-500 to-purple-600'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and content creators',
    features: [
      'Up to 50 AI-generated articles per month',
      'Basic SEO optimization',
      'Content calendar',
      'Email support',
      'Basic analytics'
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses and marketing teams',
    features: [
      'Up to 200 AI-generated articles per month',
      'Advanced SEO optimization',
      'Multi-language support',
      'Team collaboration',
      'Advanced analytics',
      'Priority support',
      'Custom brand voice training'
    ],
    popular: true,
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/month',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited AI-generated content',
      'Custom AI model training',
      'Advanced integrations',
      'Dedicated account manager',
      'Custom workflows',
      'API access',
      'White-label options',
      '24/7 phone support'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600'
  }
];

const integrations = [
  'WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Google Analytics',
  'Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'TikTok',
  'Slack', 'Microsoft Teams', 'Trello', 'Asana', 'Notion',
  'Salesforce', 'Pipedrive', 'Zapier', 'Make', 'Webhooks'
];

export default function AIContentIntelligenceSuite() {
  return (
    <Layout>
      <Head>
        <title>AI Content Intelligence Suite | Zion Tech Group - Revolutionary AI Content Creation Platform</title>
        <meta name="description" content="Transform content creation with our AI-powered intelligence suite. Generate engaging content, optimize for SEO, and manage your content calendar with advanced AI technology." />
        <meta name="keywords" content="AI content creation, content generation, SEO optimization, content management, AI writing, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Content Intelligence Suite - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered content creation and optimization platform." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-intelligence-suite" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-intelligence-suite" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">
              🤖
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Content Intelligence
              </span>
              <br />
              <span className="text-white">Suite</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your content creation with AI-powered intelligence. Generate engaging content at scale, optimize for SEO, and maintain your brand voice across all channels.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">300%+</div>
              <div className="text-gray-400 text-sm">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50x</div>
              <div className="text-gray-400 text-sm">Faster Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">AI Generation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">45</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Start Free Trial
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-4 border-2 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 font-bold text-lg rounded-2xl transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI Content Intelligence Suite combines cutting-edge technology with intuitive design to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases & Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our AI Content Intelligence Suite can transform your content creation across various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your content creation needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border rounded-3xl transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500/50 scale-105 shadow-2xl shadow-blue-500/25' 
                    : 'border-white/10 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 bg-gradient-to-r ${plan.color} hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms to streamline your content creation workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                <span className="text-gray-300 text-sm font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Contact us today to learn how our AI Content Intelligence Suite can revolutionize your content strategy and drive unprecedented engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">{contactInfo.mobile}</p>
              <Link
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">{contactInfo.email}</p>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                <span>Send Email</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 mb-4">{contactInfo.address}</p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <span>Start Your Free Trial Today</span>
              <Rocket className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}