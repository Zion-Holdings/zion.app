import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

// Ensure these are set in your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Check if Supabase URL and Anon Key are provided
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please check your environment variables.');
  // You could throw an error here or handle it gracefully depending on your application's needs
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const VerifyEmailPage = () => {
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('Verifying your email...');
  const navigate = useNavigate();

  useEffect(() => {
    const confirmVerification = async () => {
      try {
        // Supabase client automatically handles session from URL fragment or cookie after redirect
        // We need to ensure a session is active, which implies Supabase confirmed the email.
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error('Supabase getSession error:', sessionError);
          setStatus('error');
          setMessage(sessionError.message || 'Verification failed: Could not retrieve session.');
          return;
        }

        if (!session) {
          // This might happen if the user navigates directly to this page without a valid Supabase token
          // from email link, or if the token in the URL was already processed and cookies not set yet,
          // or if cookies are blocked/not sent.
          // Supabase's onAuthStateChange might be more robust here if direct getSession fails initially.
          // For now, following the provided structure.
          setStatus('error');
          setMessage('Verification failed: No active session. Please ensure you clicked the link from your email, or try logging in.');
          return;
        }

        // User is authenticated with Supabase, now update our backend
        const response = await fetch('/api/auth/confirm-email-verification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Supabase client on the browser typically uses cookies for auth.
            // The browser should send the auth cookie (e.g., sb-access-token) automatically.
            // If it were a Bearer token, you'd get it from session.access_token and add:
            // 'Authorization': `Bearer ${session.access_token}`,
          },
        });

        const responseData = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(responseData.message || 'Email successfully verified! Redirecting to login...');
          setTimeout(() => navigate('/login'), 3000);
        } else {
          setStatus('error');
          setMessage(responseData.message || 'Failed to finalize email verification in our system. Please try again or contact support.');
        }
      } catch (error: any) {
        console.error('Verification page error:', error);
        setStatus('error');
        setMessage(error.message || 'An unexpected error occurred during verification.');
      }
    };

    // Handle errors in URL hash from Supabase redirect
    if (typeof window !== 'undefined' && window.location.hash.includes('error_description')) {
        const params = new URLSearchParams(window.location.hash.substring(1)); // remove #
        const errorDescription = params.get('error_description');
        console.error('Error from Supabase redirect:', errorDescription);
        setMessage(`Verification failed: ${errorDescription}`);
        setStatus('error');
    } else {
        // Attempt to confirm verification.
        // A small delay can sometimes help ensure the Supabase client has processed any URL hash tokens.
        const timer = setTimeout(() => {
            confirmVerification();
        }, 500);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }

  }, [navigate]);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Email Verification Status</h1>
      <div style={{ margin: '20px auto', padding: '20px', border: '1px solid #eee', borderRadius: '8px', maxWidth: '400px' }}>
        <p style={{ fontSize: '1.1em' }}>{message}</p>
        {status === 'verifying' && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            {/* You can replace this with a proper spinner component */}
            <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '30px', height: '30px', animation: 'spin 1s linear infinite' }}></div>
            <p style={{ marginLeft: '10px' }}>Loading...</p>
          </div>
        )}
        {status === 'success' && (
          <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>✅ Email Verified!</p>
        )}
        {status === 'error' && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ color: 'red', fontWeight: 'bold' }}>❌ Verification Failed</p>
            <button
              onClick={() => navigate('/login')}
              style={{ marginTop: '10px', padding: '10px 15px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
      {/* Basic CSS for spinner animation */}
      {/* <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style> */}
    </div>
  );
};

export default VerifyEmailPage;
