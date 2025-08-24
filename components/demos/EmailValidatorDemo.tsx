import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Mail, CheckCircle, XCircle, AlertCircle, Info, Copy, ExternalLink } from 'lucide-react';

interface EmailValidationResult {
  email: string;
  isValid: boolean;
  score: number;
  suggestions: string[];
  details: {
    hasValidFormat: boolean;
    hasValidDomain: boolean;
    hasValidMX: boolean;
    isDisposable: boolean;
    isRoleBased: boolean;
    isFreeProvider: boolean;
  };
}

export default function EmailValidatorDemo() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<EmailValidationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = async () => {
    if (!email.trim()) {
      setError('Please enter an email address');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/email-validator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error('Validation failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to validate email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    if (score >= 20) return 'Poor';
    return 'Very Poor';
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Email Validator Pro</h3>
        <p className="text-gray-400">Test our advanced email validation service</p>
      </div>

      {/* Input Section */}
      <div className="mb-8">
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address to validate..."
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && validateEmail()}
          />
          <Button
            onClick={validateEmail}
            disabled={loading}
            className="px-6 py-3"
          >
            {loading ? 'Validating...' : 'Validate'}
          </Button>
        </div>
        {error && (
          <div className="mt-3 flex items-center text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </div>
        )}
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Validation Results</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Score:</span>
                <span className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
                  {result.score}/100
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  result.isValid 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {getScoreLabel(result.score)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                {result.isValid ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className="text-gray-300">
                  {result.isValid ? 'Valid Email' : 'Invalid Email'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  {result.details.isDisposable ? 'Disposable Email' : 'Permanent Email'}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-white mb-4">Technical Details</h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Format Valid</span>
                  <span className={result.details.hasValidFormat ? 'text-green-400' : 'text-red-400'}>
                    {result.details.hasValidFormat ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Domain Valid</span>
                  <span className={result.details.hasValidDomain ? 'text-green-400' : 'text-red-400'}>
                    {result.details.hasValidDomain ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">MX Records</span>
                  <span className={result.details.hasValidMX ? 'text-green-400' : 'text-red-400'}>
                    {result.details.hasValidMX ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Disposable</span>
                  <span className={result.details.isDisposable ? 'text-red-400' : 'text-green-400'}>
                    {result.details.isDisposable ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Role-based</span>
                  <span className={result.details.isRoleBased ? 'text-yellow-400' : 'text-green-400'}>
                    {result.details.isRoleBased ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Free Provider</span>
                  <span className={result.details.isFreeProvider ? 'text-yellow-400' : 'text-green-400'}>
                    {result.details.isFreeProvider ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-white mb-4">Suggestions</h5>
              {result.suggestions.length > 0 ? (
                <ul className="space-y-2">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">No suggestions - email looks good!</p>
              )}
            </div>
          </div>

          {/* API Information */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h5 className="text-lg font-semibold text-white mb-4">API Integration</h5>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Endpoint:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-3 py-2 bg-gray-900 text-blue-400 rounded text-sm font-mono">
                    POST /api/email-validator
                  </code>
                  <Button
                    onClick={() => copyToClipboard('POST /api/email-validator')}
                    variant="ghost"
                    size="sm"
                    className="px-3 py-2"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-2">Request Body:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-3 py-2 bg-gray-900 text-green-400 rounded text-sm font-mono">
                    {JSON.stringify({ email: 'user@example.com' }, null, 2)}
                  </code>
                  <Button
                    onClick={() => copyToClipboard(JSON.stringify({ email: 'user@example.com' }, null, 2))}
                    variant="ghost"
                    size="sm"
                    className="px-3 py-2"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  href="/docs/email-validator"
                  variant="outline"
                  size="sm"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
                <Button
                  href="https://github.com/Zion-Holdings/zion.app"
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub Repository
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="mt-8 pt-8 border-t border-gray-700">
        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Real-time validation
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Disposable email detection
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Deliverability scoring
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Role-based identification
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Detailed reports
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            API integration
          </div>
        </div>
      </div>
    </Card>
  );
}