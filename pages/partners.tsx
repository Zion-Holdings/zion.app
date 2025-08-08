import { useEffect, useMemo, useState } from 'react';

function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin;
  return 'https://ziontechgroup.com';
}

export default function PartnersPage() {
  const [name, setName] = useState('');
  const [niche, setNiche] = useState('');
  const [socials, setSocials] = useState('');
  const [payout, setPayout] = useState('paypal');
  const [desiredCode, setDesiredCode] = useState('aihub');
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');

  const previewLink = useMemo(() => `${getBaseUrl()}/?partner=${encodeURIComponent(desiredCode || '')}`, [desiredCode]);

  async function submit() {
    setError('');
    setStatus('');
    try {
      const res = await fetch('/api/partners/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, niche, socials, payout_method: payout, desired_code: desiredCode }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setStatus(`Submitted. Your code: ${json.code}. Status: ${json.status}`);
    } catch (e: any) {
      setError(e?.message || 'Error');
    }
  }

  return (
    <div className="space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Zion AI Partners</h1>
        <p className="text-gray-600 dark:text-gray-300">Invite your AI audience to earn & help them get hired.</p>
        <a href="/brand-kit.txt" className="inline-block px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Download Influencer Brand Kit</a>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-3">Affiliate Registration</h2>
          <div className="space-y-3">
            <input className="w-full border rounded px-3 py-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
            <input className="w-full border rounded px-3 py-2" placeholder="Niche (e.g., AI career, ML engineering)" value={niche} onChange={e=>setNiche(e.target.value)} />
            <input className="w-full border rounded px-3 py-2" placeholder="Socials (links)" value={socials} onChange={e=>setSocials(e.target.value)} />
            <div className="flex gap-3 items-center">
              <label className="min-w-32">Payout Method</label>
              <select className="border rounded px-3 py-2" value={payout} onChange={e=>setPayout(e.target.value)}>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
                <option value="crypto">USDC</option>
              </select>
            </div>
            <input className="w-full border rounded px-3 py-2" placeholder="Desired code (e.g., aihub)" value={desiredCode} onChange={e=>setDesiredCode(e.target.value)} />
            <button onClick={submit} className="px-4 py-2 rounded bg-blue-600 text-white">Submit</button>
            {status && <p className="text-green-600">{status}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-3">Referral Link Generator</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Your branded link:</p>
          <div className="mt-2 p-3 rounded bg-gray-50 dark:bg-gray-900 break-words">{previewLink}</div>
        </div>
      </section>

      <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-3">Leaderboard</h2>
        <Leaderboard />
      </section>
    </div>
  );
}

function Leaderboard() {
  const [leaders, setLeaders] = useState<{code: string; profile_completions: number}[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/partners/leaderboard');
        const json = await res.json();
        if (json?.leaders) setLeaders(json.leaders);
      } catch {}
    })();
  }, []);
  return (
    <ol className="list-decimal pl-6 space-y-1">
      {leaders.map((l, i) => (
        <li key={l.code}>
          <span className="font-medium">{l.code}</span> — {l.profile_completions} profile completions
          {i === 0 && <span className="ml-2 inline-block text-xs px-2 py-0.5 rounded bg-yellow-200 text-yellow-900">Top Badge</span>}
        </li>
      ))}
      {leaders.length === 0 && <li className="list-none text-gray-500">No data yet</li>}
    </ol>
  );
}