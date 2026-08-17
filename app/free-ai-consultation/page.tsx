import Link from 'next/link';
import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Free AI Consultation | Zion Tech Group',
  description: 'Tailored AI proposal, use-case shortlist, and 90-day roadmap.',
  alternates: { canonical: '/free-ai-consultation/' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageWrapper>
        <h1 className="text-4xl font-bold text-white mb-4">Free AI Consultation</h1>
        <p className="text-xl text-slate-300 mb-10">
          Tailored AI proposal, use-case shortlist, and 90-day roadmap.
        </p>
        <Section>
          <div className="text-center">
            <Link href="/contact/" className="btn-primary">Contact us</Link>
            <Link href="/services/" className="btn-secondary">Services</Link>
          </div>
        </Section>
      </PageWrapper>
    </main>
  );
}