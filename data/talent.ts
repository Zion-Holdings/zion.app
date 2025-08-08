export type TalentProfile = {
  slug: string;
  name: string;
  title: string;
  location: string;
  skills: string[];
  bio: string;
  hourlyRateUsd: number;
  availability: 'full-time' | 'part-time' | 'contract';
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
  },
];