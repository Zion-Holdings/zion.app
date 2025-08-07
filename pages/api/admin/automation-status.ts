import type { NextApiRequest, NextApiResponse } from 'next'

type AgentStatus = 'active' | 'idle' | 'error' | 'stopped'

interface Agent {
  agentId: string
  type: string
  status: AgentStatus
  lastActivity?: string
  performance?: {
    tasksCompleted: number
    successRate: number
    averageResponseTime: number
  }
}

interface AutomationStatus {
  overallStatus: AgentStatus
  agents: Agent[]
  systemHealth: {
    memoryUsage: number
    cpuUsage: number
    uptime: number
  }
  lastUpdated: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AutomationStatus | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Mock automation status data
    const automationStatus: AutomationStatus = {
      overallStatus: 'active',
      agents: [
        {
          agentId: 'agent-1',
          type: 'content-generation',
          status: 'active',
          lastActivity: new Date().toISOString(),
          performance: {
            tasksCompleted: 150,
            successRate: 98.5,
            averageResponseTime: 2.3
          }
        },
        {
          agentId: 'agent-2',
          type: 'seo-optimization',
          status: 'idle',
          lastActivity: new Date(Date.now() - 300000).toISOString(),
          performance: {
            tasksCompleted: 75,
            successRate: 95.2,
            averageResponseTime: 1.8
          }
        },
        {
          agentId: 'agent-3',
          type: 'social-media',
          status: 'active',
          lastActivity: new Date().toISOString(),
          performance: {
            tasksCompleted: 200,
            successRate: 99.1,
            averageResponseTime: 1.5
          }
        }
      ],
      systemHealth: {
        memoryUsage: 65.2,
        cpuUsage: 42.8,
        uptime: 86400 // 24 hours in seconds
      },
      lastUpdated: new Date().toISOString()
    }

    res.status(200).json(automationStatus)
  } catch (error) {
    console.error('Automation Status API Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}