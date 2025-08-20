import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, Star, Zap, Shield, Users, Globe, TrendingUp, Clock, DollarSign, Target } from 'lucide-react';

export default function ServicesPage() {
  const microSaasServices = [
    {
      icon: '📊',
      title: 'AI-Powered Social Media Analytics',
      description: 'Real-time social media performance tracking with AI-driven insights and automated reporting for businesses.',
      features: [
        'Multi-platform social media monitoring',
        'AI-powered sentiment analysis',
        'Automated performance reports',
        'Competitor analysis & benchmarking',
        'ROI tracking & attribution',
        'Custom dashboard & alerts'
      ],
      pricing: {
        starter: '$49/month',
        professional: '$149/month',
        enterprise: '$399/month'
      },
      marketPosition: 'Competitive with Hootsuite, Buffer, and Sprout Social',
      useCases: ['Marketing agencies', 'E-commerce brands', 'SaaS companies', 'Content creators'],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      cta: 'Start Free Trial'
    },
    {
      icon: '🔍',
      title: 'SEO Content Optimization Suite',
      description: 'AI-powered content optimization tool that analyzes and improves your content for better search rankings.',
      features: [
        'Real-time SEO scoring',
        'Keyword density optimization',
        'Content readability analysis',
        'Competitor content research',
        'Automated content suggestions',
        'Performance tracking & reporting'
      ],
      pricing: {
        starter: '$39/month',
        professional: '$99/month',
        enterprise: '$249/month'
      },
      marketPosition: 'Alternative to Clearscope, MarketMuse, and Surfer SEO',
      useCases: ['Content marketers', 'SEO agencies', 'Bloggers', 'E-commerce sites'],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      cta: 'Try for Free'
    },
    {
      icon: '📧',
      title: 'Smart Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI-powered segmentation, personalization, and automation workflows.',
      features: [
        'AI-powered audience segmentation',
        'Behavioral trigger automation',
        'Personalized content recommendations',
        'A/B testing optimization',
        'Advanced analytics & reporting',
        'GDPR compliance tools'
      ],
      pricing: {
        starter: '$29/month',
        professional: '$79/month',
        enterprise: '$199/month'
      },
      marketPosition: 'Competes with Mailchimp, ConvertKit, and ActiveCampaign',
      useCases: ['E-commerce businesses', 'SaaS companies', 'Newsletters', 'Marketing teams'],
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
      cta: 'Get Started'
    },
    {
      icon: '🎯',
      title: 'Customer Feedback & Survey Platform',
      description: 'Comprehensive feedback collection and analysis platform with AI-powered insights and automated reporting.',
      features: [
        'Multi-channel feedback collection',
        'AI-powered sentiment analysis',
        'Automated survey workflows',
        'Real-time response tracking',
        'Advanced analytics & reporting',
        'Integration with popular tools'
      ],
      pricing: {
        starter: '$19/month',
        professional: '$59/month',
        enterprise: '$159/month'
      },
      marketPosition: 'Alternative to SurveyMonkey, Typeform, and Qualtrics',
      useCases: ['Product teams', 'Customer success', 'Market research', 'HR departments'],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      cta: 'Start Collecting'
    },
    {
      icon: '📈',
      title: 'Business Intelligence Dashboard',
      description: 'Real-time business intelligence platform that consolidates data from multiple sources into actionable insights.',
      features: [
        'Multi-source data integration',
        'Real-time dashboard updates',
        'Custom KPI tracking',
        'Automated reporting',
        'Data visualization tools',
        'Mobile-responsive design'
      ],
      pricing: {
        starter: '$79/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPosition: 'Competes with Tableau, Power BI, and Looker',
      useCases: ['Business analysts', 'Executives', 'Data teams', 'Consultants'],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      cta: 'View Demo'
    },
    {
      icon: '🤖',
      title: 'AI Chatbot Builder',
      description: 'No-code AI chatbot platform for customer service, lead generation, and business automation.',
      features: [
        'Drag-and-drop chatbot builder',
        'AI-powered conversation flows',
        'Multi-language support',
        'Integration with popular platforms',
        'Analytics & performance tracking',
        'Custom branding options'
      ],
      pricing: {
        starter: '$25/month',
        professional: '$75/month',
        enterprise: '$199/month'
      },
      marketPosition: 'Alternative to Intercom, Drift, and ManyChat',
      useCases: ['Customer support', 'E-commerce', 'Lead generation', 'Small businesses'],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      cta: 'Build Your Bot'
    }
  ];

  const marketAnalysis = [
    {
      category: 'Social Media Tools',
      marketSize: '$23.4B',
      growthRate: '13.2%',
      keyPlayers: 'Hootsuite, Buffer, Sprout Social',
      ourAdvantage: 'AI-powered insights, competitive pricing, easy integration'
    },
    {
      category: 'SEO Tools',
      marketSize: '$1.2B',
      growthRate: '18.7%',
      keyPlayers: 'Clearscope, MarketMuse, Surfer SEO',
      ourAdvantage: 'Real-time optimization, AI suggestions, comprehensive reporting'
    },
    {
      category: 'Email Marketing',
      marketSize: '$7.5B',
      growthRate: '15.3%',
      keyPlayers: 'Mailchimp, ConvertKit, ActiveCampaign',
      ourAdvantage: 'AI segmentation, automation workflows, advanced analytics'
    },
    {
      category: 'Survey Platforms',
      marketSize: '$3.2B',
      growthRate: '12.8%',
      keyPlayers: 'SurveyMonkey, Typeform, Qualtrics',
      ourAdvantage: 'AI sentiment analysis, automated workflows, competitive pricing'
    }
  ];

  const technologies = [
    { name: 'Next.js', category: 'Frontend', icon: '⚡' },
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Azure', category: 'Cloud', icon: '🔷' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'PyTorch', category: 'AI/ML', icon: '🔥' },
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Real Solutions with Market Pricing</title>
        <meta name="description" content="Discover our real micro SaaS services: AI-powered social media analytics, SEO optimization, email marketing automation, and more. Competitive pricing with enterprise features." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Real micro SaaS solutions with competitive pricing. AI-powered tools for social media, SEO, email marketing, and business intelligence." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Real Micro SaaS Solutions
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Proven Micro SaaS Services
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Real solutions with competitive pricing. Our micro SaaS services are designed to solve specific business problems with AI-powered automation and enterprise-grade features.
          </p>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Analysis & Competitive Positioning
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the market landscape helps us deliver better value and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketAnalysis.map((market, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{market.category}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Size:</span>
                    <span className="text-green-400 font-semibold">{market.marketSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Growth Rate:</span>
                    <span className="text-blue-400 font-semibold">{market.growthRate}</span>
                  </div>
                  <div className="text-left">
                    <span className="text-gray-400 block mb-2">Key Players:</span>
                    <span className="text-gray-300 text-xs">{market.keyPlayers}</span>
                  </div>
                  <div className="text-left">
                    <span className="text-gray-400 block mb-2">Our Advantage:</span>
                    <span className="text-cursor-blue text-xs">{market.ourAdvantage}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Our Micro SaaS Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each service is designed to solve specific business problems with competitive pricing and enterprise features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Pricing Plans
                      </h4>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="text-gray-400 text-xs">Starter</div>
                          <div className="text-white font-semibold">{service.pricing.starter}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-400 text-xs">Professional</div>
                          <div className="text-white font-semibold">{service.pricing.professional}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-400 text-xs">Enterprise</div>
                          <div className="text-white font-semibold">{service.pricing.enterprise}</div>
                        </div>
                      </div>
                    </div>

                    {/* Market Position */}
                    <div className="mb-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
                      <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Market Position
                      </h4>
                      <p className="text-gray-300 text-sm">{service.marketPosition}</p>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Perfect For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 text-cursor-blue mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href="/contact"
                      size="lg"
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
              Technology Stack
            </div>
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Built with Modern Technologies
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and frameworks to deliver robust, scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="card-hover text-center group border-gradient-blue"
                style={{ animationDelay: `${(index * 0.05) + 0.2}s` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect micro SaaS service for your business needs. All plans include a 14-day free trial with no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Start Free Trial
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Detailed Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}