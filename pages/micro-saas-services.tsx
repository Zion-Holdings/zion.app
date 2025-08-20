import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  FileText, 
  BarChart3, 
  Search, 
  Shield, 
  Database, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Code,
  Cloud,
  Lock,
  Clock,
  Users,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function MicroSaasServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality, SEO-optimized content for blogs, social media, emails, and technical documentation using advanced AI models.',
      icon: <FileText className="w-8 h-8 text-white" />,
      category: 'ai',
      features: [
        'Blog post generation with customizable tone and length',
        'Social media content creation with hashtag optimization',
        'Professional email templates and responses',
        'Technical documentation and product descriptions',
        'SEO keyword integration and optimization',
        'Multiple content formats and styles',
        'Content quality scoring and recommendations',
        'Bulk content generation capabilities'
      ],
      pricing: {
        starter: { price: 29, features: ['100 content generations/month', 'Basic templates', 'Email support'] },
        professional: { price: 99, features: ['1000 content generations/month', 'Advanced templates', 'Priority support', 'Custom branding'] },
        enterprise: { price: 299, features: ['Unlimited generations', 'Custom AI models', 'API access', 'Dedicated support'] }
      },
      useCases: [
        'Content marketing agencies',
        'E-commerce businesses',
        'Technical documentation teams',
        'Social media managers',
        'Bloggers and content creators'
      ],
      integration: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'REST API'],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      id: 'performance-monitor',
      name: 'Performance Monitor',
      description: 'Comprehensive website performance monitoring with real-time metrics, automated testing, and actionable optimization recommendations.',
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      category: 'monitoring',
      features: [
        'Real-time performance metrics (Core Web Vitals)',
        'Automated Lighthouse testing and scoring',
        'Performance trend analysis and reporting',
        'Automated alerting and notifications',
        'Multi-location testing and monitoring',
        'Performance optimization recommendations',
        'Historical data and trend analysis',
        'Custom performance budgets and thresholds'
      ],
      pricing: {
        starter: { price: 49, features: ['5 websites', 'Daily monitoring', 'Basic alerts', 'Email support'] },
        professional: { price: 149, features: ['25 websites', 'Hourly monitoring', 'Advanced alerts', 'Priority support', 'Custom thresholds'] },
        enterprise: { price: 499, features: ['Unlimited websites', 'Real-time monitoring', 'Custom integrations', 'Dedicated support', 'SLA guarantees'] }
      },
      useCases: [
        'Web development agencies',
        'E-commerce platforms',
        'SaaS applications',
        'Enterprise websites',
        'Performance optimization teams'
      ],
      integration: ['Slack', 'Teams', 'PagerDuty', 'Webhooks', 'Grafana'],
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'seo-analyzer',
      name: 'SEO Analyzer',
      description: 'Advanced SEO analysis tool that provides comprehensive website audits, keyword optimization, and actionable improvement recommendations.',
      icon: <Search className="w-8 h-8 text-white" />,
      category: 'seo',
      features: [
        'Comprehensive website SEO audits',
        'Keyword density and optimization analysis',
        'Technical SEO assessment and recommendations',
        'Mobile-friendliness and accessibility testing',
        'Competitor analysis and benchmarking',
        'Content quality and readability scoring',
        'Structured data validation',
        'SEO performance tracking and reporting'
      ],
      pricing: {
        starter: { price: 39, features: ['10 website audits/month', 'Basic SEO reports', 'Email support'] },
        professional: { price: 129, features: ['100 website audits/month', 'Advanced reports', 'Priority support', 'Competitor analysis'] },
        enterprise: { price: 399, features: ['Unlimited audits', 'Custom reporting', 'API access', 'Dedicated support', 'White-label options'] }
      },
      useCases: [
        'SEO agencies and consultants',
        'Digital marketing teams',
        'E-commerce businesses',
        'Content creators',
        'Web developers'
      ],
      integration: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'REST API'],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 'api-rate-limiter',
      name: 'API Rate Limiter',
      description: 'Enterprise-grade API rate limiting and traffic management with advanced strategies, monitoring, and analytics.',
      icon: <Shield className="w-8 h-8 text-white" />,
      category: 'api',
      features: [
        'Multiple rate limiting strategies (sliding, fixed, leaky-bucket)',
        'Per-endpoint and per-IP rate limiting',
        'Real-time traffic monitoring and analytics',
        'Automated threat detection and blocking',
        'Custom rate limit rules and configurations',
        'API usage statistics and reporting',
        'Webhook notifications and alerts',
        'REST API for management and monitoring'
      ],
      pricing: {
        starter: { price: 59, features: ['10,000 requests/month', 'Basic rate limiting', 'Email support'] },
        professional: { price: 199, features: ['1M requests/month', 'Advanced strategies', 'Priority support', 'Custom rules'] },
        enterprise: { price: 599, features: ['Unlimited requests', 'Custom strategies', 'API access', 'Dedicated support', 'SLA guarantees'] }
      },
      useCases: [
        'API providers and platforms',
        'SaaS applications',
        'E-commerce APIs',
        'Developer platforms',
        'Enterprise applications'
      ],
      integration: ['Redis', 'PostgreSQL', 'MongoDB', 'Webhooks', 'REST API'],
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      gradient: 'from-red-400 to-orange-500'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      description: 'Automated data backup and disaster recovery solution with encryption, compression, and point-in-time recovery capabilities.',
      icon: <Database className="w-8 h-8 text-white" />,
      category: 'backup',
      features: [
        'Automated scheduled backups (hourly to monthly)',
        'Full, incremental, and differential backup types',
        'Data encryption and compression',
        'Point-in-time recovery and rollback',
        'Multi-destination backup storage',
        'Backup validation and integrity checking',
        'Disaster recovery planning and testing',
        'Compliance and audit reporting'
      ],
      pricing: {
        starter: { price: 79, features: ['100GB storage', 'Daily backups', 'Basic encryption', 'Email support'] },
        professional: { price: 249, features: ['1TB storage', 'Hourly backups', 'Advanced encryption', 'Priority support', 'Custom schedules'] },
        enterprise: { price: 799, features: ['Unlimited storage', 'Real-time backups', 'Custom encryption', 'Dedicated support', 'SLA guarantees'] }
      },
      useCases: [
        'Database administrators',
        'System administrators',
        'DevOps teams',
        'Compliance-focused organizations',
        'Data-sensitive businesses'
      ],
      integration: ['AWS S3', 'Azure Blob', 'Google Cloud Storage', 'FTP/SFTP', 'Local storage'],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Automation', icon: <FileText className="w-5 h-5" /> },
    { id: 'monitoring', name: 'Monitoring', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'seo', name: 'SEO & Marketing', icon: <Search className="w-5 h-5" /> },
    { id: 'api', name: 'API & Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'backup', name: 'Backup & Recovery', icon: <Database className="w-5 h-5" /> }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Professional Tools & Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS services including AI content generation, performance monitoring, SEO analysis, API rate limiting, and data backup solutions." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Professional micro SaaS tools for content creation, performance monitoring, SEO optimization, API management, and data protection." />
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
            Professional Micro SaaS Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Enterprise-Grade Tools for Modern Businesses
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Transform your business operations with our comprehensive suite of micro SaaS services. From AI-powered content generation to enterprise-grade backup solutions, we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center text-cursor-blue">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>5 Professional Services</span>
            </div>
            <div className="flex items-center text-cursor-blue">
              <Star className="w-5 h-5 mr-2" />
              <span>Enterprise Features</span>
            </div>
            <div className="flex items-center text-cursor-blue">
              <Code className="w-5 h-5 mr-2" />
              <span>Easy Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === category.id
                    ? 'border-cursor-blue bg-cursor-blue text-white shadow-lg'
                    : 'border-gray-600 text-gray-300 hover:border-cursor-blue/50 hover:text-cursor-blue'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={service.id}
                className="card-hover group border-gradient-blue overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className={`p-8 ${service.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-sm">Starting at</div>
                        <div className="text-white text-2xl font-bold">${service.pricing.starter.price}/mo</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-cursor-blue mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Users className="w-5 h-5 text-cursor-blue mr-2" />
                      Perfect For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 3).map((useCase, useCaseIndex) => (
                        <span
                          key={useCaseIndex}
                          className="px-3 py-1 bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 text-cursor-blue mr-2" />
                      Pricing Plans
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(service.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                          <div>
                            <div className="text-white font-medium capitalize">{tier}</div>
                            <div className="text-gray-400 text-sm">${details.price}/month</div>
                          </div>
                          <div className="text-right">
                            <div className="text-cursor-blue text-sm">{details.features.length} features</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="lg"
                      className="flex-1"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      href={`/contact?service=${service.id}`}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      Learn More
                      <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Why Choose Zion Tech Group Services?
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our micro SaaS services are built with enterprise-grade technology, designed for scalability, and backed by world-class support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cursor-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-cursor-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cloud-Native Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                Built on modern cloud infrastructure for maximum reliability, scalability, and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cursor-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-cursor-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-400 leading-relaxed">
                SOC 2 compliant with advanced encryption, access controls, and security monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cursor-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-cursor-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Round-the-clock technical support with dedicated account managers for enterprise clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cursor-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-cursor-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                REST APIs, webhooks, and pre-built integrations with popular platforms and tools.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cursor-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-cursor-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive reporting, real-time dashboards, and actionable insights for data-driven decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cursor-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-cursor-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Infrastructure</h3>
              <p className="text-gray-400 leading-relaxed">
                Multi-region deployment with global CDN for optimal performance worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses that trust Zion Tech Group for their critical operations. Get started today with a free consultation and see how our micro SaaS services can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Start Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
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