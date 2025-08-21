import { ServiceVariant } from '../types/service-variants';

export interface Q3Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;
  category: string;
  realService: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
  variant?: ServiceVariant;
  customers?: number;
  rating?: number;
  reviews?: number;
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const realServicesQ32025: Q3Service[] = [
  {
    id: 'subscription-analytics-revenue-optimization',
    name: 'Subscription Analytics & Revenue Optimization',
    tagline: 'Churn insights, cohort analysis, and pricing experiments for SaaS growth',
    price: '$599',
    period: '/month',
    description: 'We implement and operate a revenue analytics stack that surfaces churn drivers, LTV/CAC ratios, cohort trends, and pricing experiment outcomes. Includes instrumentation templates and weekly executive reports.',
    features: [
      'Churn and retention analysis',
      'Cohort and funnel dashboards',
      'Price testing and packaging experiments',
      'Revenue leakage detection',
      'Revenue forecasting models',
      'Weekly executive summaries'
    ],
    popular: true,
    icon: '📊',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/subscription-analytics-revenue-optimization',
    marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.',
    targetAudience: 'SaaS startups, PLG companies, finance and growth teams',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'AI & Data',
    realService: true,
    technology: ['dbt', 'Snowflake/BigQuery', 'Segment/GA4', 'Python'],
    integrations: ['Stripe', 'Paddle', 'Chargebee', 'Lemon Squeezy'],
    useCases: ['Reduce churn', 'Price optimization', 'Board-ready revenue KPIs'],
    roi: '3–10% ARR lift from churn reduction and pricing wins.',
    competitors: ['ProfitWell Metrics', 'ChartMogul', 'Baremetrics'],
    marketSize: '$30B+ subscription economy tooling',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    customers: 24,
    rating: 4.9,
    reviews: 31,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  },
  {
    id: 'digital-product-commerce-stack',
    name: 'Digital Product Commerce Stack',
    tagline: 'End-to-end setup for selling downloads, licenses, and subscriptions',
    price: '$1,200',
    period: '/project',
    description: 'We stand up a production-grade commerce stack for digital products with subscriptions, tax handling, license keys, refunds, and analytics. Includes storefront templates and payment integrations.',
    features: [
      'Payments, taxes, and invoicing',
      'License keys and subscriptions',
      'EU/US tax and compliance guidance',
      'Storefront templates and checkout',
      'Sales analytics and email hooks',
      '1-week launch plan'
    ],
    icon: '🛒',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/digital-product-commerce-stack',
    marketPosition: 'Implementation partner alternative to Lemon Squeezy/Gumroad do-it-yourself.',
    targetAudience: 'Indie SaaS, creators, agencies launching digital products',
    setupTime: '5–7 days',
    category: 'Developer Tools',
    realService: true,
    technology: ['Next.js', 'Stripe', 'Lemon Squeezy API', 'PostgreSQL'],
    integrations: ['Stripe', 'Lemon Squeezy', 'Gumroad', 'Make/Zapier'],
    useCases: ['Course sales', 'Plugin licenses', 'Templates marketplace'],
    roi: 'Launch revenue in under 2 weeks; save 40–80 hours of setup.',
    competitors: ['Lemon Squeezy', 'Gumroad', 'Paddle'],
    customers: 12,
    rating: 4.8,
    reviews: 18,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  },
  {
    id: 'wordpress-internal-linking-automation',
    name: 'WordPress Internal Linking Automation',
    tagline: 'AI-guided internal links that improve SEO structure and topical authority',
    price: '$299',
    period: '/month',
    description: 'We deploy and tune internal linking automation for WordPress sites, calibrate anchor text, and surface orphan pages. Includes monthly SEO structure audits and CTR uplift experiments.',
    features: [
      'Automatic link suggestions and anchors',
      'Orphan page and pillar clustering',
      'Click-through rate experiments',
      'Reporting and recommendations',
      'Sitemap and crawl improvements'
    ],
    icon: '🔗',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-200',
    link: 'https://ziontechgroup.com/services/wordpress-internal-linking-automation',
    marketPosition: 'Comparable to Link Whisper with managed tuning and reporting.',
    targetAudience: 'Content sites, ecommerce, publishers on WordPress',
    trialDays: 7,
    setupTime: '2–4 days',
    category: 'Growth & Marketing',
    realService: true,
    technology: ['WordPress', 'GA4', 'Looker Studio'],
    integrations: ['Link Whisper', 'Yoast/RankMath', 'Search Console'],
    useCases: ['Boost organic traffic', 'Fix site structure', 'Improve crawl and CTR'],
    roi: '5–25% organic uplift in 8–12 weeks on content libraries.',
    competitors: ['Link Whisper', 'Internal Link Juicer'],
    customers: 30,
    rating: 4.7,
    reviews: 22,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  },
  {
    id: 'reviews-ugc-activation',
    name: 'Ecommerce Reviews & UGC Activation',
    tagline: 'Deploy reviews and UGC workflows that increase trust and conversion',
    price: '$999',
    period: '/project',
    description: 'We implement reviews and UGC collection across your storefront with on-brand widgets, post-purchase triggers, and moderation pipelines. Includes KPI dashboards for conversion lift.',
    features: [
      'Reviews widget integration',
      'Email/SMS post-purchase triggers',
      'Photo/video UGC capture',
      'Moderation and syndication',
      'Conversion impact reporting'
    ],
    icon: '⭐',
    color: 'from-amber-600 to-rose-600',
    textColor: 'text-amber-200',
    link: 'https://ziontechgroup.com/services/ecommerce-reviews-ugc-activation',
    marketPosition: 'Managed alternative to do-it-yourself Yotpo/Judge.me setups.',
    targetAudience: 'Shopify and custom ecommerce brands',
    setupTime: '3–6 days',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Shopify', 'Klaviyo', 'Next.js'],
    integrations: ['Yotpo', 'Judge.me', 'Loox', 'Stamped'],
    useCases: ['Increase trust', 'Lift CVR', 'Collect UGC for ads'],
    roi: '2–10% CVR lift on PDPs post-deployment.',
    competitors: ['Yotpo', 'Judge.me', 'Loox', 'Stamped.io'],
    customers: 10,
    rating: 4.8,
    reviews: 12,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  }
];
