import type { Metadata } from 'next';
import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Productized Service Areas | Zion Tech Group',
  description: 'Productized engagement areas with dedicated landing pages and start-your-pilot CTAs. AI implementation, managed IT, cybersecurity, cloud, and more.',
  openGraph: {
    title: 'Productized Service Areas | Zion Tech Group',
    description: 'Productized engagement areas with dedicated landing pages and start-your-pilot CTAs.',
    url: 'https://ziontechgroup.com/service-areas/',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/service-areas/' },
};

const SERVICE_AREAS = [
  { name: 'AI Implementation', href: '/ai-consulting-services', description: 'Proof-of-value AI pilots with workflow integration, measurable ROI, and production-ready delivery.', emoji: '🧠' },
  { name: 'Managed IT & Support', href: '/services/it-managed-it-ops', description: 'Help desk, endpoint management, identity, and operations coverage for growing teams.', emoji: '🖥️' },
  { name: 'Cybersecurity & SOC', href: '/ai-cybersecurity-services', description: 'Threat detection, incident response, and compliance posture aligned to business risk.', emoji: '🔐' },
  { name: 'Cloud Cost Optimization', href: '/ai-first-cloud-cost-optimization', description: 'Rightsizing, waste removal, reserved planning, and FinOps practices that cut spend fast.', emoji: '☁️' },
  { name: 'Change Management', href: '/ai-change-management', description: 'Stakeholder alignment, training, and adoption measurement to make new workflows stick.', emoji: '🔄' },
  { name: 'Customer Success', href: '/ai-customer-success-management', description: 'Health monitoring, adoption measurement, renewal risk alerts, and growth planning.', emoji: '👥' },
  { name: 'Executive Advisory', href: '/ai-executive-advisory', description: 'Board-ready AI and IT strategy, portfolio review, risk governance, and measured investments.', emoji: '👔' },
  { name: 'Enterprise Automation', href: '/ai-automation', description: 'Cross-system workflow automation, observability, incident response, and AI adoption at scale.', emoji: '🤖' },
];

export default function ServiceAreasPage() {
  return (
    <PageTemplate
      title="Productized Service Areas"
      description="Dedicated engagement areas with clear scoping, fixed pricing options, and start-your-pilot CTAs."
      breadcrumbItems={[
        { label: 'Home', href: '/'},
        { label: 'Service Areas', href: '/service-areas'},
      ]}
      layout="hero"
      heroIcon="🎯"
      actions={[
        { label: 'View All Services', href: '/services/', style: 'primary' },
        { label: 'Free AI Audit', href: '/free-ai-readiness-audit/', style: 'secondary' },
      ]}
      showBottomCta={false}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="block glass-card p-6 rounded-xl hover:border-purple-500/40 transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{area.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300">{area.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{area.description}</p>
                  <span className="inline-block mt-2 text-xs text-purple-400 font-medium">Start pilot →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
