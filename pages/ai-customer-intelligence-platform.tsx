import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Brain, Users, BarChart3, Target, Zap, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const AICustomerIntelligencePlatformPage: React.FC = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms for deep customer behavior analysis'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent clustering and persona development for targeted marketing'
    },
    {
      icon: BarChart3,
      title: 'Predictive Insights',
      description: 'Forecast customer behavior, churn risk, and lifetime value'
    },
    {
      icon: Target,
      title: 'Personalization Engine',
      description: 'Dynamic content and product recommendations based on customer data'
    }
  ];

  const dataSources = [
    'Website interactions',
    'Mobile app usage',
    'Purchase history',
    'Social media activity',
    'Customer support tickets',
    'Email engagement',
    'Survey responses',
    'Third-party data'
  ];

  const benefits = [
    'Increased customer retention',
    'Higher conversion rates',
    'Improved customer satisfaction',
    'Reduced marketing costs',
    'Better product development',
    'Competitive advantage'
  ];

  return (
    <Layout>
      <SEO
        title="AI Customer Intelligence Platform - Zion Tech Group"
        description="Revolutionary AI-powered platform for deep customer insights and intelligent business decisions"
        keywords={['AI customer intelligence', 'customer analytics', 'customer insights', 'AI analytics', 'customer behavior']}
        image="https://ziontechgroup.com/og-ai-customer-intelligence.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-rose-600/20 rounded-full">
                <Brain className="w-12 h-12 text-rose-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer
              <span className="text-rose-400"> Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Unlock the full potential of your customer data with AI-powered intelligence. 
              Understand, predict, and act on customer behavior with unprecedented accuracy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-rose-400 text-rose-400 hover:bg-rose-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI-powered customer intelligence capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-rose-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-rose-400" />
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

        {/* Data Sources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Data Sources
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive data integration from multiple customer touchpoints
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataSources.map((source, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-rose-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {source}
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
                Transform your business with data-driven customer insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-rose-400 mr-3" />
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
            <div className="bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Understand Your Customers?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading businesses that are already using AI customer intelligence 
                to drive growth and improve customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-rose-400 text-rose-400 hover:bg-rose-400/10 font-semibold rounded-lg transition-colors">
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

export default AICustomerIntelligencePlatformPage;