import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FileText, CheckCircle, Copy, ExternalLink, BarChart3, Clock, TrendingUp, BookOpen } from 'lucide-react';

interface TextAnalysisResult {
  text: string;
  statistics: {
    characters: number;
    charactersNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    syllables: number;
    readingTime: number;
    speakingTime: number;
  };
  readability: {
    fleschReadingEase: number;
    fleschKincaidGrade: number;
    gunningFog: number;
    smog: number;
    colemanLiau: number;
    automatedReadability: number;
    averageGrade: number;
  };
  sentiment: {
    score: number;
    label: 'very-negative' | 'negative' | 'neutral' | 'positive' | 'very-positive';
    positiveWords: string[];
    negativeWords: string[];
  };
  language: {
    detectedLanguage: string;
    confidence: number;
    isEnglish: boolean;
  };
  keywords: {
    topWords: Array<{ word: string; count: number; frequency: number }>;
    bigrams: Array<{ phrase: string; count: number }>;
    trigrams: Array<{ phrase: string; count: number }>;
  };
}

export default function TextAnalyzerDemo() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<TextAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const analyzeText = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    if (text.length > 10000) {
      setError('Text is too long (maximum 10,000 characters)');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/text-analyzer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        throw new Error('Text analysis failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to analyze text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getSentimentColor = (label: string) => {
    switch (label) {
      case 'very-positive': return 'text-green-400';
      case 'positive': return 'text-green-500';
      case 'neutral': return 'text-yellow-400';
      case 'negative': return 'text-orange-400';
      case 'very-negative': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSentimentBgColor = (label: string) => {
    switch (label) {
      case 'very-positive': return 'bg-green-500/20 border-green-500/30';
      case 'positive': return 'bg-green-500/20 border-green-500/30';
      case 'neutral': return 'bg-yellow-500/20 border-yellow-500/30';
      case 'negative': return 'bg-orange-500/20 border-orange-500/30';
      case 'very-negative': return 'bg-red-500/20 border-red-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  const getReadabilityColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getReadabilityLabel = (score: number) => {
    if (score >= 80) return 'Very Easy';
    if (score >= 60) return 'Easy';
    if (score >= 40) return 'Moderate';
    if (score >= 20) return 'Difficult';
    return 'Very Difficult';
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Text Analysis Suite</h3>
        <p className="text-gray-400">Advanced text analysis with readability scores, sentiment analysis, and keyword extraction</p>
      </div>

      {/* Input Section */}
      <div className="mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Text to Analyze
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter or paste your text here for comprehensive analysis..."
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">
                {text.length}/10,000 characters
              </span>
              <span className="text-xs text-gray-500">
                {text.split(/\s+/).filter(word => word.length > 0).length} words
              </span>
            </div>
          </div>

          <Button
            onClick={analyzeText}
            disabled={loading}
            className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700"
          >
            {loading ? 'Analyzing...' : 'Analyze Text'}
          </Button>
        </div>

        {error && (
          <div className="mt-3 flex items-center text-red-400 text-sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            {error}
          </div>
        )}
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Summary Statistics */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Text Statistics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{result.statistics.characters}</div>
                <div className="text-xs text-gray-400">Characters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{result.statistics.words}</div>
                <div className="text-xs text-gray-400">Words</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{result.statistics.sentences}</div>
                <div className="text-xs text-gray-400">Sentences</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{result.statistics.paragraphs}</div>
                <div className="text-xs text-gray-400">Paragraphs</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">{result.statistics.syllables}</div>
                <div className="text-xs text-gray-400">Syllables</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">{result.statistics.readingTime} min</div>
                <div className="text-xs text-gray-400">Reading Time</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">{result.statistics.speakingTime} min</div>
                <div className="text-xs text-gray-400">Speaking Time</div>
              </div>
            </div>
          </div>

          {/* Readability Scores */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Readability Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-md font-semibold text-gray-300 mb-3">Flesch Reading Ease</h5>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Score:</span>
                  <span className={`text-xl font-bold ${getReadabilityColor(result.readability.fleschReadingEase)}`}>
                    {result.readability.fleschReadingEase.toFixed(1)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getReadabilityColor(result.readability.fleschReadingEase).replace('text-', 'bg-')}`}
                    style={{ width: `${Math.min(100, Math.max(0, result.readability.fleschReadingEase))}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {getReadabilityLabel(result.readability.fleschReadingEase)} to read
                </p>
              </div>
              
              <div>
                <h5 className="text-md font-semibold text-gray-300 mb-3">Average Grade Level</h5>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getReadabilityColor(result.readability.averageGrade * 10)}`}>
                    {result.readability.averageGrade}
                  </div>
                  <div className="text-sm text-gray-400">Grade Level</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Sentiment Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Overall Sentiment:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSentimentBgColor(result.sentiment.label)} ${getSentimentColor(result.sentiment.label)}`}>
                    {result.sentiment.label.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getSentimentColor(result.sentiment.label)}`}>
                    {result.sentiment.score > 0 ? '+' : ''}{result.sentiment.score}
                  </div>
                  <div className="text-sm text-gray-400">Sentiment Score</div>
                </div>
              </div>
              
              <div>
                <h5 className="text-md font-semibold text-gray-300 mb-3">Word Analysis</h5>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Positive Words:</span>
                    <span className="text-sm text-green-400 font-medium">
                      {result.sentiment.positiveWords.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Negative Words:</span>
                    <span className="text-sm text-red-400 font-medium">
                      {result.sentiment.negativeWords.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Keyword Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-md font-semibold text-gray-300 mb-3">Top Words</h5>
                <div className="space-y-2">
                  {result.keywords.topWords.slice(0, 5).map((word, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">{word.word}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{word.count}x</span>
                        <span className="text-xs text-orange-400">{word.frequency}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-md font-semibold text-gray-300 mb-3">Common Phrases</h5>
                <div className="space-y-2">
                  {result.keywords.bigrams.slice(0, 3).map((phrase, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">"{phrase.phrase}"</span>
                      <span className="text-xs text-orange-400">{phrase.count}x</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Language Detection */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Language Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">{result.language.detectedLanguage.toUpperCase()}</div>
                <div className="text-xs text-gray-400">Detected Language</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">{(result.language.confidence * 100).toFixed(0)}%</div>
                <div className="text-xs text-gray-400">Confidence</div>
              </div>
              <div className="text-center">
                <div className={`text-lg font-bold ${result.language.isEnglish ? 'text-green-400' : 'text-yellow-400'}`}>
                  {result.language.isEnglish ? 'Yes' : 'No'}
                </div>
                <div className="text-xs text-gray-400">English</div>
              </div>
            </div>
          </div>

          {/* API Information */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h5 className="text-lg font-semibold text-white mb-4">API Integration</h5>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Endpoint:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-3 py-2 bg-gray-900 text-orange-400 rounded text-sm font-mono">
                    POST /api/text-analyzer
                  </code>
                  <Button
                    onClick={() => copyToClipboard('POST /api/text-analyzer')}
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
                  <code className="flex-1 px-3 py-2 bg-gray-900 text-orange-400 rounded text-sm font-mono">
                    {JSON.stringify({ text: 'Your text here' }, null, 2)}
                  </code>
                  <Button
                    onClick={() => copyToClipboard(JSON.stringify({ text: 'Your text here' }, null, 2))}
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
                  href="/docs/text-analyzer"
                  variant="outline"
                  size="sm"
                  className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
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
            Multiple readability formulas
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Sentiment analysis
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Keyword extraction
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Reading time estimation
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Language detection
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            SEO optimization insights
          </div>
        </div>
      </div>
    </Card>
  );
}