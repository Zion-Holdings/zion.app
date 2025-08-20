import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ServicesPage() {
  const services = [
    // AI & Machine Learning Services
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
      pricing: '$199/month',
      link: 'https://ziontechgroup.com/ai-automation',
      trialDays: 14,
      category: 'AI & Machine Learning'
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
      pricing: '$299/month',
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      trialDays: 14,
      category: 'Cloud & Infrastructure'
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
      pricing: '$249/month',
      link: 'https://ziontechgroup.com/security-compliance',
      trialDays: 14,
      category: 'Security & Compliance'
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
      pricing: '$179/month',
      link: 'https://ziontechgroup.com/data-analytics',
      trialDays: 14,
      category: 'Data & Analytics'
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
      pricing: '$159/month',
      link: 'https://ziontechgroup.com/devops-cicd',
      trialDays: 14,
      category: 'Development & DevOps'
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
      pricing: '$399/month',
      link: 'https://ziontechgroup.com/digital-transformation',
      trialDays: 14,
      category: 'Consulting & Strategy'
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
      pricing: '$129/month',
      link: 'https://ziontechgroup.com/business-intelligence-hub',
      trialDays: 14,
      category: 'Data & Analytics'
    },
    // NEW INNOVATIVE MICRO SAAS SERVICES
    {
      icon: '🧠',
      title: 'AI Research Assistant',
      description: 'Advanced AI-powered research tool for market analysis, competitive intelligence, and trend forecasting.',
      features: [
        'Real-time market monitoring',
        'Competitive intelligence gathering',
        'Trend prediction algorithms',
        'Automated research reports',
        'Data source integration'
      ],
      color: 'bg-gradient-to-br from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      gradient: 'from-violet-400 to-purple-500',
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/ai-research-assistant',
      trialDays: 14,
      category: 'AI & Research'
    },
    {
      icon: '🎯',
      title: 'Predictive Analytics Engine',
      description: 'Machine learning-powered predictive analytics for business forecasting and risk assessment.',
      features: [
        'Advanced ML algorithms',
        'Real-time forecasting',
        'Risk assessment models',
        'Scenario planning tools',
        'Automated insights'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$199/month',
      link: 'https://ziontechgroup.com/predictive-analytics-engine',
      trialDays: 14,
      category: 'AI & Analytics'
    },
    {
      icon: '🔐',
      title: 'Zero-Trust Security Platform',
      description: 'Next-generation cybersecurity with zero-trust architecture and AI-powered threat detection.',
      features: [
        'Zero-trust network access',
        'AI threat detection',
        'Behavioral analytics',
        'Automated incident response',
        'Compliance automation'
      ],
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-orange-500',
      pricing: '$299/month',
      link: 'https://ziontechgroup.com/zero-trust-security-platform',
      trialDays: 14,
      category: 'Security & Compliance'
    },
    {
      icon: '🌍',
      title: 'Global CDN & Edge Computing',
      description: 'Worldwide content delivery network with edge computing capabilities and intelligent routing.',
      features: [
        'Global edge locations',
        'Intelligent routing',
        'Edge computing functions',
        'DDoS protection',
        'Performance optimization'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-teal-500',
      pricing: '$159/month',
      link: 'https://ziontechgroup.com/global-cdn-edge-computing',
      trialDays: 14,
      category: 'Cloud & Infrastructure'
    },
    {
      icon: '📱',
      title: 'Mobile App Analytics Suite',
      description: 'Comprehensive mobile app analytics with user behavior tracking and performance optimization.',
      features: [
        'User behavior analytics',
        'Performance monitoring',
        'Crash reporting',
        'User engagement metrics',
        'A/B testing tools'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$69/month',
      link: 'https://ziontechgroup.com/mobile-app-analytics-suite',
      trialDays: 14,
      category: 'Mobile & Analytics'
    },
    {
      icon: '🤝',
      title: 'AI Customer Service Bot',
      description: 'Intelligent customer service automation with natural language processing and sentiment analysis.',
      features: [
        'Natural language processing',
        'Sentiment analysis',
        'Multi-language support',
        'Integration with CRM systems',
        '24/7 availability'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-cyan-500',
      pricing: '$79/month',
      link: 'https://ziontechgroup.com/ai-customer-service-bot',
      trialDays: 14,
      category: 'Customer Experience'
    },
    {
      icon: '📈',
      title: 'Growth Hacking Platform',
      description: 'Data-driven growth hacking tools with automated experimentation and optimization.',
      features: [
        'A/B testing automation',
        'Conversion optimization',
        'Growth analytics',
        'User acquisition tools',
        'Retention optimization'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-yellow-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-yellow-500',
      pricing: '$119/month',
      link: 'https://ziontechgroup.com/growth-hacking-platform',
      trialDays: 14,
      category: 'Marketing & Growth'
    },
    {
      icon: '🔍',
      title: 'AI-Powered Fraud Detection',
      description: 'Advanced fraud detection system using machine learning and behavioral analysis.',
      features: [
        'ML-powered fraud detection',
        'Behavioral analysis',
        'Real-time monitoring',
        'Automated alerts',
        'Risk scoring'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: '$189/month',
      link: 'https://ziontechgroup.com/ai-powered-fraud-detection',
      trialDays: 14,
      category: 'Security & Compliance'
    },
    {
      icon: '📊',
      title: 'Real-Time Data Streaming',
      description: 'High-performance real-time data streaming platform for IoT and live analytics.',
      features: [
        'Real-time data processing',
        'IoT device integration',
        'Live analytics dashboards',
        'Scalable streaming',
        'Data transformation'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      pricing: '$149/month',
      link: 'https://ziontechgroup.com/real-time-data-streaming',
      trialDays: 14,
      category: 'Data & IoT'
    },
    {
      icon: '🎨',
      title: 'AI Design Assistant',
      description: 'AI-powered design tool for creating professional graphics, logos, and marketing materials.',
      features: [
        'AI-generated designs',
        'Brand consistency tools',
        'Template library',
        'Collaboration features',
        'Export in multiple formats'
      ],
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      pricing: '$59/month',
      link: 'https://ziontechgroup.com/ai-design-assistant',
      trialDays: 14,
      category: 'Design & Creative'
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automation.',
      features: [
        'AI personalization',
        'Automated workflows',
        'A/B testing',
        'Analytics & reporting',
        'Integration capabilities'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$49/month',
      link: 'https://ziontechgroup.com/email-marketing-automation',
      trialDays: 14,
      category: 'Marketing & Automation'
    },
    {
      icon: '🔐',
      title: 'Blockchain Identity Management',
      description: 'Decentralized identity management system using blockchain technology for secure authentication.',
      features: [
        'Decentralized identity',
        'Blockchain security',
        'Multi-factor authentication',
        'Identity verification',
        'Privacy protection'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
      pricing: '$129/month',
      link: 'https://ziontechgroup.com/blockchain-identity-management',
      trialDays: 14,
      category: 'Blockchain & Security'
    },
    {
      icon: '📱',
      title: 'Progressive Web App Builder',
      description: 'Build lightning-fast progressive web apps with automated optimization and deployment.',
      features: [
        'PWA optimization',
        'Offline functionality',
        'Performance optimization',
        'Automated deployment',
        'Analytics integration'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/progressive-web-app-builder',
      trialDays: 14,
      category: 'Development & Web'
    },
    {
      icon: '🤖',
      title: 'AI Chatbot Platform',
      description: 'Enterprise-grade chatbot platform with natural language processing and multi-channel support.',
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      pricing: '$99/month',
      link: 'https://ziontechgroup.com/ai-chatbot-platform',
      trialDays: 14,
      category: 'AI & Communication'
    },
    {
      icon: '📊',
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics platform with AI-powered insights and reporting.',
      features: [
        'Multi-platform analytics',
        'AI-powered insights',
        'Competitor analysis',
        'Automated reporting',
        'ROI tracking'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-purple-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-purple-500',
      pricing: '$79/month',
      link: 'https://ziontechgroup.com/social-media-analytics',
      trialDays: 14,
      category: 'Marketing & Analytics'
    },
    {
      icon: '🔍',
      title: 'Voice Search Optimization',
      description: 'AI-powered voice search optimization for websites and applications.',
      features: [
        'Voice search optimization',
        'Natural language processing',
        'Schema markup automation',
        'Voice analytics',
        'Performance tracking'
      ],
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-teal-500',
      pricing: '$69/month',
      link: 'https://ziontechgroup.com/voice-search-optimization',
      trialDays: 14,
      category: 'SEO & Voice'
    },
    {
      icon: '📱',
      title: 'Mobile App Testing Platform',
      description: 'Automated mobile app testing platform with AI-powered test case generation.',
      features: [
        'Automated testing',
        'AI test case generation',
        'Cross-platform testing',
        'Performance testing',
        'Bug reporting'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/mobile-app-testing-platform',
      trialDays: 14,
      category: 'Testing & QA'
    },
    {
      icon: '🌐',
      title: 'API Gateway & Management',
      description: 'Enterprise API gateway with advanced management, security, and analytics capabilities.',
      features: [
        'API gateway management',
        'Security & authentication',
        'Rate limiting',
        'Analytics & monitoring',
        'Developer portal'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      pricing: '$199/month',
      link: 'https://ziontechgroup.com/api-gateway-management',
      trialDays: 14,
      category: 'API & Integration'
    },
    {
      icon: '📊',
      title: 'Data Warehouse Automation',
      description: 'Automated data warehouse solution with ETL processes and business intelligence.',
      features: [
        'Automated ETL processes',
        'Data modeling',
        'Business intelligence',
        'Data governance',
        'Scalable architecture'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: '$299/month',
      link: 'https://ziontechgroup.com/data-warehouse-automation',
      trialDays: 14,
      category: 'Data & Analytics'
    },
    {
      icon: '🔐',
      title: 'Compliance Automation Suite',
      description: 'Automated compliance management for GDPR, HIPAA, SOC 2, and other regulatory requirements.',
      features: [
        'Multi-regulation support',
        'Automated compliance checks',
        'Audit trail management',
        'Risk assessment',
        'Reporting automation'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$249/month',
      link: 'https://ziontechgroup.com/compliance-automation-suite',
      trialDays: 14,
      category: 'Compliance & Risk'
    },
    {
      icon: '🚀',
      title: 'Microservices Orchestration',
      description: 'Advanced microservices management platform with service mesh and orchestration capabilities.',
      features: [
        'Service mesh management',
        'Load balancing',
        'Service discovery',
        'Circuit breaker patterns',
        'Distributed tracing'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      pricing: '$179/month',
      link: 'https://ziontechgroup.com/microservices-orchestration',
      trialDays: 14,
      category: 'Architecture & DevOps'
    },
    {
      icon: '📱',
      title: 'IoT Device Management',
      description: 'Comprehensive IoT platform for device management, monitoring, and data collection.',
      features: [
        'Device provisioning',
        'Real-time monitoring',
        'Data collection',
        'Remote management',
        'Security protocols'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      pricing: '$159/month',
      link: 'https://ziontechgroup.com/iot-device-management',
      trialDays: 14,
      category: 'IoT & Hardware'
    },
    {
      icon: '🎯',
      title: 'Customer Journey Analytics',
      description: 'AI-powered customer journey mapping and optimization platform.',
      features: [
        'Journey mapping',
        'Behavioral analysis',
        'Conversion optimization',
        'Personalization engine',
        'ROI tracking'
      ],
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      pricing: '$119/month',
      link: 'https://ziontechgroup.com/customer-journey-analytics',
      trialDays: 14,
      category: 'Customer Experience'
    },
    {
      icon: '🔍',
      title: 'AI-Powered Search Engine',
      description: 'Enterprise search solution with AI-powered relevance and natural language processing.',
      features: [
        'AI-powered relevance',
        'Natural language queries',
        'Faceted search',
        'Search analytics',
        'Custom ranking'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$139/month',
      link: 'https://ziontechgroup.com/ai-powered-search-engine',
      trialDays: 14,
      category: 'Search & Discovery'
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

      {/* Contact Information Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Get in Touch
          </h2>
          <p className="text-responsive-md text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with our innovative micro SaaS solutions? Contact us today for a personalized consultation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
              <p className="text-blue-400 text-lg font-semibold mb-2">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available Mon-Fri, 9AM-6PM EST</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-blue-400 text-lg font-semibold mb-2">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">We respond within 2 hours</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-white mb-4">Address</h3>
              <p className="text-blue-400 text-lg font-semibold mb-2">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown DE 19709, USA</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-2xl hover-glow"
            >
              Schedule Consultation
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-2xl"
            >
              View Pricing Plans
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>50+ Real Micro SaaS Services</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>14-Day Free Trials</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>24/7 AI Support</span>
              </div>
            </div>
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