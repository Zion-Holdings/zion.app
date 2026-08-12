import ProductPageLayout from '@/components/ProductPageLayout';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Zion AI Field Service Manager',
  description:
    'Optimize field technician scheduling, routing, and job completion with AI-driven dispatch and real-time updates.',
  alternates: { canonical: '/zion-ai-field-service-manager' },

  openGraph: {
    title: 'Zion AI Field Service Manager',
    description: 'Optimize field technician scheduling, routing, and job completion with AI-driven dispatch and real-time updates.',
    url: 'https://ziontechgroup.com/zion-ai-field-service-manager',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function Page() {
  return (

    <>


    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Zion AI Field Service Manager", description: "Optimize field technician scheduling, routing, and job completion with AI-driven dispatch and real-time updates.", url: "https://ziontechgroup.com/zion-ai-field-service-manager/}} />

      <h1>Zion AI Field Service Manager</h1>

<ProductPageLayout
  data={{
    title: 'Zion AI Field Service Manager',
    category: 'Operations',
    description:
      'Optimize field technician scheduling, routing, and job completion with AI-driven dispatch and real-time updates.',
    iconEmoji: '📍',
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
        "description": "Deploy Zion AI Field Service Manager to automate routine tasks and reduce manual errors.",
        "icon": "⚡"
      },
      {
        "title": "Scalable Growth",
        "description": "Use Zion AI Field Service Manager to handle increasing complexity without proportional headcount.",
        "icon": "📈"
      }
    ],
    benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
    ctaLabel: 'Get Started with Zion AI Field Service Manager',
  }}
/>
  

    </>

  );
}
