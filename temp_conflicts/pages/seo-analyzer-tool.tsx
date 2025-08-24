import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react';

export default function SEOAnalyzerToolPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [url, setUrl] = useState('');

  const features = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'Comprehensive SEO Analysis',
      description: 'Deep analysis of on-page SEO factors, technical issues, and content optimization opportunities.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Keyword Research',
      description: 'Discover high-value keywords and analyze search intent to optimize your content strategy.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Competitive Analysis',
      description: 'Analyze your competitors\' SEO strategies and identify opportunities to outperform them.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and actionable insights to improve your search rankings.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
  ];

  const seoFactors = [
    {
      category: 'On-Page SEO',
      factors: [
        'Title tags optimization',
        'Meta descriptions',
        'Header structure (H1, H2, H3)',
        'Content quality and length',
        'Internal linking structure',
        'Image optimization (alt tags)'
      ],
      icon: '📝',
      color: 'text-green-400'
    },
    {
      category: 'Technical SEO',
      factors: [
        'Page load speed',
        'Mobile responsiveness',
        'XML sitemap',
        'Robots.txt configuration',
        'SSL certificate',
        'Core Web Vitals'
      ],
      icon: '⚙️',
      color: 'text-blue-400'
    },
    {
      category: 'Content SEO',
      factors: [
        'Keyword density',
        'Content relevance',
        'Readability scores',
        'Content freshness',
        'Multimedia optimization',
        'Schema markup'
      ],
      icon: '📊',
      color: 'text-purple-400'
    },
    {
      category: 'Local SEO',
      factors: [
        'Google My Business',
        'Local citations',
        'Review management',
        'Local keyword targeting',
        'Location-based content',
        'Local link building'
      ],
      icon: '📍',
      color: 'text-orange-400'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and bloggers',
      features: [
        '10 website analyses/month',
        'Basic SEO metrics',
        'Keyword research (100 keywords)',
        'On-page SEO analysis',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$89',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '50 website analyses/month',
        'Advanced SEO metrics',
        'Keyword research (500 keywords)',
        'Competitive analysis',
        'Priority support',
        'Advanced reporting',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: '/month',
      description: 'For large organizations and SEO agencies',
      features: [
        'Unlimited analyses',
        'Enterprise SEO metrics',
        'Unlimited keyword research',
        'Advanced competitive analysis',
        '24/7 dedicated support',
        'Custom reporting',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const handleAnalyzeSEO = async () => {
    if (!url.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate SEO analysis
    setTimeout(() => {
      setAnalysisResults({
        url: url,
        overallScore: 78,
        onPageScore: 82,
        technicalScore: 75,
        contentScore: 80,
        mobileScore: 85,
        issues: [
          { type: 'error', message: 'Missing meta description', priority: 'high' },
          { type: 'warning', message: 'Title tag too long (65 characters)', priority: 'medium' },
          { type: 'info', message: 'Consider adding more internal links', priority: 'low' }
        ],
        recommendations: [
          'Optimize meta descriptions for better click-through rates',
          'Improve page load speed by optimizing images',
          'Add more relevant internal links to improve site structure',
          'Implement schema markup for rich snippets'
        ],
        keywords: [
          { keyword: 'website optimization', volume: '12K', difficulty: 'medium' },
          { keyword: 'SEO tools', volume: '8K', difficulty: 'low' },
          { keyword: 'search engine optimization', volume: '15K', difficulty: 'high' }
        ]
      });
      setIsAnalyzing(false);
    }, 4000);
  };

  return (
    <>
      <Head>
        <title>SEO Analyzer Tool - Zion Tech Group | Professional SEO Analysis & Optimization</title>
        <meta name="description" content="Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve search rankings." />
        <meta property="og:title" content="SEO Analyzer Tool - Zion Tech Group" />
        <meta property="og:description" content="Professional SEO analysis tool with comprehensive insights and optimization recommendations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Professional SEO Analysis
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            SEO Analyzer Tool
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, 
            keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.
          </p>
          
          {/* URL Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter your website URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button
                onClick={handleAnalyzeSEO}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap"
                disabled={isAnalyzing || !url.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Analyze SEO
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="#pricing"
              variant="outline"
              size="lg"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl"
            >
              View Pricing
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Powerful SEO Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-green"
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

      {/* SEO Factors Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive SEO Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoFactors.map((category, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-green"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.factors.map((factor, factorIndex) => (
                    <li key={factorIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Analysis Results */}
      {analysisResults && (
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                SEO Analysis Results
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample analysis of a website. Get comprehensive insights for your own website.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Overall Score */}
              <Card className="border-gradient-green text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall SEO Score</h3>
                <div className="text-6xl font-bold text-green-400 mb-4">{analysisResults.overallScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-green-500"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">Good SEO foundation with room for improvement</p>
              </Card>

              {/* Detailed Scores */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Detailed Scores</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">On-Page SEO</span>
                    <span className="font-bold text-green-400">{analysisResults.onPageScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technical SEO</span>
                    <span className="font-bold text-orange-400">{analysisResults.technicalScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Content SEO</span>
                    <span className="font-bold text-blue-400">{analysisResults.contentScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Mobile SEO</span>
                    <span className="font-bold text-green-400">{analysisResults.mobileScore}/100</span>
                  </div>
                </div>
              </Card>

              {/* Issues */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Issues Found</h3>
                <div className="space-y-3">
                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-gray-300">{issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">Priority: {issue.priority}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recommendations and Keywords */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
                <div className="space-y-3">
                  {analysisResults.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{rec}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Keyword Opportunities</h3>
                <div className="space-y-4">
                  {analysisResults.keywords.map((keyword, index) => (
                    <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">{keyword.keyword}</span>
                        <span className="text-sm text-gray-400">Volume: {keyword.volume}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Difficulty: {keyword.difficulty}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          keyword.difficulty === 'low' ? 'bg-green-500/20 text-green-400' :
                          keyword.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {keyword.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
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
              Choose the SEO analysis plan that best fits your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`card-hover border-gradient-green ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
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
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Improve Your SEO Rankings?
          </h2>
          <p className="text-responsive-md text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses using our SEO analyzer to improve their search rankings and drive more organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}