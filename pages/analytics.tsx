import React from 'react';
import Head from 'next/head';
import { BarChart3, TrendingUp, PieChart, Activity, ArrowRight, Check, Eye } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function AnalyticsPage() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Real-time Dashboards',
      description: 'Live monitoring and visualization of your key metrics'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis'
    },
    {
      icon: <PieChart className="w-8 h-8 text-white" />,
      title: 'Custom Reports',
      description: 'Build and schedule personalized reports'
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: 'Performance Monitoring',
      description: 'Track system performance and user behavior'
    }
  ];

  const benefits = [
    'Make data-driven decisions',
    'Identify growth opportunities',
    'Optimize user experience',
    'Monitor system health',
    'Track business metrics',
    'Generate actionable insights'
  ];

  return (
    <>
      <Head>
        <title>Analytics - Zion Tech Group</title>
        <meta name="description" content="Comprehensive analytics platform with real-time insights, predictive analytics, and custom reporting capabilities." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                Data-Driven Insights
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Analytics Platform
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive analytics platform with real-time insights, predictive analytics, and custom reporting capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                size="lg"
                className="shadow-2xl shadow-blue-500/25"
              >
                Start Analyzing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/20 hover:border-white/40"
              >
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Analytics Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Powerful tools to understand your data and make better decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Transform Data into Action
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                        <Check className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <Eye className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Visual Insights
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Beautiful charts and graphs that make complex data easy to understand
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Interactive dashboards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start gaining insights from your data today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}