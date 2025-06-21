export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string; // Added icon property
}

export const CATEGORIES: Category[] = [
  { id: 'services', name: 'Services', slug: 'services', icon: 'Cog' },
  { id: 'talents', name: 'Talents', slug: 'talents', icon: 'Users' },
  { id: 'equipment', name: 'Equipment', slug: 'equipment', icon: 'HardDrive' },
  { id: 'innovation', name: 'Innovation', slug: 'innovation', icon: 'Lightbulb' },
];
