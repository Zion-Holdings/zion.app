import { useState } from 'react';
import { ContractTemplate } from '@/types/contracts';

export function useContractTemplates() {
  const [templates, setTemplates] = useState<ContractTemplate[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const deleteTemplate = {
    mutateAsync: async (templateId: string) => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTemplates(prev => prev.filter(t => t.id !== templateId));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const setDefaultTemplate = {
    mutateAsync: async (templateId: string) => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTemplates(prev => prev.map(t => ({
          ...t,
          is_default: t.id === templateId
        })));
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    templates,
    setTemplates,
    isLoading,
    deleteTemplate,
    setDefaultTemplate
  };
}