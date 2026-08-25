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
];
