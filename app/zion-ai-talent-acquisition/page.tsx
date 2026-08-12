import ProductPageLayout from '@/components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Talent Acquisition | Zion Tech Group',
  description:
    'Source, screen, and qualify candidates with AI-powered matching and automated outreach workflows.',
  alternates: { canonical: '/zion-ai-talent-acquisition' },

  openGraph: {
    title: 'Zion AI Talent Acquisition | Zion Tech Group',
    description: 'Source, screen, and qualify candidates with AI-powered matching and automated outreach workflows.',
    url: 'https://ziontechgroup.com/zion-ai-talent-acquisition',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function Page() {
  return (

    <>

      <h1>Zion AI Talent Acquisition | Zion Tech Group</h1>

<ProductPageLayout
  data={{
    title: 'Zion AI Talent Acquisition',
    category: 'Operations',
    description:
      'Source, screen, and qualify candidates with AI-powered matching and automated outreach workflows.',
    iconEmoji: '🎯',
    features: [
      {
        "title": "Production-Ready",
        "description": "Enterprise-grade infrastructure with high availability and monitoring."
      },
      {
        "title": "Intelligent Automation",
        "description": "AI-powered workflows that learn from patterns and adapt over time."
      },
      {
        "title": "Seamless Integration",
        "description": "Connect with existing tools via pre-built connectors and webhooks."
      }
    ],
    useCases: [
      {
        "title": "Operational Efficiency",
        "description": "Deploy Zion AI Talent Acquisition to automate routine tasks and reduce manual errors.",
        "icon": "⚡"
      },
      {
        "title": "Scalable Growth",
        "description": "Use Zion AI Talent Acquisition to handle increasing complexity without proportional headcount.",
        "icon": "📈"
      }
    ],
    benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
    ctaLabel: 'Get Started with Zion AI Talent Acquisition',
  }}
/>
  

    </>

  );
}
