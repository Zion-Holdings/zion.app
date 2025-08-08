import React from 'react';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export default function AuthPage() {
  const router = useRouter();
  const { user, mutate } = useCurrentUser();
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState<'client' | 'talent'>('client');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (user) router.replace('/messages');
  }, [user, router]);

  const login = async () => {
    setLoading(true);
    await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name || (role === 'client' ? 'Acme Client' : 'John Talent'), role }),
    });
    await mutate();
    router.replace('/messages');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-xl font-semibold mb-4">Sign in to Messaging</h1>
        <div className="space-y-3">
          <input className="w-full border rounded-lg p-2" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <select className="w-full border rounded-lg p-2" value={role} onChange={(e) => setRole(e.target.value as any)}>
            <option value="client">Client</option>
            <option value="talent">Talent</option>
          </select>
          <button onClick={login} disabled={loading} className="w-full py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50">{loading ? 'Signing in...' : 'Continue'}</button>
        </div>
      </div>
    </div>
  );
}