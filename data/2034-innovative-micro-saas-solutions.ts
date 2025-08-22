export interface InnovativeMicroSaas2034 {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: { monthly: number; yearly?: number; currency: string; trialDays?: number };
  features: string[];
  benefits?: string[];
  link: string;
  popular: boolean;
  icon: string;
  color: string;
  launchDate?: string;
  rating?: number;
}

export const innovativeMicroSaasSolutions: InnovativeMicroSaas2034[] = [
  {
    id: 'podcast-notes-studio-2034',
    name: 'Podcast Notes Studio',
    tagline: 'Transcripts, chapters, SEO posts in minutes',
    description: 'Upload episodes to get accurate transcripts, chapter markers, show notes, quotes, and ready-to-publish SEO blog posts with images.',
    category: 'Content & Marketing',
    price: { monthly: 29, yearly: 290, currency: 'USD', trialDays: 7 },
    features: [
      'Accurate transcripts (multi-speaker)',
      'Chapters and highlights',
      'SEO post generation',
      'WordPress/Notion export',
      'Analytics and search'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: true,
    icon: '🎙️',
    color: 'from-pink-500 to-rose-600',
    launchDate: '2025-02-05',
    rating: 4.8
  },
  {
    id: 'edge-feature-flags-2034',
    name: 'Edge Feature Flags',
    tagline: 'Geo and audience targeting at the edge',
    description: 'Lightweight flags at CDN edge with gradual rollouts, kill switches, and fallbacks integrated with CI/CD.',
    category: 'Developer Tools',
    price: { monthly: 49, yearly: 490, currency: 'USD', trialDays: 14 },
    features: [
      'Geo/audience targeting',
      'Gradual rollouts and A/B',
      'Flagged config as code',
      'SDKs for JS/Go/Python',
      'CI/CD and audit logs'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: true,
    icon: '🚩',
    color: 'from-orange-500 to-red-500',
    launchDate: '2025-01-28',
    rating: 4.7
  },
  {
    id: 'email-warmup-guard-2034',
    name: 'Email Warmup Guard',
    tagline: 'Inbox placement and domain reputation tracker',
    description: 'Automated warmup, seed-list tests, blacklist alerts, and SPF/DKIM/DMARC checks with remediation playbooks.',
    category: 'Growth',
    price: { monthly: 19, yearly: 190, currency: 'USD' },
    features: [
      'Warmup scheduler',
      'Seed-list tests',
      'Blocklist monitoring',
      'SPF/DKIM/DMARC checks',
      'Alerts to Slack/Email'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: false,
    icon: '📧',
    color: 'from-cyan-500 to-blue-600',
    launchDate: '2025-02-12',
    rating: 4.6
  }
];