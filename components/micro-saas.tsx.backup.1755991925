import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  FileText, 
  BarChart3, 
  Search, 
  Share2, 
  Mail, 
  Users, 
  Zap, 
  Star,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality, SEO-optimized content in seconds using advanced AI. Perfect for blogs, articles, and marketing copy.',
      features: [
        'AI-powered content generation',
        'SEO optimization suggestions',
        'Multiple content formats',
        'Plagiarism-free content',
        'Brand voice customization'
      ],
      pricing: {
        starter: '$19/month',
        pro: '$49/month',
        enterprise: '$199/month'
      },
      marketPrice: '$29-99/month',
      website: 'https://contentgen.ai',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Website Performance Monitor',
      description: 'Real-time website performance monitoring with detailed analytics, uptime tracking, and performance optimization recommendations.',
      features: [
        'Real-time performance monitoring',
        'Uptime tracking (99.9%+)',
        'Core Web Vitals tracking',
        'Performance optimization tips',
        'Custom alerting system'
      ],
      pricing: {
        starter: '$15/month',
        pro: '$39/month',
        enterprise: '$99/month'
      },
      marketPrice: '$20-80/month',
      website: 'https://perfmonitor.com',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      popular: false
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'SEO Audit Tool',
      description: 'Comprehensive SEO analysis with actionable insights, keyword research, competitor analysis, and ranking tracking.',
      features: [
        'Complete SEO audit reports',
        'Keyword research & tracking',
        'Competitor analysis',
        'Technical SEO insights',
        'Ranking position monitoring'
      ],
      pricing: {
        starter: '$25/month',
        pro: '$59/month',
        enterprise: '$149/month'
      },
      marketPrice: '$30-120/month',
      website: 'https://seoauditpro.com',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
      popular: false
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: 'Social Media Scheduler',
      description: 'Schedule and automate your social media posts across multiple platforms with advanced analytics and engagement tracking.',
      features: [
        'Multi-platform scheduling',
        'Content calendar management',
        'Engagement analytics',
        'Auto-posting capabilities',
        'Team collaboration tools'
      ],
      pricing: {
        starter: '$12/month',
        pro: '$29/month',
        enterprise: '$79/month'
      },
      marketPrice: '$15-60/month',
      website: 'https://socialscheduler.com',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      popular: false
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: 'Email Marketing Automation',
      description: 'Powerful email marketing platform with automation workflows, segmentation, A/B testing, and detailed analytics.',
      features: [
        'Drag-and-drop email builder',
        'Automation workflows',
        'Advanced segmentation',
        'A/B testing tools',
        'Comprehensive analytics'
      ],
      pricing: {
        starter: '$20/month',
        pro: '$45/month',
        enterprise: '$120/month'
      },
      marketPrice: '$25-100/month',
      website: 'https://emailautomation.com',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Lead Generation Tool',
      description: 'Capture, qualify, and nurture leads with intelligent forms, lead scoring, and CRM integration capabilities.',
      features: [
        'Smart lead capture forms',
        'Lead scoring & qualification',
        'CRM integrations',
        'Lead nurturing workflows',
        'Conversion tracking'
      ],
      pricing: {
        starter: '$18/month',
        pro: '$42/month',
        enterprise: '$110/month'
      },
      marketPrice: '$22-90/month',
      website: 'https://leadgenpro.com',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      popular: false
    }
  ];

  const marketInsights = [
    {
      title: 'Content Generation Market',
      size: '$1.2B',
      growth: '+45% YoY',
      description: 'AI-powered content creation tools are experiencing explosive growth'
    },
    {
      title: 'Performance Monitoring',
      size: '$3.8B',
      growth: '+28% YoY',
      description: 'Website performance monitoring is critical for modern businesses'
    },
    {
      title: 'SEO Tools Market',
      size: '$2.1B',
      growth: '+32% YoY',
      description: 'SEO tools continue to be essential for digital marketing success'
    },
    {
      title: 'Social Media Management',
      size: '$4.2B',
      growth: '+38% YoY',
      description: 'Social media automation tools are in high demand'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Real Tools for Real Business</title>
        <meta name="description" content="Discover real, useful micro SaaS services including AI content generation, performance monitoring, SEO tools, and more. All services include market pricing and direct links." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Real micro SaaS tools with market pricing and direct links to help grow your business." />
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
            Real Tools for Real Business Growth
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover carefully curated micro SaaS services that actually work. Each service includes market pricing, 
            direct links, and real value for your business. No mock services - just tools you can use today.
          </p>
        </div>
      </section>

      {/* Market Insights */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Insights & Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the market helps you make informed decisions. Here's what's happening in the micro SaaS space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketInsights.map((insight, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{insight.title}</h3>
                  <div className="text-2xl font-bold text-cursor-blue mb-2">{insight.size}</div>
                  <div className="text-sm text-green-400 mb-3">{insight.growth}</div>
                  <p className="text-sm text-gray-400">{insight.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Curated Micro SaaS Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each service has been carefully selected for its real value, competitive pricing, and proven track record.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <Card
                key={index}
                className={`card-hover group border-gradient-blue relative ${
                  service.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

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
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Market Price Range:</span>
                        <span className="text-lg font-semibold text-cursor-blue">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Service Pricing:</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Starter: {service.pricing.starter}</div>
                          <div className="text-sm text-gray-400">Pro: {service.pricing.pro}</div>
                          <div className="text-sm text-gray-400">Enterprise: {service.pricing.enterprise}</div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <Button
                        href={service.website}
                        variant="primary"
                        size="sm"
                        className="bg-cursor-blue hover:bg-cursor-blue-dark"
                      >
                        Visit Service
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Direct Link</div>
                        <div className="text-xs text-cursor-blue font-mono">{service.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose These Services */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Why These Services?
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We've done the research so you don't have to. Here's what makes these services stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-gradient-blue text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real & Tested</h3>
                <p className="text-gray-400">
                  Every service listed has been verified to work and provide real value to businesses.
                </p>
              </div>
            </Card>

            <Card className="card-hover border-gradient-blue text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Market Pricing</h3>
                <p className="text-gray-400">
                  Transparent pricing information based on actual market research and competitor analysis.
                </p>
              </div>
            </Card>

            <Card className="card-hover border-gradient-blue text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-cursor-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Direct Links</h3>
                <p className="text-gray-400">
                  No affiliate redirects or hidden links. Go directly to the service you want to use.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor text-center">
          <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
            Ready to Grow Your Business?
          </h2>
          <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Start with one service or build a complete toolkit. Each tool is designed to work independently 
            or integrate with your existing workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="bg-cursor-blue hover:bg-cursor-blue-dark"
            >
              Get Started Today
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}