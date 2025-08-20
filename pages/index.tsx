import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Code, Lock, Link, QrCode, FileText, Database } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '8+', label: 'Micro SaaS Services', color: 'text-cyan-400' },
    { value: '100%', label: 'Production Ready', color: 'text-fuchsia-400' },
    { value: 'Free', label: 'Tier Available', color: 'text-blue-400' },
    { value: '24/7', label: 'Support', color: 'text-green-400' },
  ];

  const platformFeatures = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Code Review Assistant',
      description: 'AI-powered code analysis with security, performance, and maintainability insights. Support for JavaScript, Python, and TypeScript.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      pricing: 'Free tier, Pro from $29/month'
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'API Rate Limiter',
      description: 'Intelligent rate limiting with configurable policies, real-time analytics, and Express.js middleware support.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      pricing: 'Free tier, Enterprise from $99/month'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Email Validator',
      description: 'Comprehensive email validation with security risk assessment, disposable email detection, and MX record validation.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      pricing: 'Free tier, Pro from $19/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Password Strength Checker',
      description: 'Advanced password analysis with security recommendations, policy enforcement, and strong password generation.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      pricing: 'Free tier, Pro from $15/month'
    },
    {
      icon: <Link className="w-8 h-8 text-white" />,
      title: 'URL Shortener',
      description: 'Professional URL shortening with analytics, custom aliases, password protection, and expiration dates.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      pricing: 'Free tier, Pro from $25/month'
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'JSON Formatter',
      description: 'Advanced JSON processing with validation, transformation, schema generation, and performance optimization.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: 'Free tier, Pro from $20/month'
    },
    {
      icon: <QrCode className="w-8 h-8 text-white" />,
      title: 'QR Code Generator',
      description: 'Professional QR code creation with customization, security validation, and multiple content types support.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
      pricing: 'Free tier, Pro from $30/month'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'File Type Detector',
      description: 'Intelligent file analysis with security scanning, metadata extraction, and magic number detection.',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      gradient: 'from-amber-400 to-orange-500',
      pricing: 'Free tier, Pro from $35/month'
    }
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡' },
    { name: 'React', category: 'Library', icon: '⚛️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'PyTorch', category: 'AI/ML', icon: '🔥' },
    { name: 'Express.js', category: 'Backend', icon: '🚀' }
  ];

  const useCases = [
    {
      title: 'Development Teams',
      description: 'Improve code quality, security, and team collaboration with our development tools.',
      icon: '👥',
      services: ['Code Review', 'Git Management', 'JSON Processing']
    },
    {
      title: 'Security & Compliance',
      description: 'Enhance your security posture with validation, threat detection, and compliance tools.',
      icon: '🔒',
      services: ['Email Validation', 'Password Security', 'File Analysis']
    },
    {
      title: 'Marketing & Analytics',
      description: 'Track campaigns, generate QR codes, and analyze performance with our utility services.',
      icon: '📊',
      services: ['URL Shortening', 'QR Generation', 'Analytics']
    },
    {
      title: 'API Protection',
      description: 'Secure your APIs with intelligent rate limiting and threat prevention.',
      icon: '🛡️',
      services: ['Rate Limiting', 'Security Scanning', 'Monitoring']
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group — Professional Micro SaaS Services for Developers & Businesses</title>
        <meta name="description" content="Discover our suite of production-ready micro SaaS services including code review, rate limiting, email validation, password security, URL shortening, JSON processing, QR codes, and file analysis. Start with free tiers." />
        <meta property="og:title" content="Zion Tech Group — Professional Micro SaaS Services for Developers & Businesses" />
        <meta property="og:description" content="Production-ready micro SaaS services with free tiers. Code review, security tools, utilities, and more for developers and businesses." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Zion Tech Group"
        subtitle="Professional micro SaaS services built for developers and businesses. Start with free tiers and scale as you grow."
        primaryAction={{
          text: "Explore Services",
          href: "/services"
        }}
        secondaryAction={{
          text: "View Pricing",
          href: "/pricing"
        }}
        stats={heroStats}
      />

      {/* Platform Capabilities */}
      <Features
        title="Our Micro SaaS Services"
        subtitle="Each service is built with production-ready code, comprehensive testing, and real-world use cases in mind."
        features={platformFeatures}
        columns={2}
      />

      {/* Use Cases */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Who Uses Our Services?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our micro SaaS services are designed for various use cases and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-800 hover:border-blue-500/30 p-8"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-sm text-blue-400">
                      • {service}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Built with Modern Technology
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our services leverage the latest technologies and best practices to deliver exceptional performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologyStack.map((tech, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-800 hover:border-blue-500/30"
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

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We focus on delivering real value through practical, production-ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border border-gray-800 hover:border-blue-500/30">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Production Ready</h3>
              <p className="text-gray-400">
                Every service is built with production environments in mind, including error handling, logging, and monitoring.
              </p>
            </Card>

            <Card className="text-center p-8 border border-gray-800 hover:border-blue-500/30">
              <div className="text-4xl mb-6">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-400">
                Security is built into every service, with comprehensive validation, sanitization, and threat detection.
              </p>
            </Card>

            <Card className="text-center p-8 border border-gray-800 hover:border-blue-500/30">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Insights</h3>
              <p className="text-gray-400">
                Detailed analytics and insights help you understand usage patterns and optimize performance.
              </p>
            </Card>

            <Card className="text-center p-8 border border-gray-800 hover:border-blue-500/30">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-400">
                Optimized for speed and efficiency, with caching strategies and performance monitoring built-in.
              </p>
            </Card>

            <Card className="text-center p-8 border border-gray-800 hover:border-blue-500/30">
              <div className="text-4xl mb-6">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-400">
                Simple APIs and comprehensive documentation make integration straightforward and quick.
              </p>
            </Card>

            <Card className="text-center p-8 border border-gray-800 hover:border-blue-500/30">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Real Use Cases</h3>
              <p className="text-gray-400">
                Each service solves real problems faced by developers and businesses every day.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start with our free tiers and experience the power of our micro SaaS services. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
