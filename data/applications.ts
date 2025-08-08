export type ApplicationStatus = 'New' | 'Viewed' | 'Interviewed' | 'Hired';

export type Application = {
  id: string;
  jobId: string;
  talentSlug: string;
  talentName: string;
  title: string;
  avatarUrl?: string;
  submittedAt: string;
  resumeUrl?: string;
  resumeVersionLabel?: string;
  aiScore?: number;
  status: ApplicationStatus;
  summary?: string;
  skills?: string[];
};

export const APPLICATIONS: Application[] = [
  {
    id: 'app-001',
    jobId: 'job-llm-eng-001',
    talentSlug: 'ava-chen',
    talentName: 'Ava Chen',
    title: 'Senior LLM Engineer',
    submittedAt: '2025-08-06T09:25:00Z',
    resumeUrl: undefined,
    resumeVersionLabel: 'AI Resume – LLM/RAG',
    aiScore: 92,
    status: 'New',
    summary: 'Architects robust LLM apps with retrieval, evaluation and guardrails. Ex-FAANG applied scientist.',
    skills: ['LLM Ops', 'RAG', 'OpenAI', 'LangChain', 'Vector DBs', 'TypeScript'],
  },
  {
    id: 'app-002',
    jobId: 'job-devops-002',
    talentSlug: 'marco-silva',
    talentName: 'Marco Silva',
    title: 'Cloud Solutions Architect',
    submittedAt: '2025-08-05T14:10:00Z',
    resumeUrl: undefined,
    resumeVersionLabel: 'AI Resume – DevOps',
    aiScore: 88,
    status: 'Viewed',
    summary: 'Designs scalable multi-account AWS platforms and platform engineering toolchains.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Serverless', 'Networking'],
  },
  {
    id: 'app-003',
    jobId: 'job-devops-002',
    talentSlug: 'lena-mueller',
    talentName: 'Lena Müller',
    title: 'Security Engineer',
    submittedAt: '2025-08-04T11:45:00Z',
    resumeUrl: undefined,
    resumeVersionLabel: 'AI Resume – Security',
    aiScore: 76,
    status: 'New',
    summary: 'Hardens platforms with practical, developer‑friendly security programs.',
    skills: ['Threat Modeling', 'AppSec', 'SAST/DAST', 'Zero Trust', 'IAM'],
  },
];