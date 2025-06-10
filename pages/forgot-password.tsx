import React, { useState } from 'react';
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import { forgotPassword } from '@/services/auth';
import { toast } from '@/hooks/use-toast';
import * as Sentry from '@sentry/nextjs';

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
      await forgotPassword(email);
      setMessage(
        'If your email address is registered, you will receive a password reset link shortly.'
      );
    } catch (err: any) {
      Sentry.captureException(err);
      const errorMessage = err?.response?.data?.message || err.message || 'Failed to send reset link. Please try again.';
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
