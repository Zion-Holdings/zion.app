import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Shield, Star, MessageSquare, Brain, BarChart3, TrendingUp, Users, Zap, Globe, Lock, Target } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function AIPoweredCustomerFeedbackAnalyzerPage() {
  const service = {
    name: 'AI-Powered Customer Feedback Analyzer',
    tagline: 'Transform customer feedback into actionable insights with AI',
    price: '$299',
    period: '/month',
    description: 'Intelligent feedback analysis platform that uses natural language processing and sentiment analysis to automatically categorize, analyze, and extract actionable insights from customer feedback across multiple channels.',
    features: [
      'Multi-channel feedback collection',
      'AI-powered sentiment analysis',
      'Automatic feedback categorization',
      'Trend analysis and reporting',
      'Real-time alert system',
      'Integration with CRM platforms',
      'Custom dashboard and reports',
      'Multi-language support',
      'API for custom integrations'
    ],
    rating: 4.8,
    trialDays: 14,
    setupTime: '1 week',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-customer-feedback-analyzer" />
        <meta property="og:title" content={`${service.name} - Zion Tech Group`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-customer-feedback-analyzer" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <MessageSquare className="w-12 h-12" />
              {service.name}
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {service.tagline}
            </p>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Features Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Core Capabilities */}
              <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-cyan-400" />
                  Core Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-slate-200">
                      <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-cyan-400" />
                  Use Cases & Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-cyan-400">Customer Success</h3>
                    <p className="text-slate-300 text-sm">Analyze customer satisfaction scores, identify pain points, and track sentiment trends over time.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-cyan-400">Product Improvement</h3>
                    <p className="text-slate-300 text-sm">Extract feature requests and bug reports from feedback to prioritize development efforts.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-cyan-400">Service Quality</h3>
                    <p className="text-slate-300 text-sm">Monitor service quality metrics and identify areas for improvement in customer support.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-cyan-400">Market Research</h3>
                    <p className="text-slate-300 text-sm">Gain insights into customer preferences, market trends, and competitive positioning.</p>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  Technology & Integrations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Core Technologies</h3>
                    <div className="space-y-2">
                      {['Python & TensorFlow', 'React & Node.js', 'PostgreSQL & Redis', 'NLP & Sentiment Analysis', 'Real-time Processing'].map((tech, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Integrations</h3>
                    <div className="space-y-2">
                      {['Salesforce & HubSpot', 'Zendesk & Shopify', 'WooCommerce & Mailchimp', 'Custom APIs', 'Webhook Support'].map((integration, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{integration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing & Contact Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    {service.price}
                    <span className="text-slate-400 text-lg">{service.period}</span>
                  </div>
                  <div className="flex items-center justify-center text-yellow-400 mb-3">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{service.rating.toFixed(1)}</span>
                    <span className="text-slate-400 text-sm ml-2">(167 reviews)</span>
                  </div>
                  <div className="text-slate-400 text-sm space-y-1">
                    <div>{service.trialDays}-day free trial</div>
                    <div>Setup: {service.setupTime}</div>
                  </div>
                </div>
                
                <Button href="/contact" variant="quantum" size="lg" className="w-full mb-4">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <div className="text-center text-sm text-slate-400">
                  No credit card required • Cancel anytime
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{service.contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-xs leading-relaxed">{service.contactInfo.address}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-cyan-500/30">
                  <Button href={service.contactInfo.website} variant="outline" size="sm" className="w-full">
                    Visit Website
                  </Button>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Key Benefits</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Improve customer satisfaction by 25%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Reduce customer churn by 30%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Real-time sentiment analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Multi-language support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Position & ROI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
                Market Position
              </h2>
              <p className="text-slate-300 mb-4">
                Leading AI-powered feedback analysis platform for customer insights. 
                Comparable to Qualtrics and SurveyMonkey, but with advanced AI capabilities 
                and comprehensive integration features.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Market Size:</span>
                  <span className="text-white">$8B+ by 2030</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Growth Rate:</span>
                  <span className="text-white">140% YoY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Audience:</span>
                  <span className="text-white">Customer Success, Marketing, E-commerce</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                ROI & Business Impact
              </h2>
              <div className="space-y-4">
                <div className="bg-cyan-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-400 mb-2">Customer Experience</h3>
                  <p className="text-slate-300 text-sm">Improve customer satisfaction scores by 25% through data-driven insights and proactive issue resolution.</p>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-400 mb-2">Customer Retention</h3>
                  <p className="text-slate-300 text-sm">Reduce customer churn by 30% by identifying and addressing issues before they lead to customer loss.</p>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-400 mb-2">Operational Efficiency</h3>
                  <p className="text-slate-300 text-sm">Automate feedback analysis and save 15+ hours per week on manual sentiment analysis tasks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Customer Feedback into Actionable Insights?</h2>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Join 234+ organizations already using our AI-Powered Customer Feedback Analyzer to 
              improve customer satisfaction, reduce churn, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="quantum" size="lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href={`tel:${service.contactInfo.mobile}`} variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}