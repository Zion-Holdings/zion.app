import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Lock, CheckCircle, XCircle, AlertCircle, Info, Copy, ExternalLink, Eye, EyeOff } from 'lucide-react';

interface PasswordStrengthResult {
  password: string;
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  score: number;
  feedback: string[];
  details: {
    length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;
    hasCommonPatterns: boolean;
    entropy: number;
  };
  suggestions: string[];
}

export default function PasswordStrengthDemo() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [result, setResult] = useState<PasswordStrengthResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkPassword = async () => {
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/password-strength', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password.trim() }),
      });

      if (!response.ok) {
        throw new Error('Password check failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to check password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'very-strong': return 'text-green-400';
      case 'strong': return 'text-green-500';
      case 'medium': return 'text-yellow-400';
      case 'weak': return 'text-orange-400';
      case 'very-weak': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStrengthBgColor = (strength: string) => {
    switch (strength) {
      case 'very-strong': return 'bg-green-500/20 border-green-500/30';
      case 'strong': return 'bg-green-500/20 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500/30';
      case 'weak': return 'bg-orange-500/20 border-orange-500/30';
      case 'very-weak': return 'bg-red-500/20 border-red-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Password Strength Analyzer</h3>
        <p className="text-gray-400">Test your password security with our advanced analyzer</p>
      </div>

      {/* Input Section */}
      <div className="mb-8">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to analyze..."
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
              onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <Button
            onClick={checkPassword}
            disabled={loading}
            className="px-6 py-3 bg-green-600 hover:bg-green-700"
          >
            {loading ? 'Analyzing...' : 'Analyze'}
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
              <h4 className="text-lg font-semibold text-white">Strength Analysis</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Score:</span>
                <span className={`text-2xl font-bold ${getStrengthColor(result.strength)}`}>
                  {result.score}/100
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStrengthBgColor(result.strength)} ${getStrengthColor(result.strength)}`}>
                  {result.strength.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(result.score)}`}
                  style={{ width: `${result.score}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Length:</span>
                <span className={`font-medium ${result.details.length >= 8 ? 'text-green-400' : 'text-red-400'}`}>
                  {result.details.length} characters
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Entropy:</span>
                <span className={`font-medium ${result.details.entropy >= 50 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {result.details.entropy.toFixed(1)} bits
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-white mb-4">Password Criteria</h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Uppercase Letters</span>
                  <span className={result.details.hasUppercase ? 'text-green-400' : 'text-red-400'}>
                    {result.details.hasUppercase ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Lowercase Letters</span>
                  <span className={result.details.hasLowercase ? 'text-green-400' : 'text-red-400'}>
                    {result.details.hasLowercase ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Numbers</span>
                  <span className={result.details.hasNumbers ? 'text-green-400' : 'text-red-400'}>
                    {result.details.hasNumbers ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Special Characters</span>
                  <span className={result.details.hasSymbols ? 'text-green-400' : 'text-red-400'}>
                    {result.details.hasSymbols ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Common Patterns</span>
                  <span className={result.details.hasCommonPatterns ? 'text-red-400' : 'text-green-400'}>
                    {result.details.hasCommonPatterns ? 'Found' : 'None'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Minimum Length (8)</span>
                  <span className={result.details.length >= 8 ? 'text-green-400' : 'text-red-400'}>
                    {result.details.length >= 8 ? '✓' : '✗'}
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
                <p className="text-gray-400 text-sm">Excellent password! No suggestions needed.</p>
              )}
            </div>
          </div>

          {/* Feedback */}
          {result.feedback.length > 0 && (
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-white mb-4">Feedback</h5>
              <ul className="space-y-2">
                {result.feedback.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* API Information */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h5 className="text-lg font-semibold text-white mb-4">API Integration</h5>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Endpoint:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-3 py-2 bg-gray-900 text-green-400 rounded text-sm font-mono">
                    POST /api/password-strength
                  </code>
                  <Button
                    onClick={() => copyToClipboard('POST /api/password-strength')}
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
                    {JSON.stringify({ password: 'your_password_here' }, null, 2)}
                  </code>
                  <Button
                    onClick={() => copyToClipboard(JSON.stringify({ password: 'your_password_here' }, null, 2))}
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
                  href="/docs/password-strength"
                  variant="outline"
                  size="sm"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10"
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
            Multi-factor scoring
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Entropy calculation
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Pattern detection
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Real-time feedback
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Security recommendations
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Compliance checking
          </div>
        </div>
      </div>
    </Card>
  );
}