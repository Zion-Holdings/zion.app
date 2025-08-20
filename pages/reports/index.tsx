import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Head from 'next/head';
import type { GetStaticProps } from 'next';

type UpdateEntry = {
  slug: string;
  title: string;
  date: string;
};

type ReportsIndexProps = {
  updates: UpdateEntry[];
};

export default function ReportsIndexPage({ updates }: ReportsIndexProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>Reports & Updates — Zion Tech Group</title>
        <meta name="description" content="Explore platform reports, analytics, and the latest autonomous updates." />
      </Head>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Reports & Updates
          </h1>
          <p className="text-white/85 max-w-3xl mx-auto">
            Performance reports, platform analytics, and the latest autonomous updates published by our intelligent systems.
          </p>
        </section>

        <section className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-wide text-white/90 mb-6">Latest Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((u) => (
              <Link key={u.slug} href={`/reports/updates/${u.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <p className="mt-1 text-sm text-white/75">{u.date}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl mt-12">
          <h2 className="text-xl font-semibold text-white/90 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg">About</Link>
            <Link href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg">Services</Link>
            <Link href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg">Blog</Link>
            <Link href="/resources" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg">Resources</Link>
            <Link href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg">Case Studies</Link>
            <Link href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg">Contact</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ReportsIndexProps> = async () => {
  const updatesDir = path.join(process.cwd(), 'pages', 'reports', 'updates');
  let updates: UpdateEntry[] = [];

  try {
    const files = fs.readdirSync(updatesDir).filter((f) => f.endsWith('.tsx'));
    updates = files
      .map((filename) => {
        const slug = filename.replace(/\.tsx$/, '');
        const match = slug.match(/update-(\d{4})-(\d{2})-(\d{2})-(\d{4})/);
        const iso = match ? `${match[1]}-${match[2]}-${match[3]} ${match[4]}` : slug;
        const display = match ? `Update — ${match[1]}-${match[2]}-${match[3]} ${match[4]}` : slug;
        return { slug, title: display, date: iso };
      })
      .sort((a, b) => (a.slug < b.slug ? 1 : -1))
      .slice(0, 12);
  } catch {
    updates = [];
  }

  return { props: { updates } };
};

