export interface AddedRealService2025 {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: { monthly: number; currency: string };
  features: string[];
  link: string;
  popular: boolean;
  icon: string;
  color: string;
  launchDate: string;
  rating: number;
}

export const addedRealServices2025: AddedRealService2025[] = [
  {
    id: 'api-security-scanner-2025',
    name: 'API Security Scanner',
    tagline: 'Continuously discover APIs and detect OWASP API Top 10',
    description: 'Map shadow and zombie APIs, scan for auth flaws and injection, and block risky changes via CI/CD gates.',
    category: 'Security',
    price: { monthly: 299, currency: 'USD' },
    features: [
      'API discovery and inventory',
      'OWASP API Top 10 checks',
      'CI/CD policy gates',
      'Runtime anomaly alerts',
      'Reports and compliance export'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: true,
    icon: '🔐',
    color: 'from-indigo-600 to-purple-700',
    launchDate: '2025-02-18',
    rating: 4.7
  },
  {
    id: 'smb-website-analytics-2025',
    name: 'SMB Website Analytics',
    tagline: 'Privacy-friendly, cookie-less analytics with goals and funnels',
    description: 'Simple dashboards, event tracking, and conversion funnels without cookies. GDPR/CCPA friendly.',
    category: 'Analytics',
    price: { monthly: 12, currency: 'USD' },
    features: [
      'Cookie-less tracking',
      'Goals and funnels',
      'Email/Slack reports',
      'Embeddable widgets',
      'CSV/API export'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: false,
    icon: '📈',
    color: 'from-emerald-600 to-teal-700',
    launchDate: '2025-02-18',
    rating: 4.6
  },
  {
    id: 'employee-scheduling-suite-2025',
    name: 'Employee Scheduling Suite',
    tagline: 'Easy shift planning with swaps and notifications',
    description: 'Plan shifts, manage availability, swap requests, and overtime limits with mobile reminders.',
    category: 'Operations',
    price: { monthly: 39, currency: 'USD' },
    features: [
      'Shift templates and rules',
      'Availability and PTO',
      'Swap requests and approvals',
      'Mobile notifications',
      'Payroll export'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: false,
    icon: '🗓️',
    color: 'from-orange-500 to-red-500',
    launchDate: '2025-02-18',
    rating: 4.5
  }
];