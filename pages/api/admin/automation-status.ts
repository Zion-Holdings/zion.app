import type { NextApiRequest, NextApiResponse } from 'next';

type AgentStatus = 'active' | 'idle' | 'error' | 'stopped';

interface AutomationStatus {
  isRunning: boolean;
  totalAgents: number;
  activeAgents: number;
  systemHealth: 'healthy' | 'warning' | 'error';
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
      isRunning: true,
      totalAgents: 10,
      activeAgents: 7,
      systemHealth: 'healthy',
      lastUpdate: new Date().toISOString()
    };

    res.status(200).json(status);
  } catch (error) {
    console.error('Error fetching automation status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
