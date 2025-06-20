import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { logError } from '@/utils/logError';
import { suggestFix } from '@/utils/suggestFix';

=======
>>>>>>> 811455ae44ee272872c503f5acbc946c1373d39f
import { useAuth } from '@/hooks/useAuth'; // To access user state

const VerifyEmailPage = () => {
  const router = useRouter();
  const { user, isLoading: authLoading, setUser } = useAuth();
  const [message, setMessage] = useState('Verifying your email...');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Supabase handles email verification by parsing the URL fragment when the user is redirected.
    // The onAuthStateChange listener in useAuth should pick up the session.
    // We primarily need to wait for auth to load and then call our backend.

    const handleVerification = async () => {
      // Wait for auth to finish loading and for user object to potentially be populated
      if (authLoading) {
        return; // Wait for useAuth to initialize
      }

      // The user clicking the link from email and being redirected here with a valid token
      // usually means Supabase has already marked the email as verified on its side.
      // The session is typically updated by onAuthStateChange.

      // We need to check if the user object is available, indicating Supabase processed the link.
      // Supabase might also specific 'type' in URL like 'signup' or 'email_change'
      // const params = new URLSearchParams(window.location.search);
      // const type = params.get("type"); // Unused but available for future use

      // If there's a user session, it means Supabase has processed the verification link successfully.
      if (user && user.id) {
        setMessage('Email recognized by authentication provider. Confirming with our records...');
        try {
          // Call your backend to update the emailVerified field in Prisma
          const response = await fetch('/api/auth/confirm-email-verification', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // The backend might infer the user from the session/cookie managed by Supabase Auth Helpers
            // or you might need to send the user ID if your API requires it explicitly.
            // body: JSON.stringify({ userId: user.id })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to confirm email verification with backend.');
          }

          const result = await response.json();
          setMessage(result.message || 'Email successfully verified! Redirecting...');
          setError(null);

          // Update the local user context if the backend sends back updated user details
         if (result.user && setUser) {
            // Assuming result.user is of type UserDetails
           setUser((prevUser: any) => ({...prevUser, ...result.user}));
         }


          // Redirect to login or dashboard after a short delay
          setTimeout(() => {
            router.push('/auth/login');
          }, 3000);

        } catch (err: any) {
          logError(err, { context: 'VerifyEmailPage.handleVerification' });
          const suggestion = await suggestFix(err instanceof Error ? err : new Error(String(err)));
          setError(suggestion);
          setMessage(''); // Clear loading message
        } finally {
          setIsLoading(false);
        }
      } else if (!authLoading) {
        // This block runs if useAuth has loaded but there's no user.
        // This could mean the token is invalid, expired, or already used.
        // Supabase's client might have already handled and cleared such a session.
        setError('Invalid, expired, or already used verification link. Please try logging in or request a new verification email.');
        setMessage('');
        setIsLoading(false);
         // Optional: Redirect to login or a page to request new verification
         setTimeout(() => {
            router.push('/auth/login');
        }, 5000);
      }
    };

    // Supabase often uses a hash fragment for verification tokens.
    // The `onAuthStateChange` in `useAuth` should handle this.
    // We add a listener for hash changes as well, just in case, or if not using Next.js router events for this.
    // However, onAuthStateChange in useAuth is the primary mechanism expected to handle session changes.
    const handleHashChange = () => {
        // This function is mostly a placeholder or for debugging.
        // Supabase client library's onAuthStateChange is expected to react to the hash fragment
        // containing the access token and type when the page loads after email verification link click.
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial call
    handleVerification();

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };

  }, [user, authLoading, router, setUser]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
      <h1>Email Verification</h1>
      {isLoading && <p>{message || 'Processing...'}</p>}
      {!isLoading && error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!isLoading && !error && message && <p style={{ color: 'green' }}>{message}</p>}
      {!isLoading && (
        <button onClick={() => router.push('/auth/login')}>
          Go to Login
        </button>
      )}
    </div>
  );
};

export default VerifyEmailPage;
