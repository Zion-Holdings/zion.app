import ProductPageLayout from '@/components/ProductPageLayout';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Zion AI Project Portfolio',
  description:
    'Prioritize and balance project portfolios with resource capacity, risk, and strategic alignment insights.',
  alternates: { canonical: '/zion-ai-project-portfolio' },

  openGraph: {
    title: 'Zion AI Project Portfolio',
    description: 'Prioritize and balance project portfolios with resource capacity, risk, and strategic alignment insights.',
    url: 'https://ziontechgroup.com/zion-ai-project-portfolio',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function Page() {
  return (

    <>


    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Zion AI Project Portfolio", description: "Prioritize and balance project portfolios with resource capacity, risk, and strategic alignment insights.", url: "https://ziontechgroup.com/zion-ai-project-portfolio/"}} />

      <h1>Zion AI Project Portfolio</h1>

<ProductPageLayout
  data={{
    title: 'Zion AI Project Portfolio',
    category: 'Operations',
    description:
      'Prioritize and balance project portfolios with resource capacity, risk, and strategic alignment insights.',
    iconEmoji: '📋',
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
        "description": "Deploy Zion AI Project Portfolio to automate routine tasks and reduce manual errors.",
        "icon": "⚡"
      },
      {
        "title": "Scalable Growth",
        "description": "Use Zion AI Project Portfolio to handle increasing complexity without proportional headcount.",
        "icon": "📈"
      }
    ],
    benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
    ctaLabel: 'Get Started with Zion AI Project Portfolio',
  }}
/>
  

    </>

  );
}
