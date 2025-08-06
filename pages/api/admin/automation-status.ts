import type { NextApiRequest, NextApiResponse } from 'next';

interface AgentStatus {
  agentId: string;
  type: string;
  status: 'active' | 'idle' | 'error' | 'stopped';
  lastActivity: string;
  performance: number; // percentage
  uptime: number; // seconds
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const agentStatuses: AgentStatus[] = [
      {
        agentId: 'agent-1',
        type: 'content-generation',
        status: 'active',
        lastActivity: new Date().toISOString(),
        performance: 95,
        uptime: 3600,
      },
      {
        agentId: 'agent-2',
        type: 'seo-optimization',
        status: 'idle',
        lastActivity: new Date(Date.now() - 300_000).toISOString(),
        performance: 88,
        uptime: 1800,
      },
    ];

    return res.status(200).json({ success: true, data: agentStatuses });
  } catch (error) {
    console.error('Automation Status API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
