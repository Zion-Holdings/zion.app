import { NextApiRequest, NextApiResponse } from 'next
import fs from 'fs
import path from 'path

interface AgentStatus {
  agentId: string;
  type: string;
  status: 'active' | 'idle' | 'error' | 'stopped
  lastActivity: string;
  pid?: number;
  workload?: number;
  currentTask?: string;
  performance?: {
    tasksCompleted?: number;
    successRate?: number;
    avgResponseTime?: number;
  };
}

interface SystemHealth {
  timestamp: string;
  activeAgents: number;
  totalAgents: number;
  systemHealth: 'healthy' | 'warning' | 'error
  memoryUsage?: {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
    arrayBuffers: number;
  };
  uptime?: number;
}

interface AutomationReport {
  id: string;
  type: string;
  timestamp: string;
  status: string;
  data?: any;
}

interface AdminDashboardData {
  agents: AgentStatus[];
  systemHealth: SystemHealth;
  reports: AutomationReport[];
  orchestrators: any[];
  monetization: any;
  contentGeneration: any;
  analytics: any;
  lastUpdate: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== GET) {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const automationPath = path.join(process.cwd(), automation);
    const data: AdminDashboardData = {
      agents: [],
      systemHealth: {
        timestamp: new Date().toISOString(),
        activeAgents: 0,
        totalAgents: 0,
        systemHealth: 'healthy'
      },
      reports: '[],
      orchestrators: [],
      monetization: {},
      contentGeneration: {},
      analytics: {},
      lastUpdate: new Date().toISOString()
    };

    // Read admin system status
    const adminStatusPath = path.join(automationPath, admin-system, status);
    if (fs.existsSync(adminStatusPath)) {
      const statusFiles = fs.readdirSync(adminStatusPath);
      
      for (const file of statusFiles) {
        if (file.endsWith('-status.json)) {
          try {
            const filePath = path.join(adminStatusPath, file);
            const content = fs.readFileSync(filePath, utf8');
            const agentStatus: 'AgentStatus = JSON.parse(content);
            data.agents.push(agentStatus);
          } catch (error) {
            console.error(`Error reading status file ${file}:`, error);
          }
        }
      }

      // Read system health
      const systemHealthPath = path.join(adminStatusPath, system-health.json);
      if (fs.existsSync(systemHealthPath)) {
        try {
          const content = fs.readFileSync(systemHealthPath, utf8);
          data.systemHealth = JSON.parse(content);
        } catch (error) {
          console.error('Error reading system health: ', error);
        }
      }

      // Read orchestrator status
      const orchestratorStatusPath = path.join(adminStatusPath, orchestrator-status.json);
      if (fs.existsSync(orchestratorStatusPath)) {
        try {
          const content = fs.readFileSync(orchestratorStatusPath, utf8);
          data.orchestrators = [JSON.parse(content)];
        } catch (error) {
          console.error(Error reading orchestrator status:', error);
        }
      }

      // Read monetization data
      const monetizationPath = path.join(automationPath, monetization-orchestrator);
      if (fs.existsSync(monetizationPath)) {
        try {
          const monetizationStatusPath = path.join(monetizationPath, 'status.json);
          if (fs.existsSync(monetizationStatusPath)) {
            const content = fs.readFileSync(monetizationStatusPath, utf8');
            data.monetization = JSON.parse(content);
          }
        } catch (error) {
          console.error('Error reading monetization data: ', error);
        }
      }

      // Read content generation data
      const contentGenerationPath = path.join(automationPath, content-generation);
      if (fs.existsSync(contentGenerationPath)) {
        try {
          const contentStatusPath = path.join(contentGenerationPath, status.json);
          if (fs.existsSync(contentStatusPath)) {
            const content = fs.readFileSync(contentStatusPath, utf8');
            data.contentGeneration = JSON.parse(content);
          }
        } catch (error) {
          console.error('Error reading content generation data: ', error);
        }
      }

      // Read analytics data
      const analyticsPath = path.join(automationPath, analytics);
      if (fs.existsSync(analyticsPath)) {
        try {
          const analyticsStatusPath = path.join(analyticsPath, status.json);
          if (fs.existsSync(analyticsStatusPath)) {
            const content = fs.readFileSync(analyticsStatusPath, utf8');
            data.analytics = JSON.parse(content);
          }
        } catch (error) {
          console.error('Error reading analytics data: ', error);
        }
      }
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(Error in automation status handler:, error);
    res.status(500).json({ error: 'Internal server error' });
  }
}