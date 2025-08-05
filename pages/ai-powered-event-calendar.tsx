import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  description: string;
  type: 'meeting' | 'webinar' | 'workshop' | 'conference' | 'deadline' | 'milestone' | 'custom';
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  location: string;
  attendees: EventAttendee[];
  agenda: EventAgenda[];
  performance: EventPerformance;
  aiAnalysis: AIEventAnalysis;
}

interface EventAttendee {
  id: string;
  name: string;
  role: string;
  status: 'confirmed' | 'pending' | 'declined' | 'maybe';
  responseTime: Date;
}

interface EventAgenda {
  id: string;
  title: string;
  duration: number;
  speaker?: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
}

interface EventPerformance {
  attendanceRate: number;
  engagementScore: number;
  satisfactionRate: number;
  completionRate: number;
  lastUpdated: Date;
}

interface AIEventAnalysis {
  id: string;
  successProbability: number;
  engagementPrediction: number;
  recommendations: string[];
  riskFactors: string[];
}

interface Calendar {
  id: string;
  name: string;
  type: 'personal' | 'team' | 'project' | 'organization';
  events: string[];
  settings: CalendarSettings;
  performance: CalendarPerformance;
  aiOptimization: AICalendarOptimization;
}

interface CalendarSettings {
  timezone: string;
  workingHours: WorkingHours;
  availability: AvailabilityRule[];
  notifications: NotificationSettings;
}

interface WorkingHours {
  start: string;
  end: string;
  days: string[];
}

interface AvailabilityRule {
  id: string;
  type: 'available' | 'busy' | 'tentative' | 'out-of-office';
  startTime: string;
  endTime: string;
  days: string[];
}

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  reminderTime: number;
}

interface CalendarPerformance {
  totalEvents: number;
  completedEvents: number;
  averageAttendance: number;
  efficiencyScore: number;
  lastOptimized: Date;
}

interface AICalendarOptimization {
  id: string;
  optimizationScore: number;
  timeEfficiency: number;
  recommendations: string[];
}

interface Timeline {
  id: string;
  name: string;
  description: string;
  milestones: TimelineMilestone[];
  deadlines: TimelineDeadline[];
  performance: TimelinePerformance;
  aiAnalysis: AITimelineAnalysis;
}

interface TimelineMilestone {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  status: 'upcoming' | 'in-progress' | 'completed' | 'delayed';
  progress: number;
  dependencies: string[];
}

interface TimelineDeadline {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  assignedTo: string;
}

interface TimelinePerformance {
  totalMilestones: number;
  completedMilestones: number;
  onTimeDeadlines: number;
  totalDeadlines: number;
  efficiencyScore: number;
}

interface AITimelineAnalysis {
  id: string;
  completionProbability: number;
  riskAssessment: number;
  recommendations: string[];
  predictedDelays: string[];
}

interface EventCalendarAnalytics {
  totalEvents: number;
  activeCalendars: number;
  timelinesCount: number;
  averageAttendance: number;
  efficiencyScore: number;
  aiOptimizationScore: number;
  aiInsights: EventCalendarInsight[];
}

interface EventCalendarInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredEventCalendarPage: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [calendars, setCalendars] = useState<Calendar[]>([])
  const [timelines, setTimelines] = useState<Timeline[]>([])
  const [analytics, setAnalytics] = useState<EventCalendarAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'events' | 'calendars' | 'timelines' | 'analytics'>('events')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockEvents: Event[] = [
    {
      id: '1',
      title: 'AI-Powered Marketplace Launch',
      description: 'Launch event for the new AI-powered marketplace platform',
      type: 'conference',
      status: 'upcoming',
      priority: 'critical',
      startDate: new Date('2024-02-15T10:00:00'),
      endDate: new Date('2024-02-15T18:00:00'),
      location: 'Virtual Conference Center',
      attendees: [
        {
          id: '1',
          name: 'Sarah Johnson',
          role: 'Product Manager',
          status: 'confirmed',
          responseTime: new Date('2024-01-20T09:00:00')
        },
        {
          id: '2',
          name: 'Mike Chen',
          role: 'Lead Developer',
          status: 'confirmed',
          responseTime: new Date('2024-01-20T10:30:00')
        }
      ],
      agenda: [
        {
          id: '1',
          title: 'Platform Overview',
          duration: 30,
          speaker: 'Sarah Johnson',
          description: 'Introduction to the AI-powered marketplace features',
          status: 'pending'
        },
        {
          id: '2',
          title: 'Technical Deep Dive',
          duration: 45,
          speaker: 'Mike Chen',
          description: 'Technical architecture and AI implementation',
          status: 'pending'
        }
      ],
      performance: {
        attendanceRate: 85,
        engagementScore: 92,
        satisfactionRate: 88,
        completionRate: 95,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '1',
        successProbability: 94,
        engagementPrediction: 89,
        recommendations: ['Enhance interactive elements', 'Prepare backup speakers'],
        riskFactors: ['Technical issues', 'Low attendance']
      }
    },
    {
      id: '2',
      title: 'Q1 Strategy Review Meeting',
      description: 'Quarterly strategy review and planning session',
      type: 'meeting',
      status: 'upcoming',
      priority: 'high',
      startDate: new Date('2024-01-25T14:00:00'),
      endDate: new Date('2024-01-25T16:00:00'),
      location: 'Conference Room A',
      attendees: [
        {
          id: '3',
          name: 'Lisa Rodriguez',
          role: 'Marketing Director',
          status: 'confirmed',
          responseTime: new Date('2024-01-19T15:00:00')
        },
        {
          id: '4',
          name: 'David Kim',
          role: 'Partnership Manager',
          status: 'pending',
          responseTime: new Date('2024-01-19T16:00:00')
        }
      ],
      agenda: [
        {
          id: '3',
          title: 'Q1 Performance Review',
          duration: 45,
          description: 'Review of Q1 performance metrics and achievements',
          status: 'pending'
        },
        {
          id: '4',
          title: 'Q2 Planning',
          duration: 45,
          description: 'Strategic planning for Q2 initiatives',
          status: 'pending'
        }
      ],
      performance: {
        attendanceRate: 78,
        engagementScore: 85,
        satisfactionRate: 82,
        completionRate: 88,
        lastUpdated: new Date('2024-01-20T12:00:00')
      },
      aiAnalysis: {
        id: '2',
        successProbability: 87,
        engagementPrediction: 83,
        recommendations: ['Prepare detailed metrics', 'Include interactive sessions'],
        riskFactors: ['Time constraints', 'Complex agenda']
      }
    }
  ]

  const mockCalendars: Calendar[] = [
    {
      id: '1',
      name: 'Product Development Calendar',
      type: 'team',
      events: ['1', '2'],
      settings: {
        timezone: 'UTC-5',
        workingHours: {
          start: '09:00',
          end: '17:00',
          days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        availability: [
          {
            id: '1',
            type: 'available',
            startTime: '09:00',
            endTime: '17:00',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
          }
        ],
        notifications: {
          email: true,
          push: true,
          sms: false,
          reminderTime: 15
        }
      },
      performance: {
        totalEvents: 24,
        completedEvents: 20,
        averageAttendance: 85,
        efficiencyScore: 88,
        lastOptimized: new Date('2024-01-19T15:00:00')
      },
      aiOptimization: {
        id: '1',
        optimizationScore: 91,
        timeEfficiency: 87,
        recommendations: ['Optimize meeting durations', 'Implement smart scheduling']
      }
    },
    {
      id: '2',
      name: 'Marketing Campaign Calendar',
      type: 'project',
      events: ['1'],
      settings: {
        timezone: 'UTC-5',
        workingHours: {
          start: '08:00',
          end: '18:00',
          days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        availability: [
          {
            id: '2',
            type: 'available',
            startTime: '08:00',
            endTime: '18:00',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
          }
        ],
        notifications: {
          email: true,
          push: true,
          sms: true,
          reminderTime: 30
        }
      },
      performance: {
        totalEvents: 12,
        completedEvents: 10,
        averageAttendance: 92,
        efficiencyScore: 90,
        lastOptimized: new Date('2024-01-18T10:00:00')
      },
      aiOptimization: {
        id: '2',
        optimizationScore: 89,
        timeEfficiency: 85,
        recommendations: ['Enhance campaign scheduling', 'Improve audience targeting']
      }
    }
  ]

  const mockTimelines: Timeline[] = [
    {
      id: '1',
      name: 'Marketplace Launch Timeline',
      description: 'Complete timeline for marketplace platform launch',
      milestones: [
        {
          id: '1',
          title: 'Platform Development Complete',
          description: 'Core platform development and testing completed',
          targetDate: new Date('2024-01-31'),
          status: 'in-progress',
          progress: 85,
          dependencies: []
        },
        {
          id: '2',
          title: 'Beta Testing Phase',
          description: 'User acceptance testing and feedback collection',
          targetDate: new Date('2024-02-10'),
          status: 'upcoming',
          progress: 0,
          dependencies: ['1']
        }
      ],
      deadlines: [
        {
          id: '1',
          title: 'Security Audit Completion',
          description: 'Complete security audit and compliance review',
          dueDate: new Date('2024-01-28'),
          priority: 'critical',
          status: 'in-progress',
          assignedTo: 'Security Team'
        },
        {
          id: '2',
          title: 'Marketing Materials Ready',
          description: 'Launch marketing materials and campaign assets',
          dueDate: new Date('2024-02-05'),
          priority: 'high',
          status: 'pending',
          assignedTo: 'Marketing Team'
        }
      ],
      performance: {
        totalMilestones: 5,
        completedMilestones: 2,
        onTimeDeadlines: 8,
        totalDeadlines: 10,
        efficiencyScore: 87
      },
      aiAnalysis: {
        id: '1',
        completionProbability: 89,
        riskAssessment: 15,
        recommendations: ['Accelerate security audit', 'Prepare backup resources'],
        predictedDelays: ['Marketing materials may be delayed']
      }
    },
    {
      id: '2',
      name: 'Q1 Strategic Initiatives',
      description: 'Timeline for Q1 strategic initiatives and goals',
      milestones: [
        {
          id: '3',
          title: 'Market Research Complete',
          description: 'Complete market analysis and competitive research',
          targetDate: new Date('2024-02-15'),
          status: 'in-progress',
          progress: 70,
          dependencies: []
        }
      ],
      deadlines: [
        {
          id: '3',
          title: 'Strategy Document Finalization',
          description: 'Finalize Q1 strategy document and presentation',
          dueDate: new Date('2024-01-30'),
          priority: 'high',
          status: 'in-progress',
          assignedTo: 'Strategy Team'
        }
      ],
      performance: {
        totalMilestones: 3,
        completedMilestones: 1,
        onTimeDeadlines: 5,
        totalDeadlines: 6,
        efficiencyScore: 83
      },
      aiAnalysis: {
        id: '2',
        completionProbability: 85,
        riskAssessment: 20,
        recommendations: ['Prioritize critical milestones', 'Enhance resource allocation'],
        predictedDelays: ['Strategy document may need extension']
      }
    }
  ]

  const mockAnalytics: EventCalendarAnalytics = {
    totalEvents: 36,
    activeCalendars: 8,
    timelinesCount: 6,
    averageAttendance: 87.5,
    efficiencyScore: 89,
    aiOptimizationScore: 92,
    aiInsights: [
      {
        id: '1',
        title: 'High Event Engagement',
        description: 'Overall event engagement improved by 15% with AI optimization',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Continue AI monitoring', 'Implement predictive scheduling']
      },
      {
        id: '2',
        title: 'Timeline Efficiency',
        description: 'AI analysis shows 18% improvement in timeline completion rates',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Expand timeline optimization', 'Enhance milestone tracking']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setEvents(mockEvents)
      setCalendars(mockCalendars)
      setTimelines(mockTimelines)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [])

  const filteredEvents = useMemo(() => {
    let filtered = events
    if (selectedType !== 'all') {
      filtered = filtered.filter(event => event.type === selectedType)
    }
    return filtered
  }, [events, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-300'
      case 'ongoing': return 'bg-green-500/20 text-green-300'
      case 'completed': return 'bg-gray-500/20 text-gray-300'
      case 'cancelled': return 'bg-red-500/20 text-red-300'
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-300'
      case 'pending': return 'bg-orange-500/20 text-orange-300'
      case 'overdue': return 'bg-red-500/20 text-red-300'
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
        <title>AI-Powered Event Management & Calendar System | Zion Tech Group</title>
        <meta name="description" content="Event planning, calendar management, scheduling, timeline tracking, milestone management, and deadline reminders powered by AI." />
        <meta name="keywords" content="event management, calendar, scheduling, timeline, milestone, deadline, AI events" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-44">
          <div className="text-center">
            <h1 className="text-5xl md text-6xl font-bold text-white mb-6">
              AI-Powered Event Management & Calendar System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Event planning, calendar management, scheduling, timeline tracking, 
              milestone management, and deadline reminders powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📅 Event Planning</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🗓️ Calendar Management</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⏰ Timeline Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-32">
        {isLoading ? (
          <div className="flex justify-center items-center py-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'events'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Events ({events.length})
              </button>
              <button
                onClick={() => setActiveTab('calendars')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'calendars'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Calendars ({calendars.length})
              </button>
              <button
                onClick={() => setActiveTab('timelines')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'timelines'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Timelines ({timelines.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md flex-row justify-between items-center space-y-4 md space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-emerald-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="meeting" className="bg-slate-800">Meeting</option>
                        <option value="webinar" className="bg-slate-800">Webinar</option>
                        <option value="workshop" className="bg-slate-800">Workshop</option>
                        <option value="conference" className="bg-slate-800">Conference</option>
                        <option value="deadline" className="bg-slate-800">Deadline</option>
                        <option value="milestone" className="bg-slate-800">Milestone</option>
                        <option value="custom" className="bg-slate-800">Custom</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover from-emerald-700 hover to-teal-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300">
                      Create Event
                    </button>
                  </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-300 text-sm capitalize">{event.type} • {event.priority} priority</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(event.priority)}`}>
                              {event.priority}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{event.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Attendance Rate</div>
                          <div className="text-2xl font-bold text-white">{event.performance.attendanceRate}%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Engagement Score</div>
                          <div className="text-2xl font-bold text-white">{event.performance.engagementScore}%</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Success Probability</div>
                              <div className="text-white font-semibold">{event.aiAnalysis.successProbability}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Engagement Prediction</div>
                              <div className="text-white font-semibold">{event.aiAnalysis.engagementPrediction}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {event.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover from-emerald-700 hover to-teal-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          Manage Event
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calendars Tab */}
            {activeTab === 'calendars' && (
              <div className="space-y-8">
                {calendars.map((calendar) => (
                  <div key={calendar.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{calendar.name}</h3>
                        <p className="text-gray-300 text-sm capitalize">{calendar.type} Calendar</p>
                      </div>
                      <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor('upcoming')}`}>
                        Active
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Events</div>
                        <div className="text-2xl font-bold text-white">{calendar.performance.totalEvents}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Completed Events</div>
                        <div className="text-2xl font-bold text-white">{calendar.performance.completedEvents}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Avg Attendance</div>
                        <div className="text-2xl font-bold text-white">{calendar.performance.averageAttendance}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Efficiency Score</div>
                        <div className="text-2xl font-bold text-white">{calendar.performance.efficiencyScore}%</div>
                      </div>
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3" gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Optimization Score</div>
                            <div className="text-white font-semibold">{calendar.aiOptimization.optimizationScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Time Efficiency</div>
                            <div className="text-white font-semibold">{calendar.aiOptimization.timeEfficiency}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Events</div>
                            <div className="text-white font-semibold">{calendar.events.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {calendar.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Timelines Tab */}
            {activeTab === 'timelines' && (
              <div className="space-y-8">
                {timelines.map((timeline) => (
                  <div key={timeline.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{timeline.name}</h3>
                        <p className="text-gray-300 text-sm">{timeline.description}</p>
                      </div>
                      <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor('in-progress')}`}>
                        Active
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Milestones</div>
                        <div className="text-2xl font-bold text-white">{timeline.performance.totalMilestones}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Completed</div>
                        <div className="text-2xl font-bold text-white">{timeline.performance.completedMilestones}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">On-Time Deadlines</div>
                        <div className="text-2xl font-bold text-white">{timeline.performance.onTimeDeadlines}/{timeline.performance.totalDeadlines}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Efficiency Score</div>
                        <div className="text-2xl font-bold text-white">{timeline.performance.efficiencyScore}%</div>
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3" gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Completion Probability</div>
                            <div className="text-white font-semibold">{timeline.aiAnalysis.completionProbability}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Risk Assessment</div>
                            <div className="text-white font-semibold">{timeline.aiAnalysis.riskAssessment}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Milestones</div>
                            <div className="text-white font-semibold">{timeline.milestones.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {timeline.aiAnalysis.recommendations.join(', ')}
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
                <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalEvents.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Events</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeCalendars.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Calendars</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.timelinesCount.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Timelines</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-36">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Events?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your event management journey with our AI-powered calendar system 
              and streamline your scheduling and timeline tracking.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-emerald-500/25 transform hover scale-105">
                Start Planning
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
};

export default AIPoweredEventCalendarPage 