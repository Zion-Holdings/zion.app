import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'Intelligent Decision Making',
        'Automated Workflows'
      ],
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      features: [
        'Multi-Cloud Strategy',
        'Auto-Scaling Systems',
        'Load Balancing',
        'Disaster Recovery',
        'Performance Optimization'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions that protect your data and ensure regulatory compliance.',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Data Encryption',
        'Access Control'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Real-time Analytics',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Modeling',
        'Performance Metrics'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: '🚀',
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated pipelines and deployment strategies.',
      features: [
        'Continuous Integration',
        'Automated Testing',
        'Deployment Automation',
        'Infrastructure as Code',
        'Monitoring & Alerting'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: '🌐',
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions and strategic consulting.',
      features: [
        'Technology Strategy',
        'Process Optimization',
        'Change Management',
        'Digital Innovation',
        'Legacy Modernization'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
    },
    // Enhanced Micro SaaS Services
    {
      icon: '📝',
      title: 'AI Content Generator Pro',
      description: 'Professional AI-powered content creation tool for blogs, marketing copy, and social media with SEO optimization.',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (15+ languages)',
        'Brand voice customization',
        'Content templates library (100+ templates)',
        'Plagiarism-free writing guarantee'
      ],
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      pricing: '$49/month',
      link: 'https://ziontechgroup.com/ai-content-generator',
      trialDays: 14,
      category: 'Content & Marketing'
    },
    {
      icon: '🔍',
      title: 'AI Code Review Assistant',
      description: 'Intelligent code review automation with AI-powered analysis, security detection, and quality scoring.',
      features: [
        'AI-powered code analysis',
        'Security vulnerability detection',
        'Code quality scoring',
        'Automated review comments',
        'Integration with GitHub, GitLab'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-blue-500',
      pricing: '$59/month',
      link: 'https://ziontechgroup.com/ai-code-review-assistant',
      trialDays: 14,
      category: 'Development & DevOps'
    },
    {
      icon: '📚',
      title: 'API Documentation Generator',
      description: 'Automated API documentation generation with interactive explorers and multiple format support.',
      features: [
        'Auto-generated API docs',
        'Interactive API explorer',
        'Multiple format support (OpenAPI, Postman)',
        'Version control integration',
        'Custom branding & themes'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: '$39/month',
      link: 'https://ziontechgroup.com/api-documentation-generator',
      trialDays: 14,
      category: 'Development & DevOps'
    },
    {
      icon: '🗄️',
      title: 'Database Performance Monitor',
      description: 'Real-time database optimization with intelligent insights and automated recommendations.',
      features: [
        'Real-time performance monitoring',
        'Query optimization suggestions',
        'Index optimization',
        'Performance bottleneck detection',
        'Automated alerting'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      pricing: '$79/month',
      link: 'https://ziontechgroup.com/database-performance-monitor',
      trialDays: 14,
      category: 'Development & DevOps'
    },
    {
      icon: '💬',
      title: 'AI Customer Feedback Analyzer',
      description: 'Intelligent feedback insights with AI-powered sentiment analysis and trend identification.',
      features: [
        'AI-powered sentiment analysis',
        'Feedback categorization',
        'Trend identification',
        'Customer satisfaction scoring',
        'Automated reporting'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
      pricing: '$49/month',
      link: 'https://ziontechgroup.com/ai-customer-feedback-analyzer',
      trialDays: 14,
      category: 'Customer Experience'
    },
    {
      icon: '🔍',
      title: 'AI-Powered SEO Suite',
      description: 'Complete SEO automation platform with AI-powered optimization and performance tracking.',
      features: [
        'AI keyword research & analysis',
        'On-page optimization recommendations',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking & alerts'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/ai-seo-suite',
      trialDays: 14,
      category: 'Content & Marketing'
    },
    {
      icon: '🎬',
      title: 'AI Video Editor Pro',
      description: 'Professional video editing with AI-powered automation and enhancement tools.',
      features: [
        'AI-powered scene detection',
        'Automated video enhancement',
        'Smart subtitle generation',
        'Background music matching',
        'Video templates library'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: '$79/month',
      link: 'https://ziontechgroup.com/ai-video-editor-pro',
      trialDays: 14,
      category: 'Content & Marketing'
    },
    {
      icon: '💼',
      title: 'AI Sales Intelligence Platform',
      description: 'AI-powered sales automation with lead scoring, follow-up automation, and sales intelligence.',
      features: [
        'Intelligent lead scoring',
        'Automated follow-up sequences',
        'Sales conversation analysis',
        'Pipeline optimization',
        'Revenue forecasting'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
      pricing: '$99/month',
      link: 'https://ziontechgroup.com/ai-sales-intelligence',
      trialDays: 14,
      category: 'Sales & CRM'
    },
    {
      icon: '⚖️',
      title: 'AI Legal Document Generator',
      description: 'Legal document automation with AI assistance, compliance checking, and electronic signatures.',
      features: [
        'Contract template library',
        'AI-powered document review',
        'Legal compliance checking',
        'Electronic signature integration',
        'Document version control'
      ],
      color: 'bg-gradient-to-br from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      gradient: 'from-gray-400 to-slate-500',
      pricing: '$149/month',
      link: 'https://ziontechgroup.com/ai-legal-document-generator',
      trialDays: 14,
      category: 'Legal & Compliance'
    },
    {
      icon: '👥',
      title: 'AI HR Assistant Pro',
      description: 'Streamline HR operations with AI-powered recruitment and employee management.',
      features: [
        'AI-powered candidate screening',
        'Automated interview scheduling',
        'Performance review automation',
        'Employee onboarding workflows',
        'HR analytics & reporting'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      pricing: '$69/month',
      link: 'https://ziontechgroup.com/ai-hr-assistant-pro',
      trialDays: 14,
      category: 'Human Resources'
    },
    {
      icon: '📊',
      title: 'Business Intelligence Hub',
      description: 'Data-driven insights platform with advanced analytics and automated reporting.',
      features: [
        'Data visualization tools',
        'Automated reporting',
        'KPI dashboards',
        'Predictive analytics',
        'Data integration'
      ],
      color: 'bg-gradient-to-br from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      gradient: 'from-rose-400 to-pink-500',
      pricing: '$99/month',
      link: 'https://ziontechgroup.com/business-intelligence-hub',
      trialDays: 14,
      category: 'Analytics & Data'
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation Pro',
      description: 'Smart email campaigns with AI-powered automation and personalization.',
      features: [
        'AI-powered subject line optimization',
        'Smart audience segmentation',
        'Behavioral triggers',
        'A/B testing automation',
        'Email template library'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-blue-500',
      pricing: '$29/month',
      link: 'https://ziontechgroup.com/email-marketing-automation-pro',
      trialDays: 14,
      category: 'Content & Marketing'
    },
    {
      icon: '📱',
      title: 'Social Media Scheduler Pro',
      description: 'Automate your social media presence across multiple platforms with AI-powered optimization.',
      features: [
        'Multi-platform scheduling',
        'AI-powered optimal timing',
        'Content calendar management',
        'Hashtag suggestions',
        'Analytics & insights'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: '$19/month',
      link: 'https://ziontechgroup.com/social-media-scheduler-pro',
      trialDays: 14,
      category: 'Content & Marketing'
    },
    {
      icon: '💰',
      title: 'Invoice & Billing Manager Pro',
      description: 'Streamline your invoicing process with professional templates and automation.',
      features: [
        'Professional invoice templates',
        'Automated payment reminders',
        'Multiple payment gateways',
        'Expense tracking',
        'Financial reporting'
      ],
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
      pricing: '$25/month',
      link: 'https://ziontechgroup.com/invoice-billing-manager-pro',
      trialDays: 14,
      category: 'Finance & Operations'
    },
    {
      icon: '📋',
      title: 'Project Management Hub Pro',
      description: 'Simple project management for teams with intuitive collaboration tools.',
      features: [
        'Task management & tracking',
        'Team collaboration tools',
        'Time tracking',
        'File sharing & storage',
        'Project templates'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      pricing: '$35/month',
      link: 'https://ziontechgroup.com/project-management-hub-pro',
      trialDays: 14,
      category: 'Productivity & Collaboration'
    },
    {
      icon: '🎫',
      title: 'Customer Support Ticketing Pro',
      description: 'Organized customer support system with automated responses and analytics.',
      features: [
        'Ticket management system',
        'Knowledge base creation',
        'Automated responses',
        'Customer satisfaction surveys',
        'Performance analytics'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: '$45/month',
      link: 'https://ziontechgroup.com/customer-support-ticketing-pro',
      trialDays: 14,
      category: 'Customer Experience'
    },
    {
      icon: '📈',
      title: 'Analytics Dashboard Pro',
      description: 'Beautiful data visualization with drag-and-drop simplicity and real-time connections.',
      features: [
        'Drag-and-drop dashboard builder',
        '100+ chart types',
        'Real-time data connections',
        'Custom branding',
        'Team sharing & collaboration'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$55/month',
      link: 'https://ziontechgroup.com/analytics-dashboard-pro',
      trialDays: 14,
      category: 'Analytics & Data'
    },
    {
      icon: '💰',
      title: 'AI Financial Advisor Pro',
      description: 'Intelligent financial planning and investment advice for individuals and businesses.',
      features: [
        'Personalized financial planning',
        'Investment portfolio analysis',
        'Risk assessment & management',
        'Tax optimization strategies',
        'Retirement planning tools'
      ],
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/ai-financial-advisor-pro',
      trialDays: 14,
      category: 'Finance & Operations'
    },
    {
      icon: '🎨',
      title: 'AI Design System Builder Pro',
      description: 'Automated design system creation with component generation and team collaboration.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools'
      ],
      color: 'bg-gradient-to-br from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      gradient: 'from-violet-400 to-purple-500',
      pricing: '$79/month',
      link: 'https://ziontechgroup.com/ai-design-system-builder-pro',
      trialDays: 14,
      category: 'Design & Creative'
    },
    {
      icon: '📱',
      title: 'AI Performance Monitor Pro',
      description: 'Real-time application monitoring with performance insights and optimization.',
      features: [
        'Real-time performance monitoring',
        'Error tracking & alerting',
        'User experience analytics',
        'Performance optimization suggestions',
        'Custom dashboards'
      ],
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      gradient: 'from-amber-400 to-orange-500',
      pricing: '$39/month',
      link: 'https://ziontechgroup.com/ai-performance-monitor-pro',
      trialDays: 14,
      category: 'Development & DevOps'
    },
    {
      icon: '💬',
      title: 'AI Chatbot Platform Pro',
      description: 'Intelligent customer support automation with natural language processing.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Custom training data',
        'Analytics & insights',
        '24/7 availability'
      ],
      color: 'bg-gradient-to-br from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      gradient: 'from-sky-400 to-blue-500',
      pricing: '$69/month',
      link: 'https://ziontechgroup.com/ai-chatbot-platform-pro',
      trialDays: 14,
      category: 'Customer Experience'
    },
    {
      icon: '🛡️',
      title: 'AI Security Monitor Pro',
      description: 'Advanced security monitoring with AI-powered threat detection and automated response.',
      features: [
        'AI-powered threat detection',
        'Real-time security monitoring',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance reporting'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: '$129/month',
      link: 'https://ziontechgroup.com/ai-security-monitor-pro',
      trialDays: 14,
      category: 'Security & Compliance'
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
        <title>Services | Zion Tech Group - AI-Powered Solutions & Cloud Infrastructure</title>
        <meta name="description" content="Comprehensive technology services including AI automation, cloud infrastructure, security, data analytics, DevOps, and digital transformation solutions." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="AI-powered automation, cloud infrastructure, security, and digital transformation services." />
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
            Our Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            From AI-powered automation to cloud infrastructure, we deliver cutting-edge solutions that drive innovation and transform businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              What We Offer
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of technology services designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {service.pricing && (
                      <p className="mt-6 text-lg font-semibold text-white">
                        Starting at {service.pricing}
                      </p>
                    )}
                    {service.link && (
                      <Button
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                      >
                        Learn More
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Portfolio Promotion */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              Micro SaaS Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              50+ Specialized Business Solutions
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Our micro SaaS portfolio delivers focused value for specific business needs. Each solution is designed to solve 
              real problems with transparent pricing, 14-day free trials, and enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-white mb-2">Content Creation</h3>
              <p className="text-green-100 text-sm">AI-powered writing & video editing</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-lg font-bold text-white mb-2">Design & UX</h3>
              <p className="text-green-100 text-sm">Design systems & collaboration</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">Analytics & Data</h3>
              <p className="text-green-100 text-sm">Business intelligence & insights</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Business Operations</h3>
              <p className="text-green-100 text-sm">HR, accounting & project management</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="/micro-saas"
                variant="secondary"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
              >
                Explore Full Portfolio
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
              >
                View Pricing
              </Button>
            </div>
            <p className="text-green-200 text-sm">
              All services include 14-day free trials, comprehensive documentation, and dedicated support
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gradient-cursor">
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
            Ready to Get Started?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let&apos;s discuss how our services can help transform your business and accelerate your digital journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get a Quote
            </Button>
            <Button
              href="/case-studies"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}