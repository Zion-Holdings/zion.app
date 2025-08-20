import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Brain, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, ArrowRight, Play, Download, Code, Globe, Lock, Sparkles } from 'lucide-react';

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality, engaging content using advanced language models trained on millions of articles, blogs, and marketing copy.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Real-time Generation',
      description: 'Create content in seconds with our lightning-fast AI engine. No more waiting hours for content creation.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Plagiarism-Free Content',
      description: 'Every piece of content is unique and original. Our AI ensures 100% plagiarism-free writing.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools that analyze keywords, suggest improvements, and optimize content for search engines.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level fluency and cultural understanding.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: '24/7 Availability',
      description: 'Access our AI content generator anytime, anywhere. No downtime, no waiting, instant results.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',
      gradient: 'from-teal-400 to-blue-500',
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small blogs',
      features: [
        '1,000 words per month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'API access (100 calls/month)',
        'Content analytics dashboard'
      ],
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 words per month',
        '25+ content templates',
        'Advanced SEO tools',
        'Priority support',
        'API access (1,000 calls/month)',
        'Advanced analytics',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true,
      color: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited words',
        'All templates + custom',
        'Full SEO suite',
        'Dedicated support',
        'Unlimited API access',
        'Advanced analytics',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      color: 'border-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const useCases = [
    {
      title: 'Blog Writing',
      description: 'Generate engaging blog posts, articles, and long-form content in minutes.',
      icon: '📝',
      examples: ['Tech reviews', 'How-to guides', 'Industry insights', 'Product comparisons']
    },
    {
      title: 'Marketing Copy',
      description: 'Create compelling ad copy, landing pages, and marketing materials.',
      icon: '🎯',
      examples: ['Facebook ads', 'Google ads', 'Landing pages', 'Email campaigns']
    },
    {
      title: 'Social Media',
      description: 'Generate engaging social media posts, captions, and hashtag suggestions.',
      icon: '📱',
      examples: ['Instagram posts', 'Twitter threads', 'LinkedIn articles', 'TikTok captions']
    },
    {
      title: 'E-commerce',
      description: 'Write product descriptions, category pages, and promotional content.',
      icon: '🛍️',
      examples: ['Product descriptions', 'Category pages', 'Promotional emails', 'FAQ sections']
    }
  ];

  const integrations = [
    { name: 'WordPress', icon: '🔌', description: 'Direct plugin integration' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce content automation' },
    { name: 'HubSpot', icon: '📊', description: 'Marketing automation sync' },
    { name: 'Mailchimp', icon: '📧', description: 'Email campaign content' },
    { name: 'Slack', icon: '💬', description: 'Team collaboration' },
    { name: 'Zapier', icon: '⚡', description: '500+ app integrations' }
  ];

  return (
    <>
      <Head>
        <title>AI Content Generator | Zion Tech Group - Advanced AI-Powered Content Creation</title>
        <meta name="description" content="Generate high-quality, SEO-optimized content in seconds with our advanced AI content generator. Support for 50+ languages, plagiarism-free writing, and real-time generation." />
        <meta property="og:title" content="AI Content Generator | Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered content creation with real-time generation, SEO optimization, and multi-language support." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Content Generation
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
            AI Content Generator
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
            Create engaging, SEO-optimized content in seconds with the world's most advanced AI writing assistant
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              href="#pricing"
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 shadow-2xl shadow-purple-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white/20 hover:border-white/40 hover:bg-white/5"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">10M+</div>
              <div className="text-gray-400">Words Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create exceptional content at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Versatile content creation for every industry and purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your content creation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''} border ${plan.color} hover:border-purple-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  className={`w-full ${plan.buttonColor} text-white`}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-400">{integration.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of content creators who are already saving hours every day with AI-powered content generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}