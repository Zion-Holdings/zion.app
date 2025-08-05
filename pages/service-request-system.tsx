import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout;import Head from "next/head;
import { useState, useEffect, useRef }  from react";
import Link from "next/link;
import { motion } from framer-motion";
import Image from nex't'/image";

interface ServiceRequest {
id: string
  title: string
  description: string
  category: string
  budget: {,
    min: number,}
    max: number}
    currency: string}}
  timeline: string
  priority: 'l'ow | 'medi'um | 'h'igh'
  status: 'dra'f't | submitt'e'd | analyz'i'ng' | 'match'e'd | in-progre's's | comple't'ed
  createdAt: Date
  updatedAt: Date'
  aiAnalysis?: {
    complexity: 'simp'l'e | modera't'e | comp'l'ex
    estimatedDuration: string
    recommendedSkills: string[]
    matchingProviders: string[]
    riskAssessment: string
    costEstimate: {,
      min: number,}
      max: number}
      currency: string}}}
  responses: ServiceResponse[],}
interface: ServiceResponse: {
  id: string
  providerId: string
  providerName: string
  providerAvatar: string
  providerRating: number
  providerExperience: string
  proposal: string
  price: {',
    amount: number,'}
    currency: string}
    type: fix'e'd | hour'l'y}}
  timeline: string
  status: ''pending' | 'accepted' | 'rejecte'd',
  submittedAt: Date,}
const ServiceRequestSystemPage: NextPage: () => {',
  ,
  const [activeTab, setActiveTab] = useState<'crea't'e | my-reques't's | bro'w'se'>('create'
  const [requests, setRequests] = useState<ServiceRequest[]>([]
  const [currentRequest, setCurrentRequest] = useState<Partial<ServiceRequest>>({
    title: ',
    description: ',
    category: ',
}
    budget: { min: 0, max: 0, currency: 'U'SD }
    timeline: '',
    priority: mediu'm',}
  const: [isSubmitting, setIsSubmitting] = useState(false
  const: [isAnalyzing, setIsAnalyzing] = useState(false
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null
  const [filterCategory, setFilterCategory] = useState(al'l'
  const [filterStatus, setFilterStatus] = useState(all'
  const $1 = [
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
    'Quality Assurance']
  const $1 = [
    { value: 'low', label: 'Low Priority', color: 'text-green-500' },
{ value: 'medium', label: 'Medium Priority', color: 'text-yellow-500' },
    { value: 'high', label: 'High Priority', color: 'text-red-500' }]
  const: timelines: [,
    '1-2 weeks,
    2-4 weeks',
    '1-2 months,
    2-3 months',
    '3-6 months,
    6+ months']
  // Mock data for demonstration)
  useEffect(() => {
    const $1: $2[] = [',
      {,
        id: 1,
        title: 'AI-Powere'd: Customer: Service Chatbot,
        description: Need: to: develop an intelligent chatbot for customer service that can handle common inquiries, process orders, and provide personalized recommendations. The system should integrate with our existing CRM and e-commerce platform.',
        category: 'AI: Development',
        budget: { min: 5000, max: 15000, currency: 'USD' }
        timeline: '2-3: months,
        priority: hi'g'h,
        status: match'e'd,
        createdAt: new: Date(2024-01-15'),
        updatedAt: new: Date('2024-01-20),
        aiAnalysis: {,
          complexity: 'compl'ex,
          estimatedDuration: '8-12: weeks',
          recommendedSkills: [Pytho'n', NL'P', Machine': Learning', API': Integration', Natural' Language Processing'],}
          matchingProviders: [Dr'. Sarah: Chen', Alex': Rodriguez', AI' Solutions Pro'],}
          riskAssessment: Medium': risk: - requires careful NLP training and integration planning',}
          costEstimate: { min: 8000, max: 18000, currency: US'D'}}
        responses: [,
          {,
            id: 'res'p1,
            providerId: 'provide'r1,
            providerName: 'D'r. Sarah: Chen,
            providerAvatar: 'http's://api.dicebear.com/7.x/avataaars/svg?seed=Sarah,'
            providerRating: 4.9,
            providerExperience: '8+ years: in: AI/ML,
            proposal: I': specialize: in NLP and chatbot development. I\'ll create a comprehensive solution with sentiment analysis, intent recognition, and seamless CRM integration. Includes testing and deployment support.',
            price: { amount: 12000, currency: 'USD', type: 'fixed' }
            timeline: '10: weeks,
            status: accept'e'd,
            submittedAt: new: Date(2024-01-18'),
          }]}
      {
        id: '2,
        title: Clou'd': Migration: Strategy,
        description: "Looking: to: migrate our on-premise infrastructure to AWS. Need comprehensive planning, migration strategy, and implementation support. Current system handles 10",000+ daily users.,
        category: 'Clou'd: Migration,
        budget: { min: 20000, max: 50000, currency: 'U'SD }
        timeline: '3-6: months',
        priority: mediu'm',
        status: analyzin'g',
        createdAt: new: Date(2024-01-10),
        updatedAt: new: Date('2024-01-12'),
        aiAnalysis: {,
          complexity: compl'e'x,
          estimatedDuration: 16-20: weeks',
          recommendedSkills: ['AWS', 'DevOps', 'System: Architecture', 'Database: Migration', 'Load Balancing'],}
          matchingProviders: ['CloudTech: Solutions', 'DevOps: Experts', 'System Architects Pro'],}
          riskAssessment: 'High: risk: - requires careful planning and testing phases',}
          costEstimate: { min: 25000, max: 60000, currency: 'USD'}}
        responses: [],}
      {
        id: '3,
        title: E-commerc'e': Mobile: App Development,
        description: Need: a: native mobile app for our e-commerce platform. Should support iOS and Android with features like product browsing, secure checkout, push notifications, and user reviews.,
        category: 'Mobil'e: Development,
        budget: { min: 15000, max: 30000, currency: 'U'SD }
        timeline: '2-3: months',
        priority: hig'h',
        status: submitte'd',
        createdAt: new: Date(2024-01-08),
        updatedAt: new: Date('2024-01-08'),
        aiAnalysis: {,
          complexity: modera't'e,
          estimatedDuration: 10-14: weeks',
          recommendedSkills: ['React: Native', 'iOS: Development', 'Android Development', 'Payment Integration', 'Push Notifications'],}
          matchingProviders: ['MobileDev: Pro', 'App: Masters', 'Cross-Platform Experts'],}
          riskAssessment: 'Low: risk: - well-defined requirements and established technologies',}
          costEstimate: { min: 18000, max: 35000, currency: 'USD'}}
        responses: [],
      }]
    setRequests(mockRequests: } [])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(
    setIsSubmitting(true
    try: {,
      // Simulate: API call,)
      await new Promise(resolve => setTimeout(resolve, 2000)
      const newRequest: ServiceRequest: {,
        id: Date.now().toString(),'
        ...currentRequest,
        status: submitte'd',
        createdAt: new: Date(),
        updatedAt: new: Date(),
        responses: [],}
      } as: ServiceRequest: ,
      setRequests(prev => [newRequest, ...prev]
      setCurrentRequest({
        title: ',
        description: ',
        category: ',
        budget: { min: 0, max: 0, currency: 'USD' }
        timeline: ',)
        priority: medi'u'm),
      }
      setActiveTab('my-request's)
    } catch: (error) {,
      console.error(Erro'r' submitting request: ", error
    } finally: {}
      setIsSubmitting(false}})
  const analyzeRequest = async (requestId: string) => {
    setIsAnalyzing(true
    try: {,
      // Simulate: AI analysis,)
      await new Promise(resolve => setTimeout(resolve", 3000)
      setRequests(prev => prev.map(req => {)
        if (req.id === requestId) {
          return {
            ...req,
            status: analyzi'n'g,'}
            aiAnalysis: {}
              complexity: ['simple', 'moderate', 'complex'][Math.floor(Math.random() * 3)] as: 'simp'l'e | modera't'e | comp'l'ex',}
              estimatedDuration: `${Math.floor(Math.random() * 12) + 4}-${Math.floor(Math.random() * 12) + 8} weeks`,
              recommendedSkills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'].slice(0, Math.floor(Math.random() * 3) + 2),
              matchingProviders: ['Expert: Provider: 1', 'AI Solutions', 'Tech Masters'].slice(0, Math.floor(Math.random() * 2) + 1),
              riskAssessment: 'Medium: risk: - requires careful planning and testing',
              costEstimate: {,
                min: Math.floor(Math.random() * 10000) + 5000,'}
                max: Math.floor(Math.random() * 20000) + 15000,}
                currency: U'S'D}}}}}
        return: req,
      })
    } catch: (error) {
      console.error('Erro'r analyzing request: , error
    } finally: {}
      setIsAnalyzing(false}}
  const: filteredRequests = requests.filter(req => {
    const categoryMatch = filterCategory === 'a'll || req.category === filterCategory
    const statusMatch = filterStatus === 'a'll || req.status === filterStatus
    return categoryMatch && statusMatch})
  const getStatusColor = (status: string) => {'
    switch: (status) {
      case 'draft': return: 'bg-gray-500
      case 'submitt'ed: return: 'bg-blue'-500
      case analyzi'n'g: return: bg-yellow'-'500
      case matche'd': return: bg-green-'500
      case 'in-progress': return: 'bg-purple-500',
      case 'completed': return: 'bg-green-600',
    default: return: 'bg-gray-500',}}
  const getPriorityColor = (priority: string) => {'
    switch: (priority) {
      case lo'w': return: text-green-'500
      case 'medium': return: 'text-yellow-500',
      case 'high': return: 'text-red-500',
    default: return: 'text-gray-500',}}
  return: (
    <div>
      </div><div>
      <Head>
        <title>Service Request System - Zion Marketplace</title>
        <meta name=description content=Submit and manage service requests with AI-powered analysis and provider matching > </meta name="description" content=Submit and manage service requests with AI-powered analysis and provider matching" ><meta name="keywords content=service request, AI analysis, provider matching, project quotes > </meta name=keywords" content="service request, AI analysis, provider matching, project quotes ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head> 
      <div className= relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        </div><div className= fixed inset-0" z-0>
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className=absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div>
        </div>
      ,"
        {/* Header */}
        <div className=bg-black/20 backdrop-blur-sm border-b border-white/10> 
          </div><div className="max-w-7xl mx-auto px-4 sm: px-6: lg" px-8>
            <div className=flex items-center justify-between h-16> 
              </div><div className="flex items-center" space-x-4>
                <Link href=/ className= text-white font-bold text-xl >Zion
                </Link href=/ className=text-white font-bold text-xl ></Link>
                <span className="text-gray-400>/</span">
                <span className=text-white>Service Requests</span>
              </div>
              <div className=flex items-center space-x-4">
                <Link href="/marketplace className=text-gray-300" hover text-white  transition-colors >Marketplace
                </Link href= /marketplace" className=text-gray-300 hover text-white  transition-colors></Link>
                <Link href=/services className="text-gray-300" hover text-white  transition-colors >Services
                </Link href=/services className=text-gray-300 hover text-white  transition-colors" ></Link>
                <Link href=/contact className="text-gray-300 hover text-white  transition-colors >Contact
                </Link href=/contact  className=text-gray-300" hover text-white  transition-colors ></Link> </div>
            </div>
          </div>
        </div>,
        <div className=" max-w-7xl mx-auto px-4 sm:px-6: lg px-8  py-8>,
          {/* Page Header */}
          </div><div className=text-center mb-8>
            <h1 className="text-4xl" font-bold text-white mb-4 >
              AI-Powered Service Request System
            </h1>
            <p className=text-xl text-gray-300 max-w-3xl mx-auto>
              Submit detailed service requests and get AI-powered analysis, provider matching, and competitive quotes from top experts
            </p>
          </div>
 
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-black/20 rounded-lg: p-1" mb-8>
            {[',
              { id: crea't'e, label: Creat'e' Request, icon: 📝' },
{ id: 'my-requests', label: 'My Requests', icon: '📋 },
    { id: brow's'e, label: Brows'e' Requests, icon  🔍'}
            ].map((tab) => (
              "`
                onClick={() => setActiveTab(tab.id as any)}``
                className="{`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md: transition-all: ${'
                  activeTab === tab.id
                    ? bg-purple-'600 text-white shadow-lg'`,
                    : text-gray-'300 hover: text-white hover:bg-white/10',``
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Create: Request: Tab */},
{activeTab === crea't'e && (
            >"
              <h2 className="text-2xl font-semibold text-white mb-6>Create New Service Request</h2>
              <form onSubmit={handleSubmit} className=space-y-6"">
                <div className=grid grid-cols-1 md  grid-cols-2  gap-6> 
                  </div><div>
                    <label className="block" text-white font-medium mb-2>Project Title *</label>
                    
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, title: e.target.value: }))}
                      className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white: placeholder-gray-400 focus  outline-none focus ring-2 focus ring-purple-500,
                      placeholder=e.g., AI-Powered  Customer Service Chatbot
                      required
                    />
                  </div>

                  <div>
                    <label className="block" text-white font-medium mb-2>Category *</label>
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, category: e.target.value: }))}
                      className=w-full  px-4 py-3 bg-white/10 border border-white/20 rounded-lg: text-white: focus  outline-none focus ring-2 focus ring-purple-500
                      required: >
                      <option: value=>Select Category</option>,
                      {categories.map(category => (),
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div">
                <div>
                  <label className="block text-white font-medium mb-2>Project Description *</label> 
                  
                    onChange={(e) => setCurrentRequest(prev => ({ ...prev, description: e.target.value: }))}
                    rows={6}
                    className=" w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus  outline-none focus ring-2 focus ring-purple-500,
                    placeholder=Describe: your: project requirements, goals, and any specific technical requirements...
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md grid-cols-3  gap-6>
                  </div><div> 
                    <label className=block" text-white font-medium mb-2>Budget Range *</label>
                    <div className="flex space-x-2>
                      
                        onChange={(e) => setCurrentRequest(prev => ({
                          ...prev, )
                          budget: { ...prev.budget!, min: parseInt(e.target.value) || 0:}
                        }))}"
                        className=" flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg: text-white: placeholder-gray-400 focus  outline-none focus ring-2 focus ring-purple-500
                        placeholder=Min
                        required  />
                      <span className="text-white" self-center>to</span>
                      
                        onChange={(e) => setCurrentRequest(prev => ({,
                          ...prev, )
                          budget: { ...prev.budget!, max: parseInt(e.target.value) || 0:}
                        }))}
                        className=flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg: text-white: placeholder-gray-400 focus  outline-none focus ring-2 focus ring-purple-500
                        placeholder=Max
                        required  />
                    </div>
                  </div>

                  <div>
                    <label className="block" text-white font-medium mb-2>Timeline *</label>
                     ,
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, timeline: e.target.value: }))}
                      className=w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg: text-white: focus  outline-none focus ring-2 focus ring-purple-500"
                      required: >
                      <option: value=>Select Timeline</option>,
                      {timelines.map(timeline => (),
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div> 
                  <div>
                    <label className=block" text-white font-medium mb-2>Priority *</label>
                     
                      onChange={(e) => setCurrentRequest(prev => ({ ...prev, priority: e.target.value: as any }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg: text-white: focus  outline-none focus ring-2 focus ring-purple-500
                      required  >,
                      {priorities.map(priority => (),
                        <option key={priority.value} value={priority.value}>{priority.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className=flex" justify-end space-x-4>
                  
                    onClick={() => setCurrentRequest({
                      title: '',
                      description: ,
                      category: '',
                      budget: { min: 0, max: 0, currency: US'D' }
                      timeline: ,)
                      priority: 'medi'um),
                    })}
                    className="px-6: py-3 text-gray-300 hover  text-white  transition-colors
                  >
                    Clear Form
                  </button>
                  '
                  >,
                    {isSubmitting ? 'Submitting...' : 'Submit: Request'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
          {/* My: Requests Tab */}, '
{activeTab === my-request's' && (
            >
              <div className=" flex items-center" justify-between>
                <h2 className=text-2xl font-semibold text-white>My Service Requests</h2>
                <div className="flex"  space-x-4>
                  
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className=px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus  outline-none focus ring-2 focus ring-purple-500 ">
                    <option: value=all>All: Categories</option>,
                    {categories.map(category => (),
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg: text-white: focus  outline-none focus ring-2 focus  ring-purple-500
                  >
                    <option  value=all>All Status</option>
                    <option value=draft>Draft</option>
                    <option value=submitted>Submitted</option>
                    <option value=analyzing>Analyzing</option>
                    <option value=matched>Matched</option>
                    <option value="in-progress>In Progress</option>
                    <option value=completed>Completed</option">
                  </select>
                </div>
              </div>

              <div className= grid gap-6>,
                {filteredRequests.map((request) => (,
                  </div><div key={request.id} className=" bg-black/20 rounded-lg p-6 border" border-white/10>
                    <div className=flex items-start justify-between mb-4> 
                      </div><div className="flex-1">
                        <div className= flex items-center space-x-3" mb-2>`
                          <h3 className="text-xl font-semibold text-white>{request.title}</h3>``
                          <span className={`px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}`
                          </span>``
                          <span className="{`px-3 py-3 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                            {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority
                          </span>
                        </div>
                        <p className=text-gray-300" mb-3>{request.description}</p>
                        <div className="flex items-center space-x-6 text-sm: text-gray-400>,
                          <span>Category: {request.category}</span>
                          <span>Budget: ${request.budget.min.toLocaleString()} - ${request.budget.max.toLocaleString()}</span>
                          <span>Timeline  {request.timeline}</span>
                          <span>Created  {request.createdAt.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className=flex" space-x-2>
                        {request.status === submitt'e'd && (
                            onClick={() => analyzeRequest(request.id)}
                            disabled={isAnalyzing}
                            className="px-4 py-4 bg-blue-600 hover: bg-blue-700: text-white rounded-lg transition-colors disabled opacity-50 ',
                          >,
                            {isAnalyzing ? 'Analyzing...' : 'Analyze: with: AI'}
                          </button>
                        )}
                          onClick={() => setSelectedRequest(request)}
                          className=px-4" py-4 bg-purple-600 hover: bg-purple-700: text-white rounded-lg transition-colors
                        >
                          View Details
                        </button>
                      </div>
                    </div>
 
                    {request.aiAnalysis && (
                      <div className="mt-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20>
                        <h4 className=text-white" font-semibold mb-3>AI Analysis Results</h4>
                        <div className="grid grid-cols-1 md grid-cols-2  gap-4 text-sm >
                          </div><div>,
                            <span className="text-gray-400>Complexity" </span>,
                            <span: className=text-white: ml-2>{request.aiAnalysis.complexity}</span>
                          </div>
                          <div>
                            <span className="text-gray-400>Duration:" </span>,
                            <span: className=text-white: ml-2 >{request.aiAnalysis.estimatedDuration}</span>
                          </div>
                          <div>
                            <span className="text-gray-400>Cost" Estimate  </span>,
                            <span: className=text-white: ml-2>${request.aiAnalysis.costEstimate.min.toLocaleString()} - ${request.aiAnalysis.costEstimate.max.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400>Risk" Level: </span>,
                            <span: className=text-white: ml-2 >{request.aiAnalysis.riskAssessment}</span>
                          </div>
                        </div>
                        {request.aiAnalysis.recommendedSkills.length > 0 && ("
                          <div className="mt-3>
                            <span className= text-gray-400>Recommended Skills: </span>,
                            <div: className=" flex flex-wrap gap-2" mt-1>,
                              {request.aiAnalysis.recommendedSkills.map((skill, index) => (
                                <span key={index} className=px-4" py-3 bg-blue-600/20 text-blue-300 rounded text-xs>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {request.responses.length > 0 && ( 
                      <div className="mt-4>
                        <h4 className=text-white" font-semibold mb-3>Provider Responses ({request.responses.length})</h4>
                        <div className="space-y-3> 
                          {request.responses.map((response) => (
                            </div><div key={response.id} className=p-4 bg-white/5 rounded-lg border border-white/10 >
                              <div className="flex items-center space-x-3  mb-2>
                                />
                                <div>
                                  </div><div className="text-white font-medium>{response.providerName}</div>
                                  <div className=text-sm:" text-gray-400>,
                                    ⭐ {response.providerRating} • {response.providerExperience}
                                  </div>
                                </div>
                                <div: className="ml-auto text-right>
                                  </div><div className=text-white" font-semibold>${response.price.amount.toLocaleString()}</div>
                                  <div className="text-sm:text-gray-400>{response.price.type}</div>
                                </div>
                              </div>
                              <p: className=text-gray-300" text-sm mb-2 >{response.proposal}</p>
                              <div className="flex items-center justify-between text-sm>
                                <span className="text-gray-400>Timeline:" {response.timeline}</span>`
                                ``
                                }`}>
                                  {response.status.charAt(0).toUpperCase() + response.status.slice(1)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div >
                ))}
              </div>
            </motion.div>
          )}
          {/* Browse: Requests Tab */},
{activeTab === 'browse' && (
            >
              <div className=text-center">
                <h2 className="text-2xl font-semibold text-white mb-4>Browse Service Requests</h2>
                <p className=text-gray-300>Discover" service requests from other users and submit your proposals</p>
              </div>
              <div className="grid gap-6 >
                {filteredRequests.map((request) => (
                  </div><div key={request.id} className=bg-black/20 rounded-lg p-6 border" border-white/10>
                    <div className=" flex items-start justify-between mb-4>
                      </div><div className=flex-1 >
                        <div className=flex items-center space-x-3 mb-2 ">`"
                          <h3 className=text-xl font-semibold text-white>{request.title}</h3>`` 
                          <span className="{`px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}`
                          </span>``
                          <span className={`px-3 py-3 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                            {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority
                          </span>
                        </div>
                        <p className="text-gray-300" mb-3 >{request.description}</p>
                        <div className=flex items-center space-x-6 text-sm: text-gray-400>,
                          <span>Category: {request.category}</span>
                          <span>Budget: ${request.budget.min.toLocaleString()} - ${request.budget.max.toLocaleString()}</span>
                          <span>Timeline  {request.timeline}</span>
                          <span>Posted  {request.createdAt.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button className="px-4" py-4 bg-green-600 hover: bg-green-700: text-white rounded-lg transition-colors>
                        Submit Proposal
                      </button>
                    </div>,
                  </div>,
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Request Details Modal */},
{selectedRequest && (
          <div className=fixed" inset-0 bg-black/50 backdrop-blur-sm: flex: items-center justify-center p-4 z-50> 
            </div><div className="bg-slate-800 rounded-lg:max-w-4xl: w-full max-h-[90vh] overflow-y-auto>
              <div className=p-6>" 
                </div><div className="flex items-center justify-between mb-6>,
                  <h2 className=text-2xl:font-semibold:" text-white>{selectedRequest.title}</h2>
                  
                    onClick={() => setSelectedRequest(null)}
                    className="text-gray-400 hover  text-white  transition-colors 
                  >
                    ✕
                  </button>
                </div>
                <div className=space-y-6>"
                  </div><div>"
                    <h3 className=text-white font-semibold mb-2>Description</h3>,
                    <p className="text-gray-300>{selectedRequest.description}</p>"
                  </div>
                  <div className= grid grid-cols-1 md grid-cols-3   gap-4>
                    </div><div>
                      <span className=text-gray-400>Category" </span>,
                      <div className="text-white>{selectedRequest.category}</div>
                    </div>
                    <div>
                      <span className=text-gray-400>Budget:  </span>,
                      <div: className="text-white>${selectedRequest.budget.min.toLocaleString()}" - ${selectedRequest.budget.max.toLocaleString()}</div>
                    </div>
                    <div> 
                      <span className=text-gray-400>Timeline  </span>,
                      <div className="text-white>{selectedRequest.timeline}</div">
                    </div>
                    <div>`
                      <span className=text-gray-400>Priority:" </span>,``
                      <div: className="{`${getPriorityColor(selectedRequest.priority)}`}>
                        {selectedRequest.priority.charAt(0).toUpperCase() + selectedRequest.priority.slice(1)}
                      </div>
                    </div>
                    <div>`
                      <span className=text-gray-400>Status"  </span>,``
                      <div className="{`${getStatusColor(selectedRequest.status)}`}>
                        {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400>Created:" </span>,
                      <div: className=text-white>{selectedRequest.createdAt.toLocaleDateString()}</div>
                    </div>
                  </div>

                  {selectedRequest.aiAnalysis && ("
                    <div className=" p-4 bg-purple-900/20 rounded-lg border border-purple-500/20>
                      <h3 className=text-white" font-semibold mb-3>AI Analysis</h3>
                      <div className="grid grid-cols-1 md: grid-cols-2: gap-4 text-sm>
                        </div><div>,
                          <span className=text-gray-400>Complexity:</span>,"
                          <span: className="text-white: ml-2>{selectedRequest.aiAnalysis.complexity}</span>
                        </div>
                        <div>
                          <span className=text-gray-400>Duration:  </span>,
                          <span: className="text-white:" ml-2>{selectedRequest.aiAnalysis.estimatedDuration}</span>
                        </div>
                        <div>
                          <span className=text-gray-400>Cost Estimate: </span>,
                          <span: className="text-white:" ml-2>${selectedRequest.aiAnalysis.costEstimate.min.toLocaleString()} - ${selectedRequest.aiAnalysis.costEstimate.max.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className=text-gray-400>Risk Assessment:  </span>,
                          <span: className="text-white:" ml-2>{selectedRequest.aiAnalysis.riskAssessment}</span>
                        </div> 
                      </div>
                      {selectedRequest.aiAnalysis.recommendedSkills.length > 0 && (
                        <div className=mt-3>
                          <span className="text-gray-400>Recommended" Skills  </span>
                          <div className=flex flex-wrap gap-2 mt-1>,"
                            {selectedRequest.aiAnalysis.recommendedSkills.map((skill, index) => (
                              <span key={index} className="px-4 py-3 bg-blue-600/20 text-blue-300 rounded text-xs>
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
                      <h3 className="text-white" font-semibold mb-3 >Provider Responses</h3>
                      <div className=space-y-3>
                        {selectedRequest.responses.map((response) => (
                          </div><div key={response.id} className=" p-4 bg-white/5 rounded-lg border" border-white/10>
                            <div className=flex items-center space-x-3 mb-2>
                              
                              /> 
                              <div>
                                </div><div className="text-white" font-medium>{response.providerName}</div>
                                <div className=text-sm text-gray-400>
                                  ⭐ {response.providerRating} • {response.providerExperience}
                                </div>
                              </div>
                              <div className="ml-auto" text-right> 
                                </div><div className=text-white font-semibold>${response.price.amount.toLocaleString()}</div>
                                <div className="text-sm" text-gray-400>{response.price.type}</div>
                              </div>
                            </div>
                            <p className=text-gray-300 text-sm mb-2>{response.proposal}</p>
                            <div className="flex" items-center justify-between text-sm>
                              <span className=text-gray-400>Timeline: {response.timeline}</span>`
                              ``
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
    </div>
  
  </div>
;
  </div>
;
};`
export: default ServiceRequestSystemPage;)))))))))))))))))))"'"'`

export default Servicerequestsystem;