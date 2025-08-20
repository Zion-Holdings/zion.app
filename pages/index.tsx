import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight } from 'lucide-react';

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
              New Micro SaaS Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Specialized Tools for Every Business Need
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              25 specialized micro SaaS solutions covering content creation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, API infrastructure, AI video editing, image generation, 
              customer support automation, code assistance, e-commerce analytics, legal automation, sales automation, 
              HR management, financial planning, supply chain optimization, and cybersecurity. Focused value with transparent pricing.
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
                    href="https://contentgen.zion.app"
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
                    href="https://design.zion.app"
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
                    href="https://monitor.zion.app"
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
                    href="https://seo.zion.app"
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
                    href="https://chatbot.zion.app"
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
                <p className="text-gray-500 text-sm mb-4">
                  Turn your data into actionable insights with automated reporting and analytics.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://bi.zion.app"
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

            {/* Email Marketing Automation */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Marketing</h3>
                    <p className="text-indigo-400 text-sm font-medium">$59/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  AI-powered email campaigns with advanced personalization and automation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://email.zion.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Media Scheduler */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Social Media Scheduler</h3>
                    <p className="text-teal-400 text-sm font-medium">$39/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Intelligent social media management with AI-powered content suggestions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://social.zion.app"
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

            {/* Customer Feedback Analytics */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    💡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Customer Feedback</h3>
                    <p className="text-yellow-400 text-sm font-medium">$79/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Collect and analyze customer feedback with sentiment analysis and insights.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://feedback.zion.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Invoice & Billing Manager */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    💰
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Invoice & Billing</h3>
                    <p className="text-green-400 text-sm font-medium">$49/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Streamlined financial operations with automated invoicing and payment processing.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://billing.zion.app"
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

            {/* Project Management Hub */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    📋
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Project Management</h3>
                    <p className="text-purple-400 text-sm font-medium">$69/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Collaborative project management with task tracking and team collaboration tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://projects.zion.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* API Gateway & Management */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🔌
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">API Gateway</h3>
                    <p className="text-gray-400 text-sm font-medium">$129/month</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Enterprise API infrastructure with security, monitoring, and developer tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14-day free trial</span>
                  <Button
                    href="https://api.zion.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700"
                  >
                    Try Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional New Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    Professional AI-powered video editing with automated enhancement and effects.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://video.zion.app"
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

              {/* AI Image Generator Studio */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🎨
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Image Generator</h3>
                      <p className="text-purple-400 text-sm font-medium">$59/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Create stunning AI-generated images with multiple models and editing tools.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://images.zion.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* Customer Support Automation */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🎧
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Support Automation</h3>
                      <p className="text-blue-400 text-sm font-medium">$89/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered customer support with automated ticket routing and responses.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://support.zion.app"
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

              {/* AI Code Assistant Pro */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      💻
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Code Assistant</h3>
                      <p className="text-cyan-400 text-sm font-medium">$89/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Boost developer productivity with AI-powered code generation and debugging.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://code.zion.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* E-commerce Analytics Suite */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🛒
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">E-commerce Analytics</h3>
                      <p className="text-orange-400 text-sm font-medium">$79/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Comprehensive analytics and optimization for e-commerce businesses.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ecommerce.zion.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Legal Assistant */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-slate-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      ⚖️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Legal Assistant</h3>
                      <p className="text-slate-400 text-sm font-medium">$149/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Intelligent legal document automation and contract analysis.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://legal.zion.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
              Our portfolio of 25 specialized micro SaaS solutions covers content creation, design, analytics, 
              marketing, business operations, AI video editing, image generation, customer support automation, 
              code assistance, e-commerce analytics, and legal automation. All services include comprehensive documentation, dedicated support, 
              enterprise-grade reliability, and 14-day free trials. Start with one solution and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                View All Services
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                See Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Value Proposition */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Why Choose Our Micro SaaS Solutions?
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Enterprise Features, Micro SaaS Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Get the power of enterprise solutions without the complexity. Our 20 specialized micro SaaS services 
              deliver focused value with transparent pricing, comprehensive features, and 14-day free trials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                💰
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Competitive Pricing</h3>
              <p className="text-gray-400 text-center mb-6">
                Our pricing is 15-40% below market average while maintaining enterprise-grade quality and features.
              </p>
              <div className="text-center">
                <span className="text-green-400 font-semibold">Starting from $39/month</span>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Rapid Implementation</h3>
              <p className="text-gray-400 text-center mb-6">
                Get up and running in minutes, not months. Focused solutions mean faster time-to-value.
              </p>
              <div className="text-center">
                <span className="text-blue-400 font-semibold">50% faster setup</span>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Focused Value</h3>
              <p className="text-gray-400 text-center mb-6">
                Each solution addresses a specific business need with deep functionality and expert support.
              </p>
              <div className="text-center">
                <span className="text-purple-400 font-semibold">Specialized expertise</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Market-Leading Solutions</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our micro SaaS portfolio covers the most in-demand business needs: AI content generation, video editing, 
                image creation, customer support automation, code assistance, e-commerce analytics, legal automation, 
                and more. Each service is built with cutting-edge technology and designed for seamless integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/micro-saas"
                  variant="secondary"
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                >
                  View Pricing
                </Button>
              </div>
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
