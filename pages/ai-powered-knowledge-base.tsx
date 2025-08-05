import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface KnowledgeArticle {
  id: string;
  title: string;
  description: string;
  category: 'guide' | 'tutorial' | 'manual' | 'faq' | 'wiki' | 'documentation';
  status: 'draft' | 'published' | 'archived' | 'review';
  priority: 'low' | 'medium' | 'high' | 'critical';
  views: number;
  helpfulVotes: number;
  lastUpdated: Date;
  aiAnalysis: AIKnowledgeAnalysis;
}

interface AIKnowledgeAnalysis {
  id: string;
  readabilityScore: number;
  helpfulnessScore: number;
  searchOptimization: number;
  recommendations: string[];
}

interface Documentation {
  id: string;
  title: string;
  description: string;
  type: 'api' | 'user-guide' | 'developer-guide' | 'admin-guide' | 'integration';
  status: 'draft' | 'published' | 'archived' | 'review';
  sections: DocumentationSection[];
  analytics: DocumentationAnalytics;
  aiOptimization: AIDocumentationOptimization;
}

interface DocumentationSection {
  id: string;
  title: string;
  content: string;
  order: number;
  status: 'draft' | 'published' | 'archived';
}

interface DocumentationAnalytics {
  totalViews: number;
  averageTimeSpent: number;
  completionRate: number;
  searchQueries: number;
  lastUpdated: Date;
}

interface AIDocumentationOptimization {
  id: string;
  optimizationScore: number;
  readabilityScore: number;
  recommendations: string[];
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'getting-started' | 'features' | 'advanced-topics' | 'troubleshooting';
  status: 'draft' | 'published' | 'archived' | 'review';
  steps: TutorialStep[];
  analytics: TutorialAnalytics;
  aiAnalysis: AITutorialAnalysis;
}

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  order: number;
  estimatedTime: number;
  status: 'draft' | 'published' | 'archived';
}

interface TutorialAnalytics {
  totalCompletions: number;
  averageCompletionTime: number;
  successRate: number;
  dropoffRate: number;
  lastUpdated: Date;
}

interface AITutorialAnalysis {
  id: string;
  difficultyAssessment: number;
  engagementScore: number;
  recommendations: string[];
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'billing' | 'account' | 'features';
  status: 'draft' | 'published' | 'archived' | 'review';
  helpfulVotes: number;
  views: number;
  aiAnalysis: AIFAQAnalysis;
}

interface AIFAQAnalysis {
  id: string;
  clarityScore: number;
  helpfulnessScore: number;
  searchOptimization: number;
  recommendations: string[];
}

interface Wiki {
  id: string;
  title: string;
  description: string;
  category: 'platform' | 'features' | 'best-practices' | 'troubleshooting';
  status: 'draft' | 'published' | 'archived' | 'review';
  content: string;
  contributors: string[];
  analytics: WikiAnalytics;
  aiAnalysis: AIWikiAnalysis;
}

interface WikiAnalytics {
  totalViews: number;
  editCount: number;
  contributorCount: number;
  lastUpdated: Date;
}

interface AIWikiAnalysis {
  id: string;
  contentQuality: number;
  comprehensiveness: number;
  recommendations: string[];
}

interface KnowledgeBaseAnalytics {
  totalArticles: number;
  activeDocumentation: number;
  tutorialsCount: number;
  faqsCount: number;
  wikisCount: number;
  averageHelpfulness: number;
  aiOptimizationScore: number;
  aiInsights: KnowledgeBaseInsight[];
}

interface KnowledgeBaseInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredKnowledgeBasePage: NextPage = () => {
  const [articles, setArticles] = useState<KnowledgeArticle[]>([])
  const [documentation, setDocumentation] = useState<Documentation[]>([])
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [wikis, setWikis] = useState<Wiki[]>([])
  const [analytics, setAnalytics] = useState<KnowledgeBaseAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'articles' | 'documentation' | 'tutorials' | 'faqs' | 'wikis' | 'analytics'>('articles')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockArticles: KnowledgeArticle[] = [
    {
      id: '1',
      title: 'Getting Started with AI-Powered Marketplace',
      description: 'Complete guide to getting started with the AI-powered marketplace platform',
      category: 'guide',
      status: 'published',
      priority: 'high',
      views: 1247,
      helpfulVotes: 89,
      lastUpdated: new Date('2024-01-20T10:00:00'),
      aiAnalysis: {
        id: '1',
        readabilityScore: 92,
        helpfulnessScore: 88,
        searchOptimization: 85,
        recommendations: ['Add more screenshots', 'Include video tutorials']
      }
    },
    {
      id: '2',
      title: 'Advanced AI Features Tutorial',
      description: 'Comprehensive tutorial on using advanced AI features in the marketplace',
      category: 'tutorial',
      status: 'published',
      priority: 'medium',
      views: 856,
      helpfulVotes: 67,
      lastUpdated: new Date('2024-01-19T14:00:00'),
      aiAnalysis: {
        id: '2',
        readabilityScore: 89,
        helpfulnessScore: 91,
        searchOptimization: 87,
        recommendations: ['Add interactive examples', 'Include troubleshooting section']
      }
    }
  ]

  const mockDocumentation: Documentation[] = [
    {
      id: '1',
      title: 'API Documentation',
      description: 'Complete API reference for marketplace integration',
      type: 'api',
      status: 'published',
      sections: [
        {
          id: '1',
          title: 'Authentication',
          content: 'Learn how to authenticate with the marketplace API',
          order: 1,
          status: 'published'
        },
        {
          id: '2',
          title: 'Endpoints',
          content: 'Complete list of available API endpoints',
          order: 2,
          status: 'published'
        }
      ],
      analytics: {
        totalViews: 2341,
        averageTimeSpent: 8.5,
        completionRate: 76,
        searchQueries: 156,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiOptimization: {
        id: '1',
        optimizationScore: 91,
        readabilityScore: 88,
        recommendations: ['Add code examples', 'Improve navigation']
      }
    }
  ]

  const mockTutorials: Tutorial[] = [
    {
      id: '1',
      title: 'Setting Up Your First Project',
      description: 'Step-by-step tutorial for setting up your first project on the marketplace',
      difficulty: 'beginner',
      category: 'getting-started',
      status: 'published',
      steps: [
        {
          id: '1',
          title: 'Create Account',
          description: 'Learn how to create your marketplace account',
          order: 1,
          estimatedTime: 5,
          status: 'published'
        },
        {
          id: '2',
          title: 'Configure Profile',
          description: 'Set up your profile and preferences',
          order: 2,
          estimatedTime: 10,
          status: 'published'
        }
      ],
      analytics: {
        totalCompletions: 456,
        averageCompletionTime: 15.2,
        successRate: 89,
        dropoffRate: 12,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '1',
        difficultyAssessment: 85,
        engagementScore: 92,
        recommendations: ['Add progress indicators', 'Include success checkpoints']
      }
    }
  ]

  const mockFaqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions sent to your email.',
      category: 'account',
      status: 'published',
      helpfulVotes: 234,
      views: 1234,
      aiAnalysis: {
        id: '1',
        clarityScore: 94,
        helpfulnessScore: 91,
        searchOptimization: 88,
        recommendations: ['Add screenshots', 'Include alternative methods']
      }
    },
    {
      id: '2',
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Payment processing is secure and encrypted.',
      category: 'billing',
      status: 'published',
      helpfulVotes: 189,
      views: 987,
      aiAnalysis: {
        id: '2',
        clarityScore: 89,
        helpfulnessScore: 87,
        searchOptimization: 85,
        recommendations: ['Add payment icons', 'Include security information']
      }
    }
  ]

  const mockWikis: Wiki[] = [
    {
      id: '1',
      title: 'Marketplace Best Practices',
      description: 'Comprehensive guide to best practices for marketplace success',
      category: 'best-practices',
      status: 'published',
      content: 'This wiki contains comprehensive information about marketplace best practices...',
      contributors: ['admin', 'expert1', 'expert2'],
      analytics: {
        totalViews: 3456,
        editCount: 23,
        contributorCount: 3,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '1',
        contentQuality: 93,
        comprehensiveness: 89,
        recommendations: ['Add more examples', 'Include case studies']
      }
    }
  ]

  const mockAnalytics: KnowledgeBaseAnalytics = {
    totalArticles: 156,
    activeDocumentation: 23,
    tutorialsCount: 45,
    faqsCount: 89,
    wikisCount: 12,
    averageHelpfulness: 4.3,
    aiOptimizationScore: 91,
    aiInsights: [
      {
        id: '1',
        title: 'High Content Engagement',
        description: 'Knowledge base articles show 25% higher engagement with AI optimization',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Continue AI monitoring', 'Expand content categories']
      },
      {
        id: '2',
        title: 'Strong Tutorial Completion',
        description: 'AI-optimized tutorials show 18% higher completion rates',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Enhance tutorial structure', 'Add interactive elements']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setArticles(mockArticles)
      setDocumentation(mockDocumentation)
      setTutorials(mockTutorials)
      setFaqs(mockFaqs)
      setWikis(mockWikis)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockArticles, mockDocumentation, mockTutorials, mockFaqs, mockWikis, mockAnalytics])

  const filteredArticles = useMemo(() => {
    let filtered = articles
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }
    return filtered
  }, [articles, selectedCategory])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-300'
      case 'draft': return 'bg-yellow-500/20 text-yellow-300'
      case 'archived': return 'bg-gray-500/20 text-gray-300'
      case 'review': return 'bg-blue-500/20 text-blue-300'
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'expert': return 'bg-red-500/20 text-red-300'
      case 'advanced': return 'bg-orange-500/20 text-orange-300'
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300'
      case 'beginner': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Knowledge Base & Documentation System | Zion Tech Group</title>
        <meta name="description" content="Knowledge management, documentation creation, guide development, tutorial management, 
              manual creation, help center management, FAQ systems, and wiki functionality powered by AI." />
        <meta name="keywords" content="knowledge base, documentation, tutorial, FAQ, wiki, AI knowledge" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Knowledge Base & Documentation System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Knowledge management, documentation creation, guide development, tutorial management, 
              manual creation, help center management, FAQ systems, and wiki functionality powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📚 Knowledge Management</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📖 Documentation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🎓 Tutorials</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('articles')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'articles'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Articles ({articles.length})
              </button>
              <button
                onClick={() => setActiveTab('documentation')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'documentation'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Documentation ({documentation.length})
              </button>
              <button
                onClick={() => setActiveTab('tutorials')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'tutorials'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Tutorials ({tutorials.length})
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'faqs'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                FAQs ({faqs.length})
              </button>
              <button
                onClick={() => setActiveTab('wikis')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'wikis'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Wikis ({wikis.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Articles Tab */}
            {activeTab === 'articles' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all" className="bg-slate-800">All Categories</option>
                        <option value="guide" className="bg-slate-800">Guide</option>
                        <option value="tutorial" className="bg-slate-800">Tutorial</option>
                        <option value="manual" className="bg-slate-800">Manual</option>
                        <option value="faq" className="bg-slate-800">FAQ</option>
                        <option value="wiki" className="bg-slate-800">Wiki</option>
                        <option value="documentation" className="bg-slate-800">Documentation</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Article
                    </button>
                  </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => (
                    <div key={article.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                          <p className="text-gray-300 text-sm capitalize">{article.category} • {article.priority} priority</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(article.status)}`}>
                            {article.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(article.priority)}`}>
                              {article.priority}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{article.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Views</div>
                          <div className="text-2xl font-bold text-white">{article.views.toLocaleString()}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Helpful Votes</div>
                          <div className="text-2xl font-bold text-white">{article.helpfulVotes}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Readability Score</div>
                              <div className="text-white font-semibold">{article.aiAnalysis.readabilityScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Helpfulness Score</div>
                              <div className="text-white font-semibold">{article.aiAnalysis.helpfulnessScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {article.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Article
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Edit Article
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documentation Tab */}
            {activeTab === 'documentation' && (
              <div className="space-y-8">
                {documentation.map((doc) => (
                  <div key={doc.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{doc.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{doc.type} Documentation</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Views</div>
                        <div className="text-2xl font-bold text-white">{doc.analytics.totalViews.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Avg Time Spent</div>
                        <div className="text-2xl font-bold text-white">{doc.analytics.averageTimeSpent}m</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Completion Rate</div>
                        <div className="text-2xl font-bold text-white">{doc.analytics.completionRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Sections</div>
                        <div className="text-2xl font-bold text-white">{doc.sections.length}</div>
                      </div>
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Optimization Score</div>
                            <div className="text-white font-semibold">{doc.aiOptimization.optimizationScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Readability Score</div>
                            <div className="text-white font-semibold">{doc.aiOptimization.readabilityScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Recommendations</div>
                            <div className="text-white font-semibold">{doc.aiOptimization.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {doc.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tutorials Tab */}
            {activeTab === 'tutorials' && (
              <div className="space-y-8">
                {tutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{tutorial.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{tutorial.category} • {tutorial.difficulty}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(tutorial.status)}`}>
                          {tutorial.status}
                        </span>
                        <div className="mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                            {tutorial.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Completions</div>
                        <div className="text-2xl font-bold text-white">{tutorial.analytics.totalCompletions}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                        <div className="text-2xl font-bold text-white">{tutorial.analytics.successRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Avg Time</div>
                        <div className="text-2xl font-bold text-white">{tutorial.analytics.averageCompletionTime}m</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Steps</div>
                        <div className="text-2xl font-bold text-white">{tutorial.steps.length}</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Difficulty Assessment</div>
                            <div className="text-white font-semibold">{tutorial.aiAnalysis.difficultyAssessment}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Engagement Score</div>
                            <div className="text-white font-semibold">{tutorial.aiAnalysis.engagementScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Recommendations</div>
                            <div className="text-white font-semibold">{tutorial.aiAnalysis.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {tutorial.aiAnalysis.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && (
              <div className="space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                        <p className="text-gray-300 text-sm capitalize">{faq.category} FAQ</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(faq.status)}`}>
                        {faq.status}
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 text-sm">{faq.answer}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Views</div>
                        <div className="text-2xl font-bold text-white">{faq.views.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Helpful Votes</div>
                        <div className="text-2xl font-bold text-white">{faq.helpfulVotes}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Clarity Score</div>
                        <div className="text-2xl font-bold text-white">{faq.aiAnalysis.clarityScore}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Helpfulness</div>
                        <div className="text-2xl font-bold text-white">{faq.aiAnalysis.helpfulnessScore}%</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Clarity Score</div>
                            <div className="text-white font-semibold">{faq.aiAnalysis.clarityScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Helpfulness Score</div>
                            <div className="text-white font-semibold">{faq.aiAnalysis.helpfulnessScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Search Optimization</div>
                            <div className="text-white font-semibold">{faq.aiAnalysis.searchOptimization}%</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {faq.aiAnalysis.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Wikis Tab */}
            {activeTab === 'wikis' && (
              <div className="space-y-8">
                {wikis.map((wiki) => (
                  <div key={wiki.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{wiki.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{wiki.category} Wiki</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(wiki.status)}`}>
                        {wiki.status}
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 text-sm">{wiki.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Views</div>
                        <div className="text-2xl font-bold text-white">{wiki.analytics.totalViews.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Edit Count</div>
                        <div className="text-2xl font-bold text-white">{wiki.analytics.editCount}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Contributors</div>
                        <div className="text-2xl font-bold text-white">{wiki.analytics.contributorCount}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Content Quality</div>
                        <div className="text-2xl font-bold text-white">{wiki.aiAnalysis.contentQuality}%</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Content Quality</div>
                            <div className="text-white font-semibold">{wiki.aiAnalysis.contentQuality}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Comprehensiveness</div>
                            <div className="text-white font-semibold">{wiki.aiAnalysis.comprehensiveness}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Recommendations</div>
                            <div className="text-white font-semibold">{wiki.aiAnalysis.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {wiki.aiAnalysis.recommendations.join(', ')}
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
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalArticles.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Articles</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeDocumentation.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Documentation</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.tutorialsCount.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Tutorials</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Knowledge?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your knowledge base journey with our AI-powered documentation system 
              and create comprehensive guides and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                Start Building
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

export default AIPoweredKnowledgeBasePage 