import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useMockArray, useMockObject } from '../src/utils/mockDataHelpers';

interface Team {
  id: string;
  name: string;
  description: string;
  type: 'project' | 'department' | 'cross-functional' | 'virtual' | 'partnership' | 'alliance';
  status: 'active' | 'inactive' | 'forming' | 'storming' | 'norming' | 'performing';
  members: TeamMember[];
  projects: TeamProject[];
  performance: TeamPerformance;
  aiAnalysis: AITeamAnalysis;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  availability: number;
  performance: number;
  collaboration: number;
  lastActive: Date;
}

interface TeamProject {
  id: string;
  name: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  progress: number;
  deadline: Date;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface TeamPerformance {
  overallScore: number;
  collaboration: number;
  productivity: number;
  communication: number;
  innovation: number;
  lastUpdated: Date;
}

interface AITeamAnalysis {
  id: string;
  efficiency: number;
  synergy: number;
  recommendations: string[];
  predictedOutcomes: string[];
}

interface Workspace {
  id: string;
  name: string;
  description: string;
  type: 'virtual' | 'hybrid' | 'physical' | 'project-based';
  teams: string[];
  tools: WorkspaceTool[];
  performance: WorkspacePerformance;
  aiOptimization: AIWorkspaceOptimization;
}

interface WorkspaceTool {
  id: string;
  name: string;
  category: 'communication' | 'project-management' | 'file-sharing' | 'collaboration' | 'analytics';
  status: 'active' | 'inactive' | 'maintenance';
  usage: number;
  effectiveness: number;
}

interface WorkspacePerformance {
  totalTeams: number;
  activeProjects: number;
  collaborationScore: number;
  productivityScore: number;
  lastOptimized: Date;
}

interface AIWorkspaceOptimization {
  id: string;
  optimizationScore: number;
  efficiencyGains: number;
  recommendations: string[];
}

interface Partnership {
  id: string;
  name: string;
  type: 'strategic' | 'operational' | 'research' | 'marketing' | 'technical';
  status: 'active' | 'pending' | 'completed' | 'terminated';
  partners: PartnershipMember[];
  objectives: PartnershipObjective[];
  performance: PartnershipPerformance;
  aiAnalysis: AIPartnershipAnalysis;
}

interface PartnershipMember {
  id: string;
  name: string;
  organization: string;
  role: string;
  contribution: number;
  lastEngagement: Date;
}

interface PartnershipObjective {
  id: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'delayed';
  progress: number;
  deadline: Date;
}

interface PartnershipPerformance {
  overallScore: number;
  collaboration: number;
  valueCreation: number;
  riskManagement: number;
  lastEvaluated: Date;
}

interface AIPartnershipAnalysis {
  id: string;
  successProbability: number;
  valuePotential: number;
  recommendations: string[];
  riskFactors: string[];
}

interface CollaborationTeamAnalytics {
  totalTeams: number;
  activeWorkspaces: number;
  partnershipsCount: number;
  averagePerformance: number;
  collaborationScore: number;
  aiOptimizationScore: number;
  aiInsights: CollaborationTeamInsight[];
}

interface CollaborationTeamInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredCollaborationTeamPage: NextPage = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [partnerships, setPartnerships] = useState<Partnership[]>([])
  const [analytics, setAnalytics] = useState<CollaborationTeamAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'teams' | 'workspaces' | 'partnerships' | 'analytics'>('teams')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data using useMemo to prevent re-renders
  const mockTeams = useMockArray<Team>(() => [
    {
      id: '1',
      name: 'AI Innovation Team',
      description: 'Cross-functional team focused on AI product development',
      type: 'cross-functional',
      status: 'active',
      members: [
        {
          id: '1',
          name: 'John Doe',
          role: 'Team Lead',
          skills: ['React', 'TypeScript', 'Node.js'],
          availability: 100,
          performance: 95,
          collaboration: 92,
          lastActive: new Date()
        }
      ],
      projects: [
        {
          id: '1',
          name: 'AI Platform Development',
          status: 'active',
          progress: 75,
          deadline: new Date('2024-12-31'),
          priority: 'high'
        }
      ],
      performance: {
        overallScore: 92,
        collaboration: 90,
        productivity: 88,
        communication: 91,
        innovation: 89,
        lastUpdated: new Date()
      },
      aiAnalysis: {
        id: '1',
        efficiency: 91,
        synergy: 89,
        recommendations: ['Improve communication', 'Optimize workflows'],
        predictedOutcomes: ['Improved team collaboration', 'Higher productivity']
      }
    }
  ])

  const mockWorkspaces = useMockArray<Workspace>(() => [
    {
      id: '1',
      name: 'AI Development Hub',
      description: 'Centralized workspace for AI development projects',
      type: 'virtual',
      teams: ['1', '2', '3'],
      tools: [],
      performance: {
        totalTeams: 3,
        activeProjects: 15,
        collaborationScore: 92,
        productivityScore: 90,
        lastOptimized: new Date()
      },
      aiOptimization: {
        id: '1',
        optimizationScore: 88,
        efficiencyGains: 15,
        recommendations: ['Enhance tools', 'Improve processes']
      },
    }
  ])

  const mockPartnerships = useMockArray<Partnership>(() => [
    {
      id: '1',
      name: 'AI Research Partnership',
      type: 'research',
      status: 'active',
      partners: [
        {
          id: '1',
          name: 'Research Partner',
          organization: 'Tech Corp',
          role: 'Research Lead',
          contribution: 80,
          lastEngagement: new Date()
        }
      ],
      objectives: [
        {
          id: '1',
          description: 'Develop advanced AI algorithms',
          status: 'in-progress',
          progress: 75,
          deadline: new Date('2024-12-31')
        }
      ],
      performance: {
        overallScore: 96,
        collaboration: 94,
        valueCreation: 92,
        riskManagement: 88,
        lastEvaluated: new Date()
      },
      aiAnalysis: {
        id: '1',
        successProbability: 85,
        valuePotential: 92,
        recommendations: ['Strengthen communication', 'Expand collaboration'],
        riskFactors: ['Resource constraints', 'Timeline pressure']
      }
    }
  ])

  const mockAnalytics = useMockObject<CollaborationTeamAnalytics>(() => ({
    totalTeams: 18,
    activeWorkspaces: 12,
    partnershipsCount: 8,
    averagePerformance: 92.5,
    collaborationScore: 92.5,
    aiOptimizationScore: 94.2,
    aiInsights: [
      {
        id: '1',
        title: 'High Team Collaboration',
        description: 'AI-powered collaboration tools show 92.5% average collaboration score',
        impact: 'positive',
        confidence: 0.95,
        recommendations: ['Continue AI optimization', 'Expand team tools']
      }
    ]
  }))

  useEffect(() => {
    setTimeout(() => {
      setTeams(mockTeams)
      setWorkspaces(mockWorkspaces)
      setPartnerships(mockPartnerships)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockTeams, mockWorkspaces, mockPartnerships, mockAnalytics])

  const filteredTeams = useMemo(() => {
    let filtered = teams
    if (selectedType !== 'all') {
      filtered = filtered.filter(team => team.type === selectedType)
    }
    return filtered
  }, [teams, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'performing': return 'bg-green-500/20 text-green-300'
      case 'forming': return 'bg-blue-500/20 text-blue-300'
      case 'storming': return 'bg-yellow-500/20 text-yellow-300'
      case 'norming': return 'bg-orange-500/20 text-orange-300'
      case 'inactive': return 'bg-gray-500/20 text-gray-300'
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
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Collaboration & Team Management System | Zion Tech Group</title>
        <meta name="description" content="Team coordination, workspace management, partnership building, and alliance management powered by AI." />
        <meta name="keywords" content="collaboration, team management, workspace, partnership, alliance, AI collaboration" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Collaboration & Team Management System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Team coordination, workspace management, partnership building, 
              and alliance management powered by AI for seamless collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">👥 Team Coordination</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🏢 Workspace Management</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤝 Partnership Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('teams')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'teams'
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Teams ({teams.length})
              </button>
              <button
                onClick={() => setActiveTab('workspaces')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'workspaces'
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Workspaces ({workspaces.length})
              </button>
              <button
                onClick={() => setActiveTab('partnerships')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'partnerships'
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Partnerships ({partnerships.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Teams Tab */}
            {activeTab === 'teams' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="project" className="bg-slate-800">Project</option>
                        <option value="department" className="bg-slate-800">Department</option>
                        <option value="cross-functional" className="bg-slate-800">Cross-functional</option>
                        <option value="virtual" className="bg-slate-800">Virtual</option>
                        <option value="partnership" className="bg-slate-800">Partnership</option>
                        <option value="alliance" className="bg-slate-800">Alliance</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Team
                    </button>
                  </div>
                </div>

                {/* Teams Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredTeams.map((team) => (
                    <div key={team.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{team.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{team.type} • {team.status}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(team.status)}`}>
                          {team.status}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{team.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Performance Score</div>
                          <div className="text-2xl font-bold text-white">{team.performance.overallScore}%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Collaboration</div>
                          <div className="text-2xl font-bold text-white">{team.performance.collaboration}%</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Efficiency</div>
                              <div className="text-white font-semibold">{team.aiAnalysis.efficiency}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Synergy</div>
                              <div className="text-white font-semibold">{team.aiAnalysis.synergy}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {team.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Manage Team
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workspaces Tab */}
            {activeTab === 'workspaces' && (
              <div className="space-y-8">
                {workspaces.map((workspace) => (
                  <div key={workspace.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{workspace.name}</h3>
                        <p className="text-gray-300 text-sm capitalize">{workspace.type} Workspace</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor('active')}`}>
                        Active
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Teams</div>
                        <div className="text-2xl font-bold text-white">{workspace.performance.totalTeams}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Active Projects</div>
                        <div className="text-2xl font-bold text-white">{workspace.performance.activeProjects}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Collaboration Score</div>
                        <div className="text-2xl font-bold text-white">{workspace.performance.collaborationScore}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Productivity</div>
                        <div className="text-2xl font-bold text-white">{workspace.performance.productivityScore}%</div>
                      </div>
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Optimization Score</div>
                            <div className="text-white font-semibold">{workspace.aiOptimization.optimizationScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Efficiency Gains</div>
                            <div className="text-white font-semibold">{workspace.aiOptimization.efficiencyGains}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Tools</div>
                            <div className="text-white font-semibold">{workspace.tools.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {workspace.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Partnerships Tab */}
            {activeTab === 'partnerships' && (
              <div className="space-y-8">
                {partnerships.map((partnership) => (
                  <div key={partnership.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{partnership.name}</h3>
                        <p className="text-gray-300 text-sm capitalize">{partnership.type} Partnership</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(partnership.status)}`}>
                        {partnership.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Overall Score</div>
                        <div className="text-2xl font-bold text-white">{partnership.performance.overallScore}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Collaboration</div>
                        <div className="text-2xl font-bold text-white">{partnership.performance.collaboration}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Value Creation</div>
                        <div className="text-2xl font-bold text-white">{partnership.performance.valueCreation}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Risk Management</div>
                        <div className="text-2xl font-bold text-white">{partnership.performance.riskManagement}%</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Success Probability</div>
                            <div className="text-white font-semibold">{partnership.aiAnalysis.successProbability}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Value Potential</div>
                            <div className="text-white font-semibold">{partnership.aiAnalysis.valuePotential}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Partners</div>
                            <div className="text-white font-semibold">{partnership.partners.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {partnership.aiAnalysis.recommendations.join(', ')}
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
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalTeams.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Teams</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeWorkspaces.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Workspaces</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.partnershipsCount.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Partnerships</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Collaboration?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your collaboration journey with our AI-powered team management system 
              and build stronger partnerships and alliances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105">
                Start Collaboration
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

export default AIPoweredCollaborationTeamPage 