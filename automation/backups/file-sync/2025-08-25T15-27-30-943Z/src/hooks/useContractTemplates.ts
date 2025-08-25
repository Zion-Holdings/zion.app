import { useState, useEffect } from 'react';
import { ContractTemplate } from '@/types/contracts';

export const useContractTemplates = () => {
  const [templates, setTemplates] = useState<ContractTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - in real app, this would come from API
        const mockTemplates: ContractTemplate[] = [
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

        setTemplates(mockTemplates);
        setError(null);
      } catch (err) {
        setError('Failed to fetch contract templates');
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const getTemplateById = (id: string) => {
    return templates.find(template => template.id === id);
  };

  const getTemplatesByCategory = (category: string) => {
    return templates.filter(template => template.category === category);
  };

  const searchTemplates = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    return templates.filter(template =>
      template.name.toLowerCase().includes(lowercaseQuery) ||
      template.description.toLowerCase().includes(lowercaseQuery) ||
      template.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  return {
    templates,
    loading,
    error,
    getTemplateById,
    getTemplatesByCategory,
    searchTemplates,
  };
};