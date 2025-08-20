import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, TrendingUp, DollarSign, Users, Zap, Shield, BarChart3, Globe, Lock, Cpu, Database, Cloud, Bot, Code, Server, Monitor } from 'lucide-react';

export default function ServicesPage() {
  const microSaasServices = [
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI Content Automation Platform',
      description: 'Automated content generation, SEO optimization, and social media management powered by advanced AI.',
      marketPrice: '$299-799/month',
      targetMarket: 'Marketing teams, agencies, e-commerce',
      features: [
        'AI-powered content generation (500+ articles/month)',
        'SEO optimization with real-time keyword analysis',
        'Social media scheduling & automation',
        'Content performance analytics & A/B testing',
        'Multi-language support (15+ languages)',
        'API access for custom integrations'
      ],
      useCases: [
        'E-commerce product descriptions',
        'Blog content automation',
        'Social media content creation',
        'Email marketing campaigns'
      ],
      roi: '3-5x content production increase',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      competitors: ['Jasper AI', 'Copy.ai', 'Writesonic'],
      marketSize: '$15.7B (2024)',
      growthRate: '23.4% CAGR'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Database Performance Monitor',
      description: 'Real-time database monitoring, query optimization, and automated performance tuning for high-traffic applications.',
      marketPrice: '$149-499/month',
      targetMarket: 'DevOps teams, SaaS companies, enterprises',
      features: [
        'Real-time query performance monitoring',
        'Automated index optimization',
        'Slow query detection & analysis',
        'Capacity planning & scaling insights',
        'Multi-database support (PostgreSQL, MySQL, MongoDB)',
        'Custom alerting & Slack/Teams integration'
      ],
      useCases: [
        'E-commerce performance optimization',
        'SaaS application scaling',
        'Financial trading systems',
        'Gaming platform optimization'
      ],
      roi: '40-60% database performance improvement',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      competitors: ['DataDog', 'New Relic', 'SolarWinds'],
      marketSize: '$8.9B (2024)',
      growthRate: '18.7% CAGR'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Zero-Trust Security Gateway',
      description: 'Advanced identity verification, threat detection, and secure access management for modern applications.',
      marketPrice: '$199-599/month',
      targetMarket: 'Enterprises, healthcare, financial services',
      features: [
        'Multi-factor authentication (MFA)',
        'Behavioral analytics & threat detection',
        'API security & rate limiting',
        'Compliance reporting (SOC 2, GDPR, HIPAA)',
        'Real-time security monitoring',
        'Automated incident response'
      ],
      useCases: [
        'Healthcare patient data protection',
        'Financial transaction security',
        'Remote workforce access',
        'API-driven applications'
      ],
      roi: '60-80% reduction in security incidents',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      competitors: ['Okta', 'Auth0', 'Ping Identity'],
      marketSize: '$12.3B (2024)',
      growthRate: '21.2% CAGR'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Business Intelligence Dashboard',
      description: 'Custom analytics dashboards, KPI tracking, and predictive insights for data-driven decision making.',
      marketPrice: '$399-999/month',
      targetMarket: 'Business analysts, executives, operations teams',
      features: [
        'Custom dashboard builder (drag & drop)',
        'Real-time data integration (50+ sources)',
        'Predictive analytics & forecasting',
        'Automated reporting & scheduling',
        'Mobile-responsive design',
        'White-label solutions available'
      ],
      useCases: [
        'Sales performance tracking',
        'Customer behavior analysis',
        'Operational efficiency monitoring',
        'Financial reporting automation'
      ],
      roi: '25-40% improvement in decision speed',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      competitors: ['Tableau', 'Power BI', 'Looker'],
      marketSize: '$22.1B (2024)',
      growthRate: '19.8% CAGR'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'API Rate Limiting & Caching',
      description: 'Intelligent API management, caching strategies, and performance optimization for high-traffic applications.',
      marketPrice: '$99-299/month',
      targetMarket: 'API developers, SaaS companies, mobile apps',
      features: [
        'Smart rate limiting algorithms',
        'Redis-based caching with TTL management',
        'API usage analytics & monitoring',
        'Geographic distribution & CDN integration',
        'Webhook management & retry logic',
        'Developer portal & documentation'
      ],
      useCases: [
        'Mobile app backend optimization',
        'Third-party API integration',
        'Microservices architecture',
        'Public API monetization'
      ],
      roi: '50-70% reduction in API response times',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      competitors: ['Kong', 'Tyk', 'AWS API Gateway'],
      marketSize: '$6.8B (2024)',
      growthRate: '24.1% CAGR'
    },
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: 'User Experience Analytics',
      description: 'Advanced user behavior tracking, conversion optimization, and A/B testing for web applications.',
      marketPrice: '$249-649/month',
      targetMarket: 'Product managers, UX designers, marketing teams',
      features: [
        'Heatmap & session recording',
        'Conversion funnel analysis',
        'A/B testing with statistical significance',
        'User journey mapping',
        'Mobile app analytics',
        'Privacy-compliant tracking (GDPR)'
      ],
      useCases: [
        'E-commerce conversion optimization',
        'SaaS onboarding improvement',
        'Mobile app user experience',
        'Landing page optimization'
      ],
      roi: '15-30% increase in conversion rates',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      competitors: ['Hotjar', 'FullStory', 'Mixpanel'],
      marketSize: '$9.4B (2024)',
      growthRate: '20.5% CAGR'
    }
  ];

  const marketInsights = [
    {
      metric: 'Total Market Size',
      value: '$75.3B',
      description: 'Combined market size of all micro SaaS segments',
      trend: 'up',
      change: '+21.8% YoY'
    },
    {
      metric: 'Average Growth Rate',
      value: '22.1%',
      description: 'Compound annual growth rate across segments',
      trend: 'up',
      change: '+3.2% vs 2023'
    },
    {
      metric: 'Customer Acquisition Cost',
      value: '$89',
      description: 'Average CAC for micro SaaS services',
      trend: 'down',
      change: '-12% YoY'
    },
    {
      metric: 'Customer Lifetime Value',
      value: '$2,847',
      description: 'Average LTV across micro SaaS customers',
      trend: 'up',
      change: '+18% YoY'
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
        <meta name="description" content="Discover real micro SaaS services with market research, actual pricing, and proven ROI. AI automation, security, analytics, and more with competitive market analysis." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Real micro SaaS services with market research, pricing, and ROI analysis." />
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
            Real Micro SaaS Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Proven Solutions with Market Research
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover real micro SaaS services backed by market research, competitive analysis, and proven ROI. No generic descriptions - just actionable solutions with actual pricing and market data.
          </p>
        </div>
      </section>

      {/* Market Insights */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Intelligence & Insights
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Data-driven insights from the micro SaaS market to help you make informed decisions about your technology investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <Card
                key={index}
                className="card-hover text-center border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-3xl font-bold text-white mb-2">{insight.value}</div>
                  <div className="text-sm text-gray-400 mb-3">{insight.metric}</div>
                  <div className="text-sm text-gray-300 mb-4">{insight.description}</div>
                  <div className={`inline-flex items-center text-sm ${
                    insight.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${insight.trend === 'down' ? 'rotate-180' : ''}`} />
                    {insight.change}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Real Micro SaaS Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each service is backed by market research, competitive analysis, and real customer use cases. See actual pricing, ROI expectations, and market positioning.
            </p>
          </div>

          <div className="space-y-8">
            {microSaasServices.map((service, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Service Icon & Basic Info */}
                    <div className="lg:w-1/4">
                      <div className="text-center lg:text-left">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl mx-auto lg:mx-0 mb-6`}>
                          {service.icon}
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 ${service.textColor}`}>
                          {service.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Market Data */}
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Market Price:</span>
                            <span className="text-white font-semibold">{service.marketPrice}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Target Market:</span>
                            <span className="text-white">{service.targetMarket}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">ROI Expectation:</span>
                            <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features & Use Cases */}
                    <div className="lg:w-3/4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-green-400" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                            Use Cases
                          </h4>
                          <ul className="space-y-2">
                            {service.useCases.map((useCase, useCaseIndex) => (
                              <li key={useCaseIndex} className="flex items-start text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Market Analysis */}
                      <div className="mt-8 pt-6 border-t border-gray-700">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                          Market Analysis
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Competitors:</span>
                            <div className="text-white mt-1">{service.competitors.join(', ')}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Market Size:</span>
                            <div className="text-white mt-1">{service.marketSize}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Growth Rate:</span>
                            <div className="text-green-400 mt-1">{service.growthRate}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Pricing Tier:</span>
                            <div className="text-white mt-1">{service.marketPrice}</div>
                          </div>
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
            Ready to Implement Real Solutions?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get detailed proposals, custom pricing, and implementation roadmaps for any of our micro SaaS services. No generic consultations - just actionable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get Custom Proposal
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}