import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useMockArray, useMockObject } from '../src/utils/mockDataHelpers';

interface Broadcast {
  id: string;
  title: string;
  message: string;
  type: 'announcement' | 'promotion' | 'update' | 'alert' | 'marketing' | 'news';
  status: 'draft' | 'scheduled' | 'active' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  targetAudience: string[];
  deliveryMethod: string[];
  sentCount: number;
  openedCount: number;
  clickedCount: number;
  aiAnalysis: AIBroadcastAnalysis;
}

interface AIBroadcastAnalysis {
  id: string;
  engagementScore: number;
  openRate: number;
  clickRate: number;
  recommendations: string[];
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  category: 'platform' | 'feature' | 'maintenance' | 'security' | 'general';
  status: 'draft' | 'published' | 'archived' | 'scheduled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  targetUsers: string[];
  views: number;
  acknowledgments: number;
  aiOptimization: AIAnnouncementOptimization;
}

interface AIAnnouncementOptimization {
  id: string;
  visibilityScore: number;
  engagementScore: number;
  recommendations: string[];
}

interface CommunicationCampaign {
  id: string;
  name: string;
  description: string;
  type: 'email' | 'push' | 'sms' | 'in-app' | 'multi-channel';
  status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled';
  targetSegments: string[];
  analytics: CampaignAnalytics;
  aiOptimization: AICampaignOptimization;
}

interface CampaignAnalytics {
  totalSent: number;
  totalOpened: number;
  totalClicked: number;
  openRate: number;
  clickRate: number;
  conversionRate: number;
  lastUpdated: Date;
}

interface AICampaignOptimization {
  id: string;
  optimizationScore: number;
  engagementPrediction: number;
  recommendations: string[];
}

interface MarketingAutomation {
  id: string;
  name: string;
  description: string;
  trigger: 'user-action' | 'time-based' | 'event-based' | 'segment-based';
  status: 'active' | 'inactive' | 'draft' | 'testing';
  performance: AutomationPerformance;
  aiAnalysis: AIMarketingAnalysis;
}

interface AutomationPerformance {
  totalExecutions: number;
  successRate: number;
  conversionRate: number;
  averageResponseTime: number;
  lastUpdated: Date;
}

interface AIMarketingAnalysis {
  id: string;
  efficiencyScore: number;
  conversionPrediction: number;
  recommendations: string[];
}

interface PromotionalMessage {
  id: string;
  title: string;
  content: string;
  type: 'discount' | 'offer' | 'event' | 'product' | 'service';
  status: 'draft' | 'active' | 'expired' | 'cancelled';
  targetAudience: string[];
  deliveryChannels: string[];
  impressions: number;
  clicks: number;
  conversions: number;
  aiAnalysis: AIPromotionalAnalysis;
}

interface AIPromotionalAnalysis {
  id: string;
  effectivenessScore: number;
  conversionRate: number;
  recommendations: string[];
}

interface BroadcastCommunicationAnalytics {
  totalBroadcasts: number;
  activeAnnouncements: number;
  campaignsCount: number;
  automationsCount: number;
  promotionalMessages: number;
  averageEngagement: number;
  aiOptimizationScore: number;
  aiInsights: BroadcastCommunicationInsight[];
}

interface BroadcastCommunicationInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredBroadcastCommunicationPage: NextPage = () => {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [campaigns, setCampaigns] = useState<CommunicationCampaign[]>([])
  const [automations, setAutomations] = useState<MarketingAutomation[]>([])
  const [promotionalMessages, setPromotionalMessages] = useState<PromotionalMessage[]>([])
  const [analytics, setAnalytics] = useState<BroadcastCommunicationAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'broadcasts' | 'announcements' | 'campaigns' | 'automations' | 'promotions' | 'analytics'>('broadcasts')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data using useMemo to prevent re-renders
  const mockBroadcasts = useMockArray<Broadcast>(() => [
    {
      id: '1',
      title: 'System Maintenance Alert',
      message: 'Scheduled system maintenance notification',
      type: 'alert',
      status: 'active',
      priority: 'high',
      targetAudience: ['all-users'],
      deliveryMethod: ['email'],
      sentCount: 15420,
      openedCount: 12336,
      clickedCount: 3084,
      aiAnalysis: {
        id: '1',
        engagementScore: 85,
        openRate: 80,
        clickRate: 25,
        recommendations: ['Optimize timing', 'Improve targeting']
      }
    }
  ])

  const mockAnnouncements = useMockArray<Announcement>(() => [
    {
      id: '1',
      title: 'New Feature Release',
      content: 'Announcement of new AI-powered features',
      category: 'feature',
      status: 'published',
      priority: 'medium',
      targetUsers: ['all-users'],
      views: 2340,
      acknowledgments: 1890,
      aiOptimization: {
        id: '1',
        visibilityScore: 92,
        engagementScore: 88,
        recommendations: ['Enhance visuals', 'Add call-to-action']
      }
    }
  ])

  const mockCampaigns = useMockArray<CommunicationCampaign>(() => [
    {
      id: '1',
      name: 'AI Innovation Campaign',
      description: 'Marketing campaign for AI-powered solutions',
      type: 'multi-channel',
      status: 'active',
      targetSegments: ['new-users'],
      analytics: {
        totalSent: 1250,
        totalOpened: 1000,
        totalClicked: 250,
        openRate: 80,
        clickRate: 20,
        conversionRate: 15,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiOptimization: {
        id: '1',
        optimizationScore: 87,
        engagementPrediction: 82,
        recommendations: ['Optimize messaging', 'Improve targeting']
      }
    }
  ])

  const mockAutomations = useMockArray<MarketingAutomation>(() => [
    {
      id: '1',
      name: 'Welcome Series Automation',
      description: 'Automated welcome email series for new users',
      trigger: 'user-action',
      status: 'active',
      performance: {
        totalExecutions: 2340,
        successRate: 85,
        conversionRate: 12,
        averageResponseTime: 2.5,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '1',
        efficiencyScore: 89,
        conversionPrediction: 15,
        recommendations: ['Improve personalization', 'Optimize timing']
      }
    }
  ])

  const mockPromotionalMessages = useMockArray<PromotionalMessage>(() => [
    {
      id: '1',
      title: 'Special Offer Alert',
      content: 'Limited time promotional offer',
      type: 'offer',
      status: 'active',
      targetAudience: ['free-users', 'inactive-users'],
      deliveryChannels: ['email', 'push', 'in-app'],
      impressions: 15600,
      clicks: 3120,
      conversions: 468,
      aiAnalysis: {
        id: '1',
        effectivenessScore: 82,
        conversionRate: 15,
        recommendations: ['Increase urgency', 'Improve offer value']
      }
    }
  ])

  const mockAnalytics = useMockObject<BroadcastCommunicationAnalytics>(() => ({
    totalBroadcasts: 156,
    activeAnnouncements: 23,
    campaignsCount: 8,
    automationsCount: 15,
    promotionalMessages: 45,
    averageEngagement: 87.5,
    aiOptimizationScore: 92.3,
    aiInsights: [
      {
        id: '1',
        title: 'High Engagement Rates',
        description: 'AI-optimized broadcasts show 87.5% average engagement rate',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Continue AI optimization', 'Expand automation']
      }
    ]
  }))

  useEffect(() => {
    setTimeout(() => {
      setBroadcasts(mockBroadcasts)
      setAnnouncements(mockAnnouncements)
      setCampaigns(mockCampaigns)
      setAutomations(mockAutomations)
      setPromotionalMessages(mockPromotionalMessages)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [])

  const filteredBroadcasts = useMemo(() => {
    let filtered = broadcasts
    if (selectedType !== 'all') {
      filtered = filtered.filter(broadcast => broadcast.type === selectedType)
    }
    return filtered
  }, [broadcasts, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'published': return 'bg-green-500/20 text-green-300'
      case 'draft': return 'bg-yellow-500/20 text-yellow-300'
      case 'scheduled': return 'bg-blue-500/20 text-blue-300'
      case 'completed': return 'bg-gray-500/20 text-gray-300'
      case 'cancelled': return 'bg-red-500/20 text-red-300'
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
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Broadcast & Communication System | Zion Tech Group</title>
        <meta name="description" content="Broadcast messaging, announcement management, communication campaigns, marketing automation, promotional messaging, and advertising coordination powered by AI." />
        <meta name="keywords" content="broadcast, communication, announcement, campaign, marketing, promotion, AI broadcast" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-44">
          <div className="text-center">
            <h1 className="text-5xl md text-6xl font-bold text-white mb-6">
              AI-Powered Broadcast & Communication System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Broadcast messaging, announcement management, communication campaigns, 
              marketing automation, promotional messaging, and advertising coordination powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📢 Broadcast Messaging</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📢 Announcements</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📧 Communication Campaigns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32">
        {isLoading ? (
          <div className="flex justify-center items-center py-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('broadcasts')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'broadcasts'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Broadcasts ({broadcasts.length})
              </button>
              <button
                onClick={() => setActiveTab('announcements')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'announcements'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Announcements ({announcements.length})
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'campaigns'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Campaigns ({campaigns.length})
              </button>
              <button
                onClick={() => setActiveTab('automations')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'automations'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Automations ({automations.length})
              </button>
              <button
                onClick={() => setActiveTab('promotions')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'promotions'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Promotions ({promotionalMessages.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Broadcasts Tab */}
            {activeTab === 'broadcasts' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus:outline-none focus:ring-2 focus ring-purple-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="announcement" className="bg-slate-800">Announcement</option>
                        <option value="promotion" className="bg-slate-800">Promotion</option>
                        <option value="update" className="bg-slate-800">Update</option>
                        <option value="alert" className="bg-slate-800">Alert</option>
                        <option value="marketing" className="bg-slate-800">Marketing</option>
                        <option value="news" className="bg-slate-800">News</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300">
                      Create Broadcast
                    </button>
                  </div>
                </div>

                {/* Broadcasts Grid */}
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {filteredBroadcasts.map((broadcast) => (
                    <div key={broadcast.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{broadcast.title}</h3>
                          <p className="text-gray-300 text-sm capitalize">{broadcast.type} • {broadcast.priority} priority</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(broadcast.status)}`}>
                            {broadcast.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(broadcast.priority)}`}>
                              {broadcast.priority}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{broadcast.message}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Sent</div>
                          <div className="text-2xl font-bold text-white">{broadcast.sentCount.toLocaleString()}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Opened</div>
                          <div className="text-2xl font-bold text-white">{broadcast.openedCount.toLocaleString()}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Engagement Score</div>
                              <div className="text-white font-semibold">{broadcast.aiAnalysis.engagementScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Open Rate</div>
                              <div className="text-white font-semibold">{broadcast.aiAnalysis.openRate}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {broadcast.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          Edit Broadcast
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Announcements Tab */}
            {activeTab === 'announcements' && (
              <div className="space-y-8">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{announcement.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{announcement.category} Announcement</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(announcement.status)}`}>
                          {announcement.status}
                        </span>
                        <div className="mt-2">
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                            {announcement.priority}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 text-sm">{announcement.content}</p>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Views</div>
                        <div className="text-2xl font-bold text-white">{announcement.views.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Acknowledgments</div>
                        <div className="text-2xl font-bold text-white">{announcement.acknowledgments.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Visibility Score</div>
                        <div className="text-2xl font-bold text-white">{announcement.aiOptimization.visibilityScore}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Engagement Score</div>
                        <div className="text-2xl font-bold text-white">{announcement.aiOptimization.engagementScore}%</div>
                      </div>
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Visibility Score</div>
                            <div className="text-white font-semibold">{announcement.aiOptimization.visibilityScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Engagement Score</div>
                            <div className="text-white font-semibold">{announcement.aiOptimization.engagementScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Recommendations</div>
                            <div className="text-white font-semibold">{announcement.aiOptimization.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {announcement.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <div className="space-y-8">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{campaign.name}</h3>
                        <p className="text-gray-300 text-sm capitalize">{campaign.type} Campaign</p>
                      </div>
                      <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Sent</div>
                        <div className="text-2xl font-bold text-white">{campaign.analytics.totalSent.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Open Rate</div>
                        <div className="text-2xl font-bold text-white">{campaign.analytics.openRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Click Rate</div>
                        <div className="text-2xl font-bold text-white">{campaign.analytics.clickRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Conversion Rate</div>
                        <div className="text-2xl font-bold text-white">{campaign.analytics.conversionRate}%</div>
                      </div>
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Optimization Score</div>
                            <div className="text-white font-semibold">{campaign.aiOptimization.optimizationScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Engagement Prediction</div>
                            <div className="text-white font-semibold">{campaign.aiOptimization.engagementPrediction}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Recommendations</div>
                            <div className="text-white font-semibold">{campaign.aiOptimization.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {campaign.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Automations Tab */}
            {activeTab === 'automations' && (
              <div className="space-y-8">
                {automations.map((automation) => (
                  <div key={automation.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{automation.name}</h3>
                        <p className="text-gray-300 text-sm capitalize">{automation.trigger} Trigger</p>
                      </div>
                      <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(automation.status)}`}>
                        {automation.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Executions</div>
                        <div className="text-2xl font-bold text-white">{automation.performance.totalExecutions.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                        <div className="text-2xl font-bold text-white">{automation.performance.successRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Conversion Rate</div>
                        <div className="text-2xl font-bold text-white">{automation.performance.conversionRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Avg Response Time</div>
                        <div className="text-2xl font-bold text-white">{automation.performance.averageResponseTime}s</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Efficiency Score</div>
                            <div className="text-white font-semibold">{automation.aiAnalysis.efficiencyScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Conversion Prediction</div>
                            <div className="text-white font-semibold">{automation.aiAnalysis.conversionPrediction}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Recommendations</div>
                            <div className="text-white font-semibold">{automation.aiAnalysis.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {automation.aiAnalysis.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Promotions Tab */}
            {activeTab === 'promotions' && (
              <div className="space-y-8">
                {promotionalMessages.map((promotion) => (
                  <div key={promotion.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{promotion.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{promotion.type} Promotion</p>
                      </div>
                      <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(promotion.status)}`}>
                        {promotion.status}
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 text-sm">{promotion.content}</p>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Impressions</div>
                        <div className="text-2xl font-bold text-white">{promotion.impressions.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Clicks</div>
                        <div className="text-2xl font-bold text-white">{promotion.clicks.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Conversions</div>
                        <div className="text-2xl font-bold text-white">{promotion.conversions.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Effectiveness</div>
                        <div className="text-2xl font-bold text-white">{promotion.aiAnalysis.effectivenessScore}%</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Effectiveness Score</div>
                            <div className="text-white font-semibold">{promotion.aiAnalysis.effectivenessScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Conversion Rate</div>
                            <div className="text-white font-semibold">{promotion.aiAnalysis.conversionRate}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Recommendations</div>
                            <div className="text-white font-semibold">{promotion.aiAnalysis.recommendations.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {promotion.aiAnalysis.recommendations.join(', ')}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalBroadcasts.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Broadcasts</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeAnnouncements.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Announcements</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.campaignsCount.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Campaigns</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold">{insight.title}</h4>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
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
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-36">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Broadcast?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your communication journey with our AI-powered broadcast system 
              and reach your audience with intelligent messaging.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105">
                Start Broadcasting
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredBroadcastCommunicationPage 