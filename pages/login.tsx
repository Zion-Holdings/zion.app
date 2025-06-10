import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      window.location.href = '/';
    } catch (err: any) {
      Sentry.captureException(err);
      setError(err.message || 'Login failed');
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
