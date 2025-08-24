import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target } from 'lucide-react';
import Button from '../components/ui/Button';
import { Check, Star, Zap, Shield, Users, Globe, TrendingUp, Clock, DollarSign, Target, ArrowRight, BarChart3, Zap as Lightning } from 'lucide-react';

export default function MicroSaasPage() {
  const detailedServices = [
    {
      name: 'AI Content Generator Pro',
      tagline: 'Professional AI-powered content creation',
      price: '$49',
      period: '/month',
      description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant.',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (15+ languages)',
        'Brand voice customization',
        'Content templates library (100+ templates)',
        'Plagiarism-free writing guarantee',
        'Advanced content analytics',
        'Team collaboration tools',
        'API access for integrations'
      ],
      popular: true,
      icon: '📝',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      link: 'https://contentgen.ziontechgroup.com',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
      marketSize: '$15.8B content marketing industry',
      growthRate: '16.1% CAGR expected through 2030'
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation and team collaboration.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools',
        'Version control & history',
        'Design system analytics',
        'Integration with Figma, Sketch, Adobe XD'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://design.ziontechgroup.com',
      marketPosition: 'Competitive with Zeroheight ($0-200), Frontify ($0-200), and InVision DSM ($0-100)',
      targetAudience: 'Design teams, product managers, and design system architects',
      marketSize: '$8.2B design tools market',
      growthRate: '12.3% CAGR expected through 2030'
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights.',
      features: [
        'Performance metrics tracking',
        'Error monitoring & alerting',
        'User experience analytics',
        'Automated optimization',
        'Custom dashboards',
        'Real-time alerts',
        'Performance budgets',
        'Integration with popular frameworks'
      ],
      popular: false,
      icon: '📱',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://monitor.ziontechgroup.com',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99)',
      targetAudience: 'Developers, DevOps teams, and product managers',
      marketSize: '$4.1B application performance monitoring market',
      growthRate: '18.7% CAGR expected through 2030'
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Comprehensive SEO automation',
      price: '$89',
      period: '/month',
      description: 'Automate your SEO workflow with advanced tools for keyword research, optimization, and reporting.',
      features: [
        'Keyword research automation',
        'On-page optimization',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking',
        'Automated reporting',
        'SEO score monitoring',
        'Integration with Google Analytics & Search Console'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://seo.ziontechgroup.com',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and agencies',
      marketSize: '$68.8B SEO industry',
      growthRate: '14.2% CAGR expected through 2030'
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent conversational AI',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and user engagement.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Analytics & insights',
        'Custom training data',
        '24/7 availability',
        'Multi-language support',
        'Conversation flow builder',
        'Integration with popular platforms'
      ],
      popular: false,
      icon: '💬',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      link: 'https://chatbot.ziontechgroup.com',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($0-2500), and ManyChat ($0-15)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses',
      marketSize: '$12.7B chatbot market',
      growthRate: '23.5% CAGR expected through 2030'
    },
    {
      name: 'Business Intelligence Hub',
      tagline: 'Data-driven insights platform',
      price: '$99',
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics and automated reporting.',
      features: [
        'Data visualization tools',
        'Automated reporting',
        'KPI dashboards',
        'Predictive analytics',
        'Data integration',
        'Real-time data processing',
        'Custom metrics & calculations',
        'Team collaboration features'
      ],
      popular: false,
      icon: '📊',
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      link: 'https://bi.ziontechgroup.com',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, and executives',
      marketSize: '$29.5B business intelligence market',
      growthRate: '13.2% CAGR expected through 2030'
    },
    // New additional services
    {
      name: 'Email Marketing Automation',
      tagline: 'Advanced email campaign management',
      price: '$59',
      period: '/month',
      description: 'Create, automate, and optimize email marketing campaigns with AI-powered personalization.',
      features: [
        'AI-powered subject line optimization',
        'Behavioral email triggers',
        'A/B testing automation',
        'Advanced segmentation',
        'Email template builder',
        'Performance analytics',
        'GDPR compliance tools',
        'Integration with major CRMs'
      ],
      popular: false,
      icon: '📧',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://email.ziontechgroup.com',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($29-59), and ActiveCampaign ($29-259)',
      targetAudience: 'Digital marketers, e-commerce businesses, and content creators'
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Intelligent social media management',
      price: '$44',
      period: '/month',
      description: 'Schedule, analyze, and optimize your social media presence across all platforms.',
      features: [
        'Multi-platform scheduling',
        'AI-powered content optimization',
        'Best time to post analysis',
        'Content calendar management',
        'Social media analytics',
        'Hashtag research tools',
        'Team collaboration',
        'Automated responses'
      ],
      popular: false,
      icon: '📱',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://social.ziontechgroup.com',
      marketPosition: 'Competitive with Buffer ($15-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, influencers, and marketing teams'
    },
    {
      name: 'Customer Feedback Analytics',
      tagline: 'Actionable customer insights platform',
      price: '$79',
      period: '/month',
      description: 'Collect, analyze, and act on customer feedback to improve your products and services.',
      features: [
        'Multi-channel feedback collection',
        'Sentiment analysis',
        'Feedback categorization',
        'Action item tracking',
        'Customer satisfaction metrics',
        'Integration with CRM systems',
        'Automated reporting',
        'Team collaboration tools'
      ],
      popular: false,
      icon: '💡',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://feedback.ziontechgroup.com',
      marketPosition: 'Competitive with UserVoice ($15-500), Productboard ($20-2000), and Canny ($50-400)',
      targetAudience: 'Product managers, customer success teams, and UX researchers'
    },
    {
      name: 'Invoice & Billing Manager',
      tagline: 'Streamlined financial operations',
      price: '$34',
      period: '/month',
      description: 'Automate invoicing, payment processing, and financial reporting for small businesses.',
      features: [
        'Automated invoice generation',
        'Payment gateway integration',
        'Recurring billing setup',
        'Expense tracking',
        'Financial reporting',
        'Tax calculation',
        'Multi-currency support',
        'Client portal access'
      ],
      popular: false,
      icon: '💰',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://billing.ziontechgroup.com',
      marketPosition: 'Competitive with FreshBooks ($15-55), Wave (Free), and QuickBooks ($30-200)',
      targetAudience: 'Freelancers, small businesses, and accounting professionals'
    },
    {
      name: 'Project Management Hub',
      tagline: 'Collaborative project organization',
      price: '$54',
      period: '/month',
      description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
      features: [
        'Kanban and Gantt views',
        'Time tracking integration',
        'Team collaboration tools',
        'Resource allocation',
        'Progress reporting',
        'File sharing & storage',
        'Mobile app access',
        'API integrations'
      ],
      popular: false,
      icon: '📋',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://projects.ziontechgroup.com',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, development teams, and creative agencies',
      marketSize: '$6.8B project management software market',
      growthRate: '17.4% CAGR expected through 2030'
    },
    {
      name: 'Customer Support Suite',
      tagline: 'Comprehensive support management',
      price: '$74',
      period: '/month',
      description: 'Manage customer inquiries, tickets, and support operations with AI-powered automation.',
      features: [
        'Ticket management system',
        'AI-powered response suggestions',
        'Knowledge base builder',
        'Live chat integration',
        'Customer satisfaction surveys',
        'Support analytics',
        'Multi-language support',
        'Integration with popular platforms'
      ],
      popular: false,
      icon: '🔌',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      link: 'https://api.ziontechgroup.com',
      marketPosition: 'Competitive with Kong ($250-500), AWS API Gateway ($3.50/million calls), and Azure API Management ($0.50-4.00)',
      targetAudience: 'Developers, DevOps engineers, and platform architects'
    },
    {
      name: 'AI Video Generator',
      tagline: 'Professional video content creation',
      price: '$89',
      period: '/month',
      description: 'Create engaging video content with AI-powered editing, templates, and automated workflows.',
      features: [
        'AI-powered video editing',
        'Template library (500+ templates)',
        'Automated caption generation',
        'Multi-format export',
        'Brand kit integration',
        'Collaborative editing',
        'Analytics & performance tracking',
        'Integration with social platforms'
      ],
      popular: true,
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://video.ziontechgroup.com',
      marketPosition: 'Competitive with Synthesia ($30-165), Lumen5 ($19-79), and InVideo ($15-149)',
      targetAudience: 'Content creators, marketers, social media managers, and businesses'
    },
    {
      name: 'E-commerce Analytics Suite',
      tagline: 'Comprehensive e-commerce insights',
      price: '$79',
      period: '/month',
      description: 'Track, analyze, and optimize your e-commerce performance with advanced analytics and automation.',
      features: [
        'Conversion funnel analysis',
        'Customer behavior tracking',
        'Inventory optimization',
        'Revenue forecasting',
        'A/B testing automation',
        'Customer lifetime value analysis',
        'Multi-store management',
        'Integration with major platforms'
      ],
      popular: false,
      icon: '🛒',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ecommerce.ziontechgroup.com',
      marketPosition: 'Competitive with Google Analytics 4 (Free), Hotjar ($32-500), and Crazy Egg ($24-99)',
      targetAudience: 'E-commerce businesses, online retailers, and digital marketers'
    },
    {
      name: 'HR Management Platform',
      tagline: 'Streamlined human resources operations',
      price: '$69',
      period: '/month',
      description: 'Manage recruitment, onboarding, performance, and employee engagement in one integrated platform.',
      features: [
        'Applicant tracking system',
        'Employee onboarding automation',
        'Performance management',
        'Time tracking & attendance',
        'Payroll integration',
        'Employee self-service portal',
        'Compliance monitoring',
        'Analytics & reporting'
      ],
      popular: false,
      icon: '👥',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      link: 'https://hr.ziontechgroup.com',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Gusto ($40-80), and Zenefits ($10-27)',
      targetAudience: 'Small to medium businesses, HR professionals, and growing companies'
    },
    {
      name: 'Legal Document Automation',
      tagline: 'AI-powered legal document generation',
      price: '$99',
      period: '/month',
      description: 'Generate, review, and manage legal documents with AI assistance and compliance monitoring.',
      features: [
        'Document template library',
        'AI-powered document review',
        'Compliance checking',
        'Electronic signature integration',
        'Document version control',
        'Legal research assistance',
        'Client portal access',
        'Integration with legal software'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://legal.ziontechgroup.com',
      marketPosition: 'Competitive with DocuSign ($10-25), PandaDoc ($19-99), and HelloSign ($15-25)',
      targetAudience: 'Law firms, legal professionals, and businesses requiring legal documentation'
    },
    {
      name: 'Inventory Management System',
      tagline: 'Smart inventory optimization',
      price: '$59',
      period: '/month',
      description: 'Optimize inventory levels, reduce costs, and improve supply chain efficiency with AI-powered insights.',
      features: [
        'Real-time inventory tracking',
        'Demand forecasting',
        'Automated reorder points',
        'Multi-location management',
        'Barcode scanning integration',
        'Supplier management',
        'Cost analysis & reporting',
        'Mobile app access'
      ],
      popular: false,
      icon: '📦',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://inventory.ziontechgroup.com',
      marketPosition: 'Competitive with TradeGecko ($39-199), Zoho Inventory ($39-239), and Fishbowl ($4,395)',
      targetAudience: 'Retailers, manufacturers, distributors, and e-commerce businesses'
    },
    {
      name: 'Customer Support Hub',
      tagline: 'Unified customer support platform',
      price: '$49',
      period: '/month',
      description: 'Centralize customer support across all channels with AI-powered automation and analytics.',
      features: [
        'Multi-channel ticket management',
        'AI-powered response suggestions',
        'Knowledge base management',
        'Customer satisfaction surveys',
        'Performance analytics',
        'Team collaboration tools',
        'Integration with CRM systems',
        'Mobile app for agents'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-400',
      link: 'https://support.ziontechgroup.com',
      marketPosition: 'Competitive with Zendesk ($19-99), Freshdesk ($15-99), and Help Scout ($20-65)',
      targetAudience: 'Customer support teams, service businesses, and e-commerce companies'
    },
    {
      name: 'Financial Planning & Budgeting',
      tagline: 'Personal and business financial management',
      price: '$39',
      period: '/month',
      description: 'Plan, track, and optimize your finances with AI-powered insights and automated budgeting.',
      features: [
        'Automated expense tracking',
        'Budget planning & monitoring',
        'Investment portfolio analysis',
        'Financial goal setting',
        'Tax planning assistance',
        'Multi-account aggregation',
        'Financial reporting',
        'Mobile app with notifications'
      ],
      popular: false,
      icon: '📈',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://finance.ziontechgroup.com',
      marketPosition: 'Competitive with Mint (Free), YNAB ($11.99), and Personal Capital (Free)',
      targetAudience: 'Individuals, small businesses, and financial advisors'
    },
    {
      name: 'Learning Management System',
      tagline: 'Corporate training and education platform',
      price: '$89',
      period: '/month',
      description: 'Create, deliver, and track corporate training programs with advanced analytics and engagement tools.',
      features: [
        'Course creation tools',
        'Interactive assessments',
        'Progress tracking',
        'Gamification elements',
        'Mobile learning support',
        'Analytics & reporting',
        'Integration with HR systems',
        'White-label customization'
      ],
      popular: false,
      icon: '🎓',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://learning.ziontechgroup.com',
      marketPosition: 'Competitive with Udemy Business ($360-720), Coursera for Business ($399-399), and LinkedIn Learning ($29.99)',
      targetAudience: 'Corporate training departments, educational institutions, and training providers'
    },
    {
      name: 'Real Estate Management Platform',
      tagline: 'Comprehensive property management solution',
      price: '$79',
      period: '/month',
      description: 'Manage properties, tenants, and maintenance with integrated tools for real estate professionals.',
      features: [
        'Property portfolio management',
        'Tenant screening & management',
        'Maintenance request tracking',
        'Financial reporting',
        'Document management',
        'Market analysis tools',
        'Mobile app for tenants',
        'Integration with accounting software'
      ],
      popular: false,
      icon: '🏠',
      color: 'from-amber-500 to-yellow-600',
      textColor: 'text-amber-400',
      link: 'https://realestate.ziontechgroup.com',
      marketPosition: 'Competitive with Buildium ($50-460), AppFolio ($1.40-3.00), and Rent Manager ($1-2)',
      targetAudience: 'Property managers, real estate investors, and property management companies'
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
      title: 'Focus on Specialization',
      description: 'Unlike broad platforms, our micro SaaS solutions focus on specific use cases, delivering deeper functionality and better user experience.',
      stats: '3x faster time-to-value'
    },
    {
      title: 'Market Validation',
      description: 'All services are based on validated market needs with proven demand and competitive positioning.',
      stats: '12 validated solutions'
    }
  ];

  const industryTrends = [
    {
      trend: 'AI Integration',
      description: 'Every service includes AI-powered features for enhanced automation and intelligence.',
      impact: 'High'
    },
    {
      trend: 'API-First Design',
      description: 'All services provide robust APIs for seamless integration with existing workflows.',
      impact: 'High'
    },
    {
      trend: 'Mobile Optimization',
      description: 'Responsive design and mobile apps for all services ensure accessibility anywhere.',
      impact: 'Medium'
    },
    {
      trend: 'Security Focus',
      description: 'Enterprise-grade security and compliance built into every service.',
      impact: 'High'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Specialized Business Solutions</title>
        <meta name="description" content="Discover our 20 specialized micro SaaS solutions for content creation, design systems, performance monitoring, SEO automation, chatbots, business intelligence, video generation, e-commerce analytics, HR management, legal automation, inventory management, customer support, financial planning, learning management, and real estate management. Competitive pricing with 14-day free trials." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Specialized business solutions with competitive pricing and free trials." />
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Specialized Tools for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Every Business Need</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-12">
              20 specialized micro SaaS solutions covering content creation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, API infrastructure, video generation, e-commerce analytics,
              HR management, legal automation, inventory management, customer support, financial planning, learning management,
              and real estate management. Focused, affordable solutions that deliver specific value without the complexity 
              of enterprise platforms. Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

        {/* Market Insights */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Understand the advantages of our focused approach and competitive market positioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{insight.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{insight.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                    {insight.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Our Micro SaaS Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our portfolio of 45+ specialized solutions covers the most critical business needs, from content creation 
                and video generation to API management and data protection. Each solution is designed to solve a specific 
                business problem with deep functionality and competitive pricing.
              </p>
            </div>

            {/* Service Categories & Pricing Tiers */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl p-8 border border-blue-700/30">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starter Solutions</h3>
                    <p className="text-blue-200 text-sm">Perfect for small businesses and startups</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">AI Content Generator</span>
                      <span className="text-blue-400 font-semibold">$49/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Email Marketing Automation</span>
                      <span className="text-blue-400 font-semibold">$59/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Social Media Scheduler</span>
                      <span className="text-blue-400 font-semibold">$39/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Form Builder Pro</span>
                      <span className="text-blue-400 font-semibold">$25/month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-2xl p-8 border border-green-700/30">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">💼</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional Tools</h3>
                    <p className="text-green-200 text-sm">For growing businesses and teams</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">AI Sales Intelligence</span>
                      <span className="text-green-400 font-semibold">$99/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Business Intelligence Hub</span>
                      <span className="text-green-400 font-semibold">$99/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">AI-Powered CRM</span>
                      <span className="text-green-400 font-semibold">$79/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Customer Feedback Analytics</span>
                      <span className="text-green-400 font-semibold">$79/month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 border border-purple-700/30">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🏢</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise Solutions</h3>
                    <p className="text-purple-200 text-sm">Advanced tools for large organizations</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">AI Healthcare Analytics</span>
                      <span className="text-purple-400 font-semibold">$199/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Financial Fraud Detection</span>
                      <span className="text-purple-400 font-semibold">$179/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Supply Chain Risk Management</span>
                      <span className="text-purple-400 font-semibold">$159/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">IoT Device Management</span>
                      <span className="text-purple-400 font-semibold">$129/month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Positioning Highlights */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Competitive Market Positioning</h3>
                  <p className="text-gray-400">Our services are priced competitively against industry leaders while offering superior functionality and ease of use.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">💰</div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cost Effective</h4>
                    <p className="text-sm text-gray-400">Up to 70% savings vs enterprise solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fast Setup</h4>
                    <p className="text-sm text-gray-400">Get started in minutes, not weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                    <p className="text-sm text-gray-400">Bank-level security & compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <h4 className="text-lg font-semibold text-white mb-2">Scalable Growth</h4>
                    <p className="text-sm text-gray-400">Start small, scale as you grow</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-${service.textColor.split('-')[1]}-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-${service.textColor.split('-')[1]}-500/10`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mr-4`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-gray-400">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>
                    <p className="text-sm text-gray-500">14-day free trial included</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <Button
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}
                    >
                      Start Free Trial
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Market Size</p>
                        <p className="text-sm text-gray-400 font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Growth Rate</p>
                        <p className="text-sm text-gray-400 font-medium">{service.growthRate}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Market Position</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{service.marketPosition}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Target Audience</p>
                      <p className="text-sm text-gray-400">{service.targetAudience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis & Competitive Intelligence */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Market Analysis & Competitive Intelligence
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our micro SaaS services are strategically positioned in the market with competitive pricing, 
                superior functionality, and clear value propositions that outperform traditional enterprise solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Market Positioning Analysis */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-2xl p-8 border border-blue-700/30">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">📊</span>
                    Market Positioning Strategy
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-800/20 rounded-lg">
                      <span className="text-gray-300">Enterprise Solutions</span>
                      <span className="text-red-400 font-semibold">$500-2000+/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-800/20 rounded-lg">
                      <span className="text-gray-300">Our Micro SaaS</span>
                      <span className="text-green-400 font-semibold">$19-199/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-800/20 rounded-lg">
                      <span className="text-gray-300">Cost Savings</span>
                      <span className="text-green-400 font-semibold">Up to 90%</span>
                    </div>
                  </div>
                  <p className="text-blue-200 text-sm mt-4">
                    We deliver enterprise-grade functionality at micro SaaS prices, making advanced technology accessible to businesses of all sizes.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 rounded-2xl p-8 border border-green-700/30">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Target Market Segments
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-800/20 rounded-lg">
                      <span className="text-2xl mr-3">🚀</span>
                      <div>
                        <span className="text-white font-semibold">Startups & SMBs</span>
                        <p className="text-green-200 text-sm">Affordable access to enterprise tools</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-800/20 rounded-lg">
                      <span className="text-2xl mr-3">💼</span>
                      <div>
                        <span className="text-white font-semibold">Growing Businesses</span>
                        <p className="text-green-200 text-sm">Scalable solutions that grow with you</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-800/20 rounded-lg">
                      <span className="text-2xl mr-3">🏢</span>
                      <div>
                        <span className="text-white font-semibold">Enterprise Teams</span>
                        <p className="text-green-200 text-sm">Specialized tools for specific needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitive Analysis */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-2xl p-8 border border-purple-700/30">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">⚔️</span>
                    Competitive Advantages
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-800/20 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">🚀 Speed to Market</h4>
                      <p className="text-purple-200 text-sm">Setup in minutes vs. weeks for enterprise solutions</p>
                    </div>
                    <div className="p-4 bg-purple-800/20 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">💰 Transparent Pricing</h4>
                      <p className="text-purple-200 text-sm">No hidden fees, no sales calls, no surprises</p>
                    </div>
                    <div className="p-4 bg-purple-800/20 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">🔧 Focused Functionality</h4>
                      <p className="text-purple-200 text-sm">Do one thing exceptionally well vs. jack-of-all-trades</p>
                    </div>
                    <div className="p-4 bg-purple-800/20 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">📱 Modern UX</h4>
                      <p className="text-purple-200 text-sm">Built for 2024, not legacy enterprise systems</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/20 rounded-2xl p-8 border border-orange-700/30">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">📈</span>
                    Growth & Expansion
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-orange-800/20 rounded-lg">
                      <div className="text-3xl font-bold text-orange-400 mb-2">45+</div>
                      <p className="text-orange-200 text-sm">Specialized Services</p>
                    </div>
                    <div className="text-center p-4 bg-orange-800/20 rounded-lg">
                      <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                      <p className="text-orange-200 text-sm">Industry Verticals</p>
                    </div>
                    <div className="text-center p-4 bg-orange-800/20 rounded-lg">
                      <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                      <p className="text-orange-200 text-sm">Uptime Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services on ZionTechGroup.com Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Industry Trends & Innovation
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our micro SaaS solutions are built on the latest industry trends and technological innovations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryTrends.map((trend, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{trend.trend}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      trend.impact === 'High' ? 'bg-green-500/20 text-green-400' :
                      trend.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {trend.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{trend.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose from our portfolio of 20 specialized solutions. All services include comprehensive documentation, 
              dedicated support, enterprise-grade reliability, and 14-day free trials. Start with one solution 
              and add more as your business grows.
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