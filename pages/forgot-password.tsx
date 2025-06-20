import React, { useState } from 'react';
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

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
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/verify-email`,
      });
      if (error) {
        Sentry.captureException(error);
        const errorMessage = error.message || 'Failed to send reset link. Please try again.';
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setMessage(
          'If your email address is registered, you will receive a password reset link shortly.'
        );
      }
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
        <Alert status="error" mt={4}>
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <p>
        Remember your password? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
