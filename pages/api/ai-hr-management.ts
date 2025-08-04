import type { NextApiRequest, NextApiResponse } from 'next';

interface HRData {
  candidates: Array<{
    id: string;
    name: string;
    position: string;
    experience: string;
    skills: string[];
    status: 'applied' | 'screening' | 'interviewing' | 'offered' | 'hired' | 'rejected';
    score: number;
    aiInsights: {
      culturalFit: number;
      skillMatch: number;
      growthPotential: number;
      riskAssessment: number;
    };
    lastUpdated: string;
  }>;
  employees: Array<{
    id: string;
    name: string;
    position: string;
    department: string;
    startDate: string;
    performance: {
      overall: number;
      productivity: number;
      collaboration: number;
      innovation: number;
    };
    engagement: number;
    retentionRisk: number;
    developmentNeeds: string[];
  }>;
  jobPostings: Array<{
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract' | 'internship';
    status: 'active' | 'paused' | 'closed';
    applications: number;
    aiOptimization: {
      keywordOptimization: number;
      diversityScore: number;
      marketCompetitiveness: number;
    };
  }>;
  performanceReviews: Array<{
    id: string;
    employeeId: string;
    employeeName: string;
    period: string;
    overallRating: number;
    goals: string[];
    achievements: string[];
    areasForImprovement: string[];
    aiRecommendations: string[];
  }>;
  analytics: {
    recruitment: {
      timeToHire: number;
      costPerHire: number;
      qualityOfHire: number;
      diversityScore: number;
    };
    employee: {
      satisfaction: number;
      retentionRate: number;
      averagePerformance: number;
      engagementScore: number;
    };
    predictions: {
      highPerformers: number;
      retentionRisk: number;
      skillGaps: number;
    };
    trends: {
      employeeGrowth: number;
      diversityImprovement: number;
      trainingCompletion: number;
    };
  };
  insights: Array<{
    type: 'retention_risk' | 'skill_gap' | 'diversity' | 'performance' | 'recruitment';
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    affectedCount: number;
    recommendations: string[];
  }>;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HRData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({} as HRData);
  }

  // Mock HR data
  const hrData: HRData = {
    candidates: [
      {
        id: '1',
        name: 'Sarah Johnson',
        position: 'Senior Software Engineer',
        experience: '8 years',
        skills: ['React', 'Node.js', 'Python', 'AWS'],
        status: 'interviewing',
        score: 92,
        aiInsights: {
          culturalFit: 88,
          skillMatch: 95,
          growthPotential: 90,
          riskAssessment: 12
        },
        lastUpdated: '2024-01-15'
      },
      {
        id: '2',
        name: 'Michael Chen',
        position: 'Product Manager',
        experience: '6 years',
        skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research'],
        status: 'screening',
        score: 87,
        aiInsights: {
          culturalFit: 85,
          skillMatch: 88,
          growthPotential: 92,
          riskAssessment: 18
        },
        lastUpdated: '2024-01-14'
      },
      {
        id: '3',
        name: 'Emily Rodriguez',
        position: 'UX Designer',
        experience: '4 years',
        skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
        status: 'applied',
        score: 89,
        aiInsights: {
          culturalFit: 92,
          skillMatch: 86,
          growthPotential: 88,
          riskAssessment: 15
        },
        lastUpdated: '2024-01-13'
      },
      {
        id: '4',
        name: 'Alex Thompson',
        position: 'Data Scientist',
        experience: '5 years',
        skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
        status: 'offered',
        score: 94,
        aiInsights: {
          culturalFit: 90,
          skillMatch: 96,
          growthPotential: 93,
          riskAssessment: 8
        },
        lastUpdated: '2024-01-12'
      }
    ],
    employees: [
      {
        id: '1',
        name: 'David Kim',
        position: 'Lead Developer',
        department: 'Engineering',
        startDate: '2022-03-15',
        performance: {
          overall: 92,
          productivity: 94,
          collaboration: 89,
          innovation: 91
        },
        engagement: 88,
        retentionRisk: 15,
        developmentNeeds: ['Leadership Skills', 'System Architecture']
      },
      {
        id: '2',
        name: 'Lisa Wang',
        position: 'Marketing Manager',
        department: 'Marketing',
        startDate: '2021-08-20',
        performance: {
          overall: 89,
          productivity: 87,
          collaboration: 93,
          innovation: 88
        },
        engagement: 92,
        retentionRisk: 8,
        developmentNeeds: ['Data Analytics', 'Strategic Planning']
      },
      {
        id: '3',
        name: 'James Wilson',
        position: 'Sales Director',
        department: 'Sales',
        startDate: '2020-11-10',
        performance: {
          overall: 85,
          productivity: 82,
          collaboration: 88,
          innovation: 79
        },
        engagement: 75,
        retentionRisk: 35,
        developmentNeeds: ['Performance Coaching', 'Team Leadership']
      },
      {
        id: '4',
        name: 'Maria Garcia',
        position: 'HR Specialist',
        department: 'Human Resources',
        startDate: '2023-01-15',
        performance: {
          overall: 91,
          productivity: 89,
          collaboration: 94,
          innovation: 87
        },
        engagement: 95,
        retentionRisk: 5,
        developmentNeeds: ['HR Analytics', 'Employee Relations']
      }
    ],
    jobPostings: [
      {
        id: '1',
        title: 'Senior Full Stack Developer',
        department: 'Engineering',
        location: 'San Francisco, CA',
        type: 'full-time',
        status: 'active',
        applications: 45,
        aiOptimization: {
          keywordOptimization: 92,
          diversityScore: 78,
          marketCompetitiveness: 85
        }
      },
      {
        id: '2',
        title: 'Product Marketing Specialist',
        department: 'Marketing',
        location: 'Remote',
        type: 'full-time',
        status: 'active',
        applications: 32,
        aiOptimization: {
          keywordOptimization: 88,
          diversityScore: 82,
          marketCompetitiveness: 79
        }
      },
      {
        id: '3',
        title: 'Data Scientist',
        department: 'Analytics',
        location: 'New York, NY',
        type: 'full-time',
        status: 'paused',
        applications: 28,
        aiOptimization: {
          keywordOptimization: 85,
          diversityScore: 75,
          marketCompetitiveness: 92
        }
      },
      {
        id: '4',
        title: 'UX/UI Designer',
        department: 'Design',
        location: 'Austin, TX',
        type: 'full-time',
        status: 'active',
        applications: 38,
        aiOptimization: {
          keywordOptimization: 90,
          diversityScore: 85,
          marketCompetitiveness: 88
        }
      }
    ],
    performanceReviews: [
      {
        id: '1',
        employeeId: '1',
        employeeName: 'David Kim',
        period: 'Q4 2023',
        overallRating: 92,
        goals: ['Lead technical architecture decisions', 'Mentor junior developers'],
        achievements: ['Successfully launched new product feature', 'Improved team productivity by 25%'],
        areasForImprovement: ['Communication with non-technical stakeholders'],
        aiRecommendations: ['Consider leadership training program', 'Schedule regular stakeholder updates']
      },
      {
        id: '2',
        employeeId: '2',
        employeeName: 'Lisa Wang',
        period: 'Q4 2023',
        overallRating: 89,
        goals: ['Increase brand awareness', 'Improve campaign ROI'],
        achievements: ['Launched successful social media campaign', 'Increased conversion rates by 30%'],
        areasForImprovement: ['Data-driven decision making'],
        aiRecommendations: ['Enroll in advanced analytics course', 'Implement A/B testing framework']
      },
      {
        id: '3',
        employeeId: '3',
        employeeName: 'James Wilson',
        period: 'Q4 2023',
        overallRating: 85,
        goals: ['Increase sales revenue', 'Improve team performance'],
        achievements: ['Exceeded quarterly targets by 15%', 'Implemented new sales process'],
        areasForImprovement: ['Team leadership and coaching'],
        aiRecommendations: ['Attend leadership development program', 'Implement regular team feedback sessions']
      }
    ],
    analytics: {
      recruitment: {
        timeToHire: 24,
        costPerHire: 8500,
        qualityOfHire: 87,
        diversityScore: 78
      },
      employee: {
        satisfaction: 92,
        retentionRate: 94,
        averagePerformance: 88,
        engagementScore: 89
      },
      predictions: {
        highPerformers: 15,
        retentionRisk: 3,
        skillGaps: 8
      },
      trends: {
        employeeGrowth: 12,
        diversityImprovement: 8,
        trainingCompletion: 87
      }
    },
    insights: [
      {
        type: 'retention_risk',
        title: 'High Retention Risk Detected',
        description: '3 employees showing signs of disengagement and potential departure',
        severity: 'high',
        affectedCount: 3,
        recommendations: [
          'Schedule one-on-one meetings with affected employees',
          'Review compensation and benefits packages',
          'Implement employee engagement initiatives'
        ]
      },
      {
        type: 'skill_gap',
        title: 'Skill Gap Identified',
        description: 'Engineering team needs upskilling in emerging technologies',
        severity: 'medium',
        affectedCount: 12,
        recommendations: [
          'Implement technical training programs',
          'Provide access to online learning platforms',
          'Schedule regular skill assessment reviews'
        ]
      },
      {
        type: 'diversity',
        title: 'Diversity Improvement',
        description: 'Positive trend in leadership diversity, but room for improvement',
        severity: 'low',
        affectedCount: 8,
        recommendations: [
          'Continue diversity-focused recruitment efforts',
          'Implement mentorship programs for underrepresented groups',
          'Review promotion processes for bias'
        ]
      },
      {
        type: 'performance',
        title: 'Performance Distribution',
        description: 'Strong performance across teams with 35 employees in top 20%',
        severity: 'low',
        affectedCount: 35,
        recommendations: [
          'Recognize high performers publicly',
          'Provide career development opportunities',
          'Share best practices across teams'
        ]
      },
      {
        type: 'recruitment',
        title: 'Recruitment Pipeline Optimization',
        description: 'Job postings need optimization for better candidate quality',
        severity: 'medium',
        affectedCount: 3,
        recommendations: [
          'Update job descriptions with AI-optimized keywords',
          'Improve diversity in candidate sourcing',
          'Enhance employer branding materials'
        ]
      }
    ]
  };

  // Simulate processing delay
  setTimeout(() => {
    res.status(200).json(hrData);
  }, 1000);
} 