export type TalentProfile = {
  slug: string;
  name: string;
  title: string;
  location: string;
  skills: string[];
  bio: string;
  hourlyRateUsd: number;
  availability: 'full-time' | 'part-time' | 'contract';
  experienceYears: number;
  region: 'Americas' | 'EMEA' | 'APAC';
  timezone?: string;
  rating: number; // 0-5
  bookings: number; // total number of bookings
  createdAt: string; // ISO date string for sorting by newest
  status?: 'available' | 'booked' | 'part-time';
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
    experienceYears: 8,
    region: 'Americas',
    timezone: 'America/Toronto',
    rating: 4.9,
    bookings: 72,
    createdAt: '2025-06-18T00:00:00.000Z',
    status: 'available',
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
    experienceYears: 10,
    region: 'EMEA',
    timezone: 'Europe/Lisbon',
    rating: 4.7,
    bookings: 58,
    createdAt: '2025-05-02T00:00:00.000Z',
    status: 'available',
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
    experienceYears: 6,
    region: 'Americas',
    timezone: 'America/Chicago',
    rating: 4.8,
    bookings: 33,
    createdAt: '2025-07-01T00:00:00.000Z',
    status: 'part-time',
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
    experienceYears: 7,
    region: 'APAC',
    timezone: 'Asia/Tokyo',
    rating: 4.6,
    bookings: 41,
    createdAt: '2025-04-10T00:00:00.000Z',
    status: 'available',
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
    experienceYears: 9,
    region: 'EMEA',
    timezone: 'Europe/Berlin',
    rating: 4.9,
    bookings: 85,
    createdAt: '2025-06-25T00:00:00.000Z',
    status: 'booked',
  },
];