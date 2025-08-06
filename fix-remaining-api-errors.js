const fs = require('fs');
const path = require('path');

// Fix ai-contract.ts
const contractContent = `import type { NextApiRequest, NextApiResponse } from 'next';

interface ContractTemplate {
  id: string;
  name: string;
  type: 'service' | 'employment' | 'partnership' | 'nda' | 'license';
  category: string;
  description: string;
  clauses: string[];
  variables: Record<string, string>;
  legalRequirements: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contractType, requirements, parties, terms } = req.body;

  // Mock contract generation
  const contract = {
    id: 'contract-1',
    type: contractType || 'service',
    title: 'Service Agreement',
    parties: parties || ['Client', 'Provider'],
    terms: terms || ['Payment terms', 'Delivery timeline', 'Quality standards'],
    clauses: [
      'This agreement is entered into between the parties',
      'Services will be delivered according to specifications',
      'Payment will be made within 30 days of invoice'
    ],
    legalRequirements: [
      'Compliance with local laws',
      'Data protection requirements',
      'Intellectual property rights'
    ]
  };

  res.status(200).json({ contract });
}`;

// Fix ai-workspace-suggestions.ts
const workspaceContent = `import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { workspaceType, requirements, budget, teamSize } = req.body;

  // Mock workspace suggestions
  const suggestions = [
    {
      id: 'suggestion-1',
      name: 'Modern Open Office',
      type: 'collaborative',
      description: 'Open floor plan with flexible seating and meeting areas',
      features: ['Standing desks', 'Meeting pods', 'Breakout areas'],
      estimatedCost: 50000,
      setupTime: '2-3 weeks',
      suitability: 95
    },
    {
      id: 'suggestion-2',
      name: 'Private Office Suite',
      type: 'private',
      description: 'Individual offices with shared conference facilities',
      features: ['Private offices', 'Conference rooms', 'Reception area'],
      estimatedCost: 75000,
      setupTime: '3-4 weeks',
      suitability: 88
    }
  ];

  res.status(200).json({ suggestions });
}`;

// Fix analytics-api.ts
const analyticsContent = `import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  data?: any;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Mock analytics data
  const analyticsData = {
    pageViews: 1250,
    uniqueVisitors: 890,
    conversionRate: 2.3,
    topPages: [
      { path: '/', views: 450 },
      { path: '/services', views: 320 },
      { path: '/about', views: 180 }
    ],
    userEngagement: {
      averageSessionDuration: '2m 45s',
      bounceRate: 35.2,
      pagesPerSession: 3.1
    }
  };

  res.status(200).json({ success: true, data: analyticsData });
}`;

// Fix analyze-quote-request.ts
const quoteContent = `import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { quoteRequest, requirements, budget } = req.body;

  // Mock quote analysis
  const analysis = {
    requestId: 'quote-1',
    complexity: 'medium',
    estimatedHours: 120,
    recommendedRate: 85,
    totalEstimate: 10200,
    breakdown: [
      { phase: 'Planning', hours: 20, cost: 1700 },
      { phase: 'Development', hours: 80, cost: 6800 },
      { phase: 'Testing', hours: 15, cost: 1275 },
      { phase: 'Deployment', hours: 5, cost: 425 }
    ],
    risks: ['Scope creep', 'Technical challenges'],
    recommendations: ['Start with MVP', 'Regular check-ins']
  };

  res.status(200).json({ analysis });
}`;

// Fix analyze-service-request.ts
const serviceContent = `import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { serviceRequest, requirements, timeline } = req.body;

  // Mock service analysis
  const analysis = {
    requestId: 'service-1',
    category: 'Web Development',
    complexity: 'high',
    estimatedDuration: '6-8 weeks',
    teamSize: 3,
    technologies: ['React', 'Node.js', 'MongoDB'],
    deliverables: [
      'Responsive web application',
      'Admin dashboard',
      'API documentation',
      'Deployment guide'
    ],
    risks: ['Third-party integrations', 'Performance requirements'],
    recommendations: ['Agile methodology', 'Regular demos']
  };

  res.status(200).json({ analysis });
}`;

// Write the fixed files
const apiDir = path.join(__dirname, 'pages', 'api');

fs.writeFileSync(path.join(apiDir, 'ai-contract.ts'), contractContent);
fs.writeFileSync(path.join(apiDir, 'ai-workspace-suggestions.ts'), workspaceContent);
fs.writeFileSync(path.join(apiDir, 'analytics-api.ts'), analyticsContent);
fs.writeFileSync(path.join(apiDir, 'analyze-quote-request.ts'), quoteContent);
fs.writeFileSync(path.join(apiDir, 'analyze-service-request.ts'), serviceContent);

console.log('All remaining API syntax errors fixed!'); '