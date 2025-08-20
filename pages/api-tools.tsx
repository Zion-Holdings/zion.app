import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Code, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  Bot, 
  BarChart3, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Play,
  BookOpen,
  Github,
  Terminal
} from 'lucide-react';

export default function ApiToolsPage() {
  const apiTools = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'CodeGen API - AI-Powered Code Generation',
      description: 'Generate production-ready code in multiple languages using natural language descriptions and AI.',
      features: [
        'Support for 20+ programming languages',
        'Real-time code completion and suggestions',
        'Custom code templates and patterns',
        'Integration with popular IDEs',
        'Code review and optimization suggestions'
      ],
      pricing: {
        free: '100 requests/month',
        pro: '$49/month',
        enterprise: 'Custom'
      },
      category: 'Development',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      website: 'https://codegen.api',
      docs: 'https://docs.codegen.api',
      github: 'https://github.com/codegen-api',
      status: 'Live',
      users: '15,000+',
      rating: 4.8,
      responseTime: '<100ms'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'DataSync API - Real-time Data Synchronization',
      description: 'Seamlessly sync data across multiple databases, applications, and cloud services in real-time.',
      features: [
        'Multi-database support (PostgreSQL, MySQL, MongoDB)',
        'Real-time change detection and propagation',
        'Conflict resolution and data validation',
        'Webhook support for custom integrations',
        'Comprehensive audit logging and monitoring'
      ],
      pricing: {
        free: '1,000 syncs/month',
        pro: '$79/month',
        enterprise: 'Custom'
      },
      category: 'Data',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      website: 'https://datasync.api',
      docs: 'https://docs.datasync.api',
      github: 'https://github.com/datasync-api',
      status: 'Live',
      users: '8,500+',
      rating: 4.9,
      responseTime: '<50ms'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'GeoAPI - Advanced Geospatial Services',
      description: 'Comprehensive geolocation, mapping, and spatial analysis APIs for location-based applications.',
      features: [
        'Global geocoding and reverse geocoding',
        'Real-time traffic and routing optimization',
        'Geofencing and location tracking',
        'Map visualization and customization',
        'Spatial data analysis and clustering'
      ],
      pricing: {
        free: '10,000 requests/month',
        pro: '$99/month',
        enterprise: 'Custom'
      },
      category: 'Location',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      gradient: 'from-purple-400 to-pink-500',
      website: 'https://geo.api',
      docs: 'https://docs.geo.api',
      github: 'https://github.com/geo-api',
      status: 'Live',
      users: '12,000+',
      rating: 4.7,
      responseTime: '<75ms'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'AuthGuard API - Enterprise Authentication',
      description: 'Secure, scalable authentication and authorization system with advanced security features.',
      features: [
        'Multi-factor authentication (MFA)',
        'OAuth 2.0 and OpenID Connect support',
        'Role-based access control (RBAC)',
        'Advanced threat detection and prevention',
        'Compliance with SOC2, GDPR, and HIPAA'
      ],
      pricing: {
        free: '1,000 users/month',
        pro: '$149/month',
        enterprise: 'Custom'
      },
      category: 'Security',
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      gradient: 'from-red-400 to-orange-500',
      website: 'https://authguard.api',
      docs: 'https://docs.authguard.api',
      github: 'https://github.com/authguard-api',
      status: 'Live',
      users: '6,800+',
      rating: 4.9,
      responseTime: '<25ms'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'WebhookHub - Intelligent Webhook Management',
      description: 'Reliable webhook delivery, retry logic, and event processing for modern applications.',
      features: [
        'Guaranteed webhook delivery with retry logic',
        'Event filtering and transformation',
        'Real-time monitoring and analytics',
        'Custom authentication and security',
        'Integration with popular platforms'
      ],
      pricing: {
        free: '5,000 webhooks/month',
        pro: '$39/month',
        enterprise: 'Custom'
      },
      category: 'Integration',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      gradient: 'from-yellow-400 to-orange-500',
      website: 'https://webhookhub.api',
      docs: 'https://docs.webhookhub.api',
      github: 'https://github.com/webhookhub-api',
      status: 'Live',
      users: '9,200+',
      rating: 4.8,
      responseTime: '<30ms'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'NLP API - Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.',
      features: [
        'Text classification and categorization',
        'Sentiment analysis and emotion detection',
        'Named entity recognition (NER)',
        'Language detection and translation',
        'Custom model training and fine-tuning'
      ],
      pricing: {
        free: '5,000 requests/month',
        pro: '$69/month',
        enterprise: 'Custom'
      },
      category: 'AI/ML',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      website: 'https://nlp.api',
      docs: 'https://docs.nlp.api',
      github: 'https://github.com/nlp-api',
      status: 'Live',
      users: '11,500+',
      rating: 4.7,
      responseTime: '<200ms'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Analytics API - Business Intelligence',
      description: 'Comprehensive analytics and reporting APIs for data-driven decision making.',
      features: [
        'Real-time data aggregation and analysis',
        'Custom dashboard creation and sharing',
        'Advanced filtering and segmentation',
        'Export capabilities (CSV, JSON, PDF)',
        'Scheduled reports and alerts'
      ],
      pricing: {
        free: '10,000 events/month',
        pro: '$89/month',
        enterprise: 'Custom'
      },
      category: 'Analytics',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      website: 'https://analytics.api',
      docs: 'https://docs.analytics.api',
      github: 'https://github.com/analytics-api',
      status: 'Live',
      users: '7,800+',
      rating: 4.8,
      responseTime: '<150ms'
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'EncryptAPI - Data Encryption Services',
      description: 'Enterprise-grade encryption, hashing, and cryptographic operations for secure applications.',
      features: [
        'AES-256 encryption and decryption',
        'Secure key management and rotation',
        'Digital signatures and certificates',
        'Compliance with FIPS 140-2 standards',
        'Hardware security module (HSM) support'
      ],
      pricing: {
        free: '1,000 operations/month',
        pro: '$119/month',
        enterprise: 'Custom'
      },
      category: 'Security',
      color: 'bg-gradient-to-br from-gray-500 to-slate-600',
      gradient: 'from-gray-400 to-slate-500',
      website: 'https://encrypt.api',
      docs: 'https://docs.encrypt.api',
      github: 'https://github.com/encrypt-api',
      status: 'Live',
      users: '4,200+',
      rating: 4.9,
      responseTime: '<20ms'
    }
  ];

  const categories = ['All', 'Development', 'Data', 'Location', 'Security', 'Integration', 'AI/ML', 'Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? apiTools 
    : apiTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>API Tools & Developer Services | Zion Tech Group - Powerful APIs for Modern Applications</title>
        <meta name="description" content="Discover powerful APIs and developer tools for building modern applications. From AI-powered code generation to real-time data synchronization, we provide the building blocks you need." />
        <meta property="og:title" content="API Tools & Developer Services | Zion Tech Group" />
        <meta property="og:description" content="Powerful APIs and developer tools for modern applications. AI, security, analytics, and more." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Terminal className="w-4 h-4 mr-2" />
            Developer-First API Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Powerful API Tools & Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Build faster, scale better, and deliver more with our comprehensive collection of developer APIs. Each tool is designed for performance, reliability, and ease of integration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* API Tools Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {selectedCategory === 'All' ? 'All API Tools' : `${selectedCategory} APIs`}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {filteredTools.length} APIs available. Each tool is production-ready with comprehensive documentation, SDKs, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {tool.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                          {tool.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-indigo-400">{tool.users}</div>
                        <div className="text-xs text-gray-500">Users</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-green-400">{tool.responseTime}</div>
                        <div className="text-xs text-gray-500">Response</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-sm font-medium text-gray-300">Starting at</div>
                        <div className="text-lg font-bold text-green-400">{tool.pricing.free}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        href={tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit API
                      </Button>
                      <Button
                        href={tool.docs}
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                      <Button
                        href={tool.github}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-indigo-400"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to get started and build amazing applications with our APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border border-gray-700 hover:border-indigo-500/30">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive Documentation</h3>
              <p className="text-gray-400 mb-6">
                Detailed API references, code examples, and integration guides for every service.
              </p>
              <Button href="/docs" variant="outline" size="sm">
                Explore Docs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card className="text-center border border-gray-700 hover:border-indigo-500/30">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Interactive Playground</h3>
              <p className="text-gray-400 mb-6">
                Test APIs directly in your browser with our interactive testing environment.
              </p>
              <Button href="/playground" variant="outline" size="sm">
                Try Playground
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card className="text-center border border-gray-700 hover:border-indigo-500/30">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Open Source SDKs</h3>
              <p className="text-gray-400 mb-6">
                Official SDKs and client libraries for popular programming languages and frameworks.
              </p>
              <Button href="/sdk" variant="outline" size="sm">
                Browse SDKs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start integrating our APIs today and join thousands of developers building the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl"
            >
              Get API Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/docs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}