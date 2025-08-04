import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface WorkspaceProject {
  id: string
  name: string
  description: string
  status: 'planning' | 'active' | 'completed' | 'on-hold'
  progress: number
  team: WorkspaceMember[]
  tasks: WorkspaceTask[]
  documents: WorkspaceDocument[]
  createdAt: Date
  updatedAt: Date
}

interface WorkspaceMember {
  id: string
  name: string
  email: string
  role: 'owner' | 'admin' | 'member' | 'viewer'
  avatar: string
  status: 'online' | 'offline' | 'away'
  lastActive: Date
}

interface WorkspaceTask {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'review' | 'completed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  assignee: string
  dueDate: Date
  createdAt: Date
  updatedAt: Date
}

interface WorkspaceDocument {
  id: string
  name: string
  type: 'document' | 'spreadsheet' | 'presentation' | 'design'
  size: number
  lastModified: Date
  createdBy: string
  collaborators: string[]
}

interface AISuggestion {
  id: string
  type: 'task' | 'document' | 'meeting' | 'deadline'
  title: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  action: string
}

const AIPoweredCollaborationWorkspace: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedProject, setSelectedProject] = useState<WorkspaceProject | null>(null)
  const [isCreatingProject, setIsCreatingProject] = useState(false)
  const [isInvitingMembers, setIsInvitingMembers] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([])
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Mock data
  const mockProjects: WorkspaceProject[] = [
    {
      id: '1',
      name: 'AI-Powered Marketplace Development',
      description: 'Building the next-generation AI-powered marketplace platform with advanced features and real-time collaboration.',
      status: 'active',
      progress: 75,
      team: [
        { id: '1', name: 'Sarah Chen', email: 'sarah@zion.com', role: 'owner', avatar: '/avatars/sarah.jpg', status: 'online', lastActive: new Date() },
        { id: '2', name: 'Alex Rodriguez', email: 'alex@zion.com', role: 'admin', avatar: '/avatars/alex.jpg', status: 'online', lastActive: new Date() },
        { id: '3', name: 'Emma Thompson', email: 'emma@zion.com', role: 'member', avatar: '/avatars/emma.jpg', status: 'away', lastActive: new Date(Date.now() - 300000) }
      ],
      tasks: [
        { id: '1', title: 'Design System Implementation', description: 'Create and implement comprehensive design system', status: 'completed', priority: 'high', assignee: 'Sarah Chen', dueDate: new Date(Date.now() + 86400000), createdAt: new Date(), updatedAt: new Date() },
        { id: '2', title: 'AI Integration Testing', description: 'Test and validate AI-powered features', status: 'in-progress', priority: 'urgent', assignee: 'Alex Rodriguez', dueDate: new Date(Date.now() + 172800000), createdAt: new Date(), updatedAt: new Date() },
        { id: '3', title: 'Performance Optimization', description: 'Optimize application performance and load times', status: 'todo', priority: 'medium', assignee: 'Emma Thompson', dueDate: new Date(Date.now() + 259200000), createdAt: new Date(), updatedAt: new Date() }
      ],
      documents: [
        { id: '1', name: 'Project Requirements', type: 'document', size: 2048576, lastModified: new Date(), createdBy: 'Sarah Chen', collaborators: ['Alex Rodriguez', 'Emma Thompson'] },
        { id: '2', name: 'Technical Architecture', type: 'document', size: 1048576, lastModified: new Date(), createdBy: 'Alex Rodriguez', collaborators: ['Sarah Chen'] },
        { id: '3', name: 'UI/UX Mockups', type: 'design', size: 5242880, lastModified: new Date(), createdBy: 'Emma Thompson', collaborators: ['Sarah Chen', 'Alex Rodriguez'] }
      ],
      createdAt: new Date(Date.now() - 86400000 * 7),
      updatedAt: new Date()
    }
  ]

  const mockSuggestions: AISuggestion[] = [
    {
      id: '1',
      type: 'task',
      title: 'Schedule Code Review',
      description: 'Based on recent commits, schedule a code review session for the AI integration module.',
      priority: 'high',
      action: 'Schedule Review'
    },
    {
      id: '2',
      type: 'meeting',
      title: 'Team Standup Reminder',
      description: 'Daily standup meeting is due in 15 minutes. Prepare updates on current sprint progress.',
      priority: 'medium',
      action: 'Join Meeting'
    },
    {
      id: '3',
      type: 'deadline',
      title: 'Project Milestone Approaching',
      description: 'Phase 1 completion deadline is in 3 days. Review remaining tasks and allocate resources.',
      priority: 'urgent',
      action: 'Review Tasks'
    }
  ]

  useEffect(() => {
    setSelectedProject(mockProjects[0])
    setAiSuggestions(mockSuggestions)
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const handleCreateProject = () => {
    setIsCreatingProject(true)
  }

  const handleInviteMembers = () => {
    setIsInvitingMembers(true)
  }

  const handleAISuggestion = (suggestion: AISuggestion) => {
    // Handle AI suggestion action
    console.log('AI Suggestion action:', suggestion)
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: 'You',
        timestamp: new Date(),
        type: 'user'
      }
      setChatMessages([...chatMessages, message])
      setNewMessage('')
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: 'I understand your request. Let me help you with that. What specific aspect would you like me to assist with?',
          sender: 'AI Assistant',
          timestamp: new Date(),
          type: 'ai'
        }
        setChatMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      case 'offline': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Collaboration Workspace - Zion</title>
        <meta name="description" content="Real-time collaboration workspace with AI assistance for project management, document collaboration, and team coordination." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white font-bold text-xl">
                Zion
              </Link>
              <div className="text-white/60">|</div>
              <h1 className="text-white font-semibold">Collaboration Workspace</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAIAssistantOpen(!isAIAssistantOpen)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                🤖 AI Assistant
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-black/20 backdrop-blur-lg border-r border-white/10">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-white font-semibold mb-4">Projects</h2>
              <button
                onClick={handleCreateProject}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300 mb-4"
              >
                + New Project
              </button>
              
              <div className="space-y-2">
                {mockProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedProject?.id === project.id
                        ? 'bg-purple-600/20 border border-purple-500/50'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-medium">{project.name}</h3>
                      <div className={`w-2 h-2 rounded-full ${
                        project.status === 'active' ? 'bg-green-500' : 
                        project.status === 'completed' ? 'bg-blue-500' : 'bg-gray-500'
                      }`} />
                    </div>
                    <p className="text-white/60 text-sm mt-1">{project.description.substring(0, 50)}...</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-white font-semibold mb-4">Team Members</h2>
              <button
                onClick={handleInviteMembers}
                className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 mb-4"
              >
                + Invite Members
              </button>
              
              <div className="space-y-2">
                {selectedProject?.team.map((member) => (
                  <div key={member.id} className="flex items-center space-x-3 p-2 rounded-lg bg-white/5">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {member.name.charAt(0)}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{member.name}</p>
                      <p className="text-white/60 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="bg-black/10 border-b border-white/10">
            <div className="flex space-x-8 px-6">
              {['overview', 'tasks', 'documents', 'timeline', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-white/60 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 overflow-auto">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Project Overview */}
                <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <h2 className="text-white text-xl font-semibold mb-4">Project Overview</h2>
                  {selectedProject && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h3 className="text-white font-medium mb-2">Progress</h3>
                        <div className="text-2xl font-bold text-purple-400">{selectedProject.progress}%</div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${selectedProject.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-4">
                        <h3 className="text-white font-medium mb-2">Team Members</h3>
                        <div className="text-2xl font-bold text-purple-400">{selectedProject.team.length}</div>
                        <p className="text-white/60 text-sm">Active collaborators</p>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-4">
                        <h3 className="text-white font-medium mb-2">Tasks</h3>
                        <div className="text-2xl font-bold text-purple-400">{selectedProject.tasks.length}</div>
                        <p className="text-white/60 text-sm">Total tasks</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* AI Suggestions */}
                <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <h2 className="text-white text-xl font-semibold mb-4">🤖 AI Suggestions</h2>
                  <div className="space-y-3">
                    {aiSuggestions.map((suggestion) => (
                      <div key={suggestion.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className={`w-2 h-2 rounded-full ${getPriorityColor(suggestion.priority)}`} />
                              <h3 className="text-white font-medium">{suggestion.title}</h3>
                            </div>
                            <p className="text-white/60 text-sm">{suggestion.description}</p>
                          </div>
                          <button
                            onClick={() => handleAISuggestion(suggestion)}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-1 rounded text-sm transition-all duration-300"
                          >
                            {suggestion.action}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <h2 className="text-white text-xl font-semibold mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm">
                        S
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm"><span className="font-medium">Sarah Chen</span> completed task "Design System Implementation"</p>
                        <p className="text-white/60 text-xs">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm">
                        A
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm"><span className="font-medium">Alex Rodriguez</span> started working on "AI Integration Testing"</p>
                        <p className="text-white/60 text-xs">4 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm">
                        E
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm"><span className="font-medium">Emma Thompson</span> uploaded "UI/UX Mockups"</p>
                        <p className="text-white/60 text-xs">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-xl font-semibold">Tasks</h2>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    + New Task
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject?.tasks.map((task) => (
                    <div key={task.id} className="bg-black/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-medium">{task.title}</h3>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </div>
                      </div>
                      <p className="text-white/60 text-sm mb-3">{task.description}</p>
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>Assigned to {task.assignee}</span>
                        <span>Due {task.dueDate.toLocaleDateString()}</span>
                      </div>
                      <div className="mt-3">
                        <div className={`w-full h-2 rounded-full ${
                          task.status === 'completed' ? 'bg-green-500' :
                          task.status === 'in-progress' ? 'bg-yellow-500' :
                          task.status === 'review' ? 'bg-blue-500' : 'bg-gray-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-xl font-semibold">Documents</h2>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    + Upload Document
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject?.documents.map((doc) => (
                    <div key={doc.id} className="bg-black/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                          {doc.type === 'document' ? '📄' : doc.type === 'spreadsheet' ? '📊' : doc.type === 'presentation' ? '📈' : '🎨'}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium">{doc.name}</h3>
                          <p className="text-white/60 text-xs">{(doc.size / 1024 / 1024).toFixed(1)} MB</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>Modified {doc.lastModified.toLocaleDateString()}</span>
                        <span>{doc.collaborators.length} collaborators</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <h2 className="text-white text-xl font-semibold">Project Timeline</h2>
                <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">Project Kickoff</h3>
                        <p className="text-white/60 text-sm">Project started with initial planning and team formation</p>
                      </div>
                      <span className="text-white/60 text-sm">Week 1</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">Design Phase</h3>
                        <p className="text-white/60 text-sm">UI/UX design and system architecture planning</p>
                      </div>
                      <span className="text-white/60 text-sm">Week 2-3</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">Development Phase</h3>
                        <p className="text-white/60 text-sm">Core development and AI integration</p>
                      </div>
                      <span className="text-white/60 text-sm">Week 4-8</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">Testing & Launch</h3>
                        <p className="text-white/60 text-sm">Final testing, bug fixes, and product launch</p>
                      </div>
                      <span className="text-white/60 text-sm">Week 9-10</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-white text-xl font-semibold">Project Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                    <h3 className="text-white font-medium mb-2">Task Completion</h3>
                    <div className="text-2xl font-bold text-green-400">85%</div>
                    <p className="text-white/60 text-sm">Tasks completed on time</p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                    <h3 className="text-white font-medium mb-2">Team Velocity</h3>
                    <div className="text-2xl font-bold text-blue-400">12</div>
                    <p className="text-white/60 text-sm">Story points per sprint</p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                    <h3 className="text-white font-medium mb-2">Code Quality</h3>
                    <div className="text-2xl font-bold text-purple-400">92%</div>
                    <p className="text-white/60 text-sm">Test coverage</p>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                    <h3 className="text-white font-medium mb-2">Sprint Burndown</h3>
                    <div className="text-2xl font-bold text-orange-400">75%</div>
                    <p className="text-white/60 text-sm">Sprint progress</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Assistant Chat */}
        {isAIAssistantOpen && (
          <div className="w-96 bg-black/20 backdrop-blur-lg border-l border-white/10 flex flex-col">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-white font-semibold">🤖 AI Assistant</h3>
              <p className="text-white/60 text-sm">Ask me anything about your project</p>
            </div>
            
            <div className="flex-1 p-4 overflow-auto">
              <div className="space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/10 text-white'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            </div>
            
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask the AI assistant..."
                  className="flex-1 bg-white/10 text-white placeholder-white/60 px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {isCreatingProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/90 backdrop-blur-lg rounded-lg p-6 w-full max-w-md border border-white/10">
            <h2 className="text-white text-xl font-semibold mb-4">Create New Project</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Project name"
                className="w-full bg-white/10 text-white placeholder-white/60 px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500"
              />
              <textarea
                placeholder="Project description"
                rows={3}
                className="w-full bg-white/10 text-white placeholder-white/60 px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500"
              />
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsCreatingProject(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isInvitingMembers && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/90 backdrop-blur-lg rounded-lg p-6 w-full max-w-md border border-white/10">
            <h2 className="text-white text-xl font-semibold mb-4">Invite Team Members</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/10 text-white placeholder-white/60 px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500"
              />
              <select className="w-full bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500">
                <option value="member">Member</option>
                <option value="admin">Admin</option>
                <option value="viewer">Viewer</option>
              </select>
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsInvitingMembers(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AIPoweredCollaborationWorkspace 