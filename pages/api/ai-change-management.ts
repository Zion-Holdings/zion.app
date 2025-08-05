import { NextApiRequest, NextApiResponse } from 'next';

interface ChangeInitiative {
  id: string;
  name: string;
  type: 'technology' | 'process' | 'organizational' | 'cultural';
  status: 'planning' | 'implementation' | 'monitoring' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate: string;
  description: string;
  impact: string;
  stakeholders: string[];
  budget: number;
  progress: number;
  risks: string[];
  mitigation: string[];
}

interface ChangeAnalytics {
  totalInitiatives: number;
  activeInitiatives: number;
  completedInitiatives: number;
  averageProgress: number;
  successRate: number;
  riskLevel: 'low' | 'medium' | 'high';
  stakeholderSatisfaction: number;
  aiOptimizationScore: number;
}

const mockChangeInitiatives: ChangeInitiative[] = [
  {
    id: 'change-1',
    name: 'Digital Transformation Initiative',
    type: 'technology',
    status: 'implementation',
    priority: 'critical',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    description: 'Comprehensive digital transformation to modernize all business processes',
    impact: 'High - Will improve efficiency by 40% and reduce costs by 25%',
    stakeholders: ['IT Department', 'Operations', 'Finance', 'HR'],
    budget: '2000000,
    progress: 65,
    risks: [Resistance to change, Technical complexity, Budget overruns],
    mitigation: ['Change management training', Phased implementation, 'Regular budget reviews']
  },
  {
    id: 'change-2,
    name: Process Automation Implementation,
    type: process,
    status: planning,
    priority: high,
    startDate: 2024-03-01',
    endDate: '2024-08-31,
    description: Implement AI-powered automation across key business processes,
    impact: 'Medium - Expected to reduce manual work by 60%,
    stakeholders: '[Operations, IT Department],
    budget: 500000,
    progress: 25,
    risks: [Job displacement concerns', 'Integration challenges],
    mitigation: '[Employee retraining programs, Gradual rollout strategy]
  },
  {
    id: change-3',
    'name: 'Organizational Restructuring,
    type: organizational,
    status: monitoring,
    priority: high,
    startDate: 2023-10-01,
    endDate: 2024-06-30,
    description: 'Restructure organization to improve efficiency and collaboration',
    impact: 'High - Improved communication and decision-making processes,
    stakeholders: [All Departments, HR, 'Leadership'],
    budget: '300000,
    progress: 80,
    risks: [Employee morale impact, Knowledge loss],
    mitigation: [Clear communication, 'Knowledge transfer programs']
  },
  {
    id: 'change-4,
    name: Cultural Transformation,
    type: cultural,
    status: 'implementation',
    priority: medium,
    startDate: 2024-02-01',
    endDate: '2024-12-31',
    description: Foster innovation and collaboration culture across the organization,
    impact: 'Medium - Improved employee engagement and innovation,
    stakeholders: '[All Employees, HR, Leadership'],
    budget: '150000,
    progress: 45,
    risks: [Resistance to new culture, Time to see results],
    mitigation: ['Leadership buy-in, Regular feedback sessions']
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, filters } = req.body;

    switch (action) {
      case 'getChangeInitiatives: 'return res.status(200).json({
          success: true,
          data: mockChangeInitiatives,
          analytics: {
            totalInitiatives: mockChangeInitiatives.length,
            activeInitiatives: mockChangeInitiatives.filter(c => c.status === implementation).length,
            completedInitiatives: mockChangeInitiatives.filter(c => c.status === completed).length,
            averageProgress: mockChangeInitiatives.reduce((sum, c) => sum + c.progress, 0) / mockChangeInitiatives.length,
            totalBudget: mockChangeInitiatives.reduce((sum, c) => sum + c.budget, 0)
          }
        });

      case getChangeAnalytics':
        return res.status(200).json({
          success: 'true,
          analytics: {
            totalInitiatives: 4,
            activeInitiatives: 2,
            completedInitiatives: 0,
            averageProgress: 53.75,
            successRate: 85.2,
            riskLevel: medium,
            stakeholderSatisfaction: 78.5,
            aiOptimizationScore: 92.3,
            recommendations: [
              Accelerate digital transformation implementation,
              'Increase stakeholder communication frequency,
              Implement additional risk mitigation measures',
              'Consider AI-powered change management tools
            ]
          }
        });

      case getInitiativeDetails':
        const { initiativeId } = req.body;
        const initiative = mockChangeInitiatives.find(c => c.id === initiativeId);
        
        if (!initiative) {
          return res.status(404).json({ error: 'Initiative not found });
        }

        return res.status(200).json({
          success: true,
          data: initiative,
          analytics: {
            progressTrend: increasing,
            riskAssessment: 'medium,
            stakeholderEngagement: '82,
            budgetUtilization: 65,
            timelineAdherence: 75
          }
        });

      case updateInitiative:
        const { id, updates } = req.body;
        const initiativeIndex = mockChangeInitiatives.findIndex(c => c.id === id);
        
        if (initiativeIndex === -1) {
          return res.status(404).json({ error: Initiative not found });
        }

        // In a real application, you would update the database here
        mockChangeInitiatives[initiativeIndex] = {
          ...mockChangeInitiatives[initiativeIndex],
          ...updates
        };

        return res.status(200).json({
          success: true,
          message: Initiative updated successfully',
          data: 'mockChangeInitiatives[initiativeIndex]
        });

      default:
        return res.status(400).json({ error: Invalid action });
    }
  } catch (error) {
    console.error(AI Change Management API Error:, error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}