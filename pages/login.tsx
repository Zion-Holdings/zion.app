import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth/AuthProvider';

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
      const { error: loginError } = await login(email, password);
      if (loginError) {
        throw new Error(loginError);
      }
      router.push('/');
    } catch (err: any) {
      Sentry.captureException(err);
      toast.error(err.message);
      setError(err.message);
    }
  };

  return (
    <div style={{ zIndex: 1000 }}>
      <h1>Welcome back</h1>
      {error && <div role="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
