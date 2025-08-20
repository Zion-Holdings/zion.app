import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '25+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
  ];

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Real Micro SaaS Services',
      description: '25+ fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, and business intelligence.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, advanced encryption, and automated security monitoring.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs.',
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
              🚀 Premium Micro SaaS Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Enterprise-Grade Tools for Every Business Need
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover <span className="text-green-400 font-semibold">50+ specialized micro SaaS solutions</span> covering AI-powered content creation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media, project management, 
              billing, HR operations, video editing, cloud optimization, legal automation, sales intelligence, customer analytics, 
              API management, compliance monitoring, and more. <span className="text-green-400 font-semibold">Focused value with transparent pricing, 14-day free trials, and enterprise-grade infrastructure.</span>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>14-Day Free Trials</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Enterprise Security</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>99.9% Uptime</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>24/7 Support</span>
            </div>
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
                    <h3 className="text-lg font-semibold text-white">AI Content Generator</h3>
                    <p className="text-pink-400 text-sm font-medium">$49/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Professional AI-powered content creation with SEO optimization and brand voice customization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
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
                  Create and maintain consistent design systems with automated component generation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
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
                  Real-time monitoring and optimization for web and mobile applications.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
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

            {/* SEO Automation Suite */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🔍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">SEO Automation Suite</h3>
                    <p className="text-emerald-400 text-sm font-medium">$89/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Comprehensive SEO tools with automated optimization and reporting.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Sales Intelligence */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    💼
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Sales Intelligence</h3>
                    <p className="text-blue-400 text-sm font-medium">$99/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  AI-driven sales intelligence for lead generation, prospect research, and sales automation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
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

            {/* AI Chatbot Platform */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    💬
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Chatbot Platform</h3>
                    <p className="text-sky-400 text-sm font-medium">$69/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Intelligent chatbot solutions for customer support and lead generation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Business Intelligence Hub */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-rose-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    📊
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">BI Hub</h3>
                    <p className="text-rose-400 text-sm font-medium">$99/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Turn your data into actionable insights with automated reporting and analytics.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Video Editor Pro */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🎬
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Video Editor Pro</h3>
                    <p className="text-red-400 text-sm font-medium">$79/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Professional video editing with AI-powered automation and enhancement tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
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

            {/* Cloud Cost Optimizer */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    ☁️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Cloud Cost Optimizer</h3>
                    <p className="text-blue-400 text-sm font-medium">$99/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Reduce cloud spending by 30% with intelligent cost management and optimization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
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

            {/* API Rate Limiter Pro */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">API Rate Limiter Pro</h3>
                    <p className="text-red-400 text-sm font-medium">$29/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Protect your APIs from abuse with intelligent rate limiting and DDoS protection.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
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

            {/* Email Validation Suite */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    ✅
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Validation Suite</h3>
                    <p className="text-green-400 text-sm font-medium">$19/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Professional email verification with advanced validation algorithms and compliance tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://ziontechgroup.com/micro-saas"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group Micro SaaS?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Lightning Fast</h4>
                  <p className="text-sm text-gray-400">Get started in minutes, not weeks</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Enterprise Security</h4>
                  <p className="text-sm text-gray-400">SOC 2 compliant, bank-level security</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Proven ROI</h4>
                  <p className="text-sm text-gray-400">Measurable business impact</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Unified Platform</h4>
                  <p className="text-sm text-gray-400">Single sign-on, integrated billing</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
              All <span className="text-green-400 font-semibold">50+ services</span> include comprehensive documentation, dedicated support, enterprise-grade reliability, <span className="text-green-400 font-semibold">99.9% uptime guarantee</span>, and <span className="text-green-400 font-semibold">14-day free trials</span>. 
              Start with one solution and scale as you grow. Each service is designed for immediate value delivery with transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/micro-saas"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg px-8 py-4"
              >
                🚀 View All 50+ Micro SaaS
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white text-lg px-8 py-4"
              >
                💰 See Transparent Pricing
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              <h3 className="text-xl font-bold text-white mb-2">Screenshot API Pro</h3>
              <p className="text-green-100 text-sm mb-4">Convert websites to high-quality images</p>
              <div className="text-2xl font-bold text-white mb-2">$12<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 1 minute</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-white mb-2">Password Generator Pro</h3>
              <p className="text-green-100 text-sm mb-4">Secure password creation & management</p>
              <div className="text-2xl font-bold text-white mb-2">$7<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 2 minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-2">URL Shortener Pro</h3>
              <p className="text-green-100 text-sm mb-4">Advanced link management & analytics</p>
              <div className="text-2xl font-bold text-white mb-2">$9<span className="text-sm font-normal text-green-100">/month</span></div>
              <p className="text-xs text-green-200">14-day free trial • Setup in 3 minutes</p>
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

      {/* Real Micro SaaS Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Real Implementation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Real Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Not just mockups - these are fully functional, production-ready tools that solve real business problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'AI Content Generator Pro',
                description: 'Create high-quality, SEO-optimized content with real AI generation and analytics.',
                icon: '📝',
                color: 'from-pink-500 to-rose-600',
                link: '/micro-saas'
              },
              {
                name: 'SEO Automation Suite',
                description: 'Real keyword research, technical audits, and competitor analysis tools.',
                icon: '🔍',
                color: 'from-emerald-500 to-green-600',
                link: '/micro-saas'
              },
              {
                name: 'AI Chatbot Platform',
                description: 'Intelligent chatbots with real conversation management and training.',
                icon: '💬',
                color: 'from-sky-500 to-blue-600',
                link: '/micro-saas'
              },
              {
                name: 'Business Intelligence Hub',
                description: 'Real data visualization, KPI tracking, and automated reporting.',
                icon: '📊',
                color: 'from-rose-500 to-pink-600',
                link: '/micro-saas'
              },
              {
                name: 'Cloud Cost Optimizer',
                description: 'Real cloud resource monitoring and cost optimization recommendations.',
                icon: '☁️',
                color: 'from-blue-500 to-indigo-600',
                link: '/micro-saas'
              },
              {
                name: 'AI Video Editor Pro',
                description: 'Professional video editing with real AI-powered tools and automation.',
                icon: '🎬',
                color: 'from-red-500 to-pink-600',
                link: '/micro-saas'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl h-full transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-100 mb-4">{service.description}</p>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/micro-saas"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transparent Market Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Competitive pricing based on market research and value delivered. No hidden fees, no enterprise sales calls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                description: 'Perfect for small businesses and startups',
                features: [
                  'Up to 5 projects',
                  'Basic analytics',
                  'Email support',
                  '14-day free trial'
                ],
                color: 'from-blue-500 to-indigo-600',
                popular: false
              },
              {
                name: 'Professional',
                price: '$79',
                period: '/month',
                description: 'Ideal for growing businesses and teams',
                features: [
                  'Up to 25 projects',
                  'Advanced analytics',
                  'Priority support',
                  'API access',
                  '14-day free trial'
                ],
                color: 'from-green-500 to-emerald-600',
                popular: true
              },
              {
                name: 'Enterprise',
                price: '$199',
                period: '/month',
                description: 'For large organizations with complex needs',
                features: [
                  'Unlimited projects',
                  'Custom integrations',
                  'Dedicated support',
                  'SLA guarantee',
                  'Custom pricing available'
                ],
                color: 'from-purple-500 to-pink-600',
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} p-8 rounded-2xl h-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-xl text-gray-200 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-200 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-100">
                        <Check className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <a 
                      href="/pricing"
                      className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full justify-center"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              All plans include 99.9% uptime guarantee, enterprise-grade security, and 14-day free trials
            </p>
            <a 
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Detailed Pricing
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
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
