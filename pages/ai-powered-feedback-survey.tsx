import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface Feedback {
  id: string;
  title: string;
  description: string;
  type: 'general' | 'product' | 'service' | 'support' | 'feature' | 'bug';
  status: 'active' | 'closed' | 'analyzing' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  responses: FeedbackResponse[];
  analytics: FeedbackAnalytics;
  aiAnalysis: AIFeedbackAnalysis;
}

interface FeedbackResponse {
  id: string;
  userId: string;
  content: string;
  rating: number;
  category: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  timestamp: Date;
}

interface FeedbackAnalytics {
  totalResponses: number;
  averageRating: number;
  satisfactionScore: number;
  responseRate: number;
  lastUpdated: Date;
}

interface AIFeedbackAnalysis {
  id: string;
  sentimentScore: number;
  trendAnalysis: number;
  recommendations: string[];
  insights: string[];
}

interface Survey {
  id: string;
  title: string;
  description: string;
  type: 'market-research' | 'user-satisfaction' | 'product-feedback' | 'service-evaluation' | 'custom';
  status: 'draft' | 'active' | 'closed' | 'analyzing';
  questions: SurveyQuestion[];
  responses: SurveyResponse[];
  analytics: SurveyAnalytics;
  aiOptimization: AISurveyOptimization;
}

interface SurveyQuestion {
  id: string;
  text: string;
  type: 'multiple-choice' | 'rating' | 'text' | 'yes-no' | 'scale';
  options?: string[];
  required: boolean;
  order: number;
}

interface SurveyResponse {
  id: string;
  userId: string;
  answers: SurveyAnswer[];
  completionTime: number;
  timestamp: Date;
}

interface SurveyAnswer {
  questionId: string;
  answer: string | number;
  rating?: number;
}

interface SurveyAnalytics {
  totalResponses: number;
  completionRate: number;
  averageCompletionTime: number;
  questionEffectiveness: number;
  lastUpdated: Date;
}

interface AISurveyOptimization {
  id: string;
  optimizationScore: number;
  questionQuality: number;
  recommendations: string[];
}

interface Poll {
  id: string;
  title: string;
  description: string;
  type: 'single-choice' | 'multiple-choice' | 'ranking' | 'rating';
  status: 'active' | 'closed' | 'scheduled';
  options: PollOption[];
  votes: PollVote[];
  analytics: PollAnalytics;
  aiAnalysis: AIPollAnalysis;
}

interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

interface PollVote {
  id: string;
  userId: string;
  optionId: string;
  timestamp: Date;
}

interface PollAnalytics {
  totalVotes: number;
  participationRate: number;
  averageRating: number;
  lastUpdated: Date;
}

interface AIPollAnalysis {
  id: string;
  engagementScore: number;
  trendPrediction: number;
  recommendations: string[];
}

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  category: string;
  status: 'pending' | 'approved' | 'featured' | 'rejected';
  aiAnalysis: AITestimonialAnalysis;
}

interface AITestimonialAnalysis {
  id: string;
  sentimentScore: number;
  credibilityScore: number;
  impactScore: number;
  recommendations: string[];
}

interface FeedbackSurveyAnalytics {
  totalFeedback: number;
  activeSurveys: number;
  pollsCount: number;
  testimonialsCount: number;
  averageSatisfaction: number;
  aiOptimizationScore: number;
  aiInsights: FeedbackSurveyInsight[];
}

interface FeedbackSurveyInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredFeedbackSurveyPage: NextPage = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [surveys, setSurveys] = useState<Survey[]>([])
  const [polls, setPolls] = useState<Poll[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [analytics, setAnalytics] = useState<FeedbackSurveyAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'feedback' | 'surveys' | 'polls' | 'testimonials' | 'analytics'>('feedback')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockFeedback: Feedback[] = [
    {
      id: '1',
      title: 'Platform User Experience Feedback',
      description: 'Collecting feedback on overall platform user experience and interface design',
      type: 'general',
      status: 'active',
      priority: 'high',
      responses: [
        {
          id: '1',
          userId: 'user1',
          content: 'The platform is intuitive and easy to navigate. Great job!',
          rating: 5,
          category: 'usability',
          sentiment: 'positive',
          timestamp: new Date('2024-01-20T10:00:00')
        },
        {
          id: '2',
          userId: 'user2',
          content: 'Some features could be more accessible on mobile devices',
          rating: 4,
          category: 'mobile',
          sentiment: 'neutral',
          timestamp: new Date('2024-01-20T11:00:00')
        }
      ],
      analytics: {
        totalResponses: 156,
        averageRating: 4.2,
        satisfactionScore: 84,
        responseRate: 78,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '1',
        sentimentScore: 82,
        trendAnalysis: 15,
        recommendations: ['Improve mobile responsiveness', 'Add more interactive elements'],
        insights: ['Users appreciate intuitive design', 'Mobile experience needs enhancement']
      }
    },
    {
      id: '2',
      title: 'AI-Powered Features Feedback',
      description: 'Gathering feedback on AI-powered marketplace features and functionality',
      type: 'feature',
      status: 'analyzing',
      priority: 'critical',
      responses: [
        {
          id: '3',
          userId: 'user3',
          content: 'The AI recommendations are incredibly accurate and helpful',
          rating: 5,
          category: 'ai-features',
          sentiment: 'positive',
          timestamp: new Date('2024-01-19T14:00:00')
        }
      ],
      analytics: {
        totalResponses: 89,
        averageRating: 4.6,
        satisfactionScore: 92,
        responseRate: 85,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '2',
        sentimentScore: 91,
        trendAnalysis: 25,
        recommendations: ['Expand AI capabilities', 'Enhance personalization'],
        insights: ['AI features highly valued', 'Strong positive sentiment']
      }
    }
  ]

  const mockSurveys: Survey[] = [
    {
      id: '1',
      title: 'Marketplace Satisfaction Survey',
      description: 'Comprehensive survey to understand user satisfaction and identify improvement areas',
      type: 'user-satisfaction',
      status: 'active',
      questions: [
        {
          id: '1',
          text: 'How satisfied are you with the overall marketplace experience?',
          type: 'rating',
          required: true,
          order: 1
        },
        {
          id: '2',
          text: 'Which features do you find most valuable?',
          type: 'multiple-choice',
          options: ['AI Recommendations', 'Pricing Tools', 'Learning Platform', 'Support System'],
          required: true,
          order: 2
        }
      ],
      responses: [
        {
          id: '1',
          userId: 'user1',
          answers: [
            { questionId: '1', answer: 5, rating: 5 },
            { questionId: '2', answer: 'AI Recommendations' }
          ],
          completionTime: 120,
          timestamp: new Date('2024-01-20T09:00:00')
        }
      ],
      analytics: {
        totalResponses: 234,
        completionRate: 89,
        averageCompletionTime: 180,
        questionEffectiveness: 87,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiOptimization: {
        id: '1',
        optimizationScore: 91,
        questionQuality: 88,
        recommendations: ['Add more specific questions', 'Optimize question flow']
      }
    }
  ]

  const mockPolls: Poll[] = [
    {
      id: '1',
      title: 'Preferred AI Feature',
      description: 'Vote for your favorite AI-powered marketplace feature',
      type: 'single-choice',
      status: 'active',
      options: [
        { id: '1', text: 'AI-Powered Recommendations', votes: 156, percentage: 45 },
        { id: '2', text: 'Smart Pricing Tools', votes: 98, percentage: 28 },
        { id: '3', text: 'Learning Platform', votes: 67, percentage: 19 },
        { id: '4', text: 'Quality Assurance', votes: 28, percentage: 8 }
      ],
      votes: [
        { id: '1', userId: 'user1', optionId: '1', timestamp: new Date('2024-01-20T10:00:00') },
        { id: '2', userId: 'user2', optionId: '2', timestamp: new Date('2024-01-20T11:00:00') }
      ],
      analytics: {
        totalVotes: 349,
        participationRate: 76,
        averageRating: 4.3,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '1',
        engagementScore: 89,
        trendPrediction: 18,
        recommendations: ['Promote underutilized features', 'Enhance feature descriptions']
      }
    }
  ]

  const mockTestimonials: Testimonial[] = [
    {
      id: '1',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      content: 'The AI-powered marketplace has revolutionized how we discover and connect with service providers. The recommendations are spot-on!',
      rating: 5,
      category: 'enterprise',
      status: 'featured',
      aiAnalysis: {
        id: '1',
        sentimentScore: 95,
        credibilityScore: 92,
        impactScore: 88,
        recommendations: ['Use in marketing materials', 'Highlight AI capabilities']
      }
    },
    {
      id: '2',
      author: 'Mike Chen',
      role: 'CTO',
      company: 'InnovateStartup',
      content: 'Outstanding platform with excellent AI features. The pricing tools and quality assurance systems are game-changers.',
      rating: 5,
      category: 'startup',
      status: 'approved',
      aiAnalysis: {
        id: '2',
        sentimentScore: 93,
        credibilityScore: 89,
        impactScore: 85,
        recommendations: ['Feature in case studies', 'Emphasize technical benefits']
      }
    }
  ]

  const mockAnalytics: FeedbackSurveyAnalytics = {
    totalFeedback: 245,
    activeSurveys: 8,
    pollsCount: 12,
    testimonialsCount: 34,
    averageSatisfaction: 4.4,
    aiOptimizationScore: 91,
    aiInsights: [
      {
        id: '1',
        title: 'High User Satisfaction',
        description: 'Overall user satisfaction improved by 18% with AI optimization',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Continue AI monitoring', 'Expand feedback channels']
      },
      {
        id: '2',
        title: 'Strong AI Feature Adoption',
        description: 'AI-powered features show 25% higher satisfaction rates',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Enhance AI capabilities', 'Promote AI features']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setFeedback(mockFeedback)
      setSurveys(mockSurveys)
      setPolls(mockPolls)
      setTestimonials(mockTestimonials)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockFeedback, mockSurveys, mockPolls, mockTestimonials, mockAnalytics])

  const filteredFeedback = useMemo(() => {
    let filtered = feedback
    if (selectedType !== 'all') {
      filtered = filtered.filter(f => f.type === selectedType)
    }
    return filtered
  }, [feedback, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'closed': return 'bg-gray-500/20 text-gray-300'
      case 'analyzing': return 'bg-blue-500/20 text-blue-300'
      case 'completed': return 'bg-purple-500/20 text-purple-300'
      case 'draft': return 'bg-yellow-500/20 text-yellow-300'
      case 'scheduled': return 'bg-orange-500/20 text-orange-300'
      case 'pending': return 'bg-yellow-500/20 text-yellow-300'
      case 'approved': return 'bg-green-500/20 text-green-300'
      case 'featured': return 'bg-purple-500/20 text-purple-300'
      case 'rejected': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-300'
      case 'high': return 'bg-orange-500/20 text-orange-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'low': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      <Head>
        <title>AI-Powered Feedback & Survey System | Zion Tech Group</title>
        <meta name="description" content="Feedback collection, survey management, poll creation, voting systems, and testimonial gathering powered by AI." />
        <meta name="keywords" content="feedback, survey, poll, voting, testimonial, AI feedback" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Feedback & Survey System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Feedback collection, survey management, poll creation, voting systems, 
              and testimonial gathering powered by AI for comprehensive insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">💬 Feedback Collection</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Survey Management</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🗳️ Poll Creation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'feedback'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Feedback ({feedback.length})
              </button>
              <button
                onClick={() => setActiveTab('surveys')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'surveys'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Surveys ({surveys.length})
              </button>
              <button
                onClick={() => setActiveTab('polls')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'polls'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Polls ({polls.length})
              </button>
              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'testimonials'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Testimonials ({testimonials.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Feedback Tab */}
            {activeTab === 'feedback' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="general" className="bg-slate-800">General</option>
                        <option value="product" className="bg-slate-800">Product</option>
                        <option value="service" className="bg-slate-800">Service</option>
                        <option value="support" className="bg-slate-800">Support</option>
                        <option value="feature" className="bg-slate-800">Feature</option>
                        <option value="bug" className="bg-slate-800">Bug</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Feedback
                    </button>
                  </div>
                </div>

                {/* Feedback Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredFeedback.map((item) => (
                    <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-300 text-sm capitalize">{item.type} • {item.priority} priority</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Total Responses</div>
                          <div className="text-2xl font-bold text-white">{item.analytics.totalResponses}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Satisfaction Score</div>
                          <div className="text-2xl font-bold text-white">{item.analytics.satisfactionScore}%</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Sentiment Score</div>
                              <div className="text-white font-semibold">{item.aiAnalysis.sentimentScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Trend Analysis</div>
                              <div className="text-white font-semibold">{item.aiAnalysis.trendAnalysis}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {item.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Manage Feedback
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Surveys Tab */}
            {activeTab === 'surveys' && (
              <div className="space-y-8">
                {surveys.map((survey) => (
                  <div key={survey.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{survey.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{survey.type} Survey</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(survey.status)}`}>
                        {survey.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Responses</div>
                        <div className="text-2xl font-bold text-white">{survey.analytics.totalResponses}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Completion Rate</div>
                        <div className="text-2xl font-bold text-white">{survey.analytics.completionRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Avg Completion Time</div>
                        <div className="text-2xl font-bold text-white">{survey.analytics.averageCompletionTime}s</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Question Effectiveness</div>
                        <div className="text-2xl font-bold text-white">{survey.analytics.questionEffectiveness}%</div>
                      </div>
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Optimization Score</div>
                            <div className="text-white font-semibold">{survey.aiOptimization.optimizationScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Question Quality</div>
                            <div className="text-white font-semibold">{survey.aiOptimization.questionQuality}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Questions</div>
                            <div className="text-white font-semibold">{survey.questions.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {survey.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Polls Tab */}
            {activeTab === 'polls' && (
              <div className="space-y-8">
                {polls.map((poll) => (
                  <div key={poll.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{poll.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{poll.type} Poll</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(poll.status)}`}>
                        {poll.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Votes</div>
                        <div className="text-2xl font-bold text-white">{poll.analytics.totalVotes}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Participation Rate</div>
                        <div className="text-2xl font-bold text-white">{poll.analytics.participationRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Avg Rating</div>
                        <div className="text-2xl font-bold text-white">{poll.analytics.averageRating}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Options</div>
                        <div className="text-2xl font-bold text-white">{poll.options.length}</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Engagement Score</div>
                            <div className="text-white font-semibold">{poll.aiAnalysis.engagementScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Trend Prediction</div>
                            <div className="text-white font-semibold">{poll.aiAnalysis.trendPrediction}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Leading Option</div>
                            <div className="text-white font-semibold">{poll.options[0]?.text}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {poll.aiAnalysis.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <div className="space-y-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{testimonial.author}</h3>
                        <p className="text-gray-300 text-sm">{testimonial.role} at {testimonial.company}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(testimonial.status)}`}>
                          {testimonial.status}
                        </span>
                        <div className="mt-2">
                          <div className="text-2xl font-bold text-white">{testimonial.rating}/5</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 text-sm italic">"{testimonial.content}"</p>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Sentiment Score</div>
                            <div className="text-white font-semibold">{testimonial.aiAnalysis.sentimentScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Credibility Score</div>
                            <div className="text-white font-semibold">{testimonial.aiAnalysis.credibilityScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Impact Score</div>
                            <div className="text-white font-semibold">{testimonial.aiAnalysis.impactScore}%</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {testimonial.aiAnalysis.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && analytics && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalFeedback.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Feedback</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeSurveys.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Surveys</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.pollsCount.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Polls</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.aiOptimizationScore}%</div>
                    <div className="text-gray-400 text-sm">AI Optimization Score</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">AI Insights</h3>
                  <div className="space-y-4">
                    {analytics.aiInsights.map((insight) => (
                      <div key={insight.id} className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold">{insight.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            insight.impact === 'positive' ? 'bg-green-500/20 text-green-300' :
                            insight.impact === 'negative' ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {insight.impact}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                        <div className="text-xs text-gray-400 mb-2">
                          Confidence: {Math.round(insight.confidence * 100)}%
                        </div>
                        <div className="text-xs text-gray-400">
                          <strong>Recommendations:</strong> {insight.recommendations.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Gather Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your feedback journey with our AI-powered survey system 
              and collect comprehensive insights from your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/25 transform hover:scale-105">
                Start Collecting
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredFeedbackSurveyPage 