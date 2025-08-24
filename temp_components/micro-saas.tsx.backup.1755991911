import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Shield, 
  Mail, 
  Lock, 
  Link, 
  FileDown, 
  Key, 
  Bot, 
  Cloud,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Zap,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-4 h-4" /> },
    { id: 'Security & Performance', name: 'Security & Performance', icon: <Shield className="w-4 h-4" /> },
    { id: 'Data Quality', name: 'Data Quality', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'Marketing & Analytics', name: 'Marketing & Analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'Performance & Storage', name: 'Performance & Storage', icon: <Zap className="w-4 h-4" /> },
    { id: 'AI & Automation', name: 'AI & Automation', icon: <Bot className="w-4 h-4" /> },
    { id: 'Infrastructure', name: 'Infrastructure', icon: <Cloud className="w-4 h-4" /> }
  ];

  const services = [
    {
      id: 'rateLimit',
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'API Rate Limiting Service',
      description: 'Protect your APIs from abuse with intelligent rate limiting and traffic control.',
      category: 'Security & Performance',
      features: [
        'Configurable rate limits with multiple time windows',
        'Automatic cleanup and memory management',
        'Real-time statistics and monitoring',
        'IP-based and user-based limiting',
        'Webhook notifications for limit exceeded'
      ],
      useCases: [
        'API protection and DDoS prevention',
        'User quota management',
        'Traffic control and optimization',
        'SaaS application rate limiting'
      ],
      pricing: {
        free: 'Free tier available',
        starter: '$9/month',
        pro: '$29/month',
        enterprise: 'Custom pricing'
      },
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      popularity: 5,
      launchDate: '2025-01-15'
    },
    {
      id: 'emailValidation',
      icon: <Mail className="w-8 h-8 text-white" />,
      title: 'Email Validation Service',
      description: 'Comprehensive email validation with deliverability insights and spam detection.',
      category: 'Data Quality',
      features: [
        'Real-time syntax and format validation',
        'Domain MX record verification',
        'Disposable email detection',
        'Role-based account identification',
        'Deliverability scoring and recommendations'
      ],
      useCases: [
        'User registration and onboarding',
        'Email marketing campaign validation',
        'Lead generation and qualification',
        'Data cleaning and quality assurance'
      ],
      pricing: {
        free: '100 validations/month',
        starter: '$19/month',
        pro: '$49/month',
        enterprise: 'Custom pricing'
      },
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      popularity: 5,
      launchDate: '2025-01-10'
    },
    {
      id: 'passwordStrength',
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'Password Strength Analyzer',
      description: 'Advanced password security analysis with crack time estimation and improvement suggestions.',
      category: 'Security & Performance',
      features: [
        'Multi-factor scoring algorithm',
        'Common password and pattern detection',
        'Entropy calculation and crack time estimation',
        'Personalized improvement recommendations',
        'Security policy compliance checking'
      ],
      useCases: [
        'User registration and password policies',
        'Security audits and compliance',
        'Employee password management',
        'Security awareness training'
      ],
      pricing: {
        free: 'Free tier available',
        starter: '$29/month',
        pro: '$79/month',
        enterprise: '$199/month'
      },
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      popularity: 4,
      launchDate: '2025-01-12'
    },
    {
      id: 'urlShortener',
      icon: <Link className="w-8 h-8 text-white" />,
      title: 'URL Shortener Service',
      description: 'Professional URL shortening with analytics, tracking, and management features.',
      category: 'Marketing & Analytics',
      features: [
        'Custom short codes and branded URLs',
        'Comprehensive click analytics and insights',
        'Geographic and device tracking',
        'Password protection and expiration dates',
        'Bulk URL management and CSV export'
      ],
      useCases: [
        'Social media marketing campaigns',
        'Email marketing and newsletter tracking',
        'Affiliate marketing and referral tracking',
        'Link management and organization'
      ],
      pricing: {
        free: '100 URLs, basic analytics',
        starter: '$29/month',
        pro: '$79/month',
        enterprise: '$199/month'
      },
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
      popularity: 4,
      launchDate: '2025-01-08'
    },
    {
      id: 'fileCompression',
      icon: <FileDown className="w-8 h-8 text-white" />,
      title: 'File Compression Service',
      description: 'Intelligent file compression for images, videos, and documents with quality control.',
      category: 'Performance & Storage',
      features: [
        'Multi-format support (images, videos, documents)',
        'Quality control and compression optimization',
        'Batch processing and API integration',
        'Compression recommendations and estimates',
        'Metadata preservation and format conversion'
      ],
      useCases: [
        'Website performance optimization',
        'Storage cost reduction',
        'Bandwidth savings and CDN optimization',
        'Content delivery and mobile optimization'
      ],
      pricing: {
        free: '10 files/month',
        starter: '$39/month',
        pro: '$99/month',
        enterprise: 'Custom pricing'
      },
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      popularity: 4,
      launchDate: '2025-01-14'
    },
    {
      id: 'encryption',
      icon: <Key className="w-8 h-8 text-white" />,
      title: 'Data Encryption Service',
      description: 'Enterprise-grade encryption with key management and security assessment.',
      category: 'Security & Performance',
      features: [
        'Multiple encryption algorithms (AES, ChaCha20)',
        'Secure key generation and management',
        'Key rotation and backup strategies',
        'Encryption strength assessment',
        'Compliance and audit support'
      ],
      useCases: [
        'Data protection and compliance',
        'Secure file storage and transmission',
        'API security and authentication',
        'Enterprise data governance'
      ],
      pricing: {
        free: '1GB/month',
        starter: '$99/month',
        pro: '$299/month',
        enterprise: 'Custom pricing'
      },
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      popularity: 5,
      launchDate: '2025-01-16'
    },
    {
      id: 'aiAutomation',
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      category: 'AI & Automation',
      features: [
        'Machine learning and predictive analytics',
        'Natural language processing capabilities',
        'Intelligent decision making and optimization',
        'Automated workflow orchestration',
        'Continuous learning and improvement'
      ],
      useCases: [
        'Business process automation',
        'Customer service and support',
        'Data analysis and insights',
        'Predictive maintenance and optimization'
      ],
      pricing: {
        free: 'Limited trial available',
        starter: 'Custom pricing',
        pro: 'Custom pricing',
        enterprise: 'Custom pricing'
      },
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      popularity: 5,
      launchDate: '2025-01-01'
    },
    {
      id: 'cloudInfrastructure',
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      category: 'Infrastructure',
      features: [
        'Multi-cloud strategy and management',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup',
        'Performance monitoring and optimization',
        'Security and compliance management'
      ],
      useCases: [
        'Application hosting and deployment',
        'Data storage and management',
        'High-availability systems',
        'Global content delivery'
      ],
      pricing: {
        free: 'Free tier available',
        starter: '$50/month',
        pro: '$200/month',
        enterprise: 'Custom pricing'
      },
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      popularity: 4,
      launchDate: '2025-01-05'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Professional Developer Tools & APIs</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS services including API rate limiting, email validation, password strength analysis, URL shortening, file compression, encryption, and more. Professional tools for developers and businesses." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Professional micro SaaS services for developers and businesses. API rate limiting, email validation, password analysis, and more." />
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
            Micro SaaS Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Professional Developer Tools & APIs
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover our comprehensive suite of micro SaaS services designed to accelerate your development, 
            enhance security, and optimize performance. Built by developers, for developers.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{services.length}</div>
              <div className="text-gray-400 text-sm">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cursor-blue border-cursor-blue text-white'
                      : 'border-gray-600 text-gray-400 hover:border-cursor-blue hover:text-cursor-blue'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cursor-blue focus:ring-2 focus:ring-cursor-blue/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={service.id}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${service.textColor}`}>
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="inline-flex items-center px-2 py-1 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-xs font-medium">
                            {service.category}
                          </div>
                          <div className="flex items-center gap-1">
                            {renderStars(service.popularity)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Launched</div>
                        <div className="text-xs text-gray-500">{service.launchDate}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-cursor-blue mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Pricing:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-400">
                          <span className="text-cursor-blue">Free:</span> {service.pricing.free}
                        </div>
                        <div className="text-gray-400">
                          <span className="text-cursor-blue">Starter:</span> {service.pricing.starter}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      href={`/contact?service=${service.id}`}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cursor-blue to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Development?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of developers who trust our micro SaaS services to build better, faster, and more secure applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Start Building Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}