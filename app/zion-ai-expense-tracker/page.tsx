import ProductPageLayout from '@/components/ProductPageLayout';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Zion AI Expense Tracker',
  description:
    'Automate expense capture, categorization, and policy compliance with receipt OCR and smart routing.',
  alternates: { canonical: '/zion-ai-expense-tracker' },

  openGraph: {
    title: 'Zion AI Expense Tracker',
    description: 'Automate expense capture, categorization, and policy compliance with receipt OCR and smart routing.',
    url: 'https://ziontechgroup.com/zion-ai-expense-tracker',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function Page() {
  return (

    <>


    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Zion AI Expense Tracker", description: "Automate expense capture, categorization, and policy compliance with receipt OCR and smart routing.", url: "https://ziontechgroup.com/zion-ai-expense-tracker/"}} />

      <h1>Zion AI Expense Tracker</h1>

<ProductPageLayout
  data={{
    title: 'Zion AI Expense Tracker',
    category: 'Operations',
    description:
      'Automate expense capture, categorization, and policy compliance with receipt OCR and smart routing.',
    iconEmoji: '💳',
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
        "description": "Deploy Zion AI Expense Tracker to automate routine tasks and reduce manual errors.",
        "icon": "⚡"
      },
      {
        "title": "Scalable Growth",
        "description": "Use Zion AI Expense Tracker to handle increasing complexity without proportional headcount.",
        "icon": "📈"
      }
    ],
    benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
    ctaLabel: 'Get Started with Zion AI Expense Tracker',
  }}
/>
  

    </>

  );
}
