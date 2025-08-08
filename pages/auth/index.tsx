import { useState } from 'react';
import Router from 'next/router';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, code })
    });
    if (res.ok) {
      Router.push('/admin/ipo-portal');
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Login failed');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 border p-6 rounded-lg bg-white dark:bg-gray-900">
        <h1 className="text-xl font-semibold">Zion Secure Access</h1>
        <input className="w-full border px-3 py-2 rounded" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border px-3 py-2 rounded" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="w-full border px-3 py-2 rounded" placeholder="2FA Code" value={code} onChange={(e) => setCode(e.target.value)} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded">Sign In</button>
      </form>
    </div>
  );
}