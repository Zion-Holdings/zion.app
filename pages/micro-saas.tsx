import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Link, 
  Lock, 
  QrCode, 
  RefreshCw, 
  FileText, 
  BarChart3, 
  ExternalLink, 
  Download,
  Copy,
  Check,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  Clock,
  TrendingUp
} from 'lucide-react';
import { SERVICES_METADATA, SERVICE_CATEGORIES, getServiceStats } from '../services';

export default function MicroSaasPage() {
  const [copiedService, setCopiedService] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  const stats = getServiceStats();

  const handleCopyService = (serviceName: string) => {
    setCopiedService(serviceName);
    setTimeout(() => setCopiedService(null), 2000);
  };

  const filteredServices = activeTab === 'all' 
    ? Object.entries(SERVICES_METADATA)
    : Object.entries(SERVICES_METADATA).filter(([_, service]) => 
        service.category === activeTab
      );

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Professional Utility Tools</title>
        <meta name="description" content="Discover our collection of professional micro SaaS services including URL shortener, password generator, QR code generator, file converter, and text analysis tools. All services are free to use with premium features available." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Professional utility tools and micro SaaS services for developers, businesses, and individuals." />
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
            Professional Utility Tools
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Discover our collection of powerful micro SaaS services designed to streamline your workflow, 
            enhance productivity, and solve everyday challenges. All services are built with enterprise-grade 
            reliability and security.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cursor-blue mb-2">{stats.totalUsers.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fuchsia-500 mb-2">{stats.totalRequests.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">Requests Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">{stats.averageResponseTime}ms</div>
              <div className="text-sm text-gray-400">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-cursor-blue text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === key
                    ? 'bg-cursor-blue text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map(([serviceKey, service]) => (
              <Card
                key={serviceKey}
                className="card-hover group border-gradient-blue p-8"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-semibold text-green-400">
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">4.9/5</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      href={`/services/${serviceKey}`}
                      variant="primary"
                      size="sm"
                    >
                      Try Now
                    </Button>
                    <Button
                      onClick={() => handleCopyService(serviceKey)}
                      variant="outline"
                      size="sm"
                      className="min-w-[80px]"
                    >
                      {copiedService === serviceKey ? (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Service Stats */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {stats.services[serviceKey as keyof typeof stats.services]?.users.toLocaleString() || '0'}
                      </div>
                      <div className="text-xs text-gray-400">Users</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {stats.services[serviceKey as keyof typeof stats.services]?.requests.toLocaleString() || '0'}
                      </div>
                      <div className="text-xs text-gray-400">Requests</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {stats.services[serviceKey as keyof typeof stats.services]?.avgResponse || '0'}ms
                      </div>
                      <div className="text-xs text-gray-400">Response</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Why Choose Our Micro SaaS Services?
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Built with enterprise-grade technology and designed for professional use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cursor-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cursor-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-400 leading-relaxed">
                All services are built with enterprise-grade security, encryption, and compliance standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-fuchsia-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimized for speed with global CDN distribution and sub-200ms response times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Availability</h3>
              <p className="text-gray-400 leading-relaxed">
                99.9% uptime guarantee with redundant infrastructure across multiple regions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Developer Friendly</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive APIs, SDKs, and documentation for seamless integration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Always Improving</h3>
              <p className="text-gray-400 leading-relaxed">
                Continuous updates, new features, and performance improvements based on user feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Round-the-clock technical support and comprehensive documentation for all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cursor-blue to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of developers and businesses who trust our micro SaaS services for their daily needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Start Building
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/docs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}