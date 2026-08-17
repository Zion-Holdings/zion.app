import Link from 'next/link';
import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: "API Management Services | Zion Tech Group",
  description: "API platforms — gateway management, API design, developer portals, and API monetization",
  alternates: { canonical: '/api-services/' },
};

// Redirect to the canonical category page
export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <PageWrapper centered>
        <Section>
          <div className="text-center">
            <p className="text-slate-400 text-lg mb-4">Redirecting to API Management Services...</p>
            <Link href="/services/?category=api" className="text-purple-400 hover:text-purple-300 underline">
              Click here if not redirected
            </Link>
            <script dangerouslySetInnerHTML={{
              __html: `if(window.location.pathname === '/api-services/') window.location.href='/services/?category=api';`
            }} />
          </div>
        </Section>
      </PageWrapper>
    </main>
  );
}