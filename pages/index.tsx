import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '6+', label: 'Micro SaaS Services', color: 'text-cyan-400' },
    { value: '14-Day', label: 'Free Trial', color: 'text-fuchsia-400' },
    { value: 'AI-Powered', label: 'Solutions', color: 'text-blue-400' },
    { value: 'Competitive', label: 'Pricing', color: 'text-green-400' },
  ];

  const platformFeatures = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Market-Driven Solutions',
      description: 'Real micro SaaS services with competitive pricing, market analysis, and proven business models.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation for social media, SEO, email marketing, and business intelligence.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'Clear pricing tiers with competitive rates, feature comparisons, and market positioning.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Targeted Use Cases',
      description: 'Specific solutions for marketing agencies, e-commerce, SaaS companies, and content creators.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Features',
      description: 'Advanced security, compliance, white-label solutions, and SLA guarantees for large organizations.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Market Intelligence',
      description: 'Comprehensive market analysis, competitive positioning, and growth opportunity insights.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const microSaasServices = [
    { 
      name: 'Social Media Analytics', 
      category: 'Marketing', 
      icon: '📊',
      price: 'From $49/month',
      description: 'AI-powered social media performance tracking'
    },
    { 
      name: 'SEO Content Optimization', 
      category: 'SEO', 
      icon: '🔍',
      price: 'From $39/month',
      description: 'AI-driven content optimization for better rankings'
    },
    { 
      name: 'Email Marketing Automation', 
      category: 'Marketing', 
      icon: '📧',
      price: 'From $29/month',
      description: 'Intelligent email automation with AI segmentation'
    },
    { 
      name: 'Customer Feedback Platform', 
      category: 'Analytics', 
      icon: '🎯',
      price: 'From $19/month',
      description: 'AI-powered feedback collection and analysis'
    },
    { 
      name: 'Business Intelligence', 
      category: 'Analytics', 
      icon: '📈',
      price: 'From $79/month',
      description: 'Real-time BI dashboards and reporting'
    },
    { 
      name: 'AI Chatbot Builder', 
      category: 'Automation', 
      icon: '🤖',
      price: 'From $25/month',
      description: 'No-code AI chatbot platform'
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
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group — AI-Powered Micro SaaS Services with Competitive Pricing</title>
        <meta name="description" content="Discover real micro SaaS services: AI-powered social media analytics, SEO optimization, email marketing automation, and more. Competitive pricing with 14-day free trials." />
        <meta property="og:title" content="Zion Tech Group — AI-Powered Micro SaaS Services with Competitive Pricing" />
        <meta property="og:description" content="Real micro SaaS solutions with competitive pricing. AI-powered tools for social media, SEO, email marketing, and business intelligence." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Zion Tech Group"
        subtitle="Real micro SaaS services with AI-powered automation, competitive pricing, and proven business models. Start your 14-day free trial today."
        primaryAction={{
          text: "View Services",
          href: "/services"
        }}
        secondaryAction={{
          text: "See Pricing",
          href: "/pricing"
        }}
        stats={heroStats}
      />

      {/* Platform Capabilities */}
      <Features
        title="Why Choose Our Micro SaaS Services"
        subtitle="Real solutions with competitive pricing, market analysis, and enterprise-grade features designed for modern businesses."
        features={platformFeatures}
        columns={3}
      />

      {/* Micro SaaS Services Preview */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Our Micro SaaS Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Real Solutions, Real Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each service is designed to solve specific business problems with competitive pricing and proven market demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-800 hover:border-blue-500/30 hover:bg-gray-800/50 transition-all duration-300"
                style={{ animationDelay: `${(index * 0.05) + 0.2}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">{service.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{service.category}</p>
                <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                <div className="text-lg font-bold text-blue-400 mb-4">{service.price}</div>
                <Button
                  href="/services"
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Built with Modern Technology
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our platform leverages the latest technologies and best practices to deliver exceptional performance and reliability.
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start your 14-day free trial today. No credit card required. Experience the power of AI-powered micro SaaS services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              See Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
