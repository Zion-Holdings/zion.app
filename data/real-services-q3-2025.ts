export interface Q3Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  textColor: string;
  link: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const realServicesQ32025: Q3Service[] = [
  {
    id: 'genai-rag-starter-kit',
    name: 'GenAI RAG Starter Kit',
    tagline: 'Production-ready RAG with evals, safety and observability',
    price: '$149',
    period: '/month',
    description: 'Deploy a retrieval-augmented generation stack with vector DB, safety guardrails, prompt evals and tracing. Typical stack aligns with Pinecone/Weaviate pricing and OpenAI/Anthropic model costs. See openrouter.ai/models for model rates.',
    features: ['Vector DB setup', 'Chunking + embeddings', 'Prompt evals', 'Safety policies', 'Tracing & analytics', 'Playbooks'],
    icon: '🧠',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/genai-rag-starter-kit',
    category: 'AI & Data',
    realService: true,
    technology: ['Next.js', 'LangChain/Vercel AI SDK', 'OpenAI/Anthropic', 'Weaviate/Pinecone'],
    integrations: ['OpenAI', 'Anthropic', 'Pinecone', 'Weaviate', 'Langfuse'],
    useCases: ['Docs Q&A', 'Product support', 'Internal knowledge'],
    roi: 'Cut time-to-first-copilot to under 2 weeks',
    competitors: ['LangSmith Starter', 'Vercel AI SDK templates'] ,
    contactInfo: contact
  },
  {
    id: 'cloud-cost-anomaly-guard',
    name: 'Cloud Cost Anomaly Guard',
    tagline: 'Detect spend spikes and auto-open Jira with owners',
    price: '$79',
    period: '/month',
    description: 'FinOps anomaly detection integrated with AWS Cost Explorer or BigQuery billing export. Benchmarked against Kubecost/CloudZero pricing tiers.',
    features: ['Daily anomaly checks', 'Owner mapping', 'Jira ticketing', 'Slack alerts'],
    icon: '💸',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services/cloud-cost-anomaly-guard',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['AWS CE API', 'BigQuery', 'Serverless'],
    integrations: ['AWS', 'GCP', 'Slack', 'Jira'],
    useCases: ['FinOps', 'Budget protection'],
    roi: 'Prevent 1+ costly spikes per quarter',
    competitors: ['Kubecost', 'CloudZero', 'Finout'],
    contactInfo: contact
  },
  {
    id: 'realtime-user-feedback-widget',
    name: 'Realtime User Feedback Widget',
    tagline: 'In-app NPS/CSAT with AI clustering and alerts',
    price: '$59',
    period: '/month',
    description: 'Collect NPS/CSAT and open-text feedback; cluster themes with LLMs and push actionable alerts to Slack. Compares to Hotjar/Qualtrics lightweight tiers.',
    features: ['NPS/CSAT', 'AI clustering', 'Theme alerts', 'Dashboards'],
    icon: '🗣️',
    color: 'from-purple-600 to-fuchsia-700',
    textColor: 'text-fuchsia-300',
    link: 'https://ziontechgroup.com/services/realtime-user-feedback-widget',
    category: 'Developer Tools',
    realService: true,
    technology: ['Next.js', 'Edge functions'],
    integrations: ['Slack', 'Segment', 'Amplitude'],
    useCases: ['PMF tracking', 'Churn signals'],
    roi: 'Reduce churn by 5–10% via faster insights',
    competitors: ['Hotjar', 'Qualtrics'],
    contactInfo: contact
  },
  {
    id: 'gdpr-dsar-autoresponder',
    name: 'GDPR DSAR Autoresponder',
    tagline: 'Automate DSAR intake, validation and retrieval workflows',
    price: '$129',
    period: '/month',
    description: 'Automated DSAR handling with identity verification, system-of-record lookups and templated responses. Benchmarked with Skyflow/VGS/Transcend ecosystems.',
    features: ['Identity verification', 'Data source connectors', 'Response templates', 'Audit trail'],
    icon: '🔏',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/gdpr-dsar-autoresponder',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['KMS', 'Serverless', 'OCR/Email intake'],
    integrations: ['Google Workspace', 'Zendesk', 'Salesforce'],
    useCases: ['Privacy compliance', 'Audit readiness'],
    roi: 'Cut DSAR handling time by 70%',
    competitors: ['Transcend', 'OneTrust'],
    contactInfo: contact
  },
  {
    id: 'edge-feature-flag-orchestrator',
    name: 'Edge Feature Flag Orchestrator',
    tagline: 'Rule-based flags at the CDN edge with fast rollouts',
    price: '$69',
    period: '/month',
    description: 'Deliver feature flags and experiments at the edge with Cloudflare/Netlify adapters. Comparable value to LaunchDarkly/Statsig for simple rules.',
    features: ['Edge rules', 'Geo/device targeting', 'Instant kill-switch', 'Audit logs'],
    icon: '🚀',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/edge-feature-flag-orchestrator',
    category: 'Observability',
    realService: true,
    technology: ['Cloudflare Workers', 'Netlify Edge Functions'],
    integrations: ['Cloudflare', 'Netlify', 'GitHub'],
    useCases: ['Safe rollouts', 'Experiments'],
    roi: 'Cut rollback time to seconds',
    competitors: ['LaunchDarkly', 'Statsig'],
    contactInfo: contact
  }
];