import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) setEmail('');
    } catch {
      setStatus('err');
    }
  };

  return (
    <div className="mt-12 border rounded p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900">
      <h3 className="text-2xl font-bold">Sign up to find AI talent now</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-1">Join Zion to access vetted AI engineers and data experts.</p>
      <div className="mt-4 flex gap-3 flex-col md:flex-row">
        <a href="/talent" className="px-5 py-3 rounded bg-indigo-600 text-white text-center">Get started</a>
        <form onSubmit={subscribe} className="flex gap-2">
          <input type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border rounded w-64 bg-white dark:bg-zinc-800" />
          <button type="submit" className="px-4 py-2 rounded border">Subscribe</button>
        </form>
      </div>
      {status === 'ok' && <p className="text-green-600 mt-2">Thanks! Check your inbox.</p>}
      {status === 'err' && <p className="text-red-600 mt-2">Subscription failed. Try again.</p>}
    </div>
  );
}