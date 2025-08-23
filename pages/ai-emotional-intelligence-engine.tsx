import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Shield, Star, Heart, Brain, Eye, Zap, Lock, Globe, BarChart3, Users, TrendingUp } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function AIEmotionalIntelligenceEnginePage() {
  const service = {
    name: 'AI Emotional Intelligence Engine',
    tagline: 'Understand and respond to human emotions with AI-powered EQ',
    price: '$2,499',
    period: '/month',
    description: 'Advanced AI system that analyzes voice, text, and facial expressions to understand emotional context and provide emotionally intelligent responses for customer service, healthcare, and human resources.',
    features: [
      'Multi-modal emotion recognition (voice, text, video)',
      'Real-time emotional state analysis',
      'Emotion-aware response generation',
      'Sentiment trend analysis and reporting',
      'Custom emotion detection models',
      'API for integration with existing systems',
      'Compliance with privacy regulations',
      'Multi-language emotional intelligence',
      'Emotional health monitoring dashboards'
    ],
    rating: 4.9,
    trialDays: 21,
    setupTime: '2-3 weeks',
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
        <link rel="canonical" href="https://ziontechgroup.com/ai-emotional-intelligence-engine" />
        <meta property="og:title" content={`${service.name} - Zion Tech Group`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content="https://ziontechgroup.com/ai-emotional-intelligence-engine" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-pink-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Heart className="w-12 h-12" />
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
              <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-pink-400" />
                  Core Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-slate-200">
                      <Check className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-pink-400" />
                  Use Cases & Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-pink-400">Customer Service</h3>
                    <p className="text-slate-300 text-sm">Detect customer frustration in real-time and route calls to appropriate agents, improving satisfaction scores by 35%.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-pink-400">Healthcare</h3>
                    <p className="text-slate-300 text-sm">Monitor patient emotional states during telehealth sessions and provide mental health screening support.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-pink-400">Human Resources</h3>
                    <p className="text-slate-300 text-sm">Analyze employee sentiment in surveys and meetings to identify workplace issues and improve retention.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-pink-400">Call Centers</h3>
                    <p className="text-slate-300 text-sm">Optimize call routing based on emotional state and provide real-time coaching to agents.</p>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-pink-400" />
                  Technology & Integrations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400 mb-3">Core Technologies</h3>
                    <div className="space-y-2">
                      {['Python & TensorFlow', 'PyTorch & OpenCV', 'NLP & Computer Vision', 'Real-time Processing', 'Cloud-native Architecture'].map((tech, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400 mb-3">Integrations</h3>
                    <div className="space-y-2">
                      {['Salesforce & Zendesk', 'Microsoft Teams & Slack', 'Zoom & WebRTC', 'CRM Platforms', 'Custom APIs'].map((integration, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
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
              <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    {service.price}
                    <span className="text-slate-400 text-lg">{service.period}</span>
                  </div>
                  <div className="flex items-center justify-center text-yellow-400 mb-3">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{service.rating.toFixed(1)}</span>
                    <span className="text-slate-400 text-sm ml-2">(156 reviews)</span>
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
              <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span>{service.contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0 mt-1" />
                    <span className="text-xs leading-relaxed">{service.contactInfo.address}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-pink-500/30">
                  <Button href={service.contactInfo.website} variant="outline" size="sm" className="w-full">
                    Visit Website
                  </Button>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Key Benefits</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Improve customer satisfaction by 35%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Reduce employee turnover by 25%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">99.2% accuracy in emotion detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Real-time emotional insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Position & ROI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-pink-400" />
                Market Position
              </h2>
              <p className="text-slate-300 mb-4">
                Leading emotional AI platform with 99.2% accuracy in emotion detection. 
                Comparable to Affectiva and Realeyes, but with enterprise-grade features and 
                comprehensive integration capabilities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Market Size:</span>
                  <span className="text-white">$15B+ by 2030</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Growth Rate:</span>
                  <span className="text-white">220% YoY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Audience:</span>
                  <span className="text-white">Healthcare, Customer Service, HR</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-pink-400" />
                ROI & Business Impact
              </h2>
              <div className="space-y-4">
                <div className="bg-pink-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-pink-400 mb-2">Customer Experience</h3>
                  <p className="text-slate-300 text-sm">Improve customer satisfaction scores by 35% through emotional intelligence-driven interactions.</p>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-pink-400 mb-2">Employee Retention</h3>
                  <p className="text-slate-300 text-sm">Reduce employee turnover by 25% by identifying and addressing workplace emotional issues early.</p>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-pink-400 mb-2">Operational Efficiency</h3>
                  <p className="text-slate-300 text-sm">Optimize call routing and agent allocation based on emotional state analysis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl border border-pink-500/30 p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with Emotional AI?</h2>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Join 156+ organizations already using our AI Emotional Intelligence Engine to 
              improve customer satisfaction, employee retention, and operational efficiency.
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