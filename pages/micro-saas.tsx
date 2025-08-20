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
      link: 'https://contentgen.zion.app',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators'
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
      link: 'https://design.zion.app',
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
      link: 'https://monitor.zion.app',
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
      link: 'https://seo.zion.app',
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
      link: 'https://chatbot.zion.app',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($0-2500), and ManyChat ($0-15)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses'
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
      link: 'https://bi.zion.app',
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
      link: 'https://email.zion.app',
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
      link: 'https://social.zion.app',
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
      link: 'https://feedback.zion.app',
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
      link: 'https://billing.zion.app',
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
      link: 'https://projects.zion.app',
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
      link: 'https://api.zion.app',
      marketPosition: 'Competitive with Kong ($250-500), AWS API Gateway ($3.50/million calls), and Azure API Management ($0.50-4.00)',
      targetAudience: 'Developers, DevOps engineers, and platform architects'
    },
    {
      name: "AI Content Generator",
      tagline: "Create engaging content in seconds",
      price: 49,
      period: "month",
      description: "AI-powered content creation tool that generates high-quality articles, social media posts, and marketing copy.",
      features: [
        "AI-powered content generation",
        "Multiple content types",
        "SEO optimization",
        "Plagiarism detection",
        "Content scheduling"
      ],
      popular: false,
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
      link: "https://aicontent.zion.app",
      marketPosition: "Leading AI content creation platform",
      targetAudience: "Content creators, marketers, small businesses"
    },
    {
      name: "Email Automation Studio",
      tagline: "Automate your email marketing campaigns",
      price: 59,
      period: "month",
      description: "Advanced email automation platform with AI-powered personalization, behavioral triggers, and comprehensive analytics.",
      features: [
        "AI-powered personalization",
        "Advanced segmentation",
        "Behavioral triggers",
        "A/B testing automation",
        "Email template builder"
      ],
      popular: true,
      icon: "📧",
      color: "from-blue-500 to-indigo-600",
      textColor: "text-blue-400",
      link: "https://emailstudio.zion.app",
      marketPosition: "Premium email automation solution",
      targetAudience: "Marketing teams, e-commerce businesses, agencies"
    },
    {
      name: "Social Media Scheduler",
      tagline: "Schedule and optimize your social media presence",
      price: 29,
      period: "month",
      description: "Comprehensive social media management tool with AI content optimization and multi-platform scheduling.",
      features: [
        "Multi-platform scheduling",
        "AI content optimization",
        "Best time to post analysis",
        "Content calendar management",
        "Hashtag research tools"
      ],
      popular: false,
      icon: "📱",
      color: "from-green-500 to-teal-600",
      textColor: "text-green-400",
      link: "https://socialscheduler.zion.app",
      marketPosition: "Affordable social media automation",
      targetAudience: "Small businesses, influencers, marketing teams"
    },
    {
      name: "Project Management Hub",
      tagline: "Streamline your team collaboration",
      price: 45,
      period: "month",
      description: "Comprehensive project management solution with task tracking, team collaboration, and time management tools.",
      features: [
        "Task management & tracking",
        "Team collaboration tools",
        "Time tracking & reporting",
        "Project templates",
        "File sharing & storage"
      ],
      popular: false,
      icon: "📋",
      color: "from-purple-500 to-pink-600",
      textColor: "text-purple-400",
      link: "https://projecthub.zion.app",
      marketPosition: "Team collaboration platform",
      targetAudience: "Project managers, development teams, agencies"
    },
    {
      name: "Invoice & Billing Manager",
      tagline: "Simplify your billing and invoicing",
      price: 25,
      period: "month",
      description: "Professional invoicing and billing solution with automated reminders and multi-currency support.",
      features: [
        "Professional invoice templates",
        "Payment tracking",
        "Automated reminders",
        "Multi-currency support",
        "Tax calculation"
      ],
      popular: false,
      icon: "💰",
      color: "from-yellow-500 to-orange-600",
      textColor: "text-yellow-400",
      link: "https://invoice.zion.app",
      marketPosition: "Entry-level billing solution",
      targetAudience: "Freelancers, small businesses, consultants"
    },
    {
      name: "Customer Support Suite",
      tagline: "Deliver exceptional customer support",
      price: 75,
      period: "month",
      description: "Complete customer support platform with ticket management, knowledge base, and live chat integration.",
      features: [
        "Ticket management system",
        "Knowledge base builder",
        "Live chat integration",
        "Customer satisfaction surveys",
        "Automated responses"
      ],
      popular: false,
      icon: "🎧",
      color: "from-red-500 to-pink-600",
      textColor: "text-red-400",
      link: "https://support.zion.app",
      marketPosition: "Enterprise support solution",
      targetAudience: "Customer support teams, SaaS companies, e-commerce"
    },
    {
      name: "HR Management System",
      tagline: "Streamline your HR operations",
      price: 85,
      period: "month",
      description: "Comprehensive HR management platform for employee database, time tracking, and performance management.",
      features: [
        "Employee database management",
        "Time & attendance tracking",
        "Leave management",
        "Performance reviews",
        "Payroll integration"
      ],
      popular: false,
      icon: "👥",
      color: "from-indigo-500 to-blue-600",
      textColor: "text-indigo-400",
      link: "https://hr.zion.app",
      marketPosition: "Professional HR solution",
      targetAudience: "HR departments, growing companies, remote teams"
    },
    {
      name: "Inventory Management Pro",
      tagline: "Optimize your inventory operations",
      price: 55,
      period: "month",
      description: "Advanced inventory management system with real-time tracking, stock alerts, and supplier management.",
      features: [
        "Real-time inventory tracking",
        "Stock level alerts",
        "Purchase order management",
        "Supplier management",
        "Barcode scanning"
      ],
      popular: false,
      icon: "📦",
      color: "from-teal-500 to-cyan-600",
      textColor: "text-teal-400",
      link: "https://inventory.zion.app",
      marketPosition: "Mid-market inventory solution",
      targetAudience: "Retail businesses, warehouses, manufacturers"
    }
  ];

  // Market analysis data
  const marketAnalysis = {
    "Content & Marketing": {
      marketSize: "$15.2B",
      growthRate: "12.4%",
      keyTrends: ["AI-powered personalization", "Automation focus", "Multi-channel integration"]
    },
    "Design & Development": {
      marketSize: "$8.7B",
      growthRate: "15.8%",
      keyTrends: ["Low-code platforms", "Collaboration tools", "Cloud-first approach"]
    },
    "Business Operations": {
      marketSize: "$22.1B",
      growthRate: "9.6%",
      keyTrends: ["Process automation", "Data-driven decisions", "Remote work support"]
    },
    "Customer Experience": {
      marketSize: "$18.9B",
      growthRate: "11.2%",
      keyTrends: ["Omnichannel support", "AI chatbots", "Personalization"]
    },
    "Data & Analytics": {
      marketSize: "$12.4B",
      growthRate: "14.7%",
      keyTrends: ["Real-time insights", "Predictive analytics", "Data visualization"]
    }
  };

  // Competitive advantages
  const competitiveAdvantages = [
    {
      title: "Specialized Focus",
      description: "Each service is designed for a specific business need, ensuring deep functionality and expertise.",
      icon: "🎯"
    },
    {
      title: "AI Integration",
      description: "Advanced AI capabilities across all services for automation and intelligent insights.",
      icon: "🤖"
    },
    {
      title: "Seamless Integration",
      description: "All services work together seamlessly with unified authentication and data sharing.",
      icon: "🔗"
    },
    {
      title: "Transparent Pricing",
      description: "Clear, predictable pricing with no hidden fees or complex tier structures.",
      icon: "💰"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and regular security audits.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support with dedicated success managers.",
      icon: "🔄"
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
              12 specialized micro SaaS solutions covering content creation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, and API infrastructure. Focused, affordable solutions 
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
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{advantage.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                    {advantage.icon}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: 'Content & Marketing',
                  services: ['AI Content Generator', 'Email Marketing', 'Social Media Scheduler', 'SEO Automation'],
                  icon: '📢',
                  color: 'from-pink-500 to-rose-600'
                },
                {
                  category: 'Design & Development',
                  services: ['Design System Builder', 'App Performance Monitor', 'API Gateway', 'Project Management'],
                  icon: '⚡',
                  color: 'from-violet-500 to-purple-600'
                },
                {
                  category: 'Analytics & Intelligence',
                  services: ['Business Intelligence Hub', 'Customer Feedback Analytics', 'App Performance Monitor'],
                  icon: '📊',
                  color: 'from-emerald-500 to-green-600'
                },
                {
                  category: 'Business Operations',
                  services: ['Invoice & Billing', 'AI Chatbot Platform', 'Project Management', 'Customer Feedback'],
                  icon: '🏢',
                  color: 'from-blue-500 to-indigo-600'
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
                Our portfolio of 12 specialized solutions covers the most critical business needs, from content creation 
                to API management. Each solution is designed to solve a specific business problem with deep functionality 
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

        {/* Market Analysis Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Market Analysis & Trends
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the micro SaaS landscape and positioning our services for maximum impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {Object.entries(marketAnalysis).map(([category, data], index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-2xl font-bold text-blue-400">{data.marketSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Growth Rate:</span>
                      <span className="text-xl font-bold text-green-400">{data.growthRate}</span>
                    </div>
                    <div className="pt-4">
                      <span className="text-gray-400 text-sm">Key Trends:</span>
                      <ul className="mt-2 space-y-1">
                        {data.keyTrends.map((trend, trendIndex) => (
                          <li key={trendIndex} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {trend}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Advantages Section */}
        <div className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the unique advantages that set our specialized solutions apart from complex enterprise platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose from our portfolio of 12 specialized solutions. All services include comprehensive documentation, 
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