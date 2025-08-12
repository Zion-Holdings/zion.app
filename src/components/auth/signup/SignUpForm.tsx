import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/client'; // Assuming supabase client is configured
import { logErrorToProduction, logInfo } from '@/utils/productionLogger'; // Assuming logger utility

interface SignUpFormProps {
  onSignInClick: () => void; // Function to switch back to Sign In view
}

export function SignUpForm({ onSignInClick }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        // Options for email redirect, if needed for verification flow
        // options: {
        //   emailRedirectTo: `${window.location.origin}/auth/callback`,
        // },
      });

      if (signUpError) {
        logErrorToProduction('Supabase sign-up error:', { data: signUpError });
        setError(signUpError.message || "An error occurred during sign up.");
      } else if (data.user) {
        logInfo('Supabase sign-up successful, user pending confirmation:', { data: data.user });
        // Check if user needs confirmation
        const firstIdentity = data.user.identities?.[0];
        if (data.user.identities && data.user.identities.length > 0 && firstIdentity && !firstIdentity.identity_data?.email_verified && !data.user.email_confirmed_at) {
           setIsSuccess(true);
           setError("Account created! Please check your email to verify your account before logging in.");
        } else {
           // This case might happen if auto-confirmation is on or user already existed but unconfirmed
           // For simplicity in the modal, we'll treat it as needing verification.
           setIsSuccess(true);
           setError("Account created! If you don't see a verification email, please check your spam folder or try signing in.");
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        // Fallback, should ideally be covered by signUpError
        logErrorToProduction('Supabase sign-up returned no error but no user or session.');
        setError("Sign up failed due to an unknown error. Please try again.");
      }
    } catch (catchedError: any) {
      logErrorToProduction('Exception during Supabase sign-up:', { data: catchedError });
      setError(catchedError.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      {error && (
        <div className={`p-3 rounded-md text-sm ${isSuccess ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-600'}`}>
          {error}
        </div>
      )}

      {!isSuccess && (
        <>
          <div className="space-y-1">
            <label htmlFor="signup-email" className="text-sm font-medium text-zion-slate-light">
              Email
            </label>
            <Input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="bg-zion-blue-light border-zion-blue-light focus:ring-zion-cyan text-white"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="signup-password" className="text-sm font-medium text-zion-slate-light">
              Password
            </label>
            <Input
              id="signup-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="bg-zion-blue-light border-zion-blue-light focus:ring-zion-cyan text-white"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="signup-confirm-password" className="text-sm font-medium text-zion-slate-light">
              Confirm Password
            </label>
            <Input
              id="signup-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={isLoading}
              className="bg-zion-blue-light border-zion-blue-light focus:ring-zion-cyan text-white"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-black" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
        </>
      )}

      <div className="mt-4 text-center text-sm">
        {/* This button is styled to look like a link */}
        <button
            type="button"
            onClick={onSignInClick}
            className="font-medium text-zion-cyan hover:text-zion-cyan-light"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#0af' }} // Re-apply inline style for consistency
        >
          Already have an account? Sign In
        </button>
      </div>
    </form>
  );
}
