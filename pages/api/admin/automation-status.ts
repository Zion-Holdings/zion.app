import type { NextApiRequest, NextApiResponse } from 'next';

interface AgentStatus {
  agentId: string;
  type: string;
  status: 'active' | 'idle' | 'error' | 'stopped';
  lastActivity: string;
  performance: number;
  uptime: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Simulate agent status data
    const agentStatuses: AgentStatus[] = [
      {
        agentId: 'agent-1',
        type: 'data-processing',
        status: 'active',
        lastActivity: new Date().toISOString(),
        performance: 85,
        uptime: 3600
      },
      {
        agentId: 'agent-2',
        type: 'automation',
        status: 'idle',
        lastActivity: new Date(Date.now() - 300000).toISOString(),
        performance: 92,
        uptime: 7200
      }
    ];

    res.status(200).json(agentStatuses);
  } catch (error) {
    console.error("Error fetching automation status:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 