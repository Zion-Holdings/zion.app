import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hermes IT Field Technician Sourcing Agent | Zion Tech Group',
  description:
    'Autonomous IT field technician sourcing using Hermes Agent with OSINT recruitment automation. Target IT field engineers in specific regions (e.g., Taubaté/SP, Brazil) with automated candidate discovery and outreach.',
  keywords: [
    'IT field technician sourcing',
    'Hermes Agent',
    'OSINT recruitment',
    'IT recruitment automation',
    'Brazil IT hiring',
    'Talent sourcing agent',
    'autonomous recruitment',
  ],
  openGraph: {
    title: 'Hermes IT Field Technician Sourcing Agent | Zion Tech Group',
    description:
      'Autonomous IT field technician sourcing using Hermes Agent with OSINT recruitment automation. Target IT field engineers in specific regions.',
    url: 'https://ziontechgroup.com/services/hermes-it-field-technician-sourcing/',
    type: 'website',
  },
  alternates: { canonical: '/services/hermes-it-field-technician-sourcing/' },
};

export default function HermesTechnicianSourcingPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Hermes IT Field Technician Sourcing Agent',
          description:
            'Autonomous IT field technician sourcing using Hermes Agent with OSINT recruitment automation for regional IT talent discovery.',
          serviceType: 'IT Recruitment Automation',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@ziontechgroup.com',
              telephone: '+1 (302) 464-0950',
              contactType: 'sales',
            },
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'IT Technician Sourcing Pricing',
            itemListElement: [
              { '@type': 'Offer', name: 'Basic', price: '599', priceCurrency: 'USD' },
              { '@type': 'Offer', name: 'Pro', price: '1499', priceCurrency: 'USD' },
              { '@type': 'Offer', name: 'Enterprise', price: '9999', priceCurrency: 'USD' },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How does the Hermes IT sourcing agent work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our Hermes agent uses OSINT to discover IT field technicians in target regions through LinkedIn, GitHub, professional directories, and local job boards. It scores candidates by skills, experience, and location proximity, then automates personalized outreach with Calendly integration.',
              },
            },
            {
              '@type': 'Question',
              name: 'Which regions do you cover?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We specialize in Brazil (Taubaté/SP and surrounding regions), but can deploy agents for any geographic market with available data sources.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many candidates can you source per month?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Hermes sourcing agent typically discovers 200-500 qualified IT field technicians per month per region, with personalized outreach to 100-200 candidates.',
              },
            },
          ],
        }}
      />
      <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbSchema
            path="/services/hermes-it-field-technician-sourcing"
            title="Hermes IT Field Technician Sourcing Agent"
          />
          <h1 className="text-4xl font-bold mb-6">
            👨‍🔧 Hermes IT Field Technician Sourcing Agent
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Autonomous IT field technician sourcing using{' '}
            <strong className="text-white">Hermes Agent</strong> with OSINT recruitment
            automation. Discover, score, and outreach to IT field engineers in specific
            regions with zero manual effort.
          </p>

          <div className="bg-slate-900 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>OSINT-based candidate discovery via LinkedIn, GitHub, and professional directories</li>
              <li>Regional targeting (specialized in Brazil — Taubaté/SP and surrounding regions)</li>
              <li>Skills-based scoring and experience filtering</li>
              <li>Automated personalized outreach with Calendly integration</li>
              <li>Follow-up sequences with hot-lead detection</li>
              <li>Duplicate prevention and candidate deduplication</li>
              <li>GDPR-compliant candidate data handling</li>
              <li>Integration with your ATS and hiring pipeline</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>Replace manual recruiter sourcing with 24/7 autonomous discovery</li>
              <li>Access passive candidates not on job boards</li>
              <li>Reduce time-to-hire by 60%</li>
              <li>Surface qualified candidates from underserved regions</li>
              <li>Scale sourcing across multiple regions simultaneously</li>
            </ul>
          </div>

          <div className="border border-purple-500 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Basic</h3>
                <p className="text-2xl font-bold mb-2">$599/month</p>
                <p className="text-slate-400 text-sm">1 region, 100 candidates/month</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
                <h3 className="font-semibold mb-2">Pro</h3>
                <p className="text-2xl font-bold mb-2">$1,499/month</p>
                <p className="text-slate-400 text-sm">3 regions, 500 candidates/month</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Enterprise</h3>
                <p className="text-2xl font-bold mb-2">Custom</p>
                <p className="text-slate-400 text-sm">Unlimited regions, custom workflows</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <Link href="/services/" className="text-purple-300 hover:text-purple-200">
              ← Back to All Services
            </Link>
            <Link href="/hermes-agents/" className="text-slate-400 hover:text-slate-300">
              Hermes Agents Platform →
            </Link>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg shadow-purple-500/25"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
