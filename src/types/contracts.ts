export interface ContractTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  content: string;
  variables: ContractVariable[];
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  authorName: string;
  usageCount: number;
  rating: number;
  tags: string[];
}

export interface ContractVariable {
  name: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  description: string;
  required: boolean;
  defaultValue?: any;
}

export const CONTRACT_TEMPLATES: ContractTemplate[] = [
  {
    id: '1',
    name: 'Freelance Service Agreement',
    description: 'Standard agreement for freelance services',
    category: 'Freelance',
    content: 'This agreement is made between...',
    variables: [
      {
        name: 'clientName',
        type: 'string',
        description: 'Name of the client',
        required: true,
      },
      {
        name: 'serviceDescription',
        type: 'string',
        description: 'Description of services to be provided',
        required: true,
      },
      {
        name: 'rate',
        type: 'number',
        description: 'Hourly rate for services',
        required: true,
      },
    ],
    isPublic: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    authorId: 'admin',
    authorName: 'Admin',
    usageCount: 1250,
    rating: 4.8,
    tags: ['freelance', 'agreement', 'services'],
  },
  {
    id: '2',
    name: 'Non-Disclosure Agreement',
    description: 'Confidentiality agreement template',
    category: 'Legal',
    content: 'This Non-Disclosure Agreement...',
    variables: [
      {
        name: 'companyName',
        type: 'string',
        description: 'Name of the company',
        required: true,
      },
      {
        name: 'confidentialityPeriod',
        type: 'number',
        description: 'Period of confidentiality in years',
        required: true,
        defaultValue: 2,
      },
    ],
    isPublic: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    authorId: 'admin',
    authorName: 'Admin',
    usageCount: 890,
    rating: 4.6,
    tags: ['nda', 'confidentiality', 'legal'],
  },
];