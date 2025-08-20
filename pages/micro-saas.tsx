import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Bot, 
  Cloud, 
  Lock, 
  Globe, 
  Code, 
  Database, 
  Monitor,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Rocket
} from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'ZapFlow - AI-Powered Workflow Automation',
      description: 'Automate complex business processes with intelligent decision-making and predictive analytics.',
      features: [
        'Visual workflow builder with AI suggestions',
        'Integration with 500+ business tools',
        'Real-time analytics and performance insights',
        'Custom AI models for your specific workflows',
        'Enterprise-grade security and compliance'
      ],
      pricing: {
        starter: '$29/month',
        pro: '$99/month',
        enterprise: 'Custom'
      },
      category: 'Automation',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      website: 'https://zapflow.ai',
      demo: 'https://demo.zapflow.ai',
      status: 'Live',
      users: '2,500+',
      rating: 4.8
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'SecureStack - DevSecOps Security Platform',
      description: 'Comprehensive security scanning and compliance monitoring for modern development teams.',
      features: [
        'Automated vulnerability scanning',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Real-time threat detection',
        'Integration with CI/CD pipelines',
        'Security training and awareness modules'
      ],
      pricing: {
        starter: '$49/month',
        pro: '$149/month',
        enterprise: 'Custom'
      },
      category: 'Security',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      website: 'https://securestack.dev',
      demo: 'https://demo.securestack.dev',
      status: 'Live',
      users: '1,800+',
      rating: 4.9
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'DataViz Pro - Business Intelligence Suite',
      description: 'Transform raw data into actionable insights with advanced analytics and beautiful visualizations.',
      features: [
        'Interactive dashboards and reports',
        'AI-powered data insights',
        'Real-time data streaming',
        'Custom data connectors',
        'Mobile-responsive design'
      ],
      pricing: {
        starter: '$39/month',
        pro: '$129/month',
        enterprise: 'Custom'
      },
      category: 'Analytics',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      gradient: 'from-purple-400 to-pink-500',
      website: 'https://datavizpro.com',
      demo: 'https://demo.datavizpro.com',
      status: 'Live',
      users: '3,200+',
      rating: 4.7
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'ChatFlow - Conversational AI Platform',
      description: 'Build intelligent chatbots and virtual assistants with advanced NLP and machine learning.',
      features: [
        'No-code chatbot builder',
        'Multi-language support',
        'Advanced NLP and sentiment analysis',
        'Integration with popular platforms',
        'Analytics and conversation insights'
      ],
      pricing: {
        starter: '$19/month',
        pro: '$79/month',
        enterprise: 'Custom'
      },
      category: 'AI',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      website: 'https://chatflow.ai',
      demo: 'https://demo.chatflow.ai',
      status: 'Live',
      users: '4,100+',
      rating: 4.6
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'CloudSync - Multi-Cloud Management',
      description: 'Unified management platform for AWS, Azure, Google Cloud, and other cloud providers.',
      features: [
        'Single dashboard for all clouds',
        'Cost optimization and monitoring',
        'Automated backup and disaster recovery',
        'Security and compliance management',
        'Performance optimization recommendations'
      ],
      pricing: {
        starter: '$59/month',
        pro: '$199/month',
        enterprise: 'Custom'
      },
      category: 'Cloud',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      website: 'https://cloudsync.io',
      demo: 'https://demo.cloudsync.io',
      status: 'Live',
      users: '2,800+',
      rating: 4.8
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'PrivacyGuard - Data Privacy Compliance',
      description: 'Automated GDPR, CCPA, and privacy law compliance with intelligent data discovery.',
      features: [
        'Automated data discovery and classification',
        'Privacy impact assessments',
        'Consent management system',
        'Data subject rights automation',
        'Compliance reporting and auditing'
      ],
      pricing: {
        starter: '$79/month',
        pro: '$199/month',
        enterprise: 'Custom'
      },
      category: 'Compliance',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      website: 'https://privacyguard.com',
      demo: 'https://demo.privacyguard.com',
      status: 'Live',
      users: '1,500+',
      rating: 4.9
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'WebOptimize - Performance Monitoring',
      description: 'Real-time website performance monitoring with actionable optimization recommendations.',
      features: [
        'Core Web Vitals tracking',
        'Global performance monitoring',
        'Automated optimization suggestions',
        'Competitor performance analysis',
        'Custom performance budgets'
      ],
      pricing: {
        starter: '$29/month',
        pro: '$99/month',
        enterprise: 'Custom'
      },
      category: 'Performance',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      gradient: 'from-yellow-400 to-orange-500',
      website: 'https://weboptimize.io',
      demo: 'https://demo.weboptimize.io',
      status: 'Live',
      users: '3,600+',
      rating: 4.7
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'DevOps Hub - CI/CD Automation',
      description: 'Streamlined DevOps workflows with automated testing, deployment, and monitoring.',
      features: [
        'Multi-language CI/CD pipelines',
        'Automated testing and quality gates',
        'Infrastructure as code management',
        'Deployment rollback capabilities',
        'Team collaboration and approval workflows'
      ],
      pricing: {
        starter: '$69/month',
        pro: '$179/month',
        enterprise: 'Custom'
      },
      category: 'DevOps',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      gradient: 'from-red-400 to-pink-500',
      website: 'https://devopshub.dev',
      demo: 'https://demo.devopshub.dev',
      status: 'Live',
      users: '2,200+',
      rating: 4.8
    }
  ];

  const categories = ['All', 'Automation', 'Security', 'Analytics', 'AI', 'Cloud', 'Compliance', 'Performance', 'DevOps'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Innovative Business Solutions</title>
        <meta name="description" content="Discover our curated collection of innovative micro SaaS services designed to solve real business problems. From AI automation to security compliance, find the perfect solution for your needs." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Innovative micro SaaS services for modern businesses. AI automation, security, analytics, and more." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Curated Micro SaaS Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Innovative Micro SaaS Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover cutting-edge business solutions that deliver real value. Each service is carefully selected and tested to ensure quality and effectiveness.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {filteredServices.length} services found. Each solution is designed to address specific business challenges with proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{service.rating}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                          {service.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">{service.users}</div>
                        <div className="text-xs text-gray-500">Active Users</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-sm font-medium text-gray-300">Starting at</div>
                        <div className="text-lg font-bold text-green-400">{service.pricing.starter}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        href={service.website}
                        variant="primary"
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Visit Website
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        href={service.demo}
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                      >
                        Try Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose from our curated selection of micro SaaS services or let us help you find the perfect solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              Get Personalized Recommendations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}