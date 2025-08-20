import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '227+', label: 'Intelligent Automations', color: 'text-cyan-400' },
    { value: '2960+', label: 'Dynamic Pages', color: 'text-fuchsia-400' },
    { value: '12', label: 'Core Components', color: 'text-blue-400' },
    { value: '100%', label: 'Autonomous', color: 'text-green-400' },
  ];

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Autonomous Cloud Systems',
      description: 'Self-healing CI/CD pipelines, intelligent build orchestration, and zero-downtime deployments.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Automation',
      description: '227+ autonomous agents, intelligent content generation, and predictive maintenance.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Redundancy & Reliability',
      description: 'Multi-layer redundancy systems, intelligent failover, and 99.99% uptime guarantee.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Performance Optimization',
      description: 'Real-time monitoring, automated scaling, and intelligent resource management.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Security & Compliance',
      description: 'Advanced threat detection, automated security updates, and compliance monitoring.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting, predictive analytics, and actionable business intelligence.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
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
        <title>Zion Tech Group — World&apos;s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Zion Tech Group"
        subtitle="The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and the future of cloud-native AI infrastructure."
        primaryAction={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Learn More",
          href: "/about"
        }}
        stats={heroStats}
      />

      {/* Platform Capabilities */}
      <Features
        title="Revolutionary Platform Capabilities"
        subtitle="Discover the cutting-edge technologies and intelligent systems that power the future of autonomous innovation."
        features={platformFeatures}
        columns={3}
      />

      {/* Micro SaaS Services Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Market-Leading Micro SaaS Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              40+ Specialized Tools for Every Business Need
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our portfolio of specialized micro SaaS solutions. Each tool is designed to solve a specific business challenge 
              with AI-powered automation, real-time analytics, and enterprise-grade reliability. Save 60-90% compared to complex enterprise platforms 
              while getting focused functionality that delivers immediate value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Content Generator */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    📝
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Content Generator Pro</h3>
                    <p className="text-pink-400 text-sm font-medium">$49/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Professional AI-powered content creation with SEO optimization, brand voice customization, and 15+ language support.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    SEO-optimized content generation
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Multi-language support (15+ languages)
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Brand voice customization
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/ai-content-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Design System Builder */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🎨
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Design System Builder</h3>
                    <p className="text-violet-400 text-sm font-medium">$79/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Create and maintain consistent design systems with automated component generation and team collaboration tools.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Component library management
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Design token automation
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Figma, Sketch, Adobe XD integration
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/design-system-builder"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* App Performance Monitor */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
                    <p className="text-amber-400 text-sm font-medium">$39/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Monitor and optimize your web and mobile applications with real-time performance insights and automated optimization.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Performance metrics tracking
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Error monitoring & alerting
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Automated optimization
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/app-performance-monitor"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Meeting Transcription */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🎤
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Meeting Transcription</h3>
                    <p className="text-blue-400 text-sm font-medium">$59/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Transform meetings into actionable insights with AI-powered transcription, summarization, and action item extraction.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Real-time transcription (15+ languages)
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    AI-powered meeting summaries
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Action item & task extraction
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/ai-meeting-transcription"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* AI-Powered CRM */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI-Powered CRM</h3>
                    <p className="text-teal-400 text-sm font-medium">$79/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Next-generation CRM with AI-powered lead scoring, sales forecasting, and customer insights.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    AI lead scoring
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Sales forecasting
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Customer behavior analysis
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/ai-powered-crm"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Cybersecurity Threat Monitor */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Cybersecurity Monitor</h3>
                    <p className="text-red-400 text-sm font-medium">$89/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced cybersecurity monitoring with AI-powered threat detection and automated incident response.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Real-time threat detection
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    AI-powered risk assessment
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Check className="w-3 h-3 text-green-400 mr-2" />
                    Automated incident response
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/cybersecurity-threat-monitor"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              All 40+ services include comprehensive documentation, dedicated support, enterprise-grade reliability, and 14-day free trials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/micro-saas"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Promotion */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              New: Micro SaaS Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Specialized Tools for Every Business Need
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Discover our focused micro SaaS solutions that deliver specific value without enterprise complexity. 
              From API protection to email validation, each service solves a real business problem with transparent pricing. 
              Start with a free trial and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Content Generator Pro</h3>
              <p className="text-green-100 text-sm mb-4">Professional AI-powered content creation</p>
              <div className="text-2xl font-bold text-white mb-2">$49<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 5 minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">API Rate Limiter</h3>
              <p className="text-green-100 text-sm mb-4">Protect your APIs from abuse</p>
              <div className="text-2xl font-bold text-white mb-2">$29<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 3 minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Email Validation</h3>
              <p className="text-green-100 text-sm mb-4">Real-time email verification</p>
              <div className="text-2xl font-bold text-white mb-2">$19<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 2 minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-2">Form Builder Pro</h3>
              <p className="text-green-100 text-sm mb-4">Create powerful forms without coding</p>
              <div className="text-2xl font-bold text-white mb-2">$25<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 5 minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">🧾</div>
              <h3 className="text-xl font-bold text-white mb-2">Invoice Generator</h3>
              <p className="text-green-100 text-sm mb-4">Professional invoicing made simple</p>
              <div className="text-2xl font-bold text-white mb-2">$15<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 3 minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-white mb-2">Screenshot API</h3>
              <p className="text-green-100 text-sm mb-4">Convert websites to images</p>
              <div className="text-2xl font-bold text-white mb-2">$12<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 1 minute</p>
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
                Explore All Micro SaaS
                <ArrowRight className="w-5 h-5 ml-2" />
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
            <p className="text-sm text-green-200">
              All services include enterprise-grade infrastructure, 99.9% uptime guarantee, and dedicated support
            </p>
          </div>

          {/* Market Positioning & Competitive Advantages */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparent Pricing</h3>
              <p className="text-green-200 text-sm">No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast Setup</h3>
              <p className="text-green-200 text-sm">Get started in minutes, not weeks. Our services are designed for immediate value delivery.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-green-200 text-sm">Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.</p>
            </div>
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
            Join the future of autonomous technology and experience unprecedented efficiency, reliability, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/case-studies"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
