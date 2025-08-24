import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Search, TrendingUp, Target, BarChart3, Globe, Zap, Users, CheckCircle, ArrowRight, Play, Star, Eye, Brain, Shield, Lock, Sparkles, ChartBar, Lightbulb, Rocket, Settings } from 'lucide-react';

export default function AISeosuitePage() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Ranking Analytics',
      description: 'Track your search rankings in real-time with comprehensive analytics and competitor insights.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Content Optimization',
      description: 'AI-powered content analysis and optimization suggestions to improve search visibility.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Technical SEO',
      description: 'Comprehensive technical SEO audits with actionable recommendations for improvement.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Local SEO',
      description: 'Optimize for local search with location-based keyword research and citation management.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',
      gradient: 'from-teal-400 to-blue-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Automated Reports',
      description: 'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
    },
  ];

  const seoTools = [
    {
      category: 'Keyword Research',
      icon: <Search className="w-6 h-6 text-blue-400" />,
      tools: ['Long-tail keyword finder', 'Competitor keyword analysis', 'Search volume estimation', 'Keyword difficulty scoring', 'Trending keywords']
    },
    {
      category: 'On-Page SEO',
      icon: <Target className="w-6 h-6 text-green-400" />,
      tools: ['Content optimization', 'Meta tag generator', 'Schema markup builder', 'Internal linking suggestions', 'Image optimization']
    },
    {
      category: 'Technical SEO',
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      tools: ['Site audit tool', 'Page speed analyzer', 'Mobile optimization', 'Core Web Vitals', 'XML sitemap generator']
    },
    {
      category: 'Analytics & Reporting',
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      tools: ['Ranking tracker', 'Traffic analysis', 'Conversion tracking', 'Competitor monitoring', 'Custom dashboards']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small websites and blogs',
      features: [
        'Up to 5 websites',
        'Basic keyword research',
        'Monthly site audits',
        'Email support',
        'Basic reporting',
        'Mobile app access'
      ],
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 websites',
        'Advanced keyword research',
        'Weekly site audits',
        'Priority support',
        'Advanced reporting',
        'Competitor analysis',
        'API access',
        'White-label reports'
      ],
      popular: true,
      color: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited websites',
        'Full SEO suite',
        'Daily site audits',
        'Dedicated support',
        'Custom reporting',
        'Advanced analytics',
        'SLA guarantee',
        'On-premise option'
      ],
      popular: false,
      color: 'border-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Traffic data integration' },
    { name: 'Google Search Console', icon: '🔍', description: 'Search performance data' },
    { name: 'WordPress', icon: '🔌', description: 'Plugin integration' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce optimization' },
    { name: 'HubSpot', icon: '📈', description: 'Marketing automation sync' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'Zapier', icon: '⚡', description: '500+ app integrations' },
    { name: 'API Access', icon: '🔑', description: 'Custom integrations' }
  ];

  const useCases = [
    {
      title: 'E-commerce Websites',
      description: 'Optimize product pages, category pages, and search functionality for better conversions.',
      icon: '🛍️',
      benefits: ['Higher search rankings', 'Increased organic traffic', 'Better conversion rates', 'Competitive advantage']
    },
    {
      title: 'Content Marketing',
      description: 'Optimize blog posts, articles, and content for search engines and user engagement.',
      icon: '📝',
      benefits: ['Better content visibility', 'Higher engagement rates', 'More organic traffic', 'Authority building']
    },
    {
      title: 'Local Businesses',
      description: 'Improve local search visibility and attract customers in your area.',
      icon: '📍',
      benefits: ['Local search dominance', 'Increased foot traffic', 'Better customer acquisition', 'Competitive positioning']
    },
    {
      title: 'SaaS Companies',
      description: 'Optimize landing pages, feature pages, and documentation for better user acquisition.',
      icon: '💻',
      benefits: ['Higher conversion rates', 'Better user experience', 'Reduced acquisition costs', 'Market expansion']
    }
  ];

  const successMetrics = [
    { metric: 'Organic Traffic', value: '+150%', description: 'Average increase in organic traffic' },
    { metric: 'Search Rankings', value: '+45%', description: 'Improvement in search rankings' },
    { metric: 'Conversion Rate', value: '+80%', description: 'Increase in conversion rates' },
    { metric: 'ROI', value: '400%', description: 'Average return on investment' }
  ];

  return (
    <>
      <Head>
        <title>AI-Powered SEO Suite | Zion Tech Group - Advanced SEO Tools & Analytics</title>
        <meta name="description" content="Comprehensive AI-powered SEO suite with keyword research, content optimization, technical SEO audits, and real-time analytics. Boost your search rankings and organic traffic." />
        <meta property="og:title" content="AI-Powered SEO Suite | Zion Tech Group" />
        <meta property="og:description" content="Advanced SEO tools with AI-powered optimization, keyword research, and comprehensive analytics." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Search Engine Optimization
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
            AI-Powered SEO Suite
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
            Dominate search rankings with AI-powered SEO tools, comprehensive analytics, and intelligent optimization
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              href="#pricing"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25"
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
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">+150%</div>
              <div className="text-gray-400">Organic Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400">+45%</div>
              <div className="text-gray-400">Search Rankings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">+80%</div>
              <div className="text-gray-400">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">400%</div>
              <div className="text-gray-400">ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Powerful SEO Features
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Everything you need to dominate search rankings and drive organic traffic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
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

      {/* SEO Tools Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Comprehensive SEO Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Professional-grade tools used by top SEO agencies and marketers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoTools.map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{tool.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {tool.category}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {tool.tools.map((toolName, toolIndex) => (
                        <div key={toolIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {toolName}
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

      {/* Success Metrics Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Proven Results
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              See the impact our AI-powered SEO suite has on businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-bold mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{metric.metric}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
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
              Trusted by businesses across industries for SEO success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
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
              Choose the plan that fits your SEO needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} border ${plan.color} hover:border-blue-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses who are already ranking higher and driving more organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
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