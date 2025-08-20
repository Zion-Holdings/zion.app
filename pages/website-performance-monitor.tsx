import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock } from 'lucide-react';

export default function WebsitePerformanceMonitorPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: 'Real-Time Monitoring',
      description: '24/7 monitoring of your website performance with instant alerts and notifications.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      title: 'Performance Metrics',
      description: 'Comprehensive metrics including Core Web Vitals, page load times, and user experience scores.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-white" />,
      title: 'Issue Detection',
      description: 'Automatically detect and alert on performance issues, downtime, and bottlenecks.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Performance Optimization',
      description: 'AI-powered recommendations to improve your website speed and user experience.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500',
    },
  ];

  const metrics = [
    {
      name: 'Core Web Vitals',
      description: 'LCP, FID, and CLS metrics that directly impact user experience and SEO rankings.',
      icon: '⚡',
      color: 'text-blue-400'
    },
    {
      name: 'Page Load Time',
      description: 'Comprehensive analysis of page load performance across different devices and locations.',
      icon: '🚀',
      color: 'text-green-400'
    },
    {
      name: 'Uptime Monitoring',
      description: '99.9% uptime monitoring with instant alerts for any downtime or performance issues.',
      icon: '🔄',
      color: 'text-purple-400'
    },
    {
      name: 'Mobile Performance',
      description: 'Mobile-first performance testing and optimization recommendations.',
      icon: '📱',
      color: 'text-orange-400'
    },
    {
      name: 'SEO Impact',
      description: 'Performance metrics that directly affect your search engine rankings and visibility.',
      icon: '🔍',
      color: 'text-cyan-400'
    },
    {
      name: 'User Experience',
      description: 'Real user experience metrics and conversion impact analysis.',
      icon: '👥',
      color: 'text-pink-400'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small websites and blogs',
      features: [
        '5 websites monitored',
        'Basic performance metrics',
        'Daily monitoring',
        'Email alerts',
        'Basic reporting',
        'Core Web Vitals tracking'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and e-commerce sites',
      features: [
        '25 websites monitored',
        'Advanced performance metrics',
        'Real-time monitoring',
        'SMS & email alerts',
        'Advanced reporting',
        'Performance optimization tips',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with critical performance requirements',
      features: [
        'Unlimited websites',
        'Enterprise-grade monitoring',
        'Custom alerting rules',
        '24/7 support',
        'Custom integrations',
        'White-label reporting',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false
    }
  ];

  const handleAnalyzeWebsite = async () => {
    setIsAnalyzing(true);
    // Simulate website analysis
    setTimeout(() => {
      setAnalysisResults({
        url: 'https://example.com',
        overallScore: 87,
        lcp: '2.1s',
        fid: '45ms',
        cls: '0.08',
        loadTime: '1.8s',
        recommendations: [
          'Optimize images and implement lazy loading',
          'Minimize render-blocking resources',
          'Enable compression and caching',
          'Consider using a CDN for global performance'
        ]
      });
      setIsAnalyzing(false);
    }, 4000);
  };

  return (
    <>
      <Head>
        <title>Website Performance Monitor - Zion Tech Group | Real-Time Website Monitoring Tool</title>
        <meta name="description" content="Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations." />
        <meta property="og:title" content="Website Performance Monitor - Zion Tech Group" />
        <meta property="og:description" content="Real-time website performance monitoring with Core Web Vitals tracking and optimization recommendations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Real-Time Performance Monitoring
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Website Performance Monitor
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, 
            and AI-powered optimization recommendations. Never let performance issues impact your users again.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleAnalyzeWebsite}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Analyze Website
                </>
              )}
            </Button>
            <Button
              href="#pricing"
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-2xl"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Powerful Monitoring Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our performance monitoring platform provides everything you need to keep your website fast and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive Performance Metrics
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Track all the metrics that matter for your website's performance and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${metric.color}`}>{metric.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Analysis Section */}
      {analysisResults && (
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                Performance Analysis Results
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample analysis of a website. Get real-time insights for your own website.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Score Card */}
              <Card className="border-gradient-blue text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall Performance Score</h3>
                <div className="text-6xl font-bold text-blue-400 mb-4">{analysisResults.overallScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-blue-500"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">Good performance with room for improvement</p>
              </Card>

              {/* Metrics Card */}
              <Card className="border-gradient-blue">
                <h3 className="text-2xl font-bold mb-6 text-white">Core Web Vitals</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">LCP (Largest Contentful Paint)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.lcp) < 2.5 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.lcp}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">FID (First Input Delay)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.fid) < 100 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.fid}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CLS (Cumulative Layout Shift)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.cls) < 0.1 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.cls}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Page Load Time</span>
                    <span className={`font-bold ${parseFloat(analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.loadTime}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="border-gradient-blue mt-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{rec}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the monitoring plan that best fits your website performance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`card-hover border-gradient-blue ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Monitor Your Website Performance?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses using our monitoring platform to keep their websites fast and reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}