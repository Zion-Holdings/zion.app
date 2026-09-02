// Industry metadata used by app/industries/page.tsx
export type Industry = {
  key: string;
  label: string;
  emoji: string;
  href: string;
};

export const industries: Industry[] = [
  { key: 'healthcare', label: 'Healthcare & Life Sciences', emoji: '🏥', href: '/industries/healthcare/' },
  { key: 'financial', label: 'Financial Services & FinTech', emoji: '💳', href: '/industries/financial-services/' },
  { key: 'manufacturing', label: 'Manufacturing & Industrial', emoji: '🏗️', href: '/industries/manufacturing/' },
  { key: 'retail', label: 'Retail & E-Commerce', emoji: '🛒', href: '/industries/retail/' },
  { key: 'education', label: 'Education & Research', emoji: '🎓', href: '/industries/education/' },
  { key: 'legal', label: 'Legal & Compliance', emoji: '⚖️', href: '/industries/legal/' },
  { key: 'energy', label: 'Energy & Utilities', emoji: '⚡', href: '/industries/energy/' },
  { key: 'logistics', label: 'Logistics & Supply Chain', emoji: '🚚', href: '/industries/logistics/' },
  { key: 'technology', label: 'Technology & SaaS', emoji: '🏭', href: '/industries/technology/' },
];

export default industries;
