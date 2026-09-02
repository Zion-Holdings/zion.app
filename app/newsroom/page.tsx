import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsroom & Social Impact | Zion Tech Group',
  description:
    'Zion Tech Group newsroom: AI/IT insights, product updates, and social impact programs.',
  alternates: { canonical: '/newsroom/' },
};

import NewsroomTracker from '@/components/NewsroomTracker';

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Newsroom & Social Impact</h1>
        <p className="mt-2 text-slate-300">
          Updates on AI services, IT programs, and community initiatives.
        </p>
        <div className="mt-8">
          <NewsroomTracker />
        </div>
      </div>
    </div>
  );
}
