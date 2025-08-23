import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Activity, Server, AlertTriangle, BarChart3, Zap, Shield, Check, Star, TrendingUp } from 'lucide-react';

export default function CloudMonitoringPage() {
  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Real-time Monitoring',
      description: 'Monitor your infrastructure with sub-second latency',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Multi-Cloud Support',
      description: 'AWS, Azure, GCP, and on-premise monitoring',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Smart Alerting',
      description: 'AI-powered anomaly detection and intelligent notifications',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Deep insights and predictive analytics',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 servers',
        'Basic monitoring metrics',
        'Email alerts',
        '7-day data retention',
        'Community support',
        'Basic dashboards'
      ],
      popular: false,
      cta: 'Start Free Trial',
      color: 'border-gray-600 hover:border-green-500'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100 servers',
        'Advanced monitoring & APM',
        'SMS & Slack alerts',
        '30-day data retention',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'border-green-500 hover:border-green-400'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited servers',
        'Full-stack observability',
        'Custom alerting rules',
        '1-year data retention',
        '24/7 dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'border-gray-600 hover:border-green-500'
    }
  ];

  const marketComparison = [
    {
      competitor: 'Datadog',
      pricing: '$15/host/month',
      servers: '10 servers = $150/month',
      rating: '4.7/5',
      pros: ['Comprehensive features', 'Great integrations'],
      cons: ['Very expensive', 'Complex pricing']
    },
    {
      competitor: 'New Relic',
      pricing: '$99/user/month',
      servers: '5 users = $495/month',
      rating: '4.5/5',
      pros: ['Good APM', 'User-based pricing'],
      cons: ['Expensive for teams', 'Limited server monitoring']
    },
    {
      competitor: 'Prometheus + Grafana',
      pricing: 'Free',
      servers: 'Unlimited',
      rating: '4.3/5',
      pros: ['Completely free', 'Highly customizable'],
      cons: ['Requires DevOps expertise', 'No managed service']
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'CloudScale Inc.',
      content: 'Zion Monitoring reduced our infrastructure costs by 40% while providing better visibility than Datadog. The pricing is unbeatable.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'We switched from New Relic to Zion and saved $300/month. The monitoring is just as good, if not better.',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      role: 'System Administrator',
      company: 'TechCorp',
      content: 'The AI-powered alerting is incredible. We get notified about issues before they become problems.',
      rating: 5
    }
  ];

  const metrics = [
    { label: '99.99%', value: 'Uptime Guarantee', color: 'text-green-400' },
    { label: '<100ms', value: 'Alert Latency', color: 'text-blue-400' },
    { label: '24/7', value: 'Support Coverage', color: 'text-purple-400' },
    { label: '1M+', value: 'Metrics/Second', color: 'text-orange-400' }
  ];

  return (
    <>
      <Head>
        <title>Cloud Monitoring - Zion Tech Group | Professional Infrastructure Monitoring</title>
        <meta name="description" content="Professional cloud monitoring and infrastructure management. Plans starting at $29/month. Monitor AWS, Azure, GCP with real-time alerts." />
        <meta property="og:title" content="Cloud Monitoring - Zion Tech Group" />
        <meta property="og:description" content="Professional cloud monitoring starting at $29/month. Real-time infrastructure monitoring with AI-powered alerting." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Cloud Infrastructure Monitoring
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Cloud Monitoring
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Professional infrastructure monitoring for AWS, Azure, GCP, and on-premise environments. 
              Get real-time visibility with AI-powered alerting and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Start Free Trial
              </Button>
              <Button
                href="#demo"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                Watch Demo
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.label}
                  </div>
                  <div className="text-gray-400 text-sm">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Enterprise-Grade Monitoring Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need to monitor, alert, and optimize your infrastructure.
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
                Transparent, Predictable Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                No hidden fees, no per-host charges. Simple monthly pricing that scales with your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : 'border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
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
                See why Zion Monitoring is the cost-effective choice for infrastructure monitoring.
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
                    <p className="text-sm text-gray-400">{competitor.servers}</p>
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
                Trusted by DevOps Teams Worldwide
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
                    <p className="text-sm text-green-400">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Monitor Your Infrastructure?
            </h2>
            <p className="text-xl text-green-100 mb-12">
              Join thousands of DevOps teams who trust Zion for their monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#signup"
                variant="secondary"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600"
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