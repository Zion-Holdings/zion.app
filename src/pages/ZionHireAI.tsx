import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Wrench, Tool, Cog, Server as ServerIcon, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Building as BuildingIcon, Factory as FactoryIcon, Store as StoreIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Home as HomeIcon, Building2 as Building2Icon, GraduationCap as GraduationCapIcon, Calendar as CalendarIcon, FileText as FileTextIcon, BarChart3 as BarChart3Icon, Users as UsersIcon2, CreditCard as CreditCardIcon2, MessageSquare as MessageSquareIcon, Camera as CameraIcon, Video as VideoIcon, Music as MusicIcon, BookOpen as BookOpenIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as ZapIcon4, LucideUserCheck, LucideUser, LucideUserCog, LucideUserCircle } from 'lucide-react';

const ZionHireAI: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('recruitment');

  const aiHiringFeatures = [
    {
      id: 'recruitment',
      title: 'AI-Powered Recruitment',
      icon: LucideUser,
      description: 'Intelligent candidate sourcing and screening using advanced AI algorithms',
      features: [
        'Automated job posting optimization',
        'AI-powered candidate matching',
        'Resume parsing and analysis',
        'Skills assessment automation',
        'Cultural fit evaluation',
        'Predictive hiring success scoring'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve candidate quality by 40%',
        'Eliminate unconscious bias',
        'Scale recruitment efforts',
        'Data-driven decisions',
        'Cost reduction in hiring'
      ]
    },
    {
      id: 'screening',
      title: 'Intelligent Screening',
      icon: LucideUserCheck,
      description: 'Advanced candidate screening with behavioral analysis and skill assessment',
      features: [
        'Behavioral pattern analysis',
        'Technical skill assessment',
        'Personality profiling',
        'Communication evaluation',
        'Problem-solving assessment',
        'Cultural alignment scoring'
      ],
      benefits: [
        'Accurate candidate evaluation',
        'Reduced interview time',
        'Better hiring decisions',
        'Improved retention rates',
        'Objective assessment',
        'Comprehensive candidate insights'
      ]
    },
    {
      id: 'onboarding',
      title: 'Smart Onboarding',
      icon: LucideUser,
      description: 'AI-driven onboarding process for seamless new employee integration',
      features: [
        'Personalized onboarding plans',
        'Automated document processing',
        'Training program optimization',
        'Progress tracking',
        'Mentor matching',
        'Performance prediction'
      ],
      benefits: [
        'Faster employee productivity',
        'Improved retention rates',
        'Reduced administrative burden',
        'Personalized experience',
        'Better engagement',
        'Faster time-to-value'
      ]
    },
    {
      id: 'retention',
      title: 'Employee Retention AI',
      icon: LucideUserCircle,
      description: 'Predictive analytics to identify retention risks and improve employee satisfaction',
      features: [
        'Retention risk prediction',
        'Satisfaction monitoring',
        'Career path optimization',
        'Engagement analysis',
        'Exit interview insights',
        'Proactive intervention'
      ],
      benefits: [
        'Reduce turnover by 30%',
        'Improve employee satisfaction',
        'Lower recruitment costs',
        'Better workplace culture',
        'Proactive retention strategies',
        'Data-driven HR decisions'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 299,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 job postings/month',
        'AI candidate screening',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 599,
      period: 'month',
      description: 'Ideal for growing companies and HR teams',
      features: [
        'Up to 200 job postings/month',
        'Advanced AI screening',
        'Behavioral analysis',
        'Priority support',
        'Advanced integrations',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1299,
      period: 'month',
      description: 'For large organizations with complex hiring needs',
      features: [
        'Unlimited job postings',
        'Full AI suite',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'API access',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: '60%', label: 'Faster Hiring Time' },
    { metric: '40%', label: 'Better Candidate Quality' },
    { metric: '30%', label: 'Reduced Turnover' },
    { metric: '50%', label: 'Cost Reduction' }
  ];

  return (
    <>
      <SEO 
        title="Zion Hire AI - AI-Powered Hiring Solutions | Zion Tech Group"
        description="Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention with cutting-edge machine learning technology."
        canonical="https://ziontechgroup.com/zion-hire-ai"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Hire AI
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://ziontechgroup.com"
                className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
              <a 
                href="#demo"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                  {item.metric}
                </div>
                <div className="text-zion-slate-light">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              AI-Powered Hiring Solutions
            </h2>
            
            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {aiHiringFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedFeature === feature.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5" />
                    {feature.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Feature Content */}
            {aiHiringFeatures.map((feature) => (
              selectedFeature === feature.id && (
                <div key={feature.id} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-zion-cyan" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-zion-slate-light mb-6">{feature.description}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {feature.features.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <Star className="w-4 h-4 text-zion-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Pricing Plans
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular 
                      ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                      : 'border-zion-cyan/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-zion-cyan text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="https://ziontechgroup.com"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-zion-cyan/30'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Powered by Advanced AI Technology
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
                <p className="text-zion-slate-light text-sm">Advanced ML algorithms for pattern recognition and prediction</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Big Data Analytics</h3>
                <p className="text-zion-slate-light text-sm">Process and analyze vast amounts of hiring data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Ethics & Bias Detection</h3>
                <p className="text-zion-slate-light text-sm">Ensure fair and unbiased hiring decisions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud-Native Architecture</h3>
                <p className="text-zion-slate-light text-sm">Scalable, secure, and always-available platform</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-zion-slate-light text-center mb-6">
              Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionHireAI;