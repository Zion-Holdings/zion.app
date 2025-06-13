import React, { useState } from 'react';
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import { Alert, AlertDescription } from '@chakra-ui/react';
import { toast } from '@/hooks/use-toast';

async function resetPassword(email: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/auth/forgot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: data.error || data.message };
    }
    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: err.message };
  }
}

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null); // Added error state
  const [loading, setLoading] = useState(false); // Added loading state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(null);

    try {
      const { ok, error } = await resetPassword(email);
      if (!ok) throw new Error(error || 'Reset failed');
      setMessage(
        'If your email address is registered, you will receive a password reset link shortly.'
      );
    } catch (err: any) {
      Sentry.captureException(err);
      const errorMessage = err.message || 'Failed to send reset link. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading} // Disable input when loading
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && (
        <Alert.Root status="error" mt={4}>
          <Alert.Indicator />
          <Alert.Content>
            <AlertDescription>{error}</AlertDescription>
          </Alert.Content>
        </Alert.Root>
      )}
      <p>
        Remember your password? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
