import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Users, Zap, BarChart3, Target, Heart, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const AICustomerSuccessAutomationPage: React.FC = () => {
  const automationFeatures = [
    {
      icon: Users,
      title: 'Customer Onboarding',
      description: 'Automated welcome sequences and personalized onboarding experiences'
    },
    {
      icon: Zap,
      title: 'Proactive Support',
      description: 'AI-powered issue detection and resolution before customers reach out'
    },
    {
      icon: BarChart3,
      title: 'Success Metrics',
      description: 'Real-time tracking of customer health and engagement scores'
    },
    {
      icon: Target,
      title: 'Personalized Engagement',
      description: 'Tailored communication and recommendations based on usage patterns'
    }
  ];

  const benefits = [
    'Increased customer retention',
    'Higher customer satisfaction scores',
    'Reduced support ticket volume',
    'Faster time to value',
    'Improved customer lifetime value',
    'Scalable customer success operations'
  ];

  const useCases = [
    'SaaS & Software Companies',
    'E-commerce Platforms',
    'Financial Services',
    'Healthcare Solutions',
    'Educational Technology',
    'Enterprise Software'
  ];

  return (
    <Layout>
      <SEO
        title="AI Customer Success Automation - Zion Tech Group"
        description="Revolutionary AI-powered automation for customer success and retention optimization"
        keywords={['AI customer success', 'customer success automation', 'customer retention', 'AI automation', 'customer engagement']}
        image="https://ziontechgroup.com/og-ai-customer-success.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-sky-600/20 rounded-full">
                <Heart className="w-12 h-12 text-sky-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Success
              <span className="text-sky-400"> Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer success operations with intelligent automation. 
              Proactively engage customers, prevent churn, and drive growth with AI-powered insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-sky-400 text-sky-400 hover:bg-sky-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Automation Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI-powered customer success automation capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-sky-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-sky-400" />
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

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your customer success with measurable improvements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-sky-400 mr-3" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven solutions across diverse industries and business models
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Globe className="w-12 h-12 text-sky-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {useCase}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Customer Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading companies that are already using AI automation to 
                improve customer retention and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-sky-400 text-sky-400 hover:bg-sky-400/10 font-semibold rounded-lg transition-colors">
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

export default AICustomerSuccessAutomationPage;