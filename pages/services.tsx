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
      link: 'https://contentgen.zion.app'
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
      link: 'https://design.zion.app'
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
      link: 'https://monitor.zion.app'
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
      link: 'https://seo.zion.app'
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
      link: 'https://chatbot.zion.app'
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
      link: 'https://bi.zion.app'
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with advanced personalization and automation.',
      features: [
        'AI-powered personalization',
        'Advanced segmentation',
        'A/B testing automation',
        'Behavioral triggers',
        'Email template library'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-blue-500',
      pricing: '$59/month',
      link: 'https://email.zion.app'
    },
    {
      icon: '📱',
      title: 'Social Media Scheduler',
      description: 'Intelligent social media management with AI-powered content suggestions.',
      features: [
        'Multi-platform scheduling',
        'AI-powered content suggestions',
        'Best time to post optimization',
        'Content calendar management',
        'Performance analytics'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: '$39/month',
      link: 'https://social.zion.app'
    },
    {
      icon: '💡',
      title: 'Customer Feedback Analytics',
      description: 'Collect and analyze customer feedback with sentiment analysis and insights.',
      features: [
        'Multi-channel feedback collection',
        'Sentiment analysis',
        'Feedback categorization',
        'Action item tracking',
        'Customer satisfaction metrics'
      ],
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
      pricing: '$79/month',
      link: 'https://feedback.zion.app'
    },
    {
      icon: '💰',
      title: 'Invoice & Billing Manager',
      description: 'Streamlined financial operations with automated invoicing and payment processing.',
      features: [
        'Automated invoicing',
        'Payment processing integration',
        'Recurring billing',
        'Financial reporting',
        'Tax calculation'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$49/month',
      link: 'https://billing.zion.app'
    },
    {
      icon: '📋',
      title: 'Project Management Hub',
      description: 'Collaborative project management with task tracking and team collaboration tools.',
      features: [
        'Task management & tracking',
        'Team collaboration tools',
        'Project templates',
        'Time tracking',
        'Resource allocation'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      pricing: '$69/month',
      link: 'https://projects.zion.app'
    },
    {
      icon: '🔌',
      title: 'API Gateway & Management',
      description: 'Enterprise API infrastructure with security, monitoring, and developer tools.',
      features: [
        'API design & documentation',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'API analytics & monitoring',
        'Developer portal'
      ],
      color: 'bg-gradient-to-br from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      gradient: 'from-gray-400 to-slate-500',
      pricing: '$129/month',
      link: 'https://api.zion.app'
    },
    // New Micro SaaS Services
    {
      icon: '🎬',
      title: 'AI Video Editor Pro',
      description: 'Professional AI-powered video editing with automated enhancement, effects, and scene detection.',
      features: [
        'AI-powered scene detection',
        'Automated video enhancement',
        'Smart background removal',
        'Auto-caption generation',
        'Professional templates library'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: '$79/month',
      link: 'https://video.zion.app'
    },
    {
      icon: '🎨',
      title: 'AI Image Generator Studio',
      description: 'Create stunning, high-resolution images with advanced AI models and professional editing tools.',
      features: [
        'Multiple AI models (DALL-E, Midjourney, Stable Diffusion)',
        'High-resolution output (up to 4K)',
        'Style transfer and customization',
        'Batch image generation',
        'Commercial usage rights'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      pricing: '$59/month',
      link: 'https://images.zion.app'
    },
    {
      icon: '🎧',
      title: 'Customer Support Automation',
      description: 'AI-powered customer service platform with intelligent ticket routing and response generation.',
      features: [
        'AI-powered ticket classification',
        'Automated response generation',
        'Smart routing algorithms',
        'Knowledge base management',
        'Customer satisfaction tracking'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$89/month',
      link: 'https://support.zion.app'
    },
    {
      icon: '💻',
      title: 'AI Code Assistant Pro',
      description: 'Boost developer productivity with AI-powered code generation, debugging, and optimization.',
      features: [
        'AI code generation',
        'Smart debugging assistance',
        'Code review automation',
        'Performance optimization',
        'Multi-language support'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      pricing: '$89/month',
      link: 'https://code.zion.app'
    },
    {
      icon: '🛒',
      title: 'E-commerce Analytics Suite',
      description: 'Comprehensive analytics and optimization for e-commerce businesses with real-time insights.',
      features: [
        'Sales performance tracking',
        'Customer behavior analysis',
        'Conversion optimization',
        'Inventory management',
        'Marketing attribution'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      pricing: '$79/month',
      link: 'https://ecommerce.zion.app'
    },
    {
      icon: '⚖️',
      title: 'AI Legal Assistant',
      description: 'Intelligent legal document automation and contract analysis with compliance monitoring.',
      features: [
        'Legal document generation',
        'Contract analysis & review',
        'Compliance monitoring',
        'Legal research automation',
        'Document templates library'
      ],
      color: 'bg-gradient-to-br from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      gradient: 'from-slate-400 to-gray-500',
      pricing: '$149/month',
      link: 'https://legal.zion.app'
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

      {/* Micro SaaS Portfolio Highlight */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container-cursor relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Micro SaaS Portfolio
            </div>
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              20 Specialized Business Solutions
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive micro SaaS portfolio covers the most in-demand business needs with focused, 
              affordable solutions that deliver enterprise-grade features at micro SaaS pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Content & Media Services */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                📝
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Content & Media</h3>
              <p className="text-gray-400 text-center mb-6">
                AI-powered content generation, video editing, and image creation for modern businesses.
              </p>
              <div className="text-center space-y-2">
                <div className="text-green-400 font-medium">AI Content Generator - $49/month</div>
                <div className="text-green-400 font-medium">AI Video Editor - $79/month</div>
                <div className="text-green-400 font-medium">AI Image Generator - $59/month</div>
              </div>
            </div>

            {/* Business Operations */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚙️
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Business Operations</h3>
              <p className="text-gray-400 text-center mb-6">
                Streamlined solutions for project management, billing, and customer support automation.
              </p>
              <div className="text-center space-y-2">
                <div className="text-blue-400 font-medium">Project Management - $69/month</div>
                <div className="text-blue-400 font-medium">Billing Manager - $49/month</div>
                <div className="text-blue-400 font-medium">Support Automation - $89/month</div>
              </div>
            </div>

            {/* Analytics & Intelligence */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                📊
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Analytics & Intelligence</h3>
              <p className="text-gray-400 text-center mb-6">
                Data-driven insights and business intelligence for informed decision-making.
              </p>
              <div className="text-center space-y-2">
                <div className="text-purple-400 font-medium">BI Hub - $99/month</div>
                <div className="text-purple-400 font-medium">E-commerce Analytics - $79/month</div>
                <div className="text-purple-400 font-medium">Customer Feedback - $79/month</div>
              </div>
            </div>

            {/* Marketing & SEO */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Marketing & SEO</h3>
              <p className="text-gray-400 text-center mb-6">
                Comprehensive marketing automation and SEO optimization tools.
              </p>
              <div className="text-center space-y-2">
                <div className="text-orange-400 font-medium">Email Marketing - $59/month</div>
                <div className="text-orange-400 font-medium">SEO Suite - $89/month</div>
                <div className="text-orange-400 font-medium">Social Media - $39/month</div>
              </div>
            </div>

            {/* Development & API */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                💻
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Development & API</h3>
              <p className="text-gray-400 text-center mb-6">
                Developer tools and API infrastructure for modern applications.
              </p>
              <div className="text-center space-y-2">
                <div className="text-cyan-400 font-medium">AI Code Assistant - $89/month</div>
                <div className="text-cyan-400 font-medium">API Gateway - $129/month</div>
                <div className="text-cyan-400 font-medium">Performance Monitor - $39/month</div>
              </div>
            </div>

            {/* Specialized Solutions */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-slate-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚖️
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Specialized Solutions</h3>
              <p className="text-gray-400 text-center mb-6">
                Niche solutions for specific industries and business needs.
              </p>
              <div className="text-center space-y-2">
                <div className="text-slate-400 font-medium">AI Legal Assistant - $149/month</div>
                <div className="text-slate-400 font-medium">Design System Builder - $79/month</div>
                <div className="text-slate-400 font-medium">AI Chatbot Platform - $69/month</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Each solution is built with enterprise-grade technology, offers comprehensive features, 
                includes 14-day free trials, and provides dedicated support. Our pricing is 15-40% below 
                market average while maintaining the quality and reliability you expect from enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/micro-saas"
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Explore All Services
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