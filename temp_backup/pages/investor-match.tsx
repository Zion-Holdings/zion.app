import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';

type Investor = {
  name: string;
  website: string;
  contact?: string;
  relevance_score: number;
  why_fit: string;
  notable_investments: string[];
  location_focus?: string[];
  stages?: string[];
  type?: string;
};

export default function InvestorMatchPage() {
  const [session, setSession] = useState<boolean>(false); // TODO: replace with real auth check

  const [startupName, setStartupName] = useState('');
  const [industry, setIndustry] = useState('AI Marketplaces');
  const [roundType, setRoundType] = useState('Seed');
  const [teamSize, setTeamSize] = useState('');
  const [pitchSummary, setPitchSummary] = useState('');
  const [deckOrWebsite, setDeckOrWebsite] = useState('');
  const [location, setLocation] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [investors, setInvestors] = useState<Investor[]>([]);

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Mock session check
    fetch('/api/auth-session')
      .then((r) => r.json())
      .then((d) => setSession(Boolean(d?.authenticated)))
      .catch(() => setSession(false));

    try {
      const fav = JSON.parse(localStorage.getItem('investorFavorites') || '[]');
      if (Array.isArray(fav)) setFavorites(fav);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('investorFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const isFormValid = useMemo(() => {
    return startupName && industry && roundType && pitchSummary;
  }, [startupName, industry, roundType, pitchSummary]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setError(null);
    setInvestors([]);
    try {
      const res = await fetch('/api/investor-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ startupName, industry, roundType, teamSize, pitchSummary, deckOrWebsite, location }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setInvestors(data.investors || []);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  };

  const generateEmail = async (inv: Investor) => {
    try {
      const res = await fetch('/api/generate-intro-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          startupName,
          investorName: inv.name,
          investorType: inv.type || 'Investor',
          highlights: [industry, roundType, teamSize ? `${teamSize} FTE` : ''],
          pitchSummary,
          website: deckOrWebsite,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      const blob = new Blob([`Subject: ${data.subject}\n\n${data.body_markdown}`], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `intro-${inv.name.replace(/\s+/g, '-').toLowerCase()}.md`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      alert(e.message || 'Failed to generate email');
    }
  };

  return (
    <EnhancedLayout>
      <Head>
        <title>Investor Match – Zion</title>
        <meta name="description" content="GPT-based investor matchmaking for startups" />
      </Head>
      {!session ? (
        <div className="max-w-2xl mx-auto p-6 border rounded-xl">
          <h1 className="text-2xl font-semibold mb-2">Founder profile required</h1>
          <p className="text-sm opacity-80">Please sign in to access Investor Match. Investor contact details are protected behind a privacy wall.</p>
          <div className="mt-4">
            <a className="inline-flex items-center px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black" href="/auth">Sign in</a>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          <section className="p-6 border rounded-2xl bg-white/60 dark:bg-white/5">
            <h1 className="text-2xl font-semibold">Investor Match</h1>
            <p className="text-sm opacity-70 mb-4">Find ideal VCs, angels, and funds by scope, location, and stage.</p>
            <form onSubmit={handleSubmit} className="grid gap-3">
              <div>
                <label className="block text-sm mb-1">Startup Name</label>
                <input className="w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20" value={startupName} onChange={(e) => setStartupName(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm mb-1">Industry</label>
                <input className="w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="AI Marketplaces" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1">Round Type</label>
                  <select className="w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20" value={roundType} onChange={(e) => setRoundType(e.target.value)}>
                    <option>Pre-seed</option>
                    <option>Seed</option>
                    <option>Series A</option>
                    <option>Token Sale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Team size</label>
                  <input className="w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20" value={teamSize} onChange={(e) => setTeamSize(e.target.value)} placeholder="e.g., 6" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Location</label>
                <input className="w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, Country" />
              </div>
              <div>
                <label className="block text-sm mb-1">Pitch summary</label>
                <textarea className="w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20 min-h-[120px]" value={pitchSummary} onChange={(e) => setPitchSummary(e.target.value)} placeholder="One-liner + traction, market, differentiator" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Deck or website</label>
                <input className="w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20" value={deckOrWebsite} onChange={(e) => setDeckOrWebsite(e.target.value)} placeholder="https://..." />
              </div>
              <button disabled={!isFormValid || loading} className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-black text-white disabled:opacity-50 dark:bg-white dark:text-black">
                {loading ? 'Matching…' : 'Find Matches'}
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </form>
          </section>

          <section className="space-y-4">
            {favorites.length > 0 && (
              <div className="p-4 border rounded-xl bg-yellow-50 dark:bg-yellow-900/20 text-sm">
                <div className="font-medium mb-1">Saved to dashboard</div>
                <div className="flex flex-wrap gap-2">
                  {favorites.map((f) => (
                    <span key={f} className="px-2 py-0.5 rounded-md border">{f}</span>
                  ))}
                </div>
              </div>
            )}
            {investors.length === 0 && !loading && (
              <div className="p-6 border rounded-2xl text-sm opacity-70">No results yet. Submit the form to see recommendations.</div>
            )}
            {investors.map((inv) => (
              <article key={inv.name} className="p-5 border rounded-2xl bg-white/60 dark:bg-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{inv.name}</h3>
                    <div className="text-sm opacity-70 flex gap-2 flex-wrap">
                      {inv.type && <span className="px-2 py-0.5 rounded-md border">{inv.type}</span>}
                      {inv.stages?.length ? <span className="px-2 py-0.5 rounded-md border">{inv.stages.join(', ')}</span> : null}
                      <span className="px-2 py-0.5 rounded-md border">Score: {Math.round(inv.relevance_score)}</span>
                    </div>
                  </div>
                  <button onClick={() => toggleFavorite(inv.name)} className={`px-3 py-1 rounded-md border text-sm ${favorites.includes(inv.name) ? 'bg-yellow-100 dark:bg-yellow-900/30' : ''}`}>
                    {favorites.includes(inv.name) ? 'Saved' : 'Save'}
                  </button>
                </div>
                <p className="text-sm mt-2">{inv.why_fit}</p>
                {inv.notable_investments?.length ? (
                  <p className="text-sm mt-2 opacity-80">Notable investments: {inv.notable_investments.join(', ')}</p>
                ) : null}
                <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
                  <a className="underline" href={inv.website} target="_blank" rel="noreferrer">Website</a>
                  {inv.contact ? (
                    <span className="opacity-70">Contact hidden — available via intro</span>
                  ) : (
                    <span className="opacity-70">Contact not publicly listed</span>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => alert('Intro request sent (mock).')} className="px-3 py-2 rounded-md border text-sm">Contact via Intro</button>
                  <button onClick={() => generateEmail(inv)} className="px-3 py-2 rounded-md border text-sm">Generate Custom Pitch Email</button>
                </div>
              </article>
            ))}
          </section>
        </div>
      )}
    </EnhancedLayout>
  );
}