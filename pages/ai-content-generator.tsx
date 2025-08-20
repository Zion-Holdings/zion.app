import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Bot, FileText, Zap, Users, Globe, Shield, Check, Star } from 'lucide-react';

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced language models',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Multiple Formats',
      description: 'Blog posts, social media, emails, and marketing copy',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Generation',
      description: 'Instant content creation with customizable parameters',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Share projects and collaborate with your team',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individual creators and small teams',
      features: [
        '1,000 AI-generated words per month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Export to PDF/Word',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial',
      color: 'border-gray-600 hover:border-purple-500'
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '10,000 AI-generated words per month',
        '25+ content templates',
        'Advanced SEO tools',
        'Priority support',
        'Team collaboration (up to 5 users)',
        'Advanced analytics & insights',
        'API access',
        'Custom branding'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'border-purple-500 hover:border-purple-400'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with unlimited needs',
      features: [
        'Unlimited AI-generated words',
        '100+ premium templates',
        'Full SEO suite',
        '24/7 dedicated support',
        'Unlimited team members',
        'Advanced AI models',
        'Custom integrations',
        'White-label solution',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'border-gray-600 hover:border-purple-500'
    }
  ];

  const marketComparison = [
    {
      competitor: 'Jasper AI',
      pricing: '$39/month',
      words: '10,000',
      rating: '4.8/5',
      pros: ['Excellent templates', 'Good AI quality'],
      cons: ['Higher pricing', 'Limited customization']
    },
    {
      competitor: 'Copy.ai',
      pricing: '$36/month',
      words: 'Unlimited',
      rating: '4.6/5',
      pros: ['Unlimited words', 'Good value'],
      cons: ['Basic features', 'Limited templates']
    },
    {
      competitor: 'Writesonic',
      pricing: '$19/month',
      words: '10,000',
      rating: '4.4/5',
      pros: ['Affordable', 'Good for beginners'],
      cons: ['Limited features', 'Basic AI models']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      content: 'Our content creation process is 5x faster with Zion AI. The quality is exceptional and the pricing is unbeatable.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Content Creator',
      company: 'Digital Nomad Blog',
      content: 'I switched from Jasper to Zion AI and saved $20/month while getting better content quality. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'SEO Specialist',
      company: 'Growth Marketing Co.',
      content: 'The SEO optimization features are incredible. Our organic traffic increased by 40% in just 3 months.',
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>AI Content Generator - Zion Tech Group | Professional AI Writing Tool</title>
        <meta name="description" content="Generate high-quality content with our AI-powered writing tool. Professional plans starting at $19/month. Try free for 7 days." />
        <meta property="og:title" content="AI Content Generator - Zion Tech Group" />
        <meta property="og:description" content="Professional AI writing tool with plans from $19/month. Generate blog posts, social media, and marketing copy instantly." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
                AI Content Generation
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              AI Content Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Create professional content in seconds with our advanced AI writing tool. 
              Generate blog posts, social media content, emails, and marketing copy that converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Start Free Trial
              </Button>
              <Button
                href="#demo"
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Powerful Features for Content Creation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need to create engaging, SEO-optimized content that drives results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include a 7-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-8">{plan.description}</p>
                    <ul className="text-left space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Comparison Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                How We Compare to the Competition
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See why Zion AI is the smart choice for content creation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketComparison.map((competitor, index) => (
                <Card key={index} className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{competitor.competitor}</h3>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(parseFloat(competitor.rating))
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">{competitor.rating}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-white mb-1">Pricing: {competitor.pricing}</p>
                    <p className="text-sm text-gray-400">Words: {competitor.words}</p>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-green-400 mb-1">Pros:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {competitor.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-400 mb-1">Cons:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {competitor.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center">
                            <span className="w-4 h-4 text-red-400 mr-2 flex-shrink-0">×</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                What Our Customers Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-purple-400">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-purple-100 mb-12">
              Join thousands of creators who are already using Zion AI to generate amazing content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#signup"
                variant="secondary"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}