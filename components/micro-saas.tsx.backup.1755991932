import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, Star, Zap, Shield, Users, Globe, TrendingUp, Clock, DollarSign, Target, ArrowRight, BarChart3, Zap as Lightning } from 'lucide-react';

export default function MicroSaasPage() {
  const detailedServices = [
    {
      icon: '📊',
      title: 'AI-Powered Social Media Analytics',
      description: 'Comprehensive social media performance tracking with AI-driven insights and automated reporting.',
      longDescription: 'Our social media analytics platform provides real-time monitoring across all major platforms, delivering actionable insights through advanced AI algorithms. Track engagement, sentiment, competitor performance, and ROI with automated reporting and custom dashboards.',
      features: [
        'Multi-platform social media monitoring (Facebook, Instagram, Twitter, LinkedIn, TikTok)',
        'AI-powered sentiment analysis and brand monitoring',
        'Real-time performance tracking and alerts',
        'Competitor analysis and benchmarking',
        'ROI tracking and attribution modeling',
        'Custom dashboard creation and white-label options',
        'Advanced reporting with automated insights',
        'API access for custom integrations'
      ],
      pricing: {
        starter: { price: '$49', features: ['Up to 5 accounts', 'Basic analytics', 'Monthly reports', 'Email support'] },
        professional: { price: '$149', features: ['Up to 25 accounts', 'Advanced AI insights', 'Real-time monitoring', 'Priority support'] },
        enterprise: { price: '$399', features: ['Unlimited accounts', 'Custom AI models', 'White-label solutions', '24/7 support'] }
      },
      marketData: {
        size: '$23.4B',
        growth: '13.2%',
        competitors: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later'],
        ourAdvantage: 'AI-first approach with competitive pricing and easy integration',
        targetMarket: 'Marketing agencies, e-commerce brands, SaaS companies, content creators'
      },
      useCases: [
        'Marketing agencies managing multiple client accounts',
        'E-commerce brands tracking social media ROI',
        'SaaS companies monitoring brand sentiment',
        'Content creators analyzing performance trends'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: '🔍',
      title: 'SEO Content Optimization Suite',
      description: 'AI-powered content optimization tool that analyzes and improves your content for better search rankings.',
      longDescription: 'Transform your content strategy with our AI-powered SEO optimization platform. Get real-time content scoring, keyword optimization suggestions, competitor research, and automated content recommendations to improve your search rankings and drive organic traffic.',
      features: [
        'Real-time SEO scoring and content analysis',
        'AI-powered keyword density optimization',
        'Content readability and structure analysis',
        'Competitor content research and gap analysis',
        'Automated content suggestions and improvements',
        'Performance tracking and ranking monitoring',
        'Custom workflow automation',
        'Integration with popular CMS platforms'
      ],
      pricing: {
        starter: { price: '$39', features: ['10 analyses/month', 'Basic SEO scoring', 'Keyword suggestions', 'Email support'] },
        professional: { price: '$99', features: ['100 analyses/month', 'Advanced AI optimization', 'Competitor research', 'Priority support'] },
        enterprise: { price: '$249', features: ['Unlimited analyses', 'Custom AI models', 'White-label solutions', '24/7 support'] }
      },
      marketData: {
        size: '$1.2B',
        growth: '18.7%',
        competitors: ['Clearscope', 'MarketMuse', 'Surfer SEO', 'Ahrefs'],
        ourAdvantage: 'Real-time optimization with AI suggestions and competitive pricing',
        targetMarket: 'Content marketers, SEO agencies, bloggers, e-commerce sites'
      },
      useCases: [
        'Content marketers optimizing blog posts and articles',
        'SEO agencies managing multiple client campaigns',
        'Bloggers improving search rankings',
        'E-commerce sites optimizing product descriptions'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '📧',
      title: 'Smart Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI-powered segmentation, personalization, and automation workflows.',
      longDescription: 'Revolutionize your email marketing with AI-powered automation. Our platform delivers intelligent audience segmentation, behavioral triggers, personalized content recommendations, and advanced analytics to maximize engagement and conversions.',
      features: [
        'AI-powered audience segmentation and targeting',
        'Behavioral trigger automation and workflows',
        'Personalized content recommendations',
        'Advanced A/B testing and optimization',
        'Comprehensive analytics and reporting',
        'GDPR compliance and data protection',
        'Integration with popular e-commerce platforms',
        'White-label and custom branding options'
      ],
      pricing: {
        starter: { price: '$29', features: ['2,500 subscribers', 'Basic automation', 'Email templates', 'Email support'] },
        professional: { price: '$79', features: ['25,000 subscribers', 'Advanced AI automation', 'A/B testing', 'Priority support'] },
        enterprise: { price: '$199', features: ['Unlimited subscribers', 'Custom AI models', 'White-label solutions', '24/7 support'] }
      },
      marketData: {
        size: '$7.5B',
        growth: '15.3%',
        competitors: ['Mailchimp', 'ConvertKit', 'ActiveCampaign', 'Klaviyo'],
        ourAdvantage: 'AI segmentation and automation workflows with competitive pricing',
        targetMarket: 'E-commerce businesses, SaaS companies, newsletters, marketing teams'
      },
      useCases: [
        'E-commerce businesses automating abandoned cart sequences',
        'SaaS companies nurturing leads and onboarding users',
        'Newsletters and content creators building engaged audiences',
        'Marketing teams running targeted campaigns'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🎯',
      title: 'Customer Feedback & Survey Platform',
      description: 'Comprehensive feedback collection and analysis platform with AI-powered insights and automated reporting.',
      longDescription: 'Collect, analyze, and act on customer feedback with our AI-powered survey platform. From simple feedback forms to complex research studies, our platform provides actionable insights through sentiment analysis, automated workflows, and comprehensive reporting.',
      features: [
        'Multi-channel feedback collection (web, mobile, email)',
        'AI-powered sentiment analysis and insights',
        'Automated survey workflows and triggers',
        'Real-time response tracking and alerts',
        'Advanced analytics and visualization',
        'Integration with popular tools and platforms',
        'Custom branding and white-label options',
        'Enterprise security and compliance features'
      ],
      pricing: {
        starter: { price: '$19', features: ['100 responses/month', 'Basic surveys', 'Email support', 'Basic analytics'] },
        professional: { price: '$59', features: ['1,000 responses/month', 'Advanced surveys', 'Priority support', 'Advanced analytics'] },
        enterprise: { price: '$159', features: ['Unlimited responses', 'Custom surveys', 'White-label solutions', '24/7 support'] }
      },
      marketData: {
        size: '$3.2B',
        growth: '12.8%',
        competitors: ['SurveyMonkey', 'Typeform', 'Qualtrics', 'Google Forms'],
        ourAdvantage: 'AI sentiment analysis with automated workflows and competitive pricing',
        targetMarket: 'Product teams, customer success, market research, HR departments'
      },
      useCases: [
        'Product teams collecting user feedback and feature requests',
        'Customer success teams measuring satisfaction and NPS',
        'Market research firms conducting surveys and studies',
        'HR departments gathering employee feedback and engagement'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: '📈',
      title: 'Business Intelligence Dashboard',
      description: 'Real-time business intelligence platform that consolidates data from multiple sources into actionable insights.',
      longDescription: 'Transform your business data into actionable insights with our real-time BI platform. Connect multiple data sources, create custom dashboards, and get automated insights through AI-powered analysis and reporting.',
      features: [
        'Multi-source data integration and connectivity',
        'Real-time dashboard updates and monitoring',
        'Custom KPI tracking and goal setting',
        'Automated reporting and insights',
        'Advanced data visualization and charts',
        'Mobile-responsive design and access',
        'Role-based permissions and security',
        'API access for custom integrations'
      ],
      pricing: {
        starter: { price: '$79', features: ['3 data sources', 'Basic dashboards', 'Email support', 'Basic analytics'] },
        professional: { price: '$199', features: ['10 data sources', 'Advanced dashboards', 'Priority support', 'Advanced analytics'] },
        enterprise: { price: '$499', features: ['Unlimited sources', 'Custom dashboards', 'White-label solutions', '24/7 support'] }
      },
      marketData: {
        size: '$29.4B',
        growth: '11.6%',
        competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik'],
        ourAdvantage: 'Real-time insights with competitive pricing and easy integration',
        targetMarket: 'Business analysts, executives, data teams, consultants'
      },
      useCases: [
        'Business analysts creating executive dashboards',
        'Executives monitoring key business metrics',
        'Data teams consolidating multiple data sources',
        'Consultants providing client insights and reporting'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      icon: '🤖',
      title: 'AI Chatbot Builder',
      description: 'No-code AI chatbot platform for customer service, lead generation, and business automation.',
      longDescription: 'Build intelligent chatbots without coding using our AI-powered platform. Create conversational experiences for customer service, lead generation, and business automation with drag-and-drop tools and advanced AI capabilities.',
      features: [
        'Drag-and-drop chatbot builder interface',
        'AI-powered conversation flows and responses',
        'Multi-language support and localization',
        'Integration with popular platforms and tools',
        'Analytics and performance tracking',
        'Custom branding and white-label options',
        'Advanced security and compliance',
        'API access for custom integrations'
      ],
      pricing: {
        starter: { price: '$25', features: ['1 chatbot', 'Basic AI responses', 'Email support', 'Basic analytics'] },
        professional: { price: '$75', features: ['5 chatbots', 'Advanced AI responses', 'Priority support', 'Advanced analytics'] },
        enterprise: { price: '$199', features: ['Unlimited chatbots', 'Custom AI models', 'White-label solutions', '24/7 support'] }
      },
      marketData: {
        size: '$17.2B',
        growth: '23.5%',
        competitors: ['Intercom', 'Drift', 'ManyChat', 'Chatfuel'],
        ourAdvantage: 'No-code AI chatbot building with competitive pricing',
        targetMarket: 'Customer support, e-commerce, lead generation, small businesses'
      },
      useCases: [
        'Customer support teams automating common inquiries',
        'E-commerce businesses providing product recommendations',
        'Lead generation and qualification automation',
        'Small businesses providing 24/7 customer service'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  const marketTrends = [
    {
      trend: 'AI-First Approach',
      description: 'Businesses are increasingly adopting AI-powered tools for automation and insights',
      impact: 'High demand for intelligent automation solutions',
      opportunity: 'Our AI-first approach positions us ahead of traditional tools'
    },
    {
      trend: 'Micro SaaS Growth',
      description: 'Small, focused SaaS solutions are gaining popularity over large, complex platforms',
      impact: 'Growing market for specialized business tools',
      opportunity: 'Our focused micro SaaS approach aligns with market preferences'
    },
    {
      trend: 'Competitive Pricing',
      description: 'Price sensitivity is increasing as more SaaS options become available',
      impact: 'Competitive pricing is crucial for market penetration',
      opportunity: 'Our competitive pricing gives us an edge in crowded markets'
    },
    {
      trend: 'Integration Focus',
      description: 'Businesses prefer tools that integrate easily with existing workflows',
      impact: 'High demand for seamless integration capabilities',
      opportunity: 'Our API-first approach and integrations provide clear value'
    }
  ];

  const competitiveAdvantages = [
    {
      advantage: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms provide deeper insights and automation than traditional tools',
      examples: ['Sentiment analysis', 'Content optimization', 'Audience segmentation', 'Predictive analytics']
    },
    {
      advantage: 'Competitive Pricing',
      description: 'Strategic pricing that undercuts major competitors while maintaining quality',
      examples: ['30-40% lower than market leaders', 'Transparent pricing tiers', 'No hidden fees', 'Free trial included']
    },
    {
      advantage: 'Market Research',
      description: 'Comprehensive market analysis and competitive positioning insights',
      examples: ['Market size data', 'Growth rate analysis', 'Competitor benchmarking', 'Opportunity identification']
    },
    {
      advantage: 'Enterprise Features',
      description: 'Enterprise-grade features available at mid-market prices',
      examples: ['White-label solutions', 'Custom integrations', 'SLA guarantees', 'Advanced security']
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Comprehensive Guide & Market Analysis</title>
        <meta name="description" content="Complete guide to our micro SaaS services with market research, competitive analysis, pricing, and use cases. AI-powered solutions for modern businesses." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group - Comprehensive Guide" />
        <meta property="og:description" content="Detailed analysis of our micro SaaS services with market research, competitive positioning, and comprehensive feature breakdowns." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
            Comprehensive Micro SaaS Guide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Real solutions with comprehensive market research, competitive analysis, and proven business models. 
            Each service is designed to solve specific business problems with AI-powered automation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-sm text-gray-400">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$50B+</div>
              <div className="text-sm text-gray-400">Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">14-Day</div>
              <div className="text-sm text-gray-400">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">AI-First</div>
              <div className="text-sm text-gray-400">Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Market Trends & Opportunities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding market dynamics helps us deliver better value and competitive positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketTrends.map((trend, index) => (
              <Card
                key={index}
                className="border-gradient-blue hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{trend.trend}</h3>
                    <p className="text-gray-400 mb-4">{trend.description}</p>
                    <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">Market Impact</h4>
                      <p className="text-gray-300 text-sm mb-3">{trend.impact}</p>
                      <h4 className="text-green-400 font-semibold mb-2">Our Opportunity</h4>
                      <p className="text-gray-300 text-sm">{trend.opportunity}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What sets us apart from traditional SaaS providers and market leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-gradient-blue hover:bg-gray-700/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{advantage.advantage}</h3>
                <p className="text-gray-400 mb-6">{advantage.description}</p>
                <div className="space-y-2">
                  {advantage.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Service Breakdown
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Detailed analysis of each micro SaaS service with market data, pricing, and use cases.
            </p>
          </div>

          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                {/* Service Header */}
                <div className="flex items-start space-x-6 mb-8">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br ${service.color}`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-xl text-gray-300 mb-4">{service.description}</p>
                    <p className="text-gray-400 leading-relaxed">{service.longDescription}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-blue-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300">
                          <Check className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                      Pricing Plans
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="font-semibold text-white capitalize">{plan}</h5>
                            <span className="text-2xl font-bold text-green-400">{details.price}</span>
                          </div>
                          <ul className="space-y-1">
                            {details.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                                <Check className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Market Data */}
                <div className="mt-8 bg-blue-900/20 border border-blue-500/20 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Market Analysis
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-400">Market Size</div>
                      <div className="text-lg font-bold text-white">{service.marketData.size}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Growth Rate</div>
                      <div className="text-lg font-bold text-green-400">{service.marketData.growth}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Key Competitors</div>
                      <div className="text-sm text-white">{service.marketData.competitors.join(', ')}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Our Advantage</div>
                      <div className="text-sm text-blue-400">{service.marketData.ourAdvantage}</div>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-400" />
                    Perfect For
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button
                    href="/pricing"
                    size="lg"
                    className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}
                  >
                    View Pricing & Start Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start your 14-day free trial today. No credit card required. Experience the power of AI-powered micro SaaS services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/pricing"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}