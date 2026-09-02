import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Voice Customer Service | Zion Tech Group',
  description:
    'Automate voice support with AI: reduce wait times, cut support costs, and improve CSAT with Zion Tech Group’s voice AI implementation.',
  alternates: { canonical: '/ai-voice-customer-service/' },
};

const points = [
  '24/7 voice coverage with natural conversation',
  'Automatic CRM logging and follow-up tasks',
  'Integration with telephony and helpdesk tools',
];

export default function AiVoiceCustomerServicePage() {
  return (
    <StandardPage
      title="AI Voice Customer Service"
      subtitle="Automate inbound voice support with AI receptionists and triage agents that handle scheduling, FAQs, and handoffs."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI Voice Customer Service' },
      ]}
      actions={[
        { label: 'Request implementation', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <ul className="max-w-3xl mx-auto space-y-3 text-slate-300">
        {points.map((point) => (
          <li key={point} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            {point}
          </li>
        ))}
      </ul>
    </StandardPage>
  );
}
