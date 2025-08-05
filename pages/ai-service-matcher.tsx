import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect }  from 'react';
import Link from 'next/link';

interface ServiceMatch {
  id: string
  title: string
  category: string
  description: string
  price: string
  rating: number
  provider: string
  matchScore: number
  features: string[]
  technologies: string[]
  responseTime: string
  availability: string
}

const AIServiceMatcher: NextPage = () => {
  const [userNeeds, setUserNeeds] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [industry, setIndustry] = useState('')
  const [matches, setMatches] = useState<ServiceMatch[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Real Estate',
    'Entertainment',
    'Transportation',
    'Other'
  ]

  const budgets = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+'
  ]

  const timelines = [
    'Immediate (1-2 weeks)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)'
  ]

  const analyzeNeeds = async () => {
    if (!userNeeds.trim()) return

    setIsAnalyzing(true)
    setAnalysisComplete(false)

    // Simulate AI analysis
    setTimeout(() => {
      const mockMatches: ServiceMatch[] = [
        {
          id: 'ai-dev-001',
          title: 'AI Development Services',
          category: 'AI Talent',
          description: 'Expert AI developers specializing in machine learning, deep learning, and AI integration. Perfect for your technology needs.',
          price: '$150-500/hr',
          rating: 4.9,
          provider: 'AI Solutions Pro',
          matchScore: 95,
          features: ['Machine Learning', 'Deep Learning', 'AI Integration', 'Custom Models'],
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API'],
          responseTime: '< 2 hours',
          availability: 'Available'
        },
        {
          id: 'cloud-infra-001',
          title: 'Cloud Infrastructure Setup',
          category: 'IT Services',
          description: 'Complete cloud infrastructure design and implementation. Scalable solutions for your business needs.',
          price: '$2000-15000',
          rating: 4.8,
          provider: 'CloudTech Experts',
          matchScore: 88,
          features: ['AWS Setup', 'Azure Configuration', 'Google Cloud', 'Security Implementation'],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker'],
          responseTime: '< 4 hours',
          availability: 'Available'
        },
        {
          id: 'blockchain-001',
          title: 'Blockchain Integration',
          category: 'Innovation',
          description: 'Secure blockchain solutions for transparent transactions. Ideal for finance and technology applications.',
          price: '$3000-25000',
          rating: 4.9,
          provider: 'BlockChain Solutions',
          matchScore: 82,
          features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'Security Audit'],
          technologies: ['Solidity', 'Ethereum', 'Web3.js', 'MetaMask'],
          responseTime: '< 6 hours',
          availability: 'Available'
        },
        {
          id: 'data-analytics-001',
          title: 'Data Analytics & BI',
          category: 'IT Services',
          description: 'Comprehensive data analytics and business intelligence solutions. Transform your data into actionable insights.',
          price: '$5000-30000',
          rating: 4.7,
          provider: 'DataInsight Pro',
          matchScore: 78,
          features: ['Data Visualization', 'Predictive Analytics', 'Dashboard Creation', 'Data Mining'],
          technologies: ['Tableau', 'Power BI', 'Python', 'R', 'SQL'],
          responseTime: '< 8 hours',
          availability: 'Available'
        }
      ]

      setMatches(mockMatches)
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 80) return 'text-blue-500'
    if (score >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getMatchScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100'
    if (score >= 80) return 'bg-blue-100'
    if (score >= 70) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  return (
    <div>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI Service Matcher - Zion</title>
        <meta name="description" content="Find the perfect services for your needs with our AI-powered matching system" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <main className="flex-1 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-32">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI Service Matcher
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us what you need, and our AI will find the perfect services and talents for your project
            </p>
          </div>

          {/* Analysis Form */}
          <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Describe Your Needs</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What do you need help with? *
                </label>
                <textarea
                  value={userNeeds}
                  onChange={(e) => setUserNeeds(e.target.value)}
                  placeholder="Describe your project, goals, and specific requirements..."
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3" gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                  >
                    <option value="">Select Industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                  >
                    <option value="">Select Budget</option>
                    {budgets.map((bud) => (
                      <option key={bud} value={bud}>{bud}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={analyzeNeeds}
                disabled={!userNeeds.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled opacity-50 disabled cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover shadow-purple-500/25"
              >
                {isAnalyzing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mr-3"></div>
                    Analyzing your needs...
                  </div>
                ) : (
                  'Find Perfect Matches'
                )}
              </button>
            </div>
          </div>

          {/* Results */}
          {analysisComplete && (
            <div className="max-w-12xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  AI Analysis Complete
                </h2>
                <p className="text-gray-300">
                  Based on your requirements, here are the best matches we found:
                </p>
              </div>

              <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{match.title}</h3>
                        <p className="text-gray-300 text-sm">{match.provider}</p>
                      </div>
                      <div className={`px-3 py-3 rounded-full text-sm font-semibold ${getMatchScoreBg(match.matchScore)} ${getMatchScoreColor(match.matchScore)}`}>
                        {match.matchScore}% Match
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{match.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-purple-400 font-semibold">{match.price}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-white">{match.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {match.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="px-4 py-3 bg-purple-500/20 text-purple-300 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-green-400 text-sm">✓ {match.availability}</span>
                      <span className="text-blue-400 text-sm">⏱ {match.responseTime}</span>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <Link
                        href={`/service-details?id=${match.id}`}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white text-center py-4 px-4 rounded-lg transition-all duration-300"
                      >
                        View Details
                      </Link>
                      <button className="flex-1 bg-transparent border border-purple-500 text-purple-400 hover bg-purple-500/20 py-4 px-4 rounded-lg transition-all duration-300">
                        Contact Provider
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-400 mb-4">
                  Not finding what you're looking for?
                </p>
                <Link
                  href="/quote-request"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover from-blue-700 hover to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3" gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Matching</h3>
              <p className="text-gray-300">
                Our advanced AI analyzes your requirements and finds the perfect matches from our extensive network
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Results</h3>
              <p className="text-gray-300">
                Get personalized recommendations in seconds, not days. Save time and find the right services quickly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Precision Matching</h3>
              <p className="text-gray-300">
                Our algorithm considers budget, timeline, industry, and technical requirements for optimal matches
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  
  </div>

  </div>

  </div>
)
};

export default AIServiceMatcher 