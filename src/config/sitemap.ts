export interface SitemapItem {
  path: string;
  title: string;
  label?: string;
  description?: string;
  lastModified?: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  requiredAuth?: boolean;
  requiredRoles?: string[];
}

export const completeSitemap: SitemapItem[] = [
  {
    path: '/',
    title: 'Home',
    label: 'Home',
    description: 'Zion Tech Group - World\'s first free marketplace for high-tech and AI',
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    path: '/about',
    title: 'About Us',
    label: 'About Us',
    description: 'Learn about Zion Tech Group and our mission',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    path: '/services',
    title: 'Services',
    label: 'Services',
    description: 'Explore our comprehensive tech services',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/marketplace',
    title: 'Marketplace',
    label: 'Marketplace',
    description: 'Browse our marketplace for tech products and services',
    priority: 0.9,
    changefreq: 'daily'
  },
  {
    path: '/talent',
    title: 'Talent',
    label: 'Talent',
    description: 'Find and connect with top tech talent',
    priority: 0.8,
    changefreq: 'daily'
  },
  {
    path: '/equipment',
    title: 'Equipment',
    label: 'Equipment',
    description: 'Browse specialized tech equipment',
    priority: 0.7,
    changefreq: 'weekly'
  },
  {
    path: '/community',
    title: 'Community',
    label: 'Community',
    description: 'Join our tech community forum',
    priority: 0.6,
    changefreq: 'daily'
  },
  {
    path: '/blog',
    title: 'Blog',
    label: 'Blog',
    description: 'Latest insights and news from Zion Tech Group',
    priority: 0.7,
    changefreq: 'weekly'
  },
  {
    path: '/careers',
    title: 'Careers',
    label: 'Careers',
    description: 'Career opportunities at Zion Tech Group',
    priority: 0.6,
    changefreq: 'monthly'
  },
  {
    path: '/contact',
    title: 'Contact',
    label: 'Contact',
    description: 'Get in touch with Zion Tech Group',
    priority: 0.5,
    changefreq: 'monthly'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    label: 'Privacy Policy',
    description: 'Privacy policy and data protection',
    priority: 0.3,
    changefreq: 'yearly'
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    label: 'Terms of Service',
    description: 'Terms and conditions of use',
    priority: 0.3,
    changefreq: 'yearly'
  },
  {
    path: '/faq',
    title: 'FAQ',
    label: 'FAQ',
    description: 'Frequently asked questions',
    priority: 0.4,
    changefreq: 'monthly'
  },
  {
    path: '/sitemap',
    title: 'Sitemap',
    label: 'Sitemap',
    description: 'Complete site navigation',
    priority: 0.2,
    changefreq: 'monthly'
  },
  {
    path: '/login',
    title: 'Login',
    label: 'Login',
    description: 'Sign in to your account',
    priority: 0.4,
    changefreq: 'monthly',
    requiredAuth: false
  },
  {
    path: '/signup',
    title: 'Sign Up',
    label: 'Sign Up',
    description: 'Create a new account',
    priority: 0.4,
    changefreq: 'monthly',
    requiredAuth: false
  },
  {
    path: '/talent-dashboard',
    title: 'Talent Dashboard',
    label: 'Talent Dashboard',
    description: 'Manage your talent profile',
    priority: 0.6,
    changefreq: 'daily',
    requiredAuth: true,
    requiredRoles: ['talent', 'jobSeeker', 'creator']
  },
  {
    path: '/employer-dashboard',
    title: 'Employer Dashboard',
    label: 'Employer Dashboard',
    description: 'Manage your hiring needs',
    priority: 0.6,
    changefreq: 'daily',
    requiredAuth: true,
    requiredRoles: ['employer', 'buyer']
  },
  {
    path: '/admin',
    title: 'Admin Panel',
    label: 'Admin Panel',
    description: 'Administrative controls',
    priority: 0.3,
    changefreq: 'monthly',
    requiredAuth: true,
    requiredRoles: ['admin']
  }
];

export const dynamicPaths: Record<string, SitemapItem[]> = {
  services: [
    { path: '/services/ai', title: 'AI Services', priority: 0.8 },
    { path: '/services/development', title: 'Development Services', priority: 0.8 },
    { path: '/services/consulting', title: 'Consulting Services', priority: 0.7 }
  ],
  marketplace: [
    { path: '/marketplace/software', title: 'Software Products', priority: 0.8 },
    { path: '/marketplace/hardware', title: 'Hardware Products', priority: 0.7 },
    { path: '/marketplace/services', title: 'Tech Services', priority: 0.8 }
  ]
};