
// Define the types for our sitemap structure
export type SitemapItem = {
  path: string;
  label: string;
  description?: string;
  priority?: number;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
  requiredAuth?: boolean;
  requiredRoles?: Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>;
  children?: SitemapItem[];
};

// Current date for lastmod
const currentDate = '2025-05-15';

// Public Pages - Accessible to all users
export const publicPages: SitemapItem[] = [
  {
    path: '/',
    label: 'Home',
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence',
    priority: 1.0,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/about',
    label: 'About Us',
    description: 'Learn about the Zion AI Marketplace mission, team and timeline',
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/contact',
    label: 'Contact',
    description: 'Get in touch with the Zion team',
    priority: 0.8, 
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/talent',
    label: 'Talent Directory',
    description: 'Browse skilled AI and tech professionals',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/marketplace',
    label: 'Marketplace',
    description: 'Explore AI services, products and equipment',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/services',
    label: 'Services',
    description: 'Find professional tech and AI services',
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/equipment',
    label: 'Equipment',
    description: 'Specialized hardware and tech equipment',
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/categories',
    label: 'Categories',
    description: 'Browse service and talent categories',
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/blog',
    label: 'Blog',
    description: 'Articles and insights about AI and tech',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/faq',
    label: 'FAQ',
    description: 'Frequently asked questions about Zion',
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/docs/api-reference',
    label: 'API Reference',
    description: 'Zion API endpoints and documentation',
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/terms',
    label: 'Terms of Service',
    description: 'Terms and conditions for using Zion',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/privacy',
    label: 'Privacy Policy',
    description: 'How we handle your data',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/careers',
    label: 'Careers',
    description: 'Join our team',
    priority: 0.6,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/innovation',
    label: 'Innovation',
    description: 'Latest innovations at Zion',
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/global',
    label: 'Global Map',
    description: 'Visualize Zion deployments around the world',
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
];

// Authentication Pages
export const authPages: SitemapItem[] = [
  {
    path: '/login',
    label: 'Login',
    description: 'Sign in to your account',
    priority: 0.6,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/signup',
    label: 'Sign Up',
    description: 'Create a new account',
    priority: 0.6,
    changeFreq: 'monthly',
    lastmod: currentDate,
    children: [
      {
        path: '/signup/talent',
        label: 'Talent Registration',
        description: 'Sign up as a talent or creator',
        priority: 0.6,
        changeFreq: 'monthly',
        lastmod: currentDate,
      },
      {
        path: '/signup/client',
        label: 'Client Registration',
        description: 'Sign up as an employer or buyer',
        priority: 0.6,
        changeFreq: 'monthly',
        lastmod: currentDate,
      }
    ]
  },
  {
    path: '/forgot-password',
    label: 'Forgot Password',
    description: 'Reset your password',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
];

// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
  {
    path: '/talent-dashboard',
    label: 'Talent Dashboard',
    description: 'Overview for talent users',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/talent-onboarding',
    label: 'Talent Onboarding',
    description: 'Complete your talent profile',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
    description: 'Manage your portfolio and resume',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/create-profile',
    label: 'Create Profile',
    description: 'Set up your talent profile',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
];

// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
  {
    path: '/client-dashboard',
    label: 'Client Dashboard',
    description: 'Overview for client users',
    requiredAuth: true,
    requiredRoles: ['employer', 'buyer'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/post-job',
    label: 'Post a Job',
    description: 'Create a new job listing',
    requiredAuth: true,
    requiredRoles: ['employer', 'buyer'],
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/hiring-tracker',
    label: 'Hiring Pipeline',
    description: 'Track your hiring process',
    requiredAuth: true,
    requiredRoles: ['employer', 'buyer'],
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
];

// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
  {
    path: '/messages',
    label: 'Messages',
    description: 'Your inbox and conversations',
    requiredAuth: true,
    priority: 0.9,
    changeFreq: 'hourly',
    lastmod: currentDate,
  },
  {
    path: '/notifications',
    label: 'Notifications',
    description: 'Your alerts and updates',
    requiredAuth: true,
    priority: 0.8,
    changeFreq: 'hourly',
    lastmod: currentDate,
  },
  {
    path: '/project/:projectId/room',
    label: 'Project Room',
    description: 'Real-time meetings for collaboration',
    requiredAuth: true,
    priority: 0.6,
    changeFreq: 'never',
    lastmod: currentDate,
  },
  {
    path: '/dashboard/disputes',
    label: 'Disputes',
    description: 'Manage and view disputes',
    requiredAuth: true,
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
];

// Admin Routes
export const adminRoutes: SitemapItem[] = [
  {
    path: '/analytics',
    label: 'Analytics',
    description: 'System analytics and metrics',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/admin/reviews',
    label: 'Reviews Moderation',
    description: 'Moderate user reviews',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/admin/disputes',
    label: 'Dispute Management',
    description: 'Manage user disputes',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.8,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
];

// Dynamic Path Patterns
export const dynamicPaths = {
  talentProfile: '/talent/:id',
  projectDetails: '/project/:projectId',
  projectMilestones: '/project/:projectId/milestones',
  projectRoom: '/project/:projectId/room',
  jobDetails: '/job/:id',
  categoryDetails: '/categories/:slug',
  disputeDetails: '/dashboard/disputes/:disputeId',
};

// The complete sitemap
export const completeSitemap: SitemapItem[] = [
  ...publicPages,
  ...authPages,
  ...talentRoutes,
  ...clientRoutes,
  ...sharedRoutes,
  ...adminRoutes,
];

// Helper function to get appropriate routes based on user role
export const getAccessibleRoutes = (
  isAuthenticated: boolean, 
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null
) => {
  // Public routes accessible to everyone
  let accessibleRoutes = [...publicPages, ...authPages];
  
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    
    // Add role-specific routes
    if (userType === 'creator' || userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes];
    }
    
    if (userType === 'employer' || userType === 'buyer') {
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes];
    }
    
    if (userType === 'admin') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes];
    }
  }
  
  return accessibleRoutes;
};
