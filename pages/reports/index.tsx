import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';

type UpdateEntry = {
  slug: string;
  title: string;
};

export async function getStaticProps() {
  const updatesDir = path.join(process.cwd(), 'pages', 'reports', 'updates');
  let updates: UpdateEntry[] = [];

  try {
    const files = fs.readdirSync(updatesDir).filter((f) => f.endsWith('.tsx'));
    updates = files
      .map((file) => {
        const slug = file.replace(/\.tsx$/, '');
        const title = slug
          .replace(/^update-/, '')
          .replace(/-/g, ': ')
          .replace(/:(?=\s)/g, ':');
        return { slug, title: `Autonomous Update — ${title}` };
      })
      .sort((a, b) => (a.slug < b.slug ? 1 : -1));
  } catch {
    updates = [];
  }

  return {
    props: { updates },
  };
}

export default function ReportsIndex({ updates }: { updates: UpdateEntry[] }) {
  return (
    <>
      <Head>
        <title>Autonomous Reports & Updates</title>
        <meta name="description" content="Browse the latest autonomous system updates and reports." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Reports & Updates
            </h1>
            <p className="text-white/85">Latest activity from our autonomous systems.</p>
          </section>

          <section className="mx-auto max-w-6xl">
            {updates.length === 0 ? (
              <p className="text-white/80">No updates found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {updates.map((u) => (
                  <Link key={u.slug} href={`/reports/updates/${u.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <h3 className="text-lg font-semibold">{u.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <div className="mt-12 text-center">
            <Link href="/" className="text-cyan-300 hover:text-cyan-200">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

