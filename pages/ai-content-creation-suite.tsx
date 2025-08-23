import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Star, Users, TrendingUp, Zap, Globe, 
  FileText, MessageSquare, BarChart3, Shield, Clock, Award
} from 'lucide-react';

const AIContentCreationSuite: React.FC = () => {
  const features = [
    'AI-powered content generation for 50+ content types',
    'SEO optimization with real-time keyword analysis',
    'Brand voice training and consistency',
    'Multi-language content creation (25+ languages)',
    'Content calendar and scheduling automation',
    'Plagiarism detection and originality scoring',
    'Social media content optimization',
    'Email campaign generation',
    'Content performance analytics',
    'Team collaboration tools',
    'API access for enterprise integration',
    'GDPR and privacy compliance'
  ];

  const benefits = [
    'Reduce content creation time by 80%',
    'Increase content engagement by 45%',
    'Improve SEO rankings by 60%',
    'Maintain consistent brand voice across all channels',
    'Scale content production without additional staff',
    'Multi-platform content optimization',
    'Real-time performance tracking',
    'Cost-effective content marketing solution'
  ];

  const useCases = [
    'Marketing agencies',
    'E-commerce businesses',
    'SaaS companies',
    'Content creators',
    'Small to medium businesses',
    'Enterprise marketing teams',
    'Freelance marketers',
    'Educational institutions'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        'Up to 100 AI-generated content pieces/month',
        'Basic SEO optimization',
        '5 brand voice profiles',
        '3 language support',
        'Basic analytics dashboard',
        'Email support',
        'Content calendar',
        'Plagiarism detection'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        'Up to 500 AI-generated content pieces/month',
        'Advanced SEO optimization',
        'Unlimited brand voice profiles',
        '15 language support',
        'Advanced analytics and reporting',
        'Priority support',
        'Team collaboration tools',
        'API access',
        'Custom content templates',
        'Social media automation'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex content needs',
      features: [
        'Unlimited AI-generated content',
        'Enterprise SEO optimization',
        'Custom brand voice training',
        'All 25+ languages',
        'Advanced team collaboration',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced security features',
        'Compliance reporting'
      ],
      popular: false,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Content Creation & Marketing Suite - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content across all platforms with AI. Advanced SEO optimization, brand voice consistency, and multi-language support." />
        <meta name="keywords" content="AI content creation, content marketing, SEO optimization, brand voice, content automation, Zion Tech Group" />
        <meta property="og:title" content="AI Content Creation & Marketing Suite - Zion Tech Group" />
        <meta property="og:description" content="Generate high-quality content across all platforms with AI. Advanced SEO optimization and brand voice consistency." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-creation-suite" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-creation-suite" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl floating" />
            <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 text-neon-cyan">
                AI Content Creation Suite
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Generate high-quality content across all platforms with AI-powered intelligence, 
                advanced SEO optimization, and consistent brand voice
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="#pricing" className="btn-futuristic glow-cyan hover:glow-purple transition-all duration-300">
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-futuristic glow-purple hover:glow-pink transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { number: '80%', label: 'Time Saved', icon: '⚡' },
                  { number: '45%', label: 'Engagement Boost', icon: '📈' },
                  { number: '60%', label: 'SEO Improvement', icon: '🔍' },
                  { number: '25+', label: 'Languages', icon: '🌍' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-neon-purple">
                🚀 Powerful AI Content Creation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and distribute high-quality content at scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-gray-800/70"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-neon-green">
                💎 Transform Your Content Strategy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See measurable results with our AI-powered content creation platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-green-500/20"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-neon-pink">
                🎯 Perfect For Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a startup or enterprise, our AI content suite scales with your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-800/50 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-neon-yellow">
                💰 Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your content creation needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 rounded-2xl border-2 ${
                    plan.popular 
                      ? 'border-purple-500 bg-gray-800/70' 
                      : 'border-gray-700 bg-gray-800/50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-neon-cyan">
                🚀 Ready to Transform Your Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI to create engaging, SEO-optimized content that drives results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn-futuristic glow-cyan hover:glow-purple transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-futuristic glow-purple hover:glow-pink transition-all duration-300">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="mt-8 text-gray-400">
                <p>📞 Call us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
                <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentCreationSuite;