import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';
import { toast } from 'react-hot-toast';

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }
      window.location.href = '/';
    } catch (err: any) {
      Sentry.captureException(err);
      const msg = err?.message || 'Login failed';
      toast.error(msg);
      setError(msg);
    }
  };

  return (
    <div>
      <h1>Welcome back</h1>
      {error && <div role="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
