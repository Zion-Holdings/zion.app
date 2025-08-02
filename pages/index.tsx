import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Link from 'next/link'
import NotificationSystem from '../components/NotificationSystem'

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const [displayedSections, setDisplayedSections] = useState<any[]>([])
  const [nextSectionId, setNextSectionId] = useState(9)
  const [isFooterPersistent, setIsFooterPersistent] = useState(false)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Waitlist signup:', email)
    setEmail('')
  }

  // Base sections data
  const baseSections = useMemo(() => [
    {
      id: 0,
      type: 'hero',
      title: 'Zion - The First Free AI-Powered Marketplace',
      subtitle: 'High-Tech Products • IT Services • AI Talents • Innovation • Equipment',
      description: 'The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment.',
      cta: 'Start Trading Now',
      ctaLink: '/auth/signup',
      secondaryCta: 'Explore Marketplace',
      secondaryCtaLink: '/marketplace',
      bgClass: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    },
    {
      id: 1,
      type: 'marketplace-overview',
      title: 'Marketplace Categories',
      items: [
        { title: 'IT Services', description: 'Professional IT consulting and development', link: '/services', icon: '💻', color: 'from-blue-500 to-cyan-500' },
        { title: 'AI Talents', description: 'Expert AI developers and consultants', link: '/talents', icon: '🤖', color: 'from-purple-500 to-pink-500' },
        { title: 'Equipment', description: 'High-performance computing hardware', link: '/equipment', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
        { title: 'Innovation', description: 'Cutting-edge technology solutions', link: '/products', icon: '🚀', color: 'from-orange-500 to-red-500' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-800 to-slate-900'
    },
    {
      id: 2,
      type: 'featured-services',
      title: 'Featured IT Services',
      items: [
        { title: 'AI Development', description: 'Custom AI solutions and machine learning', link: '/services/ai-model-development', price: '$150-500/hr', rating: 4.9 },
        { title: 'Cloud Migration', description: 'Seamless cloud infrastructure setup', link: '/services/cloud-migration-services', price: '$2000-15000', rating: 4.8 },
        { title: 'Security Auditing', description: 'Comprehensive security assessments', link: '/services/security-auditing', price: '$1000-8000', rating: 4.9 },
        { title: 'Performance Optimization', description: 'System and application optimization', link: '/services/performance-optimization', price: '$800-3000', rating: 4.7 }
      ],
      bgClass: 'bg-gradient-to-br from-purple-900 to-slate-900'
    },
    {
      id: 3,
      type: 'featured-talents',
      title: 'Top AI Talents',
      items: [
        { name: 'Dr. Sarah Chen', specialization: 'Machine Learning Expert', experience: '8+ years', rating: 4.9, link: '/talents' },
        { name: 'Alex Rodriguez', specialization: 'Deep Learning Specialist', experience: '6+ years', rating: 4.8, link: '/talents' },
        { name: 'Dr. Michael Kim', specialization: 'AI Research Scientist', experience: '10+ years', rating: 4.9, link: '/talents' },
        { name: 'Emma Thompson', specialization: 'Computer Vision Engineer', experience: '5+ years', rating: 4.7, link: '/talents' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-900 to-purple-900'
    },
    {
      id: 4,
      type: 'featured-equipment',
      title: 'Premium Equipment',
      items: [
        { name: 'GPU Clusters', description: 'High-performance computing for AI workloads', price: '$5000-50000', link: '/equipment' },
        { name: 'Quantum Computers', description: 'Next-generation quantum processing', price: '$100000+', link: '/equipment' },
        { name: 'Edge Computing Devices', description: 'IoT and edge processing solutions', price: '$1000-10000', link: '/equipment' },
        { name: 'Data Storage Systems', description: 'Enterprise-grade storage solutions', price: '$2000-25000', link: '/equipment' }
      ],
      bgClass: 'bg-gradient-to-br from-green-900 to-slate-900'
    },
    {
      id: 5,
      type: 'blog-highlights',
      title: 'Latest Insights',
      items: [
        { title: 'Digital Transformation Strategies', excerpt: 'How AI is revolutionizing enterprise operations', link: '/blog/digital-transformation-strategies', category: 'Strategy' },
        { title: 'Cybersecurity in the Age of AI', excerpt: 'Protecting your business with AI-powered security', link: '/blog/cybersecurity-in-the-age-of-ai', category: 'Security' },
        { title: 'Machine Learning in Healthcare', excerpt: 'AI applications transforming healthcare delivery', link: '/blog/machine-learning-in-healthcare', category: 'Healthcare' },
        { title: 'Blockchain for Supply Chain', excerpt: 'Transparent and secure supply chain management', link: '/blog/blockchain-for-supply-chain-management', category: 'Blockchain' }
      ],
      bgClass: 'bg-gradient-to-br from-blue-900 to-slate-900'
    },
    {
      id: 6,
      type: 'ai-service-matcher',
      title: 'AI Service Matcher',
      subtitle: 'Find the Perfect Services with AI',
      description: 'Tell us what you need, and our AI will find the perfect services and talents for your project. Get personalized recommendations in seconds.',
      features: [
        'AI-Powered Matching',
        'Instant Results',
        'Precision Matching',
        'Budget Optimization'
      ],
      cta: 'Try AI Matcher',
      ctaLink: '/ai-service-matcher',
      bgClass: 'bg-gradient-to-br from-purple-900 via-pink-900 to-slate-900'
    },
    {
      id: 7,
      type: 'chat-services',
      title: 'AI Chat Services',
      items: [
        { title: 'Business Intelligence Chat', description: 'Get insights from your data', link: '/services/business-intelligence-chat', icon: '📊' },
        { title: 'Security Auditing Chat', description: 'AI-powered security analysis', link: '/services/security-auditing-chat', icon: '🔒' },
        { title: 'System Administration Chat', description: 'Expert system management advice', link: '/services/system-administration-chat', icon: '⚙️' },
        { title: 'Edge AI Implementation', description: 'Edge computing solutions', link: '/services/edge-ai-implementation', icon: '🌐' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 to-slate-900'
    },
    {
      id: 7,
      type: 'real-time-chat',
      title: 'Real-Time Chat System',
      description: 'Connect with users, service providers, and AI assistants in real-time. Get instant support, discuss projects, and build your professional network.',
      cta: 'Start Chatting',
      ctaLink: '/real-time-chat',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/real-time-chat',
      features: [
        { icon: '💬', title: 'Live Communication', description: 'Chat with users and service providers in real-time' },
        { icon: '🤖', title: 'AI Assistant Chat', description: 'Get instant help from our intelligent AI assistant' },
        { icon: '👥', title: 'Community Building', description: 'Build your professional network and share experiences' }
      ],
      bgClass: 'bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900'
    },
    {
      id: 8,
      type: 'notifications',
      title: 'Smart Notification System',
      description: 'Stay updated with real-time notifications about marketplace activities, service updates, and important announcements.',
      cta: 'View Notifications',
      ctaLink: '/notifications',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/notifications',
      features: [
        { icon: '🔔', title: 'Real-Time Alerts', description: 'Get instant notifications for marketplace activities' },
        { icon: '📱', title: 'Smart Filtering', description: 'Filter and search notifications by type and status' },
        { icon: '⚡', title: 'Instant Updates', description: 'Never miss important service and talent updates' }
      ],
      bgClass: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900'
    },
    {
      id: 9,
      type: 'equipment-rental',
      title: 'Equipment Rental Platform',
      description: 'Rent high-performance computing equipment, networking gear, and specialized hardware for your projects.',
      cta: 'Browse Equipment',
      ctaLink: '/equipment-rental',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/equipment-rental',
      features: [
        { icon: '💻', title: 'High-Performance Computing', description: 'Access cutting-edge AI training and quantum systems' },
        { icon: '🌐', title: 'Networking Equipment', description: 'Enterprise-grade networking and security hardware' },
        { icon: '⚡', title: 'Flexible Rental Terms', description: 'Daily, weekly, and monthly rental options available' }
      ],
      bgClass: 'bg-gradient-to-br from-green-900 via-emerald-900 to-green-900'
    },
    {
      id: 10,
      type: 'payment-processing',
      title: 'Secure Payment Processing',
      description: 'Bank-level security with instant processing, multiple payment methods, and comprehensive financial management.',
      cta: 'Start Processing',
      ctaLink: '/payment-processing',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/payment-processing',
      features: [
        { icon: '🔒', title: 'Bank-Level Security', description: 'End-to-end encryption and fraud protection' },
        { icon: '⚡', title: 'Instant Processing', description: 'Real-time payments with immediate confirmations' },
        { icon: '🌍', title: 'Global Payments', description: 'Multiple currencies and international transactions' }
      ],
      bgClass: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900'
    },
    {
      id: 11,
      type: 'advanced-search',
      title: 'Advanced Search & Filter',
      description: 'Powerful search and filter system to find exactly what you need across services, talents, equipment, and products.',
      cta: 'Start Searching',
      ctaLink: '/advanced-search',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/advanced-search',
      features: [
        { icon: '🔍', title: 'Smart Search', description: 'Advanced search across all marketplace items' },
        { icon: '⚙️', title: 'Precise Filters', description: 'Filter by category, price, rating, and location' },
        { icon: '📊', title: 'Real-time Results', description: 'Instant search results with live filtering' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900'
    },
    {
      id: 12,
      type: 'review-system',
      title: 'Review & Rating System',
      description: 'Comprehensive review and rating system to build trust and help users make informed decisions.',
      cta: 'Write Review',
      ctaLink: '/review-system',
      secondaryCta: 'Browse Reviews',
      secondaryCtaLink: '/review-system',
      features: [
        { icon: '⭐', title: 'Star Ratings', description: '5-star rating system with detailed feedback' },
        { icon: '📝', title: 'Detailed Reviews', description: 'Pros, cons, and comprehensive feedback' },
        { icon: '✓', title: 'Verified Reviews', description: 'Authentic reviews from verified users' }
      ],
      bgClass: 'bg-gradient-to-br from-yellow-900 via-orange-900 to-yellow-900'
    },
    {
      id: 13,
      type: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and business intelligence for marketplace performance tracking and insights.',
      cta: 'View Analytics',
      ctaLink: '/analytics-dashboard',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/analytics-dashboard',
      features: [
        { icon: '📊', title: 'Performance Metrics', description: 'Revenue, orders, conversion rates, and growth tracking' },
        { icon: '👥', title: 'User Behavior', description: 'Page views, user journey, and conversion analytics' },
        { icon: '🔍', title: 'Market Insights', description: 'Trending services, market gaps, and opportunities' }
      ],
      bgClass: 'bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-900'
    },
    {
      id: 14,
      type: 'user-profiles',
      title: 'User Profiles',
      description: 'Comprehensive user profiles with skills, experience, portfolio, and social connections.',
      cta: 'Browse Profiles',
      ctaLink: '/user-profiles',
      secondaryCta: 'Create Profile',
      secondaryCtaLink: '/auth/signup',
      features: [
        { icon: '👤', title: 'Detailed Profiles', description: 'Skills, experience, portfolio, and certifications' },
        { icon: '🔗', title: 'Social Connections', description: 'LinkedIn, GitHub, and professional networks' },
        { icon: '⭐', title: 'Verified Profiles', description: 'Authenticated profiles with trust indicators' }
      ],
      bgClass: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900'
    },
    {
      id: 15,
      type: 'multi-language',
      title: 'Multi-Language Support',
      description: 'Global accessibility with comprehensive multi-language support and translation system.',
      cta: 'Select Language',
      ctaLink: '/multi-language',
      secondaryCta: 'View Translations',
      secondaryCtaLink: '/multi-language',
      features: [
        { icon: '🌐', title: 'Global Accessibility', description: 'Multi-language interface and localized content' },
        { icon: '🔧', title: 'Translation Tools', description: 'Professional translation services and community contributions' },
        { icon: '📊', title: 'Language Progress', description: 'Real-time translation progress and quality assurance' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900'
    },
    {
      id: 16,
      type: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Comprehensive SEO tools for marketplace visibility, keyword research, and search engine performance.',
      cta: 'Optimize SEO',
      ctaLink: '/seo-optimization',
      secondaryCta: 'View Analytics',
      secondaryCtaLink: '/analytics-dashboard',
      features: [
        { icon: '🔍', title: 'Keyword Research', description: 'Advanced keyword analysis and trend tracking' },
        { icon: '🏷️', title: 'Meta Tag Optimization', description: 'Professional meta tag analysis and suggestions' },
        { icon: '📊', title: 'Performance Tracking', description: 'Real-time SEO performance and competitor analysis' }
      ],
      bgClass: 'bg-gradient-to-br from-orange-900 via-red-900 to-orange-900'
    },
    {
      id: 17,
      type: 'mobile-responsive',
      title: 'Mobile Responsive Design',
      description: 'Comprehensive mobile optimization with touch-friendly interfaces and responsive layouts.',
      cta: 'View Mobile Features',
      ctaLink: '/mobile-responsive',
      secondaryCta: 'Test Responsive',
      secondaryCtaLink: '/mobile-responsive',
      features: [
        { icon: '📱', title: 'Mobile-First Design', description: 'Touch-optimized interfaces and mobile-first approach' },
        { icon: '👆', title: 'Touch Optimization', description: 'Gesture controls and touch-friendly interactions' },
        { icon: '⚡', title: 'Mobile Performance', description: 'Optimized loading and performance for mobile devices' }
      ],
      bgClass: 'bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900'
    },
    {
      id: 18,
      type: 'service-marketplace',
      title: 'Service Marketplace',
      description: 'Comprehensive marketplace for professional services in AI, web development, mobile apps, and more.',
      cta: 'Browse Services',
      ctaLink: '/service-marketplace',
      secondaryCta: 'Post Request',
      secondaryCtaLink: '/post-request',
      features: [
        { icon: '🤖', title: 'AI Development', description: 'Machine learning, deep learning, and AI consulting services' },
        { icon: '🌐', title: 'Web Development', description: 'Full-stack web development and frontend services' },
        { icon: '📱', title: 'Mobile Development', description: 'iOS and Android mobile application development' }
      ],
      bgClass: 'bg-gradient-to-br from-violet-900 via-purple-900 to-violet-900'
    },
    {
      id: 19,
      type: 'talent-directory',
      title: 'Talent Directory',
      description: 'Connect with verified professionals and experts in AI, web development, mobile apps, and more.',
      cta: 'Browse Talents',
      ctaLink: '/talent-directory',
      secondaryCta: 'Join as Talent',
      secondaryCtaLink: '/join-talent',
      features: [
        { icon: '👨‍💻', title: 'Verified Professionals', description: 'Pre-screened and verified talent profiles' },
        { icon: '⭐', title: 'Expert Ratings', description: 'Detailed ratings and review system' },
        { icon: '📋', title: 'Portfolio Showcase', description: 'Professional portfolios and work samples' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900'
    },
    {
      id: 20,
      type: 'quote-requests',
      title: 'Quote Requests',
      description: 'Submit custom project requests and receive professional quotes from verified experts.',
      cta: 'Submit Request',
      ctaLink: '/quote-requests',
      secondaryCta: 'Browse Talents',
      secondaryCtaLink: '/talent-directory',
      features: [
        { icon: '📝', title: 'Custom Requests', description: 'Detailed project specifications and requirements' },
        { icon: '💰', title: 'Budget Planning', description: 'Flexible budget ranges and payment terms' },
        { icon: '⏱️', title: 'Timeline Management', description: 'Project timeline and milestone tracking' }
      ],
      bgClass: 'bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-900'
    },
    {
      id: 21,
      type: 'service-categories',
      title: 'Service Categories',
      description: 'Browse organized service categories and discover expert providers across all technical domains.',
      cta: 'Browse Categories',
      ctaLink: '/service-categories',
      secondaryCta: 'Browse Services',
      secondaryCtaLink: '/service-marketplace',
      features: [
        { icon: '📂', title: 'Organized Categories', description: 'Comprehensive service categorization and organization' },
        { icon: '📊', title: 'Category Analytics', description: 'Detailed statistics and performance metrics' },
        { icon: '🔍', title: 'Advanced Search', description: 'Search and filter by categories and subcategories' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900'
    },
    {
      id: 22,
      type: 'project-management',
      title: 'Project Management',
      description: 'Comprehensive project management platform with task tracking, team collaboration, and project analytics.',
      cta: 'Manage Projects',
      ctaLink: '/project-management',
      secondaryCta: 'View Analytics',
      secondaryCtaLink: '/project-management',
      features: [
        { icon: '📁', title: 'Project Tracking', description: 'Complete project lifecycle management and tracking' },
        { icon: '✅', title: 'Task Management', description: 'Task assignment, progress tracking, and milestone management' },
        { icon: '👥', title: 'Team Collaboration', description: 'Team member management and collaboration tools' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900'
    },
    {
      id: 23,
      type: 'smart-notifications',
      title: 'Smart Notifications',
      description: 'Intelligent notification system with AI-powered alerts, personalized recommendations, and automated management.',
      cta: 'View Notifications',
      ctaLink: '/smart-notifications',
      secondaryCta: 'Configure Settings',
      secondaryCtaLink: '/smart-notifications',
      features: [
        { icon: '🤖', title: 'AI-Powered Alerts', description: 'Intelligent notifications with AI analysis and personalization' },
        { icon: '📱', title: 'Multi-Channel Delivery', description: 'Email, push, SMS, and in-app notifications' },
        { icon: '⚙️', title: 'Smart Preferences', description: 'Advanced notification preferences and quiet hours' }
      ],
      bgClass: 'bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-900'
    },
    {
      id: 24,
      type: 'company-info',
      title: 'About Zion',
      items: [
        { title: 'Our Mission', description: 'Democratizing access to high-tech solutions', link: '/about' },
        { title: 'Contact Us', description: 'Get in touch with our team', link: '/contact' },
        { title: 'Request Quote', description: 'Get a custom quote for your project', link: '/quote-request' },
        { title: 'Admin Dashboard', description: 'Manage your marketplace presence', link: '/admin-dashboard' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-900 to-purple-900'
    },
    {
      id: 25,
      type: 'waitlist',
      title: 'Join the Waitlist',
      description: 'Be among the first to experience the future of AI-powered marketplace. Sign up for early access and exclusive benefits.',
      bgClass: 'bg-gradient-to-br from-purple-600/20 to-pink-600/20'
    },
    {
      id: 26,
      type: 'ai-powered-automation',
      title: 'AI-Powered Automation',
      description: 'Intelligent workflow automation with AI-driven process optimization and automated decision making.',
      cta: 'View Automation',
      ctaLink: '/ai-powered-automation',
      secondaryCta: 'Create Workflow',
      secondaryCtaLink: '/ai-powered-automation',
      features: [
        { icon: '⚙️', title: 'Workflow Automation', description: 'Intelligent workflow automation with AI optimization' },
        { icon: '🤖', title: 'AI Decision Making', description: 'Automated decision making with machine learning' },
        { icon: '📈', title: 'Process Optimization', description: 'AI-powered process optimization and efficiency' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900'
    },
    {
      id: 27,
      type: 'ai-powered-seo',
      title: 'AI-Powered SEO',
      description: 'Intelligent SEO optimization with AI-driven keyword analysis, content optimization, and performance tracking.',
      cta: 'View SEO',
      ctaLink: '/ai-powered-seo',
      secondaryCta: 'Start Analysis',
      secondaryCtaLink: '/ai-powered-seo',
      features: [
        { icon: '🔍', title: 'SEO Analysis', description: 'Comprehensive SEO analysis with AI-powered insights' },
        { icon: '🎯', title: 'Keyword Optimization', description: 'AI-driven keyword analysis and optimization' },
        { icon: '📝', title: 'Content Optimization', description: 'Intelligent content optimization and suggestions' }
      ],
      bgClass: 'bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900'
    },
    {
      id: 28,
      type: 'ai-powered-multi-language',
      title: 'AI-Powered Multi-Language',
      description: 'Intelligent multi-language support with AI-driven translation, cultural adaptation, and automated localization.',
      cta: 'View Languages',
      ctaLink: '/ai-powered-multi-language',
      secondaryCta: 'Start Translation',
      secondaryCtaLink: '/ai-powered-multi-language',
      features: [
        { icon: '🌐', title: 'Multi-Language Support', description: 'AI-powered translation and localization' },
        { icon: '🎭', title: 'Cultural Adaptation', description: 'Intelligent cultural adaptation and localization' },
        { icon: '🔄', title: 'Real-time Translation', description: 'Real-time translation with AI accuracy' }
      ],
      bgClass: 'bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900'
    },
    {
      id: 29,
      type: 'ai-powered-mobile-responsive',
      title: 'AI-Powered Mobile Responsive',
      description: 'Intelligent mobile optimization with AI-driven responsive design, performance monitoring, and adaptive layouts.',
      cta: 'View Mobile',
      ctaLink: '/ai-powered-mobile-responsive',
      secondaryCta: 'Start Optimization',
      secondaryCtaLink: '/ai-powered-mobile-responsive',
      features: [
        { icon: '📱', title: 'Mobile Optimization', description: 'AI-powered mobile performance optimization' },
        { icon: '📐', title: 'Responsive Design', description: 'Intelligent responsive design and adaptive layouts' },
        { icon: '⚡', title: 'Performance Monitoring', description: 'Real-time mobile performance monitoring' }
      ],
      bgClass: 'bg-gradient-to-br from-violet-900 via-purple-900 to-violet-900'
    },
    {
      id: 30,
      type: 'ai-powered-content-management',
      title: 'AI-Powered Content Management',
      description: 'Intelligent content creation, optimization, scheduling, and analytics with AI-driven content management.',
      cta: 'View Content',
      ctaLink: '/ai-powered-content-management',
      secondaryCta: 'Create Content',
      secondaryCtaLink: '/ai-powered-content-management',
      features: [
        { icon: '📝', title: 'Content Creation', description: 'AI-powered content creation and optimization' },
        { icon: '📋', title: 'Content Templates', description: 'Intelligent content templates and workflows' },
        { icon: '📈', title: 'Content Analytics', description: 'Advanced content analytics and insights' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900'
    },
    {
      id: 31,
      type: 'ai-powered-security',
      title: 'AI-Powered Security',
      description: 'Intelligent threat detection, fraud prevention, security monitoring, and AI-driven security analytics.',
      cta: 'View Security',
      ctaLink: '/ai-powered-security',
      secondaryCta: 'Configure Security',
      secondaryCtaLink: '/ai-powered-security',
      features: [
        { icon: '⚠️', title: 'Threat Detection', description: 'AI-powered threat detection and prevention' },
        { icon: '🔒', title: 'Security Policies', description: 'Intelligent security policies and compliance' },
        { icon: '📊', title: 'Security Analytics', description: 'Advanced security analytics and monitoring' }
      ],
      bgClass: 'bg-gradient-to-br from-red-900 via-orange-900 to-red-900'
    },
    {
      id: 32,
      type: 'ai-powered-testing',
      title: 'AI-Powered Testing',
      description: 'Intelligent test automation, quality assurance, performance testing, and AI-driven testing analytics.',
      cta: 'View Testing',
      ctaLink: '/ai-powered-testing',
      secondaryCta: 'Create Tests',
      secondaryCtaLink: '/ai-powered-testing',
      features: [
        { icon: '🧪', title: 'Test Automation', description: 'AI-powered test automation and generation' },
        { icon: '📋', title: 'Quality Assurance', description: 'Intelligent quality assurance and testing' },
        { icon: '⚡', title: 'Performance Testing', description: 'Advanced performance testing and analytics' }
      ],
      bgClass: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900'
    },
    {
      id: 33,
      type: 'ai-powered-customer-support',
      title: 'AI-Powered Customer Support',
      description: 'Intelligent customer service, ticket management, knowledge base, and AI-driven support analytics.',
      cta: 'View Support',
      ctaLink: '/ai-powered-customer-support',
      secondaryCta: 'Create Ticket',
      secondaryCtaLink: '/ai-powered-customer-support',
      features: [
        { icon: '🎫', title: 'Ticket Management', description: 'AI-powered ticket management and routing' },
        { icon: '📚', title: 'Knowledge Base', description: 'Intelligent knowledge base and self-service' },
        { icon: '👥', title: 'Agent Support', description: 'Advanced agent support and analytics' }
      ],
      bgClass: 'bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-900'
    },
    {
      id: 34,
      type: 'ai-powered-data-analytics',
      title: 'AI-Powered Data Analytics',
      description: 'Intelligent data analysis, business intelligence, predictive analytics, and AI-driven insights.',
      cta: 'View Analytics',
      ctaLink: '/ai-powered-data-analytics',
      secondaryCta: 'Create Analysis',
      secondaryCtaLink: '/ai-powered-data-analytics',
      features: [
        { icon: '🗄️', title: 'Data Sources', description: 'AI-powered data source management and integration' },
        { icon: '🔍', title: 'Data Analysis', description: 'Intelligent data analysis and insights generation' },
        { icon: '📈', title: 'Business Intelligence', description: 'Advanced business intelligence and reporting' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900'
    },
    {
      id: 35,
      type: 'company-info',
      title: 'About Zion',
      items: [
        { title: 'Our Mission', description: 'Democratizing access to high-tech solutions', link: '/about' },
        { title: 'Contact Us', description: 'Get in touch with our team', link: '/contact' },
        { title: 'Request Quote', description: 'Get a custom quote for your project', link: '/quote-request' },
        { title: 'Admin Dashboard', description: 'Manage your marketplace presence', link: '/admin-dashboard' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-900 to-purple-900'
    },
    {
      id: 36,
      type: 'ai-recommendations',
      title: 'AI-Powered Recommendations',
      description: 'Discover personalized recommendations powered by advanced machine learning algorithms. Get the best products, services, and talents tailored to your specific needs and preferences.',
      features: [
        '🎯 95% Accuracy',
        '⚡ Real-time Updates',
        '🧠 Deep Learning',
        '📊 Smart Analytics'
      ],
      cta: 'Get Recommendations',
      ctaLink: '/ai-powered-recommendations',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/ai-powered-recommendations',
      bgClass: 'bg-gradient-to-br from-purple-900 via-pink-900 to-slate-900'
    },
    {
      id: 37,
      type: 'ai-pricing-estimation',
      title: 'AI-Powered Pricing & Cost Estimation',
      description: 'Get intelligent pricing analysis, detailed cost breakdowns, and budget optimization recommendations powered by advanced AI algorithms and market data analysis.',
      features: [
        '💰 Smart Pricing',
        '📊 Market Analysis',
        '🎯 Budget Optimization',
        '⚡ Real-time Estimates'
      ],
      cta: 'Get Free Estimate',
      ctaLink: '/ai-powered-pricing-estimation',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/ai-powered-pricing-estimation',
      bgClass: 'bg-gradient-to-br from-green-900 via-blue-900 to-slate-900'
    },
    {
      id: 38,
      type: 'ai-learning-platform',
      title: 'AI-Powered Learning Platform',
      description: 'Master in-demand skills with personalized AI-powered courses, skill assessments, and certifications designed to accelerate your career growth in the tech marketplace.',
      features: [
        '🎓 Personalized Learning',
        '🤖 AI-Powered Assessment',
        '📜 Industry Certifications',
        '🚀 Career Acceleration'
      ],
      cta: 'Start Learning',
      ctaLink: '/ai-powered-learning-platform',
      secondaryCta: 'Take Assessment',
      secondaryCtaLink: '/ai-powered-learning-platform',
      bgClass: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900'
    },
    {
      id: 39,
      type: 'ai-loyalty-rewards',
      title: 'AI-Powered Loyalty & Rewards',
      description: 'Earn points, unlock badges, achieve milestones, and redeem exclusive rewards with our intelligent gamification system designed to enhance your marketplace experience.',
      features: [
        '🎯 Earn Points',
        '🏆 Unlock Badges',
        '🎁 Redeem Rewards',
        '🚀 Gamification'
      ],
      cta: 'Start Earning',
      ctaLink: '/ai-powered-loyalty-rewards',
      secondaryCta: 'View Rewards',
      secondaryCtaLink: '/ai-powered-loyalty-rewards',
      bgClass: 'bg-gradient-to-br from-orange-900 via-red-900 to-slate-900'
    },
    {
      id: 40,
      type: 'ai-wishlist-comparison',
      title: 'AI-Powered Wishlist & Comparison',
      description: 'Save items to your wishlist, compare them with intelligent AI analysis, and get personalized recommendations to make the best decisions for your projects.',
      features: [
        '💾 Save Items',
        '🔍 Compare',
        '🤖 AI Analysis',
        '🎯 Smart Recommendations'
      ],
      cta: 'Start Saving',
      ctaLink: '/ai-powered-wishlist-comparison',
      secondaryCta: 'View Wishlist',
      secondaryCtaLink: '/ai-powered-wishlist-comparison',
      bgClass: 'bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900'
    },
    {
      id: 41,
      type: 'ai-contract-legal',
      title: 'AI-Powered Contract & Legal Management',
      description: 'Generate contracts, ensure legal compliance, resolve disputes, and manage all legal aspects of your marketplace transactions with intelligent AI assistance.',
      features: [
        '📄 Generate Contracts',
        '⚖️ Legal Compliance',
        '🤝 Dispute Resolution',
        '🔍 AI Legal Assistant'
      ],
      cta: 'Create Contract',
      ctaLink: '/ai-powered-contract-legal',
      secondaryCta: 'Legal Templates',
      secondaryCtaLink: '/ai-powered-contract-legal',
      bgClass: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900'
    },
    {
      id: 42,
      type: 'ai-subscription-membership',
      title: 'AI-Powered Subscription & Membership',
      description: 'Choose from tiered memberships with AI-powered benefits, automated billing, and intelligent upgrade recommendations designed to maximize your marketplace success.',
      features: [
        '🎯 Tiered Plans',
        '🤖 AI Benefits',
        '💰 Smart Billing',
        '📈 Upgrade Recommendations'
      ],
      cta: 'View Plans',
      ctaLink: '/ai-powered-subscription-membership',
      secondaryCta: 'Contact Sales',
      secondaryCtaLink: '/ai-powered-subscription-membership',
      bgClass: 'bg-gradient-to-br from-amber-900 via-orange-900 to-slate-900'
    },
    {
      id: 43,
      type: 'waitlist',
      title: 'Join the Waitlist',
      description: 'Be among the first to experience the future of AI-powered marketplace. Sign up for early access and exclusive benefits.',
      bgClass: 'bg-gradient-to-br from-purple-600/20 to-pink-600/20'
    }
  ], [])

  // Initialize displayed sections with base sections
  useEffect(() => {
    setDisplayedSections(baseSections)
  }, [baseSections])

  // Generate additional sections for infinite scroll
  const generateAdditionalSections = useCallback(() => {
    const additionalSections = []
    const sectionTypes = [
      {
        type: 'featured-services',
        title: 'Advanced IT Solutions',
        items: [
          { title: 'Blockchain Development', description: 'Decentralized applications and smart contracts', link: '/services/blockchain-development', price: '$200-600/hr', rating: 4.8 },
          { title: 'IoT Integration', description: 'Internet of Things implementation', link: '/services/iot-integration', price: '$150-400/hr', rating: 4.7 },
          { title: 'Data Analytics', description: 'Big data processing and insights', link: '/services/data-analytics', price: '$180-450/hr', rating: 4.9 },
          { title: 'DevOps Automation', description: 'CI/CD pipeline optimization', link: '/services/devops-automation', price: '$120-350/hr', rating: 4.6 }
        ],
        bgClass: 'bg-gradient-to-br from-cyan-900 to-slate-900'
      },
      {
        type: 'featured-talents',
        title: 'Expert Consultants',
        items: [
          { name: 'Dr. Lisa Wang', specialization: 'Quantum Computing Expert', experience: '12+ years', rating: 4.9, link: '/talents' },
          { name: 'James Wilson', specialization: 'Blockchain Architect', experience: '7+ years', rating: 4.8, link: '/talents' },
          { name: 'Dr. Elena Petrova', specialization: 'Data Scientist', experience: '9+ years', rating: 4.9, link: '/talents' },
          { name: 'David Park', specialization: 'Cloud Solutions Architect', experience: '8+ years', rating: 4.7, link: '/talents' }
        ],
        bgClass: 'bg-gradient-to-br from-emerald-900 to-slate-900'
      },
      {
        type: 'featured-equipment',
        title: 'Advanced Hardware',
        items: [
          { name: 'AI Training Rigs', description: 'Specialized hardware for machine learning', price: '$8000-75000', link: '/equipment' },
          { name: 'Network Infrastructure', description: 'High-speed networking equipment', price: '$3000-20000', link: '/equipment' },
          { name: 'Security Appliances', description: 'Enterprise security solutions', price: '$5000-30000', link: '/equipment' },
          { name: 'Monitoring Systems', description: 'Real-time monitoring and alerting', price: '$2000-15000', link: '/equipment' }
        ],
        bgClass: 'bg-gradient-to-br from-orange-900 to-slate-900'
      },
      {
        type: 'blog-highlights',
        title: 'Industry Trends',
        items: [
          { title: 'AI Ethics and Governance', excerpt: 'Building responsible AI systems', link: '/blog/ai-ethics-and-governance', category: 'Ethics' },
          { title: 'Edge Computing Revolution', excerpt: 'Processing data closer to the source', link: '/blog/edge-computing-revolution', category: 'Technology' },
          { title: 'Sustainable Tech Solutions', excerpt: 'Green technology for the future', link: '/blog/sustainable-tech-solutions', category: 'Sustainability' },
          { title: 'Digital Twin Technology', excerpt: 'Virtual replicas of physical systems', link: '/blog/digital-twin-technology', category: 'Innovation' }
        ],
        bgClass: 'bg-gradient-to-br from-teal-900 to-slate-900'
      },
      {
        type: 'chat-services',
        title: 'Specialized AI Chat',
        items: [
          { title: 'Financial Analysis Chat', description: 'AI-powered financial insights', link: '/services/financial-analysis-chat', icon: '💰' },
          { title: 'Legal Tech Chat', description: 'Legal technology consultation', link: '/services/legal-tech-chat', icon: '⚖️' },
          { title: 'Healthcare AI Chat', description: 'Medical technology advice', link: '/services/healthcare-ai-chat', icon: '🏥' },
          { title: 'Education Tech Chat', description: 'Educational technology solutions', link: '/services/education-tech-chat', icon: '🎓' }
        ],
        bgClass: 'bg-gradient-to-br from-violet-900 to-slate-900'
      }
    ]

    // Generate 3-5 additional sections
    const numSections = Math.floor(Math.random() * 3) + 3
    for (let i = 0; i < numSections; i++) {
      const sectionType = sectionTypes[i % sectionTypes.length]
      additionalSections.push({
        id: nextSectionId + i,
        ...sectionType
      })
    }

    return additionalSections
  }, [nextSectionId])

  // Load more sections when reaching the end
  const loadMoreSections = useCallback(async () => {
    if (isLoading) {
      console.log('Infinite scroll: Already loading, skipping...')
      return
    }

    console.log('Infinite scroll: Loading more sections...')
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const newSections = generateAdditionalSections()
    console.log('Infinite scroll: Generated', newSections.length, 'new sections')
    setDisplayedSections(prev => {
      const updated = [...prev, ...newSections]
      console.log('Infinite scroll: Total sections now:', updated.length)
      return updated
    })
    setNextSectionId(prev => prev + newSections.length)
    
    setIsLoading(false)
    console.log('Infinite scroll: Loading complete')
  }, [isLoading, generateAdditionalSections])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.getAttribute('data-section-id') || '0')
            setVisibleSections(prev => new Set(Array.from(prev).concat([sectionId])))
          }
        })
      },
      { threshold: 0.1 }
    )

    observerRef.current = observer

    // Observe all sections
    const sectionElements = document.querySelectorAll('[data-section-id]')
    sectionElements.forEach((el) => observer.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [displayedSections])

  // Scroll handler for infinite scroll and footer persistence
  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY
    const documentHeight = document.documentElement.scrollHeight
    const threshold = 1000
    
    // Check for infinite scroll
    if (scrollPosition >= documentHeight - threshold) {
      console.log('Infinite scroll: Near bottom, triggering load more...')
      loadMoreSections()
    }
    
    // Check for footer persistence after 10 sections
    const sectionElements = document.querySelectorAll('[data-section-id]')
    let visibleSectionCount = 0
    
    sectionElements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const sectionHeight = rect.height
      const sectionTop = rect.top
      const sectionBottom = rect.bottom
      
      // Consider a section visible if it's partially in view
      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        visibleSectionCount++
      }
    })
    
    // Make footer persistent after 10 sections are visible
    if (visibleSectionCount >= 10 && !isFooterPersistent) {
      setIsFooterPersistent(true)
      console.log('Footer persistence: Activated after 10 sections')
    } else if (visibleSectionCount < 10 && isFooterPersistent) {
      setIsFooterPersistent(false)
      console.log('Footer persistence: Deactivated - less than 10 sections visible')
    }
  }, [loadMoreSections, isFooterPersistent])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const renderSection = (section: any) => {
    switch (section.type) {
      case 'hero':
        return (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The First Free AI-Powered Marketplace
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Zion
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                    High-Tech Marketplace
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-400">AI Talents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1000+</div>
                    <div className="text-gray-400">IT Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">200+</div>
                    <div className="text-gray-400">Equipment Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50K+</div>
                    <div className="text-gray-400">Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'marketplace-overview':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive marketplace with cutting-edge technology solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className={`text-4xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'featured-services':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Professional IT services delivered by certified experts
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400 font-semibold">{item.price}</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white ml-1">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'featured-talents':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with top AI experts and technology professionals
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {item.name.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-purple-400 font-semibold mb-2">{item.specialization}</p>
                      <p className="text-gray-300 text-sm mb-3">{item.experience}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white ml-1">{item.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'featured-equipment':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  High-performance computing equipment and technology hardware
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="text-green-400 font-semibold">{item.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'blog-highlights':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay updated with the latest technology trends and insights
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="text-xs text-purple-400 font-semibold mb-2">{item.category}</div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-service-matcher':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                  {section.subtitle}
                </p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <Link href={section.ctaLink} className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                  <span className="mr-2">🤖</span>
                  {section.cta}
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.features.map((feature: string, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl mb-3">
                      {index === 0 && '🤖'}
                      {index === 1 && '⚡'}
                      {index === 2 && '🎯'}
                      {index === 3 && '💰'}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'chat-services':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  AI-powered chat services for instant expert advice
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'real-time-chat':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'equipment-rental':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'payment-processing':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'advanced-search':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'review-system':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'analytics-dashboard':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'user-profiles':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'multi-language':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'seo-optimization':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'mobile-responsive':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'service-marketplace':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'talent-directory':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'company-info':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Learn more about Zion and connect with our team
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'waitlist':
        return (
          <div className="py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {section.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {section.description}
              </p>
              
              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        )

      case 'quote-requests':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'service-categories':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'project-management':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'smart-notifications':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-analytics':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-automation':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-seo':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-multi-language':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-mobile-responsive':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-content-management':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-security':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-testing':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-customer-support':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-data-analytics':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-blockchain':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-iot':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-robotics':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-augmented-reality':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-powered-virtual-reality':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'ai-recommendations':
        return (
          <div className={`${section.bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {section.features?.map((feature: string, index: number) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )

      case 'ai-pricing-estimation':
        return (
          <div className={`${section.bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {section.features?.map((feature: string, index: number) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )

      case 'ai-learning-platform':
        return (
          <div className={`${section.bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {section.features?.map((feature: string, index: number) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )

      case 'ai-loyalty-rewards':
        return (
          <div className={`${section.bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {section.features?.map((feature: string, index: number) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )

      case 'ai-wishlist-comparison':
        return (
          <div className={`${section.bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {section.features?.map((feature: string, index: number) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )

      case 'ai-contract-legal':
        return (
          <div className={`${section.bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {section.features?.map((feature: string, index: number) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )

      case 'ai-subscription-membership':
        return (
          <div className={`${section.bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {section.features?.map((feature: string, index: number) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Zion - The First Free AI-Powered Marketplace</title>
        <meta name="description" content="Zion - The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment." />
        <meta name="keywords" content="AI marketplace, IT services, AI talents, equipment, innovation, Zion" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation - Main Links */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Talents
              </Link>
              <Link href="/equipment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Equipment
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
            </div>

            {/* Desktop Navigation - Auth & Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Zion Now
              </Link>
            </div>

            {/* Tablet Navigation - Reduced Links */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Talents
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* Main Navigation */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Main</h3>
                  <Link href="/marketplace" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Marketplace
                  </Link>
                  <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Services
                  </Link>
                  <Link href="/talents" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Talents
                  </Link>
                  <Link href="/equipment" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Equipment
                  </Link>
                  <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Products
                  </Link>
                </div>

                {/* Tools & Features */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Tools</h3>
                  <Link href="/real-time-chat" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Live Chat
                  </Link>
                  <Link href="/ai-virtual-assistant" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    AI Assistant
                  </Link>
                  <Link href="/advanced-search" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Search
                  </Link>
                  <Link href="/analytics-dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Analytics
                  </Link>
                </div>

                {/* Resources */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Resources</h3>
                  <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Blog
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </Link>
                  <Link href="/notifications" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Notifications
                  </Link>
                </div>

                {/* Authentication */}
                <div className="border-t border-white/10 pt-4">
                  <Link href="/auth/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </Link>
                  <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Join Zion Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className={`flex-1 transition-all duration-500 ${
        isFooterPersistent ? 'pb-64' : ''
      }`}>
        {/* Infinite Scroll Sections */}
        {displayedSections.map((section) => (
          <section
            key={section.id}
            data-section-id={section.id}
            className={`${section.bgClass} transition-opacity duration-500 ${
              visibleSections.has(section.id) ? 'opacity-100' : 'opacity-50'
            }`}
          >
            {renderSection(section)}
          </section>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="py-12 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
              <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg font-medium">Loading more amazing content...</span>
            </div>
            <div className="mt-4 text-sm text-purple-400">
              Currently showing {displayedSections.length} sections
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`bg-black/40 backdrop-blur-md border-t border-white/10 transition-all duration-500 ${
        isFooterPersistent 
          ? 'fixed bottom-0 left-0 right-0 z-50 shadow-2xl' 
          : 'relative'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h3>
              <p className="text-gray-400">
                The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/talents" className="hover:text-white transition-colors">Talents</Link></li>
                <li><Link href="/equipment" className="hover:text-white transition-colors">Equipment</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/quote-request" className="hover:text-white transition-colors">Request Quote</Link></li>
                <li><Link href="/admin-dashboard" className="hover:text-white transition-colors">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/auth/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link href="/ai-virtual-assistant" className="hover:text-white transition-colors">AI Assistant</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
      
      {/* Notification System */}
      <NotificationSystem />
    </div>
  )
}

export default Home
