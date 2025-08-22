export interface InnovativeMicroSaasSolution {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing?: {
    monthly?: number;
    yearly?: number;
    currency?: string;
    usageNotes?: string;
    starter?: string;
    professional?: string;
    enterprise?: string;
  };
  features: string[];
  link: string;
  launchDate?: string;
  popular?: boolean;
  rating?: number;
}

export const innovativeMicroSaasSolutions: InnovativeMicroSaasSolution[] = [
  {
    id: 'ai-customer-success-platform',
    name: 'AI Customer Success Platform',
    description: 'Predict churn, trigger playbooks, and automate success workflows using behavioral analytics and AI.',
    category: 'Customer Success',
    pricing: { monthly: 199, yearly: 1990, currency: 'USD', starter: '$199/mo' },
    features: [
      'Health scoring and churn prediction',
      'Automated QBR and outreach playbooks',
      'CSAT/NPS surveys with AI insights',
      'CRM integrations (Salesforce/HubSpot)'
    ],
    link: 'https://ziontechgroup.com/ai-customer-success-platform/',
    launchDate: '2024-10-05',
    popular: true,
    rating: 4.8
  },
  {
    id: 'ai-financial-planning-platform',
    name: 'AI Financial Planning Platform',
    description: 'AI-driven FP&A forecasts, scenario modeling, and variance analysis for SMBs and mid-market.',
    category: 'Finance',
    pricing: { monthly: 149, yearly: 1490, currency: 'USD', starter: '$149/mo' },
    features: [
      'Cohort and revenue modeling',
      'Dynamic budgeting and forecasting',
      'Scenario and sensitivity analysis',
      'ERP/accounting integrations'
    ],
    link: 'https://ziontechgroup.com/ai-financial-planning-platform/',
    launchDate: '2024-09-18',
    rating: 4.7
  },
  {
    id: 'ai-sales-intelligence-platform',
    name: 'AI Sales Intelligence Platform',
    description: 'Prospect scoring, auto-research, and personalized outreach with execution analytics.',
    category: 'Sales',
    pricing: { monthly: 129, yearly: 1290, currency: 'USD', starter: '$129/mo' },
    features: [
      'Lead scoring and intent signals',
      'Automated account research',
      'Personalized sequences with AI',
      'CRM sync and rep analytics'
    ],
    link: 'https://ziontechgroup.com/ai-sales-intelligence-platform/',
    launchDate: '2024-08-01',
    popular: true,
    rating: 4.7
  },
  {
    id: 'intelligent-content-automation-platform',
    name: 'Intelligent Content Automation Platform',
    description: 'End-to-end content planning, generation, and distribution with SEO optimization and analytics.',
    category: 'Content & Marketing',
    pricing: { monthly: 99, yearly: 990, currency: 'USD', starter: '$99/mo' },
    features: [
      'Keyword research and briefs',
      'Brand voice generation',
      'Multi-channel distribution',
      'Performance analytics'
    ],
    link: 'https://ziontechgroup.com/intelligent-content-automation-platform/',
    launchDate: '2024-07-10',
    rating: 4.6
  }
];