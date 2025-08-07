import type { NextApiRequest, NextApiResponse } from 'next';

type AgentStatus = 'active' | 'idle' | 'error' | 'stopped';

interface Agent {
  agentId: string;
  type: string;
  status: AgentStatus;
  lastActivity?: string;
  performance?: {
    cpu: number;
    memory: number;
    errors: number;
  };
}

interface AutomationStatus {
  totalAgents: number;
  activeAgents: number;
  agents: Agent[];
  systemHealth: 'healthy' | 'warning' | 'critical';
  lastUpdate: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AutomationStatus | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock data for demonstration
    const status: AutomationStatus = {
      totalAgents: 5,
      activeAgents: 3,
      agents: [
        {
          agentId: 'syntax-fixer-001',
          type: 'syntax-fix',
          status: 'active',
          lastActivity: new Date().toISOString(),
          performance: {
            cpu: 15,
            memory: 45,
            errors: 0
          }
        },
        {
          agentId: 'linting-agent-001',
          type: 'linting',
          status: 'active',
          lastActivity: new Date().toISOString(),
          performance: {
            cpu: 20,
            memory: 60,
            errors: 2
          }
        }
      ],
      systemHealth: 'healthy',
      lastUpdate: new Date().toISOString()
    };

    res.status(200).json(status);
  } catch (error) {
    console.error('Error fetching automation status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}