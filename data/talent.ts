export type TalentProfile = {
  slug: string;
  name: string;
  title: string;
  location: string;
  skills: string[];
  bio: string;
  hourlyRateUsd: number;
  availability: 'full-time' | 'part-time' | 'contract';
  featured?: boolean;
  experienceYears?: number;
  timezone?: string; // e.g., 'Americas', 'EMEA', 'APAC'
  rating?: number; // 0-5
  bookings?: number; // number of hires/engagements
};

export const TALENT_PROFILES: TalentProfile[] = [
  {
    slug: 'ava-chen',
    name: 'Ava Chen',
    title: 'Senior LLM Engineer',
    location: 'Toronto, CA',
    skills: ['LLM Ops', 'RAG', 'OpenAI', 'LangChain', 'Vector DBs', 'TypeScript'],
    bio: 'Architects robust LLM applications with retrieval, evaluation, and safety guardrails. Ex-FAANG applied scientist.',
    hourlyRateUsd: 140,
    availability: 'contract',
    featured: true,
    experienceYears: 8,
    timezone: 'Americas',
    rating: 4.9,
    bookings: 42,
  },
  {
    slug: 'marco-silva',
    name: 'Marco Silva',
    title: 'Cloud Solutions Architect',
    location: 'Lisbon, PT',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Serverless', 'Networking'],
    bio: 'Designs scalable, secure multi-account AWS platforms and platform engineering toolchains.',
    hourlyRateUsd: 120,
    availability: 'contract',
    featured: false,
    experienceYears: 10,
    timezone: 'EMEA',
    rating: 4.8,
    bookings: 36,
  },
  {
    slug: 'nina-patel',
    name: 'Nina Patel',
    title: 'Data Scientist • GenAI',
    location: 'Austin, US',
    skills: ['Python', 'PyTorch', 'NLP', 'Evaluation', 'Prompting', 'Dashboards'],
    bio: 'Builds data products end-to-end with strong model evaluation and product sense.',
    hourlyRateUsd: 110,
    availability: 'part-time',
    featured: false,
    experienceYears: 6,
    timezone: 'Americas',
    rating: 4.7,
    bookings: 28,
  },
  {
    slug: 'kenji-yamada',
    name: 'Kenji Yamada',
    title: 'Full‑Stack AI Engineer',
    location: 'Tokyo, JP',
    skills: ['Next.js', 'TypeScript', 'Rust', 'PostgreSQL', 'OpenAI', 'Vercel'],
    bio: 'Delivers sleek, performant AI web apps with modern DX and observability.',
    hourlyRateUsd: 95,
    availability: 'contract',
    featured: true,
    experienceYears: 7,
    timezone: 'APAC',
    rating: 4.85,
    bookings: 31,
  },
  {
    slug: 'lena-mueller',
    name: 'Lena Müller',
    title: 'Security Engineer',
    location: 'Berlin, DE',
    skills: ['Threat Modeling', 'AppSec', 'SAST/DAST', 'Zero Trust', 'IAM'],
    bio: 'Hardens platforms with practical, developer‑friendly security programs.',
    hourlyRateUsd: 130,
    availability: 'contract',
    featured: false,
    experienceYears: 9,
    timezone: 'EMEA',
    rating: 4.9,
    bookings: 25,
  },
];