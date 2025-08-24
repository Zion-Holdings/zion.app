import { useState } from 'react';
export function useContractTemplates() {
    const [templates, setTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const deleteTemplate = {
        mutateAsync: async (templateId) => {
            setIsLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                setTemplates(prev => prev.filter(t => t.id !== templateId));
            }
            finally {
                setIsLoading(false);
            }
        }
    };
    const setDefaultTemplate = {
        mutateAsync: async (templateId) => {
            setIsLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                setTemplates(prev => prev.map(t => (Object.assign(Object.assign({}, t), { is_default: t.id === templateId }))));
            }
            finally {
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
