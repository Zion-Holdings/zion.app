import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Code, CheckCircle, AlertTriangle, Zap, BarChart3, ArrowRight, Play, Shield, Clock, TrendingUp } from 'lucide-react';

export default function CodeQualityCheckerPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [codeInput, setCodeInput] = useState('');

  const features = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Multi-Language Support',
      description: 'Support for JavaScript, TypeScript, Python, Java, C++, Go, and many more programming languages.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: 'Code Quality Metrics',
      description: 'Comprehensive analysis including complexity, maintainability, test coverage, and security vulnerabilities.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Real-Time Analysis',
      description: 'Instant code quality feedback with detailed explanations and improvement suggestions.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Security Scanning',
      description: 'Automated detection of security vulnerabilities, dependency issues, and best practice violations.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500',
    },
  ];

  const supportedLanguages = [
    { name: 'JavaScript/TypeScript', icon: '⚡', features: ['ESLint rules', 'TypeScript checks', 'React best practices'] },
    { name: 'Python', icon: '🐍', features: ['PEP 8 compliance', 'Type hints', 'Security scanning'] },
    { name: 'Java', icon: '☕', features: ['PMD rules', 'Checkstyle', 'SonarQube integration'] },
    { name: 'C++', icon: '⚙️', features: ['Clang-tidy', 'Static analysis', 'Memory leak detection'] },
    { name: 'Go', icon: '🟢', features: ['Golangci-lint', 'Go vet', 'Performance analysis'] },
    { name: 'PHP', icon: '🐘', features: ['PHPStan', 'PHP CS Fixer', 'Security analysis'] }
  ];

  const pricing = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers and small projects',
      features: [
        '100 code analyses/month',
        'Basic quality metrics',
        '5 programming languages',
        'Email support',
        'Basic reporting',
        'Community rules'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$79',
      period: '/month',
      description: 'Ideal for development teams and growing companies',
      features: [
        '500 code analyses/month',
        'Advanced quality metrics',
        'All programming languages',
        'Priority support',
        'Advanced reporting',
        'Custom rules',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex codebases',
      features: [
        'Unlimited analyses',
        'Enterprise metrics',
        'Custom language support',
        '24/7 dedicated support',
        'Custom reporting',
        'White-label options',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const handleAnalyzeCode = async () => {
    if (!codeInput.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate code analysis
    setTimeout(() => {
      setAnalysisResults({
        language: 'JavaScript',
        qualityScore: 85,
        issues: [
          { type: 'warning', message: 'Consider using const instead of let for variables that are not reassigned', line: 5, severity: 'medium' },
          { type: 'info', message: 'Function is quite long (25 lines). Consider breaking it into smaller functions', line: 12, severity: 'low' },
          { type: 'error', message: 'Missing semicolon at end of statement', line: 18, severity: 'high' }
        ],
        metrics: {
          complexity: 'Medium',
          maintainability: 'Good',
          testCoverage: '85%',
          securityScore: '92%'
        },
        recommendations: [
          'Use const for immutable variables to improve code clarity',
          'Break down large functions into smaller, more focused functions',
          'Add proper error handling for better robustness',
          'Consider adding JSDoc comments for better documentation'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Code Quality Checker - Zion Tech Group | Professional Code Analysis & Improvement Tool</title>
        <meta name="description" content="Analyze and improve your code quality with our comprehensive checker. Support for multiple languages, security scanning, and detailed improvement recommendations." />
        <meta property="og:title" content="Code Quality Checker - Zion Tech Group" />
        <meta property="og:description" content="Professional code quality analysis tool with multi-language support and security scanning." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Professional Code Analysis
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Code Quality Checker
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Analyze and improve your code quality with our comprehensive checker. Support for multiple programming languages, 
            security scanning, and detailed improvement recommendations. Write better, safer, and more maintainable code.
          </p>
          
          {/* Code Input Form */}
          <div className="max-w-4xl mx-auto mb-8">
            <textarea
              placeholder="Paste your code here for analysis... (Supports JavaScript, TypeScript, Python, Java, C++, Go, PHP, and more)"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className="w-full h-32 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-mono text-sm"
            />
            <Button
              onClick={handleAnalyzeCode}
              size="lg"
              className="w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-2xl hover-glow"
              disabled={isAnalyzing || !codeInput.trim()}
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Analyzing Code...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Analyze Code Quality
                </>
              )}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="#pricing"
              variant="outline"
              size="lg"
              className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl"
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
              Powerful Analysis Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-teal"
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

      {/* Supported Languages Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Multi-Language Support
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We support a wide range of programming languages with language-specific analysis rules and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedLanguages.map((language, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-teal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{language.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{language.name}</h3>
                </div>
                <ul className="space-y-2">
                  {language.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                      {feature}
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
                Code Quality Analysis Results
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample code quality analysis. Get comprehensive insights for your own code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Quality Score */}
              <Card className="border-gradient-teal text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall Quality Score</h3>
                <div className="text-6xl font-bold text-teal-400 mb-4">{analysisResults.qualityScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults.qualityScore / 100) * 100}, 100`}
                      className="text-teal-500"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">Good code quality with room for improvement</p>
              </Card>

              {/* Issues Found */}
              <Card className="border-gradient-teal">
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
                        <span className="text-gray-300 text-sm">{issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">
                          Line {issue.line} • Severity: {issue.severity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quality Metrics */}
              <Card className="border-gradient-teal">
                <h3 className="text-2xl font-bold mb-6 text-white">Quality Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Complexity</span>
                    <span className="text-orange-400 font-bold">{analysisResults.metrics.complexity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Maintainability</span>
                    <span className="text-green-400 font-bold">{analysisResults.metrics.maintainability}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Test Coverage</span>
                    <span className="text-blue-400 font-bold">{analysisResults.metrics.testCoverage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Security Score</span>
                    <span className="text-green-400 font-bold">{analysisResults.metrics.securityScore}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="border-gradient-teal">
              <h3 className="text-2xl font-bold mb-6 text-white">Improvement Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
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
              Choose the code quality analysis plan that best fits your development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`card-hover border-gradient-teal ${plan.popular ? 'ring-2 ring-teal-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
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
      <section className="section-padding bg-gradient-to-r from-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-responsive-md text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of developers using our code quality checker to write better, safer, and more maintainable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-600 shadow-2xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}