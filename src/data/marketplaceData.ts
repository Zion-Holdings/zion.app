<<<<<<< HEAD
export const generateSearchSuggestions = (query: string): string[] => {
  const suggestions = [
    'AI Services',
    'Cybersecurity',
    'Cloud Migration',
    'Web Development',
    'Mobile Apps',
    'Data Analytics',
    'Blockchain',
    'IT Consulting'
  ];
  
  if (!query) return suggestions.slice(0, 5);
  
  return suggestions
    .filter(suggestion => 
      suggestion.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);
};
=======
export interface SearchSuggestion {
  id: string;
  text: string;
  type: string;
}

export function generateSearchSuggestions(): SearchSuggestion[] {
  return [
    { id: '1', text: 'AI Services', type: 'category' },
    { id: '2', text: 'Cybersecurity', type: 'category' },
    { id: '3', text: 'Cloud Solutions', type: 'category' },
    { id: '4', text: 'Data Analytics', type: 'category' },
    { id: '5', text: 'Web Development', type: 'category' },
    { id: '6', text: 'IT Consulting', type: 'category' },
    { id: '7', text: 'Blockchain', type: 'category' },
    { id: '8', text: 'Process Automation', type: 'category' },
    { id: '9', text: 'IoT Solutions', type: 'category' },
    { id: '10', text: 'Quantum Computing', type: 'category' },
    { id: '11', text: 'AR/VR Development', type: 'category' },
    { id: '12', text: 'Green Technology', type: 'category' },
    { id: '13', text: 'Micro SAAS', type: 'service' },
    { id: '14', text: 'Enterprise Solutions', type: 'service' },
    { id: '15', text: 'Custom Software', type: 'service' },
    { id: '16', text: 'Digital Transformation', type: 'service' },
    { id: '17', text: 'Machine Learning', type: 'technology' },
    { id: '18', text: 'DevOps', type: 'technology' },
    { id: '19', text: 'Cybersecurity Audit', type: 'service' },
    { id: '20', text: 'Cloud Migration', type: 'service' }
  ];
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
