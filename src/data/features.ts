export interface Feature {
  id: string;
  title: string;
  link: string;
}

export const ALL_FEATURES: Feature[] = [
  { id: 'ai-matcher', title: 'AI Matcher', link: '/match' },
  { id: 'talent-directory', title: 'Talent Directory', link: '/talents' },
  { id: 'services', title: 'Services Marketplace', link: '/services' },
  { id: 'equipment', title: 'Equipment Catalog', link: '/equipment' },
  { id: 'analytics', title: 'Marketplace Analytics', link: '/analytics' },
  { id: 'ai-assistant', title: 'Zion AI Assistant', link: '#' },
  { id: 'publishing', title: 'List Your Services', link: '/create-profile' },
  { id: 'help-center', title: 'Help & Resources', link: '/help' },
];
