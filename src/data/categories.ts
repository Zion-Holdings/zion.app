export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { id: 'services', name: 'Services', slug: 'services' },
  { id: 'talents', name: 'Talents', slug: 'talents' },
  { id: 'equipment', name: 'Equipment', slug: 'equipment' },
  { id: 'innovation', name: 'Innovation', slug: 'innovation' },
];
