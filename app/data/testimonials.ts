export interface Testimonial {
  id: string;
  quote: string;
  author?: string;
  company?: string;
  avatar_emoji?: string;
  client_name?: string;
  role?: string;
  rating?: number;
  review_text?: string;
  service_id?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Zion transformed our operations with AI automation.',
    author: 'Alex Morgan',
    company: 'TechCorp',
    avatar_emoji: '👤',
    client_name: 'TechCorp',
    role: 'CTO',
    rating: 5,
    review_text: 'Support automation and cloud efficiency improved dramatically after working with Zion.',
  },
  {
    id: '2',
    quote: 'Scalable solutions that actually deliver.',
    author: 'Priya Shah',
    company: 'ScaleUp Inc',
    avatar_emoji: '👤',
    client_name: 'ScaleUp Inc',
    role: 'VP Engineering',
    rating: 5,
    review_text: 'The AI adoption roadmap was practical, not theoretical.',
  },
  {
    id: '3',
    quote: 'The best IT partner we have worked with.',
    author: 'Jordan Lee',
    company: 'GrowthCo',
    avatar_emoji: '👤',
    client_name: 'GrowthCo',
    role: 'CEO',
    rating: 4,
    review_text: 'Fast implementation with clear ROI and timeline visibility.',
  },
  {
    id: '4',
    quote: 'Hermes Agent cut our deployment time from days to minutes. The 10-agent fleet handles everything — CI/CD, security, SEO, content. It just works.',
    author: 'Sarah Chen',
    company: 'Nous Research',
    avatar_emoji: '🔬',
    client_name: 'Nous Research',
    role: 'Head of Infrastructure',
    rating: 5,
    review_text: 'Hermes Agent is the most powerful autonomous AI platform we evaluated. The self-improving skills system and 20+ platform gateway make it uniquely capable for production-scale deployment. Zion Tech Group\'s implementation expertise accelerated our rollout beyond expectations.',
    service_id: 'hermes-agent',
    featured: true,
  },
  {
    id: '5',
    quote: 'The persistent memory across Telegram and Discord is game-changing. Our agents carry context everywhere, and the credential pooling with automatic failover has eliminated all our rate-limit issues.',
    author: 'Marcus Rodriguez',
    company: 'DevFlow Labs',
    avatar_emoji: '🚀',
    client_name: 'DevFlow Labs',
    role: 'CTO',
    rating: 5,
    review_text: 'We evaluated Claude Code, OpenClaw, and Hermes Agent head to head. Hermes won decisively — multi-agent orchestration, cron automation with Telegram delivery, and self-improving skills. The $5 VPS deployment cost vs. Claude Code\'s subscription model gave us immediate ROI.',
    service_id: 'hermes-agent',
    featured: true,
  },
  {
    id: '6',
    quote: '30,000+ SEO landing pages generated and deployed autonomously. Our traffic increased 342% in 6 months while our engineering team stayed at 3 people.',
    author: 'Priya Sharma',
    company: 'AutoScale AI',
    avatar_emoji: '📈',
    client_name: 'AutoScale AI',
    role: 'Growth Director',
    rating: 5,
    review_text: 'Zion Tech Group deployed a 10-agent Hermes fleet that handles our entire content pipeline — from service discovery to SEO page generation to email outreach. The agent monitoring dashboard gives us real-time visibility into everything. It is like having a 50-person ops team at a fraction of the cost.',
    service_id: 'hermes-agent',
    featured: true,
  },
];