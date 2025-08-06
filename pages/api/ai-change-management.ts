import { NextApiRequest, NextApiResponse } from 'next';

interface ChangeInitiative {
  id: string;
  name: string;
  type: 'technology' | 'process' | 'organizational' | 'cultural';
  status: 'planning' | 'implementation' | 'monitoring' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate: string;
  progress: number;
  stakeholders: string[];
  risks: string[];
  benefits: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, initiativeId } = req.body;

    const changeData = {
      initiatives: [
        {
          id: 'change-1',
          name: 'Digital Transformation',
          type: 'technology',
          status: 'implementation',
          priority: 'high',
          startDate: '2024-01-15',
          endDate: '2024-06-30',
          progress: 65,
          stakeholders: ['IT Team', 'Management', 'End Users'],
          risks: ['Resistance to change', 'Technical challenges', 'Timeline delays'],
          benefits: ['Improved efficiency', 'Cost reduction', 'Better user experience']
        },
        {
          id: 'change-2',
          name: 'Process Optimization',
          type: 'process',
          status: 'planning',
          priority: 'medium',
          startDate: '2024-03-01',
          endDate: '2024-08-31',
          progress: 25,
          stakeholders: ['Operations Team', 'Quality Assurance'],
          risks: ['Process disruption', 'Training requirements'],
          benefits: ['Streamlined workflows', 'Reduced errors', 'Faster delivery']
        }
      ],
      metrics: {
        totalInitiatives: 8,
        activeInitiatives: 5,
        completedInitiatives: 3,
        averageProgress: 58,
        successRate: 87.5
      }
    };

    return res.status(200).json({
      success: true,
      data: changeData
    });
  } catch (error) {
    console.error('Error processing change management request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}