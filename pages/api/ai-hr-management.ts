import { NextApiRequest, NextApiResponse } from 'next

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
  performance: number;
  satisfaction: number;
  retentionRisk: number;
  aiAnalysis: EmployeeAnalysis;
}

interface EmployeeAnalysis {
  id: string;
  performanceScore: number;
  satisfactionScore: number;
  retentionScore: number;
  recommendations: string[];
}

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship
  status: 'open' | 'in-review' | 'closed' | 'filled
  applications: number;
  aiOptimization: JobOptimization;
}

interface JobOptimization {
  id: string;
  visibilityScore: number;
  applicationQuality: number;
  diversityScore: number;
  recommendations: string[];
}

interface HRAnalytics {
  totalEmployees: number;
  activeJobPostings: number;
  averagePerformance: number;
  employeeSatisfaction: number;
  retentionRate: number;
  aiOptimizationScore: number;
}

const mockEmployees: Employee[] = [
  {
    id: 'emp-1',
    name: 'John Smith',
    position: 'Senior Software Engineer',
    department: 'Engineering',
    hireDate: '2022-03-15',
    salary: 95000,
    performance: 92,
    satisfaction: 88,
    retentionRisk: 15,
    aiAnalysis: {
      id: 'analysis-1',
      performanceScore: 90,
      satisfactionScore: 85,
      retentionScore: 85,
      recommendations: ['Consider promotion opportunities', 'Provide additional training', 'Increase recognition']
    }
  },
  {
    id: 'emp-2',
    name: 'Sarah Johnson',
    position: 'Product Manager',
    department: 'Product',
    hireDate: '2021-08-20',
    salary: 110000,
    performance: 95,
    satisfaction: 92,
    retentionRisk: 8,
    aiAnalysis: {
      id: 'analysis-2',
      performanceScore: 94,
      satisfactionScore: 90,
      retentionScore: 92,
      recommendations: ['High performer - consider leadership role', 'Maintain current engagement level']
    }
  },
  {
    id: 'emp-3',
    name: 'Mike Davis',
    position: 'Data Analyst',
    department: 'Analytics',
    hireDate: '2023-01-10',
    salary: 75000,
    performance: 78,
    satisfaction: 65,
    retentionRisk: 45,
    aiAnalysis: {
      id: 'analysis-3',
      performanceScore: 75,
      satisfactionScore: 62,
      retentionScore: 55,
      recommendations: ['Provide performance coaching', 'Address work-life balance', 'Consider role adjustment']
    }
  },
  {
    id: 'emp-4',
    name: 'Lisa Brown',
    position: 'UX Designer',
    department: 'Design',
    hireDate: '2022-11-05',
    salary: 85000,
    performance: 88,
    satisfaction: 82,
    retentionRisk: 25,
    aiAnalysis: {
      id: 'analysis-4',
      performanceScore: 86,
      satisfactionScore: 80,
      retentionScore: 78,
      recommendations: ['Provide career development opportunities', 'Increase project variety', 'Improve team collaboration']
    }
  }
];

const mockJobPostings: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    status: 'open',
    applications: 45,
    aiOptimization: {
      id: 'opt-1',
      visibilityScore: 85,
      applicationQuality: 78,
      diversityScore: 82,
      recommendations: ['Optimize job description keywords', 'Improve diversity outreach', 'Enhance application process']
    }
  },
  {
    id: 'job-2',
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'New York',
    type: 'full-time',
    status: 'in-review',
    applications: 32,
    aiOptimization: {
      id: 'opt-2',
      visibilityScore: 92,
      applicationQuality: 88,
      diversityScore: 75,
      recommendations: ['Increase diversity initiatives', 'Streamline interview process', 'Improve candidate experience']
    }
  },
  {
    id: 'job-3',
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'San Francisco',
    type: 'internship',
    status: 'open',
    applications: 28,
    aiOptimization: {
      id: 'opt-3',
      visibilityScore: 78,
      applicationQuality: 65,
      diversityScore: 90,
      recommendations: ['Enhance job posting visibility', 'Improve application screening', 'Add mentorship program details']
    }
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, filters } = req.body;

    switch (action) {
      case 'getEmployees':
        return res.status(200).json({
          success: true,
          data: mockEmployees,
          analytics: {
            totalEmployees: mockEmployees.length,
            averagePerformance: mockEmployees.reduce((sum, e) => sum + e.performance, 0) / mockEmployees.length,
            averageSatisfaction: mockEmployees.reduce((sum, e) => sum + e.satisfaction, 0) / mockEmployees.length,
            highRiskEmployees: mockEmployees.filter(e => e.retentionRisk > 30).length
          }
        });

      case 'getJobPostings':
        return res.status(200).json({
          success: true,
          data: mockJobPostings,
          analytics: {
            totalPostings: mockJobPostings.length,
            openPostings: mockJobPostings.filter(j => j.status === 'open').length,
            totalApplications: mockJobPostings.reduce((sum, j) => sum + j.applications, 0),
            averageApplications: mockJobPostings.reduce((sum, j) => sum + j.applications, 0) / mockJobPostings.length
          }
        });

      case 'getHRAnalytics':
        return res.status(200).json({
          success: true,
          analytics: {
            totalEmployees: 4,
            activeJobPostings: 3,
            averagePerformance: 88.25,
            employeeSatisfaction: 81.75,
            retentionRate: 92.5,
            aiOptimizationScore: 89.3,
            recommendations: [
              'Implement AI-powered performance tracking',
              'Enhance employee engagement programs',
              'Optimize recruitment processes',
              'Develop retention strategies for high-risk employees'
            ]
          }
        });

      case 'getEmployeeDetails':
        const { employeeId } = req.body;
        const employee = mockEmployees.find(e => e.id === employeeId);
        
        if (!employee) {
          return res.status(404).json({ error: 'Employee not found' });
        }

        return res.status(200).json({
          success: true,
          data: employee,
          analytics: {
            performanceTrend: 'stable',
            satisfactionTrend: 'improving',
            retentionRisk: employee.retentionRisk,
            careerProgression: 'on-track',
            developmentOpportunities: 3
          }
        });

      case 'analyzeEmployee':
        const { employeeId: analyzeEmployeeId } = req.body;
        const analyzeEmployee = mockEmployees.find(e => e.id === analyzeEmployeeId);
        
        if (!analyzeEmployee) {
          return res.status(404).json({ error: 'Employee not found' });
        }

        // Simulate AI analysis
        const analysis = {
          performanceInsights: [
            'Consistent high performance in technical tasks',
            'Strong collaboration with team members',
            'Areas for improvement in communication'
          ],
          satisfactionFactors: [
            'Positive work environment',
            'Good compensation package',
            'Opportunities for growth'
          ],
          retentionStrategies: [
            'Provide career development opportunities',
            'Increase recognition and rewards',
            'Improve work-life balance'
          ]
        };

        return res.status(200).json({
          success: true,
          analysis,
          recommendations: analyzeEmployee.aiAnalysis.recommendations
        });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('AI HR Management API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}