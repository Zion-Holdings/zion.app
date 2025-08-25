import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Check,
  Clock,
  DollarSign,
  Target,
  Award,
  Headphones,
  FileText,
  Settings,
  Lock,
  RefreshCw
} from 'lucide-react';

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, count: 12 },
    { id: 'ai-ml', name: 'AI & ML', icon: <Cpu className="h-5 w-5" />, count: 4 },
    { id: 'security', name: 'Security', icon: <Shield className="h-5 w-5" />, count: 3 },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="h-5 w-5" />, count: 2 },
    { id: 'automation', name: 'Automation', icon: <Zap className="h-5 w-5" />, count: 2 },
    { id: 'cloud', name: 'Cloud', icon: <Cloud className="h-5 w-5" />, count: 1 }
  ];

  const microSaasServices = [
    {
      id: 'ai-content-optimizer',
      title: 'AI Content Optimizer Pro',
      description: 'Advanced AI-powered content optimization tool that analyzes, improves, and optimizes your content for SEO, readability, and engagement.',
      longDescription: 'Transform your content creation process with our AI-powered optimization platform. Our advanced algorithms analyze your content in real-time, providing actionable insights to improve SEO rankings, readability scores, and user engagement. Perfect for content marketers, SEO specialists, and businesses looking to maximize their content ROI.',
      icon: <Cpu className="h-8 w-8" />,
      category: 'ai-ml',
      price: 29,
      billing: 'month',
      rating: 4.9,
      reviews: 1247,
      features: [
        'AI-powered content analysis and optimization',
        'Real-time SEO scoring and recommendations',
        'Readability enhancement suggestions',
        'Content performance analytics and insights',
        'Multi-language support (15+ languages)',
        'Integration with popular CMS platforms',
        'Custom optimization rules and workflows',
        'Team collaboration and approval workflows'
      ],
      benefits: [
        'Improve SEO rankings by up to 40%',
        'Increase content engagement by 60%',
        'Save 5+ hours per content piece',
        'Reduce content creation costs by 30%',
        'Boost conversion rates by 25%'
      ],
      useCases: [
        'Content marketing agencies',
        'E-commerce businesses',
        'Blog and media companies',
        'SaaS companies',
        'Educational institutions'
      ],
      badge: 'Popular',
      color: 'from-purple-500 to-cyan-500',
      setupTime: '5 minutes',
      support: '24/7 email & chat',
      freeTrial: '14 days',
      moneyBack: '30 days'
    },
    {
      id: 'cyber-threat-monitor',
      title: 'Cyber Threat Monitor',
      description: 'Real-time cybersecurity threat detection and monitoring system with AI-powered analysis and automated response capabilities.',
      longDescription: 'Stay ahead of cyber threats with our advanced AI-powered security monitoring platform. Our system continuously monitors your digital infrastructure, detecting and responding to threats in real-time. With automated incident response and comprehensive compliance reporting, you can focus on your business while we protect your assets.',
      icon: <Shield className="h-8 w-8" />,
      category: 'security',
      price: 99,
      billing: 'month',
      rating: 4.8,
      reviews: 892,
      features: [
        'Real-time threat detection and monitoring',
        'AI-powered threat analysis and classification',
        'Automated incident response and remediation',
        'Comprehensive compliance reporting (SOC 2, ISO 27001)',
        'Multi-tenant architecture for MSPs',
        'Custom alert rules and thresholds',
        'Integration with SIEM and security tools',
        'Advanced threat intelligence feeds'
      ],
      benefits: [
        'Detect threats 3x faster than traditional methods',
        'Reduce false positives by 70%',
        'Automate 80% of incident response tasks',
        'Achieve compliance requirements faster',
        'Reduce security team workload by 50%'
      ],
      useCases: [
        'Financial institutions',
        'Healthcare organizations',
        'E-commerce platforms',
        'Government agencies',
        'Technology companies'
      ],
      badge: 'New',
      color: 'from-blue-500 to-green-500',
      setupTime: '15 minutes',
      support: '24/7 phone, email & chat',
      freeTrial: '30 days',
      moneyBack: '60 days'
    },
    {
      id: 'data-visualization-studio',
      title: 'Data Visualization Studio',
      description: 'Interactive data visualization platform that transforms complex datasets into actionable insights with customizable dashboards and reports.',
      longDescription: 'Transform your data into compelling visual stories with our advanced visualization platform. Create interactive dashboards, real-time reports, and stunning charts that make complex data easy to understand. Perfect for data analysts, business intelligence teams, and executives who need clear insights to drive decisions.',
      icon: <BarChart3 className="h-8 w-8" />,
      category: 'analytics',
      price: 49,
      billing: 'month',
      rating: 4.7,
      reviews: 567,
      features: [
        'Interactive dashboard builder with drag-and-drop interface',
        '100+ chart types and visualization options',
        'Real-time data streaming and updates',
        'Custom branding and white-labeling',
        'Advanced filtering and drill-down capabilities',
        'Automated report generation and scheduling',
        'Mobile-responsive design for all devices',
        'API integration with 50+ data sources'
      ],
      benefits: [
        'Gain 20% more insights from your data',
        'Improve decision-making speed by 50%',
        'Reduce reporting time by 80%',
        'Increase stakeholder engagement by 40%',
        'Scale from startup to enterprise seamlessly'
      ],
      useCases: [
        'Business intelligence teams',
        'Marketing and sales departments',
        'Financial analysts',
        'Operations managers',
        'Executive leadership'
      ],
      badge: 'Pro',
      color: 'from-green-500 to-teal-500',
      setupTime: '10 minutes',
      support: 'Business hours email & chat',
      freeTrial: '7 days',
      moneyBack: '14 days'
    },
    {
      id: 'smart-email-marketing',
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email marketing solution for personalized campaigns, automated workflows, and advanced audience segmentation.',
      longDescription: 'Revolutionize your email marketing with AI-powered personalization and automation. Our platform learns from your audience behavior to deliver highly targeted campaigns that drive engagement and conversions. With advanced segmentation, A/B testing, and comprehensive analytics, you can optimize your email strategy for maximum ROI.',
      icon: <Users className="h-8 w-8" />,
      category: 'automation',
      price: 39,
      billing: 'month',
      rating: 4.6,
      reviews: 1234,
      features: [
        'AI-powered email personalization and optimization',
        'Advanced audience segmentation and targeting',
        'Automated workflow builder with visual editor',
        'A/B testing for subject lines and content',
        'Real-time analytics and performance tracking',
        'Integration with 100+ e-commerce platforms',
        'Advanced deliverability optimization',
        'GDPR and CAN-SPAM compliance tools'
      ],
      benefits: [
        'Increase open rates by 30%',
        'Boost click-through rates by 25%',
        'Automate 80% of email marketing tasks',
        'Improve conversion rates by 35%',
        'Reduce unsubscribe rates by 20%'
      ],
      useCases: [
        'E-commerce businesses',
        'SaaS companies',
        'Marketing agencies',
        'Non-profit organizations',
        'Educational institutions'
      ],
      badge: 'Featured',
      color: 'from-red-500 to-orange-500',
      setupTime: '20 minutes',
      support: '24/7 email & chat',
      freeTrial: '14 days',
      moneyBack: '30 days'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Assistant',
      description: 'Intelligent chatbot and virtual assistant for 24/7 customer support, automated query resolution, and personalized user experience.',
      longDescription: 'Provide exceptional customer support 24/7 with our AI-powered chatbot platform. Our intelligent assistant learns from every interaction to provide accurate, helpful responses and seamlessly escalates complex issues to human agents. Reduce support costs while improving customer satisfaction and response times.',
      icon: <Zap className="h-8 w-8" />,
      category: 'ai-ml',
      price: 59,
      billing: 'month',
      rating: 4.9,
      reviews: 756,
      features: [
        'Natural language processing and understanding',
        'Multi-language support (25+ languages)',
        'Seamless human agent handoff',
        'Integration with CRM and helpdesk systems',
        'Custom knowledge base management',
        'Advanced analytics and conversation insights',
        'Voice and text chat capabilities',
        'Sentiment analysis and mood detection'
      ],
      benefits: [
        'Reduce support costs by 40%',
        'Improve customer satisfaction by 20%',
        'Handle 5x more customer queries',
        'Provide 24/7 support coverage',
        'Reduce response time to under 1 minute'
      ],
      useCases: [
        'E-commerce platforms',
        'SaaS companies',
        'Financial services',
        'Healthcare providers',
        'Travel and hospitality'
      ],
      badge: 'AI',
      color: 'from-pink-500 to-rose-500',
      setupTime: '30 minutes',
      support: '24/7 phone, email & chat',
      freeTrial: '21 days',
      moneyBack: '45 days'
    },
    {
      id: 'smart-invoice-manager',
      title: 'Smart Invoice Manager',
      description: 'Automated invoicing and billing system with smart reminders, expense tracking, and financial reporting for small to medium businesses.',
      longDescription: 'Streamline your financial operations with our intelligent invoicing and billing platform. Automate invoice generation, track expenses, manage recurring billing, and generate comprehensive financial reports. Perfect for freelancers, small businesses, and growing companies looking to professionalize their financial processes.',
      icon: <Database className="h-8 w-8" />,
      category: 'automation',
      price: 19,
      billing: 'month',
      rating: 4.5,
      reviews: 432,
      features: [
        'Automated invoice generation and scheduling',
        'Expense tracking and categorization',
        'Recurring billing and subscription management',
        'Multiple payment gateway integrations',
        'Professional invoice templates and branding',
        'Financial reporting and analytics',
        'Client portal for invoice viewing',
        'Mobile app for on-the-go management'
      ],
      benefits: [
        'Automate 90% of invoicing tasks',
        'Reduce payment delays by 30%',
        'Save 10+ hours per month on financial tasks',
        'Improve cash flow management',
        'Professionalize your business image'
      ],
      useCases: [
        'Freelancers and consultants',
        'Small businesses',
        'Service-based companies',
        'Creative agencies',
        'Professional services'
      ],
      badge: 'Finance',
      color: 'from-yellow-500 to-amber-500',
      setupTime: '15 minutes',
      support: 'Business hours email & chat',
      freeTrial: '30 days',
      moneyBack: '14 days'
    },
    {
      id: 'cloud-infrastructure-manager',
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud infrastructure management platform with monitoring, optimization, and cost management capabilities.',
      longDescription: 'Take control of your cloud infrastructure with our comprehensive management platform. Monitor performance, optimize costs, ensure security compliance, and manage multiple cloud providers from a single dashboard. Perfect for DevOps teams, system administrators, and businesses looking to maximize their cloud investment.',
      icon: <Cloud className="h-8 w-8" />,
      category: 'cloud',
      price: 79,
      billing: 'month',
      rating: 4.8,
      reviews: 298,
      features: [
        'Multi-cloud infrastructure monitoring and management',
        'Cost optimization and budget tracking',
        'Performance monitoring and alerting',
        'Security compliance and vulnerability scanning',
        'Automated scaling and resource management',
        'Backup and disaster recovery planning',
        'Integration with popular cloud providers',
        'Advanced reporting and analytics'
      ],
      benefits: [
        'Reduce cloud costs by 25-40%',
        'Improve infrastructure performance by 30%',
        'Reduce security incidents by 60%',
        'Automate 70% of infrastructure management tasks',
        'Ensure 99.9% uptime and reliability'
      ],
      useCases: [
        'Technology companies',
        'E-commerce platforms',
        'SaaS businesses',
        'Financial services',
        'Healthcare organizations'
      ],
      badge: 'Enterprise',
      color: 'from-indigo-500 to-purple-500',
      setupTime: '45 minutes',
      support: '24/7 phone, email & chat',
      freeTrial: '30 days',
      moneyBack: '60 days'
    },
    {
      id: 'ai-seo-analyzer',
      title: 'AI SEO Analyzer',
      description: 'Advanced SEO analysis tool powered by AI that provides actionable insights, competitor analysis, and optimization recommendations.',
      longDescription: 'Dominate search rankings with our AI-powered SEO analysis platform. Get deep insights into your website performance, analyze competitors, track keyword rankings, and receive personalized optimization recommendations. Our AI continuously learns from search engine changes to keep you ahead of the competition.',
      icon: <Globe className="h-8 w-8" />,
      category: 'ai-ml',
      price: 45,
      billing: 'month',
      rating: 4.7,
      reviews: 654,
      features: [
        'AI-powered SEO analysis and recommendations',
        'Competitor analysis and benchmarking',
        'Keyword research and tracking',
        'Technical SEO audit and optimization',
        'Content optimization suggestions',
        'Local SEO and Google My Business management',
        'Ranking tracking and reporting',
        'Integration with Google Analytics and Search Console'
      ],
      benefits: [
        'Improve search rankings by 35%',
        'Increase organic traffic by 50%',
        'Reduce SEO implementation time by 40%',
        'Stay ahead of algorithm changes',
        'Outperform competitors consistently'
      ],
      useCases: [
        'Digital marketing agencies',
        'E-commerce businesses',
        'Content creators',
        'Local businesses',
        'SaaS companies'
      ],
      badge: 'SEO',
      color: 'from-emerald-500 to-blue-500',
      setupTime: '25 minutes',
      support: '24/7 email & chat',
      freeTrial: '14 days',
      moneyBack: '30 days'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const selectedServiceData = selectedService 
    ? microSaasServices.find(service => service.id === selectedService)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-zion-cyan" />
            <h1 className="text-5xl font-bold text-white">Micro SAAS Services</h1>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of intelligent, innovative, and cost-effective micro SAAS solutions 
            designed to transform your business operations and drive growth.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <TrendingUp className="h-5 w-5 text-zion-cyan" />
              <span>12 Services</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.8★ Average Rating</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Users className="h-5 w-5 text-zion-purple" />
              <span>10K+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-white/10 backdrop-blur-sm text-zion-slate-light border border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                {category.icon}
                {category.name}
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid and Detail View */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Services List */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                      selectedService === service.id
                        ? 'bg-white/10 border-zion-cyan/50 shadow-lg shadow-zion-cyan/25'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white">{service.title}</h3>
                          <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-xs">
                            {service.badge}
                          </span>
                        </div>
                        <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-white">
                            ${service.price}/{service.billing}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-zion-slate-light">{service.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Detail */}
            <div className="lg:col-span-2">
              {selectedServiceData ? (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  {/* Service Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedServiceData.color} text-white`}>
                      {selectedServiceData.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="text-3xl font-bold text-white">{selectedServiceData.title}</h2>
                        <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-sm">
                          {selectedServiceData.badge}
                        </span>
                      </div>
                      <p className="text-lg text-zion-slate-light mb-4">
                        {selectedServiceData.longDescription}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Setup: {selectedServiceData.setupTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Headphones className="h-4 w-4" />
                          <span>{selectedServiceData.support}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RefreshCw className="h-4 w-4" />
                          <span>{selectedServiceData.freeTrial} free trial</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark rounded-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-white">${selectedServiceData.price}</div>
                        <div className="text-zion-slate-light">per {selectedServiceData.billing}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-zion-slate-light mb-1">Rating</div>
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-xl font-bold text-white">{selectedServiceData.rating}</span>
                          <span className="text-zion-slate-light">({selectedServiceData.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                        Start Free Trial
                      </button>
                      <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                        Contact Sales
                      </button>
                    </div>
                  </div>

                  {/* Features and Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-zion-cyan" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedServiceData.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <Check className="h-4 w-4 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-zion-purple" />
                        Key Benefits
                      </h3>
                      <ul className="space-y-2">
                        {selectedServiceData.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <Award className="h-4 w-4 text-yellow-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-zion-blue" />
                      Perfect For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedServiceData.useCases.map((useCase, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-zion-slate-light"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Money Back Guarantee */}
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <Lock className="h-6 w-6 text-green-400" />
                      <div>
                        <div className="font-semibold text-white">Money-Back Guarantee</div>
                        <div className="text-sm text-zion-slate-light">
                          Try risk-free with our {selectedServiceData.moneyBack} money-back guarantee
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <Sparkles className="h-16 w-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Select a Service</h3>
                  <p className="text-zion-slate-light">
                    Choose a service from the list to view detailed information, features, and pricing.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto mb-8">
            Join thousands of businesses that are already leveraging our micro SAAS solutions 
            to drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Users className="h-5 w-5" />
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}