// app/industries/[industry]/page.tsx — Dynamic Industry Landing Pages
import { notFound } from 'next/navigation';
import IndustryLanding from '@/components/IndustryLanding';

const INDUSTRY_CONFIG: Record<string, { label: string; emoji: string; color: string }> = {
  'healthcare-life-sciences': {
    label: 'Healthcare & Life Sciences',
    emoji: '🏥',
    color: 'from-pink-500 to-rose-500',
  },
  'financial-services-fintech': {
    label: 'Financial Services & FinTech',
    emoji: '💳',
    color: 'from-indigo-500 to-purple-500',
  },
  'retail-ecommerce': {
    label: 'Retail & E-Commerce',
    emoji: '🛒',
    color: 'from-sky-500 to-blue-600',
  },
  'manufacturing-industrial': {
    label: 'Manufacturing & Industrial',
    emoji: '🏗️',
    color: 'from-yellow-500 to-amber-500',
  },
  'energy-utilities': {
    label: 'Energy & Utilities',
    emoji: '⚡',
    color: 'from-green-500 to-emerald-500',
  },
  'media-entertainment': {
    label: 'Media & Entertainment',
    emoji: '🎬',
    color: 'from-blue-500 to-cyan-500',
  },
  'legal-compliance': {
    label: 'Legal & Compliance',
    emoji: '⚖️',
    color: 'from-purple-500 to-pink-500',
  },
  'logistics-supply-chain': {
    label: 'Logistics & Supply Chain',
    emoji: '🚚',
    color: 'from-rose-500 to-red-500',
  },
  'technology-saas': {
    label: 'Technology & SaaS',
    emoji: '🏭',
    color: 'from-amber-500 to-orange-500',
  },
  'education-research': {
    label: 'Education & Research',
    emoji: '🎓',
    color: 'from-cyan-500 to-teal-500',
  },
  'hospitality-tourism': {
    label: 'Hospitality & Tourism',
    emoji: '🏨',
    color: 'from-violet-500 to-fuchsia-500',
  },
  'telecommunications': {
    label: 'Telecommunications',
    emoji: '📡',
    color: 'from-blue-500 to-cyan-500',
  },
  'gaming-interactive': {
    label: 'Gaming & Interactive Entertainment',
    emoji: '🎮',
    color: 'from-purple-500 to-pink-500',
  },
};

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_CONFIG).map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const config = INDUSTRY_CONFIG[resolvedParams.industry];
  if (!config) return { title: 'Industry Solutions' };
  
  return {
    title: `${config.label} - AI & IT Solutions`,
    description: `AI-powered solutions for ${config.label.toLowerCase()}. Discover services tailored to your industry needs.`,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industryData = INDUSTRY_CONFIG[resolvedParams.industry];
  
  if (!industryData) {
    notFound();
  }
  
  return (
    <IndustryLanding
      industry={resolvedParams.industry}
      industryData={{
        key: resolvedParams.industry,
        label: industryData.label,
        emoji: industryData.emoji,
        color: industryData.color,
        count: 0,
        sample: '',
      }}
    />
  );
}