import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Brain, 
  Monitor, 
  Search, 
  Shield, 
  Mail, 
  Share2, 
  Check, 
  Star,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Lock,
  BarChart3,
  Calendar,
  Target
} from 'lucide-react';

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality, SEO-optimized content for blogs, social media, emails, and landing pages using advanced AI technology.',
      icon: <Brain className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      gradient: 'from-purple-400 to-pink-500',
      features: [
        'AI-powered content generation',
        'Multiple content types (blog, social, email)',
        'SEO optimization suggestions',
        'Content templates library',
        'Plagiarism-free content',
        'Multi-language support'
      ],
      useCases: [
        'Blog content creation',
        'Social media posts',
        'Email marketing campaigns',
        'Product descriptions',
        'Landing page copy',
        'Newsletter content'
      ],
      pricing: {
        starter: { price: 29, features: ['100 generations/month', 'Basic templates', 'SEO analysis', 'Email support'] },
        professional: { price: 99, features: ['500 generations/month', 'Premium templates', 'Advanced SEO', 'Priority support', 'API access'] },
        enterprise: { price: 299, features: ['Unlimited generations', 'Custom templates', 'White-label options', 'SLA guarantee'] }
      },
      marketPrice: '$29-299/month',
      competitors: ['Jasper AI', 'Copy.ai', 'Writesonic'],
      website: 'https://ai-content.ziontech.ai',
      demo: 'https://demo.ai-content.ziontech.ai'
    },
    {
      id: 'performance-monitor',
      name: 'Website Performance Monitor',
      description: 'Monitor your website performance in real-time with comprehensive metrics, alerts, and optimization recommendations.',
      icon: <Monitor className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      features: [
        'Real-time performance monitoring',
        'Core Web Vitals tracking',
        'Uptime monitoring',
        'Performance alerts',
        'Historical data analysis',
        'Optimization recommendations'
      ],
      useCases: [
        'Website performance tracking',
        'User experience monitoring',
        'SEO performance optimization',
        'Server health monitoring',
        'CDN performance analysis',
        'Mobile performance testing'
      ],
      pricing: {
        starter: { price: 19, features: ['5 URLs', '5-min monitoring', 'Basic metrics', 'Email alerts', '7-day retention'] },
        professional: { price: 49, features: ['25 URLs', '1-min monitoring', 'Advanced metrics', 'Multiple alerts', '30-day retention', 'API access'] },
        enterprise: { price: 149, features: ['Unlimited URLs', 'Real-time monitoring', 'All metrics', 'Custom dashboards', '1-year retention', 'SLA guarantee'] }
      },
      marketPrice: '$19-149/month',
      competitors: ['Pingdom', 'GTmetrix', 'WebPageTest'],
      website: 'https://performance.ziontech.ai',
      demo: 'https://demo.performance.ziontech.ai'
    },
    {
      id: 'seo-analytics',
      name: 'SEO Analytics Dashboard',
      description: 'Comprehensive SEO tracking, competitor analysis, and keyword monitoring to improve your search engine rankings.',
      icon: <Search className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      features: [
        'Keyword tracking & ranking',
        'Competitor analysis',
        'Backlink monitoring',
        'Technical SEO audits',
        'Performance reporting',
        'Mobile optimization insights'
      ],
      useCases: [
        'SEO performance tracking',
        'Competitor research',
        'Keyword strategy development',
        'Technical SEO audits',
        'Link building campaigns',
        'Content optimization'
      ],
      pricing: {
        starter: { price: 39, features: ['100 keywords', 'Basic analysis', 'Monthly reports', 'Email support', '7-day retention'] },
        professional: { price: 89, features: ['500 keywords', 'Advanced analysis', 'Weekly reports', 'Priority support', '30-day retention', 'API access'] },
        enterprise: { price: 199, features: ['Unlimited keywords', 'Full SEO suite', 'Daily reports', 'Dedicated support', '1-year retention', 'White-label options'] }
      },
      marketPrice: '$39-199/month',
      competitors: ['Ahrefs', 'SEMrush', 'Moz'],
      website: 'https://seo.ziontech.ai',
      demo: 'https://demo.seo.ziontech.ai'
    },
    {
      id: 'api-rate-limiter',
      name: 'API Rate Limiter',
      description: 'Protect your APIs with intelligent rate limiting, traffic management, and comprehensive analytics.',
      icon: <Shield className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      gradient: 'from-red-400 to-orange-500',
      features: [
        'Intelligent rate limiting',
        'Traffic pattern analysis',
        'API key management',
        'Real-time monitoring',
        'Custom rules & policies',
        'Comprehensive analytics'
      ],
      useCases: [
        'API protection & security',
        'Traffic management',
        'Developer portal management',
        'Microservices protection',
        'SaaS API security',
        'Enterprise API governance'
      ],
      pricing: {
        starter: { price: 25, features: ['10 rate limit rules', 'Basic limiting', 'API key management', 'Email notifications', '7-day retention'] },
        professional: { price: 79, features: ['50 rate limit rules', 'Advanced limiting', 'Unlimited API keys', 'Real-time monitoring', '30-day retention', 'API access'] },
        enterprise: { price: 199, features: ['Unlimited rules', 'Enterprise security', 'Advanced features', 'Custom integrations', '1-year retention', 'SLA guarantee'] }
      },
      marketPrice: '$25-199/month',
      competitors: ['Kong', 'Tyk', 'AWS API Gateway'],
      website: 'https://rate-limiter.ziontech.ai',
      demo: 'https://demo.rate-limiter.ziontech.ai'
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing Automation',
      description: 'Create engaging email campaigns, automate customer journeys, and drive conversions with intelligent email marketing.',
      icon: <Mail className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      features: [
        'Drag & drop email builder',
        'Advanced automation workflows',
        'A/B testing & optimization',
        'Subscriber segmentation',
        'Performance analytics',
        'Template library'
      ],
      useCases: [
        'Newsletter campaigns',
        'Welcome series automation',
        'Abandoned cart recovery',
        'Product announcements',
        'Customer onboarding',
        'Lead nurturing'
      ],
      pricing: {
        starter: { price: 29, features: ['1,000 subscribers', 'Basic templates', 'Simple automation', 'Basic analytics', 'Email support'] },
        professional: { price: 79, features: ['10,000 subscribers', 'Advanced templates', 'Advanced automation', 'Advanced analytics', 'Priority support', 'API access'] },
        enterprise: { price: 199, features: ['Unlimited subscribers', 'Custom templates', 'Complex workflows', 'Enterprise analytics', 'Dedicated support', 'White-label options'] }
      },
      marketPrice: '$29-199/month',
      competitors: ['Mailchimp', 'ConvertKit', 'ActiveCampaign'],
      website: 'https://email.ziontech.ai',
      demo: 'https://demo.email.ziontech.ai'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      description: 'Schedule, manage, and analyze your social media presence across multiple platforms from one unified dashboard.',
      icon: <Share2 className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
      features: [
        'Multi-platform scheduling',
        'Content calendar management',
        'Campaign planning tools',
        'Performance analytics',
        'Team collaboration',
        'Auto-posting & optimization'
      ],
      useCases: [
        'Social media management',
        'Content calendar planning',
        'Campaign coordination',
        'Team collaboration',
        'Performance tracking',
        'Brand consistency'
      ],
      pricing: {
        starter: { price: 19, features: ['3 social accounts', 'Basic scheduling', 'Simple calendar', 'Basic analytics', 'Email support'] },
        professional: { price: 49, features: ['10 social accounts', 'Advanced scheduling', 'Content calendar', 'Advanced analytics', 'Priority support', 'API access'] },
        enterprise: { price: 129, features: ['Unlimited accounts', 'Enterprise scheduling', 'Advanced calendar', 'Enterprise analytics', 'Dedicated support', 'White-label options'] }
      },
      marketPrice: '$19-129/month',
      competitors: ['Buffer', 'Hootsuite', 'Later'],
      website: 'https://social.ziontech.ai',
      demo: 'https://demo.social.ziontech.ai'
    }
  ];

  const marketInsights = [
    {
      title: 'AI Content Generation',
      marketSize: '$1.2B',
      growth: '+23%',
      description: 'Rapidly growing market with increasing demand for automated content creation'
    },
    {
      title: 'Performance Monitoring',
      marketSize: '$3.8B',
      growth: '+18%',
      description: 'Essential for modern web applications and user experience optimization'
    },
    {
      title: 'SEO Analytics',
      marketSize: '$2.1B',
      growth: '+21%',
      description: 'Critical for digital marketing and search engine optimization'
    },
    {
      title: 'API Management',
      marketSize: '$4.2B',
      growth: '+25%',
      description: 'Growing demand for API security and traffic management'
    },
    {
      title: 'Email Marketing',
      marketSize: '$7.5B',
      growth: '+15%',
      description: 'Mature market with strong automation and personalization trends'
    },
    {
      title: 'Social Media Management',
      marketSize: '$2.8B',
      growth: '+19%',
      description: 'Increasing need for multi-platform social media coordination'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Professional Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS services including AI content generation, performance monitoring, SEO analytics, API management, email marketing, and social media scheduling." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Professional micro SaaS services for modern businesses. AI-powered solutions with competitive pricing and enterprise-grade features." />
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
            Micro SaaS Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Professional Micro SaaS Solutions
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover our comprehensive suite of micro SaaS services designed for modern businesses. 
            From AI-powered content generation to enterprise-grade performance monitoring, 
            we deliver professional solutions with competitive pricing and exceptional value.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Overview & Competitive Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our services are positioned competitively in growing markets with strong demand and proven business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{insight.title}</h3>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-2xl font-bold text-cursor-blue">{insight.marketSize}</div>
                    <div className="text-green-400 font-semibold">{insight.growth}</div>
                  </div>
                  <p className="text-gray-400 text-sm">{insight.description}</p>
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
              Each service is designed to solve specific business challenges with professional-grade features and competitive pricing.
            </p>
          </div>

          <div className="space-y-16">
            {microSaasServices.map((service, index) => (
              <div key={service.id} className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color} shadow-xl`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-cursor-blue" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                              <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-cursor-blue" />
                          Use Cases
                        </h4>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, useCaseIndex) => (
                            <li key={useCaseIndex} className="flex items-center text-gray-300 text-sm">
                              <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        href={service.website}
                        size="sm"
                        className="bg-cursor-blue hover:bg-blue-600"
                      >
                        Visit Website
                      </Button>
                      <Button
                        href={service.demo}
                        variant="outline"
                        size="sm"
                        className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
                      >
                        Try Demo
                      </Button>
                    </div>
                  </div>

                  {/* Pricing & Market Info */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-cursor-blue" />
                        Pricing & Market
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Market Price Range</p>
                          <p className="text-lg font-bold text-white">{service.marketPrice}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-400 mb-1">Our Pricing</p>
                          <div className="space-y-2">
                            {Object.entries(service.pricing).map(([tier, details]) => (
                              <div key={tier} className="flex justify-between items-center">
                                <span className="text-sm text-gray-300 capitalize">{tier}</span>
                                <span className="text-sm font-semibold text-white">${details.price}/mo</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-400 mb-1">Key Competitors</p>
                          <div className="flex flex-wrap gap-2">
                            {service.competitors.map((competitor, compIndex) => (
                              <span key={compIndex} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                                {competitor}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Why Choose Zion Tech Group Micro SaaS Services?
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We combine professional-grade features with competitive pricing to deliver exceptional value for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover border-gradient-blue text-center">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cursor-blue/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Quality</h3>
                <p className="text-gray-400 text-sm">Enterprise-grade features and reliability at micro SaaS prices</p>
              </div>
            </Card>

            <Card className="card-hover border-gradient-blue text-center">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cursor-blue/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Competitive Pricing</h3>
                <p className="text-gray-400 text-sm">Market-competitive pricing with better value than alternatives</p>
              </div>
            </Card>

            <Card className="card-hover border-gradient-blue text-center">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cursor-blue/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
                <p className="text-gray-400 text-sm">Professional support and guidance for your business needs</p>
              </div>
            </Card>

            <Card className="card-hover border-gradient-blue text-center">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cursor-blue/10 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Infrastructure</h3>
                <p className="text-gray-400 text-sm">Worldwide availability with enterprise-grade reliability</p>
              </div>
            </Card>
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
            Choose the micro SaaS service that fits your business needs and start transforming your operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get Started
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}