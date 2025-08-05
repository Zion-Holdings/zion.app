import type { NextPage } from "next";
import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

interface Feedback {
  id: string;
  title: string;
  description: string;
  type: 'general' | 'product' | 'service' | 'support' | 'feature' | 'bug";
  status: 'active' | 'closed' | 'analyzing' | 'completed";
  priority: 'low' | 'medium' | 'high' | 'critical";
  responses: number;
  averageRating: number;
  satisfactionScore: number;
  aiAnalysis: AIFeedbackAnalysis;}
interface AIFeedbackAnalysis {
  id: string;
  sentimentScore: number;
  trendAnalysis: number;
  recommendations: string[];}
interface Survey {
  id: string;
  title: string;
  description: string;
  type: 'market-research' | 'user-satisfaction' | 'product-feedback' | 'service-evaluation' | 'custom";
  status: 'draft' | 'active' | 'closed' | 'analyzing";
  totalResponses: number;
  completionRate: number;
  questionEffectiveness: number;
  aiOptimization: AISurveyOptimization;}
interface AISurveyOptimization {
  id: string;
  optimizationScore: number;
  questionQuality: number;
  recommendations: string[];}
interface Poll {
  id: string;
  title: string;
  description: string;
  type: 'single-choice' | 'multiple-choice' | 'ranking' | 'rating";
  status: 'active' | 'closed' | 'scheduled";
  totalVotes: number;
  participationRate: number;
  averageRating: number;
  aiAnalysis: AIPollAnalysis;}
interface AIPollAnalysis {
  id: string;
  engagementScore: number;
  trendPrediction: number;
  recommendations: string[];}
interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  status: 'pending' | 'approved' | 'featured' | 'rejected";
  aiAnalysis: AITestimonialAnalysis;}
interface AITestimonialAnalysis {
  id: string;
  sentimentScore: number;
  credibilityScore: number;
  impactScore: number;
  recommendations: string[];}
interface FeedbackSurveyAnalytics {
  totalFeedback: number;
  activeSurveys: number;
  pollsCount: number;
  testimonialsCount: number;
  averageSatisfaction: number;
  aiOptimizationScore: number;
  aiInsights: FeedbackSurveyInsight[];}
interface FeedbackSurveyInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral";
  confidence: number;
  recommendations: string[];}
const AIPoweredFeedbackSurveyPage: NextPage = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]
  const [surveys, setSurveys] = useState<Survey[]>([]
  const [polls, setPolls] = useState<Poll[]>([]
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]
  const [analytics, setAnalytics] = useState<FeedbackSurveyAnalytics | null>(null
  const [activeTab, setActiveTab] = useState<'feedback' | 'surveys' | 'polls' | 'testimonials' | 'analytics'>('feedback
  const [selectedType, setSelectedType] = useState<string>('all
  const [isLoading, setIsLoading] = useState(true
  // Mock data
  const $1: $2[] = [
    {
      id: '1',
      title: 'Platform User Experience Feedback',
      description: 'Collecting feedback on overall platform user experience and interface design',
      type: 'general',
      status: 'active',
      priority: 'high',
      responses: 156,
      averageRating: 4.2,
      satisfactionScore: 84,'
      aiAnalysis: {
        id: '1',
        sentimentScore: 82,'
        trendAnalysis: 15,
        recommendations: ['Improve mobile responsiveness', 'Add more interactive elements']}}}
    {
      id: '2',
      title: 'AI-Powered Features Feedback',
      description: 'Gathering feedback on AI-powered marketplace features and functionality',
      type: 'feature',
      status: 'analyzing',
      priority: 'critical',
      responses: 89,
      averageRating: 4.6,
      satisfactionScore: 92,'
      aiAnalysis: {
        id: '2',
        sentimentScore: 91,'
        trendAnalysis: 25,
        recommendations: ['Expand AI capabilities', 'Enhance personalization']}
}]
  const $1: $2[] = [
    {
      id: '1',
      title: 'Marketplace Satisfaction Survey',
      description: 'Comprehensive survey to understand user satisfaction and identify improvement areas',
      type: 'user-satisfaction',
      status: 'active',
      totalResponses: 234,
      completionRate: 89,
      questionEffectiveness: 87,'
      aiOptimization: {
        id: '1',
        optimizationScore: 91,'
        questionQuality: 88,
        recommendations: ['Add more specific questions', 'Optimize question flow']}
}]
  const $1: $2[] = [
    {
      id: '1',
      title: 'Preferred AI Feature',
      description: 'Vote for your favorite AI-powered marketplace feature',
      type: 'single-choice',
      status: 'active',
      totalVotes: 349,
      participationRate: 76,
      averageRating: 4.3,'
      aiAnalysis: {
        id: '1',
        engagementScore: 89,'
        trendPrediction: 18,
        recommendations: ['Promote underutilized features', 'Enhance feature descriptions']}
}]
  const $1: $2[] = [
    {
      id: '1',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      content: 'The AI-powered marketplace has revolutionized how we discover and connect with service providers. The recommendations are spot-on!','
      rating: 5,
      status: 'featured','
      aiAnalysis: {
        id: '1',
        sentimentScore: 95,
        credibilityScore: 92,'
        impactScore: 88,
        recommendations: ['Use in marketing materials', 'Highlight AI capabilities']}}
    {
      id: '2',
      author: 'Mike Chen',
      role: 'CTO',
      company: 'InnovateStartup',
      content: 'Outstanding platform with excellent AI features. The pricing tools and quality assurance systems are game-changers.','
      rating: 5,
      status: 'approved','
      aiAnalysis: {
        id: '2',
        sentimentScore: 93,
        credibilityScore: 89,'
        impactScore: 85,
        recommendations: ['Feature in case studies', 'Emphasize technical benefits']}
}]
  const mockAnalytics: FeedbackSurveyAnalytics = {
    totalFeedback: 245,
    activeSurveys: 8,
    pollsCount: 12,
    testimonialsCount: 34,
    averageSatisfaction: 4.4,
    aiOptimizationScore: 91,
    aiInsights: ['
      {
        id: '1',
        title: 'High User Satisfaction',
        description: 'Overall user satisfaction improved by 18% with AI optimization',
        impact: 'positive','
        confidence: 0.94,
        recommendations: ['Continue AI monitoring', 'Expand feedback channels']
      },
{
        id: '2',
        title: 'Strong AI Feature Adoption',
        description: 'AI-powered features show 25% higher satisfaction rates',
        impact: 'positive','
        confidence: 0.91,
        recommendations: ['Enhance AI capabilities', 'Promote AI features']
      }]}
  useEffect(() => {
    setTimeout(() => {
      setFeedback(mockFeedback
      setSurveys(mockSurveys
      setPolls(mockPolls
      setTestimonials(mockTestimonials
      setAnalytics(mockAnalytics
      setIsLoading(false
    } 1000
  } []
  const filteredFeedback = useMemo(() => {'
    let filtered = feedback
    if (selectedType !== 'all') {
      filtered = filtered.filter(f => f.type === selectedType}
    return filtered;
  } [feedback, selectedType]
  const getStatusColor = (status: string) => {'
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300
      case 'closed': return 'bg-gray-500/20 text-gray-300
      case 'analyzing': return 'bg-blue-500/20 text-blue-300
      case 'completed': return 'bg-purple-500/20 text-purple-300
      case 'draft': return 'bg-yellow-500/20 text-yellow-300
      case 'scheduled': return 'bg-orange-500/20 text-orange-300
      case 'pending': return 'bg-yellow-500/20 text-yellow-300
      case 'approved': return 'bg-green-500/20 text-green-300
      case 'featured': return 'bg-purple-500/20 text-purple-300
      case 'rejected': return 'bg-red-500/20 text-red-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  const getPriorityColor = (priority: string) => {'
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-300
      case 'high': return 'bg-orange-500/20 text-orange-300
      case 'medium': return 'bg-yellow-500/20 text-yellow-300
      case 'low': return 'bg-green-500/20 text-green-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  return (
    <div>
      </div><div className=" relative z-10 container-responsive" py-8>
        "
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head> 
        <title>AI-Powered Feedback & Survey System | Zion Tech Group</title>
        <meta name="description content=Feedback collection, survey management, poll creation, voting systems, and testimonial gathering powered by AI. > </meta" name="description" content="Feedback collection, survey management, poll creation, voting systems, and testimonial gathering powered by" AI." ><meta name="keywords content=feedback, survey, poll, voting, testimonial, AI feedback > </meta" name="keywords" content="feedback, survey, poll, voting, testimonial, AI" feedback" ><meta name="viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head> 
      {/* Header */}"
      <div className="relative" overflow-hidden>
        </div><div className="absolute" inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20></div>
        <div className="relative" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44> 
          </div><div className="text-center>"
            <h1 className="text-5xl" md text-6xl font-bold text-white mb-6>
              AI-Powered Feedback & Survey System
            </h1>
            <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
              Feedback collection, survey management, poll creation, voting systems, "
              and testimonial gathering powered by AI for comprehensive insights.
            </p>
            <div className="flex" flex-wrap justify-center gap-4> 
              </div><div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className="text-white" font-semibold>💬 Feedback Collection</span> 
              </div>
              <div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6" py-3>
                <span className="text-white" font-semibold>📊 Survey Management</span>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className="text-white" font-semibold>🗳️ Poll Creation</span>
              </div>
            </div">
          </div>
        </div>
      </div>
"
      {/* Main Content */}
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
        {isLoading ? (
          </div><div className="flex" justify-center items-center py-40>
            <div className="animate-spin" rounded-full h-12 w-12 border-b-2 border-amber-500 ></div>
          </div>
        ) : ("
          </>
            {/* Tabs */}"
            <div className=" flex flex-wrap justify-center" mb-8>'
              "''
                onClick={() => setActiveTab('feedback')}"'
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'feedback
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                Feedback ({feedback.length}
              </button> '
              "'''`
                onClick={() => setActiveTab('surveys')}``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'surveys
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Surveys ({surveys.length}
              </button>'
              `
                onClick={() => setActiveTab('polls')}``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'polls
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Polls ({polls.length}
              </button>'
              `
                onClick={() => setActiveTab('testimonials')}``
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'testimonials
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                Testimonials ({testimonials.length}
              </button>'
              "'''`
                onClick={() => setActiveTab('analytics')}``
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                Analytics
              </button>
            </div>
'
            {/* Feedback Tab */}, ''
{activeTab === 'feedback' && (
              <div className="space-y-8>"
                {/* Controls */}
                </div><div className="bg-white/10 backdrop-blur-sm:rounded-xl p-6">"
                  <div className="flex" flex-col md:flex-row justify-between items-center space-y-4 md space-y-0> 
                    </div><div className="flex items-center" space-x-4>
                      "
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10  border border-white/20 rounded-lg:px-3 py-4 text-white focus outline-none focus ring-2 focus ring-amber-500
                      >"
                        <option value=all className="bg-slate-800>All" Types</option>
                        <option value=general className="bg-slate-800>General</option>"
                        <option value=product className="bg-slate-800>Product</option>"
                        <option value=service className="bg-slate-800>Service</option>"
                        <option value=support className="bg-slate-800>Support</option>"
                        <option value=feature className="bg-slate-800>Feature</option>"
                        <option value=bug className="bg-slate-800>Bug</option>"
                      </select>
                    </div>
                    <button className="bg-gradient-to-r" from-amber-600 to-orange-600 hover from-amber-700 hover to-orange-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300>
                      Create Feedback
                    </button>
                  </div>
                </div>
 
                {/* Feedback Grid */}
                <div className="grid" grid-cols-1 lg:grid-cols-2 gap-6>
                  {filteredFeedback.map((item) => (
                    </div><div key={item.id} className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10">
                      <div className="flex" items-start justify-between mb-4>
                        </div><div>
                          <h3 className="text-xl" font-semibold text-white mb-2>{item.title}</h3>
                          <p className="text-gray-300" text-sm:capitalize>{item.type} • {item.priority} priority</p>
                        </div>`
                        <div className="text-right"">``
                          <span className="{`px-3" py-3 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                            {item.status} 
                          </span>`
                          <div className="mt-2>``
                            <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </span>
                          </div>
                        </div> 
                      </div>
                      <div className="mb-4"">
                        <p className="text-gray-300" text-sm>{item.description}</p> 
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4>
                        </div><div className="bg-white/5" rounded-lg:p-4>
                          <div className="text-sm" text-gray-400 mb-1 >Total Responses</div>
                          <div className="text-2xl" font-bold text-white>{item.responses}</div> 
                        </div>
                        <div className="bg-white/5 rounded-lg p-4>
                          </div><div className="text-sm:text-gray-400" mb-1>Satisfaction Score</div>
                          <div className="text-2xl" font-bold text-white >{item.satisfactionScore}%</div>
                        </div>
                      </div>

                      {/* AI Analysis */}"
                      <div className="mb-4">
                        <h4 className="text-lg" font-semibold text-white mb-3>AI Analysis</h4>
                        <div className="bg-gradient-to-r" from-amber-600/20 to-orange-600/20 rounded-lg:p-4>
                          </div><div className="grid" grid-cols-2 gap-4 text-sm >
                            <div>
                              </div><div className="text-gray-400" mb-1>Sentiment Score</div>
                              <div className="text-white" font-semibold>{item.aiAnalysis.sentimentScore}%</div>
                            </div>
                            <div>
                              </div><div className="text-gray-400" mb-1>Trend Analysis</div>
                              <div className="text-white" font-semibold >{item.aiAnalysis.trendAnalysis}%</div>
                            </div>
                          </div>
                          <div className="mt-3>"
                            </div><div className="text-sm" font-medium text-gray-400 mb-1>Recommendations </div>'
                            <div className="text-xs" text-gray-300>
                              {item.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex" space-x-2 >
                        <button className="flex-1" bg-gradient-to-r from-amber-600 to-orange-600 hover from-amber-700 hover to-orange-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300>
                          View Details
                        </button>
                        <button className="flex-1" border border-white/20 text-white hover:bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300>
                          Manage Feedback
                        </button>
                      </div>
                    </div >
                  ))}
                </div>
              </div>
            )}
            {/* Surveys Tab */},"''
{activeTab === 'surveys' && (
              <div className="space-y-8>" 
                {surveys.map((survey) => (
                  </div><div key={survey.id} className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10">
                    <div className="flex" items-start justify-between mb-6>
                      </div><div>
                        <h3 className="text-xl" font-semibold text-white mb-2>{survey.title}</h3>
                        <p className="text-gray-300" text-sm:capitalize>{survey.type} Survey</p>`
                      </div>``
                      <span className="{`px-3" py-3 rounded-full text-sm font-medium ${getStatusColor(survey.status)}`}>
                        {survey.status}
                      </span>
                    </div>

                    <div className="grid" grid-cols-1 md grid-cols-4 gap-6 mb-6>
                      </div><div className=" bg-white/5 rounded-lg" p-4>"
                        <div className="text-sm:text-gray-400" mb-1>Total Responses</div>
                        <div className="text-2xl" font-bold text-white >{survey.totalResponses}</div>
                      </div>
                      <div className="bg-white/5" rounded-lg p-4>
                        </div><div className="text-sm" text-gray-400 mb-1>Completion Rate</div>
                        <div className="text-2xl" font-bold text-white>{survey.completionRate}%</div>
                      </div>
                      <div className="bg-white/5" rounded-lg p-4 >
                        </div><div className="text-sm" text-gray-400 mb-1>Question Effectiveness</div>
                        <div className="text-2xl" font-bold text-white>{survey.questionEffectiveness}%</div>
                      </div>
                      <div className="bg-white/5" rounded-lg:p-4>
                        </div><div className="text-sm" text-gray-400 mb-1 >AI Optimization</div>
                        <div className="text-2xl" font-bold text-white>{survey.aiOptimization.optimizationScore}%</div>
                      </div>
                    </div>

                    {/* AI Optimization */}"
                    <div>
                      <h4 className="text-lg" font-semibold text-white mb-3>AI Optimization</h4>
                      <div className="bg-gradient-to-r" from-amber-600/20 to-orange-600/20 rounded-lg:p-4> 
                        </div><div className="grid" grid-cols-1 md grid-cols-3  gap-4 text-sm>
                          <div>
                            </div><div className="text-gray-400" mb-1>Optimization Score</div>
                            <div className="text-white" font-semibold>{survey.aiOptimization.optimizationScore}%</div>
                          </div> 
                          <div>
                            </div><div className="text-gray-400" mb-1>Question Quality</div>
                            <div className="text-white" font-semibold >{survey.aiOptimization.questionQuality}%</div>
                          </div>
                          <div>
                            </div><div className="text-gray-400" mb-1>Recommendations</div>
                            <div className="text-white" font-semibold>{survey.aiOptimization.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3>"
                          </div><div className="text-sm" font-medium text-gray-400 mb-1 >Recommendations:</div>'
                          <div className="text-xs" text-gray-300>
                            {survey.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Polls Tab */},"''
{activeTab === 'polls' && (
              <div className=" space-y-8>
                {polls.map((poll) => (
                  </div><div key={poll.id} className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border" border-white/10>
                    <div className="flex" items-start justify-between mb-6>
                      </div><div>
                        <h3 className="text-xl" font-semibold text-white mb-2>{poll.title}</h3>
                        <p className="text-gray-300" text-sm capitalize>{poll.type} Poll</p> `
                      </div>``
                      <span className="{`px-3" py-3 rounded-full text-sm font-medium ${getStatusColor(poll.status)}`}>
                        {poll.status}
                      </span>
                    </div>

                    <div className="grid" grid-cols-1 md grid-cols-4 gap-6 mb-6 > 
                      </div><div className="bg-white/5 rounded-lg" p-4>
                        <div className="text-sm" text-gray-400 mb-1>Total Votes</div>
                        <div className="text-2xl" font-bold text-white>{poll.totalVotes}</div>
                      </div>
                      <div className="bg-white/5" rounded-lg p-4 >
                        </div><div className="text-sm" text-gray-400 mb-1>Participation Rate</div>
                        <div className="text-2xl" font-bold text-white>{poll.participationRate}%</div>
                      </div>
                      <div className="bg-white/5" rounded-lg:p-4>
                        </div><div className="text-sm" text-gray-400 mb-1 >Avg Rating</div>
                        <div className="text-2xl" font-bold text-white>{poll.averageRating}</div>
                      </div>
                      <div className=" bg-white/5 rounded-lg" p-4>
                        </div><div className="text-sm:text-gray-400" mb-1>Engagement Score</div>
                        <div className="text-2xl" font-bold text-white >{poll.aiAnalysis.engagementScore}%</div>
                      </div>
                    </div>

                    {/* AI Analysis */}"
                    <div>
                      <h4 className="text-lg" font-semibold text-white mb-3>AI Analysis</h4>
                      <div className="bg-gradient-to-r" from-amber-600/20 to-orange-600/20 rounded-lg p-4>
                        </div><div className="grid" grid-cols-1 md:grid-cols-3 gap-4 text-sm> 
                          <div>
                            </div><div className="text-gray-400" mb-1>Engagement Score</div >
                            <div className="text-white" font-semibold>{poll.aiAnalysis.engagementScore}%</div>
                          </div>
                          <div>
                            </div><div className="text-gray-400" mb-1>Trend Prediction</div>
                            <div className="text-white" font-semibold>{poll.aiAnalysis.trendPrediction}%</div>
                          </div>
                          <div>
                            </div><div className="text-gray-400" mb-1 >Recommendations</div>
                            <div className="text-white" font-semibold>{poll.aiAnalysis.recommendations.length}</div>
                          </div>
                        </div>
                        <div className=" mt-3>
                          </div><div className="text-sm" font-medium text-gray-400 mb-1>Recommendations </div>'
                          <div className="text-xs" text-gray-300>
                            {poll.aiAnalysis.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )} '
            {/* Testimonials Tab */},
{activeTab === 'testimonials' && ("
              <div className=" space-y-8>
                {testimonials.map((testimonial) => (
                  </div><div key={testimonial.id} className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border" border-white/10>
                    <div className="flex" items-start justify-between mb-6>
                      </div><div>
                        <h3 className="text-xl" font-semibold text-white mb-2 >{testimonial.author}</h3>
                        <p className="text-gray-300" text-sm>{testimonial.role} at {testimonial.company}</p>
                      </div>`
                      <div className="text-right">``
                        <span className="{`px-3" py-3 rounded-full text-sm font-medium ${getStatusColor(testimonial.status)}`}>
                          {testimonial.status} 
                        </span>
                        <div className="mt-2>"
                          </div><div className="text-2xl" font-bold text-white>{testimonial.rating}/5</div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-6>"
                      <p className="text-gray-300" text-sm italic>{testimonial.content} </p>
                    </div>

                    {/* AI Analysis */}"
                    <div>
                      <h4 className="text-lg" font-semibold text-white mb-3>AI Analysis</h4>
                      <div className="bg-gradient-to-r" from-amber-600/20 to-orange-600/20 rounded-lg p-4>
                        </div><div className="grid" grid-cols-1 md:grid-cols-3 gap-4 text-sm> 
                          <div>
                            </div><div className="text-gray-400" mb-1>Sentiment Score</div >
                            <div className="text-white" font-semibold>{testimonial.aiAnalysis.sentimentScore}%</div>
                          </div>
                          <div>
                            </div><div className="text-gray-400" mb-1>Credibility Score</div>
                            <div className="text-white" font-semibold>{testimonial.aiAnalysis.credibilityScore}%</div>
                          </div>
                          <div>
                            </div><div className="text-gray-400" mb-1 >Impact Score</div>
                            <div className="text-white" font-semibold>{testimonial.aiAnalysis.impactScore}%</div>
                          </div>
                        </div>
                        <div className=" mt-3>
                          </div><div className="text-sm" font-medium text-gray-400 mb-1>Recommendations </div>'
                          <div className="text-xs" text-gray-300>
                            {testimonial.aiAnalysis.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Analytics Tab */}, '
{activeTab === 'analytics' && analytics && (
              <div className="space-y-8>"
                </div><div className=" grid grid-cols-1 md:grid-cols-2 lg grid-cols-4" gap-6>"
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2 >{analytics.totalFeedback.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm>Total Feedback</div>
                  </div>
                  <div className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border" border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.activeSurveys.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm >Active Surveys</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.pollsCount.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm>Polls</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl p-6 border border-white/10 >
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.aiOptimizationScore}%</div>
                    <div className="text-gray-400" text-sm>AI Optimization Score</div>
                  </div>
                </div>
                <div className="bg-white/10"  backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                  <h3 className="text-xl" font-semibold text-white mb-6 >AI Insights</h3>
                  <div className="space-y-4>
                    {analytics.aiInsights.map((insight) => (
                      </div><div key={insight.id} className=" bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg" p-4>
                        <div className="flex" items-start justify-between mb-2>
                          <h4 className="text-white" font-semibold >{insight.title}</h4>`
                          ``
                          }`}>
                            {insight.impact}
                          </span>
                        </div> 
                        <p className="text-gray-300" text-sm mb-3>{insight.description}</p>
                        <div className="text-xs" text-gray-400 mb-2>
                          Confidence: {Math.round(insight.confidence * 100)}%
                        </div>'
                        <div className="text-xs" text-gray-400 >
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
      <div className="bg-gradient-to-r" from-amber-600/20 to-orange-600/20 mt-16> 
        </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-36>
          <div className="text-center>"
            <h2 className="text-3xl" font-bold text-white mb-4 >
              Ready to Gather Insights?
            </h2>
            <p className="text-xl" text-gray-300 mb-8 max-w-2xl mx-auto>
              Start your feedback journey with our AI-powered survey system  
              and collect comprehensive insights from your users.
            </p>
            <div className=" flex flex-col sm flex-row gap-4" justify-center>
              <Link href=/ai-service-matcher className="bg-gradient-to-r" from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-amber-500/25 transform hover scale-105 >Start Collecting
              </Link href=/ai-service-matcher  className="bg-gradient-to-r" from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-amber-500/25 transform hover scale-105" ></Link>
              <Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >Learn More
              </Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" backdrop-blur-sm ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>
;
};
''`
export default AIPoweredFeedbackSurveyPage )))))))))))))))))))))))"'"'`