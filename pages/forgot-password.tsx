import React, { useState } from 'react';
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AuthLayout } from '@/layout';
import { toast } from '@/hooks/use-toast';

async function resetPassword(
  email: string,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/auth/forgot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
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
      
      // Clear any previous errors and show success message
      setError(null);
      setMessage(
        'If your email address is registered, you will receive a password reset link shortly.',
      );
      
      // Also show a toast for better user feedback
      toast({
        title: "Reset Link Sent",
        description: "Please check your email for password reset instructions.",
        variant: "default",
      });
    } catch (err: any) {
      Sentry.captureException(err);
      const errorMessage =
        err.message || 'Failed to send reset link. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold">
            Forgot Password
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-green-600">{message}</p>
          )}
          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <p className="mt-4 text-center text-sm">
            Remember your password?{' '}
                          <Link href="/auth/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
