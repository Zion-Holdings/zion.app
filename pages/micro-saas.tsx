import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

export default function MicroSaasPage() {
  const microSaasServices = [
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
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators'
    },
    {
      name: 'AI Video Editor Pro',
      tagline: 'Professional AI-powered video editing',
      price: '$79',
      period: '/month',
      description: 'Transform raw footage into professional videos with AI-powered editing, effects, and automation.',
      features: [
        'AI-powered scene detection',
        'Automated video enhancement',
        'Smart background removal',
        'Auto-caption generation',
        'Professional templates library',
        '4K/8K video support',
        'Cloud-based processing',
        'Team collaboration tools'
      ],
      popular: true,
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://video.ziontechgroup.com',
      marketPosition: 'Competitive with Runway ML ($12-76), Synthesia ($22-67), and Lumen5 ($19-79)',
      targetAudience: 'Content creators, marketers, agencies, and video professionals'
    },
    {
      name: 'AI Image Generator Studio',
      tagline: 'Professional AI image creation platform',
      price: '$59',
      period: '/month',
      description: 'Create stunning, high-resolution images with advanced AI models and professional editing tools.',
      features: [
        'Multiple AI models (DALL-E, Midjourney, Stable Diffusion)',
        'High-resolution output (up to 4K)',
        'Style transfer and customization',
        'Batch image generation',
        'Commercial usage rights',
        'API access for developers',
        'Advanced editing tools',
        'Team collaboration features'
      ],
      popular: true,
      icon: '🎨',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://images.ziontechgroup.com',
      marketPosition: 'Competitive with Midjourney ($10-30), DALL-E ($0.02-0.04 per image), and Stable Diffusion ($0.002 per image)',
      targetAudience: 'Designers, marketers, content creators, and developers'
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
      targetAudience: 'Design teams, product managers, and design system architects'
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
      targetAudience: 'Developers, DevOps teams, and product managers'
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
      targetAudience: 'SEO specialists, digital marketers, and agencies'
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
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses'
    },
    {
      name: 'Customer Support Automation',
      tagline: 'Intelligent customer service platform',
      price: '$89',
      period: '/month',
      description: 'Automate customer support with AI-powered ticket routing, response generation, and analytics.',
      features: [
        'AI-powered ticket classification',
        'Automated response generation',
        'Smart routing algorithms',
        'Knowledge base management',
        'Customer satisfaction tracking',
        'Multi-channel support',
        'Performance analytics',
        'Integration with CRM systems'
      ],
      popular: true,
      icon: '🎧',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://support.ziontechgroup.com',
      marketPosition: 'Competitive with Zendesk ($19-99), Freshdesk ($15-99), and Help Scout ($20-65)',
      targetAudience: 'Customer support teams, e-commerce businesses, and SaaS companies'
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
      targetAudience: 'Data analysts, business intelligence teams, and executives'
    },
    {
      name: 'Email Marketing Automation',
      tagline: 'Advanced email campaign management',
      price: '$59',
      period: '/month',
      description: 'Create, automate, and optimize email marketing campaigns with AI-powered personalization.',
      features: [
        'AI-powered personalization',
        'Advanced segmentation',
        'A/B testing automation',
        'Behavioral triggers',
        'Email template library',
        'Analytics & reporting',
        'GDPR compliance tools',
        'Integration with major platforms'
      ],
      popular: true,
      icon: '📧',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      link: 'https://email.ziontechgroup.com',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($29-59), and ActiveCampaign ($29-259)',
      targetAudience: 'Digital marketers, e-commerce businesses, and content creators'
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Intelligent social media management',
      price: '$39',
      period: '/month',
      description: 'Schedule, analyze, and optimize your social media presence across all platforms.',
      features: [
        'Multi-platform scheduling',
        'AI-powered content suggestions',
        'Best time to post optimization',
        'Content calendar management',
        'Performance analytics',
        'Hashtag optimization',
        'Team collaboration tools',
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
      price: '$49',
      period: '/month',
      description: 'Automate invoicing, payment processing, and financial reporting for your business.',
      features: [
        'Automated invoicing',
        'Payment processing integration',
        'Recurring billing',
        'Financial reporting',
        'Tax calculation',
        'Multi-currency support',
        'Client portal',
        'Accounting software integration'
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
      tagline: 'Collaborative project management platform',
      price: '$69',
      period: '/month',
      description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
      features: [
        'Task management & tracking',
        'Team collaboration tools',
        'Project templates',
        'Time tracking',
        'Resource allocation',
        'Progress reporting',
        'Integration with popular tools',
        'Mobile app access'
      ],
      popular: false,
      icon: '📋',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://projects.ziontechgroup.com',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, development teams, and creative agencies'
    },
    {
      name: 'API Gateway & Management',
      tagline: 'Enterprise API infrastructure',
      price: '$129',
      period: '/month',
      description: 'Build, deploy, and manage APIs with advanced security, monitoring, and developer tools.',
      features: [
        'API design & documentation',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'API analytics & monitoring',
        'Developer portal',
        'Version management',
        'Security & compliance',
        'Integration with CI/CD'
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
      name: 'AI Code Assistant Pro',
      tagline: 'Intelligent coding companion',
      price: '$89',
      period: '/month',
      description: 'Boost developer productivity with AI-powered code generation, debugging, and optimization.',
      features: [
        'AI code generation',
        'Smart debugging assistance',
        'Code review automation',
        'Performance optimization',
        'Multi-language support',
        'IDE integration',
        'Team collaboration',
        'Custom model training'
      ],
      popular: true,
      icon: '💻',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      link: 'https://code.ziontechgroup.com',
      marketPosition: 'Competitive with GitHub Copilot ($10-19), Tabnine ($12-39), and Kite ($0-99)',
      targetAudience: 'Developers, engineering teams, and software companies'
    },
    {
      name: 'E-commerce Analytics Suite',
      tagline: 'Comprehensive e-commerce insights',
      price: '$79',
      period: '/month',
      description: 'Track, analyze, and optimize your e-commerce performance with advanced analytics and automation.',
      features: [
        'Sales performance tracking',
        'Customer behavior analysis',
        'Conversion optimization',
        'Inventory management',
        'Marketing attribution',
        'A/B testing tools',
        'Real-time dashboards',
        'Integration with major platforms'
      ],
      popular: false,
      icon: '🛒',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ecommerce.ziontechgroup.com',
      marketPosition: 'Competitive with Google Analytics 4 (Free), Mixpanel ($25-1000), and Amplitude ($995-9950)',
      targetAudience: 'E-commerce businesses, online retailers, and digital marketers'
    },
    {
      name: 'AI Legal Assistant',
      tagline: 'Intelligent legal document automation',
      price: '$149',
      period: '/month',
      description: 'Automate legal document creation, contract analysis, and compliance monitoring with AI.',
      features: [
        'Legal document generation',
        'Contract analysis & review',
        'Compliance monitoring',
        'Legal research automation',
        'Document templates library',
        'Risk assessment tools',
        'Team collaboration',
        'Secure document storage'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://legal.ziontechgroup.com',
      marketPosition: 'Competitive with DocuSign ($10-25), PandaDoc ($19-99), and ContractPodAi ($500-2000)',
      targetAudience: 'Law firms, legal departments, and compliance officers'
    },
    {
      name: 'AI Sales Assistant',
      tagline: 'Intelligent sales automation platform',
      price: '$99',
      period: '/month',
      description: 'Automate sales processes with AI-powered lead scoring, follow-up sequences, and performance analytics.',
      features: [
        'AI lead scoring & qualification',
        'Automated follow-up sequences',
        'Sales pipeline management',
        'Performance analytics',
        'CRM integration',
        'Email & call tracking',
        'Sales forecasting',
        'Team collaboration tools'
      ],
      popular: true,
      icon: '🎯',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://sales.ziontechgroup.com',
      marketPosition: 'Competitive with HubSpot Sales Hub ($45-1500), Pipedrive ($14.90-99), and Salesforce ($25-300)',
      targetAudience: 'Sales teams, B2B companies, and sales managers'
    },
    {
      name: 'AI HR Assistant',
      tagline: 'Intelligent human resources automation',
      price: '$79',
      period: '/month',
      description: 'Streamline HR processes with AI-powered recruitment, employee management, and performance tracking.',
      features: [
        'AI-powered candidate screening',
        'Automated job posting',
        'Employee onboarding',
        'Performance tracking',
        'Time & attendance',
        'Benefits management',
        'Compliance monitoring',
        'Analytics & reporting'
      ],
      popular: false,
      icon: '👥',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      link: 'https://hr.ziontechgroup.com',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Workday ($45-100), and ADP ($59-199)',
      targetAudience: 'HR professionals, small businesses, and growing companies'
    },
    {
      name: 'AI Financial Advisor',
      tagline: 'Intelligent financial planning & analysis',
      price: '$119',
      period: '/month',
      description: 'Get AI-powered financial insights, budgeting automation, and investment recommendations.',
      features: [
        'AI financial analysis',
        'Automated budgeting',
        'Investment recommendations',
        'Expense tracking',
        'Financial goal planning',
        'Tax optimization',
        'Portfolio monitoring',
        'Financial reporting'
      ],
      popular: false,
      icon: '📈',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://finance.ziontechgroup.com',
      marketPosition: 'Competitive with Mint (Free), YNAB ($8.25-14.99), and Personal Capital (Free)',
      targetAudience: 'Individuals, small businesses, and financial advisors'
    },
    {
      name: 'AI Supply Chain Optimizer',
      tagline: 'Intelligent supply chain management',
      price: '$159',
      period: '/month',
      description: 'Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization.',
      features: [
        'AI demand forecasting',
        'Inventory optimization',
        'Supplier management',
        'Logistics optimization',
        'Cost analysis',
        'Risk assessment',
        'Real-time tracking',
        'Performance analytics'
      ],
      popular: false,
      icon: '🚚',
      color: 'from-orange-500 to-amber-600',
      textColor: 'text-orange-400',
      link: 'https://supplychain.ziontechgroup.com',
      marketPosition: 'Competitive with SAP SCM ($1000+), Oracle SCM ($500+), and Manhattan Associates ($500+)',
      targetAudience: 'Manufacturers, retailers, and logistics companies'
    },
    {
      name: 'AI Cybersecurity Suite',
      tagline: 'Intelligent threat detection & prevention',
      price: '$129',
      period: '/month',
      description: 'Protect your business with AI-powered threat detection, automated response, and security monitoring.',
      features: [
        'AI threat detection',
        'Automated incident response',
        'Vulnerability scanning',
        'Security monitoring',
        'Compliance reporting',
        'Employee training',
        'Risk assessment',
        '24/7 security operations'
      ],
      popular: true,
      icon: '🔒',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://security.ziontechgroup.com',
      marketPosition: 'Competitive with CrowdStrike ($8.99-23.99), SentinelOne ($2.50-5.00), and Carbon Black ($6.00-8.00)',
      targetAudience: 'Businesses of all sizes, IT professionals, and security teams'
    }
  ];

  const marketInsights = [
    {
      title: 'Growing Market Demand',
      description: 'The micro SaaS market is experiencing rapid growth, with businesses increasingly seeking specialized, affordable solutions over complex enterprise platforms.',
      stats: '32% annual growth rate'
    },
    {
      title: 'Competitive Pricing',
      description: 'Our pricing strategy positions us competitively in the market while maintaining high value and quality standards.',
      stats: '15-40% below market average'
    },
    {
      title: 'Focus on Specialization',
      description: 'Unlike broad platforms, our micro SaaS solutions focus on specific use cases, delivering deeper functionality and better user experience.',
      stats: '3x faster time-to-value'
    },
    {
      title: 'Comprehensive Portfolio',
      description: '              25 specialized solutions covering content creation, design, analytics, marketing, business operations, and emerging technologies.',
      stats: '25 micro SaaS solutions'
    },
    {
      title: 'Enterprise-Grade Features',
      description: 'Each solution includes advanced features, API access, and enterprise-grade reliability at micro SaaS pricing.',
      stats: 'Enterprise features, micro pricing'
    },
    {
      title: 'Rapid Implementation',
      description: 'Focused solutions mean faster setup, easier onboarding, and quicker time to value compared to complex enterprise platforms.',
      stats: '50% faster implementation'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Specialized Business Solutions</title>
        <meta name="description" content="Discover our specialized micro SaaS solutions for content creation, design systems, performance monitoring, SEO automation, chatbots, and business intelligence. Competitive pricing with 14-day free trials." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Specialized business solutions with competitive pricing and free trials." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Micro SaaS Solutions
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Specialized Tools for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Every Business Need</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-12">
              25 specialized micro SaaS solutions covering content creation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, API infrastructure, AI video editing, image generation, 
              customer support automation, code assistance, e-commerce analytics, legal automation, sales automation, 
              HR management, financial planning, supply chain optimization, and cybersecurity. Focused, affordable solutions 
              that deliver specific value without the complexity of enterprise platforms. Start with a free trial and scale as you grow.
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Business Categories */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Solutions for Every Business Need
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our micro SaaS portfolio is organized into key business categories, ensuring you find the right solution for your specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'Content & Marketing',
                  services: ['AI Content Generator', 'Email Marketing', 'Social Media Scheduler', 'SEO Automation', 'AI Video Editor'],
                  icon: '📢',
                  color: 'from-pink-500 to-rose-600'
                },
                {
                  category: 'Design & Development',
                  services: ['Design System Builder', 'App Performance Monitor', 'API Gateway', 'Project Management', 'AI Code Assistant'],
                  icon: '⚡',
                  color: 'from-violet-500 to-purple-600'
                },
                {
                  category: 'Analytics & Intelligence',
                  services: ['Business Intelligence Hub', 'Customer Feedback Analytics', 'App Performance Monitor', 'E-commerce Analytics'],
                  icon: '📊',
                  color: 'from-emerald-500 to-green-600'
                },
                {
                  category: 'Business Operations',
                  services: ['Invoice & Billing', 'AI Chatbot Platform', 'Project Management', 'Customer Support', 'AI Sales Assistant'],
                  icon: '🏢',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  category: 'AI & Automation',
                  services: ['AI Image Generator', 'AI HR Assistant', 'AI Financial Advisor', 'AI Cybersecurity'],
                  icon: '🤖',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  category: 'Specialized Solutions',
                  services: ['Supply Chain Optimizer', 'Legal Assistant', 'Security Suite', 'Performance Monitoring'],
                  icon: '🎯',
                  color: 'from-orange-500 to-red-600'
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-400 text-sm flex items-center">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
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
                              Our portfolio of 25 specialized solutions covers the most critical business needs, from content creation 
              to cybersecurity. Each solution is designed to solve a specific business problem with deep functionality 
              and competitive pricing.
              </p>
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

        {/* Pricing Comparison */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Competitive Pricing Analysis
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                See how our micro SaaS solutions compare to enterprise alternatives in terms of cost and value.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Enterprise Platforms',
                  description: 'Complex, feature-rich platforms with high costs',
                  pros: ['Comprehensive features', 'Enterprise support', 'Advanced integrations'],
                  cons: ['High cost ($500-5000/month)', 'Complex setup', 'Overkill for small teams', 'Long implementation time'],
                  color: 'from-red-500 to-pink-600',
                  icon: '🏢'
                },
                {
                  title: 'Our Micro SaaS',
                  description: 'Focused solutions with enterprise-grade features',
                  pros: ['Affordable pricing ($39-159/month)', 'Focused functionality', 'Quick setup', 'Enterprise features'],
                  cons: ['Single-purpose solutions', 'May need multiple tools'],
                  color: 'from-green-500 to-emerald-600',
                  icon: '🎯',
                  popular: true
                },
                {
                  title: 'DIY Solutions',
                  description: 'Building solutions in-house or using free tools',
                  pros: ['No monthly cost', 'Full customization', 'Complete control'],
                  cons: ['Development time', 'Maintenance overhead', 'Limited features', 'No support'],
                  color: 'from-gray-500 to-slate-600',
                  icon: '🔧'
                }
              ].map((option, index) => (
                <div key={index} className={`bg-gray-800 rounded-2xl p-8 border ${option.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-gray-700'} transition-all duration-300`}>
                  {option.popular && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Recommended
                    </div>
                  )}
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-400 mb-6">{option.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {option.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="text-gray-300 text-sm flex items-center">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Considerations</h4>
                    <ul className="space-y-2">
                      {option.cons.map((con, conIndex) => (
                        <li key={conIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-4 h-4 text-red-400 mr-2 flex-shrink-0">✕</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                <strong className="text-white">Bottom Line:</strong> Our micro SaaS solutions provide enterprise-grade features 
                at 70-90% lower cost, with faster implementation and focused functionality.
              </p>
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Explore All Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
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
              Choose from our portfolio of 25 specialized solutions. All services include comprehensive documentation, 
              dedicated support, enterprise-grade reliability, and 14-day free trials. Start with one solution 
              and add more as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
              >
                View All Pricing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}