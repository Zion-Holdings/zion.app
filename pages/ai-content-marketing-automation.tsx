import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { PenTool, Target, BarChart3, Users, Zap, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AIContentMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Content Generation',
      description: 'Automatically create engaging, SEO-optimized content across multiple formats'
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Intelligent audience segmentation and personalized content delivery'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time insights into content performance and engagement metrics'
    },
    {
      icon: Zap,
      title: 'Automated Distribution',
      description: 'Multi-channel content distribution with optimal timing and frequency'
    }
  ];

  const contentTypes = [
    'Blog Posts & Articles',
    'Social Media Content',
    'Email Campaigns',
    'Video Scripts',
    'Infographics',
    'Whitepapers',
    'Case Studies',
    'Product Descriptions'
  ];

  const benefits = [
    '10x faster content creation',
    'Improved SEO rankings',
    'Higher engagement rates',
    'Consistent brand voice',
    'Reduced marketing costs',
    'Scalable content operations'
  ];

  return (
    <Layout>
      <SEO
        title="AI Content Marketing Automation - Zion Tech Group"
        description="Revolutionize your content marketing with AI-powered automation and intelligent content generation"
        keywords={['AI content marketing', 'content automation', 'AI content generation', 'marketing automation', 'content optimization']}
        image="https://ziontechgroup.com/og-ai-content-marketing.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-pink-600/20 rounded-full">
                <PenTool className="w-12 h-12 text-pink-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Marketing
              <span className="text-pink-400"> Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your content marketing with intelligent automation. Create, optimize, and distribute 
              engaging content at scale with AI-powered insights and automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-pink-400 text-pink-400 hover:bg-pink-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to automate and optimize your content marketing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-pink-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types Supported
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Generate and optimize content across all major formats and channels
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-pink-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {type}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your content marketing with measurable improvements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-pink-400 mr-3" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Content Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of marketers who are already using AI to create better content faster 
                and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-pink-400 text-pink-400 hover:bg-pink-400/10 font-semibold rounded-lg transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIContentMarketingAutomationPage;