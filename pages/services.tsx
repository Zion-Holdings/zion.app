import React from 'react';
import Head from 'next/head';
import Container from '../components/ui/Container';

import Button from '../components/ui/Button';
import FeaturesGrid from '../components/ui/FeaturesGrid';

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions built for modern applications.',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated threat detection and compliance monitoring.',
      color: 'bg-gradient-to-br from-red-400 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Data-driven decision making with real-time analytics and predictive intelligence.',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with automated optimization and monitoring.',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      icon: '🔄',
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment.',
      color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    },
  ];

  const features = [
    {
      icon: '🚀',
      title: 'Scalable Architecture',
      description: 'Built to grow with your business needs, from startup to enterprise.',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
    {
      icon: '🔧',
      title: 'Custom Development',
      description: 'Tailored solutions designed specifically for your unique requirements.',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      icon: '📱',
      title: 'Multi-Platform Support',
      description: 'Seamless experience across web, mobile, and desktop platforms.',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
    },
    {
      icon: '🌍',
      title: 'Global Deployment',
      description: 'Worldwide infrastructure ensuring fast performance everywhere.',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
  ];

  return (
    <>
      <Head>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI automation, cloud infrastructure, security, and performance optimization." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive technology services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
            <Button href="/contact" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <FeaturesGrid
        title="What We Offer"
        subtitle="End-to-end solutions for modern businesses"
        features={services}
        columns={3}
        className="bg-white"
      />

      {/* Features */}
      <FeaturesGrid
        title="Why Choose Us"
        subtitle="The advantages that set us apart"
        features={features}
        columns={2}
        className="bg-gray-50"
      />

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Strategic roadmap and architecture design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Agile development with continuous feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600">Smooth launch with ongoing support</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}