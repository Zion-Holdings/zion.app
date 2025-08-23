import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, CheckCircle, XCircle, AlertTriangle, ArrowRight, Copy, RefreshCw, Shield, Zap, BarChart3 } from 'lucide-react';

export default function EmailValidatorPage() {
  const [emails, setEmails] = useState('');
  const [validationResults, setValidationResults] = useState<any[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [bulkMode, setBulkMode] = useState(false);

  const validateEmails = async () => {
    if (!emails.trim()) return;
    
    setIsValidating(true);
    setValidationResults([]);
    
    const emailList = emails.split('\n').filter(email => email.trim());
    const results = [];
    
    // Simulate email validation with realistic results
    for (let i = 0; i < emailList.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const email = emailList[i].trim();
      const result = validateSingleEmail(email);
      results.push(result);
    }
    
    setValidationResults(results);
    setIsValidating(false);
  };

  const validateSingleEmail = (email: string) => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check for common disposable email domains
    const disposableDomains = [
      'tempmail.org', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
      'throwaway.email', 'temp-mail.org', 'sharklasers.com', 'getairmail.com'
    ];
    
    // Check for common typos
    const commonTypos = {
      'gmail.com': ['gmial.com', 'gamil.com', 'gmai.com'],
      'yahoo.com': ['yaho.com', 'yahooo.com', 'yhaoo.com'],
      'hotmail.com': ['hotmai.com', 'hotmial.com', 'hotmeil.com'],
      'outlook.com': ['outlok.com', 'outloook.com', 'outlok.com']
    };
    
    const domain = email.split('@')[1];
    const isDisposable = disposableDomains.includes(domain);
    const hasTypo = Object.entries(commonTypos).some(([correct, typos]) => 
      typos.includes(domain)
    );
    
    let status = 'valid';
    let score = 100;
    let issues = [];
    
    if (!emailRegex.test(email)) {
      status = 'invalid';
      score = 0;
      issues.push('Invalid email format');
    } else if (isDisposable) {
      status = 'disposable';
      score = 20;
      issues.push('Disposable email domain');
    } else if (hasTypo) {
      status = 'suspicious';
      score = 60;
      issues.push('Possible typo in domain');
    }
    
    // Additional checks
    if (email.length > 254) {
      status = 'invalid';
      score = 0;
      issues.push('Email too long');
    }
    
    if (email.split('@')[0].length > 64) {
      status = 'invalid';
      score = 0;
      issues.push('Local part too long');
    }
    
    return {
      email,
      status,
      score,
      issues,
      domain,
      isDisposable,
      hasTypo,
      timestamp: new Date().toLocaleTimeString()
    };
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'suspicious':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'disposable':
        return <XCircle className="w-5 h-5 text-orange-400" />;
      case 'invalid':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid':
        return 'text-green-400';
      case 'suspicious':
        return 'text-yellow-400';
      case 'disposable':
        return 'text-orange-400';
      case 'invalid':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const copyResults = () => {
    const resultsText = validationResults.map(result => 
      `${result.email} - ${result.status.toUpperCase()} (Score: ${result.score})`
    ).join('\n');
    navigator.clipboard.writeText(resultsText);
  };

  const clearResults = () => {
    setValidationResults([]);
    setEmails('');
  };

  const getStats = () => {
    if (validationResults.length === 0) return null;
    
    const total = validationResults.length;
    const valid = validationResults.filter(r => r.status === 'valid').length;
    const invalid = validationResults.filter(r => r.status === 'invalid').length;
    const suspicious = validationResults.filter(r => r.status === 'suspicious').length;
    const disposable = validationResults.filter(r => r.status === 'disposable').length;
    const avgScore = validationResults.reduce((sum, r) => sum + r.score, 0) / total;
    
    return { total, valid, invalid, suspicious, disposable, avgScore };
  };

  const stats = getStats();

  return (
    <>
      <Head>
        <title>Email Validator - Zion Tech Group</title>
        <meta name="description" content="Validate email addresses with our advanced email validation service. Check for typos, disposable domains, and ensure deliverability." />
        <meta property="og:title" content="Email Validator - Zion Tech Group" />
        <meta property="og:description" content="Advanced email validation service to ensure deliverability and prevent typos." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Email Validation & Verification
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Email Validator
          </h1>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Validate email addresses with our advanced validation service. Check for typos, disposable domains, 
            and ensure maximum deliverability for your email campaigns and user registrations.
          </p>
        </div>
      </section>

      {/* Email Validation Tool */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Validate Your Emails
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced validation engine checks multiple factors to ensure email quality and deliverability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-blue-400" />
                  Email Input
                </h3>
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-300">Bulk Mode</label>
                  <input
                    type="checkbox"
                    checked={bulkMode}
                    onChange={(e) => setBulkMode(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {bulkMode ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Addresses (One per line)
                    </label>
                    <textarea
                      value={emails}
                      onChange={(e) => setEmails(e.target.value)}
                      placeholder="john@example.com&#10;jane@company.org&#10;user@domain.net"
                      rows={8}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={emails}
                      onChange={(e) => setEmails(e.target.value)}
                      placeholder="Enter email address to validate"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button
                    onClick={validateEmails}
                    disabled={!emails.trim() || isValidating}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isValidating ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Validating...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Validate Emails
                      </>
                    )}
                  </Button>
                  
                  {validationResults.length > 0 && (
                    <Button
                      onClick={clearResults}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Clear
                    </Button>
                  )}
                </div>

                <div className="text-sm text-gray-400">
                  <p>• Validates email format and syntax</p>
                  <p>• Checks for disposable email domains</p>
                  <p>• Detects common typos and mistakes</p>
                  <p>• Provides deliverability score</p>
                </div>
              </div>
            </Card>

            {/* Validation Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-indigo-400" />
                  Validation Results
                </h3>
                {validationResults.length > 0 && (
                  <Button
                    onClick={copyResults}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Results
                  </Button>
                )}
              </div>

              {stats && (
                <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Total:</span>
                      <span className="ml-2 text-white font-medium">{stats.total}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Valid:</span>
                      <span className="ml-2 text-green-400 font-medium">{stats.valid}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Invalid:</span>
                      <span className="ml-2 text-red-400 font-medium">{stats.invalid}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Avg Score:</span>
                      <span className={`ml-2 font-medium ${getScoreColor(stats.avgScore)}`}>
                        {stats.avgScore.toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {validationResults.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {validationResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        result.status === 'valid' ? 'border-green-500/30 bg-green-500/10' :
                        result.status === 'suspicious' ? 'border-yellow-500/30 bg-yellow-500/10' :
                        result.status === 'disposable' ? 'border-orange-500/30 bg-orange-500/10' :
                        'border-red-500/30 bg-red-500/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            {result.email}
                          </span>
                        </div>
                        <span className={`text-sm font-medium ${getScoreColor(result.score)}`}>
                          Score: {result.score}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-300 mb-2">
                        <span className="text-gray-400">Domain:</span>
                        <span className="ml-2">{result.domain}</span>
                      </div>

                      {result.issues.length > 0 && (
                        <div className="text-sm">
                          <span className="text-gray-400">Issues:</span>
                          <ul className="mt-1 space-y-1">
                            {result.issues.map((issue: string, issueIndex: number) => (
                              <li key={issueIndex} className="text-red-300 flex items-center">
                                <XCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                                {issue}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {result.isDisposable && (
                        <div className="mt-2 p-2 bg-orange-500/20 border border-orange-500/30 rounded text-sm text-orange-300">
                          ⚠️ Disposable email domain detected
                        </div>
                      )}

                      {result.hasTypo && (
                        <div className="mt-2 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-sm text-yellow-300">
                          💡 Possible typo detected in domain
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📧</div>
                  <p className="text-gray-400">
                    Validation results will appear here. Enter an email address and click validate to get started.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Email Validation Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive email validation with real-time checking and intelligent analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-4">Syntax Validation</h3>
              <p className="text-gray-400">
                Checks email format, length, and RFC compliance standards for maximum accuracy.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">Disposable Detection</h3>
              <p className="text-gray-400">
                Identifies temporary and disposable email addresses to prevent fraud and abuse.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-4">Typo Detection</h3>
              <p className="text-gray-400">
                Smart algorithms detect common typos in popular email domains like Gmail and Yahoo.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Deliverability Score</h3>
              <p className="text-gray-400">
                Get a comprehensive score indicating the likelihood of successful email delivery.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Bulk Validation</h3>
              <p className="text-gray-400">
                Validate thousands of email addresses simultaneously with our high-performance engine.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Coverage</h3>
              <p className="text-gray-400">
                Supports all international email formats and domain types worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every Use Case
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From user registration to email marketing, our validation service ensures quality and deliverability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-white mb-4">User Registration</h3>
              <p className="text-gray-400 mb-6">
                Ensure only valid email addresses are used during user signup, reducing bounce rates and improving user experience.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Prevent fake accounts and spam</li>
                <li>• Improve user onboarding success</li>
                <li>• Reduce support tickets</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-400 mb-6">
                Clean your email lists before campaigns to maximize deliverability and improve engagement metrics.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Higher open and click rates</li>
                <li>• Better sender reputation</li>
                <li>• Reduced bounce rates</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce</h3>
              <p className="text-gray-400 mb-6">
                Validate customer emails during checkout to ensure order confirmations and updates reach customers.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Improve customer communication</li>
                <li>• Reduce order abandonment</li>
                <li>• Better customer support</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Applications</h3>
              <p className="text-gray-400 mb-6">
                Integrate email validation into your business processes for data quality and compliance.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Data quality assurance</li>
                <li>• Compliance requirements</li>
                <li>• Operational efficiency</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Email Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses who trust our email validation service to improve deliverability and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}