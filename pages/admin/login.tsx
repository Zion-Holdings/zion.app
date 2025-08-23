import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) throw new Error('Invalid credentials');
      router.push('/admin');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Username</label>
          <input className="w-full border rounded px-3 py-2" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white rounded px-3 py-2 hover:bg-indigo-700 disabled:opacity-50">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}