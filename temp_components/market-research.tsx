import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { TrendingUp, BarChart3, DollarSign, Users, Globe, Target, Clock, Award, ArrowRight, ExternalLink, PieChart, LineChart, Activity, Zap } from 'lucide-react';

export default function MarketResearchPage() {
  const marketSegments = [
    {
      name: 'AI & Machine Learning',
      marketSize: '$15.7B',
      growthRate: '23.4% CAGR',
      keyTrends: [
        'Generative AI adoption accelerating',
        'AI-powered automation increasing',
        'Natural language processing growth',
        'Computer vision applications expanding'
      ],
      topPlayers: ['OpenAI', 'Anthropic', 'Google AI', 'Microsoft Azure AI'],
      opportunities: [
        'AI content generation tools',
        'Predictive analytics platforms',
        'Automated customer service',
        'Intelligent process automation'
      ],
      color: 'from-fuchsia-500 to-purple-600',
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      name: 'Database & Analytics',
      marketSize: '$8.9B',
      growthRate: '18.7% CAGR',
      keyTrends: [
        'Real-time analytics demand',
        'Cloud database migration',
        'Data privacy regulations',
        'Performance optimization focus'
      ],
      topPlayers: ['DataDog', 'New Relic', 'SolarWinds', 'Splunk'],
      opportunities: [
        'Database performance monitoring',
        'Real-time analytics dashboards',
        'Data visualization tools',
        'Query optimization platforms'
      ],
      color: 'from-cyan-500 to-blue-600',
      icon: <BarChart3 className="w-8 h-8 text-white" />
    },
    {
      name: 'Security & Identity',
      marketSize: '$12.3B',
      growthRate: '21.2% CAGR',
      keyTrends: [
        'Zero-trust security adoption',
        'Multi-factor authentication growth',
        'API security concerns',
        'Compliance requirements increasing'
      ],
      topPlayers: ['Okta', 'Auth0', 'Ping Identity', 'OneLogin'],
      opportunities: [
        'Identity verification platforms',
        'API security gateways',
        'Compliance monitoring tools',
        'Threat detection systems'
      ],
      color: 'from-green-500 to-emerald-600',
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      name: 'Business Intelligence',
      marketSize: '$22.1B',
      growthRate: '19.8% CAGR',
      keyTrends: [
        'Self-service BI adoption',
        'Real-time data integration',
        'Mobile BI growth',
        'Predictive analytics demand'
      ],
      topPlayers: ['Tableau', 'Power BI', 'Looker', 'Qlik'],
      opportunities: [
        'Custom dashboard builders',
        'Data integration platforms',
        'Mobile analytics solutions',
        'Predictive modeling tools'
      ],
      color: 'from-orange-500 to-red-600',
      icon: <Activity className="w-8 h-8 text-white" />
    },
    {
      name: 'API Management',
      marketSize: '$6.8B',
      growthRate: '24.1% CAGR',
      keyTrends: [
        'Microservices architecture growth',
        'API-first development',
        'Rate limiting importance',
        'Developer experience focus'
      ],
      topPlayers: ['Kong', 'Tyk', 'AWS API Gateway', 'Azure API Management'],
      opportunities: [
        'API rate limiting services',
        'Developer portal platforms',
        'API analytics tools',
        'Webhook management systems'
      ],
      color: 'from-indigo-500 to-purple-600',
      icon: <Globe className="w-8 h-8 text-white" />
    },
    {
      name: 'User Experience Analytics',
      marketSize: '$9.4B',
      growthRate: '20.5% CAGR',
      keyTrends: [
        'Privacy-compliant tracking',
        'Real-time user insights',
        'Conversion optimization focus',
        'Mobile app analytics growth'
      ],
      topPlayers: ['Hotjar', 'FullStory', 'Mixpanel', 'Amplitude'],
      opportunities: [
        'Heatmap and session recording',
        'A/B testing platforms',
        'User journey mapping tools',
        'Conversion funnel analytics'
      ],
      color: 'from-teal-500 to-cyan-600',
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  const competitiveAnalysis = [
    {
      company: 'Enterprise Giants',
      examples: ['Salesforce', 'Microsoft', 'Oracle', 'SAP'],
      strengths: [
        'Extensive resources and R&D',
        'Established customer base',
        'Comprehensive feature sets',
        'Global presence and support'
      ],
      weaknesses: [
        'High pricing and complexity',
        'Slow innovation cycles',
        'Difficult customization',
        'Long implementation times'
      ],
      marketShare: '45-60%',
      pricing: 'High ($1000+/month)'
    },
    {
      company: 'Mid-Market Leaders',
      examples: ['HubSpot', 'Atlassian', 'Slack', 'Zoom'],
      strengths: [
        'Balanced features and pricing',
        'Strong user experience',
        'Active community support',
        'Regular feature updates'
      ],
      weaknesses: [
        'Limited customization options',
        'Growing complexity over time',
        'Dependency on integrations',
        'Scalability challenges'
      ],
      marketShare: '25-35%',
      pricing: 'Medium ($100-500/month)'
    },
    {
      company: 'Micro SaaS Innovators',
      examples: ['Zapier', 'Notion', 'Airtable', 'Linear'],
      strengths: [
        'Focused feature sets',
        'Fast innovation cycles',
        'Affordable pricing',
        'Easy implementation'
      ],
      weaknesses: [
        'Limited feature scope',
        'Smaller support teams',
        'Integration dependencies',
        'Market volatility risk'
      ],
      marketShare: '15-25%',
      pricing: 'Low ($10-100/month)'
    }
  ];

  const marketTrends = [
    {
      trend: 'AI-First Approach',
      description: 'Companies prioritizing AI capabilities in their products',
      impact: 'High',
      timeline: '2024-2026',
      examples: [
        'AI-powered content generation',
        'Intelligent automation',
        'Predictive analytics',
        'Natural language interfaces'
      ],
      opportunities: 'AI integration services, custom AI models, AI consulting'
    },
    {
      trend: 'Privacy-First Design',
      description: 'Growing focus on data privacy and compliance',
      impact: 'High',
      timeline: '2024-2027',
      examples: [
        'GDPR compliance tools',
        'Privacy analytics platforms',
        'Data anonymization services',
        'Consent management systems'
      ],
      opportunities: 'Privacy compliance tools, data governance platforms, audit services'
    },
    {
      trend: 'API-First Architecture',
      description: 'Shift towards API-centric application development',
      impact: 'Medium',
      timeline: '2024-2026',
      examples: [
        'API management platforms',
        'Developer experience tools',
        'API analytics and monitoring',
        'Integration platforms'
      ],
      opportunities: 'API development tools, integration services, developer portals'
    },
    {
      trend: 'Real-Time Everything',
      description: 'Demand for real-time data and analytics',
      impact: 'Medium',
      timeline: '2024-2025',
      examples: [
        'Real-time dashboards',
        'Live collaboration tools',
        'Instant notifications',
        'Streaming analytics'
      ],
      opportunities: 'Real-time platforms, streaming services, live collaboration tools'
    }
  ];

  const pricingStrategies = [
    {
      strategy: 'Value-Based Pricing',
      description: 'Pricing based on customer value and ROI',
      pros: [
        'Higher profit margins',
        'Customer alignment',
        'Scalable pricing model',
        'Competitive differentiation'
      ],
      cons: [
        'Complex pricing structure',
        'Customer education required',
        'Value measurement challenges',
        'Pricing optimization needed'
      ],
      bestFor: 'Enterprise solutions, high-value services, ROI-focused products'
    },
    {
      strategy: 'Usage-Based Pricing',
      description: 'Pricing based on actual usage or consumption',
      pros: [
        'Fair pricing model',
        'Easy to understand',
        'Scalable with growth',
        'Low barrier to entry'
      ],
      cons: [
        'Revenue predictability challenges',
        'Complex billing systems',
        'Usage optimization needed',
        'Customer cost management'
      ],
      bestFor: 'API services, storage platforms, compute resources'
    },
    {
      strategy: 'Freemium Model',
      description: 'Free basic tier with paid premium features',
      pros: [
        'Low customer acquisition cost',
        'Viral growth potential',
        'Large user base',
        'Easy market entry'
      ],
      cons: [
        'Low conversion rates',
        'Revenue per user challenges',
        'Support cost management',
        'Feature differentiation needed'
      ],
      bestFor: 'Consumer tools, productivity apps, collaboration platforms'
    }
  ];

  const investmentInsights = [
    {
      metric: 'Total VC Investment',
      value: '$45.2B',
      change: '+18.7% YoY',
      description: 'Venture capital investment in SaaS companies in 2024'
    },
    {
      metric: 'Average Series A',
      value: '$12.8M',
      change: '+22.3% YoY',
      description: 'Average Series A funding round for SaaS startups'
    },
    {
      metric: 'Exit Valuations',
      value: '8.2x ARR',
      change: '+15.4% YoY',
      description: 'Average exit valuation multiple based on annual recurring revenue'
    },
    {
      metric: 'Time to Profitability',
      value: '3.2 years',
      change: '-0.8 years YoY',
      description: 'Average time for SaaS companies to reach profitability'
    }
  ];

  return (
    <>
      <Head>
        <title>Market Research & Industry Insights | Zion Tech Group</title>
        <meta name="description" content="Comprehensive market research, competitive analysis, and industry insights for micro SaaS services. Data-driven market intelligence to inform your business decisions." />
        <meta property="og:title" content="Market Research & Industry Insights | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive market research and competitive analysis for micro SaaS services." />
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
            Market Intelligence
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Comprehensive Market Research & Industry Insights
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Data-driven market intelligence, competitive analysis, and industry trends to help you make informed decisions about your micro SaaS business strategy and market positioning.
          </p>
        </div>
      </section>

      {/* Investment Insights */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Investment & Market Metrics
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Key investment metrics and market indicators for the SaaS industry to help you understand the current market landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentInsights.map((insight, index) => (
              <Card
                key={index}
                className="card-hover text-center border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-3xl font-bold text-white mb-2">{insight.value}</div>
                  <div className="text-sm text-gray-400 mb-3">{insight.metric}</div>
                  <div className="text-sm text-gray-300 mb-4">{insight.description}</div>
                  <div className="inline-flex items-center text-sm text-green-400">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {insight.change}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Segment Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Detailed analysis of key micro SaaS market segments with market size, growth rates, trends, and opportunities.
            </p>
          </div>

          <div className="space-y-8">
            {marketSegments.map((segment, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Segment Header */}
                    <div className="lg:w-1/3">
                      <div className="text-center lg:text-left">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${segment.color} shadow-xl mx-auto lg:mx-0 mb-6`}>
                          {segment.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          {segment.name}
                        </h3>
                        
                        {/* Market Data */}
                        <div className="space-y-3 text-sm mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Market Size:</span>
                            <span className="text-white font-semibold">{segment.marketSize}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Growth Rate:</span>
                            <span className="text-green-400 font-semibold">{segment.growthRate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Market Analysis */}
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Key Trends */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                            Key Trends
                          </h4>
                          <ul className="space-y-2">
                            {segment.keyTrends.map((trend, trendIndex) => (
                              <li key={trendIndex} className="flex items-start text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                                {trend}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Top Players */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-yellow-400" />
                            Top Players
                          </h4>
                          <ul className="space-y-2">
                            {segment.topPlayers.map((player, playerIndex) => (
                              <li key={playerIndex} className="flex items-start text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                                {player}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div className="mt-8 pt-6 border-t border-gray-700">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-blue-400" />
                          Market Opportunities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {segment.opportunities.map((opportunity, oppIndex) => (
                            <div key={oppIndex} className="flex items-start text-gray-300 text-sm">
                              <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                              {opportunity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Competitive Landscape Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the competitive landscape and positioning strategies for different types of SaaS companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {competitiveAnalysis.map((analysis, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{analysis.company}</h3>
                  
                  {/* Examples */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                    <div className="text-sm text-gray-300">{analysis.examples.join(', ')}</div>
                  </div>

                  {/* Market Share & Pricing */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-400">Market Share:</span>
                      <div className="text-white font-semibold">{analysis.marketShare}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Pricing:</span>
                      <div className="text-white font-semibold">{analysis.pricing}</div>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Strengths:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {analysis.strengths.map((strength, strengthIndex) => (
                        <li key={strengthIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Weaknesses:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {analysis.weaknesses.map((weakness, weaknessIndex) => (
                        <li key={weaknessIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {weakness}
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

      {/* Market Trends */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Emerging Market Trends
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Key trends shaping the micro SaaS landscape and creating new opportunities for innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketTrends.map((trend, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{trend.trend}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        trend.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        trend.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {trend.impact} Impact
                      </span>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                        {trend.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{trend.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {trend.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-cursor-blue rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Opportunities:</h4>
                    <p className="text-xs text-gray-300">{trend.opportunities}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Strategies */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Pricing Strategy Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Analysis of different pricing strategies used in the micro SaaS market and their implications for business success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingStrategies.map((strategy, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.strategy}</h3>
                  <p className="text-gray-300 mb-6">{strategy.description}</p>
                  
                  {/* Pros */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Pros:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {strategy.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Cons:</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {strategy.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Best For:</h4>
                    <p className="text-xs text-gray-300">{strategy.bestFor}</p>
                  </div>
                </div>
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
            Ready to Apply This Market Intelligence?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Use our market research and competitive analysis to inform your business strategy, pricing decisions, and market positioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get Strategic Consultation
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}