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
    // New Micro SaaS Services
    {
      icon: '📝',
      title: 'AI Content Generator Pro',
      description: 'Professional AI-powered content creation tool for blogs, marketing copy, and social media.',
      features: [
        'SEO-optimized content generation',
        'Multi-language support',
        'Brand voice customization',
        'Content templates library',
        'Plagiarism-free writing'
      ],
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      pricing: '$49/month',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      icon: '🎨',
      title: 'Design System Builder',
      description: 'Create and maintain consistent design systems with automated component generation.',
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
      link: 'https://ziontechgroup.com/design-system-builder'
    },
    {
      icon: '📱',
      title: 'App Performance Monitor',
      description: 'Real-time monitoring and optimization for web and mobile applications.',
      features: [
        'Performance metrics tracking',
        'Error monitoring & alerting',
        'User experience analytics',
        'Automated optimization',
        'Custom dashboards'
      ],
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      gradient: 'from-amber-400 to-orange-500',
      pricing: '$39/month',
      link: 'https://ziontechgroup.com/app-performance-monitor'
    },
    {
      icon: '🔍',
      title: 'SEO Automation Suite',
      description: 'Comprehensive SEO tools with automated optimization and reporting.',
      features: [
        'Keyword research automation',
        'On-page optimization',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-green-500',
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/seo-automation-suite'
    },
    {
      icon: '💬',
      title: 'AI Chatbot Platform',
      description: 'Intelligent chatbot solutions for customer support and lead generation.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Analytics & insights',
        'Custom training data',
        '24/7 availability'
      ],
      color: 'bg-gradient-to-br from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      gradient: 'from-sky-400 to-blue-500',
      pricing: '$69/month',
      link: 'https://ziontechgroup.com/ai-chatbot-platform'
    },
    {
      icon: '📊',
      title: 'Business Intelligence Hub',
      description: 'Turn your data into actionable insights with automated reporting and analytics.',
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
      link: 'https://ziontechgroup.com/business-intelligence-hub'
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
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
      link: 'https://ziontechgroup.com/email-marketing-automation'
    },
    {
      icon: '📱',
      title: 'Social Media Scheduler',
      description: 'Automate your social media presence across multiple platforms.',
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
      link: 'https://ziontechgroup.com/social-media-scheduler'
    },
    {
      icon: '💰',
      title: 'Invoice & Billing Manager',
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
      link: 'https://ziontechgroup.com/invoice-billing-manager'
    },
    // New enhanced services
    {
      icon: '🎤',
      title: 'AI Meeting Transcription Pro',
      description: 'Transform meetings into actionable insights with AI-powered transcription and summarization.',
      features: [
        'Real-time transcription (15+ languages)',
        'AI-powered meeting summaries',
        'Action item & task extraction',
        'Speaker identification',
        'Integration with calendar & video platforms'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$59/month',
      link: 'https://ziontechgroup.com/ai-meeting-transcription'
    },
    {
      icon: '🧾',
      title: 'Automated Invoice Processing',
      description: 'Streamline financial operations with AI-powered invoice automation and approval workflows.',
      features: [
        'AI-powered data extraction',
        'Automated approval workflows',
        'Payment processing integration',
        'Fraud detection & validation',
        'Compliance & audit trails'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/automated-invoice-processing'
    },
    {
      icon: '📉',
      title: 'Customer Churn Prediction',
      description: 'Predict and prevent customer churn with AI-powered analytics and retention strategies.',
      features: [
        'AI-powered churn prediction',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Automated retention campaigns',
        'ROI tracking & reporting'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: '$79/month',
      link: 'https://ziontechgroup.com/customer-churn-prediction'
    },
    {
      icon: '🎯',
      title: 'AI-Powered Lead Scoring',
      description: 'Automate lead qualification with AI-powered scoring and conversion prediction.',
      features: [
        'AI-powered lead scoring',
        'Behavioral pattern analysis',
        'Conversion probability prediction',
        'Automated lead routing',
        'Performance analytics'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
      pricing: '$69/month',
      link: 'https://leads.ziontechgroup.com'
    },
    {
      icon: '📋',
      title: 'Project Management Hub',
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
      link: 'https://projects.ziontechgroup.com'
    },
    {
      icon: '🎫',
      title: 'Customer Support Ticketing',
      description: 'Organized customer support system with knowledge base and automation.',
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
      link: 'https://support.ziontechgroup.com'
    },
    {
      icon: '📈',
      title: 'Analytics Dashboard',
      description: 'Beautiful data visualization with drag-and-drop dashboard builder.',
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
      link: 'https://analytics.ziontechgroup.com'
    },
    // New Micro SaaS Services
    {
      icon: '🛡️',
      title: 'API Rate Limiter',
      description: 'Protect your APIs from abuse with intelligent rate limiting and DDoS protection.',
      features: [
        'Intelligent rate limiting algorithms',
        'DDoS protection & mitigation',
        'Geographic restrictions',
        'API key management',
        'Real-time monitoring & alerts'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: '$29/month',
      link: 'https://ziontechgroup.com/api-rate-limiter'
    },
    {
      icon: '✅',
      title: 'Email Validation Service',
      description: 'Clean your email lists with real-time validation and deliverability scoring.',
      features: [
        'Real-time email validation',
        'Syntax & format checking',
        'Domain & MX record verification',
        'Disposable email detection',
        'Bulk validation API'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$19/month',
      link: 'https://ziontechgroup.com/email-validation'
    },
    {
      icon: '📋',
      title: 'Form Builder Pro',
      description: 'Create powerful forms without coding with advanced features and integrations.',
      features: [
        'Drag & drop form builder',
        'Conditional logic & branching',
        '100+ field types',
        'File uploads & storage',
        'Payment integrations'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$25/month',
      link: 'https://ziontechgroup.com/form-builder'
    },
    {
      icon: '🧾',
      title: 'Invoice Generator',
      description: 'Professional invoicing made simple with automated reminders and payment processing.',
      features: [
        'Professional invoice templates',
        'Automated payment reminders',
        'Multiple payment gateways',
        'Tax calculation & compliance',
        'Client portal access'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
      pricing: '$15/month',
      link: 'https://ziontechgroup.com/invoice-generator'
    },
    {
      icon: '🔐',
      title: 'Password Manager API',
      description: 'Enterprise-grade password management with secure sharing and compliance features.',
      features: [
        'Secure password generation',
        'Team password sharing',
        'Role-based access control',
        'Audit trails & logging',
        'SSO integration'
      ],
      color: 'bg-gradient-to-br from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      gradient: 'from-gray-400 to-slate-500',
      pricing: '$35/month',
      link: 'https://ziontechgroup.com/password-manager'
    },
    {
      icon: '📸',
      title: 'Screenshot API',
      description: 'Convert any website to an image with our fast, reliable screenshot API service.',
      features: [
        'High-quality screenshots',
        'Multiple viewport sizes',
        'PDF generation support',
        'Custom CSS injection',
        'JavaScript rendering'
      ],
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
      pricing: '$12/month',
      link: 'https://ziontechgroup.com/screenshot-api'
    },
    {
      icon: '🔗',
      title: 'Webhook Manager',
      description: 'Ensure reliable webhook delivery with retry logic, monitoring, and detailed analytics.',
      features: [
        'Automatic retry logic',
        'Webhook monitoring & alerts',
        'Delivery status tracking',
        'Custom retry policies',
        'Webhook testing tools'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      pricing: '$22/month',
      link: 'https://ziontechgroup.com/webhook-manager'
    },
    {
      icon: '🔄',
      title: 'File Converter API',
      description: 'Convert documents, images, and media files between hundreds of formats.',
      features: [
        '100+ file format support',
        'Batch processing',
        'High-quality conversions',
        'Custom conversion options',
        'Secure file handling'
      ],
      color: 'bg-gradient-to-br from-lime-500 to-green-600',
      textColor: 'text-lime-400',
      gradient: 'from-lime-400 to-green-500',
      pricing: '$18/month',
      link: 'https://ziontechgroup.com/file-converter'
    },
    {
      icon: '📱',
      title: 'QR Code Generator',
      description: 'Generate custom QR codes with tracking, analytics, and dynamic content management.',
      features: [
        'Custom QR code design',
        'Dynamic QR codes',
        'Click tracking & analytics',
        'Bulk QR code generation',
        'API access for developers'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
      pricing: '$8/month',
      link: 'https://ziontechgroup.com/qr-code-generator'
    },
    // Additional Enhanced Micro SaaS Services
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
      link: 'https://video.ziontechgroup.com'
    },
    {
      icon: '☁️',
      title: 'Cloud Cost Optimizer',
      description: 'Intelligent cloud cost management and optimization to reduce spending by 30%.',
      features: [
        'Real-time cost monitoring',
        'Automated resource optimization',
        'Cost anomaly detection',
        'Multi-cloud support',
        'Budget alerts & controls'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$99/month',
      link: 'https://cloudcost.ziontechgroup.com'
    },
    {
      icon: '⚖️',
      title: 'AI Legal Assistant',
      description: 'Legal document automation with AI assistance for contracts and compliance.',
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
      link: 'https://legal.ziontechgroup.com'
    },
    {
      icon: '💼',
      title: 'AI Sales Assistant',
      description: 'AI-powered sales automation to boost conversions and close more deals.',
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
      pricing: '$89/month',
      link: 'https://sales.ziontechgroup.com'
    },
    {
      icon: '👥',
      title: 'AI HR Assistant',
      description: 'Streamline HR operations with AI-powered automation and insights.',
      features: [
        'AI-powered candidate screening',
        'Automated interview scheduling',
        'Performance review automation',
        'Employee onboarding workflows',
        'HR analytics & reporting'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
      pricing: '$69/month',
      link: 'https://hr.ziontechgroup.com'
    },
    {
      icon: '🧮',
      title: 'AI Accounting Assistant',
      description: 'Smart financial management with automated accounting tasks and insights.',
      features: [
        'Automated expense categorization',
        'Invoice processing with OCR',
        'Real-time financial reporting',
        'Tax preparation assistance',
        'Bank reconciliation'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$59/month',
      link: 'https://accounting.ziontechgroup.com'
    },
    {
      icon: '🎯',
      title: 'AI Customer Success Platform',
      description: 'Proactive customer success with churn prediction and retention automation.',
      features: [
        'Churn prediction analytics',
        'Automated health scoring',
        'Customer journey mapping',
        'Success playbook automation',
        'Customer feedback analysis'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      pricing: '$79/month',
      link: 'https://customersuccess.ziontechgroup.com'
    },
    {
      icon: '📊',
      title: 'AI Product Analytics',
      description: 'Deep product insights with AI-powered user behavior analysis.',
      features: [
        'User behavior tracking',
        'Feature usage analytics',
        'A/B testing automation',
        'User segmentation',
        'Funnel analysis'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      pricing: '$89/month',
      link: 'https://productanalytics.ziontechgroup.com'
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
              20+ Specialized Business Solutions
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