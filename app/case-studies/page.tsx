import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Customer success stories and implementation case studies from Zion Tech Group.',
  alternates: { canonical: '/case-studies/' },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <p className="mt-4 text-slate-300">Real outcomes from our AI and IT engagements.</p>
        <div className="mt-8">
          <a href="/contact/" className="btn-primary">Start Your Project</a>
        </div>
      </main>
    </div>
  );
}
