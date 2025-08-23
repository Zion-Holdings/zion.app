import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Shield, AlertTriangle, BarChart3, Zap, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const AIFinancialFraudDetectionPage: React.FC = () => {
  const detectionFeatures = [
    {
      icon: Shield,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of financial transactions for suspicious activity'
    },
    {
      icon: AlertTriangle,
      title: 'Pattern Recognition',
      description: 'AI algorithms that identify complex fraud patterns and anomalies'
    },
    {
      icon: BarChart3,
      title: 'Risk Scoring',
      description: 'Dynamic risk assessment and scoring for each transaction'
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Immediate notifications for potential fraud with detailed analysis'
    }
  ];

  const fraudTypes = [
    'Credit Card Fraud',
    'Identity Theft',
    'Money Laundering',
    'Account Takeover',
    'Synthetic Identity Fraud',
    'Payment Fraud',
    'Insurance Fraud',
    'Investment Scams'
  ];

  const benefits = [
    '99.9% fraud detection accuracy',
    'Real-time transaction monitoring',
    'Reduced false positives',
    'Compliance with regulations',
    'Cost savings from fraud prevention',
    'Enhanced customer trust'
  ];

  return (
    <Layout>
      <SEO
        title="AI Financial Fraud Detection - Zion Tech Group"
        description="Advanced AI-powered financial fraud detection and prevention solutions for secure transactions"
        keywords={['AI fraud detection', 'financial fraud', 'fraud prevention', 'AI security', 'transaction monitoring']}
        image="https://ziontechgroup.com/og-ai-fraud-detection.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-600/20 rounded-full">
                <Shield className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial
              <span className="text-red-400"> Fraud Detection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your financial operations with cutting-edge AI-powered fraud detection. 
              Identify and prevent fraudulent activities in real-time with unprecedented accuracy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                Get Protected
              </button>
              <button className="px-8 py-3 border border-red-400 text-red-400 hover:bg-red-400/10 font-semibold rounded-lg transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Detection Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detection Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI-powered fraud detection capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {detectionFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-red-400" />
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

        {/* Fraud Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fraud Types Detected
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all major fraud categories
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fraudTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <AlertTriangle className="w-12 h-12 text-red-400 mx-auto" />
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
                Transform your fraud prevention with measurable improvements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-red-400 mr-3" />
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
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Stop Financial Fraud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading financial institutions that are already using AI to 
                prevent fraud and protect their customers and assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                  Start Protection
                </button>
                <button className="px-8 py-4 border border-red-400 text-red-400 hover:bg-red-400/10 font-semibold rounded-lg transition-colors">
                  Contact Security Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIFinancialFraudDetectionPage;