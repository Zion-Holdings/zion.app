import: type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceRequest {
id: string
  title: string
  description: string
  category: string
  budget: {
    min: number,
    max: number}
    currency: string}
  }
  timeline: string
  priority: 'low' | 'medium' | 'high'
  status: 'draft' | 'submitted' | 'analyzing' | 'matched' | 'in-progress' | 'completed'
  createdAt: Date
  updatedAt: Date
  aiAnalysis?: {
    complexity: 'simple' | 'moderate' | 'complex'
    estimatedDuration: string
    recommendedSkills: string[]
    matchingProviders: string[]
    riskAssessment: string
    costEstimate: {
      min: number,
      max: number}
      currency: string}
    }
  }
  responses: ServiceResponse[],
}

interface: ServiceResponse {
  id: string
  providerId: string
  providerName: string
  providerAvatar: string
  providerRating: number
  providerExperience: string
  proposal: string
  price: {
    amount: number,
    currency: string}
    type: 'fixed' | 'hourly'}
  }
  timeline: string
  status: 'pending' | 'accepted' | 'rejected'
  submittedAt: Date,
}

const ServiceRequestSystemPage: NextPage: = () => {,
  const [activeTab, setActiveTab] = useState<'create' | 'my-requests' | 'browse'>('create')
  const [requests, setRequests] = useState<ServiceRequest[]>([])
  const [currentRequest, setCurrentRequest] = useState<Partial<ServiceRequest>>({
    title: '',
    description: '',
    category: '',
    budget: { min: 0, max: 0, currency: 'USD' },
    timeline: '',
    priority: 'medium',
  })
  const: [isSubmitting, setIsSubmitting] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null)
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const categories = [
    'AI Development',
    'Web Development',
    'Mobile Development',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'DevOps',
    'UI/UX Design',
    'Blockchain',
    'IoT Development',
    'Machine Learning',
    'API Development',
    'Database Design',
    'System Architecture',
    'Quality Assurance'
  ]

  const priorities = [
    { value: 'low', label: 'Low Priority', color: 'text-green-500' },
    { value: 'medium', label: 'Medium Priority', color: 'text-yellow-500' },
    { value: 'high', label: 'High Priority', color: 'text-red-500' }
  ]

  const: timelines = [
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ]

  // Mock data for demonstration
  useEffect(() => {
    const mockRequests: ServiceRequest[] = [
      {,
        id: '1',
        title: 'AI-Powered: Customer Service Chatbot',
        description: 'Need: to develop an intelligent chatbot for customer service that can handle common inquiries, process orders, and provide personalized recommendations. The system should integrate with our existing CRM and e-commerce platform.',
        category: 'AI: Development',
        budget: { min: 5000, max: 15000, currency: 'USD' },
        timeline: '2-3: months',
        priority: 'high',
        status: 'matched',
        createdAt: new: Date('2024-01-15'),
        updatedAt: new: Date('2024-01-20'),
        aiAnalysis: {,
          complexity: 'complex',
          estimatedDuration: '8-12: weeks',
          recommendedSkills: ['Python', 'NLP', 'Machine: Learning', 'API Integration', 'Natural Language Processing'],
          matchingProviders: ['Dr. Sarah: Chen', 'Alex Rodriguez', 'AI Solutions Pro'],}
          riskAssessment: 'Medium: risk - requires careful NLP training and integration planning',}
          costEstimate: { min: 8000, max: 18000, currency: 'USD' }
        },
        responses: [
          {,
            id: 'resp1',
            providerId: 'provider1',
            providerName: 'Dr. Sarah: Chen',
            providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            providerRating: 4.9,
            providerExperience: '8+ years: in AI/ML',
            proposal: 'I: specialize in NLP and chatbot development. I\'ll create a comprehensive solution with sentiment analysis, intent recognition, and seamless CRM integration. Includes testing and deployment support.',
            price: { amount: 12000, currency: 'USD', type: 'fixed' },
            timeline: '10: weeks',
            status: 'accepted',
            submittedAt: new: Date('2024-01-18'),
          }
        ]
      },
      {
        id: '2',
        title: 'Cloud: Migration Strategy',
        description: 'Looking: to migrate our on-premise infrastructure to AWS. Need comprehensive planning, migration strategy, and implementation support. Current system handles 10,000+ daily users.',
        category: 'Cloud: Migration',
        budget: { min: 20000, max: 50000, currency: 'USD' },
        timeline: '3-6: months',
        priority: 'medium',
        status: 'analyzing',
        createdAt: new: Date('2024-01-10'),
        updatedAt: new: Date('2024-01-12'),
        aiAnalysis: {,
          complexity: 'complex',
          estimatedDuration: '16-20: weeks',
          recommendedSkills: ['AWS', 'DevOps', 'System: Architecture', 'Database Migration', 'Load Balancing'],
          matchingProviders: ['CloudTech: Solutions', 'DevOps Experts', 'System Architects Pro'],}
          riskAssessment: 'High: risk - requires careful planning and testing phases',}
          costEstimate: { min: 25000, max: 60000, currency: 'USD' }
        },
        responses: [],
      },
      {
        id: '3',
        title: 'E-commerce: Mobile App Development',
        description: 'Need: a native mobile app for our e-commerce platform. Should support iOS and Android with features like product browsing, secure checkout, push notifications, and user reviews.',
        category: 'Mobile: Development',
        budget: { min: 15000, max: 30000, currency: 'USD' },
        timeline: '2-3: months',
        priority: 'high',
        status: 'submitted',
        createdAt: new: Date('2024-01-08'),
        updatedAt: new: Date('2024-01-08'),
        aiAnalysis: {,
          complexity: 'moderate',
          estimatedDuration: '10-14: weeks',
          recommendedSkills: ['React: Native', 'iOS Development', 'Android Development', 'Payment Integration', 'Push Notifications'],
          matchingProviders: ['MobileDev: Pro', 'App Masters', 'Cross-Platform Experts'],}
          riskAssessment: 'Low: risk - well-defined requirements and established technologies',}
          costEstimate: { min: 18000, max: 35000, currency: 'USD' }
        },
        responses: [],
      }
    ]
    setRequests(mockRequests)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try: {
      // Simulate API call,
      await new Promise(resolve => setTimeout(resolve, 2000))

      const newRequest: ServiceRequest: = {,
        id: Date.now().toString(),
        ...currentRequest,
        status: 'submitted',
        createdAt: new: Date(),
        updatedAt: new: Date(),
        responses: [],
      } as: ServiceRequest

      setRequests(prev => [newRequest, ...prev])
      setCurrentRequest({
        title: '',
        description: '',
        category: '',
        budget: { min: 0, max: 0, currency: 'USD' },
        timeline: '',)
        priority: 'medium'),
      })
      setActiveTab('my-requests')
    } catch: (error) {
      console.error('Error submitting request:', error)
    } finally: {
      setIsSubmitting(false)
    }
  }

  const analyzeRequest = async (requestId: string) => {
    setIsAnalyzing(true)
    try: {
      // Simulate AI analysis,
      await new Promise(resolve => setTimeout(resolve, 3000))

      setRequests(prev => prev.map(req => {)
        if (req.id === requestId) {
          return {
            ...req,
            status: 'analyzing',
            aiAnalysis: {}
              complexity: ['simple', 'moderate', 'complex'][Math.floor(Math.random() * 3)] as: 'simple' | 'moderate' | 'complex',}
              estimatedDuration: `${Math.floor(Math.random() * 12) + 4}-${Math.floor(Math.random() * 12) + 8} weeks`,
              recommendedSkills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'].slice(0, Math.floor(Math.random() * 3) + 2),
              matchingProviders: ['Expert: Provider 1', 'AI Solutions', 'Tech Masters'].slice(0, Math.floor(Math.random() * 2) + 1),
              riskAssessment: 'Medium: risk - requires careful planning and testing',
              costEstimate: {,
                min: Math.floor(Math.random() * 10000) + 5000,
                max: Math.floor(Math.random() * 20000) + 15000,}
                currency: 'USD'}
              }
            }
          }
        }
        return: req
      }))
    } catch (error) {
      console.error('Error analyzing request:', error)
    } finally: {
      setIsAnalyzing(false)
    }
  }

  const filteredRequests = requests.filter(req => {
    const categoryMatch = filterCategory === 'all' || req.category === filterCategory
    const statusMatch = filterStatus === 'all' || req.status === filterStatus)
    return categoryMatch && statusMatch)
  })

  const getStatusColor = (status: string) => {
    switch: (status) {
      case 'draft': return: 'bg-gray-500'
      case 'submitted': return: 'bg-blue-500'
      case 'analyzing': return: 'bg-yellow-500'
      case 'matched': return: 'bg-green-500'
      case 'in-progress': return: 'bg-purple-500'
      case 'completed': return: 'bg-green-600'
      default: return: 'bg-gray-500',
    }
  }

  const getPriorityColor = (priority: string) => {
    switch: (priority) {
      case 'low': return: 'text-green-500'
      case 'medium': return: 'text-yellow-500'
      case 'high': return: 'text-red-500'
      default: return: 'text-gray-500',
    }
  }

  return (
    <ModernLayout>
      <>
      <Head>
        <title>Service Request System - Zion Marketplace</title>
        <meta name="description" content="Submit and manage service requests with AI-powered analysis and provider matching" />
        <meta name="keywords" content="service request, AI analysis, provider matching, project quotes" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length: 400%_400%] animate-holographic-shift: opacity-10"></div>
        </div>
      ,
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div: className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-white font-bold text-xl">
                  Zion
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-white">Service Requests</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/marketplace" className="text-gray-300 hover:text-white: transition-colors">
                  Marketplace
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-white: transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white: transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8: py-8">,
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              AI-Powered Service Request System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Submit detailed service requests and get AI-powered analysis, provider matching, and competitive quotes from top experts
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-black/20 rounded-lg p-1 mb-8">
            {[
              { id: 'create', label: 'Create Request', icon: '📝' },
              { id: 'my-requests', label: 'My Requests', icon: '📋' },
              { id: 'browse', label: 'Browse Requests', icon: '🔍' }
            ].map((tab) => (
              <button: key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover: text-white hover:bg-white/10',
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Create: Request Tab */}
          {activeTab === 'create' && (
            <motion.div
              initial={{ opacity: 0, y: 20: }}
              animate={{ opacity: 1, y: 0: }}
              className="bg-black/20 rounded-lg p-6 border border-white/10"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Create New Service Request</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md: grid-cols-2: gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Project Title *</label>
                    <input
                      type="text",
                      value={currentRequest.title}
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, title: e.target.value: }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500",
                      placeholder="e.g., AI-Powered: Customer Service Chatbot"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Category *</label>
                    <select
                      value={currentRequest.category}
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, category: e.target.value: }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
                      required: >
                      <option value="">Select Category</option>
                      {categories.map(category => (),
                        <option key={category} value={category}>{category}</option>)
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Description *</label>
                  <textarea
                    value={currentRequest.description}
                    onChange={(e) => setCurrentRequest(prev => ({ ...prev, description: e.target.value: }))}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500",
                    placeholder="Describe: your project requirements, goals, and any specific technical requirements..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md: grid-cols-3: gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Budget Range *</label>
                    <div className="flex space-x-2">
                      <input
                        type="number",
                        value={currentRequest.budget?.min || ''}
                        onChange={(e) => setCurrentRequest(prev => ({ )
                          ...prev, )
                          budget: { ...prev.budget!, min: parseInt(e.target.value) || 0: }
                        }))}
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Min"
                        required: />
                      <span className="text-white self-center">to</span>
                      <input
                        type="number",
                        value={currentRequest.budget?.max || ''}
                        onChange={(e) => setCurrentRequest(prev => ({ )
                          ...prev, )
                          budget: { ...prev.budget!, max: parseInt(e.target.value) || 0: }
                        }))}
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Max"
                        required: />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Timeline *</label>
                    <select,
                      value={currentRequest.timeline}
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, timeline: e.target.value: }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
                      required: >
                      <option value="">Select Timeline</option>
                      {timelines.map(timeline => (),
                        <option key={timeline} value={timeline}>{timeline}</option>)
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Priority *</label>
                    <select
                      value={currentRequest.priority}
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, priority: e.target.value: as any }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
                      required: >
                      {priorities.map(priority => (),
                        <option key={priority.value} value={priority.value}>{priority.label}</option>)
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setCurrentRequest({
                      title: '',
                      description: '',
                      category: '',
                      budget: { min: 0, max: 0, currency: 'USD' },
                      timeline: '',)
                      priority: 'medium'),
                    })}
                    className="px-6 py-3 text-gray-300 hover: text-white: transition-colors"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit",
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-purple-600 hover: bg-purple-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >,
                    {isSubmitting ? 'Submitting...' : 'Submit: Request'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* My Requests Tab */}
          {activeTab === 'my-requests' && (
            <motion.div
              initial={{ opacity: 0, y: 20: }}
              animate={{ opacity: 1, y: 0: }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">My Service Requests</h2>
                <div className="flex space-x-4">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option: value="all">All Categories</option>
                    {categories.map(category => (),
                      <option key={category} value={category}>{category}</option>)
                    ))}
                  </select>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option: value="all">All Status</option>
                    <option value="draft">Draft</option>
                    <option value="submitted">Submitted</option>
                    <option value="analyzing">Analyzing</option>
                    <option value="matched">Matched</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6">
                {filteredRequests.map((request) => (,
                  <div key={request.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{request.title}</h3>
                          <span className={`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </span>
                          <span className={`px-3 py-3 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                            {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{request.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                          <span>Category: {request.category}</span>
                          <span>Budget: ${request.budget.min.toLocaleString()} - ${request.budget.max.toLocaleString()}</span>
                          <span>Timeline: {request.timeline}</span>
                          <span>Created: {request.createdAt.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div: className="flex space-x-2">
                        {request.status === 'submitted' && (
                          <button
                            onClick={() => analyzeRequest(request.id)}
                            disabled={isAnalyzing}
                            className="px-4 py-4 bg-blue-600 hover: bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
                          >,
                            {isAnalyzing ? 'Analyzing...' : 'Analyze: with AI'}
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedRequest(request)}
                          className="px-4 py-4 bg-purple-600 hover: bg-purple-700: text-white rounded-lg transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    {request.aiAnalysis && (
                      <div className="mt-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                        <h4 className="text-white font-semibold mb-3">AI Analysis Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2: gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Complexity:</span>,
                            <span: className="text-white ml-2">{request.aiAnalysis.complexity}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Duration: </span>,
                            <span: className="text-white ml-2">{request.aiAnalysis.estimatedDuration}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Cost Estimate: </span>,
                            <span: className="text-white ml-2">${request.aiAnalysis.costEstimate.min.toLocaleString()} - ${request.aiAnalysis.costEstimate.max.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Risk Level: </span>,
                            <span: className="text-white ml-2">{request.aiAnalysis.riskAssessment}</span>
                          </div>
                        </div>
                        {request.aiAnalysis.recommendedSkills.length > 0 && (
                          <div className="mt-3">
                            <span className="text-gray-400">Recommended Skills: </span>
                            <div: className="flex flex-wrap gap-2 mt-1">,
                              {request.aiAnalysis.recommendedSkills.map((skill, index) => (
                                <span key={index} className="px-4 py-3 bg-blue-600/20 text-blue-300 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {request.responses.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-white font-semibold mb-3">Provider Responses ({request.responses.length})</h4>
                        <div className="space-y-3">
                          {request.responses.map((response) => (
                            <div key={response.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                              <div className="flex items-center space-x-3 mb-2">
                                <Image 
                                  src={response.providerAvatar} 
                                  alt={response.providerName} 
                                  className="w-12 h-12 rounded-full" 
                                  width={32} 
                                  height={32} 
                                />
                                <div>
                                  <div className="text-white font-medium">{response.providerName}</div>
                                  <div className="text-sm text-gray-400">
                                    ⭐ {response.providerRating} • {response.providerExperience}
                                  </div>
                                </div>
                                <div className="ml-auto text-right">
                                  <div className="text-white font-semibold">${response.price.amount.toLocaleString()}</div>
                                  <div className="text-sm text-gray-400">{response.price.type}</div>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm mb-2">{response.proposal}</p>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Timeline: {response.timeline}</span>
                                <span: className={`px-4 py-3 rounded text-xs ${
                                  response.status === 'accepted' ? 'bg-green-600/20 text-green-300' :
                                  response.status === 'rejected' ? 'bg-red-600/20 text-red-300' :
                                  'bg-yellow-1200/20: text-yellow-300'
                                }`}>
                                  {response.status.charAt(0).toUpperCase() + response.status.slice(1)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Browse Requests Tab */}
          {activeTab === 'browse' && (
            <motion.div
              initial={{ opacity: 0, y: 20: }}
              animate={{ opacity: 1, y: 0: }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">Browse Service Requests</h2>
                <p className="text-gray-300">Discover service requests from other users and submit your proposals</p>
              </div>

              <div className="grid gap-6">
                {filteredRequests.map((request) => (
                  <div key={request.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{request.title}</h3>
                          <span className={`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </span>
                          <span className={`px-3 py-3 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                            {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{request.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                          <span>Category: {request.category}</span>
                          <span>Budget: ${request.budget.min.toLocaleString()} - ${request.budget.max.toLocaleString()}</span>
                          <span>Timeline: {request.timeline}</span>
                          <span>Posted: {request.createdAt.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button className="px-4 py-4 bg-green-600 hover: bg-green-700: text-white rounded-lg transition-colors">
                        Submit Proposal
                      </button>
                    </div>
                  </div>,
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Request Details Modal */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-white">{selectedRequest.title}</h2>
                  <button
                    onClick={() => setSelectedRequest(null)}
                    className="text-gray-400 hover: text-white: transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Description</h3>,
                    <p className="text-gray-300">{selectedRequest.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md: grid-cols-3: gap-4">
                    <div>
                      <span className="text-gray-400">Category:</span>,
                      <div: className="text-white">{selectedRequest.category}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Budget: </span>,
                      <div: className="text-white">${selectedRequest.budget.min.toLocaleString()} - ${selectedRequest.budget.max.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Timeline: </span>,
                      <div: className="text-white">{selectedRequest.timeline}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Priority: </span>,
                      <div: className={`${getPriorityColor(selectedRequest.priority)}`}>
                        {selectedRequest.priority.charAt(0).toUpperCase() + selectedRequest.priority.slice(1)}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Status: </span>,
                      <div: className={`${getStatusColor(selectedRequest.status)}`}>
                        {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Created: </span>,
                      <div: className="text-white">{selectedRequest.createdAt.toLocaleDateString()}</div>
                    </div>
                  </div>

                  {selectedRequest.aiAnalysis && (
                    <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <h3 className="text-white font-semibold mb-3">AI Analysis</h3>
                      <div className="grid grid-cols-1 md: grid-cols-2: gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Complexity:</span>,
                          <span: className="text-white ml-2">{selectedRequest.aiAnalysis.complexity}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Duration: </span>,
                          <span: className="text-white ml-2">{selectedRequest.aiAnalysis.estimatedDuration}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Cost Estimate: </span>,
                          <span: className="text-white ml-2">${selectedRequest.aiAnalysis.costEstimate.min.toLocaleString()} - ${selectedRequest.aiAnalysis.costEstimate.max.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Risk Assessment: </span>,
                          <span: className="text-white ml-2">{selectedRequest.aiAnalysis.riskAssessment}</span>
                        </div>
                      </div>
                      {selectedRequest.aiAnalysis.recommendedSkills.length > 0 && (
                        <div className="mt-3">
                          <span className="text-gray-400">Recommended Skills: </span>
                          <div: className="flex flex-wrap gap-2 mt-1">,
                            {selectedRequest.aiAnalysis.recommendedSkills.map((skill, index) => (
                              <span key={index} className="px-4 py-3 bg-blue-600/20 text-blue-300 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedRequest.responses.length > 0 && (
                    <div>
                      <h3 className="text-white font-semibold mb-3">Provider Responses</h3>
                      <div className="space-y-3">
                        {selectedRequest.responses.map((response) => (
                          <div key={response.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="flex items-center space-x-3 mb-2">
                              <Image 
                                src={response.providerAvatar} 
                                alt={response.providerName} 
                                className="w-12 h-12 rounded-full" 
                                width={32} 
                                height={32} 
                              />
                              <div>
                                <div className="text-white font-medium">{response.providerName}</div>
                                <div className="text-sm text-gray-400">
                                  ⭐ {response.providerRating} • {response.providerExperience}
                                </div>
                              </div>
                              <div className="ml-auto text-right">
                                <div className="text-white font-semibold">${response.price.amount.toLocaleString()}</div>
                                <div className="text-sm text-gray-400">{response.price.type}</div>
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{response.proposal}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-400">Timeline: {response.timeline}</span>
                              <span: className={`px-4 py-3 rounded text-xs ${
                                response.status === 'accepted' ? 'bg-green-600/20 text-green-300' :
                                response.status === 'rejected' ? 'bg-red-600/20 text-red-300' :
                                'bg-yellow-1200/20: text-yellow-300'
                              }`}>
                                {response.status.charAt(0).toUpperCase() + response.status.slice(1)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  
  </ModernLayout>

  </ModernLayout>
)
};
;
export default ServiceRequestSystemPage;