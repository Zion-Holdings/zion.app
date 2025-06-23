export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string; // Added icon property
}

export const CATEGORIES: Category[] = [
  { id: 'ai-models-apis', name: 'AI Models & APIs', slug: 'ai-models-apis', icon: 'Brain' },
  { id: 'services', name: 'Services', slug: 'services', icon: 'Cog' },
  { id: 'equipment', name: 'Equipment', slug: 'equipment', icon: 'HardDrive' },
  { id: 'hardware', name: 'Hardware', slug: 'hardware', icon: 'Cpu' },
  { id: 'content-creation', name: 'Content Creation', slug: 'content-creation', icon: 'FileText' },
  { id: 'data-analysis', name: 'Data Analysis', slug: 'data-analysis', icon: 'BarChart' },
  { id: 'computer-vision', name: 'Computer Vision', slug: 'computer-vision', icon: 'Eye' },
  { id: 'cloud-services', name: 'Cloud Services', slug: 'cloud-services', icon: 'Cloud' },
  { id: 'security', name: 'Security', slug: 'security', icon: 'Shield' },
  { id: 'marketing', name: 'Marketing', slug: 'marketing', icon: 'TrendingUp' },
  { id: 'talents', name: 'Talents', slug: 'talents', icon: 'Users' },
  { id: 'innovation', name: 'Innovation', slug: 'innovation', icon: 'Lightbulb' },
];
