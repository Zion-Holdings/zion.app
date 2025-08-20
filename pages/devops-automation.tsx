import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { GitBranch, Zap, Shield, BarChart3, Check, Star, GitPullRequest, Cpu } from 'lucide-react';

export default function DevOpsAutomationPage() {
  const features = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment workflows',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and Kubernetes automation',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance checks',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Monitoring',
      description: 'Real-time performance insights and optimization',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 repositories',
        'Basic CI/CD pipelines',
        'GitHub integration',
        'Email notifications',
        'Basic security scanning',
        'Community support'
      ],
      popular: false,
      cta: 'Start Free Trial',
      color: 'border-gray-600 hover:border-blue-500'
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for growing development teams',
      features: [
        'Up to 25 repositories',
        'Advanced CI/CD workflows',
        'Multi-cloud deployment',
        'Slack & Teams integration',
        'Advanced security suite',
        'Priority support',
        'Custom pipelines',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'border-blue-500 hover:border-blue-400'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large-scale development operations',
      features: [
        'Unlimited repositories',
        'Enterprise CI/CD',
        'Advanced IaC automation',
        'Custom integrations',
        '24/7 dedicated support',
        'SLA guarantees',
        'On-premise options',
        'Custom security policies'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'border-gray-600 hover:border-blue-500'
    }
  ];

  const marketComparison = [
    {
      competitor: 'GitHub Actions',
      pricing: 'Free + $0.008/min',
      repositories: 'Unlimited',
      rating: '4.6/5',
      pros: ['GitHub native', 'Good free tier'],
      cons: ['Expensive for teams', 'Limited features']
    },
    {
      competitor: 'GitLab CI/CD',
      pricing: '$19/user/month',
      repositories: 'Unlimited',
      rating: '4.4/5',
      pros: ['Integrated platform', 'Good CI/CD'],
      cons: ['User-based pricing', 'Limited integrations']
    },
    {
      competitor: 'Jenkins',
      pricing: 'Free',
      repositories: 'Unlimited',
      rating: '4.2/5',
      pros: ['Completely free', 'Highly customizable'],
      cons: ['Requires maintenance', 'No managed service']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'DevOps Lead',
      company: 'TechStart Inc.',
      content: 'Zion DevOps reduced our deployment time from 2 hours to 15 minutes. The automation is incredible and the pricing is fair.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Engineering Manager',
      company: 'CloudWorks',
      content: 'We switched from GitHub Actions to Zion and saved $200/month while getting better automation features.',
      rating: 5
    },
    {
      name: 'Robert Davis',
      role: 'Site Reliability Engineer',
      company: 'ScaleTech',
      content: 'The infrastructure automation features are game-changing. We can now deploy to multiple clouds with a single click.',
      rating: 5
    }
  ];

  const automationExamples = [
    {
      title: 'Automated Testing',
      description: 'Run comprehensive test suites on every commit',
      icon: '🧪',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Security Scanning',
      description: 'Automated vulnerability detection and compliance checks',
      icon: '🔒',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Deployment Automation',
      description: 'Zero-downtime deployments with rollback capabilities',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Infrastructure Management',
      description: 'Automated scaling and resource optimization',
      icon: '🏗️',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <>
      <Head>
        <title>DevOps Automation - Zion Tech Group | Professional CI/CD & Infrastructure Automation</title>
        <meta name="description" content="Professional DevOps automation platform with CI/CD, infrastructure as code, and security automation. Plans starting at $39/month." />
        <meta property="og:title" content="DevOps Automation - Zion Tech Group" />
        <meta property="og:description" content="Professional DevOps automation starting at $39/month. CI/CD pipelines, infrastructure as code, and security automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                DevOps Automation Platform
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              DevOps Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, 
              and intelligent security automation. Deploy faster, safer, and more reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Start Free Trial
              </Button>
              <Button
                href="#demo"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
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
                Complete DevOps Automation Suite
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need to automate your development and deployment processes.
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

        {/* Automation Examples Section */}
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                What You Can Automate
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how Zion DevOps can transform your development workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationExamples.map((example, index) => (
                <Card
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 bg-gradient-to-br ${example.color}`}>
                    {example.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{example.title}</h3>
                  <p className="text-gray-400">{example.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the plan that fits your DevOps needs. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                          <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
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
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
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
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                How We Compare to the Competition
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See why Zion DevOps is the smart choice for automation.
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
                    <p className="text-sm text-gray-400">Repositories: {competitor.repositories}</p>
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
        <section className="py-24 bg-gray-900">
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
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Join thousands of teams who trust Zion for their DevOps automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#signup"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
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